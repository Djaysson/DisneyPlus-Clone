import imageOne from "../../assets/images/slider-badag.jpg";
import imageTwo from "../../assets/images/slider-badging.jpg";
import imageThree from "../../assets/images/slider-scale.jpg";
import imageFour from "../../assets/images/slider-scales.jpg";
import { Carousel, CarouselItem } from "./styles";

export function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <CarouselItem>
        <img src={imageOne} alt="First image of the carousel" />
      </CarouselItem>
      <CarouselItem>
        <img src={imageTwo} alt="Second image of the carousel" />
      </CarouselItem>
      <CarouselItem>
        <img src={imageThree} alt="Third image of the carousel" />
      </CarouselItem>
      <CarouselItem>
        <img src={imageFour} alt="Fourth image of the carousel" />
      </CarouselItem>
    </Carousel>
  );
}
