import { useRef, useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
const MAX = 10;

export const CounterEffect = () => {
  const [count, setCount] = useState(6);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const inc = () => {
    setCount(Math.min(count + 1, MAX));
  };
  const dec = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("useEffect", count);

    const tl = gsap.timeline();

    if (count >= 10) {
      console.log("max value");
      tl.to(counterElement.current, {
        y: -20,
        duration: 1,
        ease: "ease.out",
      }).to(counterElement.current, {
        y: +20,
        duration: 1,
        ease: "bounce.out",
      });
    }
    if (count < 3) {
      console.log("min value");
      tl.to(counterElement.current, {
        y: -20,
        duration: 1,
        ease: "ease.out",
      }).to(counterElement.current, {
        y: 30,
        duration: 1,
        ease: "bounce.out",
      });
    }
  }, [count]);

  return (
    <div>
      <button onClick={inc}>+1</button>
      <h1 ref={counterElement}>
        <>Counter Effects: {count}</>
      </h1>
      <button onClick={dec}>-1</button>
    </div>
  );
};
