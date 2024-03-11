import { Table } from "antd";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import SidebarNav from "../sidebar";
import {
  patient1,
  patient10,
  patient11,
  patient12,
  patient13,
  patient14,
  patient15,
  patient2,
  patient3,
  patient4,
  patient5,
  patient6,
  patient7,
  patient8,
  patient9,
} from "../imagepath";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Doctors = () => {
  const DocArray = [patient1,patient2,patient3,patient4,patient5,patient6,patient7,patient8,patient8,patient9,patient10,patient11,patient12,patient13,patient14,patient15]
  const [userData, setUserData] = useState([]);
  const activeStatus = false;
  // get all active palmists

  const getAllPalmist = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4007/api/getAllPalmists"
      );
      // console.log("get all ", response.data);
      const data = response?.data?.data?.map((item,index) => {
        return {
          userImage: DocArray[index],
          userFirstName: item.userFirstName + item.userLastName,
          userServicesItems: "Palmist Services",
          joiningDate: item.joiningDate,
          Speciality:"I am special in Palmistry",
          earnedMoney: item.earnedMoney,
          key: item._id,
          activeStatus: item.activeStatus,
          _id: item._id,
          // message:item.message
        };
      });
      setUserData(data);
    } catch (error) {
      console.log("there are errors in fetching the results", error);
    }
  };

  useEffect(() => {
    getAllPalmist();
  }, []);

  const columns = [
    {
      title: "Palmist Name",
      dataIndex: "DoctorName",
      render: (text, record) => (
        <>
           <Link className="avatar mx-2"  to = {`/admin/profile/${record._id}`}>
            <img className="rounded-circle" src={record.userImage} />
          </Link>
         <Link className="avatar mx-2" to = {`/admin/profile/${record._id}`} >
          <span>{record.userFirstName}</span>
         </Link>
       
        </>
      ),
      sorter: (a, b) => a.DoctorName.length - b.DoctorName.length,
    },
    {
      title: "Speciality",
      dataIndex: "Speciality",
      sorter: (a, b) => a.Speciality.length - b.Speciality.length,
    },
    {
      title: "Member Since",
      dataIndex: "joiningDate",
      render: (text, record) =>(
      <> 
        <span>{record.joiningDate.created}</span>  
      </>
     ),
      // sorter: (a, b) => a.joiningDate.length - b.joiningDate.length,
    },
    {
      title: "Earned Money",
      dataIndex: "earnedMoney",
      key: "_id",
      render: (text, record) => (
        <>
          <span>{record.earnedMoney}</span>
        </>
      ),
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: "Account Status",
      dataIndex: "_id",
      render: (text, record) => {
        return (
          <div className="status-toggle">
            <input
              id={`rating${record?._id}`}
              className="check"
              type="checkbox"
              value={record._id}
              checked={record.activeStatus}
            />
            <label
              onClick={() => {
                const newData = userData;

                const data = newData.filter((item) => item._id === record._id);
                // console.log("1233", data);
                const newItem = {
                  ...data[0],
                  activeStatus: !data[0].activeStatus,
                };

                const updatedUserData = userData.map((item) => {
                  if (item._id === record._id) {
                    // Replace the item at record._id position with newItem
                    return newItem;
                  } else {
                    return item;
                  }
                });
                let palmistStatus = newItem?.activeStatus;
                let Id = newItem?._id;
                const sendValues = async () => {
                  try {
                    const response = await axios.patch(
                      `http://localhost:4007/api/updateStatus/,${Id}`,
                      { palmistStatus }
                    );
                    if (
                      response.status == 200 &&
                      response.data.message == "OK user is active" &&
                      response.data.data.activeStatus == true
                    ) {
                      toast.success("Palmist is activated");
                    } else if (
                      response.status == 201 &&
                      response.data.message == "Ok user is deactive" &&
                      response.data.data.activeStatus == false
                    ) {
                      toast.error("Palmist is deactivated");
                    } else {
                      response.status;
                    }
                  } catch (error) {
                    console.log(
                      "there are errors in fetching the results",
                      error
                    );
                  }
                };
                sendValues();

                setUserData(updatedUserData);
              }}
              value={activeStatus}
              htmlFor={`rating${record?._id}`}
              className="checktoggle checkbox-bg"
            >
              {/* checkbox */}
            </label>
          </div>
        );
      },
      key: "_id",
      // sorter: (a, b) => a._id.length - b._id.length,
    },
  ];
  return (
    <>
      <SidebarNav />
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">List of Palmist</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">List of Palmist</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <Table
                      pagination={{
                        total: userData.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={userData}
                      rowKey={(record) => record._id}
                      //  onChange={this.handleTableChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctors;
