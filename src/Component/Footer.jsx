import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-section mt-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <div className="footer-logo mb-4">
                <Link to="/"><img src="./assets/img/logo.png" alt="" /></Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-8">
                  <div className="link-main-box d-flex gap-3">
                    <p><Link to="/refund">Refund Policy</Link></p>
                    <p><Link to="/privacypolicy">Privacy Policy</Link></p>
                    <p><Link to="/termscondition">Terms & Condition</Link></p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="socal-link d-flex gap-3 justify-content-center justify-content-lg-start sm-mt-4">
                    <span>
                      <i class="fa-brands fa-facebook-f"></i>
                    </span>
                    <span>
                      <i class="fa-brands fa-linkedin-in"></i>
                    </span>
                    <span>
                      <i class="fa-brands fa-instagram"></i>
                    </span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="company-name text-center mb-4">
            <a href="#">Copyright© 2024 TechHut, All rights reserved</a>
          </div>
        </div>
      </div>
    </>
  );
}
