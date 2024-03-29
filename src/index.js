import React from "react";
import ReactDOM from "react-dom/client";

import AppRouter from "./approuter";
// import * as serviceWorker from './client/serviceWorker';

import "./client/assets/css/bootstrap.min.css";

// boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
//fontawesome

import "react-image-lightbox/style.css";
import "react-datepicker/dist/react-datepicker.css";
// react toast
import "react-toastify/dist/ReactToastify.css";
//carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./client/assets/css/owl.carousel.min.css";

// import './client/assets/css/aos.css'

// if (
//   !window.location.pathname?.includes("admin") &&
//   !window.location.pathname.includes("pharmacyadmin")
// ) {
//   require("./client/assets/css/all.css");
//   require("./client/assets/css/all.min.css");
//   require("./client/assets/css/fontawesome.min.css");
//   require("./client/assets/css/custom.css");
// }
// console.log('window.location.pathname :>> ', window.location.pathname);
if (window.location.pathname.includes("admin")) {
  require("./admin/assets/css/feathericon.min.css");
  require("./admin/assets/js/feather.min.js");
  // require("./admin/assets/plugins/fontawesome/css/fontawesome.min.css");
  require("./admin/assets/plugins/fontawesome/css/all.min.css");
  // require("./admin/assets/plugins/fontawesome/js/fontawesome.min.js");
  require("./admin/assets/css/font-awesome.min.css");
  require("./admin/assets/css/custom.css");
} else {
  require("./client/assets/css/all.css");
  require("./client/assets/css/all.min.css");
  require("./client/assets/css/fontawesome.min.css");
  require("./client/assets/css/custom.css");
  require("../src/client/components/customstyleclient.css");
}
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
// ReactDOM.render(<AppRouter/>, document.getElementById('root'));

// if (module.hot) { // enables hot module replacement if plugin is installed
//  module.hot.accept();
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GoogleOAuthProvider clientId="130911611464-ndp6t0s2h2qssvc2bh8i0mmetsm8nu3n.apps.googleusercontent.com">
      <AppRouter />
      <ToastContainer/>
    </GoogleOAuthProvider>
  </>
);
