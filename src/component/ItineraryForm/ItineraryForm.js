import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

export default class ItineraryForm extends React.Component {

    state = {
        isModalOpen: false,
        eventName: '',
        location: '',
        date: '',
        details: ''

    };

    constructor(props) {
        super(props);

        this.state = {
            eventName: '',
            location: '',
            date: '',
            details: ''
        }

    }

    handleModal = () => {
        this.setState({isModalOpen: !this.state.isModalOpen})
    };

    handleCloseModal = () => {
        this.setState({isModalOpen: false})
    };

    //Form functions
    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
        console.log(this.state);
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isModalOpen: false});
        console.log('entries???', this.state);
    };


    render () {

        return (

            <div>

                <Button onClick={this.handleModal}>
                    New Itinerary
                </Button>

                <Dialog open={this.state.isModalOpen} aria-labelledby="form-dialog-title">

                    <DialogTitle id="form-dialog-title">Create New Itinerary</DialogTitle>

                    <DialogContent>


                        <form id="itinerary-form">

                            <TextField
                                required
                                type='text'
                                id='event-name'
                                placeholder='Event Name'
                                onChange={this.handleChange}

                            />

                            <TextField
                                required
                                type='text'
                                id='event-location'
                                placeholder='Location'
                                onChange={this.handleChange}
                            />

                            <TextField
                                required
                                type='date'
                                id='event-date'
                                onChange={this.handleChange}
                            />

                            <TextField
                                id='event-details'
                                type='text'
                                placeholder='Details'
                                fullWidth
                                onChange={this.handleChange}
                            />

                        </form>

                    </DialogContent>

                </Dialog>

            </div>
        )

    }



}