import React from 'react';
//

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const defaultState = {itineraryName: '', itineraryLocation: '', itineraryDateStart: '', itineraryDateEnd: '', itineraryDetails: ''};

export default class ItineraryForm extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            isModalOpen: false,
            itineraryName: '',
            itineraryLocation: '',
            itineraryDateStart: '',
            itineraryDateEnd: '',
            itineraryDetails: '',
            // type: this.props.type
        }

    }

    handleModal = (trueOrFalse) => {
        this.setState({isModalOpen: trueOrFalse});
    };

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
        console.log(this.state);
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isModalOpen: false});
        this.setState(defaultState);
        this.handleModal(false)
    };

    // handleFormType = (type) => {
    //     this.setState({type: type});
    // };


    render () {

        // const itineraryNameJSX =
        //
        //     <TextField
        //         required
        //         type='text'
        //         id='itineraryName'
        //         title='Itinerary Name'
        //         placeholder='Itinerary Name'
        //         value={this.state.itineraryName}
        //         onChange={this.handleChange}
        //         fullWidth
        //     />;
        //
        // const itineraryLocationJSX =
        //
        //     <TextField
        //         required
        //         type='text'
        //         id='itineraryLocation'
        //         title='Location'
        //         placeholder='Location'
        //         value={this.state.itineraryLocation}
        //         onChange={this.handleChange}
        //         fullWidth
        //     />;
        //
        // const itineraryDateStart =
        //
        //     <TextField
        //         required
        //         type='date'
        //         label='Start Date'
        //         id='itineraryDateStart'
        //         value={this.state.itineraryDateStart}
        //         onChange={this.handleChange}
        //         fullWidth
        //     />;
        //
        // const itineraryDateEnd =
        //
        //     <TextField
        //         required
        //         type='date'
        //         label='Start Date'
        //         id='itineraryDateStart'
        //         value={this.state.itineraryDateStart}
        //         onChange={this.handleChange}
        //         fullWidth
        //     />;
        //
        // const itineraryDetails =
        //
        //     <TextField
        //         type='text'
        //         id='itineraryDetails'
        //         title='Details'
        //         placeholder='Details'
        //         value={this.state.itineraryDetails}
        //         onChange={this.handleChange}
        //         fullWidth
        //     />;

        return (

            <div>

                <Button onClick={() => this.handleModal(true)}>
                    New Itinerary
                </Button>

                <Dialog open={this.state.isModalOpen}
                        onBackdropClick={() => this.handleModal(false)}
                        maxWidth="xs"
                        aria-labelledby="form-dialog-title"
                >

                    <DialogTitle id="form-dialog-title">Create New Itinerary</DialogTitle>

                    <DialogContent>

                        <form onSubmit={this.handleSubmit}>

                            <TextField
                                required
                                type='text'
                                id='itineraryName'
                                title='Itinerary Name'
                                placeholder='Itinerary Name'
                                value={this.state.itineraryName}
                                onChange={this.handleChange}
                                fullWidth
                            />

                            <TextField
                                required
                                type='text'
                                id='itineraryLocation'
                                value={this.state.itineraryLocation}
                                title='Location'
                                placeholder='Location'
                                onChange={this.handleChange}
                                fullWidth
                            />


                            <TextField
                                required
                                type='date'
                                // label='Start Date'
                                id='itineraryDateStart'
                                value={this.state.itineraryDateStart}
                                onChange={this.handleChange}
                                fullWidth
                            />

                            <TextField
                                required
                                type='date'
                                // label='End Date'
                                id='itineraryDateEnd'
                                value={this.state.itineraryDateEnd}
                                onChange={this.handleChange}
                                fullWidth
                            />

                            <TextField
                                type='text'
                                id='itineraryDetails'
                                title='Details'
                                placeholder='Details'
                                value={this.state.itineraryDetails}
                                onChange={this.handleChange}
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
