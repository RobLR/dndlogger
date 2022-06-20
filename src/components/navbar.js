import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
	return (
		<nav>
			<ul>
				{props.userAuthed === true && (
					<li>
						<NavLink
							to="/loglist"
							className={({ isActive }) => (isActive ? 'red' : undefined)}
						>
							View Logs
						</NavLink>
					</li>
				)}
				{props.userAuthed === true && (
					<li>
						<NavLink
							to="/newlog"
							className={({ isActive }) => (isActive ? 'red' : undefined)}
						>
							New Log
						</NavLink>
					</li>
				)}
			</ul>
		</nav>
	);
}
