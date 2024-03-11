import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Paypal from "./Paypal";
import Header from "../../header";
import { IMG011 } from "../chat/img";
const Checkout = (props) => {
  const history = useHistory()

  const [selectedMethod, setSelectedMethod] = useState("payPal");
  const navigate = async () => {
    history.goBack();
  };
 
  return (
    <Fragment>
      <Header {...props} />


      <div className="main-wrapper">
        {/* <Headerconsultation /> */}
        {/* /Header */}
        {/* Page Content */}
        <div className="doctor-content">
          <div className="container">
            {/* Payment */}
            <div className="row">
              <div className="col-md-12">
                <div className="back-link">
                  <button style={{
                    outline:"none",
                    border:"none",
                    background:"none",
                    cursor:"pointer"
                  }} className="px-3 py-2 fw-semibold " onClick={() => navigate()}>
                    <i className="fa-solid fa-arrow-left-long" /> Back
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="paitent-header d-none d-sm-block ">
                  <h4 className="paitent-title">Payment</h4>
                </div>
                <div className="booking-header">
                  <h4 className="booking-title">Payments Methods</h4>
                </div>
                <div className="payments-form z-0">
                  <form >
                    <div className="payment-form-group z-0">

                      <div className="form-group w-100 d-flex  justify-content-between column-gap-2  z-0  align-items-center">
                        <div
                          onClick={() => {
                            setSelectedMethod("payPal");
                          }}
                          className="card-body border-secondary rounded-2 border d-flex justify-content-center h-auto  column-gap-3   align-items-end w-50 "
                          style={{
                            textAlign: "center",
                            cursor: "pointer",
                            maxHeight: "80px",

                            background:
                              selectedMethod === "payPal" ? "#e9e9e6"
                                : "white",
                            zIndex: selectedMethod === "payPal" ? 2 : 1,
                            borderRadius: "5px",
                            boxShadow:
                              !selectedMethod === "payPal"
                                ? "0px 0px 10px rgba(0, 0, 0, 0.25)"
                                : "none", // Add box shadow based on isSelected state
                            transition:
                              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add a transition for the transform and box-shadow properties
                          }}
                        >
                          {/* <img
                            src="/paypal.png"
                            className="img-fluid rounded"
                            width={"40px"}
                            height={"40px"}
                          />
                          <img
                            src="/payoneer.png"
                            className="img-fluid rounded   "
                            width={"40px"}
                            height={"40px"}
                          /> */}
                          <h4 className="fw-bold">Paypal or Credit Card</h4>
                        </div>
                        <div
                          onClick={() => {
                            setSelectedMethod("wallet");
                          }}
                          className="card-body border-secondary rounded-2 border d-flex justify-content-center h-auto  column-gap-3 z-0   align-items-end w-50 "
                          style={{
                            textAlign: "center",
                            cursor: "pointer",
                            maxHeight: "80px",
                            background:
                              selectedMethod === "wallet" ? "#e9e9e6"
                                : "white",
                            zIndex: selectedMethod === "wallet" ? 2 : 1,
                            borderRadius: "5px",
                            boxShadow:
                              !selectedMethod === "wallet"
                                ? "0px 0px 10px rgba(0, 0, 0, 0.25)"
                                : "none", // Add box shadow based on isSelected state
                            transition:
                              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add a transition for the transform and box-shadow properties
                          }}
                        >
                          {/* <img
                            src="/walleticon.jpg"
                            className="img-fluid"
                            width={"30px"}
                            height={"30px"}
                          /> */}
                          <h4 className="fw-bold">
                            Credits: 0.0$
                          </h4>
                        </div>
                      </div>
                      {selectedMethod === "payPal" && (
                        <Paypal />
                      )}
                      {selectedMethod === "wallet" && (
                        <div
                          style={{
                            backgroundColor: "#FEBEBE",
                          }}
                          className="container d-flex  rounded-4 justify-content-between  align-items-center  p-4 "
                        >
                          <h4 className="h5 text-danger  fw-medium ">
                            Your balance
                          </h4>
                          <h4 className="h5 text-danger  fw-medium ">0.0$</h4>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="booking-header">
                  <h4 className="booking-title">Booking Summary</h4>
                </div>
                <div className="card booking-card">
                  <div className="card-body booking-card-body">
                    <div className="booking-doctor-details">
                      <div className="booking-doctor-left">
                        <div className="booking-doctor-img">
                          <Link to="/patient/doctor-profile">
                            <img src={IMG011} alt="" />
                          </Link>
                        </div>
                        <div className="booking-doctor-info">
                          <h4>
                            {/* <Link to="/patient/doctor-profile">{doctorDetail.name}</Link> */}
                          </h4>
                          {/* <p>{doctorDetail.education}</p> */}
                        </div>
                      </div>
                      <div className="booking-doctor-right">
                        <p>
                          <i className="fas fa-circle-check" />
                          <Link to="/doctor/profile-setting">Edit</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card booking-card">
                  <div className="card-body booking-card-body booking-list-body">
                    <div className="booking-list">
                      <div className="booking-date-list">
                        <ul>
                          <li>
                            Booking Date: <span>Sun, 30 Aug 2022</span>
                          </li>
                          <li>
                            Booking Time: <span>10.00AM to 11:00AM</span>
                          </li>
                        </ul>
                      </div>
                      <div className="booking-doctor-right">
                        <p>
                          <Link to="/patient/booking1">Edit</Link>
                        </p>
                      </div>
                    </div>
                    <div className="booking-list">
                      <div className="booking-date-list">
                        <ul>
                          <li>
                            Consultation Type:{" "}
                            <span>
                              <i className="feather-video" /> Video Consulting
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="booking-doctor-right">
                        <p>
                          <Link to="/consultation">Edit</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card booking-card">
                  <div className="card-body booking-card-body booking-list-body">
                    <div className="booking-list">
                      <div className="booking-date-list consultation-date-list">
                        <ul>
                          <li>
                            Consultation Fee: <span>$150.00</span>
                          </li>
                          <li>
                            Booking Fee: <span>$8.00</span>
                          </li>
                          <li>
                            Tax: <span>$5.00</span>
                          </li>
                          <li>
                            <span className="total-amount" />
                            Total <span>$163.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {selectedMethod === "wallet" && <div className="booking-btn d-flex justify-content-center align-items-center d-sm-block proceed-btn">
                <Link
                  to={`/buyer/bookingsuccess`}
                  className="btn btn-primary prime-btn"
                >
                  Proceed to Pay $163.00
                </Link>
                </div>}
              </div>
            </div>
            {/* /Payment */}
          </div>
        </div>
        {/* /Page Content */}
        {/* Cursor */}
        <div className="mouse-cursor cursor-outer" />
        <div className="mouse-cursor cursor-inner" />
        {/* /Cursor */}
      </div>

      <ToastContainer />
    </Fragment>
  );
};

export default Checkout;