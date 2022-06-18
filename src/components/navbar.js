import { NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<nav>
			<ul>
				<li>
					{' '}
					<NavLink
						to="/loglist"
						className={({ isActive }) => (isActive ? 'red' : undefined)}
					>
						View Logs
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/newlog"
						className={({ isActive }) => (isActive ? 'red' : undefined)}
					>
						New Log
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
