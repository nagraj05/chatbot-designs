const MessageInput = ({ id, placeholder }) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        // type={type}
        // autoComplete={id}
        // {...register(id, {required})}
        placeholder={placeholder}
        className="
            text-black
            font-light
            py-2
            px-4
            bg-neutral-400
            w-full
            rounded-full
            focus:outline-none
            placeholder-neutral-900
        "
      />
    </div>
  );
};

export default MessageInput;
