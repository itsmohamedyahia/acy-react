import avatar from "@/root/assets/images/avatars/path1.jpg";
import Image from "next/image";

export default function NavProfile() {
  return (
    <button
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="user-dropdown"
      data-dropdown-placement="bottom"
      type="button"
      className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
    >
      <Image
        className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
        src={avatar}
        alt="Image Description"
      />
    </button>
  );
}
