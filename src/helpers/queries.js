const url = import.meta.env.VITE_API_TAREAS;

export const crearTarea = async (nuevaTarea) => {
  try {
    const respuesta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaTarea),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const leerTarea = async () => {
  try {
    const respuesta = await fetch(url);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const borrarTareas = async (id) => {
  try {
    const respuesta = await fetch(url + `/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editarTarea = async (tareaEditada, id) => {
  try {
    const respuesta = await fetch(url + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tareaEditada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const obtenerProductoPorId = async (id)=>{
    try {
        const respuesta = await fetch(url + `/${id}`)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}
