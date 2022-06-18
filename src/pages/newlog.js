import NewLogForm from '../components/form';
import { Navigate } from 'react-router-dom';

function NewLog(props) {
	if (props.userAuthed === true) {
		return (
			<main>
				<h2>Create a New Log</h2>
				<p>Enter the session details below</p>
				<NewLogForm
					currentId={props.currentId}
					setCurrentId={props.setCurrentId}
					logs={props.logs}
					setLogs={props.setLogs}
				/>
			</main>
		);
	} else if (props.userAuthed === false) {
		return <Navigate to="/login" />;
	}
}

export default NewLog;
