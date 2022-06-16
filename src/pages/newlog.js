import NewLogForm from '../components/form';

function NewLog(props) {
	return (
		<main>
			<h2>Create a New Log</h2>
			<p>Enter the session details below</p>
			<NewLogForm
				currentId={props.currentId}
				setCurrentId={props.setCurrentId}
				logs={props.logs}
				setLogs={props.setLogs}
				// save={props.save}
			/>
		</main>
	);
}

export default NewLog;
