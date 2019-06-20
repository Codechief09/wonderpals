import superagent from 'superagent';

export const set = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const remove = () => ({
  type: 'TOKEN_REMOVE',
});

const API_URL = process.env.REACT_APP_API_KEY;
const SIGNUP_ROUTE = 'signup';
const LOGIN_ROUTE = 'login';

export const signupRequest = user => store => {
  return superagent.post(`${API_URL}${SIGNUP_ROUTE}`)
    .send(user)
    .then(response => {
      return store.dispatch(set(response.text));
    })
    .catch(console.log);
};

export const loginRequest = formData => store => {
  return superagent.post(`${API_URL}${LOGIN_ROUTE}`)
    .auth(formData.email, formData.password)
    // .withCredentials()
    .then(response => {
      return store.dispatch(set(response.body));
    })
    .catch(console.log);
};