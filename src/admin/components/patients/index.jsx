import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";
import SidebarNav from "../sidebar";
import { itemRender, onShowSizeChange } from "../paginationfunction";
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

const Patients = () => {

  const [clinetsRecord,setClientRecords]  = useState([])

  const userAge=[10,56,56,23,45,45,45,45,56,65,34,76,12,34,45];
  const userImages = [patient1,patient2,patient3,patient4,patient5,patient6,patient7,patient8,patient9,patient10,patient11,patient12,patient13,patient14,patient15]
  const userPhone = ["0345-52393839","0342-52923819","0340-5138383","0312-52933839","0316-5293821","0343-5283389","0345-52393839","0345-52393839","0345-52393839","0345-52393839","0345-52393839","0345-52393839","0345-52393839","0345-52393839","0345-52393839"]
  const userAddress = ["House # 122-A Islamabad","House # 123-B Islamabad","House # 125-D Islamabad","House # 432-F Islamabad","House # 112-T Islamabad","House # 434-C Islamabad","House # 428-X Islamabad","House # 428-D Islamabad","House # 428-F Islamabad","House # 323-C Islamabad","House # 344-V Islamabad","House # 115-F Islamabad","House # 434-F Islamabad","House # 131-C Islamabad","House # 428-A Islamabad"]
  const getClinetsData  =  async()=>{

  try {
    const response   = await axios.get("http://localhost:4007/api/getAllClients")
    console.log("reponse",response)

   
   
    // let i = 0
    const data  = response?.data?.data.map((item,index)=>{
     return {
      _id:item._id,
      userName:item.name,
      email:item.useremail,
      userAge:userAge[index],
      Phone:userPhone[index],
      Address:userAddress[index],
      image:userImages[index],
    }
  })
  // i++
    setClientRecords(data)
  } catch (error) {
    
  }
}


useEffect(()=>{

  getClinetsData()
},[])


  const columns = [
    {
      title: "Customer ID",
      dataIndex: "_id",
      key:"_id",
      // sorter: (a, b) => a.PatientID.length - b.PatientID.length,
    },
    {
      title: "Customer Name",
      dataIndex: "userName",
      render: (text, record) => (
        <>
          <Link className="avatar mx-2" to="/admin/profile">
            <img className="rounded-circle" src={record.image} />
          </Link>
          <Link to="/admin/profile">{record.userName}</Link>
        </>
      ),
      sorter: (a, b) => a.PatientName.length - b.PatientName.length,
    },
    {
      title: "Age",
      dataIndex: "userAge",
      render:(text,record)=>(
        <>
         <span>{record.userAge}</span>
        </>
        ),
        // render: (text) => <>{text}</>,
        sorter: (a, b) => a.userAge.length - b.userAge.length,
        key:"_id",
    },
    {
      title: "Address",
      dataIndex: "Address",    
      key:"_id",
      // sorter: (a, b) => a.Address.length - b.Address.length,
    },
    {
      title:"Email Address",
      dataIndex:"email",
      key:"_id",
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      key:"_id",
      sorter: (a, b) => a.Phone.length - b.Phone.length,
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
                <h3 className="page-title">List of Patient</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">List of Patient</li>
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
                        total: clinetsRecord.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                        showSizeChanger: true,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                      }}
                      style={{ overflowX: "auto" }}
                      columns={columns}
                      dataSource={clinetsRecord}
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

export default Patients;
