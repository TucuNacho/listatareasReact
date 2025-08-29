import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTarea from "./components/FormularioTarea";
import { useState } from "react";
function App() {
  const [tarea, setTareaid] = useState(null)
  return (
    <>
      <main className="container my-4">
        <h1 className="text-center">Lista de tareas</h1>

        <FormularioTarea titulo={tarea ? "Editar tarea" : "Agregar tarea"}
        tarea={tarea}
        setTarea={setTareaid}
        />
      </main>
      <footer className="bg-dark text-light text-center py-3">
        Todos los derechos reservados
      </footer>
    </>
  );
}

export default App;
