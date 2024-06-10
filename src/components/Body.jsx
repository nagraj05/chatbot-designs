// Body.js
import { useEffect, useRef } from "react";
import sources from "../data/sources";
import { useMessage } from "../context/MessageContext";

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
  }, [messages]);

  const handleClick = (source) => {
    setSelectedSource(source.value);
    setSelectedSubSource(null);
  };

  const handleSubClick = (subSource) => {
    setSelectedSubSource(subSource);
  };

  return (
    <div className="p-6 h-full overflow-y-auto">
      <h2 className="font-semibold text-[#093F7C] mb-2">
        Select From Any Functional Area
      </h2>
      <div className="flex flex-col">
        <h1 className="text-start mb-2 text-sm">
          These prices reflect the rates across various markets in the state,
          with the highest prices..
        </h1>
        <div className="grid grid-cols-4 gap-2 mb-2 ">
          {sources[0].sourceslist.map((source, index) => (
            <div
              key={index}
              className={`${
                selectedSource === source.value
                  ? "bg-[#093F7C] text-white"
                  : "bg-[#FFFFFF] text-[#093F7C]"
              }  p-5 rounded-lg cursor-pointer hover:bg-blue-500 text-center flex items-center justify-center gap-3`}
              onClick={() => handleClick(source)}
            >
              <h1 className="font-bold">{source.text}</h1>
              <img src={source.image} alt="Image" />
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {selectedSource && (
            <div className="text-end">
              <h1 className="font-semibold ">
                You have selected {selectedSource}. Please choose a subsources
              </h1>
            </div>
          )}
        </div>

        {selectedSource && (
          <div className="mt-9">
            <h2>Subsources for {selectedSource}</h2>
            <ul className="flex flex-wrap gap-3 justify-start mt-3">
              {sources[0].subsources[selectedSource].map((subsource, index) => (
                <li
                  key={index}
                  className={`${
                    selectedSubSource === subsource
                      ? "bg-[#093F7C] text-white"
                      : "bg-[#FFFFFF] text-[#093F7C]"
                  }  p-5 rounded-lg cursor-pointer hover:bg-blue-500 text-center`}
                  onClick={() => handleSubClick(subsource)}
                >
                  {subsource}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedSubSource && (
          <div className="mt-5 text-end ">
            <h1 className="font-semibold ">
              You have selected {selectedSubSource}
            </h1>
          </div>
        )}
        <div className="flex flex-col">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${
                message.type === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-2 rounded ${
                  message.type === "user"
                    ? "bg-[#093F7C] text-white w-auto max-w-[40%]"
                    : "bg-white text-black w-auto max-w-[40%]"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messageEndRef} />
        </div>
      </div>
    </div>
  );
};

export default Body;
