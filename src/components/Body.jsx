import { useState } from "react";
import sources from "../data/sources";

const Body = () => {
  const [selectedSource, setSelectedSource] = useState(null);
  const [selectedSubSource, setSelectedSubSource] = useState(null);

  const handleClick = (source) => {
    setSelectedSource(source);
    setSelectedSubSource(null);
  };

  const handleSubClick = (subSource) => {
    setSelectedSubSource(subSource);
  }
  return (
    <div className="p-6 h-full">
      <h2 className="font-semibold text-[#093F7C] mb-4">
        Select From Any Functional Area
      </h2>
      <div className="flex flex-col">
        <h1 className="text-start mb-4">
          These prices reflect the rates across various markets in the state,
          with the highest prices..
        </h1>
        <div className="grid grid-cols-4 gap-2">
          {sources[0].sourceslist.map((source) => (
            <div
              key={source}
              className={`${
                selectedSource === source
                  ? "bg-[#093F7C] text-white"
                  : "bg-[#FFFFFF] text-[#093F7C]"
              }  p-5 rounded-lg cursor-pointer hover:bg-blue-500 text-center`}
              onClick={() => handleClick(source)}
            >
              {source}
            </div>
          ))}
        </div>
        {selectedSource && (
          <div className="mt-5 text-end">
            <h1 className="font-semibold">
              You have selected {selectedSource}. Please choose a subsources
            </h1>
          </div>
        )}

        {selectedSource && (
          <div className="mt-9">
            <h2>Subsources for {selectedSource}</h2>
            <ul className="flex flex-wrap gap-3 justify-start mt-3">
              {sources[0].subsources[selectedSource].map((subsource) => (
                <li
                  key={subsource}
                  className={`${
                    selectedSubSource === subsource
                      ? "bg-[#093F7C] text-white"
                      : "bg-[#FFFFFF] text-[#093F7C]"
                  }  p-5 rounded-lg cursor-pointer hover:bg-blue-500 text-center`}                  onClick={() => handleSubClick(subsource)}
                >
                  {subsource}
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedSubSource && (
          <div className="mt-5 text-end">
            <h1 className="font-semibold">
              You have selected {selectedSubSource}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
