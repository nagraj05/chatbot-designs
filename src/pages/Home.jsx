import Sidebar from "../components/sidebar/DesktopSidebar";
import { Outlet, useLocation } from "react-router-dom";
import Conversations from "./Conversations";
import History from "../components/History";

export default function Home() {
  
  const location = useLocation();
  return (
    <div className="flex h-full pl-20">
      <Sidebar />
      <History />
      <div className="flex-grow h-full border border-l border-gray-200">
        <Outlet />
        {location.pathname === "/home" && <Conversations />}
      </div>
    </div>
  );
}
