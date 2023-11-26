// import Card from "../../Components/UI/Card";
import ComingSoon from "@/comps/overlay/comingSoon";
import TableBody from "./components/table__Body";
import TableFooter from "./components/table__Footer";
import TableHead from "./components/table__Head";
export default function Home__Leaderboard() {
  return (
    <div className="flex flex-col home__leaderboard ">
      <div className="relative inline-block min-w-full align-middle ">
        <div className="overflow-hidden border rounded-lg shadow dark:border-gray-700 dark:shadow-gray-900">
          <table className="flex flex-col items-center min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <TableHead />
            <TableBody />
            <TableFooter />
          </table>
        </div>
        <ComingSoon />
      </div>
    </div>
  );
}
