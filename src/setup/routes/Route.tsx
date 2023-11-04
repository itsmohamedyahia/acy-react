import { createBrowserRouter } from "react-router-dom";

// main
import HomePage from "../../pages/Home/Home";
import AboutPage from "../../pages/About/About";
import Store from "../../pages/Store/Store";
import Security from "../../pages/Settings/Security/Security";
import ProfileSetup from "../../pages/ProfileSetup/ProfileSetup";
//login
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Signup/Signup";
// import ProfileSetup from "./assets/Pages/Login/ProfileSetup";
// core
// import MasteryMatrixPage from "../../features/CoreFeatures/MasteryMatrix/MasteryMatrix";
// import BlitzBlazePage from "../../features/CoreFeatures/BlitzBlaze/BlitzBlaze";
import Synapse from "../../features/CoreFeatures/Synapse/Synapse";
// utility
import LeaderboardPage from "../../features/UtilityFeatures/Leaderboard/Leaderboard";
import AnalyticsPage from "../../features/UtilityFeatures/Analytics/Analytics";
import AddFriend from "../../features/UtilityFeatures/Friends/AddFriend";
import Profile from "../../pages/Settings/Profile/Profile";
//other
import Root from "../../common/Layout/Root/Root";
import Error from "../../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      // main
      { index: true, element: <HomePage /> }, // path: ''
      { path: "about", element: <AboutPage /> },
      { path: "settings/profile", element: <Profile /> },
      { path: "settings/security", element: <Security /> },
      // core
      { path: "synapse", element: <Synapse /> },
      { path: "analytics", element: <AnalyticsPage /> },
      { path: "store", element: <Store /> },
      { path: "add-friend", element: <AddFriend /> },
      // utility
      { path: "leaderboard", element: <LeaderboardPage /> }
      // {
      //   path: "courses/neurology/practice/:lessonId",
      //   element: <PracticeNeuroSession />
      // }
    ]
  },
  // main
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/profile-setup",
    element: <ProfileSetup />
  }
]);
