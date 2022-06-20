import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewLogForm(props) {
	const navigate = useNavigate();
	const [input, setInput] = useState({ sessionId: props.currentId });
	const [valid, setValid] = useState(false);
	const [saved, setSaved] = useState(false);

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
		setValid(checkValidation());
		if (valid) {
			props.setCurrentId(props.currentId + 1);
			props.setLogs([...props.logs, input]);
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
