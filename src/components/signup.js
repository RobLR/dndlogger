import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
	const navigate = useNavigate();
	const [input, setInput] = useState();
	const [errorMessage, setErrorMessage] = useState();

	const handleInputChange = (e) =>
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	const handleSignup = (e) => {
		e.preventDefault();
		if (!props.emailList.includes(input.email)) {
			if (!props.usernameList.includes(input.username)) {
				if (input.password === input.passwordCheck) {
					let newUser = {
						email: input.email,
						username: input.username,
						password: input.password,
						theme: 'light',
						currentId: 0,
						logs: [],
					};
					let users = props.users;
					props.setUsers(props.users.concat(newUser));
					props.setEmailList(props.emailList.concat(input.email));
					props.setUsernameList(props.usernameList.concat(input.username));
					props.setUserAuthed(true);
					props.setCurrentUserData(newUser);
					props.setCurrentUserId(users.length);
					navigate('/');
				} else {
					setErrorMessage('Passwords do not match');
				}
			} else {
				setErrorMessage('This username is unavailble');
			}
		} else {
			setErrorMessage('This account already exists');
		}
		//add new user to userlist
	};

	return (
		<div>
			<h3>Please enter your details</h3>
			{errorMessage && <p>{errorMessage}</p>}
			<form onSubmit={handleSignup}>
				<label>
					Email address:{' '}
					<input
						required
						type="email"
						name="email"
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Username:{' '}
					<input
						required
						type="text"
						name="username"
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Choose a password:{' '}
					<input
						required
						type="password"
						name="password"
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Repeat password:{' '}
					<input
						required
						type="password"
						name="passwordCheck"
						onChange={handleInputChange}
					/>
				</label>
				<input type="submit" value="Sign Up!" />
			</form>
		</div>
	);
}
