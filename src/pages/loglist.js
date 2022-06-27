import { Link, Outlet, useSearchParams, Navigate } from 'react-router-dom';

function LogList(props) {
	let logs = props.currentUserData.logs;
	let [searchParams, setSearchParams] = useSearchParams();

	// Only renders page if user is logged in, if they were to navigate here without being authed, this wouldn't show
	if (props.userAuthed === true) {
		return (
			<main>
				<h2>Log List</h2>
				<p>Here you can find a list of all your saved logs</p>

				<div className="logList">
					<input
						value={searchParams.get('filter') || ''}
						onChange={(event) => {
							let filter = event.target.value;
							if (filter) {
								setSearchParams({ filter });
							} else {
								setSearchParams({});
							}
						}}
					/>
					{/* Filters all the users logs based on search parameters and then maps those that pass to the page */}
					{logs
						.filter((log) => {
							let filter = searchParams.get('filter');
							if (!filter) return true;
							let name = log.sessionName.toLowerCase();
							return name.includes(filter.toLowerCase());
						})
						.map((log) => (
							<Link to={`/${log.sessionId}`} key={log.sessionId}>
								{log.sessionName} - {log.sessionDate}
							</Link>
						))}
				</div>
				<Outlet />
			</main>
		);
	} else if (props.userAuthed === false) {
		return <Navigate to="/login" />;
	}
}
export default LogList;
