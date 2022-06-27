import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { users } from '../data';

export default function NewLogForm(props) {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		sessionId: props.currentUserData.currentId,
	});
	let dummyUserData = { ...props.currentUserData };

	const handleInputChange = (e) =>
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	const handleSubmit = (e) => {
		e.preventDefault();
		dummyUserData.logs.push(input);
		dummyUserData.currentId += 1;
		props.setCurrentUserData(dummyUserData);
		props.updateUserData();
		navigate(`/${input.sessionId}`);
	};

	return (
		<form action="" onSubmit={handleSubmit}>
			<label>
				Session Name:
				<input
					required
					type="text"
					name="sessionName"
					id="sessionName"
					onChange={handleInputChange}
				/>
			</label>
			<label>
				Session Date:
				<input
					required
					type="date"
					name="sessionDate"
					id="sessionDate"
					onChange={handleInputChange}
				/>
			</label>
			<label>
				Start Location:
				<input
					type="text"
					name="startLoc"
					id="startLoc"
					onChange={handleInputChange}
				/>
			</label>
			<label>
				End Location:
				<input
					type="text"
					name="endLoc"
					id="endLoc"
					onChange={handleInputChange}
				/>
			</label>
			<label>
				Session Notes:
				<textarea
					name="sessionNotes"
					id="sessionNotes"
					onChange={handleInputChange}
				/>
			</label>
			<input type="reset" value="Reset" />
			<input type="submit" value="Save" />
		</form>
	);
}
