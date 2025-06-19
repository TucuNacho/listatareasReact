import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea";
const ListaTareas = ({tareas}) => {
  return (
    <div>
      <ListGroup>
        {
          tareas.map((item, indice)=><ItemTarea key={indice} nombretarea={item} indice={indice}></ItemTarea>)
        }

      </ListGroup>
    </div>
  );
};

export default ListaTareas;
