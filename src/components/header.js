import { Link, useNavigate } from 'react-router-dom';
import NavBar from './navbar';

export default function Header(props) {
	const navigate = useNavigate();
	const handleLogOut = () => {
		props.setUserAuthed(false);
		props.setCurrentUserData({});
		props.setCurrentUserId(0);
		navigate('/');
	};

	return (
		<header className="header">
			<Link className="title" to="/">
				D&D Logger
			</Link>
			<div className="navButtons">
				{props.userAuthed === true && <NavBar userAuthed={props.userAuthed} />}
				<div className="userControls">
					{props.userAuthed ? (
						<div className="userControlsButtons">
							<span className="link">{props.currentUserData.username}</span>
							<span className="link" onClick={handleLogOut}>
								Log Out
							</span>{' '}
							<span className="link" onClick={props.saveToStorage}>
								Save
							</span>
						</div>
					) : (
						<div className="userControlsButtons">
							<Link className="link" to="login">
								Log In/Sign Up
							</Link>
							<span className="link" onClick={props.saveToStorage}>
								Save
							</span>
						</div>
					)}
					{/* <span onClick={props.saveToStorage}>Save</span> */}
				</div>
			</div>
		</header>
	);
}
