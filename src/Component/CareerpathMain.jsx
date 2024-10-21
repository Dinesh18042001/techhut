
// code 1

import React, { useEffect } from "react";

export default function CareerpathMain() {
  useEffect(() => {
    const setScrollAnimation = () => {
      const scroller = document.querySelector(".scroller-container");
      const scrollerWidth = scroller.scrollWidth;
      const viewportWidth = window.innerWidth;

      const duration = scrollerWidth / viewportWidth * 20; // Adjust scrolling speed (20s for full scroll)
      scroller.style.animation = `scroll-left ${duration}s linear infinite`;
    };

    setScrollAnimation();
    window.addEventListener("resize", setScrollAnimation);

    return () => {
      window.removeEventListener("resize", setScrollAnimation);
    };
  }, []);

  const scrollerStyle = {
    display: "flex",
    whiteSpace: "nowrap",
  };

  const slideItemStyle = {
    minWidth: "300px", 
    marginRight: "20px",
  };

  return (
    <div className="careerpathmain-section mt-5">
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .scroller-container {
            display: flex;
            animation: scroll-left 30s linear infinite; /* Adjust duration for speed */
          }

          .scroller-wrapper {
            width: 100%;
            overflow: hidden;
          }
        `}
      </style>
      <div className="scroller-wrapper overflow-hidden">
        <div className="scroller-container" style={scrollerStyle}>
          <div className="col-lg-4" style={slideItemStyle}>
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
          </div>
          <div className="col-lg-4" style={slideItemStyle}>
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
          <div className="col-lg-4" style={slideItemStyle}>
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
          <div className="col-lg-4" style={slideItemStyle}>
            <div className="silider-box mb-3">
              <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
                <div className="icon-box box5">
                  <span>
                    <i className="fa-solid fa-bolt"></i>
                  </span>
                </div>
                <p>Not able to find Good Job Referrals?</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4" style={slideItemStyle}>
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
        </div>
      </div>
    </div>
  );
}



