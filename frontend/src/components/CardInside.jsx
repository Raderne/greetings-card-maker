import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const CardInside = () => {
  const { message } = useGlobalContext();
  const messageRef = useRef(null);
  let messageLength = message.length;

  useEffect(() => {
    console.log(messageLength);
    messageRef.current.style.fontSize = `
        ${messageLength > 0 && messageLength < 50 ? "2.5rem" : "1rem"}
    `;
  }, [messageLength]);

  return (
    <div id="card-inside">
      <div className="wrap flex justify-center items-center break-all">
        <p ref={messageRef} className="text-center">
          {message.length > 0
            ? message.split("\n").map((line, index) => {
                return (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                );
              })
            : "Enter your message here"}
        </p>
      </div>
    </div>
  );
};

export default CardInside;
