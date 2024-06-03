import Body from "../components/Body";
import Form from "../components/Form";

const Conversations = () => {
  return (
    <div className="bg-neutral-200 h-full">
      <div className="h-full flex flex-col justify-between">
        <Body />
        <Form />
      </div>
    </div>
  );
};

export default Conversations;
