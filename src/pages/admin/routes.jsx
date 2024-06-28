import Dashboard from "./dashboard";
import Admin_Login from "./login";
import NewPackage from "./package";

const AdminRoutes = [
  {
    path: "",
    element: <Admin_Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "package",
    element: <NewPackage />,
  },
];

export default AdminRoutes;
