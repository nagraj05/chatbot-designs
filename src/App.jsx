import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import Conversations from "./pages/Conversations";
import SidebarLayout from "./components/sidebar/SidebarLayout";
import HistoryLayout from "./components/HistoryLayout";
import "../src/App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
function App() {
  return (
     <RouterProvider router={routes} />
  );
}

export default App;
