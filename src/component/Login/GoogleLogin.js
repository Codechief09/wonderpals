import React from 'react';

export default class GoogleLogin extends React.Component {
  authUrl = () => {
    let googleURL = "https://accounts.google.com/o/oauth2/v2/auth";
    let options = {
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: 'http://localhost:3000/oauth',
      scope: 'email openid profile',
      prompt: 'consent',
      response_type: 'code'
    };
    let QueryString = Object.keys(options).map( (key,i) => {
      return `${key}=` + encodeURIComponent(options[key]);
    }).join("&");
    return `${googleURL}?${QueryString}`;
  };

  render() {
    const authUrl = this.authUrl();
    return (
      <div>
        <a href={authUrl}>Login</a>
      </div>
    )
  }
}