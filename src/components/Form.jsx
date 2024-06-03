import { HiPaperAirplane } from "react-icons/hi2";
import MessageInput from "./sidebar/MessageInput";

const Form = () => {
  return (
    <div
      className="
        py-4
        px-4
        bg-white
        border-t
        flex
        items-center
        gap-2
        lg:gap-4
        w-full"
    >
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          //   register={register}
          //   errors={errors}
          required
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="
            rounded-full
            p-2
            bg-[#093F7C]
            cursor-pointer
            hover:bg-sky-600
            transition
        "
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
