import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CareerpathMain from "./CareerpathMain";
import Questions from "./Questions";
import CareerPath from "./CareerPath";

export default function Blogs() {
  return (
    <>
      <div className="blogs-section pb-5 mt-2">
        <div className="container">
          <div className="blogs-section-tittle mb-5">
            <h1 className="text-center mb-3 ">
              Our <span>Blog</span>
            </h1>
            <p className="text-center">
              We enable organizations from startups to large enterprises to make
              their work environment more efficient.
            </p>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-8">
              <div className="page-blog-info">
                <h1 className="mb-2">
                  <span>Mobile App </span>Development
                </h1>
                <h5 className="mb-4">
                  Creating Beautiful User Interfaces with Flutter
                </h5>
                <p className="mb-4">
                  Flutter by Google is an open-source framework for building
                  multi-platform applications from one codebase. You can use one
                  programming language to code in Flutter, which is Dart.
                  Flutter is simple and efficient to use for its consumers, and
                  its properties and functions are easy to understand.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="#">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">April 7, 2023</h6>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.3 }}
              className="col-lg-4 text-center"
            >
              <div className="blog-img">
                <img
                  src="./assets/blogs/blog1.png"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </motion.div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-4 order-lg-1 order-2 text-center">
              <motion.div
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.3 }}
                className="blog-img"
              >
                <img
                  src="./assets/blogs/blog2.png"
                  alt=""
                  className="img-fluid"
                />
              </motion.div>
            </div>

            <div className="col-lg-8 order-lg-2 order-1">
              <div className="page-blog-info">
                <h1 className="mb-2">
                  <span>Digital</span> Marketing
                </h1>
                <h5 className="mb-4">
                  Not sure how to find the right SEO company?
                </h5>
                <p className="mb-4">
                  Finding a trustworthy SEO company is a daunting task. There
                  are so many SEO agencies out there and all claim to be the
                  best. But by keeping a few pointers in mind you can choose a
                  great SEO company.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/digitalblog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">April 7, 2023</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-8">
              <div className="page-blog-info">
                <h1 className="mb-2">
                  <span>Website</span> development
                </h1>
                <h5 className="mb-4">
                  Overview of the important steps of web development
                </h5>
                <p className="mb-4">
                  You surely want your website to create waves in this fiercely
                  competitive online world. For this, you need to choose a web
                  development company that follows the web development process
                  in the best possible.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5  align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/webdevblog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">April 7, 2023</h6>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1.3 }}
              className="col-lg-4 text-center"
            >
              <div className="blog-img">
                <img src="./assets/blogs/blog3.png" alt="" />
              </div>
            </motion.div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-4 order-lg-1 order-2 text-center">
              <motion.div
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.3 }}
                className="blog-img"
              >
                <img
                  src="./assets/blogs/blog4.png"
                  alt=""
                  className="img-fluid"
                />
              </motion.div>
            </div>

            <div className="col-lg-8 order-lg-2 order-1">
              <div className="page-blog-info">
                <h1 className="mb-2">
                  <span>Virtual</span> Assistant
                </h1>
                <h5 className="mb-4">
                  Cloud Services refer to a range of services delivered over the
                  internet
                </h5>
                <p className="mb-4">
                  Cloud Services refer to a range of services delivered over the
                  internet, allowing users to store, manage, and process data on
                  remote servers rather than local hardware.
                </p>
              </div>

              <div className="blog-btn-date d-flex gap-5 align-items-center mt-4">
                <div className="blog-btn">
                  <Link to="/virtualassblog">View More</Link>
                </div>

                <div className="date-icon d-flex align-items-center">
                  <i className="fa-solid fa-calendar-days me-2"></i>
                  <h6 className="mb-0">April 7, 2023</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CareerPath />
      {/* <CareerpathMain/> */}
      <Questions />
    </>
  );
}
