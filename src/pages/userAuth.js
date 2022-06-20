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
						setCurrentUser={props.setCurrentUser}
						setLogs={props.setLogs}
						currentUser={props.currentUser}
						setCurrentId={props.setCurrentId}
					/>
				)}
				{loginOrSignup === 'signup' && <Signup />}
			</div>
		</div>
	);
}
