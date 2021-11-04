
import{Route} from 'react-router-dom'


import PortadaView from './views/PortadaViewUsuarios'

export default function Routes ()
{return(
    <div>
       <Route path="/" exact component={PortadaView} />
    </div>
    )


  
}