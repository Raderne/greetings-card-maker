import { useGlobalContext } from "../context";

const CardFront = () => {
  const { title, openCard, setOpenCard, color, selectedBackground } =
    useGlobalContext();

  return (
    <div
      id="card-front"
      className="relative w-full h-full rounded-md shadow-md bg-cover bg-center"
      style={{
        backgroundImage: `url(${selectedBackground})`,
      }}
    >
      <div className="wrap break-words">
        <h1
          className="capitalize title font-semibold"
          style={{
            color: color,
            fontSize: "70px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {title.length > 0
            ? title.split("\n").map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                );
              })
            : "Enter Title Here"}
        </h1>
      </div>
      <button id="open" onClick={() => setOpenCard(!openCard)}>
        &gt;
      </button>
    </div>
  );
};

export default CardFront;
