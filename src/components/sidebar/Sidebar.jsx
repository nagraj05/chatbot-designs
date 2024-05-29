import DesktopItem from "./DesktopItem";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdHelpOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";




export default function Sidebar() {
  const routes = [
    {
      icon: IoChatboxEllipsesOutline,
      label: "Home",
      active: true,
      href: "/home",
      onClick: () => {},
    },
    {
      icon: MdHelpOutline,
      label: "Help",
      active: false,
      href: "/help",
      onClick: () => {},
    },
    {
      icon: IoSettingsOutline,
      label: "Settings",
      active: false,
      href: "/settings",
      onClick: () => {},
    },
  ];
  return (
    <div
      className='
    hidden
    lg:fixed
    lg:inset-y-0
    lg:left-0
    lg:z-40
    lg:w-20
    xl:px-6
    lg:overflow-y-auto
    lg:bg-[#093F7C]
    lg:border-r-[1px]
    lg:pb-4
    lg:flex
    lg:flex-col
    justify-between
    "'
    >
      <nav
        className="
           mt-4
           flex
           flex-col
           justify-between"
      >
        <ul
          role="list"
          className="
            flex
            flex-col
            items-center
            space-y-1
            "
        >
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
              onClick={item.onClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
