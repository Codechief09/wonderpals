export default (state = {}, { type, payload }) => {
  switch (type) {
    case "GET_ALL":
      return payload;
    case "CREATE_ITINERARY":
      return [payload, ...state];
    case "EDIT_ITINERARY":
      return state;
    case "DELETE_ITINERARY":
      let newState = [...state];
      newState.filter(trip => trip._id !== payload);
      return newState;
    default:
      return state;
  }
};
