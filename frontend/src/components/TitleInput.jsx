import { useGlobalContext } from "../context";
import CustomButton from "./CustomButton";

const TitleInput = () => {
  const { title, handleValues, setOpenCard, color } = useGlobalContext();

  return (
    <div className="flex flex-col space-y-2 mt-8">
      <span className="text-lg w-full text-neutral-500">
        Title For Your Greeting Card
      </span>
      <div className="border-2 border-neutral-200 relative rounded-md w-full text-center text-neutral-500">
        <input
          type="text"
          name="title"
          className={
            "w-full p-2 outline-none rounded-md focus:ring-2 focus:ring-primary-500"
          }
          placeholder="Enter Title here"
          value={title}
          onChange={handleValues}
          maxLength={60}
          onFocus={() => setOpenCard(false)}
        />
        <div className="absolute right-2 top-1">
          <input
            type="color"
            className="w-8 h-8 border-2 border-neutral-600 outline-none cursor-pointer"
            name="color"
            onChange={handleValues}
            value={color}
          />
        </div>
      </div>
      <div className="w-full flex-between-center">
        <span className="text-xs text-neutral-500">
          {title.length}/60 characters
        </span>
        <span className="text-xs text-neutral-500">Max 60 characters</span>
      </div>
      <div className="w-full flex-between-center mt-10">
        <CustomButton
          text="Happy Birthday"
          onClick={() =>
            handleValues({ target: { name: "title", value: "Happy Birthday" } })
          }
          extraStyles="text-black border border-black"
        />
        <CustomButton
          text="Mutlu Yıldönümleri"
          onClick={() =>
            handleValues({
              target: { name: "title", value: "Mutlu Yıldönümleri" },
            })
          }
          extraStyles="text-black border border-black"
        />
        <CustomButton
          text="Teşekkür ederim"
          onClick={() =>
            handleValues({
              target: { name: "title", value: "Teşekkür ederim" },
            })
          }
          extraStyles="text-black border border-black"
        />
      </div>
    </div>
  );
};

export default TitleInput;
