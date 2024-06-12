import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useMessage } from "../hooks/useMessage";

const History = ({ onSelectConversation }) => {
  const [data, setData] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const {
    setSelectedSource,
    setSelectedSubSource,
    setMessages,
    setConversationId,
  } = useMessage();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleClick = () => {
    setSelectedSource(null);
    setSelectedSubSource(null);
    setMessages([]);
    const newChatId = uuidv4();
    setConversationId(newChatId);
    navigate(`/home/c/${newChatId}`);
  };

  const handleConversation = (conversationId) => {
    onSelectConversation(conversationId);
    navigate(`/home/c/${conversationId}`);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    setOpenDropdown(null);
  };

  const handleExport = (id) => {
    const conversation = data.find((item) => item.id === id);
    console.log("Export conversation:", conversation);
    setOpenDropdown(null);
  };

  return (
    <div className="hidden h-full lg:flex lg:flex-col">
      <div className="p-2 flex-shrink-0 flex relative">
        <input
          placeholder={"Search"}
          className="w-full p-3 rounded-md"
        />
        <button
          onClick={handleClick}
          className="border bg-[#EDB636] rounded-md absolute p-2 right-4 top-3 text-sm"
        >
          New Chat
        </button>
      </div>
      <div className="flex-grow overflow-y-auto p-2">
        {data.map((item) => (
          <div
            className="relative w-full mt-5 p-4 flex justify-between bg-[#E7F0FA] rounded-md cursor-pointer"
            key={item.id}
            onClick={() => handleConversation(item.id)}
          >
            <div className="w-[250px] truncate">
              <h1 className="font-semibold pb-2">{item.title}</h1>
              <p className="text-xs font-thin pb-2">{item.body}</p>
              <div className="border bg-[#D0E2F6] w-fit py-1 px-3 text-xs rounded-full">
                <h3>lorem</h3>
              </div>
            </div>
            <BsThreeDotsVertical
              className="text-xl"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(item.id);
              }}
            />
            {openDropdown === item.id && (
              <div className="absolute right-5 top-7 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.id);
                  }}
                  className="block w-full px-4 py-2 text-left text-sm rounded-t-md hover:bg-[#093F7C] hover:text-white"
                >
                  Delete
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExport(item.id);
                  }}
                  className="block w-full px-4 py-2 text-left text-sm rounded-b-md hover:bg-[#093F7C] hover:text-white"
                >
                  Export
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
