import { IoPrintSharp } from "react-icons/io5";

const CardInputs = () => {
  return (
    <section className="border-r-2 border-neutral-200 h-full">
      <div className="border-b-2 border-neutral-200 w-full">
        <div className="flex-between-center p-4">
          <h2 className="text-xl font-semibold text-neutral-500">
            Free Greeting Card Maker
          </h2>
          <button className="text-md text-white bg-black rounded-md flex gap-x-2 items-center px-2 py-1">
            <IoPrintSharp />
            Print
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardInputs;
