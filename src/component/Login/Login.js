import React from 'react';
import {connect} from 'react-redux';
import * as authActions from '../../action/auth-actions';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// import Signup from '../Signup/Signup';

export class Login extends React.Component {

  //Modal state functions
  state = {
    isModalOpen: false,
    email: '',
    password: ''
  }

  handleModal = () => {
    this.setState({isModalOpen: !this.state.isModalOpen})
  }

  // handleCloseModal = () => {
  //     this.setState({isModalOpen: false})
  // }

  // Google Auth function
  authUrl = () => {
    let googleURL = "https://accounts.google.com/o/oauth2/v2/auth";
    let options = {
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: 'http://localhost:3000/dashboard',
      scope: 'email openid profile',
      prompt: 'consent',
      response_type: 'code'
    };
    let QueryString = Object.keys(options).map( (key,i) => {
      return `${key}=` + encodeURIComponent(options[key]);
    }).join("&");
    return `${googleURL}?${QueryString}`;
  };


  //Form functions
  handleChange = event => {
    this.setState({[event.target.id]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('entries???', this.state);
    this.props.mappedLogin(this.state);
    this.setState({email: '', password: ''});
  };


  render() {

    // Google Login Function Call
    const authUrl = this.authUrl();

    return (

      <div>

        <Button onClick={this.handleModal}>
          Login
        </Button>

        <Dialog open={this.state.isModalOpen} aria-labelledby="form-dialog-title">

          <DialogTitle id="form-dialog-title">Login</DialogTitle>

          <DialogContent>

            <DialogActions>

              <a href={authUrl}>Google Login</a>

            </DialogActions>

            <div>

              <form onSubmit={this.handleSubmit}>

                <div>

                  <input
                    type='email'
                    id='email'
                    placeholder='Email Address'
                    value={this.state.email}
                    onChange={this.handleChange}
                  />

                </div>

                <div>

                  <input
                    type='password'
                    id='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}

                  />

                </div>



                <div>

                  <Button type='submit'>
                    Login
                  </Button>

                </div>

              </form>

            </div>


            <DialogActions>

              {/*This is the button that we will need to tie to the actual backend login request*/}


            </DialogActions>

            <DialogContentText>
              Don't have an account?
              {/*<Signup/>*/}
            </DialogContentText>

          </DialogContent>

        </Dialog>


      </div>
    );
  }

}


// const mapStateToProps = (state) => {
//   return {
//     words: state.words,
//   }
// };

const mapDispatchToProps = dispatch => ({
  mappedLogin: (username, password) => dispatch(authActions.loginRequest(username, password))
});

export default connect(null, mapDispatchToProps)(Login);
