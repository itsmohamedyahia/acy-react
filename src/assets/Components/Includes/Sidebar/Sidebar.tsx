import "./Sidebar.css";
import logo from "../../../../../public/images/cropped___logo.png";
import Side__Link from "./Components/Side__Link";
import Side_HomeIcon from "./Components/Icons/Side__HomeIcon";
import Side__LogoutIcon from "./Components/Icons/Side__LogoutIcon";
import Side__SettingsIcon from "./Components/Icons/Side__SettingsIcon";

// template at end of the page =>  https://preline.co/examples/layouts-application.html

// another one here https://codepen.io/robstinson/pen/bGwpNMV

function Sidebar() {
  {
    /* <ul classNameName="sidebar">
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
  <li classNameName="settings">
    <Link to="/settings">Settings</Link>
  </li>
</ul> */
  }

  return (
    <div
      id="application-sidebar"
      className="sidebar border-r border-gray-200 py-7 px-4 flex flex-col h-full"
    >
      <div className="px-6">
        <a
          className="flex-none link__logo text-xl font-semibold dark:text-white"
          href="/"
          aria-label="Brand"
        >
          <img src={logo} className="logo" />
        </a>
      </div>

      <nav className=" items-center mt-3 flex flex-col grow h-full">
        <ul className="space-y-2 w-full border-t border-gray-300 py-5">
          <Side__Link label="Dashboard" ico={<Side_HomeIcon />} route="/" />
          <Side__Link label="Lobby" ico={<Side_HomeIcon />} route="/lobby" />
          <Side__Link
            label="Leaderboard"
            ico={<Side_HomeIcon />}
            route="/leaderboard"
          />
          <Side__Link
            label="Analytics"
            ico={<Side_HomeIcon />}
            route="/analytics"
          />
        </ul>
        <ul className=" space-y-2 w-full mt-auto border-b border-t	border-gray-300 py-5 ">
          <Side__Link label="Settings" ico={<Side__SettingsIcon />} />
          <Side__Link label="Log Out" ico={<Side__LogoutIcon />} />
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
