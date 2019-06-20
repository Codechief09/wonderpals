import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';

export default class ItineraryCard extends React.Component {

	render() {
		const { itinerary } = this.props;

		return(
			<Card>
				<CardActionArea>
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