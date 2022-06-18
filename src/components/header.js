import { Link } from 'react-router-dom';
import NavBar from './navbar';

export default function Header(props) {
	return (
		<header>
			{' '}
			<Link to="/">D&D Logger</Link>
			{props.userAuthed ? (
				<button>Log Out</button>
			) : (
				<Link to="/login">Log In/Sign Up</Link>
			)}
			<NavBar />
		</header>
	);
}
