import React from "react";
import './Navigation.scss';


import AuthForm from '../AuthForm/AuthForm';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import {connect} from "react-redux";

export class Navigation extends React.Component {

  render() {
    let type = 'login';
    let auth = true;
    return (
      <nav>
        <AppBar position={this.props.position} className={this.props.class}>
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
                </div>
              )}
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps, null)(Navigation);