import React from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const BookingSuccess = (props) => {
  const history = useHistory()
  const navigate = async () => {
    history.goBack();
  };

  return (
    <>
      <Header {...props} />
 
      {/* // <!-- /Breadcrumb -->       */}

      <div style={{
      }} className="content min-vh-100  success-page-cont">
        <div className="container-fluid">
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
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="card success-card">
                <div className="card-body">
                  <div className="success-cont">
                    <i className="fas fa-check"></i>
                    <h3>Appointment booked Successfully!</h3>
                    <p>
                      Appointment booked with <strong>Dr. Darren Elder</strong>
                      <br /> on <strong>12 Nov 2019 5:00PM to 6:00PM</strong>
                    </p>
                    <Link
                      to="/buyer/pages/invoice-view"
                      className="btn btn-primary view-inv-btn"
                    >
                      View Invoice
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingSuccess;
