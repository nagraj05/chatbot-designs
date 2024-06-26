import { useNavigate } from "react-router-dom";
import logo from "/icons/Group 36451.svg";
import bot from "/images/new.svg";
import { v4 as uuidv4 } from "uuid";
import { useMessage } from "../hooks/useMessage";

export default function LandingPage() {
  const { setConversationId } = useMessage();
  const navigate = useNavigate();

  const handlePath = () => {
    const newChatId = uuidv4();
    setConversationId(newChatId);
    navigate(`/home/c/${newChatId}`);
  };
  return (
    <div className="min-h-full flex flex-col relative bg-[#F2FFFE]">
      <div className="flex flex-col items-start justify-center bg-gradient-to-r from-[#F2FFFE] to-[#C0F8F5] calc-width-70 mt-10 rounded-r-full  px-20 mb-5">
        <div className="flex flex-col py-20 ">
          <h3 className="text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-xl mb-2">
            Discover the possibilities with
          </h3>
          <h1 className="text-5xl pb-6 font-semibold bg-gradient-to-r from-[#E3AB27] to-[#04A271] bg-clip-text text-transparent ">
            UPAg AI-Bot
          </h1>
          <p className="mb-3 font-medium w-[520px]">
            We&apos;re thrilled to introduce UPAg AI-BOT, your new companion for
            obtaining comprehensive agriculture reports effortlessly.
          </p>
          <p className="text-sm">For example, find out the All India APY estimates for Food Grains in just a few clicks.</p>
        </div>
      </div>
      <div>
        <div className="bg-gradient-to-l from-[#F2FFFE] to-[#D6F0C2] px-20 rounded-l-full ml-20">
          <div className="p-6 flex">
            <button
              onClick={handlePath}
              className="py-8 animate-grow-shrink rounded-full w-[250px] bg-white flex gap-3  items-center justify-center"
            >
              <img src={logo} alt="" />
              <p className="bg-gradient-to-r from-[#E3AB27] to-[#04A271] bg-clip-text text-transparent font-bold text-xl">
                New Chat
              </p>
            </button>
            {/* <button
              onClick={handlePath}
              className=" rounded-full w-[250px] bg-white flex gap-3  items-center justify-center "
            >
              <img src={chatlogo} alt="" />
              <p className="bg-gradient-to-r from-[#E3AB27] to-[#04A271] bg-clip-text text-transparent font-bold text-xl">
                Chat History
              </p>
            </button> */}
          </div>
        </div>
      </div>
      <div className="hidden md:block sm:absolute top-28 right-20 animate-bounce">
        <img src={bot} alt="" className="h-[450px] w-[250px]" />
      </div>
    </div>
  );
}
