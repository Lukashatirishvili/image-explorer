import Homepage from "./pages/Homepage";
import Historypage from "./pages/Historypage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ModalWindow from "./components/ModalWindow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "/:imagesID",
        element: <ModalWindow />,
      },
    ],
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
