import Sidebar__Nav from "./Components/Sidebar__Nav/Sidebar__Nav";
import Sidebar__Head from "./Components/Sidebar__Head";
import s from "./Sidebar.module.css";

// https://codepen.io/robstinson/pen/bGwpNMV?editors=1010
// template at end of the page =>  https://preline.co/examples/layouts-application.html
// another one here https://codepen.io/robstinson/pen/bGwpNMV

export default function Sidebar() {
  return (
    <div id="sidebar" className={`${s.sidebar}`} aria-label="Sidebar">
      <Sidebar__Head />
      <Sidebar__Nav />
    </div>
  );
}
