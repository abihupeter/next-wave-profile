import { useEffect, useState } from "react";

export default function TypingNameHeading() {
  const texts = ["Abihu Peter", "a Developer", "a Designer", "a Creator"];
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 70 : 130;

    const handleTyping = setTimeout(() => {
      setDisplayText((prev) => {
        if (!isDeleting) {
          // Typing forward
          return currentText.substring(0, prev.length + 1);
        } else {
          // Deleting
          return currentText.substring(0, prev.length - 1);
        }
      });

      // If finished typing
      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1200); // Wait before deleting
      }

      // If finished deleting
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length); // Switch to next text
      }
    }, typingSpeed);

    return () => clearTimeout(handleTyping);
  }, [displayText, isDeleting, textIndex]);

  return (
    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground">
      Hello👋, I'm{" "}
      <span className="primary-gradient bg-clip-text text-transparent border-r-1 border-muted-foreground pr-1">
        {displayText}
      </span>
    </h1>
  );
}
