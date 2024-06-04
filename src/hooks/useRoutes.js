import { useMemo } from "react";
import { IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { useLocation } from "react-router-dom";

const useRoutes = () => {
  const location = useLocation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/home",
        icon: IoChatboxEllipsesOutline,
        active: location.pathname === "/home",
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
    [location]
  );
  return routes;
};

export default useRoutes;
