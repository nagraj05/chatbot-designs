import { Link } from "react-router-dom";

export default function DesktopItem({
  label,
  href,
  icon: Icon,
  onClick,
  active,
}) {

    return (
      <li>
        <Link
          to={href}
          className={
            (`
            group
            flex
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
            active && "bg-gray-100 text-black")
          }
        >
          <Icon className="h-7 w-7 shrink-0" />
          <span className="sr-only">{label}</span>
        </Link>
      </li>
    );
  };

