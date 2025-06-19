import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";
const ListaTareas = ({ tareas, borrarTarea }) => {
  return (
    <div>
      <ListGroup>
        {tareas.map((item, indice) => (
          <ItemTarea
            key={indice}
            nombretarea={item}
            borrarTarea={borrarTarea}
          ></ItemTarea>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
