import React from "react";

export default function Banner() {
  return (
    <>
      <div className="baneer-section">
        <div className="banner-main-box position-relative">
          <div className="banner-img">
            <img src="./assets/banner/banner-bg.png" alt="" />
          </div>

          <div className="banner-info">
            <div className="container">
              <div className="row align-items-center">

                <div className="col-lg-7">

                  <h2>Turn your Passion into a New Career Path</h2>
                  <img src="./assets/banner/line-img.png" alt="" />

                  <div className="row mt-5">
                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-medal"></i>
                        </span>
                        <h6 className="ms-2">
                          Collaborate with Professionals for Real Projects and
                          Jobs
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-microscope icon2"></i>
                        </span>
                        <h6 className="ms-2">
                          Build Powerful Career-Boosting Connections
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-chalkboard-user icon3"></i>
                        </span>
                        <h6 className="ms-2">
                          Ace Your Interviews and Live Projects with IT Industry
                          Experts
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-address-card icon4"></i>
                        </span>
                        <h6 className="ms-2">
                          Get Expert Advice for Every Career Move
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="banner-btn d-flex gap-4 mt-4 mb-5">
                    <div className="banner-btn-1">
                      <a href="#">Join Now</a>
                    </div>
                    <div className="banner-btn-2">
                      <a href="#">Download Syllabus <i class="fa-solid fa-download"></i></a>
                    </div>
                  </div>
                </div>

                

                <div className="col-lg-5">

                   <div className="row">

                    <div className="col-lg-6 mb-3">
                      <div className="banner-card">
                        <h6 className="mb-2">Mentors</h6>
                        <p className="mb-2">100+ Mentors</p>
                        <p className="mb-2">1200+ Queries Resolved</p>
                        <div className="banner-card-img d-flex justify-content-center mt-4">
                          <img src="./assets/banner/card-img1.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-lg-12 mb-3 h-100">
                          <div className="banner-card2 d-flex">
                            <div className="card-info">
                              <h6 className="mb-2">Ask Anything</h6>
                              <p>Need Advice ? Connect with our mentors</p>
                            </div>
                            <div className="card-img">
                              <img src="./assets/banner/card-img2.png" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-3 h-100">
                          <div className="banner-card2 card3 d-flex">
                            <div className="card-info">
                              <h6 className="mb-2">Ask Anything</h6>
                              <p>Need Advice ? Connect with our mentors</p>
                            </div>
                            <div className="card-img">
                              <img src="./assets/banner/card-img3.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>

                   <div className="row">
                   <div className="col-lg-6">
                      <div className="row">
                        <div className="col-lg-12 mb-3 h-100">
                          <div className="banner-card2 card4 d-flex">
                            <div className="card-info">
                              <h6 className="mb-2">Feed</h6>
                              <p>Stay updated on latest trends</p>
                            </div>
                            <div className="card-img">
                              <img src="./assets/banner/card-img4.png" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-3 h-100">
                          <div className="banner-card2 card5 card3 d-flex">
                            <div className="card-info">
                              <h6 className="mb-2">Problems</h6>
                              <p>Daily Problem Challenges</p>
                            </div>
                            <div className="card-img">
                              <img src="./assets/banner/card-img5.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="banner-card card6">
                        <h6 className="mb-2">Roadmaps</h6>
                        <p className="mb-2">Solve skill based roadmaps</p>
                        <div className="banner-card-img d-flex justify-content-center mt-4">
                          <img src="./assets/banner/card-img6.png" alt="" />
                        </div>
                      </div>
                    </div>
                   </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// /src/assets/banner/banner-bg.png
