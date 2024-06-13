import SidebarLayout from "./sidebar/SidebarLayout";
import PropTypes from "prop-types";

const HistoryLayout = ({ children }) => {
  return (
    <SidebarLayout>
      <div className="h-full">{children}</div>
    </SidebarLayout>
  );
};

HistoryLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HistoryLayout;
