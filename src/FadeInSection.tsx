import { useState, useEffect, ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className: string;
}

function FadeInSection({ children, className }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenTriggered, setHasBeenTriggered] = useState(false);

  useEffect(() => {
    if (hasBeenTriggered) return;
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Adjust the threshold as needed for when you want the fade-in effect to trigger
      if (scrollY > 10) {
        setIsVisible(true);
        setHasBeenTriggered(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasBeenTriggered]); // Empty dependency array ensures the effect runs only once on mount

  return (
    <section
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </section>
  );
}

export default FadeInSection;
