import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewLogForm(props) {
	const navigate = useNavigate();
	const [input, setInput] = useState({
		sessionId: props.currentUserData.currentId,
	});
	const [valid, setValid] = useState(false);
	const [saved, setSaved] = useState(false);
	let dummyUserData = { ...props.currentUserData };

	const handleInputChange = (e) =>
		setInput({
			...input,
			[e.currentTarget.name]: e.currentTarget.value,
		});

	// TODO
	const checkValidation = () => {
		return true;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSaved(true);
		setValid(checkValidation()); //Need to change, currently making you have to click save twice because it takes time for state to update.
		if (valid) {
			dummyUserData.logs.push(input);
			dummyUserData.currentId += 1;
			props.setCurrentUserData(dummyUserData);
			navigate(`/${input.sessionId}`);
		}
	};

	return (
		<form action="" onSubmit={handleSubmit}>
			{saved && !valid && (
				<span>
					This name and date combination already exists. Please enter a
					different combination.
				</span>
			)}
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
