import Image from "next/image";
import SliderContainer, { SliderItem } from "./Slider";

export const PartnerLogos = ({ images = [] }) => {
  const halfOfImages = Math.ceil(images.length / 2);
  return (
    <>
      <SliderContainer className="" contentWidth={2300} initialOffsetX={0}>
        {images.slice(0, halfOfImages).map((image, index) => (
          <SliderItem width={image.width || 150} key={image.url || index}>
            <Image
              src={image.url}
              alt={image.alt || "partner"}
              height={50}
              width={image.width || 150}
              style={{ objectFit: "contain" }}
              title={image?.alt}
            />
          </SliderItem>
        ))}
      </SliderContainer>
      <SliderContainer className="mt-6" contentWidth={2300} initialOffsetX={0}>
        {images.slice(halfOfImages).map((image, index) => (
          <SliderItem width={image.width || 150} key={image.url || index}>
            <Image
              src={image.url}
              alt={image.alt || "partner"}
              height={50}
              width={image.width || 150}
              style={{ objectFit: "contain" }}
            />
          </SliderItem>
        ))}
      </SliderContainer>
    </>
  );
};
