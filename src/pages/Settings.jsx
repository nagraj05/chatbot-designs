import Sidebar from "../components/sidebar/DesktopSidebar";

export default function Settings() {
  return (
    <div className="flex h-full pl-20 ">
      <Sidebar />
     <div className="p-2 border border-red-600 w-full">
      <h1>This is a settings page</h1>
     </div>
    </div>
  );
}
