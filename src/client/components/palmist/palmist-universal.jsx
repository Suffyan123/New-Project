import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import config from "config";
import MypPatient from "./mypatient";
import PalmistDashboard from "./dashboard";
import ProfileSetting from "./profilesetting";
import Review from "./reviews";
import ScheduleTiming from "./scheduletimings";
import AvailableTiming from "./availabletiming";
import Accounts from "./account";
import PalmistPassword from "./password";
import Appointments from "./appointments";
import PalmistChat from "./chat";
import Invoices from "../pages/invoices/invoices";

const PalmistUniversal = () => {
  return (
    <BrowserRouter basename={`${config.publicPath}`}>
        {/* {isAuth !== "admin" && (
        <Route
          render={(props) => (
            <Header {...props} onMenuClick={() => toggleMobileMenu()} />
          )}
        />
      )} */}
        <Switch>
            <Route path="/palmist/orders" exact component={MypPatient} />{" "}
              <Route
                path="/palmist"
                exact
                component={PalmistDashboard}
              />{" "}
              <Route
                path="/palmist/profile-setting"
                exact
                component={ProfileSetting}
              />
              <Route path="/palmist/review" exact component={Review} />{" "}
              <Route
                path="/palmist/schedule-timing"
                exact
                component={ScheduleTiming}
              />
              <Route path="/palmist/pages/invoice" exact component={Invoices} />
              <Route
                path="/palmist/available-timing"
                exact
                component={AvailableTiming}
              />
              <Route path="/palmist/account" exact component={Accounts} />
              <Route
                path="/palmist/change-password"
                exact
                component={PalmistPassword}
              />
              <Route
                path="/palmist/appointments"
                exact
                component={Appointments}
              />
              <Route
                path="/palmist/chat-palmist"
                exact
                component={PalmistChat}
              />
        </Switch>
    </BrowserRouter>
  );
};

export default PalmistUniversal;
