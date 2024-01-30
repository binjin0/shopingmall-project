import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import imageData from "../../assets/Carousel_data";

export default function Slider() {
  const images = [
    {
      label: "Image 1",
      alt: "image1",
      url: "https://react-shop-oinochoe.vercel.app/assets/img_shop_digital-c7904ed6.jpeg",
      title: "신속한 업무처리!",
      description: "다양한 디지털 상품을 둘러보세요. ",
    },

    {
      label: "Image 2",
      alt: "image2",
      url: "https://react-shop-oinochoe.vercel.app/assets/img_shop_fashion-32c29a86.jpeg",
      title: "물빠진 청바지!",
      description: "이제 막 도착한 패션 청바지를 구경해 보세요.",
    },

    {
      label: "Image 3",
      alt: "image3",
      url: "https://react-shop-oinochoe.vercel.app/assets/img_shop_grocery-63da3845.jpeg",
      title: "신선한 식품!",
      description: "농장 직배송으로 더욱 신선한 식료품을 만나보세요.",
    },
  ];
  const renderCenterText = (currentSlide) => (
    <div className="carousel-description absolute left-auto right-auto bottom-1/3 mb-10 text-left w-full lg:container px-4 md:px-10">
      <h2 className="text-2xl lg:text-4xl font-bold text-white">
        {images[currentSlide].title}
      </h2>
      <p className="my-2 text-white">{images[currentSlide].description}</p>
      <a href="/" className="btn btn-sm lg:btn-md mt-3 ">
        바로가기
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
      {/* 추가적인 텍스트나 컨텐츠를 여기에 추가할 수 있습니다. */}
    </div>
  );

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      {images.map((image, index) => (
        <div key={image.label}>
          <img key={image.label} src={image.url} alt={image.alt} />
          {renderCenterText(index)}
        </div>
      ))}
    </Carousel>
  );
}
