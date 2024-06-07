import { Link } from "react-router-dom";
import clsx from "clsx";

export default function DesktopItem({ label, href, icon: Icon, active }) {
  return (
    <li>
        <Link
          to={href}
          className={clsx(
            `
            w-16
            group
            flex
            flex-col
            items-center
            gap-x-3
            rounded-md
            p-3
            text-sm
            leading-6
            font-semibold
            text-gray-500
            hover:text-black
            hover:bg-gray-100
                `,
            active && "bg-gray-100 text-black "
          )}
        >
          <Icon className="h-7 w-7 shrink-0" />
          <span className="">{label}</span>
        </Link>
    </li>
  );
}
