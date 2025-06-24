import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  const tareaLocalStorage =
    JSON.parse(localStorage.getItem("ListaTareas")) || [];
  const [tareas, setTareas] = useState(tareaLocalStorage);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log("desde useEffect");
    localStorage.setItem("ListaTareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTareas = (data) => {
    console.log("aqui deberia guardar la tarea");
    console.log(data.inputTarea);

    //tomar la tarea que esta en el state de tareas y guardar en el state tareas (array)
    setTareas([...tareas, data.inputTarea]);
    reset()
  };

  const borrarTarea = (nombretarea) => {
    const tareasFiltradas = tareas.filter((item) => item !== nombretarea);
    setTareas(tareasFiltradas);
  };
  return (
    <section>
      <Form onSubmit={handleSubmit(agregarTareas)}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTareas(e.target.value)}
            {...register('inputTarea', {
              required:'La tarea es un dato obligatorio',
              minLength:{
                value:3,
                message: 'la tarea debe contener al menos 3 caracteres'
              },
              maxLength:{
                value:50,
                message:'la tarea solo debe contener 50 caracteres como maximo'
              }
            })}
          />
          <Button type="submit" variant="info">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-danger">{errors.inputTarea?.message}</Form.Text>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
