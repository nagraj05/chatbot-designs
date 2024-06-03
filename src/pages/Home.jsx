import clsx from "clsx";
import EmptyState from "../components/EmptyState";
import Sidebar from "../components/sidebar/DesktopSidebar";
import { Outlet, useLocation } from "react-router-dom";
import MessageInput from "../components/sidebar/MessageInput";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const location = useLocation();
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="h-full w-[320px]">
        <div className="p-2 flex flex-col">
          <MessageInput placeholder={"Ask something"} />
          <div className=" h-full overflow-y-auto">
            {data.map((item) => (
              <div
                className="h-full w-full mt-5 p-2 flex justify-between bg-neutral-300 rounded-md cursor-pointer"
                key={item.id}
              >
                <div className="w-[250px] truncate">
                  <h1 className="font-semibold">{item.title}</h1>
                  <p className="text-xs font-thin">{item.body}</p>
                </div>

                <BsThreeDotsVertical className="text-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-grow h-full border border-l border-gray-200 ">
        <Outlet />
        {location.pathname === "/home" && <EmptyState />}
      </div>
    </div>
  );
}
