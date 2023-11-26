import LogoIcon from "./icons/logoIcon";
import s from "./head.module.css";

export default function SidebarHead() {
  return (
    <div className={s["sidebar__head"]}>
      <a id="sidebar__logo__link" className="flex items-center w-full" href="#">
        <LogoIcon className={s["logo-icon"]} />
        <span id="sidebar__label" className={` ${s["logo-text"]}`}>
          Acy
        </span>
      </a>
    </div>
  );
}
