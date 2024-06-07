import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div
        className="
          bg-white
          w-full
          flex
          border-b-[1px]
          sm:px-4
          py-3
          px-4
          lg:px-6
          justify-between
          items-center
          shadow-sm
          "
      >
        <div className="flex gap-3 items-center">
          <Link
            className="
              lg:hidden
              block
              text-sky-500
              hover:text-sky-600
              transition
              cursor-pointer"
            href="/home"
          >
            <HiChevronLeft size={32} />
          </Link>

          <div className="flex flex-col">
            <div
              className="
              text-sm
              font-light
              text-neutral-500
              "
            >
              {}
            </div>
          </div>
        </div>
        <HiEllipsisHorizontal
          size={32}
          onClick={() => {}}
          className="text-sky-500
        cursor-pointer
        hover:text-sky-600"
        />
      </div>
    </>
  );
};

export default Header;
