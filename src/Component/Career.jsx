import React from "react";
import { Link } from "react-router-dom";

export default function Career() {
  return (
    <>
    <section  id="arr">
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
                            <img src="./assets/caeeer/tittle-1.svg" alt="" />
                            <h5>Full stack development</h5>
                        </div>

                        <div className="carrer-card-tittle-body p-3">

                        <h6 className="mb-4">Full Stack Development Program Highlights</h6>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>Front End Mastery</strong> : Create user-friendly interfaces with HTML, CSS, and JavaScript, react</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>Back End Proficiency</strong> : Develop server-side applications using Node.js and Express.</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>Database Management</strong> : Learn SQL and NoSQL databases like MySQL and MongoDB.</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>API Integration</strong> : Connect applications through seamless API usage.</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>Deployment Skills</strong> : Deploy applications using AWS and Docker.</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>Practical Application</strong> : Work on live projects to enhance your skills</p>
                        </div>

                        <div className="carrer-card-btn text-center p-3">
                            <Link to="/fullstackdevelopment">Learn More</Link>
                        </div>
                        
                    </div>
                </div>

                <div className="col-lg-6 mb-4">
                    <div className="carrer-card h-100">
                        <div className="carrer-card-tittle mb-2">
                            <img src="./assets/caeeer/tittle-2.svg" alt="" />
                            <h5>Digital Marketing</h5>
                        </div>

                        <div className="carrer-card-tittle-body p-3">

                        <h6 className="mb-4">Digital Marketing Program Highlights</h6>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>SEO Mastery</strong> : Optimize websites for improved search visibility.</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>Social Media Skills</strong>: Build engaging brand presence across platforms.</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>Content Marketing</strong> : Create compelling content to attract your audience.</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>PPC Strategies</strong> : Manage online ad campaigns for effective ROI.</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>Analytics Proficiency</strong> : Use data to track and refine marketing efforts.</p>
                        <p> <i class="fa-solid fa-graduation-cap"></i> <strong>Hands-On Projects</strong> : Gain real-world experience through live projects!</p>
                        </div>

                        <div className="carrer-card-btn text-center p-3">
                            <Link to="/digitalmarketingdevelopment">Learn More</Link>
                        </div>
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
