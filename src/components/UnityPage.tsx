import { useState, useEffect } from "react";

interface UnityPageProps {
  onBack: () => void;
}

const UnityPage = ({ onBack }: UnityPageProps) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");

  const finalMessage = "Endless love is not just spoken—it is felt, forever.";

  const messages = [
    { text: "Love is you and me cooking dinner together", x: -140, y: -100 },
    { text: "Love is having my first matcha experience with you", x: 20, y: -80 },
    { text: "Love is Isla", x: -160, y: -20 },
    { text: "Love is coming back exhausted from uni together", x: 0, y: 40 },
    { text: "Love is hating on Lydia together", x: -120, y: 80 },
    { text: "Love is being each other's emergency call", x: 30, y: -40 },
    { text: "Love is geeking out on adult stuff together", x: -100, y: -60 },
    { text: "Love is being reminded of each other by a song", x: -20, y: 100 },
    {
      text: "Love is not knowing anything for certain about our future but knowing we stay together",
      x: -60,
      y: 20,
    },
  ];

  // Fade-in effect for messages
  useEffect(() => {
    if (messageIndex > 0 && messageIndex <= messages.length) {
      const timeout = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, messageIndex - 1]);
      }, 200); // Delay between messages

      return () => clearTimeout(timeout);
    }
  }, [messageIndex]);

  // Typing effect for final message
  useEffect(() => {
    if (showFinalMessage) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= finalMessage.length) {
          setTypedMessage(finalMessage.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setShowBackButton(true);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [showFinalMessage]);

  const handleScreenClick = () => {
    if (messageIndex < messages.length) {
      setMessageIndex((prev) => prev + 1);
    } else if (!showFinalMessage) {
      setShowFinalMessage(true);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full p-4 cursor-pointer bg-white"
      onClick={handleScreenClick}
    >
      <h1 className="text-3xl sm:text-4xl text-primary font-bold mb-8 text-center">
        A Love That Grows
      </h1>

      <div className="relative w-full max-w-md h-[400px] flex items-center justify-center overflow-visible">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`absolute text-primary text-base sm:text-lg whitespace-normal text-center transition-opacity duration-700 ${
              visibleMessages.includes(idx) ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(${message.x}px, ${message.y}px)`,
              maxWidth: "200px",
            }}
          >
            {message.text}
          </div>
        ))}
      </div>

      {showFinalMessage && (
        <div className="text-xl sm:text-2xl text-primary font-bold text-center mt-8 px-4 break-words">
          "{typedMessage}"
        </div>
      )}

      {showBackButton && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBack();
          }}
          className="btn btn-primary mt-8 animate-fade-in"
        >
          Back to Charms
        </button>
      )}

      {!showFinalMessage && messageIndex < messages.length && (
        <div className="text-sm text-gray-500 mt-8 animate-pulse">
          Tap anywhere to continue
        </div>
      )}
    </div>
  );
};

export default UnityPage;


