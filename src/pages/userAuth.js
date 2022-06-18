import { useState } from 'react';
import Login from '../components/login';
import Signup from '../components/signup';
import { useNavigate } from 'react-router-dom';

export default function UserAuthentication(props) {
	const [loginOrSignup, setLoginOrSignup] = useState('login');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(-2); // I think -2 works because the route /login is accessed twice, once when it is opened and again when Login/Signup elements are called. If users switched bewteen Login/Signup a few times, this might not work. definitely doesn't work when logging in from the homepage (-1 works for that so I think it's because on initial page load, there is no route at -2). May have to create a state to keep track of the page before UserAuthntication
		props.setUserAuthed(true);
	};

	const switchMode = (e) => {
		setLoginOrSignup(e.currentTarget.id);
	};

	return (
		<div className="modalDiv">
			<div className="modal">
				<div>
					<button id="login" onClick={switchMode}>
						Log In
					</button>
					<button id="signup" onClick={switchMode}>
						Sign Up
					</button>
				</div>
				{loginOrSignup === 'login' && <Login handleSubmit={handleSubmit} />}
				{loginOrSignup === 'signup' && <Signup handleSubmit={handleSubmit} />}
			</div>
		</div>
	);
}
