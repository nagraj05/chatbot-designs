import { useEffect, useRef } from "react";
import sources from "../data/sources";
import { useMessage } from "../hooks/useMessage";

const Body = () => {
  const {
    messages,
    selectedSource,
    setSelectedSource,
    selectedSubSource,
    setSelectedSubSource,
  } = useMessage();
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedSubSource, selectedSource, messages]);

  const handleClick = (source) => {
    if (!selectedSource) {
      setSelectedSource(source.value);
      setSelectedSubSource(null);
    }
  };

  const handleSubClick = (subSource) => {
    setSelectedSubSource(subSource);
  };

  return (
    <div className="p-6 h-full overflow-y-auto">
      <h2 className="font-semibold text-[#093F7C] mb-2 ml-10">
        Select From Any Functional Area
      </h2>
      <div className="flex flex-col">
        <h1 className="text-start mb-3 text-sm ml-10">
          These prices reflect the rates across various markets in the state,
          with the highest prices..
        </h1>
        <div className="grid grid-cols-3 gap-2 mb-3 ml-10">
          {sources[0].sourceslist.map((source, index) => (
            <div
              key={index}
              className={`${
                selectedSource === source.value
                  ? "bg-[#093F7C] text-white"
                  : selectedSource
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-[#FFFFFF] text-[#093F7C] hover:bg-blue-500 cursor-pointer"
              }  p-4 text-sm rounded-lg text-center flex items-center justify-center gap-3`}
              onClick={() => handleClick(source)}
              style={
                selectedSource && selectedSource !== source.value
                  ? { pointerEvents: "none" }
                  : {}
              }
            >
              <h1 className="font-bold">{source.text}</h1>
              {/* <img src={source.image} alt="Image" className="w-6 h-6" /> */}
            </div>
          ))}
        </div>
        <div className="flex flex-col mb-3">
          {selectedSource && (
            // <div className="">
            //   <h1 className="bg-white inline-block rounded text-black w-auto max-w-[40%] p-2">
            //     You have selected <span className="font-semibold">{selectedSource}</span>. Please choose a subsource.
            //   </h1>
            // </div>

            <div className="flex items-start gap-2.5">
              <img
                className="w-8 h-8 rounded-full"
                src="/public/images/Chatbot Chat Message.jpg"
                alt="Jese image"
              />
              <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 ">
                    UPAg Bot
                  </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 ">
                  You have selected {selectedSource}. Please choose a subsource.
                </p>
              </div>
            </div>
          )}
        </div>

        {selectedSource && (
          <div className="mb-3 ml-10">
            <h2 className="font-semibold text-[#093F7C] mb-2">
              Select a subsources for {selectedSource}
            </h2>
            <ul className="flex flex-wrap gap-3 justify-start">
              {sources[0].subsources[selectedSource].map((subsource, index) => (
                <li
                  key={index}
                  className={`${
                    selectedSubSource === subsource
                      ? "bg-[#093F7C] text-white"
                      : selectedSubSource
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-[#FFFFFF] text-[#093F7C] hover:bg-blue-500 cursor-pointer"
                  }  p-4 text-sm rounded-lg text-center`}
                  onClick={() => handleSubClick(subsource)}
                  style={
                    selectedSubSource && selectedSubSource !== subsource
                      ? { pointerEvents: "none" }
                      : {}
                  }
                >
                  <h1 className="font-bold">{subsource}</h1>
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedSubSource && (
          // <div className="mb-2">
          //   <h1 className="bg-white inline-block rounded text-black w-auto max-w-[40%] p-2">
          //     You have selected{" "}
          //     <span className="font-semibold">{selectedSubSource}</span>.
          //   </h1>
          // </div>

          <div className="flex items-start gap-2.5">
            <img
              className="w-8 h-8 rounded-full"
              src="/public/images/Chatbot Chat Message.jpg"
              alt="Jese image"
            />
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm font-semibold text-gray-900 ">
                  UPAg Bot
                </span>
              </div>
              <p className="text-sm font-normal py-2.5 text-gray-900 ">
                You have selected {selectedSubSource}.
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col mb-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start gap-2.5 ${
                  message.type === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src={
                    message.type === "user"
                      ? "/public/images/placeholder.jpeg"
                      : "/public/images/Chatbot Chat Message.jpg"
                  }
                  alt={message.type === "user" ? "User image" : "Bot image"}
                />
                <div
                  className={`flex flex-col max-w-[320px] leading-1.5 p-4 ${
                    message.type === "user"
                      ? "border-blue-600 bg-blue-500 text-white rounded-s-xl rounded-br-xl"
                      : "border-gray-200 bg-gray-100 text-black rounded-e-xl rounded-es-xl"
                  }`}
                >
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold">
                      {message.type === "user" ? "" : "UPAg Bot"}
                    </span>
                  </div>
                  <p className="text-sm font-normal ">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div ref={messageEndRef} />
    </div>
  );
};

export default Body;
