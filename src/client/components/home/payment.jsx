import React, { useState } from "react";
import Headerconsultation from "./headerconsultation";
import { doctor02 } from "../pages/aboutus/img";
import { Link } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";

const Payment = () => {
  const history = useHistory();
  // console.log(history)
  const { profileId } = useParams();
  const [selectedMethod, setSelectedMethod] = useState("debitCard");
  const config = "/react/template";
  const navigate = async () => {
    history.goBack();
  };
  return (
    <div className="main-wrapper">
      <Headerconsultation />
      {/* /Header */}
      {/* Page Content */}
      <div className="doctor-content">
        <div className="container">
          {/* Payment */}
          <div className="row">
            <div className="col-md-12">
              <div className="back-link">
                <button onClick={() => navigate()}>
                  <i className="fa-solid fa-arrow-left-long" /> Back
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="paitent-header">
                <h4 className="paitent-title">Payment</h4>
              </div>
              <div className="booking-header">
                <h4 className="booking-title">Payments Methods</h4>
              </div>
              <div className="payments-form">
                <form action={`${config}/bookingsuccess`}>
                  <div className="payment-form-group">
                    {/* <div className="form-group d-flex justify-content-between align-items-center px-5  ">
                      <label className="custom_radio">
                        <input
                          type="radio"
                          onClick={() => {
                            setSelectedMethod("debitCard");
                          }}
                          name="payment"
                          defaultChecked=""
                        />
                        <span className="checkmark" /> Debit or Credit Card
                      </label>
                      <label className="custom_radio">
                        <input
                          type="radio"
                          onClick={() => {
                            setSelectedMethod("payPal");
                          }}
                          name="payment"
                          defaultChecked=""
                        />
                        <span className="checkmark" /> Paypal or Payoneer
                      </label>
                      <label className="custom_radio">
                        <input type="radio" name="payment" defaultChecked="" />
                        <span className="checkmark" /> Wallet
                      </label>
                    </div> */}
                    <div className="form-group w-100 d-flex  justify-content-between column-gap-2   align-items-center">
                      <div
                        onClick={() => {
                          setSelectedMethod("debitCard");
                        }}
                        className="card-body d-flex justify-content-center h-auto column-gap-3   align-items-end w-50 "
                        style={{
                          textAlign: "center",
                          cursor: "pointer",
                          backgroundColor:
                            selectedMethod === "debitCard"
                              ? "#0E82FD"
                              : "#70E6D2",
                          zIndex: selectedMethod === "debitCard" ? 2 : 1,
                          borderRadius: "5px",
                          boxShadow:
                            !selectedMethod === "debitCard"
                              ? "0px 0px 10px rgba(0, 0, 0, 0.25)"
                              : "none", // Add box shadow based on isSelected state
                          transition:
                            "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add a transition for the transform and box-shadow properties
                        }}
                      >
                        <img
                          src="/visa.png"
                          className="img-fluid rounded   "
                          width={"50px"}
                          height={"50px"}
                        />
                        <img
                          src="/mastercard.png"
                          className="img-fluid rounded   "
                          width={"50px"}
                          height={"50px"}
                        />
                      </div>
                      <div
                        onClick={() => {
                          setSelectedMethod("payPal");
                        }}
                        className="card-body d-flex justify-content-center h-auto  column-gap-3   align-items-end w-50 "
                        style={{
                          textAlign: "center",
                          cursor: "pointer",
                          backgroundColor:
                            selectedMethod === "payPal" ? "#0E82FD" : "#70E6D2",
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
                        <img
                          src="/visa.png"
                          className="img-fluid rounded   "
                          width={"50px"}
                          height={"50px"}
                        />
                        <img
                          src="/mastercard.png"
                          className="img-fluid rounded   "
                          width={"50px"}
                          height={"50px"}
                        />
                      </div>
                      <div
                        onClick={() => {
                          setSelectedMethod("wallet");
                        }}
                        className="card-body d-flex justify-content-center h-auto  column-gap-3   align-items-end w-50 "
                        style={{
                          textAlign: "center",
                          cursor: "pointer",
                          backgroundColor:
                            selectedMethod === "wallet" ? "#0E82FD" : "#70E6D2",
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
                        <img
                          src="/walleticon.jpg"
                          className="img-fluid rounded-circle"
                          width={"30px"}
                          height={"30px"}
                        />
                        <h4 className="h5 text-danger  fw-medium ">
                          Credits: 0.0$
                        </h4>
                      </div>
                    </div>
                    {selectedMethod === "debitCard" && (
                      <div>
                        <div className="form-group card-label">
                          <label>Name on Card</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="John Smith"
                          />
                        </div>
                        <div className="form-group card-label">
                          <label>Card Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="xxxx-xxxx-xxxx-xxxx"
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label>Expiry Month</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="MM"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label>Expiry Year</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="YYYY"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group card-label">
                              <label>CVV</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="****"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedMethod === "payPal" && (
                      <div className="d-flex flex-column row-gap-2 ">
                        <button className="btn btn-primary w-100">
                          <img
                            src="/paypal.png"
                            className="img-fluid rounded-circle "
                            width={"100px"}
                            height={"100px"}
                          />
                        </button>
                        <button className="btn btn-primary w-100">
                          <img
                            src="/payoneer.png"
                            className="img-fluid rounded-circle "
                            width={"140px"}
                            height={"140px"}
                          />
                        </button>
                      </div>
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
              {/* <div className="col-lg-8 col-md-12 card-body card w-100">
                <div className="booking-header">
                  <h4 className="booking-title">Payments Methods</h4>
                </div>
                <div className="payments-form  ">
                  <form>
                    <div className="payment-form-group  ">
                      <div className="form-group w-100 d-flex  border  justify-content-between column-gap-2   align-items-center">
                        <div
                          onClick={() => {
                            setSelectedMethod("debitCard");
                          }}
                          className="card-body d-flex justify-content-center h-50 column-gap-3   align-items-end w-50 "
                          style={{
                            textAlign: "center",
                            cursor: "pointer",
                            backgroundColor:
                              selectedMethod === "debitCard"
                                ? "#0E82FD"
                                : "#70E6D2",
                            zIndex: selectedMethod === "debitCard" ? 2 : 1,
                            borderRadius: "5px",
                            boxShadow:
                              !selectedMethod === "debitCard"
                                ? "0px 0px 10px rgba(0, 0, 0, 0.25)"
                                : "none", // Add box shadow based on isSelected state
                            transition:
                              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add a transition for the transform and box-shadow properties
                          }}
                        >
                          <img
                            src="/visa.png"
                            className="img-fluid rounded   "
                            width={"50px"}
                            height={"50px"}
                          />
                          <img
                            src="/mastercard.png"
                            className="img-fluid rounded   "
                            width={"50px"}
                            height={"50px"}
                          />
                          <h5
                            style={{
                              textAlign: "center",
                              color:
                                selectedMethod === "debitCard"
                                  ? "#FFFFFF"
                                  : "#000",
                              fontSize: "1rem",
                              fontWeight: "700",
                            }}
                          >
                            Debit or Credit Card
                          </h5>
                        </div>
                        <div
                          onClick={() => {
                            setSelectedMethod("payPal");
                          }}
                          className="card-body d-flex justify-content-center h-50  column-gap-3   align-items-end w-50 "
                          style={{
                            textAlign: "center",
                            cursor: "pointer",
                            backgroundColor:
                              selectedMethod === "payPal"
                                ? "#0E82FD"
                                : "#70E6D2",
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
                          <img
                            src="/visa.png"
                            className="img-fluid rounded   "
                            width={"50px"}
                            height={"50px"}
                          />
                          <img
                            src="/mastercard.png"
                            className="img-fluid rounded   "
                            width={"50px"}
                            height={"50px"}
                          />
                          <h5
                            style={{
                              textAlign: "center",
                              color:
                                selectedMethod === "payPal"
                                  ? "#FFFFFF"
                                  : "#000",
                              fontSize: "1rem",
                              fontWeight: "700",
                            }}
                          >
                            PayPal or Payneer
                          </h5>
                        </div>
                      </div>
                      {selectedMethod === "debitCard" && (
                        <>
                          <div className="form-group card-label">
                            <label>Name on Card</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="John Smith"
                            />
                          </div>
                          <div className="form-group card-label">
                            <label>Card Number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="xxxx-xxxx-xxxx-xxxx"
                            />
                          </div>
                          <div className="row align-items-end">
                            <div className="col-md-4 w-25 ">
                              <div className="form-group card-label">
                                <label>Expiry Month</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="MM"
                                />
                              </div>
                            </div>
                            <div className="col-md-4 w-25 ">
                              <div className="form-group card-label">
                                <label>Expiry Year</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="YYYY"
                                />
                              </div>
                            </div>
                            <div className="col-md-4 w-25 ">
                              <div className="form-group card-label">
                                <label>CVV</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="****"
                                />
                              </div>
                            </div>
                            <div className="col-md-4 w-25 ">
                              <div className="form-group card-label">
                                <button className="btn btn-primary w-100">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {selectedMethod === "payPal" && (
                        <div className="d-flex flex-column row-gap-2 ">
                          <button className="btn btn-primary w-100">
                            <img
                              src="/paypal.png"
                              className="img-fluid rounded-circle "
                              width={"100px"}
                              height={"100px"}
                            />
                          </button>
                          <button className="btn btn-primary w-100">
                            <img
                              src="/payoneer.png"
                              className="img-fluid rounded-circle "
                              width={"140px"}
                              height={"140px"}
                            />
                          </button>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div> */}
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
                          <img src={doctor02} alt="" />
                        </Link>
                      </div>
                      <div className="booking-doctor-info">
                        <h4>
                          <Link to="/patient/doctor-profile">Dr. John Doe</Link>
                        </h4>
                        <p>MBBS, Dentist</p>
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
              <div className="booking-btn proceed-btn">
                <Link
                  to={`/buyer/bookingsuccess/${profileId}`}
                  className="btn btn-primary prime-btn"
                >
                  Proceed to Pay $163.00
                </Link>
              </div>
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
  );
};

export default Payment;
