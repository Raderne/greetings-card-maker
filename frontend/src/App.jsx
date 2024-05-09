import CardInputs from "./app/CardInputs";
import DisplayedCard from "./app/DisplayedCard";

function App() {
  return (
    <div className="h-screen bg-white grid grid-cols-8">
      <div className="col-span-3">
        <CardInputs />
      </div>
      <div className="col-span-5">
        <DisplayedCard />
      </div>
    </div>
  );
}

export default App;
