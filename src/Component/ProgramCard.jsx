// import React from "react";
// import { Link } from "react-router-dom";

// export default function ProgramCard() {
//   return (
//     <>
//       <div className="program-card-section">
//         <div className="container">
//           {/* Row with cards */}
//           <div className="row">
//             {/* First Card */}
//             <div className="col-lg-6 d-flex justify-content-center align-items-center mb-4">
//               <div className="main-program-card position-relative">
//                 <div className="main-program-card-tittle position-relative">
//                   <div className="main-program-card-tittle-img">
//                     <img src="./assets/programcard/card-tittle.webp" alt="" />
//                   </div>
//                   <div className="main-program-card-tittle-icon">
//                     <img src="./assets/programcard/tittle-icon1.svg" alt="" />
//                   </div>
//                 </div>
//                 <div className="main-program-card-body p-3">
//                   <div className="card-name">
//                     <h4 className="m-0">Full Stack Development</h4>
//                   </div>
//                   <hr />
//                   <div className="main-program-card-body-info">
//                     <h6 className="mb-2">Program Highlights</h6>
//                     <ul>
//                       <li>Front End: HTML, CSS, JavaScript</li>
//                       <li>Back End: Nodejs, Python</li>
//                       <li>Databases: SQL, NoSQL(MySQL, MongoDB)</li>
//                       <li>APIs</li>
//                       <li>Deployment: AWS, Docker</li>
//                       <li>Live Projects</li>
//                     </ul>
//                   </div>
//                   <hr />
//                   <div className="main-program-card-footer d-flex justify-content-between align-items-center">
//                     <div className="main-program-card-footer-icon">
//                       <p className="mb-2">Instructor from</p>
//                       <div className="footer-icons">
//                         <img src="./assets/programcard/facebook.svg" alt="" />
//                         <img src="./assets/programcard/microsoft.svg" alt="" />
//                         <img src="./assets/programcard/apple.svg" alt="" />
//                         <img src="./assets/programcard/google.svg" alt="" />
//                       </div>
//                     </div>
//                     <div className="main-program-card-footer-btn">
//                       <Link to="/fullstackdevelopment">
//                         Learn More <span className="ms-2"><i className="fa-solid fa-chevron-right"></i></span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-icon">
//                   <img src="./assets/programcard/bg-icon-one.svg" alt="" />
//                 </div>
//               </div>
//             </div>

//             {/* Second Card */}
//             <div className="col-lg-6 d-flex justify-content-center align-items-center mb-4">
//               <div className="main-program-card position-relative">
//                 <div className="main-program-card-tittle position-relative">
//                   <div className="main-program-card-tittle-img">
//                     <img src="./assets/programcard/card-tittle.webp" alt="" />
//                   </div>
//                   <div className="main-program-card-tittle-icon">
//                     <img src="./assets/programcard/tittle-icon2.svg" alt="" />
//                   </div>
//                 </div>
//                 <div className="main-program-card-body p-3">
//                   <div className="card-name">
//                     <h4 className="m-0">Digital Marketer</h4>
//                   </div>
//                   <hr />
//                   <div className="main-program-card-body-info">
//                     <h6 className="mb-2">Program Highlights</h6>
//                     <ul>
//                       <li>Search Engine Optimization</li>
//                       <li>Social Media</li>
//                       <li>Content Marketing</li>
//                       <li>PPC Advertising</li>
//                       <li>Analytics</li>
//                       <li>Live Projects</li>
//                     </ul>
//                   </div>
//                   <hr />
//                   <div className="main-program-card-footer d-flex justify-content-between align-items-center">
//                     <div className="main-program-card-footer-icon">
//                       <p className="mb-2">Instructor from</p>
//                       <div className="footer-icons">
//                         <img src="./assets/programcard/facebook.svg" alt="" />
//                         <img src="./assets/programcard/microsoft.svg" alt="" />
//                         <img src="./assets/programcard/apple.svg" alt="" />
//                         <img src="./assets/programcard/google.svg" alt="" />
//                       </div>
//                     </div>
//                     <div className="main-program-card-footer-btn">
//                       <Link to="/digitalmarketingdevelopment">
//                         Learn More <span className="ms-2"><i className="fa-solid fa-chevron-right"></i></span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="bg-icon">
//                   <img src="./assets/programcard/bg-icon-two.svg" alt="" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";

export default function ProgramCard() {
  // Card data array
  const cardData = [
    {
      id: 1,
      title: "Full Stack Development",
      highlights: [
        "Front End: HTML, CSS, JavaScript",
        "Back End: Nodejs, Python",
        "Databases: SQL, NoSQL(MySQL, MongoDB)",
        "APIs",
        "Deployment: AWS, Docker",
        "Live Projects",
      ],
      instructors: ["facebook", "microsoft", "apple", "google"],
      link: "/fullstackdevelopment",
      icon: "./assets/programcard/tittle-icon1.svg",
      bgIcon: "./assets/programcard/bg-icon-one.svg",
    },
    {
      id: 2,
      title: "Digital Marketer",
      highlights: [
        "Search Engine Optimization",
        "Social Media",
        "Content Marketing",
        "PPC Advertising",
        "Analytics",
        "Live Projects",
      ],
      instructors: ["facebook", "microsoft", "apple", "google"],
      link: "/digitalmarketingdevelopment",
      icon: "./assets/programcard/tittle-icon2.svg",
      bgIcon: "./assets/programcard/bg-icon-two.svg",
    },
  ];

  return (
    <div className="program-card-section">
      <div className="container">
        {/* Row with cards */}
        <div className="row">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="col-lg-6 d-flex justify-content-center align-items-center mb-4"
            >
              <div className="main-program-card position-relative">
                <div className="main-program-card-tittle position-relative">
                  <div className="main-program-card-tittle-img">
                    <img src="./assets/programcard/card-tittle.webp" alt="" />
                  </div>
                  <div className="main-program-card-tittle-icon">
                    <img src={card.icon} alt="" />
                  </div>
                </div>
                <div className="main-program-card-body p-3">
                  <div className="card-name">
                    <h4 className="m-0">{card.title}</h4>
                  </div>
                  <hr />
                  <div className="main-program-card-body-info">
                    <h6 className="mb-2">Program Highlights</h6>
                    <ul>
                      {card.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                  <div className="main-program-card-footer d-flex justify-content-between align-items-center">
                    <div className="main-program-card-footer-icon">
                      <p className="mb-2">Instructor from</p>
                      <div className="footer-icons">
                        {card.instructors.map((instructor, index) => (
                          <img
                            key={index}
                            src={`./assets/programcard/${instructor}.svg`}
                            alt={instructor}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="main-program-card-footer-btn">
                      <Link to={card.link}>
                        Learn More{" "}
                        <span className="ms-2">
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-icon">
                  <img src={card.bgIcon} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
