// import React, { useEffect, useState } from "react";
// import Header from "./header";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import Select from "react-select";
// import ToggleSwitch from "./toggleSwitch";
// import { Link } from "react-router-dom/cjs/react-router-dom";
// import {
//   Doctor1,
//   Doctor2,
//   Doctor3,
//   Doctor4,
//   consult,
//   exper,
//   mapplus,
// } from "../components/home/image";
// import { LuPhone } from "react-icons/lu";
// import { FaHeart } from "react-icons/fa";
// import { FiMessageCircle } from "react-icons/fi";
// import { FcVideoCall } from "react-icons/fc";
// import { useUserStore } from "../../store/userStore";
// import { useLandingPageStore } from "../../store/landingStore";
// const AllCategory = () => {
//   const { User } = useUserStore();
//   const {allAdvisors}=useLandingPageStore()
//   const options = [
//     { value: "all", label: "Select Speciality" },
//     { value: "cardiology", label: "Cardiology" },
//     { value: "neurology", label: "Neurology" },
//     { value: "urology", label: "Urology" },
//   ];
//   const card = [
//     {
//       id: 1,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor1,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 2,
//       status: "online",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor2,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 3,
//       status: "offline",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor1,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 4,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor3,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 4,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor1,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 4,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor4,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 4,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor1,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 4,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor2,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 4,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor3,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 4,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor4,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 4,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor1,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 4,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor2,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 4,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor4,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//       id: 4,
//       status: "busy",
//       category: "PSICOLOGIST",
//       name: "Dr. Ruby Perrin",
//       description: "MBBS, MD - General Medicine, DNB - Cardiology",
//       image: Doctor3,
//       level: "Experienced",
//       experience: 25,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//   ];
//   return (
//     <>
//       <Header />
//       <main
//         style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
//         className="container"
//       >
//         <section
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "start",
//             gap: "5px",
//           }}
//         >
//           <h5
//             style={{
//               color: "black",
//               fontSize: "1.5rem",
//               fontWeight: "600",
//             }}
//           >
//             Home
//           </h5>
//           <MdKeyboardArrowRight size={30} color="black" />
//           <h5
//             style={{
//               color: "black",
//               fontSize: "1.5rem",
//               fontWeight: "600",
//             }}
//           >
//             All Advisors
//           </h5>
//         </section>
//         <section>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               gap: "10px",
//               color: "black",
//               marginTop: "5rem",
//               marginBottom: "2rem",
//               alignItems: "center",
//             }}
//           >
//             {/* <img
//               src={data ? data.image : ""}
//               className="img-fluid"
//               alt="Speciality"
//               style={{ width: "44px", height: "44px" }}
//             /> */}
//             <h3 style={{ fontSize: "2.75rem", fontWeight: "700" }}>
//               All Advisors
//             </h3>
//           </div>
//           <p
//             style={{
//               WebkitTextSizeAdjust: "100%",
//               WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
//               color: "black",
//               fontSize: "1.3rem",
//               fontWeight: "400",
//               fontFamily: "Poppins",
//               lineHeight: "1.5715",
//               boxSizing: "border-box",
//               fontVariant: "tabular-nums",
//               fontFeatureSettings: "tnum",
//               textAlign: "left",
//               overflowWrap: "break-word",
//             }}
//           >
//             Love relationships can be turbulent…up one minute and down the next.
//             A detailed psychic reading can bring clarity and balance to your
//             love life. Connect to a psychic love expert now and discover your
//             heart’s deepest desires.
//           </p>
//         </section>
//         <section
//           style={{
//             color: "rgba(0, 0, 0, 0.85)",
//             boxSizing: "border-box",
//             display: "flex",
//             padding: "30px",
//             alignItems: "end",
//             justifyContent: "center",
//             gap: "10px",
//             paddingTop: "30px",
//             backgroundColor: "#FFFFFF",
//             boxShadow: "rgba(0, 0, 0, 0.0745098039) 0px 0px 8px 0px",
//             border: "#C7C7C7 1px solid",
//             borderRadius: "25px",
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "5px",
//               width: "25%",
//             }}
//           >
//             <span
//               style={{
//                 color: "gray",
//                 fontSize: "1rem",
//                 fontWeight: "normal",
//               }}
//             >
//               Show only
//             </span>
//             <Select
//               options={options}
//               placeholder="Any"
//               styles={{
//                 control: (provided) => ({
//                   ...provided,
//                   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                 }),
//               }}
//             />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               width: "25%",
//               gap: "5px",
//             }}
//           >
//             <span
//               style={{
//                 color: "gray",
//                 fontSize: "1rem",
//                 fontWeight: "normal",
//               }}
//             >
//               Show only
//             </span>
//             <Select
//               options={options}
//               placeholder="Any"
//               styles={{
//                 control: (provided) => ({
//                   ...provided,
//                   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                 }),
//               }}
//             />
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               width: "25%",
//               gap: "5px",
//             }}
//           >
//             <span
//               style={{
//                 color: "gray",
//                 fontSize: "1rem",
//                 fontWeight: "normal",
//               }}
//             >
//               Show only
//             </span>
//             <Select
//               options={options}
//               placeholder="Any"
//               styles={{
//                 control: (provided) => ({
//                   ...provided,
//                   boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//                 }),
//               }}
//             />
//           </div>
//           <ToggleSwitch />
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               width: "10%",
//               alignItems: "center",
//             }}
//           >
//             <button
//               style={{
//                 padding: "10px 20px",
//                 borderRadius: "5px",
//                 boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 backgroundColor: "#FFFFFF",
//                 color: "black",
//                 border: "1px solid #C7C7C7",
//                 cursor: "pointer",
//               }}
//             >
//               Apply
//             </button>
//           </div>
//         </section>
//         <section
//           style={{
//             paddingTop: "5rem",
//             paddingBottom: "5rem",
//           }}
//           className="book-section"
//         >
//           <div className="row">
//             {allAdvisors.map((item, key) => (
//               <>
//                  <div
//                 key={key}
//                 style={{
//                   minHeight: "100%",
//                   maxHeight: "auto",
//                 }}
//                 className="col-lg-3 col-md-6 aos"
//               >
//                 <div className="book-best-doctors h-auto ">
//                   <div className="book-header position-relative ">
//                     <img src={item.image} alt="" className="img-fluid" />
//                     {User && (
//                       <div
//                         style={{
//                           zIndex: "50px",
//                         }}
//                         className="img-overlay p-1  k-img-icon-overlay"
//                       >
//                         <FaHeart className="k-heart-icon" />
//                       </div>
//                     )}
//                     <div className="k-img-btn-overlay">
//                       <span>{item.status}</span>
//                     </div>
//                   </div>
//                   <Link to={`/palmist-profile/${item.id}`}>
//                     <div
//                       style={{
//                         minHeight: "100%",
//                         height: "300px",
//                       }}
//                       className="doctors-body d-flex justify-content-between flex-column  "
//                     >
//                       <div className="inner-section">
//                         <span className="float-start text-capitalize ">
//                           {item.category}
//                         </span>
//                         <div className="rating text-end">
//                           <i className="fas fa-star filled" />
//                           <i className="fas fa-star filled" />
//                           <i className="fas fa-star filled" />
//                           <i className="fas fa-star filled" />
//                           <i className="fas fa-star" />
//                           <span className="d-inline-block average-ratings ms-1">
//                             3.5
//                           </span>
//                         </div>
//                           <h4>{item.name}</h4>
//                         <span
//                           style={{
//                             color: "gray",
//                           }}
//                           className="text-capitalize"
//                         >
//                           {item.description}
//                         </span>
//                       </div>
//                       <div className="row row-sm loc-details">
//                         <div className="col-6">
//                           <div className="d-flex align-items-center">
//                             <Link to="#">
//                               <img src={mapplus} alt="" />
//                             </Link>
//                             <Link to="#">
//                               <span className="available-info">Level</span>
//                               <span className="data-info">{item.level}</span>
//                             </Link>
//                           </div>
//                         </div>
//                         <div className="col-6">
//                           <div className="d-flex align-items-center">
//                             <Link to="#">
//                               <img src={exper} alt="" />
//                             </Link>
//                             <Link to="#">
//                               <span className="available-info">EXPERIENCE</span>
//                               <span className="data-info">
//                                 {item.experience}+ Years
//                               </span>
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row row-sm align-items-center p-3">
//                         <div className="k-col-6">
//                           <FiMessageCircle className="amt-txt" />
//                           <LuPhone className="amt-txt" />
//                           <FcVideoCall size={30} className="amt-txt" />
//                         </div>
//                         <div
//                           style={{
//                             color: "black",
//                           }}
//                           className="col-6"
//                         >
//                           from{" "}
//                           <span
//                             style={{
//                               fontWeight: "bold",
//                             }}
//                           >
//                             $4.59/min
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//               </>
//             ))}
//           </div>
//           <div className="view-all-more text-center aos" data-aos="fade-up">
//             <Link to="#" className="btn btn-primary">
//               View More
//             </Link>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default AllCategory;


