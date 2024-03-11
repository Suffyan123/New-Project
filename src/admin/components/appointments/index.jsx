import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import SidebarNav from "../sidebar";
import {
  doctor_thumb_01,
  doctor_thumb_02,
  doctor_thumb_03,
  doctor_thumb_04,
  doctor_thumb_05,
  doctor_thumb_06,
  doctor_thumb_07,
  doctor_thumb_08,
  doctor_thumb_09,
  doctor_thumb_10,
  patient1,
  patient10,
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

const Appointments = () => {
  const data = [
    {
      id: 1,
      DoctorName: "Ruby Perrin",
      Speciality: "Love Reading",
      PatientName: "Charlene Reed",
      Earned: "$5000.00 ",
      Date: "27 Sep 2019",
      time: "11.00 AM - 11.15 AM",
      Amount: "$200.00",
      image: patient5,
      images1: patient1,
      Status: "checkbox",
    },
    {
      id: 2,
      DoctorName: "Darren Elder",
      Speciality: "Palm Reading",
      PatientName: "Travis Trimble",
      Earned: "$3300.00 ",
      Date: "1 Nov 2019",
      time: "11.00 PM - 11.35 PM",
      Amount: "$300.00",
      image: patient3,
      images1: patient2,
      Status: "checkbox",
    },
    {
      id: 3,
      DoctorName: "Deborah Angel",
      Speciality: "Tarot Reading ",
      PatientName: "Carl Kelly",
      Earned: "$4100.00",
      Date: "3 Nov 2019",
      time: "12.00 PM - 12.15 PM",
      Amount: "$150.00",
      image: patient1,
      images1: patient3,
      Status: "checkbox",
    },
    {
      id: 4,
      DoctorName: "Sofia Brient",
      Speciality: "Love Reading ",
      PatientName: "Michelle Fairfax",
      Earned: "$4000.00 ",
      Date: "16 Jun 2019",
      time: "1.00 PM - 1.20 PM",
      Amount: "$150.00",
      image: patient2,
      images1: patient4,
      Status: "checkbox",
    },
    {
      id: 5,
      DoctorName: "Marvin Campbell",
      Speciality: "Palm Reading ",
      PatientName: "Gina Moore",
      Earned: "$2000.00 ",
      Date: "22 Aug 2019",
      time: "1.00 PM - 1.15 PM",
      Amount: "$200.00",
      image: patient4,
      images1: patient5,
      Status: "checkbox",
    },
    {
      id: 1,
      DoctorName: "Ruby Perrin",
      Speciality: "Love Reading",
      PatientName: "Charlene Reed",
      Earned: "$5000.00 ",
      Date: "27 Sep 2019",
      time: "11.00 AM - 11.15 AM",
      Amount: "$200.00",
      image: patient5,
      images1: patient1,
      Status: "checkbox",
    },
    {
      id: 2,
      DoctorName: "Darren Elder",
      Speciality: "Palm Reading",
      PatientName: "Travis Trimble",
      Earned: "$3300.00 ",
      Date: "1 Nov 2019",
      time: "11.00 PM - 11.35 PM",
      Amount: "$300.00",
      image: patient3,
      images1: patient2,
      Status: "checkbox",
    },
    {
      id: 3,
      DoctorName: "Deborah Angel",
      Speciality: "Tarot Reading ",
      PatientName: "Carl Kelly",
      Earned: "$4100.00",
      Date: "3 Nov 2019",
      time: "12.00 PM - 12.15 PM",
      Amount: "$150.00",
      image: patient1,
      images1: patient3,
      Status: "checkbox",
    },
    {
      id: 4,
      DoctorName: "Sofia Brient",
      Speciality: "Love Reading ",
      PatientName: "Michelle Fairfax",
      Earned: "$4000.00 ",
      Date: "16 Jun 2019",
      time: "1.00 PM - 1.20 PM",
      Amount: "$150.00",
      image: patient2,
      images1: patient4,
      Status: "checkbox",
    },
    {
      id: 5,
      DoctorName: "Marvin Campbell",
      Speciality: "Palm Reading ",
      PatientName: "Gina Moore",
      Earned: "$2000.00 ",
      Date: "22 Aug 2019",
      time: "1.00 PM - 1.15 PM",
      Amount: "$200.00",
      image: patient4,
      images1: patient5,
      Status: "checkbox",
    },
  ];
  const columns = [
    {
      title: "Palmist Name",
      dataIndex: "DoctorName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.image} />
          </Link>
          <Link to="/admin/profile" className="text-decoration-none">
            {text}
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
      title: "Customer Name",
      dataIndex: "PatientName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.images1} />
          </Link>
          <Link to="/admin/profile">{text}</Link>
        </>
      ),
      sorter: (a, b) => a.PatientName.length - b.PatientName.length,
    },

    {
      title: "Apointment Time",
      render: (record) => (
        <>
          <span className="user-name">{record.Date}</span>
          <br />
          <span className="d-block">{record.time}</span>
        </>
      ),
      sorter: (a, b) => a.Date.length - b.time.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => {
        return (
          <div className="status-toggle">
            <input
              id={`rating${record?.id}`}
              className="check"
              type="checkbox"
              defaultChecked="false"
            />
            <label
              htmlFor={`rating${record?.id}`}
              className="checktoggle checkbox-bg"
            >
              checkbox
            </label>
          </div>
        );
      },
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Amount",
      dataIndex: "Amount",
      sorter: (a, b) => a.Amount.length - b.Amount.length,
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
                <h3 className="page-title">Appointments</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Appointments</li>
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
                        total: data.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
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
        </div>
      </div>
    </>
  );
};

export default Appointments;
