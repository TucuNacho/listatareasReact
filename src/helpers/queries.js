const url = import.meta.env.VITE_API_TAREAS


export const crearTarea= async (nuevaTarea) => {
    try {
        const respuesta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(nuevaTarea)
        })
        return respuesta
    } catch (error) {
        console.error(error);
        return null
    }
}

export const leerTarea = async () => {
    try {
        const respuesta = await fetch(url)
        return respuesta
    } catch (error) {
        console.error(error);
        return null
    }

}
