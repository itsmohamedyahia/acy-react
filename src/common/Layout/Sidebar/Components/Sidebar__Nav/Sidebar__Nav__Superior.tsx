import Sidebar__Link from "../Sidebar__Link";
import Side_HomeIcon from "../Icons/Side__HomeIcon";
import Side__AnalyticsIcon from "../Icons/Side__AnalyticsIcon";

export default function Sidebar__Nav__Superior() {
  return (
    <div
      id="sidebar__nav__superior"
      className="flex flex-col items-center w-full pt-3 border-t border-blue-900"
    >
      <Sidebar__Link label="Dashboard" ico={<Side_HomeIcon w={6}/>} path="/" />
      <Sidebar__Link
        label="Synapse Sage"
        ico={<Side__AnalyticsIcon w={6} h={6}/>}
        path="/study"
      />
      <Sidebar__Link
        label="Mastery Matrix"
        ico={<Side__AnalyticsIcon w={6} h={6} />}
        path="/practice"
      />
      <Sidebar__Link
        label="Blitze Blaze"
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
