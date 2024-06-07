import {   useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useMessage } from "../context/MessageContext";
import { v4 as uuidv4 } from 'uuid';
import { Navigate, useNavigate } from "react-router-dom";


const History = () => {
  const [data, setData] = useState([]);
  const { setSelectedSource, setSelectedSubSource, setMessages } = useMessage()
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleClick = () => {
    setSelectedSource(null)
    setSelectedSubSource(null)
    setMessages([])
  };

  return (
    <div className="hidden  h-full  lg:flex lg:flex-col ">
      <div className="p-2 flex-shrink-0 flex relative">
        <input
          placeholder={"Ask something"}
          className=" w-full p-3 rounded-md "
        />
        {/* <MessageInput 
          id="message"
          required
          value={inpulValue}
          onChange={(e) => setInpulValue(e.target.value)}
          placeholder="Write a message"
        /> */}
        <button onClick={handleClick} className="border bg-[#EDB636] rounded-md absolute p-2 right-4 top-3 text-sm">
          New Chat
        </button>
      </div>
      <div className="flex-grow overflow-y-auto p-2">
        {data.map((item) => (
          <div
            className=" w-full mt-5 p-4 flex justify-between bg-[#E7F0FA] rounded-md cursor-pointer"
            key={item.id}
          >
            <div className="w-[250px] truncate">
              <h1 className="font-semibold pb-2">{item.title}</h1>
              <p className="text-xs font-thin pb-2">{item.body}</p>
              <div className="border  bg-[#D0E2F6] w-fit py-1 px-3 text-xs rounded-full">
                <h3>lorem</h3>
              </div>
            </div>
            <BsThreeDotsVertical className="text-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default History;
