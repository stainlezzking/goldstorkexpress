import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/builders/navbar.component";
import Blogs from "./pages/blogs";
import About from "./pages/about";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Notfound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
