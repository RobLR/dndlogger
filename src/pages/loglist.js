import { Link, Outlet, useSearchParams, Navigate } from 'react-router-dom';

function LogList(props) {
	let logs = props.logs;
	let [searchParams, setSearchParams] = useSearchParams();

	if (props.userAuthed === true) {
		return (
			<main>
				<h2>Log List</h2>
				<p>Here you can find a list of all your saved logs</p>

				<div>
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
					{/* TODO */}
					{/* <label for="timePeriod">Time period: </label> <!--Create a dropdown/range slider for dates--> */}

					{logs
						// TODO
						// .filter((log) => {
						// 	let filter = searchParams.get('filter');
						// 	if (!filter) return true;
						// 	let name = log.name.toLowerCase();
						// 	return name.startsWith(filter.toLowerCase());
						// })
						.map((log) => (
							<Link to={`/${log.sessionId}`} key={log.sessionId}>
								{log.sessionName}
							</Link>
						))}
				</div>
				<Outlet />
			</main>
		);
	} else if (props.userAuthed === false) {
		return <Navigate to="/login" />;

		// <main>
		// 	<h2>Log List</h2>
		// 	<p>Here you can find a list of all your saved logs</p>

		// 	<div>
		// 		<input
		// 			value={searchParams.get('filter') || ''}
		// 			onChange={(event) => {
		// 				let filter = event.target.value;
		// 				if (filter) {
		// 					setSearchParams({ filter });
		// 				} else {
		// 					setSearchParams({});
		// 				}
		// 			}}
		// 		/>
		// 		{/* TODO */}
		// 		{/* <label for="timePeriod">Time period: </label> <!--Create a dropdown/range slider for dates--> */}

		// 		{logs
		// 			// TODO
		// 			// .filter((log) => {
		// 			// 	let filter = searchParams.get('filter');
		// 			// 	if (!filter) return true;
		// 			// 	let name = log.name.toLowerCase();
		// 			// 	return name.startsWith(filter.toLowerCase());
		// 			// })
		// 			.map((log) => (
		// 				<Link to={`/${log.sessionId}`} key={log.sessionId}>
		// 					{log.sessionName}
		// 				</Link>
		// 			))}
		// 	</div>
		// 	<Outlet />
		// </main>
	}
}
export default LogList;
