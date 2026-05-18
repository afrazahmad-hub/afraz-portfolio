"use client";

import { useEffect, useRef, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
};

export default function FadeIn({
  children,
  className = "",
  immediate = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;

    if (!node || immediate) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={`fade-up${immediate ? " visible" : ""}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
