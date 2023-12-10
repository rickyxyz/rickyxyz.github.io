import { useState, useEffect, ReactNode, useRef } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className: string;
}

function FadeInSection({ children, className }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenTriggered, setHasBeenTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && !hasBeenTriggered) {
        setIsVisible(true);
        setHasBeenTriggered(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasBeenTriggered]);

  return (
    <section
      ref={sectionRef}
      className={`transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
    >
      {children}
    </section>
  );
}

export default FadeInSection;
