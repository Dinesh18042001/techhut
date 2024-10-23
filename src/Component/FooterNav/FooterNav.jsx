// import React from "react";

// export default function FooterNav() {
//   return (
//     <div className="footer-nav-section">
//       <div className="container">
//         <div className="footer-nav-box d-flex justify-content-between">

//           <div className="footer-nav-link">
//             <a href="#">
//               <div className="footer-nav-link-main text-center">
//                 <span>
//                   <i className="fa-solid fa-house"></i>
//                 </span>
//                 <p>Home</p>
//               </div>
//             </a>
//           </div>

//           <div className="footer-nav-link">
//               <a href="#">
//                 <div className="footer-nav-link-main text-center">
//                   <span>
//                     <i className="fa-solid fa-phone"></i>
//                   </span>
//                   <p>Contact</p>
//                 </div>
//               </a>
//             </div>

//             <div className="footer-nav-link">
//               <a href="#">
//                 <div className="footer-nav-link-main text-center">
//                   <span>
//                     <i className="fa-solid fa-book-open-reader"></i>
//                   </span>
//                   <p>Courses</p>
//                 </div>
//               </a>
//             </div>

//             <div className="footer-nav-link">
//               <a href="#">
//                 <div className="footer-nav-link-main text-center">
//                   <span>
//                     <i className="fa-solid fa-lightbulb"></i>
//                   </span>
//                   <p>Features</p>
//                 </div>
//               </a>
//             </div>

//             <div className="footer-nav-link">
//               <a href="#">
//                 <div className="footer-nav-link-main text-center">
//                   <span>
//                     <i className="fa-solid fa-user-group"></i>
//                   </span>
//                   <p>Mentors</p>
//                 </div>
//               </a>
//             </div>

//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function FooterNav() {
  return (
    <div className="footer-nav-section">
      <div className="footer-nav-box d-flex justify-content-between">
        <div className="footer-nav-link">
          <a href="#">
            <div className="footer-nav-link-main text-center">
              <img src="./assets/FooterNav/icon1.png" alt="" />
              <p className="mt-1">Home</p>
            </div>
          </a>
        </div>

        {/* <div className="footer-nav-link">
          <a href="#">
            <div className="footer-nav-link-main footer-nav-link-main2 text-center">
            <img src="./assets/FooterNav/telephone.png" alt="" />
              <p>Contact</p>
            </div>
          </a>
        </div> */}

        <div className="footer-nav-link">
          <a href="#">
            <div className="footer-nav-link-main footer-nav-link-main3 text-center">
              <img src="./assets/FooterNav/instructor.png" alt="" />
              <p className="mt-1">Courses</p>
            </div>
          </a>
        </div>

        <div className="footer-nav-link">
          <a href="#">
            <div className="footer-nav-link-main text-center">
              <img src="./assets/FooterNav/application.png" alt="" />
              <p className="mt-1">Features</p>
            </div>
          </a>
        </div>

        <div className="footer-nav-link">
          <a href="#">
            <div className="footer-nav-link-main text-center">
              <img src="./assets/FooterNav/mentee.png" alt="" />
              <p className="mt-1">Mentors</p>
            </div>
          </a>
        </div>

        <div className="footer-nav-link">
          <a href="#">
            <div className="footer-nav-link-main footer-nav-link-main2 text-center">
              <img src="./assets/FooterNav/burger-bar.png" alt="" />
              <p className="mt-1">Manu</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
