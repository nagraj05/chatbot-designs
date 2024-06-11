import Sidebar from "../components/sidebar/DesktopSidebar";
import { Outlet } from "react-router-dom";
import History from "../components/History";
import { useState } from "react";
import { useMessage } from "../context/MessageContext";

export default function Home() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const {conversationId} = useMessage()

  return (
    <div className="flex h-full lg:pl-20">
      <Sidebar />
      <History onSelectConversation={setSelectedConversation} />
      <div className="flex-grow h-full border border-l border-gray-200">
        <Outlet context={{conversationId }} />
      </div>
    </div>
  );
}
