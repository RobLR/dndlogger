import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LogList from './pages/loglist';
import NewLog from './pages/newlog';
import Log from './pages/log';
import Homepage from './pages/home';
import Header from './components/header';
import UserAuthentication from './pages/userAuth';
import { useEffect } from 'react';

function App() {
	// Loads all of the userdata from local storage so that I can use it. Probably not needed if you have a proper backend and could just pull down the specific users data.
	const [users, setUsers] = useState([]);
	const [emailList, setEmailList] = useState([]);
	const [usernameList, setUsernameList] = useState([]);

	const [userAuthed, setUserAuthed] = useState(false);
	const [currentUserData, setCurrentUserData] = useState({});
	const [currentUserId, setCurrentUserId] = useState(0);

	const loadFromStorage = () => {
		const emaildata = localStorage.getItem('EMAILLIST');
		if (emaildata) {
			setEmailList(JSON.parse(emaildata));
		} else {
			setEmailList([]);
		}

		const namedata = localStorage.getItem('USERNAMELIST');
		if (namedata) {
			setUsernameList(JSON.parse(namedata));
		} else {
			setUsernameList([]);
		}

		const users = localStorage.getItem('USERS');
		if (users) {
			setUsers(JSON.parse(users));
		} else {
			setUsers([]);
		}

		const auth = localStorage.getItem('USER_AUTH');
		if (auth) {
			setUserAuthed(JSON.parse(auth));
		} else {
			setUserAuthed(false);
		}

		const currentuser = localStorage.getItem('USER_DATA');
		if (currentuser) {
			setCurrentUserData(JSON.parse(currentuser));
		} else {
			setCurrentUserData({});
		}

		const id = localStorage.getItem('USER_ID');
		if (id) {
			setCurrentUserId(JSON.parse(id));
		} else {
			setCurrentUserId(0);
		}
	};

	const saveToStorage = () => {
		//Necessary to use local storage
		localStorage.setItem('USERS', JSON.stringify(users));
		localStorage.setItem('EMAILLIST', JSON.stringify(emailList));
		localStorage.setItem('USERNAMELIST', JSON.stringify(usernameList));

		//Actual properties the website needs
		localStorage.setItem('USER_AUTH', JSON.stringify(userAuthed));
		localStorage.setItem('USER_ID', JSON.stringify(currentUserId));
		localStorage.setItem('USER_DATA', JSON.stringify(currentUserData));
	};

	useEffect(() => {
		loadFromStorage();
	}, []);

	const updateUserData = () => {
		users.splice(currentUserId, 1, currentUserData);
	};

	return (
		<div>
			<Header
				userAuthed={userAuthed}
				setUserAuthed={setUserAuthed}
				setCurrentUserData={setCurrentUserData}
				setCurrentUserId={setCurrentUserId}
				currentUserData={currentUserData}
				saveToStorage={saveToStorage}
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
							users={users}
							emailList={emailList}
							setUsers={setUsers}
							setUsernameList={setUsernameList}
							setEmailList={setEmailList}
							usernameList={usernameList}
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
							updateUserData={updateUserData}
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
