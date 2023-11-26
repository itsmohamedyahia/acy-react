import AnalyticsIcon from "../sidebar/components/icons/analyticsIcon";
import HomeIcon from "../sidebar/components/icons/homeIcon";

export default function MobileNavbar() {
  return (
    <div className="bg-blue-800 text-indigo-300 p-[0.7rem] lg:flex justify-around hidden absolute bottom-0 left-0 right-0">
      <HomeIcon padding w={8} h={8} />
      <AnalyticsIcon w={8} />
      <AnalyticsIcon w={8} />
      <AnalyticsIcon w={8} />
    </div>
  );
}
