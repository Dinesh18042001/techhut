// import React, { useState, useEffect } from 'react';
// import { Modal, Button } from 'react-bootstrap';

// export default function ModalPopup() {
//   const [showModal, setShowModal] = useState(false);

//   // useEffect to show the modal after 5 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowModal(true);
//     }, 5000); // 5 seconds

//     // Cleanup timer on component unmount
//     return () => clearTimeout(timer);
//   }, []);

//   // Function to handle closing the modal
//   const handleClose = () => setShowModal(false);

//   return (
//     <>
//       <Modal show={showModal} onHide={handleClose} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Fill up your details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" className="form-control" id="name" placeholder="Enter your name" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email address</label>
//               <input type="email" className="form-control" id="email" placeholder="Enter your email" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="comments">Comments</label>
//               <textarea className="form-control" id="comments" rows="3" placeholder="Enter your comments"></textarea>
//             </div>
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Submit
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }



import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Cookies from 'js-cookie';

export default function ModalPopup() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the cookie exists
    const isModalClosed = Cookies.get('modalClosed');

    if (!isModalClosed) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 5000); // 5 seconds

      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }
  }, []);

  // Function to handle closing the modal and setting the cookie
  const handleClose = () => {
    setShowModal(false);
    Cookies.set('modalClosed', 'true', { expires: 1 }); // Cookie expires in 1 day
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Fill up your details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments</label>
              <textarea className="form-control" id="comments" rows="3" placeholder="Enter your comments"></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
