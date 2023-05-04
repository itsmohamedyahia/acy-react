import "./Side__Link.css";

export default function Side__Link(props) {
  return (
    <li className="">
      <a
        className=" rounded flex items-center w-full h-12 px-3 mt-2 hover:bg-gray-400 text-slate-700"
        href="#"
      >
        {props.ico}
        <span className="ml-2 text-sm font-medium"> {props.label}</span>
      </a>
    </li>
  );
}

/*
<a
        className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100"
        href="javascript:;"
      >
*/
