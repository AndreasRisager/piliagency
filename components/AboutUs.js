import { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress, blockNo) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

export default function AboutUs() {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) /
      clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <section ref={refContainer} className="bg-gray-50 text-gray-900" id="om">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <p
            className="transition-opacity duration-500"
            style={{ opacity: opacityForBlock(progress, 0) }}>
            Vi har over 5 års erfaring med influencer marketing og kommunikation.
          </p>
          <p
            className="transition-opacity duration-500 my-4"
            style={{ opacity: opacityForBlock(progress, 1) }}>
            Med vores erfaring og flere år i branchen har vi et solidt netværk i branchen.
          </p>
          <p
            className="transition-opacity duration-500"
            style={{ opacity: opacityForBlock(progress, 2) }}>
            Vores udvalg af dygtige og kreative influenter sikrer, at dit budskab når frem til netop
            jeres målgrupper.
          </p>
        </div>
      </div>
    </section>
  );
}
