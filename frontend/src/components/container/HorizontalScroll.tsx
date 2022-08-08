import { FC, ReactNode, useRef } from "react";

import { ReactComponent as Arrow } from "../../assets/icons/less-than-solid.svg";

interface HorizontalScrollProps {
  children: ReactNode;
  controlClasses?: string;
  spacingClass?: string;
}

const HorizontalScroll: FC<HorizontalScrollProps> = ({
  children,
  controlClasses,
  spacingClass,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const defaultArrowClasses =
    "w-14 h-14 hidden bg-gray-200 fill-gray-800 p-4 rounded-full sm:block absolute";
  const space = spacingClass || "space-x-4";

  const scrollLeft = () => {
    sliderRef.current && (sliderRef.current.scrollLeft -= 400);
  };
  const scrollRight = () => {
    sliderRef.current && (sliderRef.current.scrollLeft += 400);
  };
  return (
    <div className="relative flex items-center sm:px-8">
      <div className="h2 hidden w-2"></div>
      <Arrow
        className={
          "left-0 " + (controlClasses ? controlClasses : defaultArrowClasses)
        }
        onClick={scrollLeft}
      />
      <div
        ref={sliderRef}
        className={
          `h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide ` +
          space
        }
      >
        {children}
      </div>
      <Arrow
        className={
          "right-0 rotate-180 " +
          (controlClasses ? controlClasses : defaultArrowClasses)
        }
        onClick={scrollRight}
      />
    </div>
  );
};

export default HorizontalScroll;
