
import{Route} from 'react-router-dom'


import PortadaView from './views/PortadaViewUsuarios'
import UsuarioView from './views/UsuarioView'

export default function Routes ()
{return(
    <div>
       <Route path="/" exact component={PortadaView} />
       <Route path="/vouchers" exact component={UsuarioView} />
    </div>
    )


  
}