import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function DigitalTechCard() {

// Owl Carousel settings
const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,           
    autoplayTimeout: 3000,        
    autoplayHoverPause: true,  
    responsive: {
      0: {
        items: 1, 
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3, 
      },
    },
  };


  return (
    <>
     <div className="techcard-section mt-5">
        <div className="container">
          <OwlCarousel className="owl-theme" {...options}>
            {/* First Card */}
            <div className="item ">
              <div className="custom-card position-relative">
                <div className="card-img">
                  <img
                    src="./assets/TechCard/img4.jpg"
                    alt="Card Image"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <div className="custom-card-title d-flex justify-content-between align-items-center mb-4">
                    <div className="text">
                      <h6>Meet Sayanika Dutta</h6>
                    </div>

                    {/* <div className="custom-card-icon">
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div> */}
                  </div>
                  <p className="card-text">
                    “I knew it would be a great start to start with TechHut.”
                  </p>
                  <hr />

                  <div className="custom-card-company text-center">
                    <p>Sayanika cracked a career at</p>
                    <div className="custom-card-company-img d-flex justify-content-center">
                      <img
                        src="./assets/TechCard/microsoft.png"
                        alt="Company Logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-img">
                  <img src="./assets/TechCard/Background.png" alt="" />
                </div>
              </div>

              <div className="custom-card-bottom-box position-relative mt-5">
                <h6 className="text-center">
                  Fresher <i class="fa-solid fa-arrow-right me-3 ms-3"></i>{" "}
                  Engineer
                </h6>

                <div className="custom-card-bottom-box-bg">
                  <img src="./assets/TechCard/Background2.png" alt="" />
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className="item ">
              <div className="custom-card position-relative h-100">
                <div className="card-img">
                  <img
                    src="./assets/TechCard/img5.jpg"
                    alt="Card Image"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <div className="custom-card-title d-flex justify-content-between align-items-center mb-4">
                    <div className="text">
                      <h6>Meet Adriza Mishra</h6>
                    </div>

                    {/* <div className="custom-card-icon">
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div> */}
                  </div>
                  <p className="card-text">
                    “TechHut helped me overcome my fear of coding.”
                  </p>
                  <hr />

                  <div className="custom-card-company text-center">
                    <p>Sayanika cracked a career at</p>
                    <div className="custom-card-company-img d-flex justify-content-center">
                      <img
                        src="./assets/TechCard/Meta-Logo.png"
                        alt="Company Logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-img">
                  <img src="./assets/TechCard/Background.png" alt="" />
                </div>
              </div>

              <div className="custom-card-bottom-box position-relative mt-5">
                <h6 className="text-center">
                Student <i class="fa-solid fa-arrow-right me-3 ms-3"></i>{" "}
                Marketing Intern
                </h6>

                <div className="custom-card-bottom-box-bg">
                  <img src="./assets/TechCard/Background2.png" alt="" />
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div className="item ">
              <div className="custom-card position-relative h-100">
                <div className="card-img">
                  <img
                    src="./assets/TechCard/img6.jpg"
                    alt="Card Image"
                    className="img-fluid"
                  />
                </div>
                <div className="card-body">
                  <div className="custom-card-title d-flex justify-content-between align-items-center mb-4">
                    <div className="text">
                      <h6>Meet Piyush</h6>
                    </div>

                    {/* <div className="custom-card-icon">
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div> */}
                  </div>
                  <p className="card-text">
                  "I always understood and found help throughout the entire journey."
                  </p>
                  <hr />

                  <div className="custom-card-company text-center">
                    <p>Sayanika cracked a career at</p>
                    <div className="custom-card-company-img d-flex justify-content-center mt-4">
                      <img
                        src="./assets/TechCard/Amazon.png"
                        alt="Company Logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-img">
                  <img src="./assets/TechCard/Background.png" alt="" />
                </div>
              </div>

              <div className="custom-card-bottom-box position-relative mt-5">
                <h6 className="text-center">
                Software Intern <i class="fa-solid fa-arrow-right me-3 ms-3"></i>{" "}
                SDE II
                </h6>

                <div className="custom-card-bottom-box-bg">
                  <img src="./assets/TechCard/Background2.png" alt="" />
                </div>
              </div>
            </div>
            {/* Add more cards here as needed */}
          </OwlCarousel>
        </div>
      </div>
    </>
  )
}
