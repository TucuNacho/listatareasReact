import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";
const ListaTareas = ({ borrarTarea, tareas }) => {
  console.log("Tareas completas:", JSON.stringify(tareas, null, 2)); // 👈 Esto mostrará la estructura completa

  return (
    <ListGroup>
      {tareas.map((item) => {
        console.log("Renderizando item:", item); // 👈 Y esto también
        console.log("nombretarea será:", item.inputTarea); // 👈 Y esto
        return (
          <ItemTarea
            key={item._id}
            id={item._id}
            nombretarea={item.inputTarea}
            borrarTarea={borrarTarea}
          />
        );
      })}
    </ListGroup>
  );
};

export default ListaTareas;
