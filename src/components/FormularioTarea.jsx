import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { crearTarea, leerTarea, borrarTareas } from "../helpers/queries";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  const [tareas, setTareas] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const tareas = async () => {
      const respuesta = await leerTarea();
      const datos = await respuesta.json();
      setTareas(datos);
    };
    tareas();
  }, []);
  const actualizarTarea= async () => {
    const respuesta = await leerTarea()
    const datos = await respuesta.json()
    setTareas(datos)
  }
  const agregarTareas = async (data) => {
    const respuesta = await crearTarea(data);
    if (respuesta.status === 201) {
      await actualizarTarea()
      reset();
    }
  };
  const borrarTarea = async (id) => {
    const respuesta = await borrarTareas(id);
    if (respuesta.status === 200) {
      const tareasFiltradas = tareas.filter((item) => item._id !== id);
      setTareas(tareasFiltradas);
      await actualizarTarea()
    }
  };


  return (
    <section>
      <Form onSubmit={handleSubmit(agregarTareas)}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            {...register("inputTarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 3,
                message: "la tarea debe contener al menos 3 caracteres",
              },
              maxLength: {
                value: 50,
                message:
                  "la tarea solo debe contener 50 caracteres como maximo",
              },
            })}
          />
          <Button type="submit" variant="info" className="ms-3">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">
          {errors.inputTarea?.message}
        </Form.Text>
      </Form>
      <ListaTareas
        tareas={tareas}
        borrarTarea={borrarTarea}
        setTarea={setTareas}
      ></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
