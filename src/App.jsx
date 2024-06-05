import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Settings from "./pages/Settings";
import Conversations from "./pages/Conversations";
import SidebarLayout from "./components/sidebar/SidebarLayout";
import HistoryLayout from "./components/HistoryLayout";
import "../src/App.css";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<SidebarLayout />}>
            <Route path="/home" element={<Home />}>
              <Route path="conversations" element={<Conversations />} />
            </Route>
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/history" element={<HistoryLayout />} />
        </Routes>
      </Router>
  );
}

export default App;
