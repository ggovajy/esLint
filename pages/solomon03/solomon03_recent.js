import React, { Component } from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import TopBar from './components/common-Components/TopBar';
import NavBar from './components/common-Components/NavBar';


export default class solomon03 extends Component {
  render(){
    return(
      <div>
        <Grid container spacing={3}>
          {/* Left Navigation Bar */}
          <Grid item xs={3} style={{ height: "100%0%" }}>
              <NavBar></NavBar>
          </Grid>
          {/* Content */}
          <Grid item xs={9}>
            <Grid container spacing={3}>
              <Grid item xs={12} style={{ height: "10%" }}>                
                <TopBar/>
                
              </Grid>
              <Grid item xs={12} style={{ height: "90%" }}>                
                  content                
              </Grid>
            </Grid>          
          </Grid>
        </Grid>
      </div>
    );
  }  
}