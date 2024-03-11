/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
// import FeatherIcon from "feather-icons-react";
import SidebarNav from "../sidebar";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import { avatar01 } from "../imagepath";
import { MdCheckCircle } from "react-icons/md"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const Profile = (props) => {
  const { id } = useParams()
  console.log("recving this id here", id)
  const styleElement = {
    // backgroundcolor:"red",
    // font-size:"50px"
    // color:"red"
    backgroundcolor: "yellow"
  }



  const [data, setData] = useState([]);
  const [myData,setMyData]  =useState([])
  const [isApproved, setIsApproved] = ("block")
  const [clicked, setClicked] = useState(false);
  const { state } = props.location;
  const _id = state;
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };



  const getData = async () => {

    try {
      // console.log("here is id", _id);
      const response = await axios.get(
        `http://localhost:4007/api/getSingleData/${id}`
      );

      console.log("response", response)
      setData(response?.data?.data);
    } catch (error) {
      console.log("error in fetching records", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log("data", setData)


  const handleClick = () => {

    const addApproval = async () => {
      try {
        console.log("_id", _id)
        const response = await axios.patch(
          `http://localhost:4007/api/updateApproval/,${id}`
        );

        console.log("reponse", response);

        let responseStatus = response?.data?.message;
        let approvalStatusCode = response?.status;
        let approvalStatusMsg = response?.data?.data?.approvalStatus;
        if (responseStatus == "Palmist is Approved" && approvalStatusCode == 200 && approvalStatusMsg == "Approved") {
          toast.success(responseStatus)
        }
        else if (responseStatus == "Palmist is already approved" && approvalStatusCode == 203 && approvalStatusMsg == "Approved") {
          toast.error(responseStatus)
        }
      }
      catch (error) {
        console.log("error in fetching records", error);
      }
    }
    addApproval();
  };
  console.log("console", _id);
  return (
    <>
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Profile</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Profile</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              <div className="profile-header">
                <div className="row align-items-center">
                  <div className="col-auto profile-image">
                    <a href="#">
                      <img
                        className="rounded-circle"
                        alt="User Image"
                        src={avatar01}
                      />
                    </a>
                  </div>
                  <div className="col ml-md-n2 profile-user-info">
                    {/* {data && */}
                    {/* data.map((item) => ( */}
                    {/* <div key={item._id}> */}
                    <div style={{ display: "flex", gap: "10px" }}>
                      <h4 className="user-name mb-0">{data.userFirstName+" "+data.userLastName}</h4>
                      <div style={{ paddingTop: "2px" }}>
                        <MdCheckCircle /*style={{styleElement}*/ color={data?.approvalStatus === "Approved" ? "green" : "grey"} size="25px" />
                      </div>
                    </div>
                    <h6 className="text-muted">{data.userEmail}</h6>
                    <div className="user-Location">
                      <i className="fa fa-map-marker" /> Florida, United States
                    </div>
                    <div className="about-text">{/* {data.} */}</div>
                    {/* </div> */}
                    {/* ))} */}
                  </div>
                  {/* <div> */}
                  {/* </div> */}
                  <div className="col-auto profile-btn">
                    <a
                      href="#"
                      className={`btn btn-success ${data?.approvalStatus === "Approved" ? "d-none" : "d-block"}`}
                      onClick={handleClick}
                    // style={{display ? isApproved:"block"}}
                    >
                      Approve
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="profile-menu">
                <ul className="nav nav-tabs nav-tabs-solid">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#per_details_tab"
                    >
                      { }
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#password_tab"
                    >
                      Password
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="tab-content profile-tab-cont">
                {/* Personal Details Tab */}
                <div className="tab-pane fade show active" id="per_details_tab">
                  {/* Personal Details */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title d-flex justify-content-between">
                            <span>Personal Details</span>
                            {/* <a
                              className="edit-link"
                              data-bs-toggle="modal"
                              href="#edit_personal_details"
                            >
                              <i className="fa fa-edit me-1" />
                              Edit
                            </a> */}
                          </h5>

                          <div className="row">
                            <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">
                              Name
                            </p>
                            <p className="col-sm-10">{data.userFirstName+" "+data.userLastName}</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">
                              Date of Birth
                            </p>
                            <p className="col-sm-10">{data.userBirthDate}</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">
                              Email ID
                            </p>
                            <p className="col-sm-10">{data.userEmail}</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted text-sm-end mb-0 mb-sm-3">
                              Mobile
                            </p>
                            <p className="col-sm-10">0345-52938495</p>
                          </div>
                          <div className="row">
                            <p className="col-sm-2 text-muted text-sm-end mb-0">
                              Address
                            </p>
                            <p className="col-sm-10 mb-0">
                              {data.userStreetTwo}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Edit Details Modal */}
                      <div
                        className="modal fade"
                        id="edit_personal_details"
                        aria-hidden="true"
                        role="dialog"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Personal Details</h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="row form-row">
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label>First Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="John"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label>Last Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Doe"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <label>Date of Birth</label>
                                      <div className="cal-icon">
                                        {/* <input
                                          type="text"
                                          className="form-control datetimepicker"
                                          defaultValue="24-07-1983"
                                        /> */}
                                        <DatePicker
                                          className="form-control"
                                          selected={selectedDate1}
                                          onChange={handleDateChange1}
                                          dateFormat="dd/MM/yyyy"
                                          showDayMonthYearPicker
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label>Email ID</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        defaultValue="johndoe@example.com"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label>Mobile</label>
                                      <input
                                        type="text"
                                        defaultValue="+1 202-555-0125"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <h5 className="form-title">
                                      <span>Address</span>
                                    </h5>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <label>Address</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="4663 Agriculture Lane"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label>City</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Miami"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label>State</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="Florida"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label>Zip Code</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={22434}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-6">
                                    <div className="form-group">
                                      <label>Country</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        defaultValue="United States"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-primary w-100"
                                >
                                  Save Changes
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /Edit Details Modal */}
                    </div>
                  </div>
                  {/* /Personal Details */}
                </div>
                {/* /Personal Details Tab */}
                {/* Change Password Tab */}
                <div id="password_tab" className="tab-pane fade">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Change Password</h5>
                      <div className="row">
                        <div className="col-md-10 col-lg-6">
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
                            <button className="btn btn-primary" type="submit">
                              Save Changes
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Change Password Tab */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Page Wrapper */}
    </>
  );
};

export default Profile;
