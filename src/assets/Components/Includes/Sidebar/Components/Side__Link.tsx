export default function Side__Link(props) {
  return (
    <li>
      <a
        className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100"
        href="javascript:;"
      >
        {props.ico}
        {props.label}
      </a>
    </li>
  );
}
