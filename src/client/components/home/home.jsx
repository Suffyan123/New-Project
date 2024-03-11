/* eslint-disable no-constant-condition */
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ban_fift_icon1,
  ban_fift_icon2,
  ban_fift_icon3,
  ban_fift_icon5,
  ban_fift_icon6,
  ban_fift_icon7,
  ban_fift_icon8,
  customer_service_1,
  customer_service_2,

} from "../imagepath.jsx";
import PatientsSection from "./Home/patientsection";
import Header from "../header.jsx";
import ProgressCircle from "./paediatric/scrolltotop.jsx";
import { Howitwork } from "./HomecareHome/howitwork.jsx";
import HomeClinic from "./clinic/index.jsx";
import Feedback from "./cosmetics/feedback.jsx";
import CosmeticFooter from "./cosmetics/cosmeticfooter.jsx";
import Bookdoctor from "./homefourcomponets/bookdoctor.jsx";
import { MdStar } from "react-icons/md";
const Home = (props) => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const [search, setsearch] = useState();
  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper home-fifteen">
        <Header {...props} />
        {/* Home Banner */}
        <section className="banner-section-fifteen">
          <style>
            {`
            @media only screen and (max-width: 767px) {
              
            }
            `}
          </style>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div
                  className="banner-content d-flex gap-md-5 flex-column justify-content-center align-items-sm-center align-items-md-start banner-content-fifteen aos"
                  data-aos="fade-up"
                >
                  <h2>PSYCHIC READERS & ASTROLOGERS</h2>
                  <h1>Welcome to Seeking Answer</h1>
                  <h2 className="">
                    <div className="border d-flex rounded-4 position-relative">
                      <i
                        style={{
                          bottom: "15px",
                          left: "20px",
                        }}
                        className="fa fa-search position-absolute"
                      ></i>
                      <input
                        style={{
                          borderTopRightRadius: "0px",
                          borderBottomRightRadius: "0px",
                          border: "none",
                        }}
                        type="text"
                        className="form-control px-5 rounded-4 "
                        placeholder="Have a question? Ask Now"
                      />

                      <button
                        style={{
                          borderTopLeftRadius: "0px",
                          borderBottomLeftRadius: "0px",
                          border: "none",
                          backgroundColor: "#00C8C8",
                        }}
                        className="btn d-none d-md-block  btn-primary prime-btn justify-content-center align-items-center "
                      >
                        Search
                      </button>
                    </div>
                  </h2>
                  <h2 className="support-consult-main flex-md-column gap-md-3 d-none d-md-flex">
                    <div className="support-consult">
                      <div className="support-consult-img">
                        <img src={customer_service_2} alt="" />
                      </div>
                      <div className="support-consult-right">
                        <h6>24/7 Support</h6>
                        <div className="rating rating-fifteen">
                          <MdStar size={20} color="#fcb851"  />
                          <MdStar size={20} color="#fcb851"  />
                          <MdStar size={20} color="#fcb851"  />
                          <MdStar size={20} color="#fcb851"  />
                          <MdStar size={20} color="gray"  />
                        </div>
                      </div>
                    </div>
                    <div className="support-consult">
                      <div className="support-consult-img">
                        <img src={customer_service_1} alt="" />
                      </div>
                      <div className="support-consult-right">
                        <h6>Online Consultation</h6>
                        <span>Just 60 Secs</span>
                      </div>
                    </div>
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-right-fifteen">
                  {/* <img src={banner_ryt} alt="image" className="img-fluid" /> */}
                  <img src="/BCKG.png" alt="image" className="img-fluid" />
                  <div
                    style={{
                      width: "100px",
                    }}
                    className="banner-right-fifteenone"
                  >
                    <img
                      src={ban_fift_icon1}
                      alt=""
                      className="rounded-circle "
                    />
                  </div>
                  <div
                    style={{
                      width: "80px",
                    }}
                    className="banner-right-fifteentwo"
                  >
                    <img src={ban_fift_icon2} alt="" />
                  </div>
                  <div
                    style={{
                      width: "80px",
                    }}
                    className="banner-right-fifteenthree"
                  >
                    <img src={ban_fift_icon3} alt="" />
                  </div>

                  <div
                    style={{
                      width: "80px",
                    }}
                    className="banner-right-fifteenfive "
                  >
                    <img
                      src={ban_fift_icon5}
                      alt=""
                      className="rounded-circle"
                    />
                  </div>
                  <div
                    style={{
                      width: "80px",
                    }}
                    className="banner-right-fifteensix"
                  >
                    <img src={ban_fift_icon6} alt="" />
                  </div>
                  <div
                    style={{
                      width: "80px",
                    }}
                    className="banner-right-fifteenseven"
                  >
                    <img
                      src={ban_fift_icon7}
                      alt=""
                      className="rounded-circle"
                    />
                  </div>
                  <div
                    style={{
                      width: "auto",
                    }}
                    className="banner-right-fifteeneight"
                  >
                    <img src={ban_fift_icon8} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Howitwork />
        <HomeClinic />
        <Bookdoctor />
        <PatientsSection />
        <Feedback />
        <CosmeticFooter />
        <div
          className="modal fade modal-content-video"
          id="video"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fa fa-times" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="video-home">
                  <video controls="" id="promovideo">
                    <iframe src="https://www.youtube.com/embed/ExJZAegsOis" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ScrollToTop */}
        <div className="progress-wrap active-progress">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919px, 307.919px",
                strokeDashoffset: "228.265" ? "228.265px" : "0.0318383",
              }}
            ></path>
          </svg>
        </div>
        <ProgressCircle />
        {/* /ScrollToTop */}
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default Home;
