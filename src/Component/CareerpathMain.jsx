// import React from "react";
// import { motion } from "framer-motion";

// export default function CareerpathMain() {
//   // Data for the left-to-right scrolling section
//   const items1 = [
//     {
//       icon: "fa-solid fa-thumbs-up",
//       text: "Not achieving success in Resume Shortlisting?",
//     },
//     {
//       icon: "fa-regular fa-solid fa-handshake",
//       text: "Struggling with Limited Networking?",
//     },
//     {
//       icon: "fa-solid fa-hand-holding-heart",
//       text: "Experiencing Doubts During Technical HR Interviews?", 
//     },
//     {
//       icon: "fa-solid fa-award",
//       text: "Struggling to find quality Job Opportunities?",
//     },
//     {
//       icon: "fa-solid fa-solid fa-bullseye",
//       text: "Not achieving success in Resume Shortlisting?", 
//     },
//   ];

//   // Data for the right-to-left scrolling section
//   const items2 = [
//     {
//       icon: "fa-solid fa-book-open-reader",
//       text: "Having trouble finding good Job Referrals?", 
//     },
//     {
//       icon: "fa-regular fa-face-smile",
//       text: "Wondering why you aren't getting Interview Calls?",
//     },
//     {
//       icon: "fa-solid fa-comments",
//       text: "Unable to find quality Job Opportunities?",
//     },
//     {
//       icon: "fa-solid fa-bolt",
//       text: "Is programming a concern for you Professionally?",
//     },
//     {
//       icon: "fa-solid fa-graduation-cap",
//       text: "Struggling to find Right Resources?",
//     },
//   ];

//   // Motion Variants
//   const leftToRightVariants = {
//     animate: {
//       x: ["-100%", "0%"], // Moves from left to right
//       transition: {
//         repeat: Infinity,
//         repeatType: "loop",
//         ease: "linear",
//         duration: 20, // Adjust speed
//       },
//     },
//   };

//   const rightToLeftVariants = {
//     animate: {
//       x: ["0%", "-100%"], // Moves from right to left
//       transition: {
//         repeat: Infinity,
//         repeatType: "loop",
//         ease: "linear",
//         duration: 20, // Adjust speed
//       },
//     },
//   };

//   return (
//     <>
//      <div className="careerpathmain-section">

//      <div className="careerpathmain-tittle mb-5">
//             <h3 className="text-center mb-2">
//             Facing Setbacks in Your<span> Career Path?</span>
//             </h3>
//             <p className="text-center">
//             We are here for it , for your dream job
//             </p>
//           </div>


//       {/* Right-to-Left Scrolling Section */}
//       <div className="scroller-wrapper overflow-hidden">
//         <motion.div
//           className="scroller-container"
//           style={{
//             display: "flex",
//             whiteSpace: "nowrap",
//           }}
//           variants={rightToLeftVariants}
//           animate="animate"
//         >
//           {/* Right to Left Section using items2 */}
//           {[...items2, ...items2].map((item, index) => (
//             <div
//               key={`rtl-${index}`}
//               className="col-lg-4"
//               style={{
//                 minWidth: "300px",
//                 marginRight: "20px",
//               }}
//             >
//               <div className="silider-box mb-3">
//                 <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
//                   <div className={`icon-box box${(index % items2.length) + 1}`}>
//                     <span>
//                       <i className={item.icon}></i>
//                     </span>
//                   </div>
//                   <p>{item.text}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Left-to-Right Scrolling Section */}
//       <div
//         className="scroller-wrapper overflow-hidden"
//         style={{
//           position: "relative",
//           width: "100%",
//         }}
//       >
//         <motion.div
//           className="scroller-container"
//           style={{
//             display: "flex",
//             whiteSpace: "nowrap",
//           }}
//           variants={leftToRightVariants}
//           animate="animate"
//         >
//           {/* Left to Right Section using items1 */}
//           {[...items1, ...items1].map((item, index) => (
//             <div
//               key={`ltr-${index}`}
//               className="col-lg-4"
//               style={{
//                 minWidth: "300px",
//                 marginRight: "20px",
//               }}
//             >
//               <div className="silider-box mb-3">
//                 <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
//                   <div className={`icon-box box${(index % items1.length) + 1}`}>
//                     <span>
//                       <i className={item.icon}></i>
//                     </span>
//                   </div>
//                   <p>{item.text}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//     </>
   
