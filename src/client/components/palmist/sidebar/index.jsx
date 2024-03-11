import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { doctor_thumb_02, doc_01, doc_02, doc_03 } from "../../imagepath";
import doc1 from '../../../assets/images/doc1.jpg'
import { Doctor1, Doctor2 } from "../../home/image";
const DoctorSidebar = () => {
  let pathnames = window.location.pathname;
  const [token, setToken] = useState();
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await JSON.parse(localStorage.getItem("userToken"));
      setToken(data?.user);
    };
    fetchUserData();
  }, []);
  return (
    <>
      {/* Profile Sidebar */}
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to="#" className="booking-doc-img">
              <img src={Doctor2} alt="User Image" />
            </Link>
            <div className="profile-det-info bg-success">
            <h3>{token?.userFirstName}</h3>
            {/* John Creister */}
              <h5 className="text-white">
                 active
              </h5>
              {/* <h5 className="mb-0">
                <i className="fas fa-map-marker-alt"></i> Newyork, USA
              </h5> */}
          </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className="dashboard-menu">
            <ul>
              <li
                className={
                  pathnames.includes("/palmist") ? "active" : ""
                }
              >
                <Link to="/palmist">
                  <i className="fas fa-columns" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/palmist/appointments") ? "active" : ""
                }
              >
                <Link to="/palmist/appointments">
                  <i className="fas fa-calendar-check" />
                  <span>Appointments</span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/palmist/orders") ? "active" : ""
                }
              >
                <Link to="/palmist/orders">
                  <i className="fas fa-user-injured" />
                  <span>My Customers</span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/palmist/schedule-timing") ? "active" : ""
                }
              >
                <Link to="/palmist/schedule-timing">
                  <i className="fas fa-hourglass-start" />
                  <span>Schedule Timings</span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/palmist/available-timing") ? "active" : ""
                }
              >
                <Link to="/palmist/available-timing">
                  <i className="fas fa-clock" />
                  <span>Available Timings</span>
                </Link>
              </li>
              <li
                className={pathnames.includes("/palmist/pages/invoice") ? "active" : ""}
              >
                <Link to="/palmist/pages/invoice">
                  <i className="fas fa-file-invoice" />
                  <span>Invoices</span>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/palmist/account") ? "active" : ""
                }
              >
                <Link to="/palmist/account">
                  <i className="fas fa-file-invoice-dollar" />
                  <span>Accounts</span>
                </Link>
              </li>
              <li
                className={pathnames.includes("/palmist/review") ? "active" : ""}
              >
                <Link to="/palmist/review">
                  <i className="fas fa-star" />
                  <span>Reviews</span>
                </Link>
              </li>
              <li
                className={
                 `
                 ${
                  pathnames.includes("/palmist/chat-palmist") ? "active" : ""
                 }
                 d-none d-md-block`
                }
              >
                <Link to="/palmist/chat-palmist">
                  <i className="fas fa-comments" />
                  <span>Message</span>
                  <small className="unread-msg">23</small>
                </Link>
              </li>
              <li
                className={
                  pathnames.includes("/palmist/profile-setting") ? "active" : ""
                }
              >
                <Link to="/palmist/profile-setting">
                  <i className="fas fa-user-cog" />
                  <span>Profile Settings</span>
                </Link>
              </li>
              {/* <li
                className={
                  pathnames.includes("/palmist/social-media") ? "active" : ""
                }
              >
                <Link to="/palmist/social-media">
                  <i className="fas fa-share-alt" />
                  <span>Social Media</span>
                </Link>
              </li> */}
              <li
                className={
                  pathnames.includes("/palmist/change-password")
                    ? "active"
                    : ""
                }
              >
                <Link to="/palmist/change-password">
                  <i className="fas fa-lock" />
                  <span>Change Password</span>
                </Link>
              </li>
              <li className={pathnames.includes("/index-2") ? "active" : ""}>
                <Link to="/index-2">
                  <i className="fas fa-sign-out-alt" />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* /Profile Sidebar */}
    </>
  );
};

export default DoctorSidebar;
