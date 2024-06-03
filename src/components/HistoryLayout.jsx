import MessageInput from "./sidebar/MessageInput";
import SidebarLayout from "./sidebar/SidebarLayout";

const HistoryLayout = ({ children }) => {
  return (
    <SidebarLayout>
      <div className="h-full">
        <ConversationList />
        {children}
      </div>
    </SidebarLayout>
  );
};

export default HistoryLayout;
