export default function Login(props) {
	return (
		<main>
			<h3>Please log in</h3>
			<form onSubmit={props.handleSubmit}>
				<label>
					Email: <input required type="email" />
				</label>
				<label>
					Password: <input required type="password" />{' '}
				</label>
				<input type="submit" value="Log In" />
			</form>
		</main>
	);
}
