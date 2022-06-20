import { Link, useNavigate } from 'react-router-dom';
import NavBar from './navbar';

export default function Header(props) {
	const navigate = useNavigate();
	const handleLogOut = () => {
		props.setUserAuthed(false);
		props.setCurrentUserData();
		props.setCurrentUserId();
		navigate('/');
	};

	return (
		<header>
			<Link to="/">D&D Logger</Link>
			{props.userAuthed ? (
				<div>
					<button onClick={handleLogOut}>Log Out</button>
					<Link to="settings">Settings</Link>
				</div>
			) : (
				<Link to="login">Log In/Sign Up</Link>
			)}
			<NavBar userAuthed={props.userAuthed} />
		</header>
	);
}
