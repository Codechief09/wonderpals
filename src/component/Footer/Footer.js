import React from "react";
import './Footer.scss';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography, IconButton, Icon } from '@material-ui/core';
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
      <Box className="footer" maxWidth="false">
        <div className="footer inside">
          <Typography variant='h6'>
            WanderPal
          </Typography>
          <IconButton className={classes.button} aria-label="Delete">
            <Icon>fab fa-github</Icon>
          </IconButton>
        </div>
      </Box>
    );
  }
}

