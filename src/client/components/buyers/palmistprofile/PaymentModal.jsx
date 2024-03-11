import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { Link } from "react-router-dom";
import { LuArrowRightCircle } from "react-icons/lu";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const PaymentModal = ({ modal2Open, setModal2Open, profileId }) => {
  let history = useHistory();
  const [token, setToken] = useState();
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await JSON.parse(localStorage.getItem("userToken"));
      setToken(data?.userType);
    };
    fetchUserData();
  }, []);
  console.log(profileId);
  const cards = [
    {
      id: 1,
      time: 5,
      price: 19.5,
    },
    {
      id: 2,
      time: 5,
      price: 19.5,
    },
    {
      id: 3,
      time: 5,
      price: 19.5,
    },
  ];

  const [selectedCard, setSelectedCard] = useState(
    Math.floor((cards.length - 1) / 2)
  );
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleCardClick = (index) => {
    setSelectedCard(index);
  };
  const navigate = async () => {
    setModal2Open(false);
    // if (token === "buyer") {
    window.location.href = `${window.location.origin}/buyer/checkout`;
    // } else {
    // history.push("/login");
    // }
  };
  return (
    <>
      <Modal
        centered
        visible={modal2Open}
        // onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        styles={{
          content: {
            borderRadius: "25px",
            backgroundColor: "#ffffff",
          },
        }}
        okButtonProps={{
          disabled: true,
          style: {
            display: "none",
          },
        }}
        cancelButtonProps={{
          disabled: true,
          style: {
            display: "none",
          },
        }}
      >
        <h5
          style={{
            textAlign: "center",
            color: "#000000",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Select chat duration
        </h5>
        <div
          className="row"
          style={{
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <style>
            {`
            /* Default styling for card body */
            .card-body {
              text-align: center;
              background-color: white;
              border-radius: 25px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            }
            
            /* Styling for selected card */
            .card-body.selected {
              background-color: #0E82FD;
              transform: scale(1.2);
              z-index: 2;
              box-shadow: none;
            }
            
            /* Media query for small screens */
            @media only screen and (max-width: 767px) {
              .card-body {
                border-radius: 10px; /* Adjust border-radius for small screens */
                text-align: center;
                background-color: white;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
                transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
              }
            .row{
              gap:40px;
            }
              .card-body.selected {
                transform: scale(1.1);
              }
            }
            
            `}
          </style>
          {cards.map((item, index) => {
            const isSelected = selectedCard === index;
            // console.log(isSelected);
            return (
              <div className="col-md-4" key={index}>
                <div onClick={() => handleCardClick(index)}>
                  <div className={`card-body ${isSelected ? "selected" : ""}`}>
                    <h5 className="time">
                      {item.time}
                      <br />
                      <span className="minutes">minutes</span>
                    </h5>
                    <p>
                      <span className="price">$ {item.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="booking-btn"
          style={{
            marginTop: "3rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          <button
            className="btn btn-primary prime-btn justify-content-center align-items-center"
            onClick={() => navigate()}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              borderRadius: "25px",
              // padding:"auto 30px"
            }}
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
      </Modal>
    </>
  );
};

export default PaymentModal;
