import { Link } from 'react-router-dom';

export default function Homepage() {
	return (
		<main>
			<img src="" alt="" />
			<h2>Welcome!</h2>
			<p>This is a simple program aimed at keeping track of D&D sessions</p>
			<Link to="/newlog">Get Started!</Link>
		</main>
	);
}
