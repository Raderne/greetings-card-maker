import { useState } from "react";
import CustomButton from "./CustomButton";
import { PiPresentationFill } from "react-icons/pi";
import { RiSparklingFill } from "react-icons/ri";
import { useGlobalContext } from "../context";

const ImageSelection = () => {
  const { setOpenPromptModal, setIsForImages } = useGlobalContext();
  const [imageSelected, setImageSelected] = useState(false);

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex-between-center">
        <label
          className="text-lg cursor-pointer w-full text-neutral-500"
          htmlFor="image"
        >
          Image
        </label>
        <input
          type="checkbox"
          id="image"
          name="image"
          className="w-5 h-5"
          onChange={(e) => setImageSelected(e.target.checked)}
          checked={imageSelected}
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="file-upload"
          className={
            "border-2 border-neutral-200 rounded-md p-2 w-full  text-center text-neutral-500" +
            (imageSelected
              ? " bg-neutral-100 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-700 cursor-pointer"
              : "cursor-not-allowed")
          }
        >
          Custom Upload
        </label>
        <input
          className="hidden"
          type="file"
          id="file-upload"
          disabled={!imageSelected}
          hidden
        />

        <CustomButton
          text="Presets"
          extraStyles="text-white bg-black ml-4"
          icon={<PiPresentationFill />}
          disabled={!imageSelected}
        />

        <CustomButton
          text="Generate"
          extraStyles="text-black border border-black ml-4"
          icon={<RiSparklingFill />}
          disabled={!imageSelected}
          onClick={() => {
            setOpenPromptModal(true);
            setIsForImages(true);
          }}
        />
      </div>
    </div>
  );
};

export default ImageSelection;
