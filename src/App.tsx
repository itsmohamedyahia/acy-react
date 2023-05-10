import { RouterProvider } from "react-router-dom";
import { router } from "./setup/routes/Route";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
