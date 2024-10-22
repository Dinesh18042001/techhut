// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import Apply from "./Modals/Apply";

// export default function Header() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const nav = document.querySelector(".navbar");
//       if (document.documentElement.scrollTop > 20) {
//         nav.classList.add("header-scrolled");
//       } else {
//         nav.classList.remove("header-scrolled");
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       {/* Main Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light">
//         <div className="container">
//           <div className="logo">
//             <Link to="/">
//               <img src="./assets/img/logo.png" alt="Logo" />
//             </Link>
//           </div>

//           {/* Mobile toggle button */}
//           <a
//             data-bs-toggle="offcanvas"
//             href="#offcanvasNavbar"
//             role="button"
//             aria-controls="offcanvasNavbar"
//             className="d-lg-none"
//           >
            
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="40"
//               height="40"
//               fill="currentColor"
//               class="bi bi-list"
//               viewBox="0 0 16 16"
//             >
//               <path
//                 fill-rule="evenodd"
//                 fill="#000"
//                 d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
//               />
//             </svg>
//           </a>

//           {/* Main navigation links */}
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">
//                   <i class="fa-solid fa-house"></i>
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   to="/mentors"
//                 >
//                   Mentors
//                 </Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <Link
//                   className="nav-link dropdown-toggle"
//                   to="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Courses
//                 </Link>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <Link className="dropdown-item" to="/fullstackdevelopment">
//                       full stack development
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       className="dropdown-item"
//                       to="/digitalmarketingdevelopment"
//                     >
//                       Digital Marketing
//                     </Link>
//                   </li>
//                 </ul>
//               </li>

//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Features
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">
//                   Placements
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link active"
//                   aria-current="page"
//                   to="/blogs"
//                 >
//                   Blog
//                 </Link>
//               </li>
//             </ul>

//             {/* <div className="callbtn main-btn">
//               <a href="#">Enquiry Now</a>
//             </div> */}
//             {/* Contact Us button to trigger the modal */}
//             <div className="callbtn main-btn2">
//               <a href="#" data-bs-toggle="modal" data-bs-target="#applyModal">
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Off-canvas for Mobile Navigation */}
//       <div
//         className="offcanvas offcanvas-end"
//         tabIndex="-1"
//         id="offcanvasNavbar"
//         aria-labelledby="offcanvasNavbarLabel"
//       >
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
//             <img src="./assets/img/logo.png" alt="Logo" width="100" />
//           </h5>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link" id="toggle-tab" to="/">
//                 Home
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" id="toggle-tab" to="/mentors">
//                 Mentors
//               </Link>
//             </li>
//             <li className="nav-item dropdown">
//               <Link
//                 className="nav-link dropdown-toggle"
//                 to="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Courses
//               </Link>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li>
//                   <Link className="dropdown-item" id="toggle-tab" to="/fullstackdevelopment">
//                     full stack development
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="dropdown-item"
//                     to="/digitalmarketingdevelopment"
//                     id="toggle-tab"
//                   >
//                     Digital Marketer
//                   </Link>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="#career" id="toggle-tab">
//                 Features
//               </Link>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" id="toggle-tab">
//                 Placements
//               </a>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/blogs" id="toggle-tab">
//                 Blog
//               </Link>
//             </li>
//           </ul>
//           {/* Adding the Contact Us button in off-canvas too */}
//           <div className="d-flex gap-3 mt-4">
//             {/* <div className="nav-btn">
//               <a href="#">Enquiry Now</a>
//             </div> */}
//             <div className="nav-btn">
//               <a href="#" data-bs-toggle="modal" data-bs-target="#applyModal">
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Apply Modal */}
//       <Apply />
//     </>
//   );
// }






import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Apply from "./Modals/Apply";
import { Offcanvas } from "bootstrap"; 

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
      } else {
        nav.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    const offcanvas = new Offcanvas(offcanvasElement);

    // Close the off-canvas when any of the links are clicked
    const toggleLinks = document.querySelectorAll("#toggle-tab");
    toggleLinks.forEach((link) => {
      link.addEventListener("click", () => {
        offcanvas.hide();
      });
    });

    // Remove the offcanvas-backdrop when off-canvas is hidden
    const handleBackdropRemoval = () => {
      const backdrop = document.querySelector(".offcanvas-backdrop");
      if (backdrop) {
        backdrop.classList.remove("show");
        backdrop.remove(); // Completely remove the backdrop element
      }
    };

    // Listen for the off-canvas to be hidden and remove the backdrop
    offcanvasElement.addEventListener("hidden.bs.offcanvas", handleBackdropRemoval);

    // Cleanup event listeners on unmount
    return () => {
      toggleLinks.forEach((link) => {
        link.removeEventListener("click", () => offcanvas.hide());
      });
      offcanvasElement.removeEventListener("hidden.bs.offcanvas", handleBackdropRemoval);
    };
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="./assets/img/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Mobile toggle button */}
          <a
            data-bs-toggle="offcanvas"
            href="#offcanvasNavbar"
            role="button"
            aria-controls="offcanvasNavbar"
            className="d-lg-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                fill="#000"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </a>

          {/* Main navigation links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/mentors"
                >
                  Mentors
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/fullstackdevelopment">
                      full stack development
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/digitalmarketingdevelopment"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Placements
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/blogs"
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* Contact Us button */}
            <div className="callbtn main-btn2">
              <a href="#" data-bs-toggle="modal" data-bs-target="#applyModal">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Off-canvas for Mobile Navigation */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            <img src="./assets/img/logo.png" alt="Logo" width="100" />
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" id="toggle-tab" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" id="toggle-tab" to="/mentors">
                Mentors
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    className="dropdown-item"
                    id="toggle-tab"
                    to="/fullstackdevelopment"
                  >
                    full stack development
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/digitalmarketingdevelopment"
                    id="toggle-tab"
                  >
                    Digital Marketer
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#career" id="toggle-tab">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" id="toggle-tab">
                Placements
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs" id="toggle-tab">
                Blog
              </Link>
            </li>
          </ul>
          {/* Adding the Contact Us button in off-canvas too */}
          <div className="d-flex gap-3 mt-4">
            <div className="nav-btn">
              <a href="#" data-bs-toggle="modal" id="toggle-tab" data-bs-target="#applyModal">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      <Apply />
    </>
  );
}

