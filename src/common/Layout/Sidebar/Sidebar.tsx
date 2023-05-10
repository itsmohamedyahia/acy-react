import "./Sidebar.css";
import Sidebar__Foot from "./Components/Sidebar__Foot";
import Sidebar__Nav from "./Components/Sidebar__Nav/Sidebar__Nav";
import Sidebar__Head from "./Components/Sidebar__Head";

// https://codepen.io/robstinson/pen/bGwpNMV?editors=1010
// template at end of the page =>  https://preline.co/examples/layouts-application.html
// another one here https://codepen.io/robstinson/pen/bGwpNMV

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex flex-col items-center h-full overflow-hidden text-indigo-300 bg-main sidebar"
      aria-label="Sidebar"
    >
      <Sidebar__Head />
      <Sidebar__Nav />
      <Sidebar__Foot />
    </div>
  );
}
