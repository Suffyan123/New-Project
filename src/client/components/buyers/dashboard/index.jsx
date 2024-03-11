/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DashboardSidebar } from "./sidebar/sidebar.jsx";
// import { Tab, Tabs } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG09,
  IMG10,
  doc_1,
} from "./img";
import Dashboard1 from "../../../assets/images/specialities/pt-dashboard-01.png";
import Dashboard2 from "../../../assets/images/specialities/pt-dashboard-02.png";
import Dashboard3 from "../../../assets/images/specialities/pt-dashboard-03.png";
import Dashboard4 from "../../../assets/images/specialities/pt-dashboard-04.png";
import Graph1 from "../../../assets/images/shapes/graph-01.png";
import Graph2 from "../../../assets/images/shapes/graph-02.png";
import Graph3 from "../../../assets/images/shapes/graph-03.png";
import Graph4 from "../../../assets/images/shapes/graph-04.png";
import Header from "../../header.jsx";
import Transaction from "./components/transcation.jsx";
import { toast } from "react-toastify";
import CosmeticFooter from "../../home/cosmetics/cosmeticfooter.jsx";
import Paypal from "../checkout/Paypal.jsx";

const Dashboard = (props) => {
  const [count, setCount] = useState(1, 2, 3, 4);
  const [appointments, setAppointments] = useState([]);
  const [patient, setPatient] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("payPal");
  const [token, setToken] = useState();

  useEffect(() => {}, []);
  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("FormData", values);
    try {
      const response = await axios.post(
        `3005/api/addPayment/:${token._id}`,
        {
          ...values,
          cardName: values.holderName,
          totalBalance: selectedAmount,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data);
        toast.success("Payment successful!");
      } else {
        console.error("Payment failed");
        toast.error("Failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed. Please try again.");
    }
  };
  const paymentsCards = [
    {
      id: 1,
      price: 200,
    },
    {
      id: 2,
      price: 300,
    },
    {
      id: 3,
      price: 400,
    },
    {
      id: 4,
      price: 500,
    },
    {
      id: 5,
      price: 600,
    },
    {
      id: 6,
      price: 800,
    },
    {
      id: 7,
      price: 1000,
    },
    {
      id: 8,
      price: 1200,
    },
  ];
  const handleCardClick = (index, price) => {
    setSelectedCard(index);
    setSelectedAmount(price);
  };
  return (
    <>
      <Header {...props} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5"></div>
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar props={patient} />
              </StickyBox>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 mt-5">
              <div>
                <div className="container  card p-4 ">
                  <h4 className="h3 text-primary-emphasis fw-bolder">
                    Buy Credits
                  </h4>
                  <div
                    style={{
                      backgroundColor: "#FEBEBE",
                    }}
                    className="container d-flex  rounded-4 justify-content-between  align-items-center  p-4 "
                  >
                    <h4 className="h5 text-danger  fw-medium ">Your balance</h4>
                    <h4 className="h5 text-danger  fw-medium ">0.0$</h4>
                  </div>
                </div>

                <div className="row patient-graph-col">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title text-uppercase">
                          Please select an amount
                        </h4>
                      </div>
                      <div className="card-body pt-2 pb-2 mt-1 mb-1">
                        <div className="row card-body gap-0 row-gap-4">
                          {paymentsCards.map((item, index) => {
                            const isSelected = selectedCard === index;
                            return (
                              <>
                                <div
                                  className="col-12 col-md-6 col-lg-4 col-xl-3"
                                  style={{
                                    cursor: "pointer",
                                  }}
                                  key={index}
                                >
                                  <div
                                    onClick={() =>
                                      handleCardClick(index, item.price)
                                    }
                                  >
                                    <div
                                      className="d-flex btn-lg justify-content-between align-items-end"
                                      style={{
                                        textAlign: "center",
                                        backgroundColor: isSelected
                                          ? "#0E82FD"
                                          : "#FFF",
                                        transform: isSelected
                                          ? "scale(1.1)"
                                          : "scale(1)",
                                        zIndex: isSelected ? 2 : 1,
                                        borderRadius: "25px",
                                        boxShadow: !isSelected
                                          ? "0px 0px 10px rgba(0, 0, 0, 0.25)"
                                          : "none", // Add box shadow based on isSelected state
                                        transition:
                                          "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Add a transition for the transform and box-shadow properties
                                      }}
                                    >
                                      <h5
                                        style={{
                                          textAlign: "center",
                                          color: isSelected
                                            ? "#FFFFFF"
                                            : "#000",
                                          fontSize: "1.5rem",
                                          fontWeight: "500",
                                        }}
                                      >
                                        ${item.price}
                                      </h5>
                                      <img
                                        src="/badge-5-min.webp"
                                        className="img-fluid rounded-circle "
                                        width={"50px"}
                                        height={"50px"}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row patient-graph-col">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title text-uppercase">
                          ENTER PROMO CODE
                        </h4>
                      </div>
                      <div className="card-body pt-2 pb-2 mt-1 mb-1">
                        <div className="d-flex justify-content-between flex-wrap gap-3 align-items-center">
                          <div className="d-flex justify-content-between flex-wrap   align-items-center gap-3 ">
                            <input
                              type="name"
                              className="form-control w-100"
                              aria-describedby="PromeCode"
                            />
                            <button className="btn-primary btn-lg">
                              Apply
                            </button>
                          </div>
                          <div className="d-flex justify-content-between  align-items-center gap-3 rounded-2  p-lg-3 bg-light ">
                            <h4>Top-up amount:</h4>
                            <h4 className="h3 fw-bold ">
                              ${selectedAmount ? selectedAmount : "00"}.00
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {selectedAmount && (
                  <div className="row patient-graph-col">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title text-uppercase">Payments Methods</h4>
                        </div>
                        <div className="d-flex justify-content-center align-items-center w-100">
                          <Paypal />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Transaction />
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5"></div>
          </div>
        </div>
      </div>
      {/* <Footer {...props} /> */}
      <CosmeticFooter />
    </>
  );
};

export default Dashboard;
