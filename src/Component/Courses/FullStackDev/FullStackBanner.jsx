

// import React, { useState } from "react";

// export default function FullStackBanner() {
//   const [formData, setFormData] = useState({
//     program: "",
//     name: "",
//     email: "",
//     number: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

//     // Check if fields are filled
//     for (const field in formData) {
//       if (!formData[field]) {
//         newErrors[field] = `${field} is required`;
//       }
//     }

//     // Email validation
//     if (formData.email && !emailRegex.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0; // Return true if no errors
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     if (validateForm()) {
//       // Proceed with form submission (e.g., send to API)
//       console.log("Form submitted successfully:", formData);
//       // Clear form after successful submission
//       setFormData({ program: "", name: "", email: "", number: "" });
//       setErrors({});
//     }
//   };

//   return (
//     <>
//       <div className="fullstackdev-banner-section position-relative">
//         <div className="fullstackdev-banner-bg">
//           <img src="./assets/banner/banner-bg.png" alt="" />
//         </div>

//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-7 mb-5">
//               <div className="fullstackdev-banner-info">
//                 <h1>Learn like you would at India’sTop tech companies</h1>
//                 <div className="line-img mb-4">
//                   <img src="./assets/banner/line-img.png" alt="" />
//                 </div>
//                 <h6>
//                   Work-experience based learning programs to land your dream tech job
//                 </h6>
//                 <div className="para-info mt-4">
//                   <p className="mb-3">
//                     <strong>Build </strong>professional projects like the top 1% tech professionals.
//                   </p>
//                   <p className="mb-3">
//                     <strong>Master</strong> the latest Fullstack/Backend/Automation tech with real work-ex.
//                   </p>
//                   <p className="mb-3">
//                     <strong>Crack</strong> your dream role at the best tech companies
//                   </p>
//                 </div>

//                 <div className="fullstackdev-banner-number mt-5">
//                   <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-5 g-3 g-lg-5 justify-content-center">
//                     <div className="col col1">
//                       <div className="main-count text-center">
//                         <h3>95%</h3>
//                         <p>placed within 9 months of graduation</p>
//                       </div>
//                     </div>
//                     <div className="col col1">
//                       <div className="main-count text-center">
//                         <h3>10 LPA</h3>
//                         <p>average dream job CTC</p>
//                       </div>
//                     </div>
//                     <div className="col col1">
//                       <div className="main-count text-center">
//                         <h3>21 LPA</h3>
//                         <p>average super-dream job CTC</p>
//                       </div>
//                     </div>
//                     <div className="col col1">
//                       <div className="main-count text-center">
//                         <h3>1000+</h3>
//                         <p>Hiring Partners</p>
//                       </div>
//                     </div>
//                     <div className="col">
//                       <div className="main-count text-center">
//                         <h3>60%</h3>
//                         <p>Average Salary Hike</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-5 text-end">
//               <div className="fullstackdev-banner-form">
//                 <h4 className="text-center">
//                   Book a Live Class, <span>For Free!</span>
//                 </h4>

//                 <div className="main-fullstackdev-banner-form mt-4">
//                   <form onSubmit={handleSubmit}>
//                     <div className="row g-4">
//                       {/* Program Interested */}
//                       <div className="col-12">
//                         <input
//                           type="text"
//                           name="program"
//                           className="form-control"
//                           id="program"
//                           placeholder="Program interested"
//                           value={formData.program}
//                           onChange={handleChange}
//                         />
//                         {errors.program && <small className="text-danger">{errors.program}</small>}
//                       </div>

//                       {/* Name */}
//                       <div className="col-12">
//                         <input
//                           type="text"
//                           name="name"
//                           className="form-control"
//                           id="name"
//                           placeholder="Name"
//                           value={formData.name}
//                           onChange={handleChange}
//                         />
//                         {errors.name && <small className="text-danger">{errors.name}</small>}
//                       </div>

//                       {/* Email */}
//                       <div className="col-12">
//                         <input
//                           type="email"
//                           name="email"
//                           className="form-control"
//                           id="email"
//                           placeholder="Email"
//                           value={formData.email}
//                           onChange={handleChange}
//                         />
//                         {errors.email && <small className="text-danger">{errors.email}</small>}
//                       </div>

//                       {/* Number */}
//                       <div className="col-12">
//                         <input
//                           type="tel"
//                           name="number"
//                           className="form-control"
//                           id="number"
//                           placeholder="Number"
//                           value={formData.number}
//                           onChange={handleChange}
//                         />
//                         {errors.number && <small className="text-danger">{errors.number}</small>}
//                       </div>

//                       {/* Submit Button */}
//                       <div className="col-12 text-center mt-5">
//                         <div className="fullstackdev-banner-btn">
//                           <button type="submit" className="w-100">
//                             Book Your Trial
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="fullstackdev-banner-side-color">
//           <img src="./assets/banner/side-color.png" alt="" />
//         </div>
//         <div className="fullstackdev-banner-side-color2">
//           <img src="./assets/banner/side-color2.png" alt="" />
//         </div>
//       </div>
//     </>
//   );
// }






import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

export default function FullStackBanner() {
  const [formData, setFormData] = useState({
    program: "",
    name: "",
    email: "",
    number: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      // Use EmailJS to send the form data
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
        .then(
          (response) => {
            console.log("Email sent successfully:", response.status, response.text);
            // Clear form after successful submission
            setFormData({ program: "", name: "", email: "", number: "" });
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
      <div className="fullstackdev-banner-section position-relative">
        <div className="fullstackdev-banner-bg">
          <img src="./assets/banner/banner-bg.png" alt="" />
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5">
              <div className="fullstackdev-banner-info">
                <h1>Learn like you would at India’sTop tech companies</h1>
                <div className="line-img mb-4">
                  <img src="./assets/banner/line-img.png" alt="" />
                </div>
                <h6>
                  Work-experience based learning programs to land your dream tech job
                </h6>
                <div className="para-info mt-4">
                  <p className="mb-3">
                    <strong>Build </strong>professional projects like the top 1% tech professionals.
                  </p>
                  <p className="mb-3">
                    <strong>Master</strong> the latest Fullstack/Backend/Automation tech with real work-ex.
                  </p>
                  <p className="mb-3">
                    <strong>Crack</strong> your dream role at the best tech companies
                  </p>
                </div>

                <div className="fullstackdev-banner-number mt-5">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 row-cols-xxl-5 g-3 g-lg-5 justify-content-center">
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>95%</h3>
                        <p>placed within 9 months of graduation</p>
                      </div>
                    </div>
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>10 LPA</h3>
                        <p>average dream job CTC</p>
                      </div>
                    </div>
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>21 LPA</h3>
                        <p>average super-dream job CTC</p>
                      </div>
                    </div>
                    <div className="col col1">
                      <div className="main-count text-center">
                        <h3>1000+</h3>
                        <p>Hiring Partners</p>
                      </div>
                    </div>
                    <div className="col">
                      <div className="main-count text-center">
                        <h3>60%</h3>
                        <p>Average Salary Hike</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 text-end">
              <div className="fullstackdev-banner-form">
                <h4 className="text-center">
                  Book a Live Class, <span>For Free!</span>
                </h4>

                <div className="main-fullstackdev-banner-form mt-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      {/* Program Interested */}
                      <div className="col-12">
                        <input
                          type="text"
                          name="program"
                          className="form-control"
                          id="program"
                          placeholder="Program interested"
                          value={formData.program}
                          onChange={handleChange}
                        />
                        {errors.program && <small className="text-danger">{errors.program}</small>}
                      </div>

                      {/* Name */}
                      <div className="col-12">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                      </div>

                      {/* Email */}
                      <div className="col-12">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                      </div>

                      {/* Number */}
                      <div className="col-12">
                        <input
                          type="tel"
                          name="number"
                          className="form-control"
                          id="number"
                          placeholder="Number"
                          value={formData.number}
                          onChange={handleChange}
                        />
                        {errors.number && <small className="text-danger">{errors.number}</small>}
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

        <div className="fullstackdev-banner-side-color">
          <img src="./assets/banner/side-color.png" alt="" />
        </div>
        <div className="fullstackdev-banner-side-color2">
          <img src="./assets/banner/side-color2.png" alt="" />
        </div>
      </div>
    </>
  );
}
