import MessageInput from "./sidebar/MessageInput";
import submit from "../../public/icons/submit.svg";
import { useState } from "react";

const Form = () => {
  const [message, setMessage] = useState([]);
  const [ibpulValue, setIbpulValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage([...message, ibpulValue]);
    setIbpulValue("");
  };

  return (
    <div
      className="
        py-4
        px-4
        border-t
        flex
        items-center
        gap-2
        lg:gap-4
        w-full
        bg-[#E7F0FA]"
    >
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          //   register={register}
          //   errors={errors}
          required
          value={ibpulValue}
          onChange={(e) => setIbpulValue(e.target.value)}
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="
            rounded-full
            p-2
            bg-[#EDB636]
            cursor-pointer
            hover:bg-sky-600
            transition
        "
        >
          <img src={submit} alt="" className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