import React, { useEffect, useState } from "react";
import Header from "./header";
import { IMG01, IMG02, IMG03, IMG04 } from "./home/clinic/img";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { MdKeyboardArrowRight } from "react-icons/md";
import Select from "react-select";
import ToggleSwitch from "./toggleSwitch";
import { Link } from "react-router-dom/cjs/react-router-dom";
import {
  Doctor1,
  Doctor2,
  Doctor3,
  Doctor4,
  consult,
  exper,
  mapplus,
} from "../components/home/image";
import { LuPhone } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FcVideoCall } from "react-icons/fc";
import { useLandingPageStore } from "../../store/landingStore";
import { useUserStore } from "../../store/userStore";
const AllCategory = () => {
  const { User } = useUserStore();
  const {allAdvisors}=useLandingPageStore()
  const options = [
    { value: "all", label: "Select Speciality" },
    { value: "cardiology", label: "Cardiology" },
    { value: "neurology", label: "Neurology" },
    { value: "urology", label: "Urology" },
  ];
  const card = [
    {
      id: 1,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor1,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      status: "online",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor2,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      status: "offline",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor1,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor3,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor1,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor4,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor1,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor2,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor3,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor4,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor1,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor2,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor4,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      status: "busy",
      category: "PSICOLOGIST",
      name: "Dr. Ruby Perrin",
      description: "MBBS, MD - General Medicine, DNB - Cardiology",
      image: Doctor3,
      level: "Experienced",
      experience: 25,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <>
      <Header />
      <style>
        {`
            @media only screen and (max-width: 767px) {
              .text{
                font-size: 1rem;
                font-weight:400;
              }
            }
            .text{
              font-size: 2.75rem; 
              font-weight: 700;
            }
            `}
      </style>
      <main
        style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
        className="container text-center text-md-start"
      >
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            gap: "5px",
          }}
          className="d-none d-md-flex "
        >
          <h5
            style={{
              color: "black",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            Home
          </h5>
          <MdKeyboardArrowRight size={30} color="black" />
          <h5
            style={{
              color: "black",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            All Advisors
          </h5>
        </section>
        <section>
          <div
            className="d-flex gap-3 flex-column flex-md-row justify-content-center justify-content-md-start align-items-center w-100  "
          >
            {/* <img
              src={data ? data.image : ""}
              className="img-fluid"
              alt="Speciality"
              style={{ width: "80px", height: "80px" }}
            /> */}
            <h3 className="text">All Advisors</h3>
          </div>
          <p
            style={{
              WebkitTextSizeAdjust: "100%",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
              color: "black",
              fontSize: "1.3rem",
              fontWeight: "400",
              fontFamily: "Poppins",
              lineHeight: "1.5715",
              boxSizing: "border-box",
              fontVariant: "tabular-nums",
              fontFeatureSettings: "tnum",
              textAlign: "left",
              overflowWrap: "break-word",
            }}
            className="text-center text-md-start"
          >
            Love relationships can be turbulent…up one minute and down the next.
            A detailed psychic reading can bring clarity and balance to your
            love life. Connect to a psychic love expert now and discover your
            heart’s deepest desires.
          </p>
        </section>
        <section
          style={{
            color: "rgba(0, 0, 0, 0.85)",
            boxSizing: "border-box",
            padding: "30px",
            paddingTop: "30px",
            backgroundColor: "#FFFFFF",
            boxShadow: "rgba(0, 0, 0, 0.0745098039) 0px 0px 8px 0px",
            border: "#C7C7C7 1px solid",
            borderRadius: "25px",
          }}
          className="d-flex flex-column justify-content-center align-items-center gap-4  flex-md-row "
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width:"100%"
            }}
          >
            <span
              style={{
                color: "gray",
                fontSize: "1rem",
                fontWeight: "normal",
              }}
            >
              Show only
            </span>
            <Select
              options={options}
              placeholder="Any"
              styles={{
                control: (provided) => ({
                  ...provided,
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }),
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width:"100%"

            }}
          >
            <span
              style={{
                color: "gray",
                fontSize: "1rem",
                fontWeight: "normal",
              }}
            >
              Show only
            </span>
            <Select
              options={options}
              placeholder="Any"
              styles={{
                control: (provided) => ({
                  ...provided,
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }),
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width:"100%"

            }}
          >
            <span
              style={{
                color: "gray",
                fontSize: "1rem",
                fontWeight: "normal",
              }}
            >
              Show only
            </span>
            <Select
              options={options}
              placeholder="Any"
              styles={{
                control: (provided) => ({
                  ...provided,
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }),
              }}
            />
          </div>
          <ToggleSwitch />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#FFFFFF",
                color: "black",
                border: "1px solid #C7C7C7",
                cursor: "pointer",
              }}
            >
              Apply
            </button>
          </div>
        </section>
        <section
          style={{
            paddingTop: "5rem",
            paddingBottom: "5rem",
          }}
          className="book-section"
        >
          <div className="row d-flex flex-wrap justify-content-center align-items-center gap-3 ">
            {allAdvisors.map((item, key) => (
              <>
                <div
                  key={key}
                  style={{
                    minHeight: "100%",
                    maxHeight: "auto",
                  }}
                  className="col-lg-3 col-md-6 aos"
                >
                  <div className="book-best-doctors h-auto ">
                    <div className="book-header position-relative ">
                      <img src={item.image} alt="" className="img-fluid" />
                      {User && (
                        <div
                          style={{
                            zIndex: "50px",
                          }}
                          className="img-overlay p-1 k-img-icon-overlay"
                        >
                          <FaHeart className="k-heart-icon" />
                        </div>
                      )}
                      <div className="k-img-btn-overlay">
                        <span>{item.status}</span>
                      </div>
                    </div>
                    <Link to={`/palmist-profile/${item.id}`}>
                      <div
                        style={{
                          minHeight: "350px",
                          // height: "300px",
                          maxHeight:"max-content",
                        }}
                        className="doctors-body d-flex justify-content-between flex-column  "
                      >
                        <div className="inner-section">
                          <span className="float-start text-capitalize ">
                            {item.category}
                          </span>
                          <div className="rating text-end">
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star filled" />
                            <i className="fas fa-star" />
                            <span className="d-inline-block average-ratings ms-1">
                              3.5
                            </span>
                          </div>
                          <h4>{item.name}</h4>
                          <span
                            style={{
                              color: "gray",
                            }}
                            className="text-capitalize"
                          >
                            {item.description}
                          </span>
                        </div>
                       <div>
                       <div className="row row-sm loc-details">
                          <div className="col-6">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img src={mapplus} alt="" />
                              </Link>
                              <Link to="#">
                                <span className="available-info">Level</span>
                                <span className="data-info">{item.level}</span>
                              </Link>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="d-flex align-items-center">
                              <Link to="#">
                                <img src={exper} alt="" />
                              </Link>
                              <Link to="#">
                                <span className="available-info">
                                  EXPERIENCE
                                </span>
                                <span className="data-info">
                                  {item.experience}+ Years
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="row row-sm align-items-center p-3">
                          <div className="k-col-6">
                            <FiMessageCircle className="amt-txt" />
                            <LuPhone className="amt-txt" />
                            <FcVideoCall size={30} className="amt-txt" />
                          </div>
                          <div
                            style={{
                              color: "black",
                            }}
                            className="col-6"
                          >
                            from{" "}
                            <span
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              $4.59/min
                            </span>
                          </div>
                        </div>
                       </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="view-all-more text-center aos" data-aos="fade-up">
            <Link to="#" className="btn btn-primary">
              View More
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default AllCategory;
