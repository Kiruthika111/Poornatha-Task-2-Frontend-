import React from 'react'
import thumbnail1 from './thumbnail1.jpg'
import Button from './Buttons.js'
import './App.css'
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Paper } from "@material-ui/core";
import Logo from './image.jpg'
import User from './user-icon.png'
import User1 from './user1.jpg'
import User2 from './user2.jpg'
import User3 from './user3.png'
import User4 from './user4.png'
import thumbnail2 from './thumbnail2.png'
import thumbnail3 from './thumbnail3.jpg'
import thumbnail4 from './thumbnail4.jpg'
import thumbnail5 from './thumbnail5.jpg'
import thumbnail6 from './thumbnail6.png'
import thumbnail7 from './thumbnail7.jpg'
const useStyles = makeStyles((theme) => ({
    grid: {
      width: '100',
      margin:'0px'
    },
  
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.secondary,
      background: '#ffffff',
  
    },

    textchannel: {
        textAlign: 'right',
        color: '#676767',
        fontsize: '1em' 

    }
  
  }));


function Video() {

    const classes = useStyles();
    return (
        
        <div>
            <Button />
            <div className="margin-image">
            
            <Grid container spacing={3} className={classes.grid}>
      <Grid item>
        <Paper className={classes.paper}>
          <img src={thumbnail3} height={120} width={220} />
          <div>
              <h5>Python For Beginners</h5>
            <img src={User2} height={35} width={35} borderRadius={400/2} />
            &nbsp;  Learn with Mosh
          <div className={classes.textchannel}>90Kviews | 3 months ago</div>
          </div>
          </Paper>
      </Grid>

      <Grid item>
        <Paper className={classes.paper}>
          <img src={thumbnail1} height={120} width={220} />
          <div>
              <h5>COLD WAR</h5>
            <img src={User1} height={35} width={35} borderRadius={400/2} />
            &nbsp;  7 clouds
          <div className={classes.textchannel}>500views | 5 months ago</div>
          </div>
          </Paper>
      </Grid>

      <Grid item>
        <Paper className={classes.paper}>
          <img src={thumbnail2} height={120} width={220} />
          <div>
              <h5>Unleash Your Creativity</h5>
            <img src={User4} height={35} width={35} borderRadius={400/2} />
            &nbsp;  Letupita
          <div className={classes.textchannel}>70Kviews | 5 months ago</div>
          </div>
          </Paper>
      </Grid>

      <Grid item>
        <Paper className={classes.paper}>
          <img src={thumbnail4} height={120} width={220} />
          <div>
              <h5>Madras Day Special</h5>
            <img src={User3} height={35} width={35} borderRadius={400/2} />
            &nbsp;  IRFAN'S VIEW
          <div className={classes.textchannel}>100views | 3 months ago</div>
          </div>
          </Paper>
      </Grid>
      
      <Grid item>
        <Paper className={classes.paper}>
          <img src={thumbnail5} height={120} width={220} />
          <div>
              <h5>Battleground Tournament</h5>
            <img src={User4} height={35} width={35} borderRadius={400/2} />
            &nbsp;  Channel 5
          <div className={classes.textchannel}>100views | 3 months ago</div>
          </div>
          </Paper>
      </Grid>

      <Grid item>
        <Paper className={classes.paper}>
          <img src={thumbnail6} height={120} width={220} />
          <div>
              <h5>NOT ANOTHER</h5>
            <img src={User} height={35} width={35} borderRadius={400/2} />
            &nbsp;  Channel 6
          <div className={classes.textchannel}>100views | 3 months ago</div>
          </div>
          </Paper>
      </Grid>

      <Grid item>
        <Paper className={classes.paper}>
          <img src={thumbnail7} height={120} width={220} />
          <div>
              <h5>ReactJS tutorial</h5>
            <img src={User1} height={35} width={35} borderRadius={400/2} />
            &nbsp;  Channel 7
          <div className={classes.textchannel}>100views | 3 months ago</div>
          </div>
          </Paper>
      </Grid>

      <Grid item>
        <Paper className={classes.paper}>
          <img src={Logo} height={120} width={220} />
          <div>
              <h5>Amazing Nature Scenary</h5>
            <img src={User2} height={35} width={35} borderRadius={400/2} />
            &nbsp;  Channel 8
          <div className={classes.textchannel}>100views | 3 months ago</div>
          </div>
          </Paper>
      </Grid>

      <Grid item>
        <Paper className={classes.paper}>
          <img src={Logo} height={120} width={220} />
          <div>
              <h5>Amazing Nature Scenary</h5>
            <img src={User3} height={35} width={35} borderRadius={400/2} />
            &nbsp;  Channel 9
          <div className={classes.textchannel}>100views | 3 months ago</div>
          </div>
          </Paper>
      </Grid>
      
      <Grid item>
        <Paper className={classes.paper}>
          <img src={Logo} height={120} width={220} />
          <div>
              <h5>Amazing Nature Scenary</h5>
            <img src={User4} height={35} width={35} borderRadius={400/2} />
            &nbsp;  Channel 10
          <div className={classes.textchannel}>100views | 3 months ago</div>
          </div>
          </Paper>
      </Grid>





    </Grid>
        </div>

        

        {/* <div className="margin-image">
            <img className="videoSpace" src={thumbnail1} height={150} width={250}  />
            <img className="videoSpace" src={thumbnail1} height={150} width={250} />
            <img className="videoSpace" src={thumbnail1} height={150} width={250}  />
            <img className="videoSpace" src={thumbnail1} height={150} width={250} />
        </div> */}
        </div>
        

        
    )
}

export default Video
