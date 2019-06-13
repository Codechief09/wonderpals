import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Login extends React.Component {

    //Modal state functions
    state = {
        isModalOpen: false
    }

    handleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    handleCloseModal = () => {
        this.setState({isModalOpen: false})
    }

    // Google Auth function
    authUrl = () => {
        let googleURL = "https://accounts.google.com/o/oauth2/v2/auth";
        let options = {
            client_id: process.env.REACT_APP_CLIENT_ID,
            redirect_uri: 'http://localhost:3000/oauth',
            scope: 'email openid profile',
            prompt: 'consent',
            response_type: 'code'
        };
        let QueryString = Object.keys(options).map( (key,i) => {
            return `${key}=` + encodeURIComponent(options[key]);
        }).join("&");
        return `${googleURL}?${QueryString}`;
    };


    render() {

        // Google Login Function Call
        const authUrl = this.authUrl();

        return (

            <div>

                <Button onClick={this.handleModal}>
                    Login
                </Button>

                <Dialog open={this.state.isModalOpen} aria-labelledby="login-dialog-title">

                    <DialogTitle id="login-dialog-title">Login</DialogTitle>

                    <DialogContent>

                        <DialogActions>

                            <a href={authUrl}>Google Login</a>

                        </DialogActions>

                        <TextField
                            id="email-address"
                            label="Email Address"
                            type="email"
                        />

                        <TextField
                            id="login-password"
                            label="Password"
                            type="password"
                        />

                        <DialogActions>

                            {/*This is the button that we will need to tie to the actual backend login request*/}

                            <Button onClick={this.handleCloseModal}>
                                Login
                            </Button>

                        </DialogActions>

                        <DialogContentText>
                            Don't have an account?
                            Sign up
                        </DialogContentText>

                    </DialogContent>

                </Dialog>


            </div>
        );
    }

}

