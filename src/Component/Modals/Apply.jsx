import React, { useState } from "react";

export default function Apply() {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedUserTypes, setSelectedUserTypes] = useState([]);
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
    const value = event.target.value;
    setSelectedTopics((prev) =>
      prev.includes(value)
        ? prev.filter((topic) => topic !== value)
        : [...prev, value]
    );
  };

  const handleUserTypeChange = (event) => {
    const value = event.target.value;
    setSelectedUserTypes((prev) =>
      prev.includes(value)
        ? prev.filter((type) => type !== value)
        : [...prev, value]
    );
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

                <form onSubmit={handleSubmit}>
                  <div className="modal-body-qus mb-3">
                    <h6>
                      Your Topic of interest? <span>*</span>
                    </h6>
                  </div>
                  <div className="row">
                    {["Software Development", "Data Science & ML", "Data Analytics", "Data Engineer"].map((topic, index) => (
                      <div className="col-lg-3 mb-3" key={index}>
                        <div className="main-check-box">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={topic.toLowerCase().replace(/\s+/g, '-')}
                              id={`topic${index + 1}`}
                              onChange={handleTopicChange}
                              checked={selectedTopics.includes(topic.toLowerCase().replace(/\s+/g, '-'))}
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
                    <h6>
                      Are you a College Student or Working Professional or
                      Graduated but not working? <span>*</span>
                    </h6>
                  </div>
                  <div className="row">
                    {["College Student", "Working Professional", "Graduated but not working"].map((userType, index) => (
                      <div className="col-lg-3 mb-3" key={index}>
                        <div className="main-check-box">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value={userType.toLowerCase().replace(/\s+/g, '-')}
                              id={`userType${index + 1}`}
                              onChange={handleUserTypeChange}
                              checked={selectedUserTypes.includes(userType.toLowerCase().replace(/\s+/g, '-'))}
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
                      <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        placeholder="Candidate Full Name *"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email id *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="college"
                        placeholder="College Name *"
                        value={formData.college}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
                      <select
                        className="form-select"
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

                    {/* <div className="col-lg-6 col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="dreamCompany"
                        placeholder="Dream Company *"
                        value={formData.dreamCompany}
                        onChange={handleChange}
                        required
                      />
                    </div> */}
                  </div>

                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="Enter your message *"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="form-btn">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
