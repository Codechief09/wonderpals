import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class Signup extends React.Component {


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

    //Form functions
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onComplete(this.state);
        this.setState({email: '', password: '', name: ''});
    }




    render() {

        return (

            <div>


                <Button onClick={this.handleModal}>
                    Sign Up
                </Button>

                <Dialog open={this.state.isModalOpen} aria-labelledby="signup-dialog-title">

                    <DialogTitle id="signup-dialog-title">Sign Up</DialogTitle>

                    <DialogContent>


                        <div>

                            <form onSubmit={this.handleSubmit}>

                                <div>

                                    <input
                                        name='email'
                                        placeholder='Email Address'
                                        type='email'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />

                                </div>

                                <div>

                                    <input
                                        name='password'
                                        placeholder='Password'
                                        type='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}

                                    />

                                </div>

                                <div>

                                    <input
                                        name='name'
                                        placeholder='Name'
                                        type='text'
                                        value={this.state.name}
                                        onChange={this.handleChange}

                                    />

                                </div>

                            </form>

                        </div>


                        <DialogActions>

                            {/*This is the button that we will need to tie to the actual backend login request*/}

                            <Button type='submit'>
                                Join
                            </Button>

                        </DialogActions>


                    </DialogContent>

                </Dialog>


            </div>
        );
    }

}
