import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { editarTarea, leerTarea } from "../helpers/queries";
const ItemTarea = ({ borrarTarea, tarea, setTareas }) => {
  return (
    <div>
      <div className="todo-item-colorful d-flex justify-content-between">
        {tarea.inputTarea}{" "}
        <div>
          <Button
            className="btn-delete-colorful mb-1"
            onClick={() => borrarTarea(tarea._id)}
          >
            🗑️
          </Button>{" "}
          <Button
            className="btn-edit-colorful"
            variant="warning"
            onClick={() => {
              Swal.fire({
                title: "Editar tarea",
                input: "text",
                inputLabel: "Modifica la tarea",
                inputValue: tarea.inputTarea, // mostramos el texto actual
                showCancelButton: true,
                confirmButtonText: "Guardar💾",
                cancelButtonText: "Cancelar✖️",
                confirmButtonColor: "#ff9a9e",
                cancelButtonColor: "#ff416c",
                background: "#fff",
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
                      confirmButtonColor: "#ff9a9e",
                    });

                    const respuestaTareas = await leerTarea();
                    const tareasActualizadas = await respuestaTareas.json();
                    setTareas(tareasActualizadas);
                  } else {
                    Swal.fire({
                      title: "Error!",
                      text: "No se pudo editar la tarea",
                      icon: "error",
                      confirmButtonColor: "#ff416c",
                    });
                  }
                }
              });
            }}
          >
            📝
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemTarea;
