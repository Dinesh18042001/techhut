import React, { useEffect, useState } from "react";
import $ from 'jquery';
import 'jquery-validation';

export default function Apply() {
  const [selectedTopics, setSelectedTopics] = useState("");
  const [selectedUserTypes, setSelectedUserTypes] = useState("");
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    graduationYear: '',
    dreamCompany: '',
    message: ''
  });

  const handleTopicChange = (event) => {
    setSelectedTopics(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setSelectedUserTypes(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData, selectedTopics, selectedUserTypes);
  };

  useEffect(() => {
    // jQuery validation setup
    $("#applyForm").validate({
      rules: {
        fullName: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          minlength: 10,
          maxlength: 15,
        },
        college: {
          required: true,
        },
        graduationYear: {
          required: true,
        },
        message: {
          required: true,
        },
        topic: {
          required: true,
        },
        userType: {
          required: true,
        },
      },
      messages: {
        fullName: "Please enter your full name.",
        email: "Please enter a valid email address.",
        phone: {
          required: "Please enter your phone number.",
          minlength: "Your phone number must be at least 10 digits long.",
          maxlength: "Your phone number cannot exceed 15 digits."
        },
        college: "Please enter your college name.",
        graduationYear: "Please select your graduation year.",
        message: "Please enter a message.",
        topic: "Please select a topic of interest.",
        userType: "Please select your user type.",
      },
      errorPlacement: function(error, element) {
        // Customize error placement for radio buttons
        if (element.attr("name") === "topic" || element.attr("name") === "userType") {
          error.appendTo(element.closest('.modal-body-info')); // Append error to a specific container
        } else {
          error.insertAfter(element);
        }
      },
      submitHandler: function (form) {
        // You can add your form submission logic here
        handleSubmit();
      }
    });
  }, []); // Run the effect once on mount

  return (
    <>
      <div
        className="modal fade"
        id="applyModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title" id="exampleModalLabel">
                  Apply now
                </h5>
                <p>Next Batch Starts in November</p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="modal-body-info">
                <form id="applyForm">
                  <div className="modal-body-qus mb-3">
                    <h6>Your Topic of interest? <span>*</span></h6>
                  </div>
                  <div className="row">
                    {["Software Development", "Data Science & ML", "Data Analytics", "Data Engineer"].map((topic, index) => (
                      <div className="col-lg-3 mb-3" key={index}>
                        <div className="main-check-box">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              value={topic.toLowerCase().replace(/\s+/g, '-')}
                              id={`topic${index + 1}`}
                              onChange={handleTopicChange}
                              checked={selectedTopics === topic.toLowerCase().replace(/\s+/g, '-')}
                              name="topic"
                            />
                            <label className="form-check-label" htmlFor={`topic${index + 1}`}>
                              {topic}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="modal-body-qus mb-3">
                    <h6>Are you a College Student, Working Professional, or Graduated but not working? <span>*</span></h6>
                  </div>
                  <div className="row">
                    {["College Student", "Working Professional", "Graduated but not working"].map((userType, index) => (
                      <div className="col-lg-3 mb-3" key={index}>
                        <div className="main-check-box">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              value={userType.toLowerCase().replace(/\s+/g, '-')}
                              id={`userType${index + 1}`}
                              onChange={handleUserTypeChange}
                              checked={selectedUserTypes === userType.toLowerCase().replace(/\s+/g, '-')}
                              name="userType"
                            />
                            <label className="form-check-label" htmlFor={`userType${index + 1}`}>
                              {userType}
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="row form-main mb-3 mt-4 ">
                    <div className="col-lg-6 col-md-6 mb-3">
                      <label htmlFor="fullName" className="form-label">Candidate Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        placeholder="Candidate Full Name *"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email id *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email id *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <label htmlFor="college" className="form-label">College Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="college"
                        name="college"
                        placeholder="College Name *"
                        value={formData.college}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <label htmlFor="graduationYear" className="form-label">Graduation Year *</label>
                      <select
                        className="form-select"
                        id="graduationYear"
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Graduation Year *</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                      </select>
                    </div>

                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Enter your message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Enter your message *"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
   
                  <button type="submit" className="btn btn-primary">Apply</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

