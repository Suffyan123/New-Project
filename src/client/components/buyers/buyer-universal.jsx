import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import config from "config";
import BuyerChat from "./chat";
import Dashboard from "./dashboard";
import BuyerAccounts from "./accounts";
import Orders from "./orders";
import Profile from "./dashboard/profile";
import Password from "./dashboard/password";
import Favourties from "./dashboard/favourties";
import BookingSuccess from "./booking-success";
import InvoiceView from "../pages/invoices/view";
import Payment  from "../../../client/components/home/payment"
import Checkout from "./checkout";
// iport Payment

const BuyerUniversal = () => {
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
        <Route path="/buyer/buyer-chat" exact component={BuyerChat} />
        <Route path="/buyer" exact component={Dashboard} />
        <Route path="/buyer/accounts" exact component={BuyerAccounts} />
        <Route path="/buyer/orders" exact component={Orders} />
        <Route path="/buyer/favourites" exact component={Favourties} />
        <Route path="/buyer/payment/:profileId" exact component={Payment} />
        <Route path="/buyer/pages/invoice-view" exact component={InvoiceView} />
        <Route path="/buyer/profile" exact component={Profile} />
        <Route path="/buyer/change-password" exact component={Password} />
        <Route
          path="/buyer/bookingsuccess/:profileId"
          exact
          component={BookingSuccess}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default BuyerUniversal;
