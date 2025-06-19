import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ nombretarea, indice}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between"> {indice+1}. { nombretarea}<Button variant="danger">Borrar</Button>{" "}
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
