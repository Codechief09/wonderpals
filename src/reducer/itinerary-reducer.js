const initialState = {
  token: {},
  itineraries: {}
};

export default (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_ALL":
      return payload;
    case "CREATE_ITINERARY":
      return [...state, payload];
    case "EDIT_ITINERARY":
      return state;
    case "DELETE_ITINERARY":
      return state;
    default:
      return state;
  }
};
