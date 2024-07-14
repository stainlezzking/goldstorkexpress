import Dashboard from "./dashboard";
import Admin_Login from "./login";
import NewPackage from "./newpackage";
import Package from "./package";

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
    element: <Package />,
  },
  {
    path: "newpackage",
    element: <NewPackage />,
  },
];

export default AdminRoutes;
