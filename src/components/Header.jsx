import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import { Link} from "react-router-dom";

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

          
        </div>
        <div className="flex justify-center  ">
            <div
              className="
              text-lg
              font-semibold
              text-black
              "
            >
              <h1>Upag AI-Bot</h1>
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
