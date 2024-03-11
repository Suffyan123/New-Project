/* eslint-disable react/prop-types */
import React, { useState, useContext, useMemo } from "react";
import config from "config";

import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/header/index";
import Dashboard from "./components/dashboard";
import Appointments from "./components/appointments";
import Specialities from "./components/specialities";
import Doctors from "./components/doctors";
import Patients from "./components/patients";
import Reviews from "./components/reviews";
import Transaction from "./components/transaction";
import Settings from "./components/settings";
import InvoiceReport from "./components/Reports/InvoiceReport/InvoiceReport";
import Profile from "./components/profile/Profile";
import Login from "./components/login";
import Register from "./components/register";
import Error from "./components/error404";
import ErrorPage from "./components/error500";

import { Appcontext } from "../approuter";
import InvoiceReportList from "./components/Reports/InvoiceReport/InvoiceReportList";

const AppUniversal = function (props) {
  const [menu, setMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMenu(!menu);
  };
  const { isAuth, setIsAuth } = useContext(Appcontext);

  const location = props?.location;

  useMemo(() => {
    if (
      location?.pathname == "/admin/login" ||
      location?.pathname == "/admin/register" ||
      location?.pathname == "/admin/forgotPassword" ||
      location?.pathname == "/admin/lockscreen" ||
      location?.pathname == "/admin/conform-email" ||
      location?.pathname == "/admin/404" ||
      location?.pathname == "/admin/500"
    ) {
      setIsAuth("admin");
    } else {
      setIsAuth("user");
    }
  }, [location]);

  return (
    <BrowserRouter basename={`${config.publicPath}`}>
      <div className={`main-wrapper ${menu ? "slide-nav" : ""}`}>
        {isAuth !== "admin" && (
          <Route
            render={(props) => (
              <Header {...props} onMenuClick={() => toggleMobileMenu()} />
            )}
          />
        )}
        <Switch>
          <Route path="/admin/login" exact component={Login} />
          <Route path="/admin/register" exact component={Register} />

          <Route path="/admin" exact component={Dashboard} />
          <Route
            path="/admin/appointment-list"
            exact
            component={Appointments}
          />
          <Route path="/admin/specialities" exact component={Specialities} />
          <Route path="/admin/doctor-list" exact component={Doctors} />
          <Route path="/admin/patient-list" exact component={Patients} />
          <Route path="/admin/reviews" exact component={Reviews} />
          <Route
            path="/admin/transactions-list"
            exact
            component={Transaction}
          />
          <Route path="/admin/settings" exact component={Settings} />
          <Route path="/admin/invoicerepot" exact component={InvoiceReport} />
          <Route path="/admin/invoice" exact component={InvoiceReportList} />

          <Route path="/admin/profile/:id" exact component={Profile} />

          {/* <Route path="/admin/invoice" exact component={Invoice} /> */}

          <Route path="/admin/404" exact component={Error} />
          <Route path="/admin/500" exact component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppUniversal;
