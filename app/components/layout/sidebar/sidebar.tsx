import SidebarNav from "./components/nav/nav";
import SidebarHead from "./components/head";
import s from "./sidebar.module.css";

// https://codepen.io/robstinson/pen/bGwpNMV?editors=1010
// template at end of the page =>  https://preline.co/examples/layouts-application.html
// another one here https://codepen.io/robstinson/pen/bGwpNMV

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className={`${s.sidebar} flex lg:hidden`}
      aria-label="Sidebar"
    >
      <SidebarHead />
      <SidebarNav />
    </div>
  );
}
