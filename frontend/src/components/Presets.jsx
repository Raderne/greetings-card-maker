import { backgrounds } from "../constants";
import { useGlobalContext } from "../context";

// eslint-disable-next-line react/prop-types
const Presets = ({ setShowPresets }) => {
  const { setSelectedBackground } = useGlobalContext();

  return (
    <div className="mt-4">
      <div className="flex-between-center w-full border-b-2 border-neutral-200 pb-2">
        <h2 className="text-lg text-neutral-500">Presets</h2>

        <button
          onClick={() => setShowPresets(false)}
          className="text-neutral-500"
        >
          &#10005;
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-2">
        {Object.keys(backgrounds).map((key) => (
          <div key={key} className="break-words">
            <img
              src={backgrounds[key]}
              alt={key}
              className="w-24 h-24 object-cover object-center rounded-md cursor-pointer shadow-md"
              onClick={() => {
                setSelectedBackground(backgrounds[key]);
              }}
            />
            <p className="text-center text-neutral-500">{key}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Presets;
