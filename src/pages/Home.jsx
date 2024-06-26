import Sidebar from "../components/sidebar/DesktopSidebar";
import { Outlet } from "react-router-dom";
import History from "../components/History";
import { useState } from "react";

export default function Home() {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className="flex h-full lg:pl-20">
      <Sidebar />
      <History onSelectConversation={setSelectedConversation} />
      <div className="flex-grow h-full border border-l border-gray-200">
        <Outlet context={{ selectedConversation }} />
      </div>
    </div>
  );
}
