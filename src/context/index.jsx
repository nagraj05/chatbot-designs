import { MessageProvider } from "./MessageContext";
import PropTypes from "prop-types";
import { SourceSelectionProvider } from "./SourceSelectionContext";

export const AppProvider = ({ children }) => {
  return (
    <SourceSelectionProvider>
      <MessageProvider>
        {children}
      </MessageProvider>
    </SourceSelectionProvider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
