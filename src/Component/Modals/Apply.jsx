// import React, { useEffect, useState } from "react";
// import $ from "jquery";
// import "jquery-validation";
// import emailjs from "emailjs-com";

// export default function Apply() {
//   const [selectedTopics, setSelectedTopics] = useState("");
//   const [selectedUserTypes, setSelectedUserTypes] = useState("");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     college: "",
//     graduationYear: "",
//     yearsOfExperience: "",
//     message: "",
//   });

//   const handleTopicChange = (event) => {
//     setSelectedTopics(event.target.value);
//   };

//   const handleUserTypeChange = (event) => {
//     setSelectedUserTypes(event.target.value);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const serviceID = "service_9s92x4i"; // Replace with your Service ID
//     const templateID = "template_c6we96l"; // Replace with your Template ID
//     const userID = "KNsLv0bXGuvjHgNvn"; // Replace with your User ID

//     // Generate the subject dynamically
//     const subject = `New Application Submission from ${formData.fullName}`;

//     // Template parameters including optional message
//     const templateParams = {
//       fullName: formData.fullName,
//       email: formData.email,
//       phone: formData.phone,
//       college: formData.college,
//       graduationYear: formData.graduationYear,
//       yearsOfExperience: formData.yearsOfExperience,
//       message: formData.message || "No additional message provided.",
//       subject: subject,
//     };

//     // Send the email using emailjs
//     emailjs
//       .send(serviceID, templateID, templateParams, userID)
//       .then((response) => {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("Form submitted successfully!");
        
//         // Reset form fields
//         setFormData({
//           fullName: "",
//           email: "",
//           phone: "",
//           college: "",
//           yearsOfExperience: "",
//           message: "",
//         });
//         setSelectedTopics("");
//         setSelectedUserTypes("");
//       })
//       .catch((err) => {
//         console.error("FAILED...", err);
//         alert("Failed to send form. Please try again.");
//       });
//   };

//   useEffect(() => {
//     $("#applyForm").validate({
//       rules: {
//         fullName: { required: true },
//         email: { required: true, email: true },
//         phone: { required: true, minlength: 10, maxlength: 15 },
//         college: { required: true },
//         message: { required: true },
//         topic: { required: true },
//         userType: { required: true },
//       },
//       messages: {
//         fullName: "Please enter your full name.",
//         email: "Please enter a valid email address.",
//         phone: {
//           required: "Please enter your phone number.",
//           minlength: "Your phone number must be at least 10 digits long.",
//           maxlength: "Your phone number cannot exceed 15 digits.",
//         },
//         college: "Please enter your college name.",
//         message: "Please enter a message.", // Optional, no validation
//         topic: "Please select a topic of interest.",
//         userType: "Please select your user type.",
//       },
//       errorPlacement: function (error, element) {
//         // Prevent showing the error message
//         return true;
//       },
//       highlight: function (element) {
//         // Add the 'is-invalid' class to turn the input red
//         $(element).addClass("is-invalid");
//       },
//       unhighlight: function (element) {
//         // Remove the 'is-invalid' class when the field is valid
//         $(element).removeClass("is-invalid");
//       },
//       submitHandler: function () {
//         handleSubmit();
//       },
//     });
//   }, []);

//   return (
//     <>
//       <div
//         className="modal fade"
//         id="applyModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <div>
//                 <h5 className="modal-title" id="exampleModalLabel">
//                   Apply now
//                 </h5>
//                 <p>Next Batch Starts in November</p>
//               </div>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <div className="modal-body-info">
//                 <form id="applyForm" onSubmit={handleSubmit}>
//                   <div className="row form-main mb-3 mt-4">
//                     <div className="col-lg-6 col-md-6 mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="fullName"
//                         name="fullName"
//                         placeholder="Full Name *"
//                         value={formData.fullName}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-lg-6 col-md-6 mb-3">
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email"
//                         placeholder="Email id *"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-lg-6 col-md-6 mb-3">
//                       <input
//                         type="tel"
//                         className="form-control"
//                         id="phone"
//                         name="phone"
//                         placeholder="Phone Number *"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

                 

//                     <div className="col-lg-6 col-md-6 mb-3">
//                       <select
//                         className="form-select"
//                         id="graduationYear"
//                         name="graduationYear"
//                         value={formData.graduationYear}
//                         onChange={handleChange}
//                         required
//                       >
//                        <option value="">Student *</option>
//                        <option value="entry">Working professional *</option>
//                       </select>
//                     </div>

//                     <div className="col-lg-6 col-md-6 mb-3">
//                       <input
//                         type="text"
//                         className="form-control"
//                         id="college"
//                         name="college"
//                         placeholder="College Name *"
//                         value={formData.college}
//                         onChange={handleChange}
//                         required
//                       />
//                     </div>

