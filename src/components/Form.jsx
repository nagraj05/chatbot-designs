import MessageInput from "./sidebar/MessageInput";
import submit from "../../public/icons/submit.svg";
import { useState } from "react";

const Form = () => {
  const [message, setMessage] = useState([]);
  const [inpulValue, setInpulValue] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage([...message, inpulValue]);
    setInpulValue("");
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
          required
          value={inpulValue}
          onChange={(e) => setInpulValue(e.target.value)}
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
