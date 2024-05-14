import { IoPrintSharp } from "react-icons/io5";
import ImageSelection from "../components/ImageSelection";
import CustomButton from "../components/CustomButton";
import TitleInput from "../components/TitleInput";
import MessageInput from "../components/MessageInput";

const CardInputs = () => {
  return (
    <section className="border-r-2 border-neutral-200 h-full">
      <div className="border-b-2 border-neutral-200 w-full">
        <div className="flex-between-center p-4">
          <h2 className="text-xl font-semibold text-neutral-500">
            Free Greeting Card Maker
          </h2>
          <CustomButton
            text="Download"
            icon={<IoPrintSharp />}
            extraStyles="text-white bg-black"
          />
        </div>
      </div>

      <div className="p-4">
        <ImageSelection />
        <TitleInput />
        <MessageInput />
      </div>
    </section>
  );
};

export default CardInputs;
