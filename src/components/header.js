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
		<header className="header">
			<Link to="/">D&D Logger</Link>
			<div className="navButtons">
				{props.userAuthed === true && <NavBar userAuthed={props.userAuthed} />}
				<div className="userControls">
					{props.userAuthed ? (
						<div className="userControlsButtons">
							<span>{props.currentUserData.username}</span>
							<span onClick={handleLogOut}>Log Out</span>{' '}
							<span onClick={props.saveToStorage}>Save</span>
						</div>
					) : (
						<div className="userControlsButtons">
							<Link to="login">Log In/Sign Up</Link>
							<span onClick={props.saveToStorage}>Save</span>
						</div>
					)}
					{/* <span onClick={props.saveToStorage}>Save</span> */}
				</div>
			</div>
		</header>
	);
}
