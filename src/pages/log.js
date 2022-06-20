import { useParams, Link } from 'react-router-dom';

export default function Log(props) {
	let params = useParams();
	let logId = parseInt(params.logId, 10);
	let currentLog = props.currentUserData.logs[logId - 1];

	return (
		<main>
			<Link to="/loglist">Return to list</Link>
			<h2>
				{currentLog.sessionName} ({currentLog.sessionDate})
			</h2>
			<h3>Start Location: {currentLog.startLoc}</h3>
			<h3>End Location: {currentLog.endLoc}</h3>
			<p>{currentLog.sessionNotes}</p>
			<div>{}</div>
		</main>
	);
}
