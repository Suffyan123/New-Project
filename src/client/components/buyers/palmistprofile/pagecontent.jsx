import React, { useState } from "react";
// import { IMG01, IMG02 } from "./img";
// import {
//   Doctor1,
//   Doctor2,
//   Doctor3,
//   Doctor4,
//   consult,
//   exper,
//   mapplus,
// } from "../../home/image";
// import MyComponent from "./mycomponent";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuPhone, LuUpload } from "react-icons/lu";
import { FcVideoCall } from "react-icons/fc";
import { FiMessageCircle } from "react-icons/fi";
import { LuArrowRightCircle } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import PaymentModal from "./PaymentModal";
import { doctorthumb02 } from "../../imagepath";
const Pagecontent = ({ data }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div>
        <div className="card">
          <div className="card-body">
            <div className="doctor-widget">
              <div className="doc-info-left d-flex flex-column justify-content-center align-items-center flex-md-row gap-4 ">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  className="position-relative"
                >
                  <img
                    src={data?.image}
                    style={{
                      borderRadius: "10%",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    className="h-100"
                    alt="User Image"
                  />
                  <div
                    style={{
                      bottom: "-12px",
                    }}
                    className="position-absolute w-100  d-flex justify-content-center  align-items-center "
                  >
                    <div
                      style={{
                        position: "static",
                        width: "auto",
                      }}
                      className="k-img-btn-overlay"
                    >
                      <span>{data?.status}</span>
                    </div>
                  </div>
                </div>
                <div className="doc-info-cont">
                  <h4 className="doc-name">{data?.name}</h4>
                  <p className="doc-speciality">{data?.description}</p>
                  <div
                    className="consultation-list d-flex flex-column justify-content-center align-items-center"
                    style={{
                      marginTop: "3rem",
                    }}
                  >
                    <ul>
                      <li>
                        <div className="consultation-types active">
                          <Link to="#">
                            <FcVideoCall
                              size={30}
                              className="amt-txt"
                              style={{
                                marginRight: "10px",
                              }}
                            />
                            Video Consulting
                          </Link>
                          {/* <span>
                            <i className="fas fa-circle-check" />
                          </span> */}
                        </div>
                      </li>
                      <li>
                        <div className="consultation-types">
                          <Link to="#">
                            <LuPhone
                              size={30}
                              className="amt-txt"
                              style={{
                                marginRight: "10px",
                              }}
                            />
                            Audio Consulting
                          </Link>
                          <span>
                            <i className="fas fa-circle-check" />
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="consultation-types">
                          <Link to="#">
                            <FiMessageCircle
                              size={30}
                              className="amt-txt"
                              style={{
                                marginRight: "10px",
                              }}
                            />
                            Chat Consulting
                          </Link>
                          <span>
                            <i className="fas fa-circle-check" />
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div
                      className="booking-btn"
                      style={{
                        marginTop: "3rem",
                        marginBottom: "3rem",
                      }}
                    >
                      <button
                        className="btn btn-primary prime-btn justify-content-center align-items-center"
                        onClick={() => setModal2Open(true)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        Next{" "}
                        <LuArrowRightCircle
                          size={15}
                          style={{
                            marginLeft: "5px",
                            color: isHovered ? "#0E82FD" : "#FFFF",
                          }}
                        />
                      </button>
                    </div>
                  </div>

                  <PaymentModal
                    modal2Open={modal2Open}
                    setModal2Open={setModal2Open}
                    profileId={data.id}
                  />
                </div>
              </div>
              <div className="doc-info-right d-flex justify-content-between align-items-center align-items-md-start ">
                <FaRegBell size={30} color="black" />
                <FaRegHeart size={30} color="black" />
                <LuUpload size={30} color="black" />
                <div className="">
                  <MdStar size={20} color="#fcb851" />
                  <span className="d-inline-block average-rating ms-1">
                    (35)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade call-modal" id="voice_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Outgoing Call */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img
                        alt="User Image"
                        src={doctorthumb02}
                        className="call-avatar"
                      />
                      <h4>Dr. Darren Elder</h4>
                      <span>Connecting...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">call_end</i>
                      </Link>
                      <Link
                        to="/pages/voice-call"
                        className="btn call-item call-start"
                      >
                        <i className="material-icons">call</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Outgoing Call */}
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Incoming Call */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <img
                        className="call-avatar"
                        src={doctorthumb02}
                        alt="User Image"
                      />
                      <h4>Dr. Darren Elder</h4>
                      <span>Calling ...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="material-icons">call_end</i>
                      </Link>
                      <Link
                        to="/pages/video-call"
                        className="btn call-item call-start"
                      >
                        <i className="material-icons">videocam</i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Incoming Call */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagecontent;
