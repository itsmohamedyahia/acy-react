// import Card from "../../Components/UI/Card";
import ComingSoon from "../../../../common/Overlay/ComingSoon";
import TableBody from "./components/Table__Body";
import TableFooter from "./components/Table__Footer";
import TableHead from "./components/Table__Head";
export default function Home__Leaderboard() {
  return (
    <div className="flex flex-col home__leaderboard ">
      <div className="inline-block min-w-full align-middle relative ">
        <div className="overflow-hidden border rounded-lg shadow dark:border-gray-700 dark:shadow-gray-900">
          <table className="flex flex-col items-center min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <TableHead />
            <TableBody />
            <TableFooter />
          </table>
        </div>
        <ComingSoon/>
      </div>
     
    </div>
  );
}
