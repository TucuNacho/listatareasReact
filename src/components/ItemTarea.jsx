import { Button, ListGroup } from "react-bootstrap";
import Swal from 'sweetalert2'
import { editarTarea } from "../helpers/queries";
const ItemTarea = ({ nombretarea, borrarTarea, id,}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">{ nombretarea} <Button variant="danger" onClick={()=> borrarTarea(id)}>🗑️</Button>{" "}
      </ListGroup.Item>
      {/* <ListGroup.Item className="d-flex justify-content-between">{ nombretarea} <Button variant="info" onClick={()=> set(id)}>✍🏻</Button>{" "}
      </ListGroup.Item> */}
    </div>
  );
};

export default ItemTarea;
