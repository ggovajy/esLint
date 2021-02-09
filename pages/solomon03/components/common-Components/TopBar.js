  
import React, {Component} from 'react';
import EmailIcon from '@material-ui/icons/Email';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// Material UI
import Grid from '@material-ui/core/Grid';
class TopBar extends Component{

    render(){
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={10}></Grid>                    
                    <Grid item xs={1}>
                        <EmailIcon/>
                    </Grid>
                    <Grid item xs={1}>
                        <AccountCircleIcon/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default TopBar;