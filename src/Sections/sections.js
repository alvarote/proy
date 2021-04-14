import React from 'react'; 

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { Toolbar, Typography } from '@material-ui/core';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'; 




export default function SectionH({url}) {
    return(
     
    <Grid   item xs={12}  padding={8} >
        
        <Typography variant="h6" spacing={2} align= "center" >
         <Router> 
           
            <Button variant="outlined" spacing={2} > 
            <Link to={"/Components/jovenes"}></Link>Jovenes
             </Button>
          
        
          <Button variant="outlined" > 
          <Link to={"/Components/cultura"}></Link>Cultura  
          </Button>
       
        
          <Button variant="outlined"> Turismo  </Button>
    
         

          <Button variant="outlined"> Personas con discapacidad  </Button>
        
        

          <Button variant="outlined"> Adultos  </Button>
        

           
          <Button variant="outlined"> Apoyos  </Button>


          </Router>
          
      
        </Typography> 
      
        
    </Grid>
    

    );
}
