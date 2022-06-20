import './App.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LogList from './pages/loglist';
import NewLog from './pages/newlog';
import Log from './pages/log';
import Homepage from './pages/home';
import Header from './components/header';
import Settings from './pages/settings';
import UserAuthentication from './pages/userAuth';

function App() {
	const [userAuthed, setUserAuthed] = useState(false);
	const [currentUser, setCurrentUser] = useState();
	const [logs, setLogs] = useState([]);
	const [currentId, setCurrentId] = useState(1);

	return (
		<div>
			<Header
				userAuthed={userAuthed}
				setUserAuthed={setUserAuthed}
				setCurrentUser={setCurrentUser}
				setLogs={setLogs}
			/>
			<Routes>
				<Route index element={<Homepage />} />
				<Route
					path="login"
					element={
						<UserAuthentication
							setUserAuthed={setUserAuthed}
							setCurrentUser={setCurrentUser}
							setLogs={setLogs}
							currentUser={currentUser}
							setCurrentId={setCurrentId}
						/>
					}
				/>
				<Route
					path="loglist"
					element={<LogList logs={logs} userAuthed={userAuthed} />}
				/>
				<Route path=":logId" element={<Log logs={logs} />} />
				<Route
					path="newlog"
					element={
						<NewLog
							currentId={currentId}
							setCurrentId={setCurrentId}
							logs={logs}
							setLogs={setLogs}
							userAuthed={userAuthed}
							currentUser={currentUser}
						/>
					}
				/>
				<Route
					path="settings"
					element={
						<Settings userAuthed={userAuthed} currentUser={currentUser} />
					}
				/>
				<Route
					path="*"
					element={
						<main>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
			<Outlet />
		</div>
	);
}

export default App;
