import React from "react";
import {
  Chart_arrow_01,
  Chart_arrow_02,
  Flow_chart_icon_01,
  Flow_chart_icon_02,
  Flow_chart_icon_03,
  Flow_chart_icon_04,
} from "../../imagepath";
import { FaDesktop } from "react-icons/fa";import { FcBusinesswoman } from "react-icons/fc";import { ImHappy } from "react-icons/im";
export const Howitwork = () => {
  return (
    <div>
             <style>
            {`
            @media only screen and (max-width: 767px) {
      .diffCircle{
        margin-left:-10%;
      }
            }
            `}
          </style>
      <div className="how-it-work-fourteen">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-xl-5 col-lg-4">
              <div
                className="section-work-head text-md-start text-center"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <span>Book best caregiver</span>
                <h2>How it works &amp; Booking</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 ">
              <ul className="work-flow-chart d-flex flex-wrap  align-items-center justify-content-center  align-items-md-center">
                <li data-aos="fade-up" data-aos-delay={500}>
                  <img src={Chart_arrow_01} alt="Img" />
                  <div className="flow-chart-list">
                    <span className="chart-icon">
                    <FaDesktop size={40} color="#0E82FD" />
                    </span>
                    <h6>Visit</h6>
                    <span className="chart-count">01</span>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={600}>
                  <img src={Chart_arrow_01} alt="Img" />
                  <div className="flow-chart-list bg-yelllow">
                    <span className="chart-icon">
                      <img src={Flow_chart_icon_02} alt="Img" />
                    </span>
                    <h6>Booking</h6>
                    <span className="chart-count">02</span>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={700}>
                  <img src={Chart_arrow_01} alt="Img" />
                  <div className="flow-chart-list">
                    <span className="chart-icon">
                      {/* <img src={Flow_chart_icon_03} alt="Img" /> */}
                      <FcBusinesswoman size={40} color="#0E82FD" />
                    </span>
                    <h6>Get Reading</h6>
                    <span className="chart-count">03</span>
                  </div>
                </li>
                <li data-aos="fade-up diffCircle" data-aos-delay={800}>
                  <img src={Chart_arrow_02} alt="Img" />
                  <div className="flow-chart-list bg-yelllow">
                    <span className="chart-icon">
                      {/* <img src={Flow_chart_icon_04} alt="Img" /> */}
                      <ImHappy size={40} color="#FFAF14"/>
                    </span>
                    <h6>Takecare</h6>
                    <span className="chart-count">04</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
