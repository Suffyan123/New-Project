import React from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import { itemRender, onShowSizeChange } from "./paginationfunction";
import { Link } from "react-router-dom";

const Transaction = () => {
  const data = [
    {
      id: 1,
      transactionId: "#IN0001",
      TotalAmount: "$100.00",
      CreatedDate: "09 Sep 2019",
      CreateDate: "320,800",
    },
    {
      id: 2,
      transactionId: "#IN0002",
      TotalAmount: "$200.00",
      CreatedDate: "12 Jan 2019",
      CreateDate: "206,850",
    },
    {
      id: 3,
      transactionId: "#IN0003",
      TotalAmount: "$250.00",
      CreatedDate: "29 Mar 2019",
      CreateDate: "850,000",
    },
    {
      id: 4,
      transactionId: "#IN0004",
      TotalAmount: "$150.00",
      CreatedDate: "25 Aor 2011",
      CreateDate: "163,000",
    },
    {
      id: 5,
      transactionId: "#IN0005",
      TotalAmount: "$350.00",
      CreatedDate: "28 Nov 2008",
      CreateDate: "170,750",
    },
  ];
  const columns = [
    {
      title: "Transaction Id",
      dataIndex: "transactionId",
      render: (text) => (
        <>
          <Link
            to="/admin/invoice"
            className="text-decoration-none text-primary"
          >
            {text}
          </Link>
        </>
      ),
    },

    {
      title: "Total Amount",
      dataIndex: "TotalAmount",
    },
    {
      title: "Type",
      dataIndex: "",
      render: () => (
        <span>
          {" "}
          <span className="btn-success ">Deposit</span>
        </span>
      ),
    },
  ];

  return (
    <>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-12">
                      <h3 className="page-title">Transactions</h3>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                          <Link to="/admin">Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">Transactions</li>
                      </ul>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <Table
                
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={data}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default Transaction;
