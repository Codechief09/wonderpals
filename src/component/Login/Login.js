import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function LogInFormDialog() {

    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (

        <div>

            <Button onClick={handleClickOpen}>
                Login
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="login-dialog-title">

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

                        <Button onClick={handleClose} color="primary">
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

