import { useCallback, useContext, useRef, useState } from "react";
import { SizeContext } from "../utils/size-observer";
import useAnimationFrame from "../utils/use-animation-frame";

const SliderContainer = ({
  children,
  initialOffsetX,
  contentWidth,
  className,
}) => {
  const { innerWidth } = useContext(SizeContext);
  const refScrollX = useRef(initialOffsetX);
  const refContainer = useRef(null);
  const refContent = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const enabled = innerWidth < contentWidth;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;
      if (elContainer && elContent && isPlaying) {
        refScrollX.current += 0.5;
        elContainer.scrollLeft = refScrollX.current;
        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }, [refContainer, refContent, isPlaying])
  );

  return (
    <div
      ref={refContainer}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      className={`slider-container overflow-hidden whitespace-nowrap max-w-full ${className}`}
    >
      <div
        ref={refContent}
        className="inline-flex items-center overflow-hidden"
      >
        {children}
      </div>
      <div
        className={
          enabled ? "inline-flex items-center overflow-hidden" : "hidden"
        }
      >
        {children}
      </div>
    </div>
  );
};

export const SliderItem = ({ children, width }) => {
  return (
    <div
      className="flex justify-center items-center mx-4 h-[50px] pointer-events-none"
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default SliderContainer;
