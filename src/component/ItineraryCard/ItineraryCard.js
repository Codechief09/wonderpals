import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import { Redirect } from "react-router-dom";

export default class ItineraryCard extends React.Component {

	handleClick = () => {
	  console.log('click')
		return (
			<Redirect to='/itinerary'/>
		)
	};

	render() {
		const { itinerary } = this.props;

		return(
			<Card>
				<CardActionArea onClick={this.handleClick}>
					<CardMedia
						height='185px'
						component="img"
						image={itinerary.imagePath}
						title={itinerary.name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{itinerary.name}
						</Typography>
						<Typography variant="body1">
							{itinerary.dateStart} to {itinerary.dateEnd}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		)

	}
}