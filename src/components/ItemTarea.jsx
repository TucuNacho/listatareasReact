import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { editarTarea, leerTarea } from "../helpers/queries";
const ItemTarea = ({borrarTarea, tarea ,setTareas}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        {tarea.inputTarea}{" "}
        <div>

        <Button variant="danger" onClick={() => borrarTarea(tarea._id)}>
          🗑️
        </Button>{" "}
      <Button
        variant="warning"
        onClick={() => {
          Swal.fire({
            title: "Editar tarea",
            input: "text",
            inputLabel: "Modifica la tarea",
            inputValue: tarea.inputTarea, // mostramos el texto actual
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            inputValidator: (value) => {
              if (!value || value.trim().length < 2) {
                return "La tarea debe tener al menos 2 caracteres";
              }
            },
          }).then(async (result) => {
            if (result.isConfirmed) {
              const respuesta = await editarTarea(
                { inputTarea: result.value },
                tarea._id
              );

              if (respuesta.status === 200) {
                Swal.fire({
                  title: "Editado!",
                  text: "La tarea fue actualizada correctamente",
                  icon: "success",
                });

                const respuestaTareas = await leerTarea();
                const tareasActualizadas = await respuestaTareas.json();
                setTareas(tareasActualizadas);
              } else {
                Swal.fire({
                  title: "Error!",
                  text: "No se pudo editar la tarea",
                  icon: "error",
                });
              }
            }
          });
        }}
      >
        📝
      </Button>
        </div>

      </ListGroup.Item>

    </div>
  );
};

export default ItemTarea;
