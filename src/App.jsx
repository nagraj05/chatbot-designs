import "../src/App.css";
import {  RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import AppProvider from "./context";
function App() {
  return (
    <AppProvider>
        <RouterProvider router={routes} />
    </AppProvider>
  );
}

export default App;
