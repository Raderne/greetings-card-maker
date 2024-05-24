import { useEffect, useRef } from "react";
import "./card.css";
import CardInside from "../components/CardInside";
import CardFront from "../components/CardFront";
import { useGlobalContext } from "../context";

const DisplayedCard = () => {
  const cardRef = useRef(null);
  const { openCard, setOpenCard } = useGlobalContext();

  useEffect(() => {
    const handleCardOpen = () => {
      if (openCard) {
        cardRef.current.setAttribute("class", "half-open");
        cardRef.current.classList.add("open");
        setTimeout(() => {
          cardRef.current.classList.add("open-fully");
        }, 100);
      } else {
        cardRef.current.classList.remove("open-fully");
        cardRef.current.classList.remove("open");
        setTimeout(() => {
          cardRef.current.setAttribute("class", "");
        }, 1000);
      }
    };

    handleCardOpen();
  }, [openCard, setOpenCard]);

  return (
    <div className="flex-center h-full">
      <div id="card" className="" ref={cardRef}>
        <CardInside />

        <CardFront/>
      </div>
    </div>
  );
};

export default DisplayedCard;
