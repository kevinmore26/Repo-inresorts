import {Link} from "react-router-dom"


export default function GroupUsuarios({usuarios}) {

    
    return (

       <div> 
           

           <table className="table" style={{margin:'0 auto', width:'50vw'}}>
                <thead style={{margin:'0 auto', width:'50vw'}}>    
                <tr style={{
                   color:'rgb(54 146 74)'
                }}>
                        <th>IdUsuario</th>
                        <th>Fecha-exp</th>
                        <th>Estado</th>
                        
                    </tr>
                </thead>
                <tbody style={{margin:'0 auto', width:'50vw',marginRight:'40px'}}>
                
                    {usuarios.map((usu, i) => (
                        
                        <tr key={i}>
                            
                            <td style={{
                                padding: '',
                                
                            }} > {usu.idUser}</td>
                            <td style={{
                                    padding: '',
                            }}>{usu.nextExpiration}</td>
                            <td style={{
                                    padding: '',
                            }}>{usu.status}</td>
                             <Link href="#" className="btn btn btn btn-warning" style={{color:'white', border:'1px solid rgb(54 146 74)',textDecoration:'none',backgroundColor:'rgb(54 146 74)', paddingLeft:'10px',paddingRight:'10px', borderRadius:'10px'}}to={`/vouchers`} >Detalles</Link> 
                            
                           
                        </tr>
                        
                    ))}
                </tbody>
            </table>

       </div>                 

    )
}
