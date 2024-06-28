import { Outlet } from "react-router-dom";

export default function AdminRoot() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <div className="bg-secondary py-10 text-2xl flex items-center ">
          <div className="container text-white flex">
            <div className="flex gap-x-3 items-center shrink-0 ">
              <svg className="w-10" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="4.89111" width="9.78261" height="9.78261" transform="rotate(-30 0 4.89111)" fill="#FFB82B" />
                <rect x="4.13086" y="15" width="10" height="10" fill="#FFB82B" />
                <rect x="18.1309" y="2" width="10" height="10" fill="#FFB82B" />
                <rect x="18.1309" y="15" width="10" height="10" fill="#FFB82B" />
              </svg>
              <h1 className="text-2xl font-bold text-white">GSE</h1>
            </div>
            <div className="flex-grow text-center font-medium me-3">ADMIN</div>
          </div>
        </div>
        <div className="flex-grow justify-stretch flex items-stretch">
          <Outlet />
        </div>
      </div>
    </>
  );
}
