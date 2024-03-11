import React, { useEffect, useState } from "react";
// import loginBanner from '../../../assets/images/login-banner.png';
import Logo from "../../../assets/images/logo.png";
import camera from "../../../assets/images/icons/camera.svg";
import { Link } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import axios from "axios";
import male from "../../../assets/images/icons/male.png";
import female from "../../../assets/images/icons/female.png";
import { Formik, Field, FastField, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
const initialValues = {
  profile_image: "",
  firstName: "",
  lastName: "",
  dob: new Date(),
  gender: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "",
  timeZone: "",
  postalCode: "",
  email: "",
  password: "",
  confirmPassword: "",
};
// const validationSchema = Yup.object().shape({
//   profile_image: Yup.mixed().required("Profile Picture is required"),
//   firstName: Yup.string().required("First Name is required"),
//   lastName: Yup.string().required("Last Name is required"),
//   dob: Yup.date().required("Date of Birth is required"),
//   gender: Yup.string().required("Gender is required"),
//   addressLine1: Yup.string().required("Address Line 1 is required"),
//   addressLine2: Yup.string().required("Address Line 2 is required"),
//   city: Yup.string().required("City is required"),
//   state: Yup.string().required("State is required"),
//   country: Yup.string().required("Country is required"),
//   timeZone: Yup.string().required("Time Zone is required"),
//   postalCode: Yup.string().required("Postal Code is required"),
//   email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   // code: Yup.string().required('Verification Code is required'),
//   password: Yup.string()
//     .min(8, "Password must be at least 8 characters")
//     .required("Password is required"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
// });
const validationSchemas = [
  Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    dob: Yup.date().required("Date of Birth is required"),
  }),
  Yup.object().shape({
    // profile_image: Yup.mixed().required("Profile Picture is required"),
    gender: Yup.string().required("Gender is required"),
    addressLine1: Yup.string().required("Address Line 1 is required"),
    addressLine2: Yup.string().required("Address Line 2 is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
    timeZone: Yup.string().required("Time Zone is required"),
    postalCode: Yup.string().required("Postal Code is required"),
  }),
  Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  }),
  Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  }),
];
const PalmistRegister = () => {
  const [step, setStep] = useState(1);
  const history = useHistory();
  const [completeStep, setCompleteStep] = useState();
  const [countries, setCountries] = useState([]);
  const [timeZones, setTimeZones] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all"); // Replace with your chosen API endpoint
        const countryTimezonesInfo = response.data.map((country) => {
          return {
            timezone: country.timezones[0],
            continent: country.continents[0], // Assuming each country has only one continent
            capital: country.capital, // Assuming each country has only one capital
          };
        });

        setTimeZones(countryTimezonesInfo);
        setCountries(response.data.map((country) => country.name.common));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);
  useEffect(() => {
    document.body.classList.add("account-page");
    return () => document.body.classList.remove("account-page");
  }, []);

  const handleStep = () => {
    console.log(completeStep);
    console.log(step);
    if (step < 4) {
      setCompleteStep(step);
      setStep(step + 1);
    } else {
      setStep(1);
      setCompleteStep(null);
    }
  };
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    handleStep();
    // Handle your form submission logic here
    step === 4 && console.log(values);
    if (step === 4) {
      try {
        const response = await axios.post(
          "http://localhost:4007/api/addPalmist",
          values
          );
          console.log("response",response)
          let status  = response?.status;
          let responseMsg   = response?.data?.message;
          let responseSuccess  = response?.data.success;
          console.log("status",status,"statusmdg",responseMsg,"responseSuccess",responseSuccess)
          if(status ==200 && responseMsg == "palmist is added successfully" && responseSuccess == true)
          {
            toast.success("Registration is successfull")
            const  token  = JSON.stringify(response?.data)
            localStorage.setItem("userToken", token);
            window.location.href = `${window.location.origin}/palmist`
           }
        else if (status == 202 && responseMsg == "palmist is already registered add another" && responseSuccess == false)
        {
          console.log('herre')
         toast.error("Registration is unsuccessfull email is already exists")
        }
      } catch (error) {
        console.error("Error during patient registration:", error);
      }
    }
    // setSubmitting(false); // Uncomment this line if you have asynchronous form submission
  };
  return (
    <>
      {/* Page Content */}
      <div className="content login-page pt-0">
        <div className="container-fluid">
          {/* Register Content */}
          <div className="account-content">
            <div className="row align-items-center">
              <div className="login-right">
                <div
                  style={{
                    maxWidth: "500px",
                  }}
                  className="inner-right-login"
                >
                  <div className="login-header">
                    <div className="logo-icon">
                      <Link to="/">
                        <img
                          src={Logo}
                          style={{
                            width: "150px",
                            height: "60px",
                          }}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="step-list">
                      <ul>
                        <li>
                          <Link
                            to="#"
                            onClick={() => completeStep === 1 && setStep(1)}
                            className={`${
                              step === step + 1 && completeStep === 1
                                ? "active-done"
                                : ""
                            } 
                           ${completeStep === 1 ? "active-done" : ""}
                            ${step === 1 ? "active" : ""}`}
                          >
                            1
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => completeStep === 2 && setStep(2)}
                            className={`${
                              step === step + 1 && completeStep === 2
                                ? "active-done"
                                : ""
                            } 
                           ${completeStep === 2 ? "active-done" : ""}
                            ${step === 2 ? "active" : ""}`}
                          >
                            2
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => completeStep === 3 && setStep(3)}
                            className={`${
                              step === step + 1 && completeStep === 3
                                ? "active-done"
                                : ""
                            } 
                           ${completeStep === 3 ? "active-done" : ""}
                            ${step === 3 ? "active" : ""}`}
                          >
                            3
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            onClick={() => completeStep === 4 && setStep(4)}
                            className={`${
                              step === step + 1 && completeStep === 4
                                ? "active-done"
                                : ""
                            } 
                           ${completeStep === 4 ? "active-done" : ""}
                            ${step === 4 ? "active" : ""}`}
                          >
                            4
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchemas[step - 1]}
                      onSubmit={handleSubmit}
                    >
                      {({ values, setFieldValue, isSubmitting }) => (
                        <Form>
                          {step === 1 && (
                            <>
                              <h3 className="my-4 w-100 text-center text-uppercase">
                                Basic Information
                              </h3>

                              <div className="form-group">
                                <label>First Name</label>
                                <FastField
                                  type="text"
                                  name="firstName"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="firstName"
                                  component="div"
                                  className="error text-danger"
                                />
                              </div>
                              <div className="form-group">
                                <label>Last Name</label>
                                <FastField
                                  type="text"
                                  name="lastName"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="lastName"
                                  component="div"
                                  className="error text-danger"
                                />
                              </div>
                              <div className="form-group">
                                <label>WHAT IS YOUR DATE OF BIRTH?</label>
                                <div className="form-control">
                                  <FastField
                                    name="dob"
                                    render={({ field, form }) => (
                                      <ReactDatePicker
                                        selected={field.value}
                                        onChange={(date) =>
                                          form.setFieldValue("dob", date)
                                        }
                                        className="form-control text-black border-0"
                                      />
                                    )}
                                  />
                                  <ErrorMessage
                                    name="dob"
                                    component="div"
                                    className="error text-danger"
                                  />
                                </div>
                              </div>
                            </>
                          )}
                          {step === 2 && (
                            <>
                              <h3 className="my-4 w-100 text-center text-uppercase">
                                Additional Information
                              </h3>
                              <div className="text-start mt-2">
                                <h4 className="mt-3">Select Your Gender</h4>
                              </div>
                              <div className="select-gender-col">
                                <div className="row">
                                  <div className="col-6 pe-0">
                                    <FastField
                                      type="radio"
                                      id="test1"
                                      name="gender"
                                      value="Male"
                                      className="form-check-input"
                                    />
                                    <label
                                      htmlFor="test1"
                                      className="form-check-label"
                                    >
                                      <span className="gender-icon">
                                        <img src={male} alt="" />
                                      </span>
                                      <span>Male</span>
                                    </label>
                                  </div>
                                  <div className="col-6 ps-2">
                                    <FastField
                                      type="radio"
                                      id="test2"
                                      name="gender"
                                      value="Female"
                                      className="form-check-input"
                                    />
                                    <label
                                      htmlFor="test2"
                                      className="form-check-label"
                                    >
                                      <span className="gender-icon">
                                        <img src={female} alt="" />
                                      </span>
                                      <span>Female</span>
                                    </label>
                                  </div>
                                </div>
                                <ErrorMessage
                                  name="gender"
                                  component="div"
                                  className="error text-danger"
                                />
                              </div>
                              <div className="my-4">
                                <div className="form-group">
                                  <label>Address Line 1</label>
                                  <FastField
                                    type="text"
                                    name="addressLine1"
                                    className="form-control"
                                  />
                                  <ErrorMessage
                                    name="addressLine1"
                                    component="div"
                                    className="error text-danger"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Address Line 2</label>
                                  <FastField
                                    type="text"
                                    name="addressLine2"
                                    className="form-control"
                                  />
                                  <ErrorMessage
                                    name="addressLine2"
                                    component="div"
                                    className="error text-danger"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>City</label>
                                  <FastField
                                    type="text"
                                    name="city"
                                    className="form-control"
                                  />
                                  <ErrorMessage
                                    name="city"
                                    component="div"
                                    className="error text-danger"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>State</label>
                                  <FastField
                                    type="text"
                                    name="state"
                                    className="form-control"
                                  />
                                  <ErrorMessage
                                    name="state"
                                    component="div"
                                    className="error text-danger"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Identificational Information</label>
                                  <div
                                    style={{
                                      flexDirection: "row",
                                    }}
                                    className="justify-content-center row  align-items-center "
                                  >
                                    <div className="profile-pic-upload">
                                      <div className="cam-col">
                                        <img
                                          src={camera}
                                          id="prof-avatar"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                      <span className="text-center">
                                        Upload Profile Picture
                                      </span>
                                      <FastField
                                        type="file"
                                        id="profile_image"
                                        name="profile_image"
                                        render={({ field, form }) => (
                                          <input
                                            type="file"
                                            id="profile_image"
                                            name="profile_image"
                                            onChange={(e) => {
                                              form.setFieldValue(
                                                "profile_image",
                                                e.currentTarget.files[0]
                                              );
                                            }}
                                          />
                                        )}
                                      />
                                      <ErrorMessage
                                        name="profile_image"
                                        component="div"
                                        className="error text-danger"
                                      />
                                    </div>
                                    <div className="col-12 col-md-6 d-flex">
                                      <div className="profile-pic-upload d-flex flex-wrap justify-content-center">
                                        <div className="cam-col">
                                          <img src={camera} alt="" />
                                        </div>
                                        <span className="text-center">
                                          Upload Photo ID
                                        </span>
                                        <input
                                          type="file"
                                          id="photo_id"
                                          name="photo_id"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-6 d-flex">
                                      <div className="profile-pic-upload d-flex flex-wrap justify-content-center">
                                        <div className="cam-col">
                                          <img src={camera} alt="" />
                                        </div>
                                        <span className="text-center">
                                          Upload Clinical employment
                                        </span>
                                        <input
                                          type="file"
                                          id="clinical_employment"
                                          name="clinical_employment"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label>Country</label>
                                  <FastField
                                    as="select"
                                    name="country"
                                    className="form-select"
                                  >
                                    <option value="">Select</option>
                                    {countries.map((country, index) => (
                                      <option key={index} value={country}>
                                        {country}
                                      </option>
                                    ))}
                                  </FastField>
                                  <ErrorMessage
                                    name="country"
                                    component="div"
                                    className="error text-danger"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Time Zone</label>
                                  <FastField
                                    as="select"
                                    name="timeZone"
                                    className="form-select"
                                  >
                                    <option value="">Select</option>
                                    {timeZones.map((timezone, index) => (
                                      <option
                                        key={index}
                                        value={`${timezone.timezone}  ${timezone.continent}/${timezone.capital}`}
                                      >
                                        {timezone.timezone} {timezone.continent}
                                        /{timezone.capital}
                                      </option>
                                    ))}
                                  </FastField>
                                  <ErrorMessage
                                    name="timeZone"
                                    component="div"
                                    className="error text-danger"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Postal Code</label>
                                  <FastField
                                    type="text"
                                    name="postalCode"
                                    className="form-control"
                                  />
                                  <ErrorMessage
                                    name="postalCode"
                                    component="div"
                                    className="error text-danger"
                                  />
                                </div>
                              </div>
                            </>
                          )}
                          {step === 3 && (
                            <>
                              <h3 className="my-4 w-100 text-center text-uppercase">
                                Email verification
                              </h3>
                              <div className="form-group">
                                <label>Email</label>
                                <FastField
                                  type="text"
                                  name="email"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="error text-danger"
                                />
                              </div>
                              <div className="form-group">
                                <label>Code</label>
                                <input type="text" className="form-control" />
                              </div>
                            </>
                          )}
                          {step === 4 && (
                            <>
                              <h3 className="my-4 w-100 text-center text-uppercase">
                                Credentials Information
                              </h3>
                              <div className="form-group">
                                <label>Password</label>
                                <FastField
                                  type="password"
                                  name="password"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="password"
                                  component="div"
                                  className="error text-danger"
                                />
                              </div>
                              <div className="form-group">
                                <label>Confirm Password</label>
                                <FastField
                                  type="password"
                                  name="confirmPassword"
                                  className="form-control"
                                />
                                <ErrorMessage
                                  name="confirmPassword"
                                  component="div"
                                  className="error text-danger"
                                />
                              </div>
                            </>
                          )}
                          <div className="mt-5">
                            <button
                              type="submit"
                              className="btn btn-primary w-100 btn-lg login-btn step1_submit"
                            >
                              {step === 1 ? "Next" : ""}
                              {step === 2 ? "Next" : ""}
                              {step === 3 ? "Send" : ""}
                              {step === 4 ? "Submit" : ""}
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                    {/* <form>
                      {step === 2 && (
                        <>
                          <h3 className="my-4 w-100 text-center text-uppercase">
                            Additional Information
                          </h3>
                          <div className="text-start mt-2">
                            <h4 className="mt-3">Select Your Gender</h4>
                          </div>
                          <div className="select-gender-col">
                            <div className="row">
                              <div className="col-6 pe-0">
                                <input
                                  type="radio"
                                  id="test1"
                                  name="gender"
                                  defaultChecked=""
                                  defaultValue="Male"
                                />
                                <label htmlFor="test1">
                                  <span className="gender-icon">
                                    <img src={male} alt="" />
                                  </span>
                                  <span>Male</span>
                                </label>
                              </div>
                              <div className="col-6 ps-2">
                                <input
                                  type="radio"
                                  id="test2"
                                  name="gender"
                                  defaultValue="Female"
                                />
                                <label htmlFor="test2">
                                  <span className="gender-icon">
                                    <img src={female} alt="" />
                                  </span>
                                  <span>Female</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="my-4">
                            <div className="form-group">
                              <label>Address Line 1</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label>Address Line 2</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label>City</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label>State</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label>Country</label>
                              <select className="form-select">
                                <option>Select</option>
                                {countries.map((country, index) => (
                                  <option key={index} value={country}>
                                    {country}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Time Zone</label>
                              <select className="form-select">
                                <option>Select</option>
                                {timeZones.map((timezone, index) => (
                                  <option
                                    key={index}
                                    value={`${timezone.timezone}  ${timezone.continent}/${timezone.capital}`}
                                  >
                                    {timezone.timezone} {timezone.continent}/
                                    {timezone.capital}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="form-group">
                              <label>Postal Code</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </>
                      )}
                      {step === 3 && (
                        <>
                          <h3 className="my-4 w-100 text-center text-uppercase">
                            Email verfication
                          </h3>
                          <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Code</label>
                            <input type="text" className="form-control" />
                          </div>
                        </>
                      )}
                      {step === 4 && (
                        <>
                          <h3 className="my-4 w-100 text-center text-uppercase">
                            Credentials Information
                          </h3>
                          <div className="form-group">
                            <label>Password</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="text" className="form-control" />
                          </div>
                        </>
                      )}
                      <div className="mt-5">
                        <button
                          // to="/register-step-2"
                          onClick={(e) => {
                            e.preventDefault();
                            handleStep();
                          }}
                          className="btn btn-primary w-100 btn-lg login-btn step1_submit"
                        >
                          {step === 1 ? "Next" : ""}
                          {step === 2 ? "Next" : ""}
                          {step === 3 ? "Send" : ""}
                          {step === 4 ? "Submit" : ""}
                        </button>
                      </div>
                    </form> */}
                  </div>
                </div>
                <div className="login-bottom-copyright">
                  <span>© 2022 Doccure. All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
          {/* /Register Content */}
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default PalmistRegister;
