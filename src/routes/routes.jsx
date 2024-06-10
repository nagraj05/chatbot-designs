import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import Help from "../pages/Help";
import Settings from "../pages/Settings";
import Conversations from "../pages/Conversations";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement:<div>Error</div>
    },
    {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/settings",
        element: <Settings />,
    }
]);

export default routes;
