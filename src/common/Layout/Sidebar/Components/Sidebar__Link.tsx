import { Link } from "react-router-dom";
export default function Sidebar__Link(props) {
  return (
    <Link
      id="sidebar__nav__link"
      to={props.path}
      className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-blue-700 "
    >
      {props.ico}
      <span className="ml-2 text-sm font-medium">{props.label}</span>
    </Link>
  );
}
