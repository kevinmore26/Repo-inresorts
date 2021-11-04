import { useState, useEffect  ,useRef} from "react";
import {obtenerInfoUsuario} from "../services/estadoService"
import CronogramaPagos from "../components/groupCrono"

export default function PortadaViewCronograma(){
    const [cronograma, setCronograma] = useState([])
    const getCronograma = async () => {
        try {
            let adopcionesObtenidas = await obtenerInfoUsuario()
            setCronograma(adopcionesObtenidas)
            
        } 
        catch (error) {
            console.log(error)            
        }
    }
    useEffect(() => {
        getCronograma()
    }, [])
    return(
        <div>
             <CronogramaPagos cronograma={cronograma} />
        </div>
    )
}