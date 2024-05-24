import { useEffect } from "react";
import CardInputs from "./app/CardInputs";
import DisplayedCard from "./app/DisplayedCard";
import PromptModal from "./components/PromptModal";
import Toast from "./components/Toast";
import { useGlobalContext } from "./context";

function App() {
  const { error, setError } = useGlobalContext();

  useEffect(() => {
    if (error.message) {
      setTimeout(() => {
        setError({
          isError: false,
          message: "",
        });
      }, 5000);
    }
  }, [error.message, setError]);

  return (
    <div className="h-screen bg-white grid grid-cols-8 relative">
      <div className="col-span-3">
        <CardInputs />
      </div>
      <div className="col-span-5">
        <DisplayedCard />
      </div>
      <PromptModal />
      <Toast message={error.message} />
    </div>
  );
}

export default App;
