import React from "react";
import DashboardSidebar from "../dashboard/sidebar/sidebar.jsx";
// import { Modal } from 'react-bootstrap';
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import Header from "../../header";
import Footer from "../../footer";
import CosmeticFooter from "../../home/cosmetics/cosmeticfooter.jsx";

const Orders = (props) => {
  return (
    <>
      <Header {...props} />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5"></div>
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DashboardSidebar
                //  props={patient}
                />
              </StickyBox>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 mt-5">
              <div className="card-body ">
                {/* Dependent Tab */}
                <div className="card card-table mb-0">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Order Id</th>
                            <th>Pharmacy Name</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Amount</th>
                            <th>Payment Gateway</th>
                            <th>Status</th>
                            <th>Order date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>
                              <Link to="/pages/invoice-view">OD1236547890</Link>
                            </td>
                            <td>Medlife Medical</td>
                            <td className="text-center">2</td>
                            <td className="text-center">$150</td>
                            <td>Stripe</td>
                            <td>
                              <span className="badge badge-primary">
                                Order Placed
                              </span>
                            </td>
                            <td>
                              11 Nov 2019{" "}
                              <span className="d-block text-info">
                                10.00 AM
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>
                              <Link to="/pages/invoice-view">OD1236547891</Link>
                            </td>
                            <td>Medlife Medical</td>
                            <td className="text-center">4</td>
                            <td className="text-center">$200</td>
                            <td>Stripe</td>
                            <td>
                              <span className="badge badge-primary">
                                Order Placed
                              </span>
                            </td>
                            <td>
                              3 Nov 2019{" "}
                              <span className="d-block text-info">
                                11.00 AM
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>
                              <Link to="/pages/invoice-view">OD1236547892</Link>
                            </td>
                            <td>Medlife Medical</td>
                            <td className="text-center">1</td>
                            <td className="text-center">$75</td>
                            <td>Stripe</td>
                            <td>
                              <span className="badge badge-primary">
                                Order Placed
                              </span>
                            </td>
                            <td>
                              1 Nov 2019{" "}
                              <span className="d-block text-info">1.00 PM</span>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>
                              <Link to="/pages/invoice-view">OD1236547893</Link>
                            </td>
                            <td>PharmaMed Medical</td>
                            <td className="text-center">2</td>
                            <td className="text-center">$100</td>
                            <td>Paystack</td>
                            <td>
                              <span className="badge badge-warning">
                                Shipped
                              </span>
                            </td>
                            <td>
                              30 Oct 2019{" "}
                              <span className="d-block text-info">9.00 AM</span>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>
                              <Link to="/pages/invoice-view">OD1236547894</Link>
                            </td>
                            <td>PharmaMed Medical</td>
                            <td className="text-center">5</td>
                            <td className="text-center">$350</td>
                            <td>Stripe</td>
                            <td>
                              <span className="badge badge-warning">
                                Shipped
                              </span>
                            </td>
                            <td>
                              28 Oct 2019{" "}
                              <span className="d-block text-info">6.00 PM</span>
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>
                              <Link to="/pages/invoice-view">OD1236547895</Link>
                            </td>
                            <td>The Pill Club Medical</td>
                            <td className="text-center">1</td>
                            <td className="text-center">$250</td>
                            <td>Paypal</td>
                            <td>
                              <span className="badge badge-primary">
                                Order Placed
                              </span>
                            </td>
                            <td>
                              27 Oct 2019{" "}
                              <span className="d-block text-info">8.00 AM</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* /Dependent Tab */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CosmeticFooter />
    </>
  );
};

export default Orders;
