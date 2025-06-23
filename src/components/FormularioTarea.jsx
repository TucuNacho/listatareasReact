// import Button  from 'bootstrap';
// import Form from 'react-bootstrap/Form';
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const tareaLocalStorage = JSON.parse(localStorage.getItem("ListaTareas")) || []
  const [tareas, setTareas] = useState(tareaLocalStorage);

  useEffect(()=>{
    console.log("desde useEffect");
    localStorage.setItem("ListaTareas", JSON.stringify(tareas))
  },[tareas])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aqui deberia guardar la tarea");
    //tomar la tarea que esta en el state de tareas y guardar en el state tareas (array)
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombretarea) => {
    const tareasFiltradas= tareas.filter((item)=> item !== nombretarea)
    setTareas(tareasFiltradas)
  };
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button type="submit" variant="info">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
