import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Navbar = () => {
  const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1
    }
  }));

  const classes = useStyles();  

  const history = useHistory();

  return (
    <div>
    <AppBar>
      <Toolbar>
        <Typography variant="h5" className={classes.title} align="left">
          VR Funding Platform
        </Typography>
        <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
      </Toolbar>
    </AppBar>
    </div>
  );
}

export default withRouter(Navbar);