import Homepage from "./pages/Homepage";
import Historypage from "./pages/Historypage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "history",
    element: <Historypage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
