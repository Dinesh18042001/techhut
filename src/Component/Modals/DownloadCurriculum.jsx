import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function DownloadCurriculum() {
  const [isEmployed, setIsEmployed] = useState(true);
  const [otherCompanyInputVisible, setOtherCompanyInputVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    jobTitle: '',
    school: '',
    degree: '',
    dreamCompany: '',
    otherCompany: ''
  });
  const [errors, setErrors] = useState({});

  // Handle toggle switch for occupation
  const handleOccupationToggle = (event) => {
    setIsEmployed(event.target.checked);
  };

  // Handle visibility of the other company input
  const handleOtherChange = () => {
    setOtherCompanyInputVisible(true);
  };

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' }); // Clear error when user types
    }
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
    if (!formData.phone) newErrors.phone = 'Phone Number is required.';
    if (isEmployed) {
      if (!formData.experience) newErrors.experience = 'Years of Experience is required.';
      if (!formData.jobTitle) newErrors.jobTitle = 'Your Job Title is required.';
    } else {
      if (!formData.school) newErrors.school = 'School/University Name is required.';
      if (!formData.degree) newErrors.degree = 'Degree Program is required.';
      if (!formData.dreamCompany) newErrors.dreamCompany = 'Dream company is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
// Handle form submission
const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission
  if (validateForm()) {
    // Create an object for email data
    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      isEmployed: isEmployed,
      experience: formData.experience,
      jobTitle: formData.jobTitle,
      school: formData.school,
      degree: formData.degree,
      dreamCompany: formData.dreamCompany,
      otherCompany: formData.otherCompany,
    };

    // Send the email using EmailJS
    emailjs.send('service_p1fhn9x', 'template_eyn5rhs', emailData, 'AyJgE9CLYKvZNGnjP')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          experience: '',
          jobTitle: '',
          school: '',
          degree: '',
          dreamCompany: '',
          otherCompany: ''
        });
        setErrors({}); // Reset errors
        setOtherCompanyInputVisible(false); // Reset other company input visibility
        setIsEmployed(true); // Reset employment toggle
      }, (error) => {
        console.error('Email send error:', error);
      });
  }
};


  return (
    <div>
      {/* Modal Structure */}
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
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                {/* Phone Number */}
                <div className="mb-3">
                  <input
                    type="tel"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                </div>

                {/* Employment Status */}
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
                        checked={isEmployed}
                      />
                    </div>
                    <span className="ms-3">Employed</span>
                  </div>
                </div>

                {/* Input Fields for Employed */}
                {isEmployed && (
                  <>
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
                        name="experience"
                        placeholder="Years of Experience"
                        value={formData.experience}
                        onChange={handleChange}
                      />
                      {errors.experience && <div className="invalid-feedback">{errors.experience}</div>}
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${errors.jobTitle ? 'is-invalid' : ''}`}
                        name="jobTitle"
                        placeholder="Your Job Title"
                        value={formData.jobTitle}
                        onChange={handleChange}
                      />
                      {errors.jobTitle && <div className="invalid-feedback">{errors.jobTitle}</div>}
                    </div>
                  </>
                )}

                {/* Input Fields for Student */}
                {!isEmployed && (
                  <>
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${errors.school ? 'is-invalid' : ''}`}
                        name="school"
                        placeholder="School/University Name"
                        value={formData.school}
                        onChange={handleChange}
                      />
                      {errors.school && <div className="invalid-feedback">{errors.school}</div>}
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className={`form-control ${errors.degree ? 'is-invalid' : ''}`}
                        name="degree"
                        placeholder="Degree Program"
                        value={formData.degree}
                        onChange={handleChange}
                      />
                      {errors.degree && <div className="invalid-feedback">{errors.degree}</div>}
                    </div>

                    {/* Dream Company Selection */}
                    <div className="mb-3">
                      <label className="form-label me-3">Dream company:</label>
                      {['Accenture', 'Google', 'Microsoft', 'Oracle', 'IBM'].map((company, index) => (
                        <div className="form-check form-check-inline" key={index}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="dreamCompany"
                            value={company}
                            onChange={handleChange}
                          />
                          <label className="form-check-label">{company}</label>
                        </div>
                      ))}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="dreamCompany"
                          value="other"
                          onChange={handleOtherChange}
                        />
                        <label className="form-check-label">Other</label>
                      </div>
                      {otherCompanyInputVisible && (
                        <input
                          type="text"
                          className={`form-control ${errors.otherCompany ? 'is-invalid' : ''}`}
                          name="otherCompany"
                          placeholder="Other Company Name"
                          value={formData.otherCompany}
                          onChange={handleChange}
                        />
                      )}
                      {errors.otherCompany && <div className="invalid-feedback">{errors.otherCompany}</div>}
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">Download</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
