import { useState } from 'react';
import Login from '../components/login';
import Signup from '../components/signup';

export default function UserAuthentication(props) {
	const [loginOrSignup, setLoginOrSignup] = useState('login');

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
				{loginOrSignup === 'login' && (
					<Login
						setUserAuthed={props.setUserAuthed}
						setCurrentUserData={props.setCurrentUserData}
						setCurrentUserId={props.setCurrentUserId}
					/>
				)}
				{loginOrSignup === 'signup' && (
					<Signup
						setUserAuthed={props.setUserAuthed}
						setCurrentUserData={props.setCurrentUserData}
						setCurrentUserId={props.setCurrentUserId}
					/>
				)}
			</div>
		</div>
	);
}
