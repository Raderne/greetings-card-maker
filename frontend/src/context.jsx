/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [openPromptModal, setOpenPromptModal] = useState(false);
  const [isForImages, setIsForImages] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openCard, setOpenCard] = useState(false);

  const handleValues = (e) => {
    const { name, value } = e.target;
    if (name === "message") {
      if (value.length > 300) {
        setError("Message should be less than 150 characters");
      } else {
        setOpenCard(true);
        setMessage(value);
      }
    }
    if (name === "color") {
      setColor(value);
      setOpenCard(false);
    } else {
      setTitle(value);
      setOpenCard(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        message,
        title,
        openPromptModal,
        isForImages,
        image,
        loading,
        error,
        openCard,
        color,
        setImage,
        setOpenPromptModal,
        setIsForImages,
        setLoading,
        setError,
        handleValues,
        setOpenCard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
