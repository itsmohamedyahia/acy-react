import Sidebar__Link from "../Sidebar__Link";
import Side_HomeIcon from "../Icons/Side__HomeIcon";
import Side__AnalyticsIcon from "../Icons/Side__AnalyticsIcon";
import SynapseIcon from "../../../../UI/Icons/SynapseIcon";

export default function Sidebar__Nav__Superior() {
  return (
    <div
      id="sidebar__nav__superior"
      className="flex flex-col items-center w-full pt-3 border-t border-blue-900"
    >
      <Sidebar__Link label="Dashboard" ico={<Side_HomeIcon w={6} />} path="/" />
      <Sidebar__Link
        label="Synapse"
        ico={<SynapseIcon w={6} h={6} />}
        path="/synapse"
      />
      <Sidebar__Link
        label="Mastery"
        ico={<Side__AnalyticsIcon w={6} h={6} />}
        path="/mastery"
      />
      <Sidebar__Link
        label="Blitz"
        ico={<Side__AnalyticsIcon w={6} h={6} />}
        path="/rev"
      />
      <Sidebar__Link
        label="Analytics"
        ico={<Side__AnalyticsIcon w={6} h={6} />}
        path="/analytics"
      />
    </div>
  );
}
