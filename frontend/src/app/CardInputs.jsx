import { IoPrintSharp } from "react-icons/io5";
import ImageSelection from "../components/ImageSelection";
import CustomButton from "../components/CustomButton";
import TitleInput from "../components/TitleInput";
import MessageInput from "../components/MessageInput";
import html2canvas from "html2canvas";

const CardInputs = () => {
  const handleDownload = async () => {
    const card = document.getElementById("card");
    const cardFront = document.getElementById("card-front");
    const cardInside = document.getElementById("card-inside");

    // Get the heights of cardFront and cardInside
    const frontHeight = cardFront.offsetHeight;
    const insideHeight = cardInside.offsetHeight;

    // Clone the card element
    const clonedCard = document.createElement("div");
    clonedCard.style.width = card.offsetWidth + "px"; // Set the width

    // Append the cloned card to the body
    clonedCard.style.position = "absolute";
    clonedCard.style.top = "0";
    clonedCard.style.left = "0";
    clonedCard.style.zIndex = "-99999999"; // Hide the cloned card
    clonedCard.style.transform = "none";
    clonedCard.style.perspective = "none";
    clonedCard.style.visibility = "visible"; // Ensure it's visible
    clonedCard.style.height = frontHeight + insideHeight + "px"; // Set the height

    // Append cardInside first and then cardFront
    clonedCard.appendChild(cardFront.cloneNode(true));
    clonedCard.appendChild(cardInside.cloneNode(true));

    document.body.appendChild(clonedCard);

    // Ensure visibility and remove transformations from the cloned children
    const clonedCardFront = clonedCard.querySelector("#card-front");
    const clonedCardInside = clonedCard.querySelector("#card-inside");

    // Apply necessary styles to clonedCardFront and clonedCardInside
    if (clonedCardFront) {
      clonedCardFront.style.transform = "none";
      clonedCardFront.style.display = "block";
      clonedCardFront.style.position = "relative";
      clonedCardFront.style.visibility = "visible";
    }
    if (clonedCardInside) {
      clonedCardInside.style.transform = "none";
      clonedCardInside.style.display = "block";
      clonedCardInside.style.position = "relative";
      clonedCardInside.style.visibility = "visible";
    }

    try {
      // Capture the cloned card
      const cardCanvas = await html2canvas(clonedCard, {
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
        backgroundColor: null,
        scale: 2,
      });

      // Convert canvas to image and download it
      const link = document.createElement("a");
      link.download = "greeting-card.png";
      link.href = cardCanvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error capturing the card: ", error);
    } finally {
      // Remove the cloned card from the document
      document.body.removeChild(clonedCard);
    }
  };

  return (
    <section className="border-r-2 border-neutral-200 h-full">
      <div className="border-b-2 border-neutral-200 w-full">
        <div className="flex-between-center p-4">
          <h2 className="text-xl font-semibold text-neutral-500">
            Free Greeting Card Maker
          </h2>
          <CustomButton
            text="Download"
            icon={<IoPrintSharp />}
            extraStyles="text-white bg-black"
            onClick={handleDownload}
          />
        </div>
      </div>

      <div className="p-4">
        <ImageSelection />
        <TitleInput />
        <MessageInput />
      </div>
    </section>
  );
};

export default CardInputs;
