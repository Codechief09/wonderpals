import superagent from 'superagent';

export const set = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const remove = () => ({
  type: 'TOKEN_REMOVE',
});


const API_URL = 'http://localhost:5000/';
const SIGNUP_ROUTE = 'signup';
const LOGIN_ROUTE = 'login';

export const signupRequest = user => store => {
  return superagent.post(`${API_URL}${SIGNUP_ROUTE}`)
    .send(user)
    .withCredentials()
    .then(response => {
      return store.dispatch(set(response.text));
    })
    .catch(console.log);
};

export const loginRequest = (username, password) => store => {
  return superagent.get(`${API_URL}${LOGIN_ROUTE}`)
    .auth(username, password)
    .withCredentials()
    .then(response => {
      return store.dispatch(set(response.text));
    })
    .catch(console.log);
};