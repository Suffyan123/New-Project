import React from "react";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import StickyBox from "react-sticky-box";
import Footer from "../../../footer";
import { Link } from "react-router-dom";
import Header from "../../../header.jsx";
import CosmeticFooter from "../../../home/cosmetics/cosmeticfooter.jsx";

const Password = (props) => {
  return (
    <>
      <Header {...props} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5"></div>
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar
                //  props={patient}
                />
              </StickyBox>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 mt-5">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Old Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>New Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Confirm Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5"></div>
          </div>
        </div>
      </div>
      <CosmeticFooter />
    </>
  );
};

export default Password;
