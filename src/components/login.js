import { useState } from 'react';
import { emailList, users } from '../data';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
	const navigate = useNavigate();
	const [input, setInput] = useState({});
	const [errorMessage, setErrorMessage] = useState();

	const handleInputChange = (e) =>
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	const handleLogin = (e) => {
		e.preventDefault();
		if (emailList.includes(input.email)) {
			let user = users.find((user) => user.email === input.email);
			if (user.password === input.password) {
				props.setCurrentUser(user);
				props.setUserAuthed(true);
				props.setLogs(user.logs);
				props.setCurrentId(parseInt(user.currentId));
				navigate('/');
			} else {
				setErrorMessage('Incorrect password');
			}
		} else {
			setErrorMessage('This account doesn not exist');
		}
	};

	return (
		<main>
			<h3>Please log in</h3>
			{errorMessage && <p>{errorMessage}</p>}
			<form onSubmit={handleLogin}>
				<label>
					Email:
					<input
						required
						type="email"
						name="email"
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Password:
					<input
						required
						type="password"
						name="password"
						onChange={handleInputChange}
					/>
				</label>
				<input type="submit" value="Log In" />
			</form>
		</main>
	);
}
