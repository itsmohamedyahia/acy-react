import SidebarNavSuperior from "./navSuperior";
import SidebarNavInferior from "./navInferior";

export default function SidebarNav() {
  return (
    <div id="sidebar__nav" className="grid w-full h-full px-2">
      <SidebarNavSuperior />
      <SidebarNavInferior />
    </div>
  );
}
