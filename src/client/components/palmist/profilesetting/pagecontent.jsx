import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuPhone, LuUpload } from "react-icons/lu";
import { HiOutlineUpload } from "react-icons/hi";
import { IoAddCircleOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { LuMinusCircle } from "react-icons/lu";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG07,
  IMG08,
} from "../patientprofile/img";

import { FcVideoCall } from "react-icons/fc";
import { FiMessageCircle } from "react-icons/fi";

import { CiEdit } from "react-icons/ci";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Modal, Switch } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useUserStore } from "../../../../store/userStore";
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string(),
  aboutMe: Yup.string()
    .min(500, "About Me must be at least 500 characters")
    .max(1000, "About Me cannot exceed 1000 characters")
    .required("About Me is required"),
  aboutMyServices: Yup.string()
    .min(500, "About My Services must be at least 500 characters")
    .max(1000, "About My Services cannot exceed 1000 characters")
    .required("About My Services is required"),
});

const Pagecontent = () => {
  const [mode, setMode] = useState(false);
  const [educationM, setEducationM] = useState(false);
  const [servicesM, setServicesM] = useState(false);
  const [educationItems, setEducationItems] = useState([]);
  const [servicesItems, setServicesItems] = useState([]);
  const [pricingItems, setPricingItems] = useState(null);
  const [pricingM, setPricingM] = useState(false);
  const [User, setUser] = useState();
  useEffect(() => {
    const fetch = async () => {
      const data = JSON.parse(localStorage.getItem("userToken"));
      console.log(data.user);
      setUser(data?.user);
    };
    fetch();
  }, []);
  return (
    <>
      <div>
        <div>
          <h3 className="d-flex justify-content-between flex-wrap  align-items-center w-100">
            Basic Information{" "}
            <button
              style={{
                fontSize: "20px",
              }}
              onClick={() => setMode(!mode)}
              className="px-4 d-none d-md-block py-2 rounded-3 btn-primary "
            >
              {" "}
              {!mode ? " Preview Mode" : " Edit Mode"}
            </button>
            <button
              style={{
                fontSize: "14px",
              }}
              onClick={() => setMode(!mode)}
              className={`px-4 ${
                !mode ? "btn-dark" : " btn-primary "
              } d-md-none  py-2 rounded-3`}
            >
              Edit
            </button>
          </h3>

          <Formik
            initialValues={{
              profile_image: "",
              name: User?.userFirstName || "",
              description: User?.userDescription || "",
              videoConsulting: false,
              audioConsulting: false,
              chatConsulting: false,
              aboutMe: "",
              aboutMyServices: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              // Handle form submission logic here
              console.log({
                ...values,
                educationItems,
                servicesItems,
                pricingItems,
              });
              try {
                const response = await axios.patch(
                  `http://localhost:4007/api/updateDetails/${User?._id}`,
                  {
                    ...values,
                    educationItems,
                    servicesItems,
                    pricingItems,
                  }
                );
                if (response.status === 200) {
                  // Registration successful, handle redirection or show a success message
                  // alert("register successfully")
                  console.log(response.data);
                  toast.success("Update successful!", {
                    position: "top-right",
                  });
                } else {
                  console.error("Update failed");
                  toast.error("Update failed. Please try again.");
                }
              } catch (error) {
                console.error("Error during profile update:", error);
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, values, setFieldValue }) => (
              <Form>
                {/* <div className="card">
                  <div className="card-body">
                    <div className="doctor-widget ">
                      <div
                        className="doc-info-left w-100"
                        style={{
                          gap: "5%",
                        }}
                      >
                        <div
                          style={{
                            width: "40%",
                            height: "300px",
                          }}
                          className="position-relative profile-pic-upload p-0 m-0 "
                        >
                          <img
                            src={
                              // URL.createObjectURL(values?.profile_image) ||
                              User?.userImage
                            }
                            id="prof-avatar"
                            alt=""
                            className="img-fluid h-100 rounded-2 w-100"
                          />
                          {!mode && (
                            <div
                              style={{
                                left: "0px",
                                right: "0px",
                                bottom: "0px",
                                backgroundImage:
                                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
                              }}
                              className="position-absolute top-0 d-flex justify-content-center align-items-center "
                            >
                              <span>
                                <HiOutlineUpload size={30} color="white" />
                              </span>
                            </div>
                          )}
                          <Field
                            type="file"
                            id="profile_image"
                            name="profile_image"
                            disabled={mode}
                          />
                        </div>
                        <div className="doc-info-cont flex-fill  d-flex flex-column">
                          <Field
                            type="text"
                            name="name"
                            style={{
                              outline: "none",
                            }}
                            className={`${
                              !mode
                                ? "border-bottom border-0 border-secondary rounded-2"
                                : "border-0"
                            } px-4 bg-white  my-2 py-2 fs-4 fw-medium`}
                            placeholder="Name"
                            disabled={mode}
                          />
                          <ErrorMessage
                            name="name"
                            component="div"
                            className="text-danger"
                          />

                          <Field
                            as="textarea"
                            name="description"
                            rows={3}
                            cols={5}
                            style={{
                              outline: "none",
                              overflow: "hidden", // Hide the scrollbar
                              resize: "none", // Disable textarea resizing
                              border: "none", // Remove the border
                            }}
                            className={`${
                              !mode
                                ? "border text-black border-secondary rounded-2"
                                : "border-0"
                            } px-4 bg-white my-2 py-2 fs-6 fw-normal`}
                            disabled={mode}
                            placeholder="Description"
                          />
                          {!mode && (
                            <span
                              style={{
                                fontSize: "10px",
                              }}
                              className="fw-light text-end w-100"
                            >
                              95
                            </span>
                          )}
                          <ErrorMessage
                            name="description"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="consultation-list"
                      style={{
                        marginTop: "3rem",
                      }}
                    >
                      <ul className="d-flex gap-2 ">
                        <li>
                          <label htmlFor="videoConsulting">
                            <Field
                              type="checkbox"
                              id="videoConsulting"
                              name="videoConsulting"
                              disabled={mode}
                              className="visually-hidden"
                            />
                            <div className="border rounded-2 p-3 fw-bold d-flex justify-content-center align-items-center gap-2">
                              <FcVideoCall
                                size={30}
                                className="amt-txt"
                                style={{
                                  marginRight: "10px",
                                }}
                              />
                              Video Consulting
                              <div className="checkbox-icon">
                                {isSubmitting ? null : (
                                  <Switch
                                    checked={values.videoConsulting}
                                    // disabled={mode}
                                    onChange={(value) =>
                                      setFieldValue("videoConsulting", value)
                                    }
                                    style={{ margin: 16 }}
                                  />
                                )}
                              </div>
                            </div>
                          </label>
                        </li>
                        <li>
                          <label htmlFor="audioConsulting">
                            <Field
                              type="checkbox"
                              id="audioConsulting"
                              name="audioConsulting"
                              disabled={mode}
                              className="visually-hidden"
                            />
                            <div className="border rounded-2 p-3 fw-bold d-flex justify-content-center align-items-center gap-2">
                              <LuPhone
                                size={30}
                                className="amt-txt"
                                style={{
                                  marginRight: "10px",
                                }}
                              />
                              Audio Consulting
                              <div className="checkbox-icon">
                                {isSubmitting ? null : (
                                  <Switch
                                    checked={values.audioConsulting}
                                    // disabled={mode}
                                    onChange={(value) =>
                                      setFieldValue("audioConsulting", value)
                                    }
                                    style={{ margin: 16 }}
                                  />
                                )}
                              </div>
                            </div>
                          </label>
                        </li>
                        <li>
                          <label htmlFor="chatConsulting">
                            <Field
                              type="checkbox"
                              id="chatConsulting"
                              name="chatConsulting"
                              disabled={mode}
                              className="visually-hidden"
                            />
                            <div className="border rounded-2 p-3 fw-bold d-flex justify-content-center align-items-center gap-2">
                              <FiMessageCircle
                                size={30}
                                className="amt-txt"
                                style={{
                                  marginRight: "10px",
                                }}
                              />
                              Chat Consulting
                              <div className="checkbox-icon">
                                {isSubmitting ? null : (
                                  <Switch
                                    checked={values.chatConsulting}
                                    // disabled={mode}
                                    onChange={(value) =>
                                      setFieldValue("chatConsulting", value)
                                    }
                                    style={{ margin: 16 }}
                                  />
                                )}
                              </div>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="card">
                  <div className="card-body">
                    <div className="doctor-widget">
                      <div className="doc-info-left d-flex flex-column justify-content-center align-items-center flex-md-row w-100  justify-content-md-between gap-4">
                        <div className="position-relative pImage p-0 profile-pic-upload ">
                          <style>
                            {`
                            .pImage{
                              width: 400px;
                              height: 400px;
                            }
    @media (max-width: 768px) {
      .pImage{
        width: 100%;
        height: 100%;
      }
    }
                            `}
                          </style>
                          <img
                            src={
                              // URL.createObjectURL(values?.profile_image) ||
                              // User?.userImage
                              IMG01
                            }
                            style={{
                              borderRadius: "25px",
                              objectFit: "cover",
                            }}
                            className="img-fluid h-100"
                            alt="User Image"
                          />
                          {!mode && (
                            <div
                              style={{
                                left: "0px",
                                right: "0px",
                                bottom: "0px",
                                borderRadius: "25px",
                                backgroundImage:
                                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
                              }}
                              className="position-absolute top-0 d-flex justify-content-center align-items-center "
                            >
                              <span>
                                <HiOutlineUpload size={30} color="white" />
                              </span>
                            </div>
                          )}
                          <div
                            style={{
                              bottom: "-12px",
                            }}
                            className="position-absolute w-100  d-flex justify-content-center  align-items-center "
                          >
                            <div
                              style={{
                                position: "static",
                                width: "auto",
                              }}
                              className="k-img-btn-overlay"
                            >
                              <span>{User?.status && "offline"}</span>
                            </div>
                          </div>
                          <Field
                            type="file"
                            id="profile_image"
                            name="profile_image"
                            disabled={mode}
                          />
                        </div>
                        <div className="doc-info-cont flex-fill ">
                          <div className="doc-info-cont d-flex flex-column">
                            <Field
                              type="text"
                              name="name"
                              style={{
                                outline: "none",
                              }}
                              className={`${
                                !mode
                                  ? "border-bottom border-0 border-secondary rounded-2"
                                  : "border-0"
                              } bg-white  my-2 py-2 fs-4 fw-medium`}
                              placeholder="Name"
                              disabled={mode}
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="text-danger"
                            />

                            <Field
                              as="textarea"
                              name="description"
                              rows={3}
                              cols={5}
                              style={{
                                outline: "none",
                                overflow: "hidden", // Hide the scrollbar
                                resize: "none", // Disable textarea resizing
                                border: "none", // Remove the border
                              }}
                              className={`${
                                !mode
                                  ? "border text-black border-secondary rounded-2"
                                  : "border-0"
                              } bg-white my-2 py-2 fs-6 fw-normal`}
                              disabled={mode}
                              placeholder="Description"
                            />
                            {!mode && (
                              <span
                                style={{
                                  fontSize: "10px",
                                }}
                                className="fw-light text-end w-100"
                              >
                                95
                              </span>
                            )}
                            <ErrorMessage
                              name="description"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                          <div
                            className="consultation-list d-flex flex-column justify-content-center align-items-center"
                            style={{
                              marginTop: "3rem",
                            }}
                          >
                            <ul>
                              <li>
                                {" "}
                                <label htmlFor="videoConsulting">
                                  <Field
                                    type="checkbox"
                                    id="videoConsulting"
                                    name="videoConsulting"
                                    disabled={mode}
                                    className="visually-hidden"
                                  />
                                  <div className="border rounded-2 p-3 fw-bold d-flex justify-content-center align-items-center gap-2">
                                    <FcVideoCall
                                      size={30}
                                      className="amt-txt"
                                      style={{
                                        marginRight: "10px",
                                      }}
                                    />
                                    Video Consulting
                                    <div className="checkbox-icon">
                                      {isSubmitting ? null : (
                                        <Switch
                                          checked={values.videoConsulting}
                                          // disabled={mode}
                                          onChange={(value) =>
                                            setFieldValue(
                                              "videoConsulting",
                                              value
                                            )
                                          }
                                          style={{ margin: 16 }}
                                        />
                                      )}
                                    </div>
                                  </div>
                                </label>
                              </li>
                              <li>
                                {" "}
                                <label htmlFor="audioConsulting">
                                  <Field
                                    type="checkbox"
                                    id="audioConsulting"
                                    name="audioConsulting"
                                    disabled={mode}
                                    className="visually-hidden"
                                  />
                                  <div className="border rounded-2 p-3 fw-bold d-flex justify-content-center align-items-center gap-2">
                                    <LuPhone
                                      size={30}
                                      className="amt-txt"
                                      style={{
                                        marginRight: "10px",
                                      }}
                                    />
                                    Audio Consulting
                                    <div className="checkbox-icon">
                                      {isSubmitting ? null : (
                                        <Switch
                                          checked={values.audioConsulting}
                                          // disabled={mode}
                                          onChange={(value) =>
                                            setFieldValue(
                                              "audioConsulting",
                                              value
                                            )
                                          }
                                          style={{ margin: 16 }}
                                        />
                                      )}
                                    </div>
                                  </div>
                                </label>
                              </li>
                              <li>
                                {" "}
                                <label htmlFor="chatConsulting">
                                  <Field
                                    type="checkbox"
                                    id="chatConsulting"
                                    name="chatConsulting"
                                    disabled={mode}
                                    className="visually-hidden"
                                  />
                                  <div className="border rounded-2 p-3 fw-bold d-flex justify-content-center align-items-center gap-2">
                                    <FiMessageCircle
                                      size={30}
                                      className="amt-txt"
                                      style={{
                                        marginRight: "10px",
                                      }}
                                    />
                                    Chat Consulting
                                    <div className="checkbox-icon">
                                      {isSubmitting ? null : (
                                        <Switch
                                          checked={values.chatConsulting}
                                          // disabled={mode}
                                          onChange={(value) =>
                                            setFieldValue(
                                              "chatConsulting",
                                              value
                                            )
                                          }
                                          style={{ margin: 16 }}
                                        />
                                      )}
                                    </div>
                                  </div>
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body pt-0">
                    <div className="tab-content pt-0">
                      {/* Overview Content */}
                      <div
                        role="tabpanel"
                        id="doc_overview"
                        className="tab-pane fade show active"
                      >
                        <div className="w-100">
                          <div className="col-md-12 col-lg-9 w-100">
                            {/* About Me Field */}
                            <div className="widget about-widget w-100">
                              <h4 className="widget-title">About Me</h4>
                              <Field
                                as="textarea"
                                name="aboutMe"
                                style={{
                                  outline: "none",
                                  overflow: "hidden", // Hide the scrollbar
                                  resize: "none", // Disable textarea resizing
                                  border: "none", // Remove the border
                                }}
                                rows={10}
                                cols={10}
                                className={`${
                                  !mode
                                    ? "border text-black border-secondary rounded-2"
                                    : "border-0"
                                } px-4 bg-white  form-control py-2 fs-6 fw-normal`}
                                disabled={mode}
                                placeholder={
                                  !mode
                                    ? "Write about your services..."
                                    : "Nothing"
                                }
                              />
                              {!mode && (
                                <div className="fw-light d-flex justify-content-between align-content-center  w-100">
                                  <ErrorMessage
                                    name="aboutMe"
                                    component="div"
                                    className="text-danger"
                                  />
                                  <span className="w-100 text-end ">
                                    {values.aboutMe.length}/1000
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* About My Services Field */}
                            <div className="widget about-widget w-100">
                              <h4 className="widget-title">
                                About My Services
                              </h4>
                              <Field
                                as="textarea"
                                style={{
                                  outline: "none",
                                  overflow: "hidden", // Hide the scrollbar
                                  resize: "none", // Disable textarea resizing
                                  border: "none", // Remove the border
                                }}
                                name="aboutMyServices"
                                rows={10}
                                cols={10}
                                className={`${
                                  !mode
                                    ? "border text-black border-secondary rounded-2"
                                    : "border-0"
                                } px-4 bg-white my-2 py-2 form-control fs-6 fw-normal`}
                                disabled={mode}
                                placeholder={
                                  !mode
                                    ? "Write about your services..."
                                    : "Nothing"
                                }
                              />
                              {!mode && (
                                <div className="fw-light d-flex justify-content-between align-content-center w-100">
                                  <ErrorMessage
                                    name="aboutMyServices"
                                    component="div"
                                    className="text-danger"
                                  />
                                  <span className="w-100 text-end ">
                                    {values.aboutMyServices.length}/1000
                                  </span>
                                </div>
                              )}
                            </div>
                            {/* Education Modal */}
                            <Modal
                              centered
                              visible={educationM}
                              onOk={() => setEducationM(!educationM)}
                              onCancel={() => setEducationM(!educationM)}
                              styles={{
                                width: "40vw",
                                content: {
                                  borderRadius: "25px",
                                  backgroundColor: "#ffffff",
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
                              <Formik
                                initialValues={{
                                  school: "",
                                  degree: "",
                                  year: "",
                                }}
                                validationSchema={Yup.object().shape({
                                  school:
                                    Yup.string().required("School is required"),
                                  degree:
                                    Yup.string().required("Degree is required"),
                                  year: Yup.string()
                                    .matches(
                                      /^[0-9]{4}-[0-9]{4}$/,
                                      "Invalid year format (e.g., 2022-2023)"
                                    )
                                    .required("Year is required"),
                                })}
                                onSubmit={(
                                  values,
                                  { setSubmitting, resetForm }
                                ) => {
                                  // Handle education submission logic here
                                  console.log("Education Values:", values);
                                  setEducationItems([
                                    ...educationItems,
                                    values,
                                  ]);
                                  resetForm();
                                  setEducationM(!educationM);
                                  setSubmitting(false);
                                }}
                              >
                                {({ isSubmitting }) => (
                                  <Form>
                                    <h4 className="widget-title w-100">
                                      Add Education
                                    </h4>
                                    <div className="d-flex justify-content-start align-items-start flex-column gap-3 ">
                                      <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="School, University, or Institute"
                                        name="school"
                                      />
                                      <ErrorMessage
                                        name="school"
                                        component="div"
                                        className="text-danger"
                                      />
                                      <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="Degree, Certificate, or Diploma"
                                        name="degree"
                                      />
                                      <ErrorMessage
                                        name="degree"
                                        component="div"
                                        className="text-danger"
                                      />

                                      <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter year (e.g., 2015-2018)"
                                        name="year"
                                        onKeyDown={(e) => {
                                          if (
                                            e.keyCode === 8 ||
                                            e.keyCode === 46 ||
                                            e.keyCode === 37 ||
                                            e.keyCode === 39
                                          )
                                            return;
                                          if (
                                            !/[0-9-]/.test(e.key) ||
                                            e.target.value.length >= 9
                                          )
                                            e.preventDefault();
                                          if (
                                            e.target.value.length === 4 &&
                                            e.key !== "-" &&
                                            e.target.value.indexOf("-") === -1
                                          ) {
                                            e.target.value += "-";
                                            e.preventDefault();
                                          }
                                        }}
                                      />
                                      <ErrorMessage
                                        name="year"
                                        component="div"
                                        className="text-danger"
                                      />
                                      <button
                                        type="submit"
                                        className="btn btn-primary mt-3"
                                        disabled={isSubmitting}
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </Form>
                                )}
                              </Formik>
                            </Modal>

                            {/* Education Details */}
                            <div className="widget education-widget">
                              <h4 className="widget-title w-100 d-flex justify-content-between ">
                                Education{" "}
                                {!mode && (
                                  <IoAddCircleOutline
                                    onClick={() => setEducationM(!educationM)}
                                  />
                                )}
                              </h4>
                              <div className="experience-box">
                                <ul className="experience-list">
                                  {educationItems &&
                                    educationItems.map((item, index) => (
                                      <>
                                        <li key={index}>
                                          <div className="experience-user">
                                            <div className="before-circle" />
                                          </div>
                                          <div className="experience-content">
                                            <div className="timeline-content">
                                              <h6 className="name d-flex justify-content-start align-items-center gap-3 ">
                                                {item.school}
                                                <Link to="#">
                                                  <LuMinusCircle
                                                    onClick={() => {
                                                      educationItems.splice(
                                                        index,
                                                        1
                                                      );
                                                      console.log(
                                                        educationItems
                                                      );
                                                      setEducationItems(
                                                        educationItems
                                                      );
                                                    }}
                                                    size={12}
                                                    color="blue"
                                                  />
                                                </Link>
                                              </h6>
                                              <div>{item.degree}</div>
                                              <span className="time">
                                                {item.year}
                                              </span>
                                            </div>
                                          </div>
                                        </li>
                                      </>
                                    ))}
                                </ul>
                              </div>
                            </div>
                            {/* /Education Details */}
                            {/* Services Modal */}
                            <Modal
                              centered
                              visible={servicesM}
                              onOk={() => setServicesM(!servicesM)}
                              onCancel={() => setServicesM(!servicesM)}
                              styles={{
                                width: "40vw",
                                content: {
                                  borderRadius: "25px",
                                  backgroundColor: "#ffffff",
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
                              <Formik
                                initialValues={{
                                  serviceName: "",
                                }}
                                validationSchema={Yup.object().shape({
                                  serviceName: Yup.string().required(
                                    "Service name is required"
                                  ),
                                })}
                                onSubmit={(
                                  values,
                                  { setSubmitting, resetForm }
                                ) => {
                                  // Handle education submission logic here
                                  setServicesItems([
                                    ...servicesItems,
                                    values.serviceName,
                                  ]);
                                  resetForm();
                                  setServicesM(!servicesM);
                                  setSubmitting(false);
                                }}
                              >
                                {({ isSubmitting }) => (
                                  <Form>
                                    <h4 className="widget-title w-100">
                                      Add Services
                                    </h4>
                                    <div className="d-flex justify-content-start align-items-center flex-column gap-3 ">
                                      <Field
                                        type="text"
                                        className="form-control"
                                        placeholder="Tarot Reading, Love Reading, etc"
                                        name="serviceName"
                                      />
                                      <ErrorMessage
                                        name="serviceName"
                                        component="div"
                                        className="text-danger"
                                      />
                                      <button
                                        type="submit"
                                        className="btn btn-primary mt-3"
                                        disabled={isSubmitting}
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </Form>
                                )}
                              </Formik>
                            </Modal>

                            {/* Services List */}
                            <div className="service-list">
                              <h4 className="widget-title w-100 d-flex justify-content-between ">
                                Services{" "}
                                {!mode && (
                                  <IoAddCircleOutline
                                    onClick={() => setServicesM(!servicesM)}
                                  />
                                )}
                              </h4>
                              <ul className="clearfix">
                                {servicesItems &&
                                  servicesItems.map((item, index) => (
                                    <li
                                      key={index}
                                      className="d-flex justify-content-start fw-medium  align-items-center gap-2 "
                                    >
                                      {item}
                                      <Link to={"#"}>
                                        <LuMinusCircle
                                          onClick={() => {
                                            console.log(index);
                                            servicesItems.splice(index, 1);
                                            console.log(servicesItems);
                                            setServicesItems(servicesItems);
                                          }}
                                          size={12}
                                          color="blue"
                                        />
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                            {/* Pricing Modal */}
                            <Modal
                              centered
                              visible={pricingM}
                              onOk={() => setPricingM(!pricingM)}
                              onCancel={() => setPricingM(!pricingM)}
                              styles={{
                                width: "40vw",
                                content: {
                                  borderRadius: "25px",
                                  backgroundColor: "#ffffff",
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
                              <Formik
                                initialValues={{
                                  chatPrice: "",
                                  videoPrice: "",
                                  audioPrice: "",
                                }}
                                validationSchema={Yup.object().shape({
                                  chatPrice: Yup.number()
                                    .min(0.1, "Price must be greater than 0")
                                    .max(
                                      10,
                                      "Price must be less than or equal to 10"
                                    )
                                    .required("Chat price is required"),

                                  videoPrice: Yup.number()
                                    .min(0.1, "Price must be greater than 0")
                                    .max(
                                      10,
                                      "Price must be less than or equal to 10"
                                    )
                                    .required("Video price is required"),

                                  audioPrice: Yup.number()
                                    .min(0.1, "Price must be greater than 0")
                                    .max(
                                      10,
                                      "Price must be less than or equal to 10"
                                    )
                                    .required("Audio price is required"),
                                })}
                                onSubmit={(
                                  values,
                                  { setSubmitting, resetForm }
                                ) => {
                                  // Handle education submission logic here
                                  console.log(values);
                                  setPricingItems([values]);
                                  resetForm();
                                  setPricingM(!pricingM);
                                  setSubmitting(false);
                                }}
                              >
                                {({ isSubmitting }) => (
                                  <Form>
                                    <h4 className="widget-title w-100 text-center">
                                      Add Pricing
                                    </h4>
                                    <div className="d-flex justify-content-start align-items-center flex-column gap-3 ">
                                      <div className="w-100">
                                        <label className="fw-bold">
                                          Chat Pricing
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control"
                                          placeholder="$3.99/min"
                                          name="chatPrice"
                                        />
                                        <ErrorMessage
                                          name="chatPrice"
                                          component="div"
                                          className="text-danger"
                                        />
                                      </div>
                                      <div className="w-100">
                                        <label className="fw-bold">
                                          Video Pricing
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control"
                                          placeholder="$8.99/min"
                                          name="videoPrice"
                                        />
                                        <ErrorMessage
                                          name="videoPrice"
                                          component="div"
                                          className="text-danger"
                                        />
                                      </div>
                                      <div className="w-100">
                                        <label className="fw-bold">
                                          Audio Pricing
                                        </label>
                                        <Field
                                          type="number"
                                          className="form-control"
                                          placeholder="$5.99/min"
                                          name="audioPrice"
                                        />
                                        <ErrorMessage
                                          name="audioPrice"
                                          component="div"
                                          className="text-danger"
                                        />
                                      </div>
                                      <button
                                        type="submit"
                                        className="btn btn-primary mt-3"
                                        disabled={isSubmitting}
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </Form>
                                )}
                              </Formik>
                            </Modal>

                            {/* Pricing List */}
                            <div className="service-list">
                              <h4 className="widget-title w-100 d-flex justify-content-between ">
                                Pricing{" "}
                                {!mode && (
                                  <>
                                    {pricingItems ? (
                                      <RxUpdate
                                        onClick={() => setPricingM(!pricingM)}
                                      />
                                    ) : (
                                      <IoAddCircleOutline
                                        onClick={() => setPricingM(!pricingM)}
                                      />
                                    )}
                                  </>
                                )}
                              </h4>
                              {pricingItems?.map((item, index) => (
                                <>
                                  <div
                                    key={index}
                                    className="d-flex justify-content-center gap-5  text-center text-black  align-items-center p-3"
                                  >
                                    <div className="d-flex justify-content-center text-center text-black  align-items-center gap-4 p-4 rounded-2 shadow-sm flex-column ">
                                      <FiMessageCircle
                                        size={40}
                                        className="amt-txt"
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      />
                                      <h3 className="fs-2 fw-bold ">Chat</h3>
                                      <p className="fs-6 fw-normal">
                                        <span className="fw-bold">
                                          ${item.chatPrice}
                                        </span>
                                        /min
                                      </p>
                                    </div>
                                    <div className="d-flex justify-content-center text-center text-black  align-items-center gap-4 p-4 rounded-2 shadow-sm flex-column ">
                                      <FcVideoCall
                                        size={40}
                                        className="amt-txt"
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      />
                                      <h3 className="fs-2 fw-bold ">Video</h3>
                                      <p className="fs-6 fw-normal">
                                        <span className="fw-bold">
                                          ${item.videoPrice}
                                        </span>
                                        /min
                                      </p>
                                    </div>
                                    <div className="d-flex justify-content-center text-center text-black  align-items-center gap-4 p-4 rounded-2 shadow-sm flex-column ">
                                      <LuPhone
                                        size={40}
                                        className="amt-txt"
                                        style={{
                                          marginRight: "10px",
                                        }}
                                      />
                                      <h3 className="fs-2 fw-bold ">Audio</h3>
                                      <p className="fs-6 fw-normal">
                                        <span className="fw-bold">
                                          ${item.audioPrice}
                                        </span>
                                        /min
                                      </p>
                                    </div>
                                  </div>
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {!mode ? (
                  <div className="submit-section d-flex justify-content-center align-content-center w-100  submit-btn-bottom">
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn"
                    >
                      Save Changes
                    </button>
                  </div>
                ) : null}
              </Form>
            )}
          </Formik>
        </div>
        <div>
          <div className="card">
            <div className="card-body pt-0">
              <div className="tab-content pt-0">
                {/* Overview Content */}
                <div
                  role="tabpanel"
                  id="doc_overview"
                  className="tab-pane fade show active"
                >
                  <div className="w-100">
                    <div className="col-md-12 col-lg-9 w-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Pagecontent;
