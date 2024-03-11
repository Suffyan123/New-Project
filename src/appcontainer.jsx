/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import config from "config";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginContainer from "./client/components/login/login.jsx";
import Register from "./client/components/register/register.jsx";
import ForgotPassword from "./client/components/forgot-password";

import AppUniversal from "./admin/app-universal";
import Category from "./client/components/category.jsx";
import Home from "./client/components/home/home.jsx";
import PalmistRegister from "./client/components/palmist/register/PaymistRegister.jsx";
import BuyerUniversal from "./client/components/buyers/buyer-universal.jsx";
import PalmistUniversal from "./client/components/palmist/palmist-universal.jsx";
import PalmistProfile from "./client/components/buyers/palmistprofile/index.jsx";
import AllCategory from "./client/components/allCategory.jsx";
import Checkout from "./client/components/buyers/checkout/index.jsx";
const AppContainer = function (props) {
  // const config = "/react/template/";
  if (props) {
    const url = props.location.pathname.split("/")[1];
    useEffect(() => {
      const handleMouseMove = (event) => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (cursorOuter) {
          cursorOuter.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        }

        if (cursorInner) {
          cursorInner.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        }
      };

      const handleMouseEnter = () => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (cursorInner) {
          cursorInner.classList.add("s");
        }

        if (cursorOuter) {
          cursorOuter.classList.add("s");
        }
      };

      const handleMouseLeave = (event) => {
        const cursorInner = document.querySelector(".cursor-inner");
        const cursorOuter = document.querySelector(".cursor-outer");

        if (
          event.target.tagName !== "A" ||
          !event.target.closest(".cursor-pointer")
        ) {
          if (cursorInner) {
            cursorInner.classList.remove("cursor-hover");
          }

          if (cursorOuter) {
            cursorOuter.classList.remove("cursor-hover");
          }
        }
      };

      document.body.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.addEventListener("mouseleave", handleMouseLeave);

      const cursorInner = document.querySelector(".cursor-inner");
      const cursorOuter = document.querySelector(".cursor-outer");

      if (cursorInner) {
        cursorInner.style.visibility = "visible";
      }

      if (cursorOuter) {
        cursorOuter.style.visibility = "visible";
      }

      return () => {
        document.body.removeEventListener("mousemove", handleMouseMove);
        document.body.removeEventListener("mouseenter", handleMouseEnter);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <Router basename={`${config.publicPath}`}>
        {" "}
        {url === "admin" ? (
          <div>
            <Switch>
              <Route path="/admin" component={AppUniversal} />
            </Switch>
          </div>
        ) : url === "palmist" ? (
          <div>
            <Switch>
              <Route path="/palmist" component={PalmistUniversal} />
            </Switch>
          </div>
        ) : url === "buyer" ? (
          <div>
            <Switch>
              <Route path="/buyer" component={BuyerUniversal} />
            </Switch>
          </div>
        ) : (
          <div>
            <Switch>
              {/* seeking website routes */}
              <Route path="/" exact component={Home} />
              <Route path="/category/:id" component={Category} />
              <Route path="/allcategory" component={AllCategory} />
              <Route path="/login" exact component={LoginContainer} />
              <Route path="/register" exact component={Register} />
              <Route
                path="/palmist-register"
                exact
                component={PalmistRegister}
              />{" "}
              <Route
                path="/palmist-profile/:id"
                exact
                component={PalmistProfile}
              />{" "}
            </Switch>
          </div>
        )}
      </Router>
    );
  }
  return null;
};

export default AppContainer;
