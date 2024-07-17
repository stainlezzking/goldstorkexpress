import { logOut } from "@/components/firebase";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminRoot() {
  const { isLoading, user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  /*
  I want to check if on reload.
  because the authChange observer has not observed the state change
  this means that the user will always be null because there is no direct link linking to 
  the admin
  */
  const handleLogout = async function () {
    await logOut();
  };
  useEffect(() => {
    if (!window.location.href.endsWith("/admin/") && !user && !isLoading) {
      return navigate("/");
    }
  });
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <div className="bg-secondary py-10 text-2xl flex items-center ">
          <div className="container text-white flex max-sm:justify-between">
            <div className="flex gap-x-3 items-center shrink-0 ">
              <svg className="w-5 sm:w-10" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="4.89111" width="9.78261" height="9.78261" transform="rotate(-30 0 4.89111)" fill="#FFB82B" />
                <rect x="4.13086" y="15" width="10" height="10" fill="#FFB82B" />
                <rect x="18.1309" y="2" width="10" height="10" fill="#FFB82B" />
                <rect x="18.1309" y="15" width="10" height="10" fill="#FFB82B" />
              </svg>
              <h1 className="sm:text-2xl font-bold text-white">GSE</h1>
            </div>
            <div className="sm:flex-grow text-center font-medium sm:me-3 ">ADMIN</div>
          </div>
        </div>
        <div className="py-3 flex gap-x-5 justify-center text-secondary text-lg">
          <NavLink className={({ _, isActive }) => (isActive ? "font-medium text-secondary/90 underline" : "")} to="/admin/dashboard">
            Dashboard
          </NavLink>
          <NavLink className={({ _, isActive }) => (isActive ? "font-medium text-secondary/90 underline" : "")} to="/admin/newpackage">
            Create Package
          </NavLink>
          <button
            onClick={() => handleLogout()}
            className="font-medium text-orange-700 hover:text-white hover:bg-orange-700 px-3 "
            to="/admin/newpackage"
          >
            Logout
          </button>
        </div>
        <div className="flex-grow justify-stretch flex items-stretch">{isLoading ? <h1> Loading</h1> : <Outlet />}</div>
      </div>
    </>
  );
}
