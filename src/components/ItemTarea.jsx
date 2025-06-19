import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombretarea, borrarTarea}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">{ nombretarea} <Button variant="danger" onClick={()=> borrarTarea(nombretarea)}>Borrar</Button>{" "}
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
