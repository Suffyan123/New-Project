/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Content from "./content";
import Pagecontent from "./pagecontent";
import Header from "../../header";
import {
  Doctor1,
  Doctor2,
  Doctor3,
  Doctor4,
  consult,
  exper,
  mapplus,
} from "../../home/image";
import Footer from "../../footer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useLandingPageStore } from "../../../../store/landingStore";
import CosmeticFooter from "../../home/cosmetics/cosmeticfooter";

const PalmistProfile = (props) => {
  // const 
  const [data, setData] = useState();
  const { id } = useParams();
  console.log("id", id)
  const { allAdvisors } = useLandingPageStore();

  useEffect(() => {
    const fetchData = async () => {
      const filteredData = allAdvisors?.filter((item) => item.id === id);
      console.log("data", filteredData);
      setData(filteredData[0]);
      // setLoading(false); // Set loading to false after data is fetched
    };

    fetchData();
  }, [id, allAdvisors]);

  // useEffect(() => {
    // const getData   = async () =>{
    //  try {
      
      // const data = allAdvisors?.filter((item) => item.id === id);
      // setData(data[0]);
    //  } catch (error) {
      // console.log("there are errors in fetching data",error)
    //  }
    //  console.log("data",data);
    // }
    // getData();
  // }, []);
  return (
    <>
      { data &&   (
        <div>
          <Header {...props} />
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              paddingTop: "10rem",
              gap: "5px",
            }}
            className="container d-none d-md-flex "
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
            <MdKeyboardArrowRight size={30} color="red" />
            <h5
              style={{
                color: "black",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >
              {data.category}
            </h5>
            <MdKeyboardArrowRight size={30} color="brown" />
            <h5
              style={{
                color: "gray",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >
              {data.name}
            </h5>
          </section>

          <div className="content mt-5 mt-md-2 ">
            <div className="container">
              <Pagecontent data={data} />
              <Content />
            </div>
          </div>
          {/* <Footer {...props} /> */}
          <CosmeticFooter/>
        </div>
      )}
    </>
  );
};

export default PalmistProfile;
