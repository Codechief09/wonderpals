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
      // figure this out for Mongo
      let newState = 'hi';
      // let newState = { ...state };
      // newState[payload.id] = payload;
      return newState;
    case "DELETE_ITINERARY":
      let updatedState = { ...state };
      // delete updatedState[payload.id];
      return updatedState;
    default:
      return state;
  }
};
