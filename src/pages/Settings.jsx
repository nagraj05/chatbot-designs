import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/DesktopSidebar";

export default function Settings() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="w-[320px]">
        <h1 className="">This is a settings page</h1>
      </div>
      <div className="flex-grow h-full border border-l border-gray-200">
        <Outlet />
        {/* {location.pathname === "/settings" && <EmptyState />} */}
      </div>
    </div>
  );
}
