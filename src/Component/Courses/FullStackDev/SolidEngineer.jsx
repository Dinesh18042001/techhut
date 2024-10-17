import React, { useState } from "react";
export default function SolidEngineer() {
  const [activeModule, setActiveModule] = useState(1);

  const renderModuleInfo = () => {
    switch (activeModule) {
      case 1:
        return (
          <div className="month-info-card-info mt-4">
            <p>Programming Language Fundamentals</p>
            <ul className="mt-4">
              <li className="mb-2">
                <p>Introduction to Java</p>
              </li>
              <li className="mb-2">
                <p>Input Output and Data Types</p>
              </li>
              <li className="mb-2">
                <p>Operators</p>
              </li>
              <li className="mb-2">
                <p>Conditions</p>
              </li>
              <li className="mb-2">
                <p>Loops</p>
              </li>
              <li className="mb-2">
                <p>Pattern Problems</p>
              </li>
              <li className="mb-2">
                <p>Functions</p>
              </li>
              <li className="mb-2">
                <p>1D and 2D Arrays</p>
              </li>
              <li className="mb-2">
                <p>Strings</p>
              </li>
              <li className="mb-2">
                <p>Memory Management</p>
              </li>
              <li className="mb-4">
                <p>Basic OOP for Problem Solving</p>
              </li>
            </ul>
          </div>
        );
      case 2:
        return (
          <div className="month-info-card-info mt-4">
            <p>Data Structures and Algorithms</p>
            {/* Add content for Module 2 */}
          </div>
        );
      case 3:
        return (
          <div className="month-info-card-info mt-4">
            <p>SQL/MongoDB</p>
            
          </div>
        );
      case 4:
        return (
          <div className="month-info-card-info mt-4">
            <p>LLD and Project Specialisations</p>
            
          </div>
        );
      case 5:
        return (
          <div className="month-info-card-info mt-4">
            <p>System Design Essentials</p>
            {/* Add content for Module 5 */}
          </div>
        );
      case 6:
        return (
          <div className="month-info-card-info mt-4">
            <p>Electives</p>
            {/* Add content for Module 6 */}
          </div>
        );
      default:
        return null;
    }
  };

  function handleOccupationChange(occupation) {
    if (occupation === "employed") {
      document.getElementById("employedFields").style.display = "block";
      document.getElementById("studentFields").style.display = "none";
    } else if (occupation === "student") {
      document.getElementById("studentFields").style.display = "block";
      document.getElementById("employedFields").style.display = "none";
    }
  }

  const [otherCompanyInputVisible, setOtherCompanyInputVisible] =
    useState(false);

  const handleOtherChange = () => {
    setOtherCompanyInputVisible(true);
  };

  const [isEmployed, setIsEmployed] = useState(true); // Assuming "Employed" is the default

  const handleOccupationToggle = (event) => {
    setIsEmployed(event.target.checked); // true if checked (Employed), false if unchecked (Student)
  };

  // Other existing functions

  return (
    <>
      <div className="solidengineer-section">
        <div className="container">
          <div className="solidengineer-section-tittle">
            <h2 className="text-center">
              Curriculum is designed to make you a <span>solid engineer</span>
            </h2>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 mb-4">
              {/* Module Tabs */}
              <a onClick={() => setActiveModule(1)}>
                <div className="fundamentals-box position-relative mb-3">
                  <div className="fundamentals-box-card d-flex align-items-center justify-content-start gap-3">
                    <div className="fundamentals-box-card-num">
                      <h2>01</h2>
                    </div>
                    <div className="fundamentals-box-card-info">
                      <p>Module</p>
                      <h6>Programming Language Fundamentals</h6>
                    </div>
                  </div>
                  <div className="months-logo">
                    <p>2 Months</p>
                  </div>
                </div>
              </a>

              <a onClick={() => setActiveModule(2)}>
                <div className="fundamentals-box position-relative mb-3">
                  <div className="fundamentals-box-card d-flex align-items-center justify-content-start gap-3">
                    <div className="fundamentals-box-card-num">
                      <h2>02</h2>
                    </div>
                    <div className="fundamentals-box-card-info">
                      <p>Module</p>
                      <h6>Data Structures and Algorithms</h6>
                    </div>
                  </div>
                  <div className="months-logo">
                    <p>2 Months</p>
                  </div>
                </div>
              </a>

              <a onClick={() => setActiveModule(3)}>
                <div className="fundamentals-box position-relative mb-3">
                  <div className="fundamentals-box-card d-flex align-items-center justify-content-start gap-3">
                    <div className="fundamentals-box-card-num">
                      <h2>03</h2>
                    </div>
                    <div className="fundamentals-box-card-info">
                      <p>Module</p>
                      <h6>SQL/MongoDB</h6>
                    </div>
                  </div>
                  <div className="months-logo">
                    <p>2 Months</p>
                  </div>
                </div>
              </a>

              <a onClick={() => setActiveModule(4)}>
                <div className="fundamentals-box position-relative mb-3">
                  <div className="fundamentals-box-card d-flex align-items-center justify-content-start gap-3">
                    <div className="fundamentals-box-card-num">
                      <h2>04</h2>
                    </div>
                    <div className="fundamentals-box-card-info">
                      <p>Module</p>
                      <h6>LLD and Project Specialisations</h6>
                    </div>
                  </div>
                  <div className="months-logo">
                    <p>2 Months</p>
                  </div>
                </div>
              </a>

              <a onClick={() => setActiveModule(5)}>
                <div className="fundamentals-box position-relative mb-3">
                  <div className="fundamentals-box-card d-flex align-items-center justify-content-start gap-3">
                    <div className="fundamentals-box-card-num">
                      <h2>05</h2>
                    </div>
                    <div className="fundamentals-box-card-info">
                      <p>Module</p>
                      <h6>System Design Essentials</h6>
                    </div>
                  </div>
                  <div className="months-logo">
                    <p>2 Months</p>
                  </div>
                </div>
              </a>

              <a onClick={() => setActiveModule(6)}>
                <div className="fundamentals-box position-relative mb-3">
                  <div className="fundamentals-box-card d-flex align-items-center justify-content-start gap-3">
                    <div className="fundamentals-box-card-num">
                      <h2>06</h2>
                    </div>
                    <div className="fundamentals-box-card-info">
                      <p>Module</p>
                      <h6>Electives</h6>
                    </div>
                  </div>
                  <div className="months-logo">
                    <p>2 Months</p>
                  </div>
                </div>
              </a>

              {/* Download Curriculum button */}
              <div className="fundamentals-box-btn text-center">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#downloadCurriculumModal"
                >
                  Download Curriculum{" "}
                  <i className="fa-solid fa-download ms-2"></i>
                </a>
              </div>
            </div>

            {/* Module Content */}
            <div className="col-lg-6">
              <div className="month-info-card">
                <div className="month-info-tittle">
                  <h6 className="text-center">2 Months</h6>
                  <p className="text-center">
                    *A learner can do as many electives as they want, but only
                    after completion of Core Curriculum.
                  </p>
                </div>

                {renderModuleInfo()}

                <hr className="line" />
                <p
                  className="text-center"
                  style={{ color: "#fff", fontWeight: "500" }}
                >
                  full stack development : Module
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade downloadCurriculumModal"
        id="downloadCurriculumModal"
        tabIndex="-1"
        aria-labelledby="downloadCurriculumModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="downloadCurriculumModalLabel">
                Download Curriculum
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                {/* Name Field */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="Full Name"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="Email"
                  />
                </div>

                {/* Phone Field */}
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneInput"
                    placeholder="Phone Number"
                  />
                </div>

                {/* Toggle Switch for Occupation */}
                <div className="mb-3 text-center">
                  <label className="form-label">Occupation</label>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="me-3">Student</span>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="occupationSwitch"
                        onChange={handleOccupationToggle}
                        checked={isEmployed} // Check based on state
                      />
                    </div>
                    <span className="ms-3">Employed</span>
                  </div>
                </div>

                {/* Additional Input Fields for Employed */}
                <div
                  id="employedFields"
                  style={{ display: isEmployed ? "block" : "none" }}
                >
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="experienceInput"
                      placeholder="Years of Experience"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="jobTitleInput"
                      placeholder="Your Job Title"
                    />
                  </div>
                </div>

                {/* Additional Input Fields for Student */}
                <div
                  id="studentFields"
                  style={{ display: isEmployed ? "none" : "block" }}
                >
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="schoolInput"
                      placeholder="School/University Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="degreeInput"
                      placeholder="Degree Program"
                    />
                  </div>

                  {/* Inline Radio Buttons */}
                  <div className="mb-3">
                    <label className="form-label me-3">Dream company :</label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Accenture
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Google
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="option3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio3"
                      >
                        Microsoft
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio4"
                        value="oracle"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio4"
                      >
                        Oracle
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio5"
                        value="ibm"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio5"
                      >
                        IBM
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadioOther"
                        value="other"
                        onChange={handleOtherChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadioOther"
                      >
                        Other
                      </label>
                    </div>
                  </div>

                  {/* Input for Other Company */}
                  {otherCompanyInputVisible && (
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="otherCompanyInput"
                        placeholder="Please specify"
                      />
                    </div>
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Send Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
