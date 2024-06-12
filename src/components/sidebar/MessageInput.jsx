const MessageInput = ({ placeholder, onChange, value, required }) => {
  return (
    <div className="relative w-full">
      <input
        onChange={onChange}
        value={value}
        required={required}
        placeholder={placeholder}
        className="
            text-black
            font-semibold
            py-2
            px-4
            bg-[#E7F0FA]
            w-full
            rounded-full
            focus:outline-none
            
        "
      />
    </div>
  );
};

export default MessageInput;
