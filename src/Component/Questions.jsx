import React from "react";

export default function Questions() {
  return (
    <>
      <div className="qusetion-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="qusetion-main">
                <h2 className="text-center">
                  Frequently Asked <span>Questions</span>
                </h2>
                <p className="text-center">
                  Explore more about how TechHut can help you grow your skills
                  and achieve great height.
                </p>

                <div className="qusetion-img">
                  <img src="./assets/question/question.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="according-main">
                <div className="accordion" id="accordionExample">
                  {/* Accordion Item 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                       <h6>Do I need any prior experience to join TechHut?</h6> 
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          No prior experience is required! TechHut is designed
                          for learners of all levels. Our mentors will guide you
                          from the basics to advanced topics, ensuring you’re well-prepared.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                       <h6>How long does it take to see progress with a Mentor?</h6>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          TechHut offers a variety of programs, including
                          full-stack web development, data science, digital
                          marketing, and more. Explore different tracks to
                          enhance your skills and career.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <h6>Are there any certifications offered through the mentorship program?</h6>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          TechHut not only teaches skills but also helps with
                          job placement through partnerships with top companies
                          and career guidance from industry experts.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <h6>What kind of projects will I work on during the mentorship?</h6>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          TechHut offers 24/7 mentor support, community
                          discussions, and live help sessions to ensure you
                          never feel stuck while learning.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 5 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <h6>Can I get career advice along with technical guidance?</h6>
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, TechHut offers a range of free resources,
                          including introductory courses, webinars, and access
                          to our blog with tips and tricks for growing your
                          skills.
                        </p>
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

