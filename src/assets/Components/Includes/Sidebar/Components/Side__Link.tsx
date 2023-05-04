import "./Side__Link.css";
import { Link } from "react-router-dom";
export default function Side__Link(props) {
  return (
    <li className="">
      <Link
        to={props.route}
        className=" rounded flex items-center p-3 mt-2 hover:bg-gray-400 text-slate-700"
      >
        {props.ico}
        <span className="ml-2 text-sm font-medium"> {props.label}</span>
      </Link>
    </li>
  );
}

/*
<a
        className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100"
        href="javascript:;"
      >
*/