//   );
// }







import React from "react";
import { motion, useAnimation } from "framer-motion";

export default function CareerpathMain() {
  const items1 = [
    { icon: "fa-solid fa-thumbs-up", text: "Not achieving success in Resume Shortlisting?" },
    { icon: "fa-regular fa-solid fa-handshake", text: "Struggling with Limited Networking?" },
    { icon: "fa-solid fa-hand-holding-heart", text: "Experiencing Doubts During Technical HR Interviews?" },
    { icon: "fa-solid fa-award", text: "Struggling to find quality Job Opportunities?" },
    { icon: "fa-solid fa-solid fa-bullseye", text: "Not achieving success in Resume Shortlisting?" },
  ];

  const items2 = [
    { icon: "fa-solid fa-book-open-reader", text: "Having trouble finding good Job Referrals?" },
    { icon: "fa-regular fa-face-smile", text: "Wondering why you aren't getting Interview Calls?" },
    { icon: "fa-solid fa-comments", text: "Unable to find quality Job Opportunities?" },
    { icon: "fa-solid fa-bolt", text: "Is programming a concern for you Professionally?" },
    { icon: "fa-solid fa-graduation-cap", text: "Struggling to find Right Resources?" },
  ];

  const leftToRightControls = useAnimation();
  const rightToLeftControls = useAnimation();

  const leftToRightVariants = {
    animate: {
      x: ["-100%", "0%"], // Moves left to right
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 20,
      },
    },
  };

  const rightToLeftVariants = {
    animate: {
      x: ["0%", "-100%"], // Moves right to left
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 20,
      },
    },
  };

  return (
    <div className="careerpathmain-section">
      <div className="careerpathmain-tittle mb-5">
        <h3 className="text-center mb-2">
          Facing Setbacks in Your <span>Career Path?</span>
        </h3>
        <p className="text-center">We are here for it, for your dream job</p>
      </div>

      {/* Right-to-Left Scrolling Section */}
      <div
        className="scroller-wrapper overflow-hidden"
        onMouseEnter={() => rightToLeftControls.stop()}
        onMouseLeave={() => rightToLeftControls.start("animate")}
      >
        <motion.div
          className="scroller-container"
          style={{ display: "flex", whiteSpace: "nowrap" }}
          variants={rightToLeftVariants}
          initial="animate"
          animate={rightToLeftControls}
        >
          {[...items2, ...items2].map((item, index) => (
            <div
              key={`rtl-${index}`}
              className="col-lg-4"
              style={{ minWidth: "300px", marginRight: "20px" }}
            >
              <div className="silider-box mb-3">
                <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
                  <div className={`icon-box box${(index % items2.length) + 1}`}>
                    <span>
                      <i className={item.icon}></i>
                    </span>
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Left-to-Right Scrolling Section */}
      <div
        className="scroller-wrapper overflow-hidden"
        onMouseEnter={() => leftToRightControls.stop()}
        onMouseLeave={() => leftToRightControls.start("animate")}
      >
        <motion.div
          className="scroller-container"
          style={{ display: "flex", whiteSpace: "nowrap" }}
          variants={leftToRightVariants}
          initial="animate"
          animate={leftToRightControls}
        >
          {[...items1, ...items1].map((item, index) => (
            <div
              key={`ltr-${index}`}
              className="col-lg-4"
              style={{ minWidth: "300px", marginRight: "20px" }}
            >
              <div className="silider-box mb-3">
                <div className="main-silider-box d-flex justify-content-center align-items-center text-center">
                  <div className={`icon-box box${(index % items1.length) + 1}`}>
                    <span>
                      <i className={item.icon}></i>
                    </span>
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
