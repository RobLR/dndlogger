import './App.css';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LogList from './pages/loglist';
import NewLog from './pages/newlog';
import Log from './pages/log';
import Homepage from './pages/home';

function App() {
	const [currentId, setCurrentId] = useState(1);
	const [logs, setLogs] = useState([]);

	useEffect(() => {
		const data = window.localStorage.getItem('logs');
		if (data) {
			setLogs(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		window.localStorage.setItem('logs', JSON.stringify(logs));
		console.log(logs);
	}, [logs]);

	return (
		<div>
			<Link to="/">D&D Logger</Link>
			<nav>
				<ul>
					<li>
						{' '}
						<NavLink
							to="/loglist"
							className={({ isActive }) => (isActive ? 'red' : undefined)}
						>
							View Logs
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/newlog"
							className={({ isActive }) => (isActive ? 'red' : undefined)}
						>
							New Log
						</NavLink>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path="loglist" element={<LogList logs={logs} />} />
				<Route path=":logId" element={<Log logs={logs} />} />
				<Route
					path="newlog"
					element={
						<NewLog
							currentId={currentId}
							setCurrentId={setCurrentId}
							logs={logs}
							setLogs={setLogs}
							// save={saveToStorage}
						/>
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
