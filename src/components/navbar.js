import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
	return (
		<nav>
			<ul className="navLink">
				<li>
					<NavLink
						to="/loglist"
						className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
					>
						View Logs
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/newlog"
						className={({ isActive }) => (isActive ? 'activeLink' : undefined)}
					>
						New Log
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
