import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Companies() {
  const carouselOptions = {
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true, 
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <div className="companies-section mb-5">
      <div className="container">
        <div className="companies-section-title">
          <h2 className="text-center mb-5">
            Trusted by <span>50+</span> companies and millions of learners
            around the world
          </h2>
        </div>
        <OwlCarousel className="owl-theme" {...carouselOptions}>
          <div className="item">
            <div className="companies-logo-img">
              <img
                src="./assets/companies/img1.png"
                alt="Company 1"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="item">
            <div className="companies-logo-img">
              <img
                src="./assets/companies/img2.png"
                alt="Company 2"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="item">
            <div className="companies-logo-img">
              <img
                src="./assets/companies/img3.png"
                alt="Company 3"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="item">
            <div className="companies-logo-img">
              <img
                src="./assets/companies/img4.png"
                alt="Company 4"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="item">
            <div className="companies-logo-img">
              <img
                src="./assets/companies/img5.png"
                alt="Company 5"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="item">
            <div className="companies-logo-img">
              <img
                src="./assets/companies/img6.png"
                alt="Company 5"
                className="img-fluid"
              />
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
