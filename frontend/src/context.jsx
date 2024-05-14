/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [openPromptModal, setOpenPromptModal] = useState(true);
  const [isForImages, setIsForImages] = useState(true);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleValues = (e) => {
    const { name, value } = e.target;
    if (name === "message") {
      if (value.length > 300) {
        setError("Message should be less than 150 characters");
      } else {
        setMessage(value);
      }
    } else {
      setTitle(value);
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
        setImage,
        setOpenPromptModal,
        setIsForImages,
        setLoading,
        setError,
        handleValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
