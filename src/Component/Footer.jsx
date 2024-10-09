import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer-section mt-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <div className="footer-logo">
                <img src="./src/assets/img/logo.png" alt="" />
              </div>
            </div>

            <div className="col-lg-6">
                <div className="row justify-content-between align-items-center">
                    <div className="col-lg-8">
                    <div className="link-main-box d-flex gap-3">
                    <p>Refund Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Condition</p>
                </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="socal-link d-flex gap-3">
                    <span><i class="fa-brands fa-facebook-f"></i></span>
                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                    <span><i class="fa-brands fa-instagram"></i></span>
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
