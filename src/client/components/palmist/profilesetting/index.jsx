/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DoctorSidebar from "../sidebar/index";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Header from "../../header";
import { Doctor1 } from "../../home/image.jsx";
import Pagecontent from "./pagecontent.jsx";
import CosmeticFooter from "../../home/cosmetics/cosmeticfooter.jsx";

const ProfileSetting = (props) => {
  // const [gender, setGender] = useState([
  //   { id: 1, text: "Select" },
  //   { id: 2, text: "Male" },
  //   { id: 3, text: "Female" },
  // ]);

  return (
    <>
        <div>
          <Header {...props} />
          <div className="content">
            <div className="container-fluid">
              <div
                style={{
                  marginTop: "5rem",
                }}
                className="row"
              >
                <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar "></div>
                <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                    <DoctorSidebar />
                  </StickyBox>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="card">
                    <div className="content">
                      <div className="container">
                        <Pagecontent  />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5"></div>
                </div>
              </div>
            </div>
           <CosmeticFooter/>
          </div>
        </div>
    </>
  );
};

export default ProfileSetting;
