import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Login extends React.Component {

    state = {
        isModalOpen: false
    }

    handleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }

    // const open = React.useState(false);
    // const setOpen = React.useState(false);

    // handleClickOpen = () => {
    //     setOpen(true);
    // }
    //
    // handleClose = () => {
    //     setOpen(false);
    // }

    render() {


        return (

            <div>

                <Button onClick={this.handleModal}>
                    Login
                </Button>

                <Dialog open={this.state.isModalOpen} aria-labelledby="login-dialog-title">

                    <DialogTitle id="login-dialog-title">Login</DialogTitle>

                    <DialogContent>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="email-address"
                            label="Email Address"
                            type="email"
                        />

                        <TextField
                            autoFocus
                            margin="dense"
                            id="login-password"
                            label="Password"
                            type="password"
                        />

                        <DialogActions>

                            <Button color="primary">
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

