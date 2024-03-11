export  const background_lv5=" #ffffffd9"
export  const background_lv4="#ffffff"
export  const background_lv3="#9fc5e8"
export  const background_lv2="#38761d"
export  const background_lv1="#073763"
export  const FC_lv5="#000000"
export  const FC_lv4="#ffffff"
export  const FC_lv3="#9fc5e8"
export  const FC_lv2="#38761d"
export  const FC_lv1="#073763"
export  const FW_lv5="800"
export  const FW_lv4="700"
export  const FW_lv3="600"
export  const FW_lv2="500"
export  const FW_lv1="400"



                  {/* Doctor dropdown */}
                  <li
                    className={`has-submenu ${
                      url.includes("/doctor") ? "active" : ""
                    }`}
                  >
                    <Link
                      to="#"
                      className={
                        isSideMenu == "doctors" ? "subdrop " : "text-white"
                      }
                      onMouseEnter={() =>
                        toggleSidebar(
                          isSideMenu == "doctors" ? "submenu" : "doctors"
                        )
                      }
                    >
                      Doctors <i className="fas fa-chevron-down" />
                    </Link>
                    {isSideMenu == "doctors" ? (
                      <ul
                        className={`${
                          isSideMenu == "doctors"
                            ? "submenu d-block"
                            : "submenu"
                        }`}
                      >
                        <li
                          className={
                            pathnames.includes("doctor-dashboard")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/doctor-dashboard"
                            onClick={() => onhandleCloseMenu()}
                          >
                            DashBoard
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("doctor-dashboard")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/doctor-register"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Join as Individual
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("doctor-dashboard")
                              ? "active"
                              : ""
                          }
                        >
                          <Link to="/" onClick={() => onhandleCloseMenu()}>
                            Join as Office
                          </Link>
                        </li>

                        <li
                          className={
                            pathnames.includes("doctor-dashboard")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/doctor-dashboard"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Doctor Dashboard
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("appointments") ? "active" : ""
                          }
                        >
                          <Link
                            to="/doctor/appointments"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Appointments
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("schedule-timing")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/schedule-timing"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Schedule Timing
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("my-patients") ? "active" : ""
                          }
                        >
                          <Link
                            to="/doctor/my-patients"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Patients List
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("patient-profile")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/patient-profile"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Patients Profile
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("chat-doctor") ? "active" : ""
                          }
                        >
                          <Link
                            to="/doctor/chat-doctor"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Chat
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("invoice") ? "active" : ""
                          }
                        >
                          <Link
                            to="/doctor/invoice"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Invoices
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("profile-setting")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/profile-setting"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Profile Settings
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("review") ? "active" : ""
                          }
                        >
                          <Link
                            to="/doctor/review"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Reviews
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("doctor-register")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/doctor/doctor-register"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Doctor Register
                          </Link>
                        </li>
                        <li
                          className={`has-submenu ${
                            pathnames.includes("doctor-blog") ? "active" : ""
                          }`}
                        >
                          <Link
                            to="/doctor-blog"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Blog
                          </Link>
                          <ul className="submenu">
                            <li>
                              <Link
                                to="/doctor-blog"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Blog
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/blog/blog-details"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Blog view
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/blog/doctor-add-blog"
                                onClick={() => onhandleCloseMenu()}
                              >
                                Add Blog
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                  {/* Patient dropdown */}
                  <li
                    className={`has-submenu ${
                      url.includes("/patient") ? "active" : ""
                    }`}
                  >
                    <Link
                      to="#"
                      className={
                        isSideMenu == "patients" ? "subdrop" : "text-white"
                      }
                      onMouseEnter={() =>
                        toggleSidebar(
                          isSideMenu == "patients" ? "submenu" : "patients"
                        )
                      }
                    >
                      Patients <i className="fas fa-chevron-down" />
                    </Link>
                    {isSideMenu == "patients" ? (
                      <ul
                        className={`${
                          isSideMenu == "patients"
                            ? "submenu d-block"
                            : "submenu"
                        }`}
                      >
                        <li
                          className={
                            pathnames.includes("doctor-profile") ? "active" : ""
                          }
                        >
                          <Link
                            to="/patient/dashboard"
                            onClick={() => onhandleCloseMenu()}
                          >
                            DashBoard
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("doctor-profile") ? "active" : ""
                          }
                        >
                          <Link to="/" onClick={() => onhandleCloseMenu()}>
                            Top Doctor
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("doctor-profile") ? "active" : ""
                          }
                        >
                          <Link to="/" onClick={() => onhandleCloseMenu()}>
                            Help
                          </Link>
                        </li>
                        {/* <li
                          className={`has-submenu ${pathnames.includes("doctor") &&
                            !pathnames.includes("doctor-profile") &&
                            !pathnames.includes("search-doctor")
                            ? "active"
                            : ""
                            }`}
                        >
                          <Link
                            to="#0"
                            className={
                              isSideMenutwo == "doctor" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebartwo(
                                isSideMenutwo == "doctor" ? "" : "doctor"
                              )
                            }
                          >
                            Doctors{" "}
                          </Link>
                          {isSideMenutwo == "doctor" ? (
                            <ul
                              className={
                                isSideMenutwo == "doctor"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
                              <li
                                className={
                                  pathnames.includes("doctor-grid")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/patient/doctor-grid"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Map Grid
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("doctor-list")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/patient/doctor-list"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Map List
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li
                          className={`has-submenu ${pathnames.includes("search-doctor") &&
                            !pathnames.includes("doctor-profile") &&
                            !pathnames.includes("search-doctor")
                            ? "active"
                            : ""
                            }`}
                        >
                          <Link
                            to="#0"
                            className={
                              isSideSearch == "search-doctor" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebarsearch(
                                isSideSearch == "search-doctor"
                                  ? ""
                                  : "search-doctor"
                              )
                            }
                          >
                            Search Doctor{" "}
                          </Link>
                          {isSideSearch == "search-doctor" ? (
                            <ul
                              className={
                                isSideSearch == "search-doctor"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
                              <li
                                className={
                                  pathnames.includes("search-doctor1")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/patient/search-doctor1"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Search Doctor 1
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("search-doctor2")
                                    ? "active"
                                    : ""
                                }
                              >
                                <Link
                                  to="/patient/search-doctor2"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Search Doctor 2
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li>
                        <li
                          className={
                            pathnames.includes("doctor-profile") ? "active" : ""
                          }
                        >
                          <Link
                            to="/patient/doctor-profile"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Doctor Profile
                          </Link>
                        </li>
                        <li
                          className={`has-submenu ${pathnames.includes("booking") &&
                            !pathnames.includes("booking-success")
                            ? "active"
                            : ""
                            }`}
                        >
                          <Link
                            to="#0"
                            className={
                              isSidebooking == "booking" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebarbooking(
                                isSidebooking == "booking" ? "" : "booking"
                              )
                            }
                          >
                            Booking
                          </Link>
                          {isSidebooking == "booking" ? (
                            <ul
                              className={
                                isSidebooking == "booking"
                                  ? "submenu d-block"
                                  : "submenu"
                              }
                            >
                              <li
                                className={
                                  pathnames.includes("booking1") ? "active" : ""
                                }
                              >
                                <Link
                                  to="/patient/booking1"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Booking 1
                                </Link>
                              </li>
                              <li
                                className={
                                  pathnames.includes("booking2") ? "active" : ""
                                }
                              >
                                <Link
                                  to="/patient/booking2"
                                  onClick={() => onhandleCloseMenu()}
                                >
                                  Booking 2
                                </Link>
                              </li>
                            </ul>
                          ) : (
                            ""
                          )}
                        </li> */}
                        {/* <li className={pathnames.includes("booking") && !pathnames.includes("booking-success") ? "active" : ""}>
                          <Link to="/patient/booking1" onClick={() => onhandleCloseMenu()}>Booking</Link>
                        </li> */}
                        {/* <li
                          className={
                            pathnames.includes("checkout") ? "active" : ""
                          }
                        >
                          <Link
                            to="/patient/checkout"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Checkout
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("booking-success")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/patient/booking-success"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Booking Success
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("dashboard") ? "active" : ""
                          }
                        >
                          <Link
                            to="/patient/dashboard"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Patient Dashboard
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("favourites") ? "active" : ""
                          }
                        >
                          <Link
                            to="/patient/favourites"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Favourites
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("patient-chat") ? "active" : ""
                          }
                        >
                          <Link
                            to="/patient/patient-chat"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Chat
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("profile") &&
                              !pathnames.includes("doctor-profile")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/patient/profile"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Profile Settings
                          </Link>
                        </li>
                        <li
                          className={
                            pathnames.includes("change-password")
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to="/patient/change-password"
                            onClick={() => onhandleCloseMenu()}
                          >
                            Change Password
                          </Link>
                        </li> */}
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                         