import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./assets/Root";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Lobby from "./assets/Pages/Lobby";
import Leaderboard from "./assets/Pages/Leaderboard";
import Analytics from "./assets/Pages/Analytics";
import Store from "./assets/Pages/Store";
import AddFriend from "./assets/Pages/AddFriend";
import Settings from "./assets/Pages/Settings";
import Error from "./assets/Pages/Error";
import PracticeNeuroMain from "./assets/Pages/Courses/Nuerology/Practice/PracticeNeuroMain";
import PracticeNeuro1 from "./assets/Pages/Courses/Nuerology/Practice/PracticeNeuro1";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <Root>
        <Error></Error>
      </Root>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/lobby", element: <Lobby /> },
      { path: "/leaderboard", element: <Leaderboard /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/store", element: <Store /> },
      { path: "/add-friend", element: <AddFriend /> },
      { path: "/settings", element: <Settings /> },
      {
        path: "/courses/neurology/practice",
        element: <PracticeNeuroMain />,
        children: [
          {
            path: "/courses/neurology/practice/lesson1",
            element: <PracticeNeuro1 />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
