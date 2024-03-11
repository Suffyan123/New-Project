import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import { patient1, patient2, patient3, patient4, patient5 } from "../imagepath";

import { Link } from "react-router-dom";
const DoctorListDesboard = () => {
  const data = [
    {
      id: 1,
      DoctorName: "Ruby Perrin",
      Speciality: "Love Reading ",
      Earned: "$3200.00 ",
      Date: "27 Sep 2019",
      time: "03.40 PM",
      image: patient3,
    },
    {
      id: 2,
      DoctorName: "Darren Elder",
      Speciality: "Tarot Reading ",
      Earned: "$3100.00 ",
      Date: "1 Nov 2019",
      time: "02.59 PM",
      image: patient5,
    },
    {
      id: 3,
      DoctorName: "Deborah Angel",
      Speciality: "Palm Reading ",
      Earned: "$4000.00",
      Date: "3 Nov 2019",
      time: "09.59 PM",
      image: patient1,
    },
    {
      id: 4,
      DoctorName: "Sofia Brient",
      Speciality: "love Reading ",
      Earned: "$3200.00 ",
      Date: "16 Jun 2019",
      time: "04.50 PM",
      image: patient2,
    },
    {
      id: 5,
      DoctorName: "Marvin Campbell",
      Speciality: "Tarot Reading ",
      Earned: "$3500.00 ",
      Date: "22 Aug 2019",
      time: "01.50 PM",
      image: patient4,
    },
  ];
  const columns = [
    {
      title: "Doctor Name",
      dataIndex: "DoctorName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.image} />
          </Link>
          <Link to="/admin/profile">{text}</Link>
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
      title: "Earned",
      dataIndex: "Earned",
      sorter: (a, b) => a.Earned.length - b.Earned.length,
    },
    {
      title: "Review",
      dataIndex: "Rating",
      render: () => (
        <>
          <span>
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star text-warning" />
            <i className="fe fe-star-o text-secondary" />
          </span>
        </>
      ),
      sorter: (a, b) => a.Rating.length - b.Rating.length,
    },
  ];
  return (
    <>
      <div className="col-md-6 d-flex">
        {/* Recent Orders */}
        <div className="card card-table flex-fill">
          <div className="card-header">
            <h4 className="card-title">Palmist List</h4>
          </div>
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
                //  onChange={this.handleTableChange}
              />
            </div>
          </div>
        </div>
        {/* /Recent Orders */}
      </div>
    </>
  );
};
export default DoctorListDesboard;
