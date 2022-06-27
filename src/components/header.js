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
			<div>
				{props.userAuthed ? (
					<div>
						<span>{props.currentUserData.username}</span>
						<button onClick={handleLogOut}>Log Out</button>
					</div>
				) : (
					<Link to="login">Log In/Sign Up</Link>
				)}
				<button onClick={props.saveToStorage}>Save</button>
			</div>
			<NavBar userAuthed={props.userAuthed} />
		</header>
	);
}
