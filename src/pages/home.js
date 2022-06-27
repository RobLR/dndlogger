import { Link } from 'react-router-dom';

export default function Homepage() {
	return (
		<main>
			<img src={require('./resized-DNDNotes2.webp')} alt="d&d notes" />
			<h2>Welcome!</h2>
			<p>
				This is a simple program aimed at keeping track of D&D sessions. Start
				by creating a new account and then making some logs.
			</p>
			<Link className="start" to="/newlog">
				Get Started!
			</Link>
		</main>
	);
}
