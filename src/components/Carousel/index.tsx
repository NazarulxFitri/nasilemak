import { Carousel as CarouseLib } from "@trendyol-js/react-carousel";
import Image from "next/image";

const Carousel = ({ children, displayCol, slideCol }: any) => {
  return (
    <CarouseLib
      responsive
      show={displayCol}
      slide={slideCol}
      rightArrow={
        <Image
          id="carouselIcon"
          src="/right.svg"
          height={20}
          width={20}
          alt="next"
          style={{
            cursor: "pointer",
            position: "absolute",
            zIndex: 1,
            height: "100%",
            right: 0,
            padding: "0 8px",
          }}
        />
      }
      leftArrow={
        <Image
          id="carouselIcon"
          src="/left.svg"
          height={20}
          width={20}
          alt="prev"
          style={{
            cursor: "pointer",
            position: "absolute",
            zIndex: 1,
            height: "100%",
            padding: "0 8px",
          }}
        />
      }
    >
      {children}
    </CarouseLib>
  );
};

export default Carousel;
