import { useState} from "react"
import { Modal,Button } from 'react-bootstrap'


export default function CronogramaPagos({cronograma}){
    console.log(cronograma)
    return(
        <div> <div className="container">
        <div className="row mt-3">
            {cronograma.map((cro, i) => (
                <div   key={i}>
                    <div className="magic  card  text-center">
                          
                            <div className="">
                                <h6 className=""style={{color:'black'}}>
                                    {cro.amortization}
                                                
                                </h6>
                                <p className="" style={{color:'black'}}>
                                    {cro.nextExpiration}
                                </p>
                                
                                <p className=""style={{color:'black'}} >
                                    {cro.amortization}
                                </p>
                                
                                
                            </div>
                    </div> 
                </div>    
                
            ))}
        </div>
    </div></div>
    )
}