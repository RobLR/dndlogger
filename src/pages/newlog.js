import { useNavigate } from 'react-router-dom';
import { addLog } from '../components/class';

function NewLog() {
	let navigate = useNavigate();
	return (
		<main>
			<h2>Create a New Log</h2>
			<p>Enter the session details below</p>
			<form action="">
				<label for="sessionName">Session Name: </label>
				<input type="text" name="sessionName" id="sessionName" />
				<label for="sessionDate">Session Date: </label>
				<input type="date" name="sessionDate" id="sessionDate" />
				<label for="startLoc">Start Location: </label>
				<input type="text" name="startLoc" id="startLoc" />
				<label for="endLoc">End Location: </label>
				<input type="text" name="endLoc" id="endLoc" />
				<label for="sessionNotes">Session Notes: </label>
				<textarea name="sessionNotes" id="sessionNotes" />
				<input type="reset" value="Reset" />
				<input
					onClick={() => {
						addLog();
						navigate('/loglist');
					}}
					type="submit"
					value="Save"
				/>
			</form>
		</main>
	);
}

export default NewLog;
