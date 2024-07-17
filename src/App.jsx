import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/builders/navbar.component";
import Blogs from "./pages/blogs";
import About from "./pages/about";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import Services from "./pages/services";
import Service from "./pages/one-service";
import AdminRoutes from "./pages/admin/routes";
import AdminRoot from "./pages/admin/root";
import Track from "./pages/track";
import Oneblog from "./pages/one-blog";
import blogs from "./database.json";
import { onAuthChange } from "./components/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "./redux/reducer";
const blogsLoader = function ({ params }) {
  const result = blogs.find((blog) => blog._id == params.id);
  if (!result) throw new Error("404 Page Not Found! Custom.");
  return result;
};

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
        path: "/blogs/:id",
        element: <Oneblog />,
        loader: blogsLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/",
        element: <Service />,
      },
      {
        path: "track",
        element: <Track />,
      },
    ],
    // errorElement: <Notfound />,
  },
  {
    path: "/admin/",
    element: <AdminRoot />,
    children: AdminRoutes,
  },
  ,
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthChange(function (user) {
      if (user) {
        const { uid, email, displayName } = user;
        return dispatch(saveUser({ isLoading: false, user: { uid, email, displayName } }));
      }
      return dispatch(saveUser({ isLoading: false, user: null }));
    });
    return unsubscribe;
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
