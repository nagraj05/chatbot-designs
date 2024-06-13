import Body from "../components/Body";
import Form from "../components/Form";
import Header from "../components/Header";
// import { useOutletContext } from "react-router-dom";
// import { useMessage } from "../hooks/useMessage";
// import { useEffect } from "react";

const Conversations = () => {
  // const { selectedConversation } = useOutletContext();
  // const {messages, setMessages} = useMessage()

  // useEffect(() => {
  //   if (selectedConversation) {
  //     const fetchMessagesForConversation = () => {
  //       // 
  //     }
  //     const fetchedMessages = fetchMessagesForConversation(selectedConversation);
  //     setMessages(fetchedMessages);
  //   }
  // }, [selectedConversation, setMessages]);
  return (
    <div className="h-full flex flex-col justify-between bg-[#D0E2F6]">
      <Header />
      <Body />
      <Form />
    </div>
  );
};

export default Conversations;
