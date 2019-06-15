import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Computational Components
class AuthRedirect extends React.Component{
	render() {

		const {location, token} = this.props;
		const {pathname} = location; // Vinicio - pathname is basically our front-end route
		console.log(pathname)
		let destinationRoute = null; // Vinicio - the final route I want to send the user to

		if (pathname === '/login' || pathname === '/signup' || pathname === '/') {
			if(token) {
				// Vinicio - the user is already logged in
				destinationRoute = '/dashboard';
			}
		} else if(!token) {
			destinationRoute = '/';
		}
		console.log({destinationRoute});
		// Vinicio - in any other case I just want the destination route to be null
		return(
			<div>
				{destinationRoute ? <Redirect to={destinationRoute}/> : undefined}
			</div>
		);
	}
}

// Vinicio - this component can either get the token as props OR
// connect to the store

const mapStateToProps = state => ({
	token: state.token,
});

export default connect(mapStateToProps)(AuthRedirect);