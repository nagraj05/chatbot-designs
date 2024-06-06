import { Outlet } from "react-router-dom";

import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

const SidebarLayout = ({ children }) => {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileFooter />
      <div className="lg:pl-24 h-full">{children || <Outlet />}</div>
    </div>
  );
};
export default SidebarLayout;
