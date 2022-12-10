import React, { useEffect, useRef } from "react";

// No packages needed. I use tailwind CSS, but it's not required.
const MyComponent = ({}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const carouselReference = useRef(null);
  useInterval(() => {
    setActiveIndex((activeIndex + 1) % 4);
    if (!!carouselReference && !!carouselReference.current) {
      const width = carouselReference.current.offsetWidth;
      carouselReference.current.scrollTo(width * activeIndex, 0);
    }
  }, 2000);
  
  return (
    <div className="w-full aspect-video text-center overflow-hidden h-full">
      <div ref={carouselReference} className="flex overflow-x-auto snap-x scroll-smooth h-full rounded-xl">
		<div className={"snap-start w-full h-full aspect-video object-cover bg-blue-100"} />
		<div className={"snap-start w-full h-full aspect-video object-cover bg-blue-100"} />
      </div>
	</div>
  );
};

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};


