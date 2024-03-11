import React from "react";
import { Link } from "react-router-dom";
import {
  Doctor1,
  Doctor2,
  Doctor3,
  Doctor4,
  // consult,
  exper,
  mapplus,
} from "../image";
import { LuPhone } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FcVideoCall } from "react-icons/fc";
import { useLandingPageStore } from "../../../../store/landingStore";
import { useUserStore } from "../../../../store/userStore";
function Bookdoctor() {
  const { allAdvisors } = useLandingPageStore();
  const { User } = useUserStore();
  const profiles = allAdvisors?.slice(0, 4);
 

  // const Doctor1 = "/public/doctor-demo-image.jpg";
  // const Doctor2 = "/public/doctor-demo-image.jpg";
  // const Doctor3 = "/public/doctor-demo-image.jpg";
  // const Doctor4 = "/public/doctor-demo-image.jpg";
  return (
    <section className="book-section">
      <style>
        {`
       @media only screen and (max-width: 767px) {
        .book-section {
          margin-top: -60%;
        }
       }
        `}
      </style>
      <div className="container">
        <div className="container text-md-start text-center k-container">
          <h2>Book Our Best Consultant</h2>
          <p className="sub-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row h-auto ">
          {profiles && profiles?.map((item, key) => (
            <>
              <div
                key={key}
                style={{
                  minHeight: "100%",
                  maxHeight: "auto",
                }}
                className="col-lg-3 col-md-6 aos"
              >
                <div className="book-best-doctors h-auto ">
                  <div className="book-header position-relative ">
                    <img src={item.image} alt="" className="img-fluid" />
                    {User && (
                      <div
                        style={{
                          zIndex: "50px",
                        }}
                        className="img-overlay p-1 k-img-icon-overlay"
                      >
                        <FaHeart className="k-heart-icon" />
                      </div>
                     )} 
                    <div className="k-img-btn-overlay">
                      <span>{item.status}</span>
                    </div>
                  </div>
                  <Link to={`/palmist-profile/${item.id}`}>
                    <div
                      style={{
                        minHeight: "350px",
                        maxHeight: "max-content",
                      }}
                      className="doctors-body d-flex justify-content-between flex-column  "
                    >
                      <div className="inner-section">
                        <span className="float-start text-capitalize ">
                          {item.category}
                        </span>
                        <div className="rating text-end">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-ratings ms-1">
                            3.5
                          </span>
                        </div>
                        <h4>{item.name}</h4>
                        <span
                          style={{
                            color: "gray",
                          }}
                          className="text-capitalize"
                        >
                          {item.description}
                        </span>
                      </div>
                  <div>
                  <div className="row row-sm loc-details">
                        <div className="col-6">
                          <div className="d-flex align-items-center">
                            <Link to="#">
                              <img src={mapplus} alt="" />
                            </Link>
                            <Link to="#">
                              <span className="available-info">Level</span>
                              <span className="data-info">{item.level}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="d-flex align-items-center">
                            <Link to="#">
                              <img src={exper} alt="" />
                            </Link>
                            <Link to="#">
                              <span className="available-info">EXPERIENCE</span>
                              <span className="data-info">
                                {item.experience}+ Years
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="row row-sm align-items-center p-3">
                        <div className="k-col-6">
                          <FiMessageCircle className="amt-txt" />
                          <LuPhone className="amt-txt" />
                          <FcVideoCall size={30} className="amt-txt" />
                        </div>
                        <div
                          style={{
                            color: "black",
                          }}
                          className="col-6"
                        >
                          from{" "}
                          <span
                            style={{
                              fontWeight: "bold",
                              fontSize:"15px"
                            }}
                          >
                            $4.59/min
                          </span>
                        </div>
                      </div>
                  </div>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="view-all-more text-center aos">
          <Link to="/allcategory" className="btn btn-primary">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Bookdoctor;
