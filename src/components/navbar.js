import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
	return (
		<nav className="navLink">
			<NavLink
				to="/loglist"
				className={({ isActive }) => (isActive ? 'activeLink link' : 'link')}
			>
				View Logs
			</NavLink>
			<NavLink
				to="/newlog"
				className={({ isActive }) => (isActive ? 'activeLink link' : 'link')}
			>
				New Log
			</NavLink>
		</nav>
	);
}
