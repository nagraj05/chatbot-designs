import { clsx } from "clsx";
import { MdOutlineGroupAdd } from "react-icons/md";

const HistoryLayout = () => {
  return (
    <>
      <aside
        className={clsx(
          `
        fixed
        inset-y-0
        pb-20
        lg:pb-0
        lg:left-20
        lg:w-80
        lg:block
        overflow-y-auto
        border-r
        border-gray-200
        `
        )}
      >
        <div className="px-5">
          <div className="flex justify-between mb-4 pt-4">
            <div className="text-2xl font-bold text-neutral-800">Messages</div>
            <div
              onClick={() => {}}
              className="
                    rounded-full
                    p-2
                    bg-gray-100
                    text-gray-600
                    cursor-pointer
                    hover:opacity-75
                    transition
                    "
            >
              <MdOutlineGroupAdd size={20} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default HistoryLayout;
