import React, { createContext, useEffect, useState } from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import config from "config";
import { useBuyerStore } from "./store/buyerStore.js";
import { useUserStore } from "./store/userStore.js";
import { useLandingPageStore } from "./store/landingStore.js";
import axios from "axios";
import { Doctor1 } from "./client/components/home/image.jsx";
// import { book_doc_01 } from "./client/assets/images/doctors/";
import { book_doctor_01,book_doctor_02,book_doctor_03,book_doctor_04,book_doctor_05,book_doctor_06,book_doctor_07,book_doctor_08,book_doctor_09,book_doctor_10,book_doctor_11,book_doctor_12,book_doctor_13,book_doctor_14,book_doctor_15,book_doctor_16 } from "./client/components/home/image.jsx";
export const Appcontext = createContext();

const AppRouter = () => {
  const bookDoctors  = [book_doctor_01,book_doctor_02,book_doctor_03,book_doctor_04,book_doctor_05,book_doctor_06,book_doctor_07,book_doctor_08,book_doctor_09,book_doctor_10,book_doctor_11,book_doctor_12,book_doctor_13,book_doctor_14,book_doctor_15,book_doctor_16]
  const { updateCategories, categories } = useLandingPageStore()
  const { updateAllAdvisors, allAdvisors } = useLandingPageStore()
  const [isAuth, setIsAuth] = useState("user");
  const { updateUser } = useUserStore();

  const getAllApproved = async () => {
    try {
      const response = await axios.get("http://localhost:4007/api/getAllApprovedAndActive")
      return response?.data?.data
    } catch (error) {
      console.log("there are errors in loading data", error)

    }
  }

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4007/api/getAllCategory")
      return response?.data?.data
    } catch (error) {
      console.log("there are errors in loading data", error)
    }

  }
  useEffect(() => {
    const fetchUserData = async () => {
      const data = await JSON.parse(localStorage.getItem("userToken"));
      data &&
        updateUser({
          ...data?.user,
          userType: data?.userType,
        });
      const cate = await getData()
      updateCategories([
        ...cate
      ])

      const palmistData = await getAllApproved()
      const dataarray = palmistData?.map((item,index) => {
        return {
          id: item._id,
          status: item.status,
          category: item.userServicesItems[0],
          name: item.userFirstName+item.userLastName,
          description:
            "Welcome to my page!  My old rates are back but guidelines have changed. Please read to make sure wha",
          image: bookDoctors[index],
          level: "Experienced",
          experience: 25,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        }
      })
      updateAllAdvisors([
        ...dataarray
      ])

    }
    fetchUserData();
    getAllApproved();
  }, []);
  return (
    <Router basename={`${config.publicPath}`}>
      <Appcontext.Provider value={{ isAuth, setIsAuth }}>
        <Route render={(props) => <AppContainer {...props} />} />
      </Appcontext.Provider>
    </Router>
  );
};

export default AppRouter;
