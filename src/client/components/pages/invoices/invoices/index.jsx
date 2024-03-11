import React from "react";
import { Link } from "react-router-dom";
import {
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG09,
  IMG010,
  IMG011,
} from "./img";
import InvoiceSidebar from "../sidebar.jsx";
import Footer from "../../../footer";
import Header from "../../../header";
import StickyBox from "react-sticky-box";
import DoctorSidebar from "../../../palmist/sidebar/index.jsx";

const Invoices = (props) => {
  return (
    <div>
      <Header {...props} />
      {/* <Breadcrumbs /> */}
      <div className="content">
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar "></div>
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DoctorSidebar />
              </StickyBox>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="card-body">
                {/* Invoice Table */}
                <div className="table-responsive">
                  <table className="table table-hover table-center mb-0">
                    <thead style={{ borderBottom: "none" }}>
                      <tr>
                        <th>Invoice No</th>
                        <th>Patient</th>
                        <th>Amount</th>
                        <th>Paid On</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody style={{ borderTop: "none" }}>
                      <tr>
                        <td>
                          <Link to="/pages/invoice-view">#INV-0010</Link>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={IMG02}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/patient-profile">
                              Richard Wilson <span>#PT0016</span>
                            </Link>
                          </h2>
                        </td>
                        <td>$450</td>
                        <td>14 Nov 2019</td>
                        <td className="text-end">
                          <div className="table-action">
                            <Link
                              to="/pages/invoice-view"
                              className="btn btn-sm bg-info-light"
                              style={{ marginRight: "5px" }}
                            >
                              <i className="far fa-eye" /> View
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/pages/invoice-view">#INV-0009</Link>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={IMG03}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/patient-profile">
                              Charlene Reed <span>#PT0001</span>
                            </Link>
                          </h2>
                        </td>
                        <td>$200</td>
                        <td>13 Nov 2019</td>
                        <td className="text-end">
                          <div className="table-action">
                            <Link
                              to="/pages/invoice-view"
                              className="btn btn-sm bg-info-light"
                              style={{ marginRight: "5px" }}
                            >
                              <i className="far fa-eye" /> View
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/pages/invoice-view">#INV-0008</Link>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={IMG04}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/patient-profile">
                              Travis Trimble <span>#PT0002</span>
                            </Link>
                          </h2>
                        </td>
                        <td>$100</td>
                        <td>12 Nov 2019</td>
                        <td className="text-end">
                          <div className="table-action">
                            <Link
                              to="/pages/invoice-view"
                              className="btn btn-sm bg-info-light"
                              style={{ marginRight: "5px" }}
                            >
                              <i className="far fa-eye" /> View
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/pages/invoice-view">#INV-0007</Link>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={IMG05}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/patient-profile">
                              Carl Kelly <span>#PT0003</span>
                            </Link>
                          </h2>
                        </td>
                        <td>$350</td>
                        <td>11 Nov 2019</td>
                        <td className="text-end">
                          <div className="table-action">
                            <Link
                              to="/pages/invoice-view"
                              className="btn btn-sm bg-info-light"
                              style={{ marginRight: "5px" }}
                            >
                              <i className="far fa-eye" /> View
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/pages/invoice-view">#INV-0006</Link>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={IMG06}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/patient-profile">
                              Michelle Fairfax <span>#PT0004</span>
                            </Link>
                          </h2>
                        </td>
                        <td>$275</td>
                        <td>10 Nov 2019</td>
                        <td className="text-end">
                          <div className="table-action">
                            <Link
                              to="/pages/invoice-view"
                              className="btn btn-sm bg-info-light"
                              style={{ marginRight: "5px" }}
                            >
                              <i className="far fa-eye" /> View
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/pages/invoice-view">#INV-0005</Link>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={IMG07}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/patient-profile">
                              Gina Moore <span>#PT0005</span>
                            </Link>
                          </h2>
                        </td>
                        <td>$600</td>
                        <td>9 Nov 2019</td>
                        <td className="text-end">
                          <div className="table-action">
                            <Link
                              to="/pages/invoice-view"
                              className="btn btn-sm bg-info-light"
                              style={{ marginRight: "5px" }}
                            >
                              <i className="far fa-eye" /> View
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/pages/invoice-view">#INV-0004</Link>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={IMG08}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/patient-profile">
                              Elsie Gilley <span>#PT0006</span>
                            </Link>
                          </h2>
                        </td>
                        <td>$50</td>
                        <td>8 Nov 2019</td>
                        <td className="text-end">
                          <div className="table-action">
                            <Link
                              to="/pages/invoice-view"
                              className="btn btn-sm bg-info-light"
                              style={{ marginRight: "5px" }}
                            >
                              <i className="far fa-eye" /> View
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/pages/invoice-view">#INV-0003</Link>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={IMG09}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/patient-profile">
                              Joan Gardner <span>#PT0007</span>
                            </Link>
                          </h2>
                        </td>
                        <td>$400</td>
                        <td>7 Nov 2019</td>
                        <td className="text-end">
                          <div className="table-action">
                            <Link
                              to="/pages/invoice-view"
                              className="btn btn-sm bg-info-light "
                              style={{ marginRight: "5px" }}
                            >
                              <i className="far fa-eye" /> View
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/pages/invoice-view">#INV-0002</Link>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={IMG010}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/patient-profile">
                              Daniel Griffing <span>#PT0008</span>
                            </Link>
                          </h2>
                        </td>
                        <td>$550</td>
                        <td>6 Nov 2019</td>
                        <td className="text-end">
                          <div className="table-action">
                            <Link
                              to="/pages/invoice-view"
                              className="btn btn-sm bg-info-light"
                              style={{ marginRight: "5px" }}
                            >
                              <i className="far fa-eye" /> View
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Link to="/pages/invoice-view">#INV-0001</Link>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="/patient-profile"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src={IMG011}
                                alt="User Image"
                              />
                            </Link>
                            <Link to="/patient-profile">
                              Walter Roberson <span>#PT0009</span>
                            </Link>
                          </h2>
                        </td>
                        <td>$100</td>
                        <td>5 Nov 2019</td>
                        <td className="text-end">
                          <div className="table-action">
                            <Link
                              to="/pages/invoice-view"
                              className="btn btn-sm bg-info-light"
                              style={{ marginRight: "5px" }}
                            >
                              <i className="far fa-eye" /> View
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-sm bg-primary-light"
                            >
                              <i className="fas fa-print" /> Print
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /Invoice Table */}
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5"></div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Invoices;
