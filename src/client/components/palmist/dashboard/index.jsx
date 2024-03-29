import React, { useState, useEffect } from "react";
import DoctorSidebar from "../sidebar";
import { Link } from "react-router-dom";
import Footer from "../../footer";
import ProgressBar from "react-customizable-progressbar";
import StickyBox from "react-sticky-box";
import { Icon01, Icon02, Icon03 } from "./img";
import Breadcrumbs from "../../breadcrumb";
import axios from "axios";
import Header from "../../header";
import UpcomingTab from "./upcomimgtab";
import AppointmentTab from "./appoitmenttab";
import CosmeticFooter from "../../home/cosmetics/cosmeticfooter";
const PalmistDashboard = (props) => {
  const [Doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const docId = localStorage.getItem("token");
  const fetchpatientdata = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4007/api/getDoctorDetail/${docId}`
      );
      setDoctor(response.data);
      // console.log("DOC", response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    // fetchAppointments();
    fetchpatientdata();
  }, []);
  return (
    <div>
      <Header {...props} />
      {/* <Breadcrumbs /> */}
      <div className="content">
        <div className="container-fluid">
          <div style={{
            marginTop:"5rem"
          }} className="row">
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar "></div>
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DoctorSidebar props={Doctor} />
              </StickyBox>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="row">
                <div className="col-md-12">
                  <div
                    style={{
                      margin: "0px",
                    }}
                    className="card dash-card"
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget dct-border-rht">
                            <ProgressBar
                              width={8}
                              radius={40}
                              progress={75}
                              rotate={-183}
                              strokeWidth={6}
                              strokeColor="#da3f81"
                              strokeLinecap="square"
                              trackStrokeWidth={8}
                              trackStrokeColor="#e6e6e6"
                              trackStrokeLinecap="square"
                              pointerRadius={0}
                              initialAnimation={true}
                              transition="1.5s ease 0.5s"
                              trackTransition="0s ease"
                            >
                              <div className="indicator-volume">
                                <img
                                  src={Icon01}
                                  className="img-fluid "
                                  alt="Patient"
                                  style={{
                                    position: "relative",
                                    top: "-83px",
                                    left: "45px",
                                  }}
                                />
                              </div>
                            </ProgressBar>
                            <div
                              className="dash-widget-info"
                              style={{ position: "relative", top: "-18px" }}
                            >
                              <h6>Total Customers</h6>
                              <h3>1500</h3>
                              <p className="text-muted">Till Today</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget dct-border-rht">
                            <ProgressBar
                              width={8}
                              radius={40}
                              progress={65}
                              rotate={-183}
                              strokeWidth={6}
                              strokeColor="#68dda9"
                              strokeLinecap="square"
                              trackStrokeWidth={8}
                              trackStrokeColor="#e6e6e6"
                              trackStrokeLinecap="square"
                              pointerRadius={0}
                              initialAnimation={true}
                              transition="1.5s ease 0.5s"
                              trackTransition="0s ease"
                            >
                              <div className="indicator-volume">
                                <img
                                  src={Icon02}
                                  className="img-fluid"
                                  alt="Patient"
                                  style={{
                                    position: "relative",
                                    top: "-83px",
                                    left: "45px",
                                  }}
                                />
                              </div>
                            </ProgressBar>
                            <div
                              className="dash-widget-info"
                              style={{ position: "relative", top: "-18px" }}
                            >
                              <h6>Today Customers</h6>
                              <h3>160</h3>
                              <p className="text-muted">06, Nov 2019</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget">
                            <ProgressBar
                              width={8}
                              radius={40}
                              progress={50}
                              rotate={-183}
                              strokeWidth={6}
                              strokeColor="#1b5a90"
                              strokeLinecap="square"
                              trackStrokeWidth={8}
                              trackStrokeColor="#e6e6e6"
                              trackStrokeLinecap="square"
                              pointerRadius={0}
                              initialAnimation={true}
                              transition="1.5s ease 0.5s"
                              trackTransition="0s ease"
                            >
                              <div className="indicator-volume">
                                <img
                                  src={Icon03}
                                  className="img-fluid"
                                  alt="Patient"
                                  style={{
                                    position: "relative",
                                    top: "-83px",
                                    left: "45px",
                                  }}
                                />
                              </div>
                            </ProgressBar>
                            <div
                              className="dash-widget-info"
                              style={{ position: "relative", top: "-18px" }}
                            >
                              <h6>Appoinments</h6>
                              <h3>85</h3>
                              <p className="text-muted">06, Apr 2019</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#FEBEBE",
                }}
                className="container d-flex my-4  rounded-4 justify-content-between  align-items-center  p-4 "
              >
                <h4 className="h5 text-danger  fw-medium ">Your balance</h4>
                <h4 className="h5 text-danger  fw-medium ">0.0$</h4>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h4 className="mb-4">Customers Appoinment</h4>
                  <div className="appointment-tab">
                    {/* Appointment Tab */}
                    <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          to="#upcoming-appointments"
                          data-bs-toggle="tab"
                        >
                          Upcoming
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="#today-appointments"
                          data-bs-toggle="tab"
                        >
                          Today
                        </Link>
                      </li>
                    </ul>
                    {/* /Appointment Tab */}
                    <div className="tab-content">
                      {/* Upcoming Appointment Tab */}
                      <UpcomingTab />
                      {/* Today Appointment Tab */}
                      <AppointmentTab />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5"></div>
          </div>
        </div>
      </div>
      <CosmeticFooter/>
    </div>
  );
};

export default PalmistDashboard;
