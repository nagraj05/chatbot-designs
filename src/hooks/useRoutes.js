import { useMemo } from "react";
import { IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useMessage } from "./useMessage";

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
        label: "CHAT",
        href: `/home/c/${conversationId}`,
        icon: IoChatboxEllipsesOutline,
        active: isChatActive,
      },
      {
        label: "HELP",
        href: "/help",
        icon: MdHelpOutline,
        active: location.pathname === "/help",
      },
      {
        label: "SETTINGS",
        href: "/settings",
        icon: IoSettingsOutline,
        active: location.pathname === "/settings",
      },
    ],
    [location, conversationId, isChatActive]
  );
  return routes;
};

export default useRoutes;
