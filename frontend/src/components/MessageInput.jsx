import { RiSparklingFill } from "react-icons/ri";
import CustomButton from "./CustomButton";
import { useGlobalContext } from "../context";

const MessageInput = () => {
  const { message, handleValues, setOpenPromptModal, setOpenCard } =
    useGlobalContext();

  return (
    <div className="flex flex-col space-y-2 mt-8">
      <div className="flex-between-center">
        <span className="text-lg w-full text-neutral-500">
          Message For Your Loved Ones
        </span>
        <CustomButton
          text="Generate"
          extraStyles="text-black border border-black py-1 px-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300 ease-in-out hover:shadow-md"
          icon={<RiSparklingFill />}
          onClick={() => setOpenPromptModal(true)}
        />
      </div>
      <div className="border-2 border-neutral-200 rounded-md w-full  text-center text-neutral-500 relative">
        <textarea
          className="w-full p-2 outline-none resize-none h-40 focus:ring-2 focus:ring-primary-500 rounded-md"
          placeholder="Enter Message here"
          value={message}
          name="message"
          onChange={handleValues}
          onFocus={() => setOpenCard(true)}
        ></textarea>
        <span className="absolute right-2 bottom-2 text-neutral-500">
          {message.length}/300
        </span>
      </div>
    </div>
  );
};

export default MessageInput;
