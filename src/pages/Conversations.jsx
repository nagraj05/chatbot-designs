import Body from "../components/Body";
import Form from "../components/Form";
import Header from "../components/Header";

const Conversations = () => {
  
  return (
    <div className="bg-neutral-200 h-full">
      <div className="h-full flex flex-col justify-between bg-[#D0E2F6]">
        {/* <Header /> */}
        <Body />
        <Form />
      </div>
    </div>
  );
};

export default Conversations;
