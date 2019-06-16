import React from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class Signup extends React.Component {


    //Modal state functions
    state = {
        isModalOpen: false,
    }

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

    }

    handleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    }


    //Form functions
    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
        console.log(this.state);
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isModalOpen: false});
        // this.props.***SOMETHING IS MISSING HERE***(this.state);
        // this.setState({email: '', password: '', name: ''});
        console.log(this.state);
    }



    render() {

        return (

            <div>


                {/*<Button onClick={this.handleModal}>*/}
                {/*    Sign Up*/}
                {/*</Button>*/}

                <Dialog open={this.state.isModalOpen} aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>

                    <DialogContent>


                        <div>

                            <form>

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

                                    <input
                                        type='text'
                                        id='name'
                                        placeholder='Name'
                                        value={this.state.name}
                                        onChange={this.handleChange}

                                    />

                                </div>

                                <div>

                                    <Button onClick={this.handleSubmit} >
                                        Join
                                    </Button>

                                </div>


                            </form>


                        </div>


                        <DialogActions>

                            {/*This is the button that we will need to tie to the actual backend login request*/}


                        </DialogActions>


                    </DialogContent>

                </Dialog>


            </div>
        );
    }

}
