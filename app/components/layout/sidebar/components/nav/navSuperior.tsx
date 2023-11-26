import SidebarLink from "../link";
import HomeIcon from "../icons/homeIcon";
import AnalyticsIcon from "../icons/analyticsIcon";
import SynapseIcon from "@/ui/icons/synapseIcon";

export default function SidebarNavSuperior() {
  return (
    <div
      id="sidebar__nav__superior"
      className="flex flex-col items-center w-full pt-3 border-t border-blue-900"
    >
      <SidebarLink label="Dashboard" ico={<HomeIcon w={6} />} path="/" />
      <SidebarLink
        label="Synapse"
        ico={<SynapseIcon w={6} h={6} />}
        path="/synapse"
      />
      <SidebarLink
        label="Mastery"
        ico={<AnalyticsIcon w={6} h={6} />}
        path="/mastery"
      />
      <SidebarLink
        label="Blitz"
        ico={<AnalyticsIcon w={6} h={6} />}
        path="/rev"
      />
      <SidebarLink
        label="Analytics"
        ico={<AnalyticsIcon w={6} h={6} />}
        path="/analytics"
      />
    </div>
  );
}
