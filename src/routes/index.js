import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Adultos from "../Components/adultos";
import Cultura from "../Components/cultura";

import Jovenes from '../Components/jovenes'; 


export default function Routes(){
    return(
        
            <Switch> 
                <Route path= "/jovenes"> 
                    <Jovenes/>
                </Route>
                    
                <Route path="/cultura"> 
                   <Cultura/>

                </Route>
            </Switch>

    );
}