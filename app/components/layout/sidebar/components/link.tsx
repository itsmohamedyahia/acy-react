import Link from "next/link";
export default function SidebarLink(props) {
  return (
    <Link
      id="sidebar__nav__link"
      href={props.path}
      className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-blue-700 "
    >
      {props.ico}
      <span id="sidebar__label" className="ml-2 text-sm font-medium">
        {props.label}
      </span>
    </Link>
  );
}
