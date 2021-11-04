import  axios from "axios"

const URL = "https://servicios.inclubtest.online:2053/api"


const obtenerEstado = async(busqueda = "") => {
    try {
        let { data } = await axios.get(`${URL}/suscription/all/state/${busqueda}`)
        return data.objModel 
    } catch (error) {
        throw error
    }
}

const obtenerUsuarios = async() => {
    try {
        let { data } = await axios.get(`${URL}/suscription`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }
}

export {
    obtenerEstado,
    obtenerUsuarios
}