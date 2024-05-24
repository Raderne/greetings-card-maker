/* eslint-disable react/prop-types */
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { useState } from "react";

const PromptModal = () => {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    openPromptModal,
    isForImages,
    setOpenPromptModal,
    setError,
    setMessage,
  } = useGlobalContext();

  const handlePrompt = (e) => {
    let { value } = e.target;
    setPrompt(value);
  };

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      };

      if (isForImages) {
        // TODO add image generation
      } else {
        const response = await fetch(
          "http://localhost:8800/generate-text",
          options
        );
        const text = await response.json();
        setResult(text);
      }
      setOpen(true);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError({
        isError: true,
        message: "An error occured",
      });
      setLoading(false);
    }
  };

  if (!openPromptModal) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div
        className={
          "w-[60vw] pb-10 bg-white rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 transition-all duration-300 ease-in-out" +
          (open ? " h-[80%]" : " h-[30vh]")
        }
      >
        <span
          className="absolute top-2 right-2 text-2xl p-2 cursor-pointer text-neutral-700 border border-neutral-700 rounded-full w-8 h-8 hover:bg-neutral-700 hover:text-white transition-colors duration-300 ease-in-out flex-center"
          onClick={() => setOpenPromptModal(false)}
        >
          <FaTimes />
        </span>
        <div className="text-center text-2xl font-bold text-neutral-700 p-4">
          Prompt For {isForImages ? "Images" : "Messages"}
        </div>

        <div className="flex-between-center mt-8 space-x-4">
          <input
            type="text"
            className="border-2 border-neutral-200 rounded-md p-2 w-full outline-none focus:ring-1 focus:ring-neutral-500 transition-colors duration-300 ease-in-out"
            placeholder="Please enter a prompt"
            name="prompt"
            value={prompt}
            onChange={handlePrompt}
          />
          <CustomButton
            text="Generate"
            extraStyles="text-black border border-black hover:bg-black hover:text-white transition-colors duration-300 ease-in-out hover:shadow-md"
            onClick={handleGenerate}
            disabled={loading}
          />
        </div>

        {/* the result */}
        {open && (
          <div className="mt-8">
            <div className="text-center text-2xl font-bold text-neutral-700 p-4">
              Result
            </div>
            <div className="p-4 text-center text-lg text-neutral-700">
              {result}

              <div className="w-full flex mt-12 justify-end items-center space-x-4">
                <CustomButton
                  text="Close"
                  extraStyles="text-black border border-black hover:bg-black hover:text-white transition-colors duration-300 ease-in-out hover:shadow-md"
                  onClick={() => setOpen(false)}
                />

                <CustomButton
                  text="Copy"
                  extraStyles="text-black border border-black hover:bg-black hover:text-white transition-colors duration-300 ease-in-out hover:shadow-md"
                  onClick={() => {
                    navigator.clipboard.writeText(result);
                  }}
                />

                <CustomButton
                  text="Save"
                  extraStyles="text-black border border-black hover:bg-black hover:text-white transition-colors duration-300 ease-in-out hover:shadow-md"
                  onClick={() => {
                    setMessage(result);
                    setOpenPromptModal(false);
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptModal;
