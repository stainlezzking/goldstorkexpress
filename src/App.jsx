import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/builders/navbar.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
