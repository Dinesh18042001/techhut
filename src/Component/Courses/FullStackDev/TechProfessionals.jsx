import React from "react";
import TechCard from "./TechCard";

export default function TechProfessionals() {
  return (
    <>
      <div className="techprofessionals-section mt-5 mb-5">
        <div className="container">
          <div className="techprofessionals-section-tittle mb-5">
            <h2 className="text-center">
              Join A Community Of <span>10000+</span> Tech Professionals
            </h2>
            <p className="text-center">
              <span>Meet and grow together</span> with a community of
              passionate developers who have taken their careers to new heights
              with TechHut.
            </p>
          </div>

          <div className="techprofessionals-btn-box mt-4">
            <h6 className="text-center">
              Get more insights on how TechHut can help you crack a full stack
              or backend role in top tech companies
            </h6>

            <div className="main-techprofessionals-box row justify-content-center gap-4 mt-4">
              <div className="col-12 col-sm-6 col-md-auto techprofessionals-box-one">
                <a href="#">
                  Download Career Handbook{" "}
                  <i class="fa-solid fa-download ms-2"></i>
                </a>
              </div>
              {/* <div className="col-12 col-sm-6 col-md-auto techprofessionals-box-two">
                <a href="#">
                  Download Placement Stats{" "}
                  <i class="fa-solid fa-download ms-2"></i>
                </a>
              </div> */}
            </div>
          </div>
          <TechCard/>
        </div>
      </div>
    </>
  );
}
