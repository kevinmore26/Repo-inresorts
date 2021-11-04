
import{Route} from 'react-router-dom'


import PortadaView from './views/PortadaViewUsuarios'
import CronogramaPagos from './views/CronogramaPagos'

export default function Routes ()
{return(
    <div>
       <Route path="/" exact component={PortadaView} />
       <Route path="/vouchers" exact component={CronogramaPagos} />
    </div>
    )


  
}