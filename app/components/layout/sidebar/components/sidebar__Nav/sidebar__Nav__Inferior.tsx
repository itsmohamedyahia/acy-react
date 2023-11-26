import Side__LogoutIcon from "../icons/side__LogoutIcon";
import Side__StoreIcon from "../icons/side__StoreIcon";
import Sidebar__Link from "../sidebar__Link";
import Side__SettingsIcon from "../icons/side__SettingsIcon";

export default function Sidebar__Nav__Inferior() {
  return (
    <div className="flex flex-col items-center w-full mt-auto mb-6 border-t border-blue-900">
      <Sidebar__Link label="Store" ico={<Side__StoreIcon />} path="/store" />
      <Sidebar__Link
        label="Settings"
        ico={<Side__SettingsIcon />}
        path="/settings/security"
      />
      <Sidebar__Link
        label="Log Out"
        ico={<Side__LogoutIcon />}
        path="/logout"
      />
    </div>
  );
}
