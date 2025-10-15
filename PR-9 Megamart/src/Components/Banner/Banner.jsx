import Slider from "react-slick";
import "./Banner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const bannerImages = [
    { src: "/src/image/shoes-banner.png", alt: "Shoes Collection Banner" },
    { src: "/src/image/tshirt-banner.png", alt: "T-shirt Collection Banner" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <section className="banner-section">
      <div className="banner-wrapper">
        <Slider {...settings}>
          {bannerImages.map((img, index) => (
            <div className="slide" key={index}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
