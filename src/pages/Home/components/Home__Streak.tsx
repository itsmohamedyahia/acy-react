import Card from "../../../common/UI/Card";
import HomeStreakDays from "./HomeStreakDays";
import HomeStreakHeader from "./HomeStreakHeader";

export default function Home__Streak() {
  return (
    <Card addClass="home__streak flex items-center justify-around md:flex-col md:gap-y-4">
      <HomeStreakHeader/>
      <HomeStreakDays/>
    </Card>
  );
}

// export default function Home__Streak() {
//   return (
//     <div className=" home__streak">
//       <div className="flex items-center justify-between h-1 bg-gray-200 dark:bg-gray-700">
//         <div className="flex items-center w-1/3 h-1 bg-indigo-700">
//           <div className="flex items-center justify-center w-6 h-6 bg-indigo-700 rounded-full shadow">
//             <img
//               src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
//               alt="check"
//             />
//           </div>
//         </div>
//         <div className="relative flex items-center justify-between w-1/3 h-1 bg-indigo-700">
//           <div className="absolute right-0 -mr-2">
//             <div className="relative px-2 py-1 mt-16 -mr-12 bg-white rounded shadow-lg dark:bg-gray-800">
//               <svg
//                 className="absolute top-0 left-0 right-0 w-full -mt-1 text-white dark:text-gray-800"
//                 width="16px"
//                 height="8px"
//                 viewBox="0 0 16 8"
//                 version="1.1"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g
//                   id="Page-1"
//                   stroke="none"
//                   strokeWidth="1"
//                   fill="none"
//                   fillRule="evenodd"
//                 >
//                   <g
//                     id="Progress-Bars"
//                     transform="translate(-322.000000, -198.000000)"
//                     fill="currentColor"
//                   >
//                     <g
//                       id="Group-4"
//                       transform="translate(310.000000, 198.000000)"
//                     >
//                       <polygon id="Triangle" points="20 0 28 8 12 8"></polygon>
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//               <p
//                 tabindex="0"
//                 className="text-xs font-bold text-indigo-700 focus:outline-none dark:text-indigo-400"
//               >
//                 Tues
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center justify-center w-6 h-6 -ml-2 bg-indigo-700 rounded-full shadow">
//             <img
//               src="https://tuk-cdn.s3.amazonaws.com/can-uploader/thin_with_steps-svg1.svg"
//               alt="check"
//             />
//           </div>
//           <div className="relative flex items-center justify-center w-6 h-6 -mr-3 bg-white rounded-full shadow dark:bg-gray-700">
//             <div className="w-3 h-3 bg-indigo-700 rounded-full"></div>
//           </div>
//         </div>
//         <div className="flex justify-end w-1/3">
//           <div className="w-6 h-6 bg-white rounded-full shadow dark:bg-gray-700"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
