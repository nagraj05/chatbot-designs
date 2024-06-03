import MobileItem from "./MobileItem";
import useRoutes from "../../hooks/useRoutes";

const MobileFooter = () => {
  const routes = useRoutes();
  return (
    <div
      className="
          fixed
          justify-between
          w-full
          bottom-0
          z-40
          flex
          items-center
          bg-white
          border-t-[1px]
          lg:hidden
          "
    >
      {routes.map((route) => (
        <MobileItem
          key={route.label}
          href={route.href}
          icon={route.icon}
          active={route.active}
          onClick={route.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;
