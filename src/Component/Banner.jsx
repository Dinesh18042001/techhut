import React, { useState } from "react";
import Mentors from "./Mentors";
import Career from "./Career";
import Mentorship from "./Mentorship";
import Companies from "./Companies";
import AlumniSay from "./AlumniSay";
import Questions from "./Questions";
import Apply from "./Modals/Apply";
import CareerpathMain from "./CareerpathMain";

export default function Banner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Allow only numeric input for the phone number and restrict to 11 digits
    if (name === "number") {
      // Update state with only numeric values
      const numericValue = value.replace(/[^0-9]/g, "");
      if (numericValue.length <= 11) {
        // Restrict to 11 digits
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

    // Check if fields are filled
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = `${field} is required`;
      }
    }

    // Email validation
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Check if number has exactly 11 digits
    if (
      formData.number &&
      (formData.number.length < 10 || formData.number.length > 12)
    ) {
      newErrors.number = "Phone number must be between 10 and 12 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      // Use EmailJS to send the form data
      emailjs
        .send(
          "service_p1fhn9x",
          "template_d6z5t8h",
          formData,
          "AyJgE9CLYKvZNGnjP"
        )
        .then(
          (response) => {
            console.log(
              "Email sent successfully:",
              response.status,
              response.text
            );
            // Clear form after successful submission
            setFormData({ address: "", name: "", email: "", number: "" });
            setErrors({});
          },
          (error) => {
            console.error("Failed to send email:", error);
          }
        );
    }
  };

  return (
    <>
      <div className="baneer-section position-relative">
        <div className="banner-main-box position-relative">
          <div className="banner-img">
            <img src="./assets/banner/banner-bg.png" alt="" />
          </div>

          <div className="banner-info">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h2>Turn your Passion into a New Career Path</h2>
                  {/* <img src="./assets/banner/line-img.png" alt="" /> */}

                  <div className="row mt-5">
                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-medal"></i>
                        </span>
                        <h6 className="ms-2">
                          Team up with mentors from top MNCs.
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-microscope icon2"></i>
                        </span>
                        <h6 className="ms-2">
                          Experience HR workshops and mock tests.
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-chalkboard-user icon3"></i>
                        </span>
                        <h6 className="ms-2">
                          Get full job placement support for one year.
                        </h6>
                      </div>
                    </div>

                    <div className="col-md-6 col-12 mb-4">
                      <div className="banner-icon-box d-flex justify-content-center align-items-center">
                        <span>
                          <i className="fa-solid fa-address-card icon4"></i>
                        </span>
                        <h6 className="ms-2">
                          Boost your interview with tailored resume.
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="banner-btn d-flex flex-column flex-md-row flex-lg-row gap-4 mt-4 mb-5">
                    <div className="banner-btn-1">
                      {/* Trigger Modal with Join Now button */}
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#applyModal"
                      >
                        Download Syllabus{" "}
                        <i className="fa-solid fa-download me-2"></i>
                      </a>
                    </div>
                    {/* Commented out Download Syllabus button */}
                    {/* <div className="banner-btn-2">
                      <a href="#">
                        Download Syllabus{" "}
                        <i className="fa-solid fa-download"></i>
                      </a>
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-5 text-end">
                  <div className="fullstackdev-banner-form">
                    <h4 className="text-center">
                      Book a Live Class, <span>For Free!</span>
                    </h4>

                    <div className="main-fullstackdev-banner-form mt-4">
                      <form onSubmit={handleSubmit}>
                        <div className="row g-4">
                          {/* Name */}
                          <div className="col-12">
                            <input
                              type="text"
                              name="name"
                              className={`form-control ${
                                errors.name ? "is-invalid" : ""
                              }`}
                              id="name"
                              placeholder="Name"
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Email */}
                          <div className="col-12">
                            <input
                              type="email"
                              name="email"
                              className={`form-control ${
                                errors.email ? "is-invalid" : ""
                              }`}
                              id="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>

                          {/* Number */}
                          <div className="col-12">
                            <input
                              type="tel"
                              name="number"
                              className={`form-control ${
                                errors.number ? "is-invalid" : ""
                              }`}
                              id="number"
                              placeholder="Phone No"
                              value={formData.number}
                              onChange={handleChange} // Use the modified handleChange
                            />
                          </div>

                          {/* Address */}
                          <div className="col-12">
                            <select
                              name="workExperience"
                              className={`form-control home-select-input ${
                                errors.workExperience ? "is-invalid" : ""
                              }`}
                              id="workExperience"
                              value={formData.workExperience}
                              onChange={handleChange}
                            >
                              <option value="">Select Work Experience*</option>
                              <option value="entry">Student</option>
                              <option value="entry">
                                Entry Level (0-2 years)
                              </option>
                              <option value="mid">Mid Level (2-5 years)</option>
                              <option value="senior">
                                Senior Level (5+ years)
                              </option>
                            </select>
                          </div>

                          {/* Submit Button */}
                          <div className="col-12 text-center mt-5">
                            <div className="fullstackdev-banner-btn">
                              <button type="submit" className="w-100">
                                Book Your Trial
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="baneer-section-side-color">
          <img src="./assets/banner/side-color.png" alt="" />
        </div>
        <div className="baneer-section-side-color2">
          <img src="./assets/banner/side-color2.png" alt="" />
        </div>
      </div>
      <CareerpathMain/>

      <div id="mentors">
        <Mentors />
      </div>

      <div id="features">
        <Career />
      </div>

      <Mentorship />
      <div id="placements">
        <Companies />
      </div>

      <AlumniSay />
      <Questions />
      {/* Apply Modal */}
      <Apply />
    </>
  );
}
