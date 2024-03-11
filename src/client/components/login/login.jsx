import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import { greenlogo } from "../imagepath";
import { Formik, Form, FastField, ErrorMessage } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import * as Yup from "yup";
import { useBuyerStore } from "../../../store/buyerStore";
import { usePalmistStore } from "../../../store/palmistStore";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Modal } from "antd";
import { useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../register/modal.css"
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const LoginContainer = ({ loginM, setLoginM, setRegisterM, registerM }) => {
  // console.log(loginM);
  // const [showPassword, setShowPassword] = useState(false);
  const { updateBuyer } = useBuyerStore();
  const { updatePalmist } = usePalmistStore();
  const handleLogin = async (values) => {
    // console.log(email)
    // console.log(password)
    try {
      const response = await axios.post(
        "http://localhost:4007/api/login",
         values ,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log()
      console.log("response",response)
      if (response.status === 200) {
        const token = JSON.stringify(response.data);
        console.log("toekn",token)
        // console.log(token);
        localStorage.setItem("userToken", token);
        toast.success("Login successful!");
        response?.data?.userType === "buyer"
          ? updateBuyer(response?.data?.user)
          : response?.data?.userType === "palmist"
          ? updatePalmist(response?.data?.user)
          : null;
          // const navigate = useNavigate ()
          // navigate.push(`${window.location.origin}/${response?.data?.userType}`);
        window.location.href = `${window.location.origin}/${response?.data?.userType}`;
        //  console.log(" window.location.href", window.location.href)
      } else {
        console.error("Login failed");
        // toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      // toast.error("Login failed. Please try again.");
    }
  };
  useEffect(() => {
    // Initialize Facebook SDK after component mounts
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "862482638894435", // Replace with your Facebook App ID
        cookie: true,
        xfbml: true,
        version: "v10.0",
      });
    };

    // Load Facebook SDK script
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);
  // const responseFacebook = (response) => {
  //   console.log(response);

  //   // setData({
  //   //     name: response.name,
  //   //     email: response.email,
  //   //     picture: response.picture.data.url,
  //   // });
  //   // setPicture(response.picture.data.url);
  //   // if (response.accessToken) {
  //   //     setLogins(true);
  //   //     alert(response.accessToken)
  //   // } else {
  //   //     setLogins(false);
  //   //     alert(response)
  //   // }
  // };

  return (
    <main className="bigPopUp">
      <Modal
        centered
        visible={loginM}
        onOk={() => setLoginM(!loginM)}
        onCancel={() => setLoginM(!loginM)}
        width={"80%"}
        height={"80vh"}
        styles={{
          // width: "40vw",
          content: {
            height: "100%",
            borderRadius: "25px",
            backgroundColor: "#d3e6ec",
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
        <div className="d-flex justify-content-end mt-5  align-items-center gap-3 w-100 h-100">
          <div
            style={{
              clipPath: "polygon(0 0, 40% 0, 60% 100%, 0% 100%)",
              position: "absolute",
              top: "0px",
              bottom: "0px",
              left: "0px",
              right: "0px",
              borderTopLeftRadius: "25px",
              borderBottomLeftRadius: "25px",
              background:
                "linear-gradient(90deg, rgba(9,229,160,1) 14%, rgba(118,213,241,1) 47%) rgb(9,229,160)",
            }}
            className=" d-none d-lg-flex justify-content-start align-items-center px-5"
          >
            <img src="/signIn.png" style={{ width: "40%", height: "80%" }} />
          </div>
          <div
     
            className="d-flex signIn justify-content-center align-items-start p-lg-5 flex-column "
          >
                      <style>
            {`
              .signIn {
                width: 40%; /* Adjust the width for small devices */
              }
              @media (max-width: 768px) {
                .signIn {
                  width: 100%; /* Adjust the width for small devices */
                }
              }
            `}
          </style>
            <h1 className="text-uppercase fw-bold">Sign in</h1>
            <p className="account-subtitle">Access to our dashboard</p>
            {/* Form */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form className="w-100">
                  <div className="form-group w-full">
                    <div className="position-relative w-100">
                      <AiOutlineMail
                        color="gray"
                        style={{
                          position: "absolute",
                          left: "10px",
                          top: "33%",
                        }}
                      />
                      <FastField
                        type="text"
                        name="email"
                        style={{
                          paddingLeft: "30px",
                        }}
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error text-danger "
                    />
                  </div>
                  <div className="form-group w-full">
                    <div className="position-relative w-100">
                      <MdLockOutline
                        color="gray"
                        style={{
                          position: "absolute",
                          left: "10px",
                          top: "33%",
                        }}
                      />
                      <FastField
                        type="password"
                        style={{
                          paddingLeft: "30px",
                        }}
                        name="password"
                        placeholder="Password"
                        className="form-control"
                      />
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error text-danger "
                    />
                  </div>
                  <div className="form-group d-flex justify-content-center align-items-center">
                    <button
                      type="submit"
                      className="btn text-uppercase  w-100 btn-primary"
                      disabled={isSubmitting}
                    >
                      Sign in
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            {/* /Form */}
            <div className="d-flex w-100  justify-content-center flex-column align-items-center ">
              <div className="text-center forgotpass">
                <Link to="/admin/forgotpassword">Forgot Password?</Link>
              </div>
              <div className="login-or">
                <span className="or-line" />
                <span className="span-or text-black bg-transparent ">or</span>
              </div>
              {/* Social Login */}
              <div className="social-login mb-4  d-flex justify-content-center align-items-center gap-2 ">
                <button className="facebook px-4 py-2 bg-white  d-flex justify-content-center align-items-center border gap-3 ">
                  <FaFacebook size={20} color="#0E82FD" />
                  <span>Facebook</span>
                </button>
                <button className="google px-4 py-2 bg-white  d-flex justify-content-center align-items-center border gap-3">
                  <FcGoogle size={20} />
                  <span>Google</span>
                </button>
              </div>
              {/* /Social Login */}
              <div className="text-center dont-have">
                Don’t have an account?{" "}
                <Link
                  to="#"
                  onClick={() => {
                    setLoginM(!loginM);
                    setTimeout(() => {
                      setRegisterM(!registerM);
                    }, 300);
                  }}
                  className="text-uppercase "
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default LoginContainer;
