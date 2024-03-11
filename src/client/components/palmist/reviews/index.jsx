import React from "react";
import DoctorSidebar from "../sidebar";
import { IMG01, IMG02, IMG03, IMG04, IMG05, IMG06, IMG07, IMG08 } from "./img";
import Footer from "../../footer";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import Header from "../../header";

const Review = (props) => {
  return (
    <div>
      <Header {...props} />
      {/* <Breadcrumbs /> */}
      <div className="content">
        <div className="container-fluid">
          <div style={{
            marginTop:"5rem"
          }}  className="row">
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar "></div>
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <DoctorSidebar  />
              </StickyBox>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6">
              <div className="doc-review review-listing">
                <ul className="comments-list">
                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User"
                        src={IMG01}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Richard Wilson</span>
                          <span className="comment-date">
                            Reviewed 2 Days ago
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p className="recommended">
                          <i className="far fa-thumbs-up"></i> I recommend the
                          doctor
                        </p>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <Link className="comment-btn" to="#0">
                            <i className="fas fa-reply"></i> Reply
                          </Link>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <Link to="#0" className="like-btn">
                              <i className="far fa-thumbs-up"></i> Yes
                            </Link>
                            <Link to="#0" className="dislike-btn">
                              <i className="far fa-thumbs-down"></i> No
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    <ul className="comments-reply">
                      <li>
                        <div className="comment">
                          <img
                            className="avatar rounded-circle"
                            alt="User"
                            src={IMG02}
                          />
                          <div className="comment-body">
                            <div className="meta-data">
                              <span className="comment-author">
                                Dr. Darren Elder
                              </span>
                              <span className="comment-date">
                                Reviewed 3 Days ago
                              </span>
                            </div>
                            <p className="comment-content">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam. Curabitur non nulla sit amet nisl tempus
                            </p>
                            <div className="comment-reply">
                              <Link className="comment-btn" to="#0">
                                <i className="fas fa-reply"></i> Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User"
                        src={IMG03}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Travis Trimble</span>
                          <span className="comment-date">
                            Reviewed 4 Days ago
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                          </div>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <Link className="comment-btn" to="#0">
                            <i className="fas fa-reply"></i> Reply
                          </Link>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <Link to="#0" className="like-btn">
                              <i className="far fa-thumbs-up"></i> Yes
                            </Link>
                            <Link to="#0" className="dislike-btn">
                              <i className="far fa-thumbs-down"></i> No
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User"
                        src={IMG04}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Carl Kelly</span>
                          <span className="comment-date">
                            Reviewed 5 Days ago
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                          </div>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <Link className="comment-btn" to="#0">
                            <i className="fas fa-reply"></i> Reply
                          </Link>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <Link to="#0" className="like-btn">
                              <i className="far fa-thumbs-up"></i> Yes
                            </Link>
                            <Link to="#0" className="dislike-btn">
                              <i className="far fa-thumbs-down"></i> No
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User"
                        src={IMG05}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">
                            Michelle Fairfax
                          </span>
                          <span className="comment-date">
                            Reviewed 6 Days ago
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                          </div>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <Link className="comment-btn" to="#0">
                            <i className="fas fa-reply"></i> Reply
                          </Link>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <Link to="#0" className="like-btn">
                              <i className="far fa-thumbs-up"></i> Yes
                            </Link>
                            <Link to="#0" className="dislike-btn">
                              <i className="far fa-thumbs-down"></i> No
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User"
                        src={IMG06}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Gina Moore</span>
                          <span className="comment-date">
                            Reviewed 1 Week ago
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                          </div>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <Link className="comment-btn" to="#0">
                            <i className="fas fa-reply"></i> Reply
                          </Link>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <Link to="#0" className="like-btn">
                              <i className="far fa-thumbs-up"></i> Yes
                            </Link>
                            <Link to="#0" className="dislike-btn">
                              <i className="far fa-thumbs-down"></i> No
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User"
                        src={IMG07}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">
                            Walter Roberson
                          </span>
                          <span className="comment-date">
                            Reviewed 1 Week ago
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                          </div>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <Link className="comment-btn" to="#0">
                            <i className="fas fa-reply"></i> Reply
                          </Link>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <Link to="#0" className="like-btn">
                              <i className="far fa-thumbs-up"></i> Yes
                            </Link>
                            <Link to="#0" className="dislike-btn">
                              <i className="far fa-thumbs-down"></i> No
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User"
                        src={IMG08}
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">
                            Daniel Griffing
                          </span>
                          <span className="comment-date">
                            Reviewed on 1 Nov 2019
                          </span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                          </div>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <Link className="comment-btn" to="#0">
                            <i className="fas fa-reply"></i> Reply
                          </Link>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <Link to="#0" className="like-btn">
                              <i className="far fa-thumbs-up"></i> Yes
                            </Link>
                            <Link to="#0" className="dislike-btn">
                              <i className="far fa-thumbs-down"></i> No
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 theiaStickySidebar mt-5"></div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Review;
