export default function Signup(props) {
	return (
		<div>
			<form onSubmit={props.handleSubmit}>
				<label>
					Email address: <input required type="email" />
				</label>
				<label>
					Username: <input required type="text" />
				</label>
				<label>
					Choose a password: <input required type="password" />
				</label>
				<label>
					Repeat password: <input required type="password" />
				</label>
				<input type="submit" value="Sign Up!" />
			</form>
		</div>
	);
}
