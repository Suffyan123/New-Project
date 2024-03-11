import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { LuEye } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";
import { greenlogo } from "./imagepath";

import { SiOracle } from "react-icons/si";
import { GiLovers } from "react-icons/gi";
import { PiHandEyeFill } from "react-icons/pi";
import { GiAngelOutfit } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { RiAccountBoxLine } from "react-icons/ri";
import { IoLockOpenOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { RiHome7Line } from "react-icons/ri";
import { GiDreamCatcher } from "react-icons/gi";
import { RiMenu2Fill } from "react-icons/ri";
import { TbSquareDot } from "react-icons/tb";
import Avatar from "react-avatar";
import LoginContainer from "./login/login";
import Register from "./register/register";
const Header = () => {
  const [User, setUser] = useState();
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await JSON.parse(localStorage.getItem("userToken"));
      // console.log(data);
      setUser(data);
    };
    fetchUserData();
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  //mobile menu

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [loginM, setLoginM] = useState(false);
  const [registerM, setRegisterM] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const sidebarItems = [
    {
      icon: RiHome7Line,
      title: "Home",
      link: "/",
      categories: [
        {
          icon: GiLovers,
          title: "Love readings",
          link: "/",
        },
        {
          icon: LuEye,
          title: "Psychic readings",
          link: "/",
        },
        {
          icon: TbSquareDot,
          title: "Tarot readings",
          link: "/",
        },
        {
          icon: BsStars,
          title: "Astrology & Horoscopes",
          link: "/",
        },
        {
          icon: PiHandEyeFill,
          title: "Palm readings",
          link: "/",
        },
        {
          icon: GiAngelOutfit,
          title: "Angel insights",
          link: "/",
        },
        {
          icon: SiOracle,
          title: "Oracle guidance",
          link: "/",
        },
        {
          icon: GiDreamCatcher,
          title: "Dream analysis",
          link: "/",
        },
      ],
      buttons: [
        {
          icon: LuEye,
          title: "Psychic? Apply here",
          link: "/palmist-register",
        },
      ],
    },
  ];
  const logOut = () => {
    localStorage.removeItem("userToken");
    window.location.href = `${window.location.origin}`;
  };
  return (
    <Fragment>
      <header
        style={{
          backgroundColor: "#313233",
        }}
        className={`header z-3  position-fixed top-0 header-fixed header-one `}
      >
        <div className="container ">
          <nav className="navbar h-auto navbar-expand-lg header-nav">
            <div className="d-flex justify-content-between align-items-center gap-4 ">
              <style>
                {`
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  /* Remove bottom: 0 */
  height: 100vh; /* Set height to 100 viewport height */
  color: white;
  z-index: 1000;
  border-bottom-right-radius: 25px;
border-top-right-radius: 25px;
  overflow-y: scroll; /* Enable scrolling for the sidebar content */
  background-color: white;
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar width */
    height: 0; /* Remove scrollbar height */
}
}

  
  .inner-sidebar {
    width: 350px;
  }
  
  /* Media query for small devices */
  @media (max-width: 768px) {
    .inner-sidebar {
      width: 250px; /* Adjust the width for small devices */
    }
  }
  
  `}
              </style>
              <div onClick={openSidebar}>
                <RiMenu2Fill size={30} color="white" />
              </div>
              {sidebarOpen && (
                <div className="sidebar">
                  <div
                    className=" aos p-lg-5 py-2 px-4 inner-sidebar  h-100 bg-white "
                    data-aos="fade-right"
                  >
                    <div className="w-100 d-flex justify-content-end ">
                      <IoMdClose
                        size={40}
                        color="black"
                        onClick={closeSidebar}
                      />
                    </div>
                    <div className="sidebar-content">
                      {sidebarItems.map((item, index) => {
                        return (
                          <div key={index}>
                            <Link
                              onClick={closeSidebar}
                              to={item.link}
                              className="d-flex sidebar-item align-items-center "
                            >
                              <item.icon size={20} />
                              <span className="ms-2">{item.title}</span>
                            </Link>
                            <hr className="border-light border-black" />
                            <div>
                              {item.categories.map((category, index) => (
                                <Link
                                  key={index}
                                  onClick={closeSidebar}
                                  to={category.link}
                                  className="sidebar-item my-lg-5 my-4  d-flex align-items-center "
                                >
                                  <category.icon size={20} />
                                  <span className="ms-2">{category.title}</span>
                                </Link>
                              ))}
                            </div>
                            <hr className="border-light border-black" />
                            <div>
                              {item.buttons.map((button, index) => (
                                <Link
                                  key={index}
                                  onClick={closeSidebar}
                                  to={button.link}
                                  className="sidebar-item d-flex align-items-center "
                                >
                                  <button.icon size={20} />
                                  <span className="ms-2">{button.title}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
              <a
                href={`${window.location.origin}`}
                className="navbar-brand logo"
              >
                <img
                  src={greenlogo}
                  style={{
                    width: "150px",
                    height: "60px",
                  }}
                  alt="Logo"
                />
              </a>
            </div>
            <style>
              {`
                .box-arrow-top {
                  margin-top: 40px;
                }
                 
                .box-arrow-top:after {
                  content: " ";
                  position: absolute;
                  right: 30px;
                  top: -15px;
                  border-top: none;
                  border-right: 15px solid transparent;
                  border-left: 15px solid transparent;
                  border-bottom: 15px solid white;
                }
                `}
            </style>
            {User ? (
              <>
                <div className="d-flex flex space-x-3 ms-md-0 position-relative  ms-auto">
                  <Avatar
                    className="pointer-event "
                    name={User.email}
                    round={true}
                    onClick={() => setShowProfile(!showProfile)}
                    color="#0E82FD"
                    size="40"
                  />
                  <div
                    style={{
                      top: "20px",
                      right: "-25px",
                    }}
                    className={`p-4 ${
                      showProfile
                        ? "d-flex rounded-2 flex-column justify-content-between align-items-center gap-4 "
                        : "visually-hidden"
                    } text-base list-unstyled profile-menu box-arrow-top w-auto position-absolute bg-white border rounded-lg shadow-sm`}
                  >
                    <Avatar
                      name={User.email}
                      round={true}
                      color="#0E82FD"
                      size="80"
                    />
                    <a
                      href={`${window.location.origin}/${User?.userType}`}
                      className="d-block px-4 py-2 d-flex  text-sm text-gray-700 hover-bg-gray-100 dark-hover-bg-gray-600 dark-text-gray-200 dark-hover-text-white"
                    >
                      <RiAccountBoxLine size={20} color="gray" />
                      <span className="ms-2">Dashboard</span>
                    </a>
                    <button
                      onClick={() => logOut()}
                      className="d-block px-4 py-2 text-sm text-gray-700 btn "
                    >
                      <IoLockOpenOutline size={20} color="whitgray" />
                      <span className="ms-2">Log out</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="d-flex justify-content-between align-items-center gap-4">
                <div className="text-center d-none d-sm-block ">
                  <Link
                    onClick={() => setLoginM(!loginM)}
                    to="#"
                    className="btn bg-transparent text-white "
                  >
                    {/* <IoLockOpenOutline size={20} color="white" /> */}
                    <span className="fw-bold">Sign in</span>
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    to="#"
                    onClick={() => setRegisterM(!registerM)}
                    className="btn btn-primary"
                  >
                    {/* <RiAccountBoxLine size={20} color="white" /> */}
                    <span className="fw-bold">Join</span>
                  </Link>
                </div>
              </div>
            )}
          </nav>
        </div>
        <LoginContainer
          loginM={loginM}
          setLoginM={setLoginM}
          registerM={registerM}
          setRegisterM={setRegisterM}
        />
        <Register
          registerM={registerM}
          setRegisterM={setRegisterM}
          loginM={loginM}
          setLoginM={setLoginM}
        />
      </header>
    </Fragment>
  );
};

export default Header;
