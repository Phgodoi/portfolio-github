import  { useEffect, useRef } from "react";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function isMobileLandscape() {
  return window.matchMedia("(max-width: 800px) and (orientation: landscape)").matches;
}

const Star = () => {
  const starRef = useRef(null);

  useEffect(() => {
    const star = starRef.current;

    var posX = randomInRange(0, window.innerWidth);
    var posY = randomInRange(0, 250);

    if (isMobileLandscape()) {
      posY = randomInRange(0, 90);
    }

    star.style.left = posX + "px";
    star.style.top = posY + "px";
  }, []);

  return <div ref={starRef} className="star"></div>;
};

export default Star;