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
import Footer from './components/footer';

function App() {
	// Sets states that I need accross all of the website
	const [users, setUsers] = useState([]);
	const [emailList, setEmailList] = useState([]);
	const [usernameList, setUsernameList] = useState([]);

	const [userAuthed, setUserAuthed] = useState(false);
	const [currentUserData, setCurrentUserData] = useState({});
	const [currentUserId, setCurrentUserId] = useState(0);

	// Loads data from local storage (TODO: update website so that only one data needs to be loaded, and everything is created from that)
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

	// Saves all data to storage
	const saveToStorage = () => {
		localStorage.setItem('USERS', JSON.stringify(users));
		localStorage.setItem('EMAILLIST', JSON.stringify(emailList));
		localStorage.setItem('USERNAMELIST', JSON.stringify(usernameList));

		localStorage.setItem('USER_AUTH', JSON.stringify(userAuthed));
		localStorage.setItem('USER_ID', JSON.stringify(currentUserId));
		localStorage.setItem('USER_DATA', JSON.stringify(currentUserData));
	};

	// Loads from storage on initial render
	useEffect(() => {
		loadFromStorage();
	}, []);

	// Replaces the current users in the overall user list with the updated version. Bad code as it is directly mutating a state
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
			<Footer />
		</div>
	);
}

export default App;
