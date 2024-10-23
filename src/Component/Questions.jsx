import React from "react";

export default function Questions() {
  return (
    <>
      <div className="qusetion-section mt-5">
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
                       <h6>How Long Does It Take to See Progress with a Mentor?</h6>
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
                        You can expect to see progress with a mentor within a few weeks to a few months, depending on your goals and commitment.
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
                        <h6>Are There Any Certifications Offered Through the Mentorship Program?
                        </h6>
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
                        Yes, the mentorship program provides various certifications to enhance your skills and boost your resume.
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
                        <h6>What Kind of Projects Will I Work On During the Mentorship?
                        </h6>
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
                        You will work on various projects tailored to your goals, including practical assignments, case studies, and collaborative efforts.
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
                        <h6>Can I Get Career Advice Along with Technical Assistance?</h6>
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
                        Yes, you can receive both career advice and technical assistance in the mentorship program. This dual support helps you navigate your career path while enhancing your technical skills.
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

