/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import {
  fifteen_bg_icon3,
  patients_img_fifteen,
  we_are_icon1,
  we_are_icon2,
  we_are_icon3,
} from "../../imagepath";
import { PiHandEyeFill } from "react-icons/pi";
const PatientsSection = () => {
  //Aos

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      {/* Patients Section */}
      <div className="Patients-section-fifteen">
        <div className="patient-fifteen-icon">
          <img src={fifteen_bg_icon3} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="patients-left-front patients-left-img">
                <img src={patients_img_fifteen} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header-fifteen section-header-fifteenpatient">
                <h2>
                  Who <span>We Are</span>
                </h2>
                <p>
                  Have you ever wondered why certain patterns reoccur throughout
                  your life? Do you struggle to make sense of why particular
                  relationships or circumstances are particularly challenging
                  for you? Do you ever compare your personality and traits to
                  others and wonder why they don’t quite match up? How can you
                  best approach situations in the future?
                </p>
              </div>
              <p>
                Our exclusive list of psychics advisors whom our users
                acknowledged as being most accurate in their advice and
                guidance. These advisors who are ready to enlighten, inspire,
                and empower you – are all vetted and voted for by people like
                you. Our top-accuracy advisors cover a wide range of services
                including love readings, mediumship, tarot cards, career advice,
                and more.
              </p>
              <p>
                Our exclusive list of psychics advisors whom our users
                acknowledged as being most accurate in their advice and
                guidance. These advisors who are ready to enlighten, inspire,
                and empower you – are all vetted and voted for by people like
                you. Our top-accuracy advisors cover a wide range of services
                including love readings, mediumship, tarot cards, career advice,
                and more.
              </p>
              <div className="row">
                <div className="col-md-4">
                  <div className="service-patient-inflict">
                    <div className="service-patient-inflictimg">
                      <span>
                        {/* <img src={we_are_icon1} alt="" /> */}
                        <PiHandEyeFill size={60} color="#FFAF14"/>
                      </span>
                    </div>
                    <div className="clients-fifteen-span">
                      <h3 className="counter-up">
                        <CountUp end={500} duration={5} />
                        <span>+</span>
                      </h3>
                    </div>
                    <h6>Readings</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-patient-inflict">
                    <div className="service-patient-inflictimg">
                      <span>
                        <img src={we_are_icon2} alt="" />
                      </span>
                    </div>
                    <div className="clients-fifteen-span">
                      <h3 className="counter-up">
                        <CountUp end={50000} duration={5} />
                        <span>+</span>
                      </h3>
                    </div>
                    <h6>Happy Customers</h6>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-patient-inflict">
                    <div className="service-patient-inflictimg">
                      <span>
                        <img src={we_are_icon3} alt="" />
                      </span>
                    </div>
                    <div className="clients-fifteen-span">
                      <h3 className="counter-up">
                        <CountUp end={10} duration={5} />
                        <span>+</span>
                      </h3>
                    </div>
                    <h6>Years of Service</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Patients Section */}
    </>
  );
};
export default PatientsSection;
