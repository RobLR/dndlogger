import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LogList from './pages/loglist';
import NewLog from './pages/newlog';
import Log from './pages/log';
import Homepage from './pages/home';
import LoginModal from './components/login';
import { users, userList, emailList } from './data';
import Header from './components/header';
import Settings from './pages/settings';
import UserAuthentication from './pages/userAuth';

function App() {
	const [userAuthed, setUserAuthed] = useState(false);
	const [currentUser, setCurrentUser] = useState();
	const [logs, setLogs] = useState([]);
	const [currentId, setCurrentId] = useState(1);

	const location = useLocation();
	const background = location.state && location.state.background;

	// useEffect(() => {
	// 	const data = JSON.parse(window.localStorage.getItem('logs'));
	// 	if (data) {
	// 		setLogs(data);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	window.localStorage.setItem('logs', JSON.stringify(logs));
	// 	console.log(logs);
	// }, [logs]);

	return (
		<div>
			<Header userAuthed={userAuthed} />
			<Routes>
				<Route index element={<Homepage />} />
				<Route
					path="login"
					element={<UserAuthentication setUserAuthed={setUserAuthed} />}
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
						/>
					}
				/>
				<Route path="/settings" element={<Settings />} />
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