//                     <div className="col-lg-6 col-md-6 mb-3">
//                       <select
//                         className="form-control"
//                         id="yearsOfExperience"
//                         name="yearsOfExperience"
//                         value={formData.yearsOfExperience}
//                         onChange={handleChange}
//                         required
//                       >
//                         <option value="">Your Degree *</option>
//                         <option value="entry">B.Tech</option>
//                         <option value="entry">M.Tech</option>
//                         <option value="mid">BCA</option>
//                         <option value="senior">MCA</option>
//                       </select>
//                     </div>

//                     <div className="col-lg-12 mb-3">
//                       <textarea
//                         className="form-control"
//                         id="message"
//                         name="message"
//                         rows="3"
//                         placeholder="Your message *"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                       ></textarea>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <button type="submit" className="applymodel-btn">
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




import React, { useEffect, useState } from "react";
import $ from "jquery";
import "jquery-validation";
import emailjs from "emailjs-com";

export default function Apply() {
  const [selectedUserType, setSelectedUserType] = useState("Student");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    companyName: "",
    degree: "",
    graduationYear: "Student",
    yearsOfExperience: "",
    message: "",
  });

  const handleUserTypeChange = (event) => {
    const value = event.target.value;
    setSelectedUserType(value);
    setFormData((prev) => ({
      ...prev,
      graduationYear: value,
      college: "",
      companyName: "",
      degree: "",
      yearsOfExperience: "",
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceID = "service_9s92x4i"; // Replace with your Service ID
    const templateID = "template_c6we96l"; // Replace with your Template ID
    const userID = "KNsLv0bXGuvjHgNvn"; // Replace with your User ID

    const subject = `New Application Submission from ${formData.fullName}`;

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      college: formData.college || "N/A",
      companyName: formData.companyName || "N/A",
      degree: formData.degree || "N/A",
      graduationYear: formData.graduationYear,
      yearsOfExperience: formData.yearsOfExperience || "N/A",
      message: formData.message || "No additional message provided.",
      subject: subject,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Form submitted successfully!");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          college: "",
          companyName: "",
          degree: "",
          graduationYear: "Student",
          yearsOfExperience: "",
          message: "",
        });
        setSelectedUserType("Student");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send form. Please try again.");
      });
  };

  useEffect(() => {
    $("#applyForm").validate({
      rules: {
        fullName: { required: true },
        email: { required: true, email: true },
        phone: { required: true, minlength: 10, maxlength: 15 },
        college: { required: selectedUserType === "Student" },
        degree: { required: selectedUserType === "Student" },
        companyName: { required: selectedUserType === "Working professional" },
        yearsOfExperience: { required: selectedUserType === "Working professional" },
        message: { required: true },
      },
      messages: {
        fullName: "Please enter your full name.",
        email: "Please enter a valid email address.",
        phone: {
          required: "Please enter your phone number.",
          minlength: "Your phone number must be at least 10 digits long.",
          maxlength: "Your phone number cannot exceed 15 digits.",
        },
        college: "Please enter your college name.",
        degree: "Please enter your degree.",
        companyName: "Please enter your company name.",
        yearsOfExperience: "Please select your work experience.",
        message: "Please enter a message.",
      },
      errorPlacement: function (error, element) {
        return true; // Suppress error messages in the UI
      },
      highlight: function (element) {
        $(element).addClass("is-invalid");
      },
      unhighlight: function (element) {
        $(element).removeClass("is-invalid");
      },
      submitHandler: function () {
        handleSubmit();
      },
    });
  }, [selectedUserType]);

  return (
    <>
      <div
        className="modal fade"
        id="applyModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
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
                <form id="applyForm" onSubmit={handleSubmit}>
                  <div className="row form-main mb-3 mt-4">
                    <div className="col-lg-6 col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 mb-3">
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
                      <select
                        className="form-control"
                        id="graduationYear"
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleUserTypeChange}
                        required
                      >
                        <option value="Student">Student</option>
                        <option value="Working professional">Working Professional</option>
                      </select>
                    </div>

                    {selectedUserType === "Student" ? (
                      <>
                        <div className="col-lg-6 col-md-6 mb-3">
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
                          <input
                            type="text"
                            className="form-control"
                            id="degree"
                            name="degree"
                            placeholder="Your Degree *"
                            value={formData.degree}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-lg-6 col-md-6 mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="companyName"
                            name="companyName"
                            placeholder="Company Name *"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 mb-3">
                          <select
                            className="form-control"
                            id="yearsOfExperience"
                            name="yearsOfExperience"
                            value={formData.yearsOfExperience}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Work Experience *</option>
                            <option value="1 year">1 year</option>
                            <option value="2 years">2 years</option>
                            <option value="3 years">3 years</option>
                          </select>
                        </div>
                      </>
                    )}

                    <div className="col-lg-12 mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        placeholder="Your message *"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="applymodel-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
