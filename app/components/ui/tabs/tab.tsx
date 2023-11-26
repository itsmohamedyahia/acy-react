"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Tab(props) {
  const pathname = usePathname();
  const newPathname =
    pathname.split("/").length > 1 ? pathname.split("/")[1] : pathname;
  return (
    <li className="mr-2">
      <Link
        href={`/${newPathname}/${props.label.toLowerCase()}`}
        className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
      >
        {props.label}
      </Link>
    </li>
  );
}
