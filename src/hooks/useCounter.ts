import { useLayoutEffect, useRef, useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";

export interface HookProps {
  max?: number;
  initial?: number;
}

export const useCounter = ({ max = 1, initial = 2 }: HookProps) => {
  const [count, setCount] = useState(initial);
  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());

  const inc = () => {
    setCount(Math.min(count + 1, max));
  };
  const dec = () => {
    setCount(count - 1);
  };

  useLayoutEffect(() => {
    tl.current
      .to(elementToAnimate.current, {
        y: -2,
        duration: 0.3,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: +2,
        duration: 0.3,
        ease: "bounce.out",
      })
      .pause(0.6);

    tl.current.play(0);
  }, [count]);

  return { count, inc, dec, elementToAnimate };
};
