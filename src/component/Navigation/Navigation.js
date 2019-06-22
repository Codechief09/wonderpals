import React from "react";
import './Navigation.scss';

import AuthForm from '../AuthForm/AuthForm';
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

export class Navigation extends React.Component {

  render() {
    let type = 'login';
    return (
      <nav>
        <AppBar position={this.props.position} className={this.props.class}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <Link to='/'>
                WanderPal
              </Link>
            </Typography>

            <ul>
              <li><Link to='/'><Button>Home</Button></Link></li>
              <li><HashLink to='/#about'><Button>About</Button></HashLink></li>
              <li><AuthForm type={type}/></li>
            </ul>
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