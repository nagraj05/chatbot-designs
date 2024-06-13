import { createContext, useState } from "react";
import PropTypes from "prop-types";

const SourceSelectionContext = createContext(null);

const SourceSelectionProvider = ({ children }) => {
  const [isSourceSelected, setIsSourceSelected] = useState(false);
  const [isSubSourceSelected, setIsSubSourceSelected] = useState(false);

  const values = {
    isSourceSelected,
    setIsSourceSelected,
    isSubSourceSelected,
    setIsSubSourceSelected,
  };

  return (
    <SourceSelectionContext.Provider value={values}>
      {children}
    </SourceSelectionContext.Provider>
  );
};

SourceSelectionProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SourceSelectionProvider, SourceSelectionContext };
