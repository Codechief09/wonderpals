import uuid from 'uuid';

export const createItinerary = (itinerary) => {
	return {
		type: 'CATEGORY_CREATE',
		payload: {
			id: uuid(),
			name: itinerary.name,
			location: itinerary.location,
			dateStart: itinerary.dateStart,
			dateEnd: itinerary.dateEnd,
			details: itinerary.details
		}
	}
};

export const updateItinerary = (itinerary) => {
	return {
		type: 'CATEGORY_UPDATE',
		payload: itinerary,
	}
};

export const deleteItinerary = (itinerary) => {
	return {
		type: 'CATEGORY_DELETE',
		payload: itinerary,
	}
};