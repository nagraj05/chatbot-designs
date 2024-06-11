import { useMemo } from "react";
import { IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useMessage } from "../context/MessageContext";

const useRoutes = () => {
  const location = useLocation();
  const { conversationId } = useMessage();

  const isChatActive = useMemo(() => {
    const isHome = location.pathname.startsWith("/home");
    return (
      isHome &&
      location.pathname !== "/home/settings" &&
      location.pathname !== "/home/help"
    );
  }, [location.pathname]);

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: `/home/c/${conversationId}`,
        icon: IoChatboxEllipsesOutline,
        active: location.pathname.startsWith("/home"),
      },
      {
        label: "Help",
        href: "/help",
        icon: MdHelpOutline,
        active: location.pathname === "/help",
      },
      {
        label: "Settings",
        href: "/settings",
        icon: IoSettingsOutline,
        active: location.pathname === "/settings",
      },
    ],
    [location, isChatActive]
  );
  return routes;
};

export default useRoutes;
