import React from "react";
import './Footer.scss';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, IconButton, Icon } from '@material-ui/core';
// import { DeleteIcon } from '@material-ui/icons';

export default class Footer extends React.Component {
  useStyles = () => {
    return makeStyles(theme => ({
      button: {
        margin: theme.spacing(1),
      },
      input: {
        display: 'none',
      },
    }))
  };

  render() {
    const classes = this.useStyles();
    return (
      <Grid className="footer" maxWidth="false">
        <Container maxWidth="lg">
          <Typography variant='h6'>
            WanderPal
          </Typography>
          <IconButton className={classes.button} aria-label="Delete">
            <Icon>fab fa-github</Icon>
          </IconButton>
        </Container>
      </Grid>
    );
  }
}

