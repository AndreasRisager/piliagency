import Image from "next/image";
import SliderContainer, { SliderItem } from "./Slider";

export const PartnerLogos = ({ images }) => {
  const halfOfImages = Math.ceil(images.length / 2);
  return (
    <>
      <SliderContainer className="" contentWidth={1610} initialOffsetX={0}>
        {images.slice(0, halfOfImages).map((image, index) => (
          <SliderItem width={image.width || 150} key={image.url || index}>
            <Image
              src={image.url}
              alt={image.alt || "partner"}
              fill={true}
              style={{ objectFit: "contain" }}
              sizes={image.width || 150}
            />
          </SliderItem>
        ))}
      </SliderContainer>
      <SliderContainer className="mt-6" contentWidth={1610} initialOffsetX={0}>
        {images.slice(halfOfImages).map((image, index) => (
          <SliderItem width={image.width || 150} key={image.url || index}>
            <Image
              src={image.url}
              alt={image.alt || "partner"}
              fill={true}
              style={{ objectFit: "contain" }}
              sizes={image.width || 150}
            />
          </SliderItem>
        ))}
      </SliderContainer>
    </>
  );
};
