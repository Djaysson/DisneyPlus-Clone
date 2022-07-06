import imageOne from "../../assets/images/slider-badag.jpg";
import imageTwo from "../../assets/images/slider-badging.jpg";
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
        <img src={imageOne} alt="" />
      </CarouselItem>
      <CarouselItem>
        <img src={imageTwo} alt="" />
      </CarouselItem>
    </Carousel>
  );
}
