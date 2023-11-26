import LogoutIcon from "../icons/logoutIcon";
import StoreIcon from "../icons/storeIcon";
import SidebarLink from "../link";
import SettingsIcon from "../icons/settingsIcon";

export default function SidebarNavInferior() {
  return (
    <div className="flex flex-col items-center w-full mt-auto mb-6 border-t border-blue-900">
      <SidebarLink label="Store" ico={<StoreIcon />} path="/store" />
      <SidebarLink
        label="Settings"
        ico={<SettingsIcon />}
        path="/settings/security"
      />
      <SidebarLink label="Log Out" ico={<LogoutIcon />} path="/logout" />
    </div>
  );
}
