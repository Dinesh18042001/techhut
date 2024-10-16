import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Apply from "./Modals/Apply"; 

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
              version="1.1"
              width="40"
              height="40"
              viewBox="0 0 512 512"
              className=""
              style={{ enableBackground: "new 0 0 512 512" }}
            >
              <g>
                <path
                  d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"
                  fill="#000"
                  opacity="1"
                  className=""
                />
              </g>
            </svg>
          </a>

          {/* Main navigation links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
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
                    <Link className="dropdown-item" to="/fullstackdev">
                    full stack development
                    </Link>
                  </li>
                  {/* <li>
                    <Link className="dropdown-item" to="#">
                    Digital Marketer
                    </Link>
                  </li> */}
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

            {/* <div className="callbtn main-btn">
              <a href="#">Enquiry Now</a>
            </div> */}
            {/* Contact Us button to trigger the modal */}
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
              <a className="nav-link" href="#">
                Mentors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#career">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Placements
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blog
              </Link>
            </li>
          </ul>
          {/* Adding the Contact Us button in off-canvas too */}
          <div className="d-flex gap-3 mt-4">
            <div className="nav-btn">
              <a href="#">Enquiry Now</a>
            </div>
            <div className="nav-btn">
              <a href="#" data-bs-toggle="modal" data-bs-target="#applyModal">
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
