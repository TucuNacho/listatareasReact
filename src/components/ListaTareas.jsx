import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";
const ListaTareas = ({ borrarTarea, tareas, setTarea }) => {
  return (
    <ListGroup>
      {tareas.map((item) => {
        return (
          <ItemTarea
            key={item._id}
            tarea={item}
            borrarTarea={borrarTarea}
            setTareas={setTarea}
          />
        );
      })}
    </ListGroup>
  );
};

export default ListaTareas;
