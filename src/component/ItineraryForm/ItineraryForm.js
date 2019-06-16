import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default class ItineraryForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            itineraryName: '',
            itineraryLocation: '',
            itineraryDateStart: '',
            itineraryDateEnd: '',
            itineraryDetails: ''
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
        console.log(this.state);
        event.preventDefault();
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

                            <div>

                                <TextField
                                    required
                                    type='text'
                                    id='itineraryName'
                                    value={this.state.itineraryName}
                                    title='Itinerary Name'
                                    placeholder='Itinerary Name'
                                    onChange={this.handleChange}
                                />

                                <TextField
                                    required
                                    type='text'
                                    id='itineraryLocation'
                                    value={this.state.itineraryLocation}
                                    title='Location'
                                    placeholder='Location'
                                    onChange={this.handleChange}
                                />

                            </div>

                            <div>

                                <TextField
                                    required
                                    type='date'
                                    label='Start Date'
                                    id='itineraryDateStart'
                                    value={this.state.itineraryDateStart}
                                    onChange={this.handleChange}
                                />

                            </div>

                            <div>

                                <TextField
                                    required
                                    type='date'
                                    label='End Date'
                                    id='itineraryDateEnd'
                                    value={this.state.itineraryDateEnd}
                                    onChange={this.handleChange}
                                />

                            </div>

                            <TextField
                                type='text'
                                id='itineraryDetails'
                                value={this.state.itineraryDetails}
                                title='Details'
                                placeholder='Details'
                                fullWidth
                                onChange={this.handleChange}
                            />

                            <div>
                                <Button onClick={this.handleSubmit} onClick={this.handleCloseModal}>CREATE</Button>
                            </div>

                        </form>

                    </DialogContent>

                </Dialog>

            </div>
        )

    }



}