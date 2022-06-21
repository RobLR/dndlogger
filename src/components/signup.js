import { useState } from 'react';
import { emailList, usernameList, users } from '../data';

export default function Signup(props) {
	const [input, setInput] = useState();
	const [errorMessage, setErrorMessage] = useState();

	const handleInputChange = (e) =>
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	const handleSignup = () => {
		if (!emailList.includes(input.email)) {
			if (!usernameList.includes(input.username)) {
				if (input.password === input.passwordCheck) {
					let newUser = {
						email: input.email,
						username: input.username,
						password: input.password,
						theme: 'light',
						currentId: 0,
						logs: [],
					};
					users.push(newUser);
					emailList.push(newUser.email);
					usernameList.push(newUser.username);
					props.saveToLocalStorage();
				} else {
					setErrorMessage('Passwords do not match');
				}
			} else {
				setErrorMessage('This username is unavailble');
			}
		} else {
			setErrorMessage('This account already exists');
		}
		//Create a new user
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
