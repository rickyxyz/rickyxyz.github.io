import { useState, useEffect, ReactNode, useRef } from "react";

interface FadeInSectionProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className: string;
}

function FadeInSection({ children, className, ...props }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenTriggered, setHasBeenTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
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
      {...props}
    >
      {children}
    </section>
  );
}

export default FadeInSection;
