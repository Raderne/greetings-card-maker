import CardInputs from "./app/CardInputs";
import DisplayedCard from "./app/DisplayedCard";
import PromptModal from "./components/PromptModal";

function App() {
  return (
    <div className="h-screen bg-white grid grid-cols-8 relative">
      <div className="col-span-3">
        <CardInputs />
      </div>
      <div className="col-span-5">
        <DisplayedCard />
      </div>
      <PromptModal />
    </div>
  );
}

export default App;
