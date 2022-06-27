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
				<div className="loginNav">
					<span
						className={
							loginOrSignup === 'login'
								? 'loginsignup '
								: 'loginsignup inactive'
						}
						id="login"
						onClick={switchMode}
					>
						Log In
					</span>
					<span
						className={
							loginOrSignup === 'signup'
								? 'loginsignup '
								: 'loginsignup inactive'
						}
						id="signup"
						onClick={switchMode}
					>
						Sign Up
					</span>
				</div>
				{loginOrSignup === 'login' && (
					<Login
						setUserAuthed={props.setUserAuthed}
						setCurrentUserData={props.setCurrentUserData}
						setCurrentUserId={props.setCurrentUserId}
						users={props.users}
						emailList={props.emailList}
						saveToStorage={props.saveToStorage}
					/>
				)}
				{loginOrSignup === 'signup' && (
					<Signup
						setUserAuthed={props.setUserAuthed}
						setCurrentUserData={props.setCurrentUserData}
						setCurrentUserId={props.setCurrentUserId}
						setUsers={props.setUsers}
						setUsernameList={props.setUsernameList}
						setEmailList={props.setEmailList}
						users={props.users}
						usernameList={props.usernameList}
						emailList={props.emailList}
						saveToStorage={props.saveToStorage}
					/>
				)}
			</div>
		</div>
	);
}
