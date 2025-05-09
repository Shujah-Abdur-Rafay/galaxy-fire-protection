import { useState, useEffect, useRef, RefObject } from 'react';

interface Options {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useElementOnScreen(options: Options): [RefObject<HTMLDivElement>, boolean] {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = containerRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [containerRef, isVisible];
} 