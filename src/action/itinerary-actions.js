import superagent from "superagent";

const API_URL = process.env.REACT_APP_API_KEY;
const CREATE_ITINERARY_ROUTE = "create";
const GET_ITINERARIES_ROUTE = "dashboard";

export const create = (itinerary) => ({
  type: "CREATE_ITINERARY",
  payload: itinerary
});

export const get = (itinerary) => ({
  type: "GET_ALL",
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
      let sorted = response.body.sort((a, b) => {
        return new Date(b.dateStart) - new Date(a.dateStart);
      });
      return store.dispatch(get(sorted));
    })
    .catch(console.log);
};

export const update = itinerary => {
  return {
    type: 'UPDATE_ITINERARY',
    payload: itinerary
  }
};

export const updateItinerary = formData => store => {
  let { id } = formData;
  return superagent.put(`${API_URL}itinerary/${id}`)
    .send(formData)
    .then(response => {
      let sorted = response.body.sort((a, b) => {
        return new Date(b.dateStart) - new Date(a.dateStart);
      });
      return store.dispatch(update(sorted));
    })
    .catch(console.log);
};

export const deleteOne = (id) => ({
  type: "DELETE",
  payload: id
});

export const deleteItinerary = id => store => {
  return superagent.delete(`${API_URL}itineraries/${id}`)
    .then(() => {
      return store.dispatch(deleteOne(id))
    });
};

