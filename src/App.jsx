import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import AppProvider from "./context";
import ErrorBoundary from "./utils/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <RouterProvider router={routes} />
      </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
