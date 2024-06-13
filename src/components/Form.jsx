import MessageInput from "./sidebar/MessageInput";
import submit from "/icons/submit.svg";
import responses from "../data/responses.json";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { debounce } from "lodash";
import { useMessage } from "../hooks/useMessage";
import { useSourceSelection } from "../hooks/useSourceSelection";

const Form = () => {
  const [responseIndex, setResponseIndex] = useState(0);
  const [messageId, setMessageId] = useState(null);
  const { placeholder, messages, setMessages, setInpulValue, inpulValue } = useMessage();
  const { isSourceSelected, isSubSourceSelected } = useSourceSelection();

  const debouncedHandleSubmit = debounce((message) => {
    if (message.trim()) {
      const newMessageId = uuidv4();
      setMessageId(newMessageId);
      const newMessages = [
        ...messages,
        { type: "user", text: message, id: newMessageId },
      ];
      setMessages(newMessages);
      setInpulValue("");

      setTimeout(() => {
        const updatedMessages = [
          ...newMessages,
          {
            type: "bot",
            text: responses.responses[responseIndex],
          },
        ];
        setMessages(updatedMessages);
        setResponseIndex((responseIndex + 1) % responses.responses.length);
      }, 1000);
    }
  }, 500);

  const handleSubmit = (e) => {
    e.preventDefault();
    debouncedHandleSubmit(inpulValue);
  };
  const isDisabled = !isSourceSelected || !isSubSourceSelected;

  return (
    <div className="py-4 px-4 border-t flex items-center gap-2 lg:gap-4 w-full bg-[#E7F0FA]">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 lg:gap-4 w-full">
        <MessageInput
          required
          value={inpulValue}
          onChange={(e) => setInpulValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder={placeholder}
          disabled={isDisabled}
        />
        <button
          type="submit"
          className="rounded-full p-2 bg-[#EDB636] cursor-pointer hover:bg-sky-600 transition"
          disabled={isDisabled}
        >
          <img src={submit} alt="" className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
