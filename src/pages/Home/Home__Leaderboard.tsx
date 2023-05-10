import Card from "../../../Components/UI/Card";
export default function Home__Leaderboard() {
  return (
    <div className="flex flex-col home__leaderboard ">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden border rounded-lg shadow dark:border-gray-700 dark:shadow-gray-900">
          <table
          // className="flex flex-col items-center min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          >
            <thead className="block bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="font-medium text-left text-gray-500 text-s dark:text-gray-400"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-3 font-medium text-left text-gray-500 text-s dark:text-gray-400"
                >
                  Leaderboard
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-medium text-left text-gray-500 text-s dark:text-gray-400"
                ></th>
              </tr>
            </thead>
            <tbody className="block divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  1
                </td>
                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  John Brown
                </td>
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  45
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  2
                </td>
                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  Jim Green
                </td>
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  27
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  3
                </td>
                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  Joe Black
                </td>
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  31
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  2
                </td>
                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  Jim Green
                </td>
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  27
                </td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  2
                </td>
                <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  Jim Green
                </td>
                <td className="px-6 py-4 text-gray-800 whitespace-nowrap text-md dark:text-gray-200">
                  27
                </td>
              </tr>
            </tbody>
            <thead className="block px-10 bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 font-medium text-left text-gray-500 text-s dark:text-gray-400"
                ></th>
                <th
                  scope="col"
                  className="px-6 py-3 font-medium text-left text-gray-500 text-s dark:text-gray-400"
                >
                  See More &rarr;
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 font-medium text-left text-gray-500 text-s dark:text-gray-400"
                ></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
