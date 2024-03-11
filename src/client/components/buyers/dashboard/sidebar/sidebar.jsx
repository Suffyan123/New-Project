import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import nawazp from "../../../../assets/images/nazwazp.jpg";
import { Doctor1 } from "../../../home/image";


export const DashboardSidebar = () => {
  const [token, setToken] = useState();
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await JSON.parse(localStorage.getItem("userToken"));
      setToken(data?.user);
    };
    fetchUserData();
  }, []);
  const pathname = window.location.pathname;
  return (
    <div className="profile-sidebar">
      <div className="widget-profile pro-widget-content">
        <div className="profile-info-widget">
          <Link to="#0" className="booking-doc-img">
            <img src={Doctor1} alt="User" />
          </Link>
          <div className="profile-det-info">
            <h3>{token?.name}</h3>
            <div className="buyer-details">
              <h5 className="text-success">active</h5>
              {/* <h5 className="mb-0">
                <i className="fas fa-map-marker-alt"></i> Newyork, USA
              </h5> */}
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-widget">
        <nav className="dashboard-menu">
          <ul>
            <li className={pathname.includes("/buyer") ? "active" : ""}>
              <Link to="/buyer">
                <i className="fas fa-columns"></i>
                <span>Buy Credits</span>
              </Link>
            </li>
            <li className={pathname.includes("/favourites") ? "active" : ""}>
              <Link to="/buyer/favourites">
                <i className="fas fa-bookmark"></i>
                <span>Favourites</span>
              </Link>
            </li>
       
            <li className={`${pathname.includes("/chat-doctor") ? "active" : ""} d-none d-md-block`}>
              <Link to="/buyer/buyer-chat">
                <i className="fas fa-comments"></i>
                <span>Message</span>
                <small className="unread-msg">23</small>
              </Link>
            </li>
            <li className={pathname.includes("/accounts") ? "active" : ""}>
              <Link to="/buyer/accounts">
                <i className="fas fa-file-invoice-dollar"></i>
                <span>Accounts</span>
              </Link>
            </li>
            <li className={pathname.includes("/orders") ? "active" : ""}>
              <Link to="/buyer/orders">
                <i className="fas fa-list-alt"></i>
                <span>Orders</span>
                <small className="unread-msg">7</small>
              </Link>
            </li>

            <li className={pathname.includes("/profile") ? "active" : ""}>
              <Link to="/buyer/profile">
                <i className="fas fa-user-cog"></i>
                <span>Profile Settings</span>
              </Link>
            </li>
            <li
              className={pathname.includes("/change-password") ? "active" : ""}
            >
              <Link to="/buyer/change-password">
                <i className="fas fa-lock"></i>
                <span>Change Password</span>
              </Link>
            </li>
            <li>
              <Link to="/index">
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default DashboardSidebar;
