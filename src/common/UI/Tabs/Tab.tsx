import { NavLink, useLocation } from "react-router-dom";

export default function Tab(props) {
  const location = useLocation();
  const path = location.pathname;
  const firstPath = path.split("/")[1];
  return (
    <li className="mr-2">
      <NavLink
        to={`/${firstPath}/${props.label.toLowerCase()}`}
        className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
      >
        {props.label}
      </NavLink>
    </li>
  );
}
