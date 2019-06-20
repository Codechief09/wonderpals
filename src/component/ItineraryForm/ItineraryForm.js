import React, { useState } from 'react';
import DateFnsUtils from "@date-io/date-fns";
import * as itineraryActions from '../../../src/action/itinerary-actions'
// import DateFnsUtils from "date-fns";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import AddImage from '../../assets/upload.jpg';

import {
	MuiPickersUtilsProvider,
	DatePicker,
} from '@material-ui/pickers';
import {connect} from "react-redux";

const defaultState = {
	name: '',
	location: '',
	dateStart: new Date(),
	dateEnd: new Date(),
	details: '',
	image: ''
};

export class ItineraryForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			name: '',
			location: '',
			dateStart: new Date(),
			dateEnd: new Date(),
			details: '',
			image: ''
		}
	}

	handleModal = (trueOrFalse) => {
		this.setState({isModalOpen: trueOrFalse});
	};

	handleChange = event => {
		this.setState({[event.target.id]: event.target.value});
		console.log(this.state);
	};

	handleDateChange = (date, id) => {
		this.setState({[id] : date})
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.mappedCreateItinerary(this.state);
		this.setState({isModalOpen: false});
		this.setState(defaultState);
		this.handleModal(false)
	};

	render () {


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

					<Card>
						<CardActionArea>
							<label>
							<input
								accept="image/*"
								id="contained-button-file"
								type="file"
								className='display-none'
							/>
							<CardMedia
								height='200px'
								component="img"
								image={AddImage}
							/>
							</label>
						</CardActionArea>

						<DialogTitle id="form-dialog-title">Create New Itinerary</DialogTitle>

						<DialogContent>

							<form onSubmit={this.handleSubmit}>

								<TextField
									required
									type='text'
									id='name'
									label='Itinerary Name'
									placeholder='Itinerary Name'
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

								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<DatePicker
										id='itineraryDateStart'
										value={this.state.dateStart}
										onChange={(date, id) => this.handleDateChange(date, 'dateStart')}
										label='Start Date'
										format="MM/dd/yyyy"
									/>

									<DatePicker
										id='itineraryDateEnd'
										value={this.state.dateEnd}
										onChange={(date, id) => this.handleDateChange(date, 'dateEnd')}
										label='End Date'
										format="MM/dd/yyyy"
									/>
								</MuiPickersUtilsProvider>

								<TextField
									type='text'
									id='details'
									label='Details'
									// placeholder='Details'
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

						</DialogContent>`
					</Card>

				</Dialog>

			</div>
		)

	}
}

const mapStateToProps = (state) => ({
	itineraries: state.token
});

const mapDispatchToProps = dispatch => ({
	mappedCreateItinerary: (formData) => dispatch(itineraryActions.createItinerary(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItineraryForm);