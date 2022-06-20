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
	// Loads all of the userdata from local storage so that I can use it. Probably not needed if you have a proper backend and could just pull down the specific users data.
	let emailList = JSON.parse(localStorage.getItem('EMAILLIST'));
	let usernameList = JSON.parse(localStorage.getItem('USERNAMELIST'));
	let users = JSON.parse(localStorage.getItem('USERS'));

	const [userAuthed, setUserAuthed] = useState(false);
	const [currentUserData, setCurrentUserData] = useState();
	const [currentUserId, setCurrentUserId] = useState(); //Keeps record of the users Id, which is the index in the array

	// const saveToLocalStorage = () => {
	// 	localStorage.setItem('USER_AUTH', JSON.stringify(userAuthed));
	// 	localStorage.setItem('USER_DATA', JSON.stringify(currentUserData));
	// 	localStorage.setItem('USER_ID', JSON.stringify(currentUserId));
	// 	localStorage.setItem('USERS', JSON.stringify(users));
	// };

	return (
		<div>
			<Header
				userAuthed={userAuthed}
				setUserAuthed={setUserAuthed}
				setCurrentUserData={setCurrentUserData}
				setCurrentUserId={setCurrentUserId}
			/>
			<Routes>
				<Route index element={<Homepage />} />
				<Route
					path="login"
					element={
						<UserAuthentication
							setUserAuthed={setUserAuthed}
							setCurrentUserData={setCurrentUserData}
							setCurrentUserId={setCurrentUserId}
						/>
					}
				/>
				<Route
					path="loglist"
					element={
						<LogList
							currentUserData={currentUserData}
							userAuthed={userAuthed}
						/>
					}
				/>
				<Route
					path=":logId"
					element={<Log currentUserData={currentUserData} />}
				/>
				<Route
					path="newlog"
					element={
						<NewLog
							userAuthed={userAuthed}
							currentUserData={currentUserData}
							setCurrentUserData={setCurrentUserData}
						/>
					}
				/>
				<Route
					path="settings"
					element={
						<Settings
							userAuthed={userAuthed}
							currentUserData={currentUserData}
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
