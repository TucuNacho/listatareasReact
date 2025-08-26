import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombretarea, borrarTarea, id}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">{ nombretarea} <Button variant="danger" onClick={()=> borrarTarea(id)}>Borrar</Button>{" "}
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
