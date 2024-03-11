import React from "react";

//slider
import Slider from "react-slick";
// import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
import { useLandingPageStore } from "../../../../store/landingStore.js";
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
} from "../../../../client/components/home/clinic/img.jsx"
const HomeClinic = () => {
  const imagesArray  = [IMG01,IMG02,IMG03,IMG04,IMG05,IMG06,IMG07,IMG08,IMG09]
  const { categories } = useLandingPageStore();
  //Aos

  //    useEffect(() => {
  //     AOS.init({duration: 1200,
  //       once: true});

  //   }, []);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    variableWidth: true,
    prevArrow: false,
    nextArrow: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false, // Hide dots for small screens
        },
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  // console.log("cat", categories)
  return (
    <>
      <section className="section section-specialities">
        <style>
          {`
          
          @media only screen and (max-width: 767px) {
              .sItemWidth{
                width: 420px !important; 
              }
          }
          .sItemWidth{
            width: 220px !important; 
          }
          `}
        </style>
        <div className="container-fluid">
          <div className="container text-md-start text-center   k-container">
            <h2>Palmist and Specialities</h2>
            <p className="sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="specialities-slider slider">
                <Slider {...settings}>
                  {categories &&  categories 
                    .sort((a, b) => a.rank - b.rank) // Sort categories by rank
                    .map((category, index) => {
                      // console.log(category)
                      return (
                        <Link key={index} to={`/category/${category._id}`}>
                          <div>
                            <div
                              style={{ width: "200px" }}
                              className="speicality-item d-flex justify-content-center align-items-center flex-column gap-2 text-center"
                            >
                              <div className="speicality-img">
                                <img
                                  src={imagesArray[index]}
                                  className="img-fluid w-50  h-50 "
                                  alt="Speciality"
                                />
                                <span>
                                  <i
                                    className="fa fa-circle"
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </div>
                              <div
                                className="my-3"
                                dangerouslySetInnerHTML={{
                                  __html: category.categoryName,
                                }}
                              />
                            </div>
                          </div>
                        </Link>
                      )
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeClinic;
