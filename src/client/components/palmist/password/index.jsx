import React from "react";
import Header from "../../header";
import DoctorSidebar from "../sidebar/index";
import StickyBox from "react-sticky-box";
import Footer from "../../footer";

const Password = (props) => {
  return (
    <div>
    <Header {...props} />
    {/* <Breadcrumbs /> */}
    <div className="content">
      <div className="container-fluid">
        <div style={{
            marginTop:"5rem"
          }}  className="row">
          <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar "></div>
          <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar">
            <StickyBox offsetTop={20} offsetBottom={20}>
              <DoctorSidebar />
            </StickyBox>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
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
    <Footer {...props} />
  </div>
  );
};

export default Password;
