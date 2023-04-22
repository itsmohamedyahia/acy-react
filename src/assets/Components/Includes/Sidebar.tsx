import { Link } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
  return (
    <ul className="sidebar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/lobby">Lobby</Link>
      </li>
      <li>
        <Link to="/leaderboard">Leaderboard</Link>
      </li>
      <li>
        <Link to="/analytics">Analytics</Link>
      </li>
      <li>
        <Link to="/store">Store</Link>
      </li>
      <li>
        <Link to="/add-friend">Add Friend</Link>
      </li>
      <li className="settings">
        <Link to="/settings">Settings</Link>
      </li>
    </ul>
  );
}

export default Sidebar;
