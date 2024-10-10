import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function CareerPath() {
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true, 
    autoplayTimeout: 3000, 
    autoplayHoverPause: true, 
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  return (
    <>
      <div className="carrerpath-section">
        <div className="container">
          <div className="carrerpath-section-tittle mb-5">
            <h3 className="text-center mb-2">
              Facing Issue, In your <span>Career path?</span>
            </h3>
            <p className="text-center">
              We are here for it , for your dream job
            </p>
          </div>
          <div className="row">
            <OwlCarousel className="owl-theme" {...options}>

              <div className="item">

                <div className="silider-box mb-3">
                  <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
                    <div className="icon-box">
                      <span>
                        <i className="fa-solid fa-book-open-reader"></i>
                      </span>
                    </div>
                    <p>Not able to find the right resources?</p>
                  </div>
                </div>

                <div className="silider-box ">
                  <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
                    <div className="icon-box box2">
                      <span>
                        <i class="fa-regular fa-face-smile"></i>
                      </span>
                    </div>
                    <p>Facing issue in getting resume shortlisted?</p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="silider-box mb-3">
                  <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
                    <div className="icon-box box3">
                      <span>
                      <i class="fa-regular fa-face-smile"></i>
                      </span>
                    </div>
                    <p>Not able to find the right resources?</p>
                  </div>
                </div>
                <div className="silider-box mb-3">
                  <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
                    <div className="icon-box box4">
                      <span>
                      <i class="fa-solid fa-comments"></i>
                      </span>
                    </div>
                    <p>Hesitation during HR Technical Interview?</p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="silider-box mb-3">
                  <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
                    <div className="icon-box box5">
                      <span>
                      <i class="fa-solid fa-bolt"></i>
                      </span>
                    </div>
                    <p>Not able to find Good Job Referrals?</p>
                  </div>
                </div>

                <div className="silider-box mb-3">
                  <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
                    <div className="icon-box box6">
                      <span>
                      <i class="fa-solid fa-graduation-cap"></i>
                      </span>
                    </div>
                    <p>Not getting Interview calls?</p>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="silider-box mb-3">
                  <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
                    <div className="icon-box box7">
                      <span>
                      <i class="fa-solid fa-paper-plane"></i>
                      </span>
                    </div>
                    <p>Not able to Find Good Job Opportunities?</p>
                  </div>
                </div>
                <div className="silider-box mb-3">
                  <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
                    <div className="icon-box box8">
                      <span>
                      <i class="fa-solid fa-rocket"></i>
                      </span>
                    </div>
                    <p>Are you scared of programming?</p>
                  </div>
                </div>
              </div>

            </OwlCarousel>
          </div>
        </div>
      </div>
    </>
  );
}
