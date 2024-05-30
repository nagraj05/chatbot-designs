import clsx from "clsx";
import EmptyState from "../components/EmptyState";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  return (
    <div
      className={clsx("lg:pl-80 h-screen lg:block flex")}
    >
      <Sidebar />
      <EmptyState />
    </div>
  )
}
