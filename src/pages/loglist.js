import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { getLogs } from '../data';

function LogList() {
	let logs = getLogs();
	let [searchParams, setSearchParams] = useSearchParams();
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
				{/* <label for="timePeriod">Time period: </label> <!--Create a dropdown/range slider for dates--> */}

				{logs
					.filter((log) => {
						let filter = searchParams.get('filter');
						if (!filter) return true;
						let name = log.name.toLowerCase();
						return name.startsWith(filter.toLowerCase());
					})
					.map((log) => (
						<Link to={`/${log.logId}`} key={log.logId}>
							{log.name}
						</Link>
					))}
			</div>
			<Outlet />
		</main>
	);
}

export default LogList;
