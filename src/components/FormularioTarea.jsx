// import Button  from 'bootstrap';
// import Form from 'react-bootstrap/Form';
import {Form, Button} from 'react-bootstrap'
const FormularioTarea = () => {
    return (
    <Form>
      <Form.Group className="mb-3 d-flex">
        <Form.Control type="text" placeholder="Ingresa una tarea" />
        <Button variant="info" >Enviar</Button>
      </Form.Group>
    </Form>
  );
};

export default FormularioTarea;
