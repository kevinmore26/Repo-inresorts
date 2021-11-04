import { useState} from "react"
import { Modal,Button } from 'react-bootstrap'


export default function CronogramaPagos({cronograma}){
    console.log(cronograma)
    return(
        <div> <div className="container">
            <h1 style={{textAlign:'center',color:'rgb(54 146 74)',}}>Cronograma de pagos</h1>
            <table className="table" style={{margin:'0 auto', width:'50vw'}}>
                
                <thead style={{ width:'50vw'}}>    
                <tr style={{
                   color:'rgb(54 146 74)'
                }}>
                        <th>Id Pago</th>
                        <th>Cronograma</th>
                        <th>Balance capital</th>
                        <th>Método pago</th>
                        <th>Monto total</th>
                        
                    </tr>
                </thead>
                <tbody style={{ width:'40vw'}}>
                
                    {cronograma.map((cro, i) => (
                        
                        <tr key={i}>
                            <td style={{
                                textAlign:'center'
                                
                            }} > {cro.idPayment}</td>
                            <td style={{
                                textAlign:'center'
                                
                            }} > {cro.nextExpiration}</td>
                            <td style={{
                                    textAlign:'center'
                            }}>{cro.capitalBalance}</td>
                           
                            <td style={{
                                    textAlign:'center'
                            }}>{cro.paymentVouchers[0].nameMethodSubTipoPago}</td>
                            <td style={{
                                    textAlign:'center'
                            }}>{cro.paymentVouchers[0].totalAmount}</td>
                            
                            
                           
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        
    </div></div>
    )
}