import clsx from "clsx";
import PropTypes from "prop-types";

const MessageInput = ({ placeholder, onChange, value, required, disabled }) => {
  return (
    <div className="relative w-full">
      <input
        onChange={onChange}
        value={value}
        required={required}
        placeholder={placeholder}
        readOnly={disabled}
        className={clsx(
          "text-black font-semibold py-2 px-4 bg-[#E7F0FA] w-full rounded-full focus:outline-none",
          { "cursor-not-allowed": disabled }
        )}
      />
    </div>
  );
};

MessageInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MessageInput;
