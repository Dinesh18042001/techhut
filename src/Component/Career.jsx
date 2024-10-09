import React from "react";

export default function Career() {
  return (
    <>
      <div className="carrer-section mt-5 mb-5">
        <div className="carrer-section-tittle mb-5">
          <h2 className="text-center">
            Choose your Career path and <span>Grow Along</span>
          </h2>
          <p className="text-center">
            Learn from Industry experts and get the IT Certificate{" "}
          </p>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">

                <div className="col-lg-6 mb-4">
                    <div className="carrer-card h-100">
                        <div className="carrer-card-tittle mb-2">
                            <img src="/src/assets/caeeer/tittle-1.png" alt="" />
                            <h5>Software Programmer</h5>
                        </div>

                        <div className="carrer-card-tittle-body p-3">

                        <h6 className="text-center mb-4">Program Highlights</h6>
                        <p> <i class="fa-solid fa-graduation-cap"></i> Front End: HTML, CSS, JavaScript</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> Back End: Nodejs, Python</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> Databases: SQL, NoSQL(MySQL, MongoDB)</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> APIs</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> Deployment: AWS, Docker</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> Live Projects</p>
                        </div>

                        <div className="carrer-card-btn text-center p-3">
                            <a href="#">Learn More</a>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-6 mb-4">
                    <div className="carrer-card h-100">
                        <div className="carrer-card-tittle mb-2">
                            <img src="/src/assets/caeeer/tittle-2.png" alt="" />
                            <h5>Digital Marketer</h5>
                        </div>

                        <div className="carrer-card-tittle-body p-3">

                        <h6 className="text-center mb-4">Program Highlights</h6>
                        <p> <i class="fa-solid fa-graduation-cap"></i> Search Engine Optimization</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> Social Media</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> Content Marketing</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> PPC Advertising</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> Analytics</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> Live Projects</p>
                        </div>

                        <div className="carrer-card-btn text-center p-3">
                            <a href="#">Learn More</a>
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
