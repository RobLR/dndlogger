import { Navigate } from 'react-router-dom';

export default function Settings(props) {
	if (props.userAuthed === false) {
		return <Navigate to="/login" />;
	} else {
		return (
			<main>
				<h2>Settings</h2>
				<form>
					<label>
						Theme{' '}
						<select name="theme">
							<option value="light">Light</option>
							<option value="dark">Dark</option>
						</select>
					</label>
					<label>
						Username{' '}
						<input
							disabled
							type="text"
							value={props.currentUserData.username}
						/>
					</label>
					<label>
						Email{' '}
						<input disabled type="email" value={props.currentUserData.email} />
					</label>
					<label>
						Password{' '}
						<input
							disabled
							type="password"
							value={props.currentUserData.password}
						/>
					</label>
				</form>
			</main>
		);
	}
}
