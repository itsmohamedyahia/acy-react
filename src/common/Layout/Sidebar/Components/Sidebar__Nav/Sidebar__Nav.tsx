import Sidebar__Nav__Superior from "./Sidebar__Nav__Superior";
import Sidebar__Nav__Inferior from "./Sidebar__Nav__Inferior";

export default function Sidebar__Nav() {
  return (
    <div className="grid w-full h-full px-2">
      <Sidebar__Nav__Superior />
      <Sidebar__Nav__Inferior />
    </div>
  );
}
