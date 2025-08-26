import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";
import { leerTarea } from "../helpers/queries";
import { useEffect, useState } from "react";
const ListaTareas = ({ borrarTarea }) => {
  const [listaTareas, setListaTareas] = useState([]);

  useEffect(() => {
    obtenerTarea();
  }, []);

  const obtenerTarea = async () => {
    const respuesta = await leerTarea();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log("Datos recibidos:", datos)
      setListaTareas(datos);
    } else {
      console.info("Error al leer la tarea");
    }
  };
  return (
      <ListGroup>
        {listaTareas.map((item) => (
          <ItemTarea
            key={item._id}
            nombretarea={item.inputTarea}
            borrarTarea={borrarTarea}
          ></ItemTarea>
        ))}
      </ListGroup>
  );
};

export default ListaTareas;
