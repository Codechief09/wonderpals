import React from "react";
import './Navigation.scss';


import AuthForm from '../AuthForm/AuthForm';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

export default class Navigation extends React.Component {

  render() {
    let type = 'login';
    let auth = true;
    return (
      <nav>
        <AppBar position="fixed" className={this.props.class}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              WanderPal
            </Typography>

            <ul>
              <li>Home</li>
              <li>About</li>
              <li><AuthForm type={type}/></li>
            </ul>

              {auth && (
                <div id="icon">
                  <IconButton
                    aria-label="Account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    // onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    // open={open}
                    // onClose={handleClose}
                  >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                  </Menu>
                </div>
              )}
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
}

