import React from 'react';
import {connect} from 'react-redux';
import * as authActions from '../../action/auth-actions';
import './AuthForm.scss';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextField} from '@material-ui/core';

const defaultState = {name: '', email: '', password: '', password2: ''};

export class AuthForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			isModalOpen: false,
			passwordError: false,
			type: this.props.type
		};
	}

	handleChange = event => {
		const {id, value} = event.target;

		this.setState({
			[id] : value
		}, () => {
			if (id === 'password' || id === 'password2')
				this.checkPassword();
		});
	};

	checkPassword = () => {
		if(!this.state.password || this.state.password !== this.state.password2) {
			this.setState({passwordError:true});
		}
		else {
			this.setState({passwordError:false});
		}
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({isModalOpen: false});

		if (this.state.type === 'login') {
			this.props.mappedLogin(this.state);
		} else {
			this.props.mappedSignup(this.state);
		}

		this.setState(defaultState);
		this.handleModal(false);
	};

	handleLogout = event => {
		event.preventDefault();
		this.props.mappedLogout();
	};

	handleModal = (trueOrFalse) => {
		this.setState({isModalOpen: trueOrFalse})
	};

	handleFormType = (type) => {
		this.setState({type: type})
	};

	// Google Auth function
	authUrl = () => {
		let googleURL = "https://accounts.google.com/o/oauth2/v2/auth";
		let options = {
			client_id: process.env.REACT_APP_CLIENT_ID,
			redirect_uri: 'http://localhost:3000/dashboard',
			scope: 'email openid profile',
			prompt: 'consent',
			response_type: 'code'
		};
		let QueryString = Object.keys(options).map((key, i) => {
			return `${key}=` + encodeURIComponent(options[key]);
		}).join("&");
		return `${googleURL}?${QueryString}`;
	};

	render() {
		const authUrl = this.authUrl();
		const nameJSX =
			<TextField
				id='name'
				type='name'
				label='Name'
				placeholder='Name'
				value={this.state.name}
				onChange={this.handleChange}
				fullWidth
			/>;
		const passwordCompareJSX =
			<TextField
				error={this.state.passwordError}
				id='password2'
				type='password'
				label='Re-enter Password'
				value={this.state.password2}
				onChange={this.handleChange}
				fullWidth
			/>;

		const oauthGoogleButton =
			<Button
				href={authUrl}
				className='loginButton'
				color='primary'
				variant='contained'
				onClick={this.handleModal}
				fullWidth
			>
				Log in with Google
			</Button>;

		const loginOrSignupMessage = (type) => {
			return (
				<DialogContentText>
					{ type === 'login' ? 'Have an account? ' : `Don't have an account? ` }
					<Button onClick={() => this.handleFormType(type)}>
						{ type === 'login' ? 'Login' : 'Sign up' }
					</Button>
				</DialogContentText>
			)
		};

		return (

			<div>
				{
					this.props.token ?
						<Button onClick={this.handleLogout}>
							Logout
						</Button>
						:
						<Button onClick={() => this.handleModal(true)}>
							Login
						</Button>
				}


				<Dialog
					open={this.state.isModalOpen}
					onBackdropClick={() => this.handleModal(false)}
					maxWidth="xs"
					aria-labelledby="form-dialog-title"
				>

					<DialogTitle id="form-dialog-title">
						{ this.state.type === 'login' ? 'Log in' : 'Sign up' }
					</DialogTitle>

					<DialogContent id='Login-form'>

						<form onSubmit={this.handleSubmit}>

							{ this.state.type !== 'login' ? nameJSX : undefined }

							<TextField
								id='email'
								type='email'
								label='Email'
								placeholder='youremail@email.com'
								value={this.state.email}
								onChange={this.handleChange}
								fullWidth
							/>
							<TextField
								id='password'
								type='password'
								label='Password'
								value={this.state.password}
								onChange={this.handleChange}
								fullWidth
							/>

							{ this.state.type === 'login' ? undefined : passwordCompareJSX }

							<Button
								className='loginButton'
								color='primary'
								type='submit'
								variant='contained'
								fullWidth
							>
								{this.state.type}
							</Button>
							{ this.state.type === 'login' ? oauthGoogleButton: undefined }

						</form>

						{
							this.state.type === 'login' ?
								loginOrSignupMessage('signup') :
								loginOrSignupMessage('login')
						}

					</DialogContent>
				</Dialog>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
  token: state.token
});

const mapDispatchToProps = dispatch => ({
	mappedLogin: (formData) => dispatch(authActions.loginRequest(formData)),
	mappedSignup: (user) => dispatch(authActions.signupRequest(user)),
	mappedLogout: () => dispatch(authActions.remove())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
