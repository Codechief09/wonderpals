import React, { useState } from "react";
import * as eventActions from '../../../src/action/event-actions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from "react-redux";



const defaultState =  {
    name: '',
    location: '',
    duration: '',
    details: ''
};

export class EventForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,

            itineraryId: '',

            name: '',
            location: '',
            duration: '',
            details: ''
        }
    }

    handleModal = (trueOrFalse) => {
        this.setState({isModalOpen: trueOrFalse});
    };

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    };

    handleDateChange = (date, id) => {
        this.setState({[id] : date})
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.mappedCreateEvent(this.state);
        this.setState({isModalOpen: false});
        this.setState(defaultState);
        this.handleModal(false)
    };

    render () {

        return (

            <div>

                <Button onClick={() => this.handleModal(true)}>
                    New Event
                </Button>

                <Dialog open={this.state.isModalOpen}
                        onBackdropClick={() => this.handleModal(false)}
                        maxWidth="xs"
                        aria-labelledby="form-dialog-title"
                >

                        <DialogTitle id="form-dialog-title">Create New Event</DialogTitle>

                        <DialogContent>

                            <form onSubmit={this.handleSubmit}>

                                <TextField
                                    required
                                    type='text'
                                    id='name'
                                    label='Event Name'
                                    placeholder='Event Name'
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    fullWidth
                                />

                                <TextField
                                    required
                                    type='text'
                                    id='location'
                                    value={this.state.location}
                                    label='Location'
                                    placeholder='Location'
                                    onChange={this.handleChange}
                                    fullWidth
                                />

                                <TextField
                                    required
                                    type='text'
                                    id='duration'
                                    value={this.state.duration}
                                    label='Duration'
                                    placeholder='Duration'
                                    onChange={this.handleChange}
                                    fullWidth
                                />



                                <TextField
                                    type='text'
                                    id='details'
                                    label='Details'
                                    placeholder='Details'
                                    value={this.state.details}
                                    onChange={this.handleChange}
                                    rows='6'
                                    multiline
                                    fullWidth
                                />


                                <Button
                                    className='submitButton'
                                    color='primary'
                                    type='submit'
                                    variant='contained'
                                    fullWidth
                                >
                                    Create
                                </Button>

                            </form>

                        </DialogContent>

                </Dialog>

            </div>
        )

    }
}

const mapStateToProps = (state) => ({
    events: state.token,
    token: state.token
});

const mapDispatchToProps = dispatch => ({
    mappedCreateEvent: (formData) => dispatch(eventActions.createEvent(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

