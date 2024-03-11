import React, { useState } from "react";
import { Modal,Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import {  Button } from "react-bootstrap";
import SidebarNav from "../sidebar";
import { Link } from "react-router-dom";
import { ErrorMessage, FastField, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useLandingPageStore } from "../../../store/landingStore";
import { Camera } from "react-feather";
import axios from "axios";
import { toast } from "react-toastify";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG09,
} from "../../../client/components/home/clinic/img.jsx"

const Specialities = () => {
  const imagesArray  = [IMG01,IMG02,IMG03,IMG04,IMG05,IMG06,IMG07,IMG08,IMG09,IMG01,IMG02,IMG03,IMG04,IMG05,IMG06,IMG07,IMG08,IMG09,IMG01,IMG02,IMG03,IMG04,IMG05,IMG06,IMG07,IMG08,IMG09]
  const { categories, updateCategories } = useLandingPageStore();
  const [categoryM, setCategoryM] = useState(false);
  const [categoryEM, setCategoryEM] = useState(false);
 console.log("cye",categories)
  const handleEdit = (category) => {
    setCategoryEM(category);
  };
  const handleDelete = (id) => {
    console.log("delete");
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    updateCategories(updatedCategories);
  };
  const data =
  categories &&
  categories?.map((item, index) => {
    return {
      key: index,
      id: item?._id,
      Title: item?.categoryName,
      Rank: item?.rank,
      image: imagesArray[index],
    };
  });
  const columns = [
    {
      title: "Category",
      dataIndex: "Title",
      key: "Title",
      render: (text, record) => (
        <div>
          <img
            src={record.image}
            alt={record.Title}
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
            }}
          />
          {record.Title}
        </div>
      ),
    },
    {
      title: "Rank",
      dataIndex: "Rank",
      key: "Rank",
      align: "center",
    },
    {
      title: "Actions",
      key: "Actions",
      align: "center",
      render: (text, record) => (
        <div>
          <Button variant="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  // Assuming 'categories' is the array of data you want to display in the table

  console.log(data);
  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-7 col-aut0">
                <h3 className="page-title">Specialities</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Specialities</li>
                </ul>
              </div>
              <div className="col-sm-5 col">
                <button
                  onClick={() => setCategoryM(!categoryM)}
                  data-bs-toggle="modal"
                  className="btn btn-primary float-end mt-2"
                >
                  Add
                </button>
              </div>
              <style>
                {`
                .avatar-upload-container {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                }
                
                .avatar-upload-label {
                  cursor: pointer;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-bottom: 10px;
                }
                
                .avatar-preview {
                  width: 80px;
                  height: 80px;
                  border-radius: 50%;
                  overflow: hidden;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: #f0f0f0;
                  margin-bottom: 5px;
                }
                
                .avatar-preview img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  border-radius: 50%;
                }
                
                .text-center {
                  text-align: center;
                }
                
                /* Add any additional styles as needed */
                
                `}
              </style>
              <Modal
                centered
                visible={categoryM}
                onOk={() => setCategoryM(!categoryM)}
                onCancel={() => setCategoryM(!categoryM)}
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
                {/* <Formik
                  initialValues={{
                    id: Math.random(1, 9),
                    title: "",
                    image: "",
                    rank: "",
                  }}
                  validationSchema={Yup.object().shape({
                    title: Yup.string().required("Title is required"),
                    image: Yup.mixed()
                      .required("Image is required")
                      .test("fileType", "Invalid file type", (value) => {
                        return value && value.type.startsWith("image/");
                      }),
                    rank: Yup.string().required("Rank is required"),
                  })}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    // Handle education submission logic here
                    console.log(values);
                    updateCategories([...categories, values]);
                    resetForm();
                    setCategoryM(!categoryM);
                    setSubmitting(false);
                  }}
                >
                  {({ isSubmitting, setFieldValue, values }) => (
                    <Form>
                      <div className="d-flex justify-content-start align-items-center flex-column gap-3 ">
                        <div className="w-100">
                          <Field
                            type="text"
                            className="form-control text-center "
                            placeholder="Category Name"
                            name="title"
                          />
                          <ErrorMessage
                            name="title"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        <div className="w-100"></div>
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
                </Formik> */}
                <Formik
                  initialValues={{
                    // id: Math.random(1, 9),
                    title: "",
                    image: "",
                    rank: "",
                  }}
                  validationSchema={Yup.object().shape({
                    title: Yup.string().required("Title is required"),
                    // image: Yup.mixed()
                      // .required("Image is required")
                      // .test("fileType", "Invalid file type", (value) => {
                        // return value && value.type.startsWith("image/");
                      // }),
                    rank: Yup.string().required("Rank is required"),
                  })}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    // Handle education submission logic here
                    console.log(JSON.stringify(values.image));
                    updateCategories([...categories, values]);
                    const addCatagories = async () => {
                      try {

                        // let formData = new FormData();
                        // formData.append("title", values.title);
                        // formData.append("image", values.image);
                        // formData.append("rank", values.rank);
                
                        // // Use the formData object as needed, such as sending it with an HTTP request
                        // console.log("FormData:", formData);

                          const response = await axios.post("http://localhost:4007/api/addCategory",
                          values,
                          )
                          console.log("response",response)
                          let status = response?.status;
                          let responseMsg = response?.data?.message;
                          if(status  == 200 && responseMsg == "Category is created successfully")
                          {
                           toast.success(responseMsg)
                          }
                      } catch (error) {
                        console.log("There are errors in loading data ", error)
                      }

                    }
                    addCatagories()
                    resetForm();
                    setCategoryM(!categoryM);
                    setSubmitting(false);
                  }}
                >
                  {({ isSubmitting, setFieldValue, values }) => (
                    <Form >
                      <div className="d-flex justify-content-start align-items-center flex-column gap-3 ">
                        {/* ... Other fields */}
                        <div className="avatar-upload-container">
                          <label
                            htmlFor="image"
                            className="avatar-upload-label"
                          >
                            <div className="avatar-preview">
                              {values.image ? (
                                <img
                                  src={URL.createObjectURL(values.image)}
                                  alt="Avatar Preview"
                                />
                              ) : (
                                <Camera size={30} color="black" />
                              )}
                            </div>
                            <span className="text-center">
                              Upload Category Picture
                            </span>
                            {/* Hidden input field */}
                            <input
                              type="file"
                              id="image"
                              name="image"
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                setFieldValue("image",file)
                              }}
                              style={{ display: "none" }}
                            />

                          </label>
                          <ErrorMessage
                            name="image"
                            component="div"
                            className="error text-danger"
                          />
                        </div>
                        <div className="w-100">
                          <Field
                            type="text"
                            className="form-control text-center "
                            placeholder="Category Name"
                            name="title"
                          />
                          <ErrorMessage
                            name="title"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        {/* Rank Selection Field */}
                        <div className="w-100">
                          <Field
                            as="select"
                            className="form-control text-center"
                            name="rank"
                          >
                            <option
                              style={{
                                display: "hidden",
                              }}
                              value=""
                              label="Select Rank"
                            />
                            <option
                              value="1"
                              label="1st"
                              style={{
                                padding: "5px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            />
                            <option
                              value="2"
                              label="2nd"
                              style={{
                                padding: "5px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            />
                            <option
                              value="3"
                              label="3rd"
                              style={{
                                padding: "5px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            />
                            <option
                              value="4"
                              label="4th"
                              style={{
                                padding: "5px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            />
                            <option
                              value="5"
                              label="5th"
                              style={{
                                padding: "5px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            />
                          </Field>
                          <ErrorMessage
                            name="rank"
                            component="div"
                            className="text-danger"
                          />
                        </div>

                        {/* ... Other fields */}

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
              <Modal
                centered
                visible={categoryEM}
                onOk={() => setCategoryEM(!categoryEM)}
                onCancel={() => setCategoryEM(!categoryEM)}
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
                    title: categoryEM.title,
                    image: categoryEM.image,
                    rank: categoryEM.rank,
                  }}
                  validationSchema={Yup.object().shape({
                    title: Yup.string().required("Title is required"),
                    image: Yup.mixed()
                      .required("Image is required"),
                      // .test("fileType", "Invalid file type", (value) => {
                      //   return value && value.type.startsWith("image/");
                      // }),
                    rank: Yup.string().required("Rank is required"),
                  })}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    // Handle education submission logic here
                    console.log(values);
                    const index = categories.findIndex(
                      (category) => category.id === categoryEM.id
                    );

                    if (index !== -1) {
                      // Create a new array with the updated category
                      const updatedCategories = [...categories];
                      updatedCategories[index] = {
                        ...updatedCategories[index],
                        ...values,
                      };
                      console.log(updateCategories);
                      // Update the state with the new array
                      updateCategories(updatedCategories);
                    }
                    resetForm();
                    setCategoryEM(!categoryEM);
                    setSubmitting(false);
                  }}
                >
                  {({ isSubmitting, setFieldValue, values }) => (
                    <Form>
                      <div className="d-flex justify-content-start align-items-center flex-column gap-3 ">
                        <div className="avatar-upload-container">
                          <label
                            htmlFor="image"
                            className="avatar-upload-label"
                          >
                            <div className="avatar-preview">
                              {/* {cImage ? (
                                <img
                                  src={URL.createObjectURL(cImage)}
                                  alt="Avatar Preview"
                                />
                              ) : (
                                <Camera size={30} color="black" />
                              )} */}
                            </div>
                            <span className="text-center">
                              Upload Category Picture
                            </span>
                            {/* Hidden input field */}
                            <input
                              type="file"
                              id="image"
                              name="image"
                              accept="image/*"
                              onChange={(e) => {
                                setFieldValue(
                                  "image",
                                  e.currentTarget.files[0]
                                );
                                // setCImage(e.currentTarget.files[0]);
                              }}
                              style={{ display: "none" }}
                            />
                          </label>
                          <ErrorMessage
                            name="image"
                            component="div"
                            className="error text-danger"
                          />
                        </div>
                        <div className="w-100">
                          <Field
                            type="text"
                            className="form-control text-center "
                            placeholder="Category Name"
                            name="title"
                          />
                          <ErrorMessage
                            name="title"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                        {/* Rank Selection Field */}
                        <div className="w-100">
                          <Field
                            as="select"
                            className="form-control text-center"
                            name="rank"
                          >
                            <option
                              style={{
                                display: "hidden",
                              }}
                              value=""
                              label="Select Rank"
                            />
                            <option
                              value="1"
                              label="1st"
                              style={{
                                padding: "5px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            />
                            <option
                              value="2"
                              label="2nd"
                              style={{
                                padding: "5px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            />
                            <option
                              value="3"
                              label="3rd"
                              style={{
                                padding: "5px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            />
                            <option
                              value="4"
                              label="4th"
                              style={{
                                padding: "5px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            />
                            <option
                              value="5"
                              label="5th"
                              style={{
                                padding: "5px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            />
                          </Field>
                          <ErrorMessage
                            name="rank"
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
            </div>
          </div>
          {/* /Page Header
          <div className="row">
            <div className="col-sm-12">
              <div className="card border ">
                <section className="w-100 table-responsive d-flex flex-column  ">
                  <div className="w-100 d-flex justify-content-between  p-4 ">
                    <th>Category</th>
                    <div className="w-50 d-flex justify-content-between align-items-center ">
                      <th>Rank</th>
                      <th>Actions</th>
                    </div>
                  </div>
                  <div className="d-flex flex-column-reverse">
                    {categories.map((category) => (
                      <div
                        className="p-4 d-flex justify-content-between w-100"
                        key={category.id}
                      >
                        <div>
                          <img  
                              src={imagesArray[index]}  
                              alt={category.title}  
                              style={{ 
                            width: "50px",  
                                height: "50px",  
                                objectFit: "cover",  
                                borderRadius:"20px",  
                                paddingRight:"10px"  
                              }}  
                            />
                          {category.categoryName}
                        </div>
                        <div className="w-50 d-flex justify-content-between align-items-center ">
                          <h4>{category.rank}</h4>
                          <div>
                            <Button
                              variant="primary"
                              onClick={() => handleEdit(category)}
                            >
                              Edit
                            </Button>{" "}
                            <Button
                              variant="danger"
                              onClick={() => handleDelete(category.id)}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div> */}

          {categories && (
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <Table
                        style={{ overflowX: "auto" }}
                        columns={columns}
                        dataSource={data}
                        rowKey={(record) => record.id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Specialities;
