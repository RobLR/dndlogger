import './App.css';
import { NavLink, Outlet, Link } from 'react-router-dom';

function App() {
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
      <Outlet />
    </div>
  );
}

export default App;
