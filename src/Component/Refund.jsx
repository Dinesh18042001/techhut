import React from "react";

export default function Refund() {
  return (
    <>
      <div className="refund-section mt-5 mb-4">
        <div className="container">
          <div className="refund-section-tittle">
            <h2 className="text-center mb-4">
              Refund <span>Policy</span>
            </h2>
          </div>
          <div className="refund-section-info">
            <p>
              For our online sessions, we offer a 100% refund if a request is
              made within 7 days of the session's start date. After 7 days, fees
              are non-refundable under any circumstances.
            </p>
            <p>
              To claim a refund within the 7-day window, please follow these
              steps:
            </p>
            <ul>
              <li>
                <p>
                  Send an email with the subject "Session refund | Registered
                  phone number" (make sure to include your registered phone
                  number in the subject line).
                </p>
              </li>
              <li>
                <p>
                  Provide a valid reason for the refund (for our internal
                  records).
                </p>
              </li>
            </ul>
            <p>
              If the reason is deemed valid, the refund will be processed within
              25 working days of receiving the request.
            </p>
            <p className="mb-3">
              For duplicate payments, refunds will be processed using the
              original method of payment within 25 working days after
              notification by the customer. Please note that all refunds will be
              completed within 25 working days after approval of the refund
              request.
            </p>
            <p>To help us improve our services, we encourage you to provide feedback about your experience when requesting a refund. Your insights are valuable to us and assist in enhancing the quality of our sessions.</p>
          </div>
        </div>
      </div>
    </>
  );
}
