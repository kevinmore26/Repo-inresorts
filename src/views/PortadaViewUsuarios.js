import { useState, useEffect,useRef } from "react";
import GroupUsuarios from "../components/groupUsuarios"
import {obtenerUsuarios} from "../services/estadoService"
import {obtenerEstado} from "../services/estadoService"


export default function PortadaViewUsuarios(){

    const [usuarios, setUsuarios] = useState([])
    const inputBusqueda = useRef()

    const getUsuarios = async () => {
        try {
            const usuariosObtenidos = await obtenerUsuarios()
            setUsuarios(usuariosObtenidos)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getUsuarios()
    }, [])
    const ejecutarBusqueda = async () => {
        
        let miBusqueda1 = inputBusqueda.current.value
        const usuariosFiltrados = await obtenerEstado(miBusqueda1)
        setUsuarios(usuariosFiltrados)
    }
    return(
        <div>
            <div className="col-sm-12 col-md-2" style={{width:'250px', margin:'0 auto',marginBottom:'20PX'}} >
                <h3 style={{color:'rgb(54 146 74)',textAlign:'center'}}>Tipo de estados</h3>
            <p style={{}}>
           0	Inactivo   <br/>      
           1	Activo   <br/>           
2.	Pendiente validación inicial <br/> 
3.	Rechazo inicial  <br/>    
4.	Pagar Despues  <br/>     
5.	Deuda 1      <br/>       
6.	Deuda 2   <br/>             
7.	Deuda 3 <br/>  
8.	PreLiquidacion <br/>  
9.	Congelado <br/>  
10.	Pendiente validación cuota <br/>  
11.	Rechazo cuota <br/>  
12.	Suscripción finalizada <br/>  
13.	Pendiente validación migración <br/>  
14.	Rechazo migración <br/>  
15.	Liquidacion
           </p>
                                        <h6 style={{color:'rgb(87, 87, 87)'}}>Busqueda de estado </h6>
                                        <div className="d-flex gap-1" style={{width:'25vw'}}>
                                            <input style={{paddingTop:'10px',paddingBottom:'10px', borderRadius:'10px',marginRight:'20px', border:'none'}}
                                                type="text" 
                                                className="form-control"
                                                placeholder="Ingrese el # de estado "
                                                ref={inputBusqueda}
                                            />
                                            <button className="btn-buscar" onClick={ejecutarBusqueda} style={{ border:'none',borderRadius:'10px',backgroundColor:'rgb(54 146 74)' }}>
                                                <p style={{color:'white'}}>BUSCAR</p>
                                            </button>
                                        </div>
                                    </div>
                                    <GroupUsuarios usuarios={usuarios}/>
        </div>
    )
}