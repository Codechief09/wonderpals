import superagent from "superagent";

const API_URL = process.env.REACT_APP_API_KEY;
const CREATE_ITINERARY_ROUTE = "create";
const GET_ITINERARIES_ROUTE = "dashboard";

export const create = (itinerary) => ({
  type: "CREATE_ITINERARY",
  payload: itinerary
});

export const get = (itinerary) => ({
  type: 'GET_ALL',
  payload: itinerary
});

export const createItinerary = itinerary => store => {
  return superagent.post(`${API_URL}${CREATE_ITINERARY_ROUTE}`)
    .send(itinerary)
    .then(response => {
      return store.dispatch(create(response.body));
    });
};

export const getItineraries = id => store => {
  return superagent.get(`${API_URL}${GET_ITINERARIES_ROUTE}/${id}`)
    .then(response => {
      return store.dispatch(get(response.body));
    })
    .catch(console.log);
};

export const updateItinerary = (itinerary) => {
  return {
    type: "CATEGORY_UPDATE",
    payload: itinerary
  };
};

export const deleteItinerary = (itinerary) => {
  return {
    type: "CATEGORY_DELETE",
    payload: itinerary
  };
};

