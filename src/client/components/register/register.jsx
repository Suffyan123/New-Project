import React, { useState, useEffect } from "react";

import Header from "../header";
import Footer from "../footer";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { greenlogo } from "../imagepath";
import { Formik, Form, FastField, ErrorMessage } from "formik";
import { AiOutlineMail } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import * as Yup from "yup";
import { Modal } from "antd";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./modal.css";
// Define your validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

// Initial values for the form fields
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = ({ registerM, setRegisterM, loginM, setLoginM }) => {
  const history = useHistory();
  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  const handleRegistration = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:4007/api/addClient",
        values
      );
      console.log("response", response)
      let status = response?.status;
      let responseMsg = response?.data?.message;
      let statusType = response?.data?.success

      if (status == 200 && responseMsg == "client is added successsfully" && statusType == true) {
        toast.success(responseMsg)
        setRegisterM(!registerM);
        setTimeout(() => {
          setLoginM(!loginM);
        }, 300);
      }
      else if (
        status == 202 && responseMsg == "client already exists" && statusType == false
      ) {
        toast.error(responseMsg)
      }
      // console.log("status",status,"responseMsg",responseMsg,"statustype",statusType)

      // if (response.status === 200) {
      // Registration successful, handle redirection or show a success message
      // alert("register successfully")
      // toast.success("Login successful!", {
      // position: "top-right",
      // });
      // history.push("/login");
  } catch (error) {
    console.error("Error during patient registration:", error);

  }
};

return (
  // <>
  //   <Header {...props} />

  //   <div className="content content-login-page top-space ">
  //     <div className="container-fluid">
  //       <div className="row">
  //         <div className="col-md-8 offset-md-2">
  //           <div className="account-content">
  //             <div className="row align-items-center justify-content-center">
  //               <div className="col-md-12 col-lg-6 login-right">
  //                 <div className="login-header heading-text-logins">
  //                   <h3>Patient Register</h3>
  //                 </div>

  //                 <form onSubmit={handlePatientRegistration}>
  //                   <div className="form-group form-focus">
  //                     <input
  //                       type="text"
  //                       className="form-control input-fld floating"
  //                       placeholder="Username"
  //                       name="username"
  //                       value={formData.username}
  //                       onChange={handleInputChange}
  //                       required
  //                     />
  //                     <label className="focus-label">Username</label>
  //                   </div>
  //                   <div className="form-group form-focus">
  //                     <input
  //                       type="email"
  //                       className="form-control input-fld floating"
  //                       placeholder="Email"
  //                       name="email"
  //                       value={formData.email}
  //                       onChange={handleInputChange}
  //                       required
  //                     />
  //                     <label className="focus-label">Email</label>
  //                   </div>
  //                   <div className="form-group form-focus">
  //                     <input
  //                       type="password"
  //                       className="form-control input-fld floating"
  //                       placeholder="Password"
  //                       name="password"
  //                       value={formData.password}
  //                       onChange={handleInputChange}
  //                       required
  //                     />
  //                     <label className="focus-label">Password</label>
  //                   </div>
  //                   <div className="text-end">
  //                     <Link className="forgot-link" to="/login">
  //                       Already have an account?
  //                     </Link>
  //                   </div>
  //                   <button className="login-btn-login" type="submit">
  //                     Signup
  //                   </button>
  //                   <div className="login-or">
  //                     <span className="or-line" />
  //                     <span className="span-or">or</span>
  //                   </div>
  //                 </form>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  //   <Footer {...props} />
  // </>

  <main className="bigPopUp">
    <Modal
      centered
      visible={registerM}
      onOk={() => setRegisterM(!registerM)}
      width={"80%"}

      onCancel={() => setRegisterM(!registerM)}
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
      className="ant-modal"
    >

      <div className="d-flex justify-content-end align-items-center gap-3 w-100 h-100">
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
          className="d-flex d-none d-lg-flex justify-content-start align-items-center"
        >
          <img
            src="/signUp.png"
            style={{ width: "50%", height: "90%", marginLeft: "-10px" }}
          />
        </div>
        <div className="d-flex signUp justify-content-center align-items-start p-lg-5 flex-column ">
          <style>
            {`
              .signUp {
                width: 40%; /* Adjust the width for small devices */
              }
              @media (max-width: 768px) {
                .signUp {
                  width: 100%; /* Adjust the width for small devices */
                }
              }
            `}
          </style>
          <h1 className="text-uppercase fw-bold ">Sign Up</h1>
          <p className="account-subtitle">Access to our dashboard</p>
          {/* Form */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegistration}
          >
            {({ isSubmitting }) => (
              <Form className="w-100">
                <div className="form-group  ">
                  <div className="position-relative w-100">
                    <FaRegUser
                      color="gray"
                      style={{
                        position: "absolute",
                        left: "10px",
                        top: "33%",
                      }}
                    />
                    <FastField
                      type="text"
                      name="name"
                      placeholder="Name"
                      style={{
                        paddingLeft: "30px",
                      }}
                      className="form-control"
                    />
                  </div>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error text-danger"
                  />
                </div>
                <div className="form-group">
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
                    className="error text-danger"
                  />
                </div>
                <div className="form-group">
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
                      name="password"
                      style={{
                        paddingLeft: "30px",
                      }}
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error text-danger"
                  />
                </div>
                <div className="form-group">
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
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error text-danger"
                  />
                </div>
                <div className="form-group d-flex justify-content-center align-items-center  mb-0">
                  <button
                    type="submit"
                    className="btn text-uppercase w-100  btn-primary"
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          {/* /Form */}
          <div className="d-flex w-100  justify-content-center flex-column align-items-center ">
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
              Already have an account?{" "}
              <Link
                to="#"
                onClick={() => {
                  setRegisterM(!registerM);
                  setTimeout(() => {
                    setLoginM(!loginM);
                  }, 300);
                }}
                className="text-uppercase "
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </main>
);
};

export default Register;
