import Body from "../components/Body";
import Form from "../components/Form";
import Header from "../components/Header";

const Conversations = () => {
  return (
    <div className="h-full flex flex-col justify-between bg-[#D0E2F6]">
      <Header />
      <Body />
      <Form />
    </div>
  );
};

export default Conversations;
