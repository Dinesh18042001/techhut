import React, { useState } from "react";
import DownloadCurriculum from "../../Modals/DownloadCurriculum";
export default function DigitalSolidEngineer() {
    const [activeModule, setActiveModule] = useState(1);

    const renderModuleInfo = () => {
      switch (activeModule) {
        case 1:
          return (
            <div className="month-info-card-info mt-4">
              <p>Programming Language Fundamentals</p>
              <ul className="mt-4">
                <li className="mb-2">
                  <p>Introduction to Java</p>
                </li>
                <li className="mb-2">
                  <p>Input Output and Data Types</p>
                </li>
                <li className="mb-2">
                  <p>Operators</p>
                </li>
                <li className="mb-2">
                  <p>Conditions</p>
                </li>
                <li className="mb-2">
                  <p>Loops</p>
                </li>
                <li className="mb-2">
                  <p>Pattern Problems</p>
                </li>
                <li className="mb-2">
                  <p>Functions</p>
                </li>
                <li className="mb-2">
                  <p>1D and 2D Arrays</p>
                </li>
                <li className="mb-2">
                  <p>Strings</p>
                </li>
                <li className="mb-2">
                  <p>Memory Management</p>
                </li>
                <li className="mb-4">
                  <p>Basic OOP for Problem Solving</p>
                </li>
              </ul>
            </div>
          );
        case 2:
          return (
            <div className="month-info-card-info mt-4">
              <p>Data Structures and Algorithms</p>
              <ul className="mt-4">
                <li className="mb-2">
                  <p> Arrays</p>
                </li>
                <li className="mb-2">
                  <p>Linked Lists</p>
                </li>
                <li className="mb-2">
                  <p>Stacks</p>
                </li>
                <li className="mb-2">
                  <p>Queues</p>
                </li>
                <li className="mb-2">
                  <p>Trees</p>
                </li>
                <li className="mb-2">
                  <p>Graphs</p>
                </li>
                <li className="mb-2">
                  <p>Hashing</p>
                </li>
                <li className="mb-2">
                  <p>Sorting Algorithms</p>
                </li>
                <li className="mb-2">
                  <p> Searching Algorithms</p>
                </li>
                <li className="mb-2">
                  <p>Recursion</p>
                </li>
                <li className="mb-4">
                  <p>Dynamic Programming</p>
                </li>
              </ul>
            </div>
          );
        case 3:
          return (
            <div className="month-info-card-info mt-4">
              <p>SQL/MongoDB</p>
              <ul className="mt-4">
                <li className="mb-2">
                  <p>Database Basics</p>
                </li>
                <li className="mb-2">
                  <p>Data Types in SQL</p>
                </li>
                <li className="mb-2">
                  <p>Basic SQL Queries</p>
                </li>
                <li className="mb-2">
                  <p>Joins</p>
                </li>
                <li className="mb-2">
                  <p>Aggregate Functions</p>
                </li>
                <li className="mb-2">
                  <p>Inserting and Modifying Data</p>
                </li>
                <li className="mb-2">
                  <p>Subqueries</p>
                </li>
                <li className="mb-2">
                  <p>Constraints and Indexing</p>
                </li>
                <li className="mb-2">
                  <p>Transactions and ACID Properties</p>
                </li>
                <li className="mb-2">
                  <p> SQL Views</p>
                </li>
                <li className="mb-4">
                  <p>MongoDB (NoSQL)</p>
                </li>
              </ul>
            </div>
          );
        case 4:
          return (
            <div className="month-info-card-info mt-4">
              <p>LLD and Project Specialisations</p>
              <ul className="mt-4">
                <li className="mb-2">
                  <p>Low-Level Design (LLD)</p>
                </li>
                <li className="mb-2">
                  <p>Object-Oriented Design (OOD) Principles</p>
                </li>
                <li className="mb-2">
                  <p> UML Diagrams</p>
                </li>
                <li className="mb-2">
                  <p>Design Patterns</p>
                </li>
                <li className="mb-2">
                  <p>Class Design</p>
                </li>
                <li className="mb-2">
                  <p>Designing APIs</p>
                </li>
                <li className="mb-2">
                  <p>Modular Design</p>
                </li>
                <li className="mb-2">
                  <p>Concurrency and Multithreading</p>
                </li>
                <li className="mb-2">
                  <p>Data Structures in LLD</p>
                </li>
                <li className="mb-2">
                  <p> Error Handling and Logging</p>
                </li>
                <li className="mb-4">
                  <p>Web Development Projects</p>
                </li>
              </ul>
            </div>
          );
        case 5:
          return (
            <div className="month-info-card-info mt-4">
              <p>System Design Essentials</p>
              <ul className="mt-4">
                <li className="mb-2">
                  <p> Overview of System Design</p>
                </li>
                <li className="mb-2">
                  <p>Key Components in System Design</p>
                </li>
                <li className="mb-2">
                  <p> Scalability and Performance</p>
                </li>
                <li className="mb-2">
                  <p>Availability and Reliability</p>
                </li>
                <li className="mb-2">
                  <p>Security</p>
                </li>
                <li className="mb-2">
                  <p>Distributed Systems</p>
                </li>
                <li className="mb-2">
                  <p>Eventual Consistency</p>
                </li>
                <li className="mb-2">
                  <p>Trade-offs in System Design</p>
                </li>
                <li className="mb-2">
                  <p>Case Studies and Practical Examples</p>
                </li>
                <li className="mb-2">
                  <p>Designing a Social Media Feed</p>
                </li>
                <li className="mb-4">
                  <p>Designing a Scalable E-commerce System</p>
                </li>
              </ul>
            </div>
          );
        case 6:
          return (
            <div className="month-info-card-info mt-4">
              <p>Electives</p>
              <ul className="mt-4">
                <li className="mb-2">
                  <p>Advanced Programming Languages</p>
                </li>
                <li className="mb-2">
                  <p>Mobile Application Development</p>
                </li>
                <li className="mb-2">
                  <p>Web Development Frameworks</p>
                </li>
                <li className="mb-2">
                  <p>Cybersecurity Fundamentals</p>
                </li>
                <li className="mb-2">
                  <p>Cloud Computing and DevOps</p>
                </li>
                <li className="mb-2">
                  <p> Artificial Intelligence and Machine Learning</p>
                </li>
                <li className="mb-2">
                  <p>Data Science and Big Data</p>
                </li>
                <li className="mb-2">
                  <p>User Experience (UX) and User Interface (UI) Design</p>
                </li>
                <li className="mb-2">
                  <p>Internet of Things (IoT)</p>
                </li>
                <li className="mb-2">
                  <p> Blockchain Technology</p>
                </li>
                <li className="mb-4">
                  <p>Game Development</p>
                </li>
              </ul>
            </div>
          );
        default:
          return null;
      }
    };


  return (
    <>
    <div className="solidengineer-section">
        <div className="container">
          <div className="solidengineer-section-tittle">
            <h2 className="text-center">
              Curriculum is designed to make you a <span>solid engineer</span>
            </h2>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6 mb-4">
              {/* Module Tabs */}
              {[1, 2, 3, 4, 5, 6].map((module) => (
                <a key={module} onClick={() => setActiveModule(module)}>
                  <div
                    className={`fundamentals-box position-relative mb-3 ${
                      activeModule === module ? "active" : ""
                    }`}
                    style={{
                      backgroundColor: activeModule === module ? "#0F172A" : "#f8f9fa", // Change colors as needed
                      color: activeModule === module ? "#fff" : "#000",
                    }}
                  >
                    <div className="fundamentals-box-card d-flex align-items-center justify-content-start gap-3">
                      <div className="fundamentals-box-card-num">
                        <h2>{String(module).padStart(2, '0')}</h2>
                      </div>
                      <div className="fundamentals-box-card-info">
                        <p>Module</p>
                        <h6>
                          {module === 1 && "Search Engine Optimization (SEO)"}
                          {module === 2 && "Content Marketing"}
                          {module === 3 && "Social Media Marketing"}
                          {module === 4 && "Email Marketing"}
                          {module === 5 && "Pay-Per-Click Advertising (PPC)"}
                          {module === 6 && "Analytics and Data Analysis"}
                        </h6>
                      </div>
                    </div>
                    <div className="months-logo">
                      <p>2 Months</p>
                    </div>
                  </div>
                </a>
              ))}

              {/* Download Curriculum button */}
              <div className="fundamentals-box-btn text-center">
                <a
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#downloadCurriculumModal"
                >
                  Download Curriculum{" "}
                  <i className="fa-solid fa-download ms-2"></i>
                </a>
              </div>
            </div>

            {/* Module Content */}
            <div className="col-lg-6">
              <div className="month-info-card">
                <div className="month-info-tittle">
                  <h6 className="text-center">2 Months</h6>
                  <p className="text-center">
                    *A learner can do as many electives as they want, but only
                    after completion of Core Curriculum.
                  </p>
                </div>

                {renderModuleInfo()}

                <hr className="line" />
                <p
                  className="text-center"
                  style={{ color: "#fff", fontWeight: "500" }}
                >
                  full stack development : Module
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DownloadCurriculum/>
    </>
  )
}
