import { Outlet } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import Sidebar from "../components/sidebar/DesktopSidebar";
import clsx from "clsx";
import MessageInput from "../components/sidebar/MessageInput";

export default function Settings() {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="w-[320px]">
        <h1 className="">This is a settings page</h1>
        <MessageInput placeholder={"Write a message"} />
      </div>
      <div className="flex-grow h-full border border-l border-gray-200">
        <Outlet />
        {location.pathname === "/settings" && <EmptyState />}
      </div>
    </div>
  );
}
