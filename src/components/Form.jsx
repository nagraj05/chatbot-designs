import MessageInput from "./sidebar/MessageInput";
import submit from "../../public/icons/submit.svg";
import { useMessage } from "../context/MessageContext";
import responses from "../data/responses.json";
import { useState } from "react";

const Form = () => {
  const [responseIndex, setResponseIndex] = useState(0);

  const { placeholder, messages, setMessages, setInpulValue, inpulValue } =
    useMessage();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inpulValue.trim()) {
      const newMessages = [...messages, { type: "user", text: inpulValue }];
      setMessages(newMessages);
      setInpulValue("");

      setTimeout(() => {
        const updatedMessages = [
          ...newMessages,
          { type: "bot", text: responses.responses[responseIndex] },
        ];
        setMessages(updatedMessages);
        setResponseIndex((responseIndex + 1) % responses.responses.length);
      }, 1000);
    }
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
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder={placeholder}
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
