import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { TbDiscount2 } from "react-icons/tb";

import { RiLogoutCircleLine } from "react-icons/ri";
import { HiOutlineSwitchHorizontal, HiOutlineNewspaper } from "react-icons/hi";
import {
  MdOutlineContactSupport,
  MdClose,
  MdOutlineDashboard,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { PiUserCircle } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ReactModal from "react-modal";
import { useAuthContext } from "../../context/auth_context";
import images from "../../constants/images";

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleInnerMenu, setToggleInnerMenu] = useState(false);
  const [toggleInnerMenu2, setToggleInnerMenu2] = useState(false);
  const [getUserName, SetUserNamae] = useState("");
  const [getlogin, SetLogin] = useState("");
  const { SetLogout } = useAuthContext();
  const [getCourseId, setCourseId] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    getfuncation();
  }, []);

  useEffect(() => {
    const Courseid = localStorage.getItem("courseid");
    setCourseId(Courseid);
  }, []);

  const getfuncation = async () => {
    const UserName = await localStorage.getItem("user_name");
    SetUserNamae(JSON.parse(UserName));

    const ISLogin = await localStorage.getItem("is_login");
    SetLogin(JSON.parse(ISLogin));
  };

  const logout = () => {
    SetLogout();

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "none",
      border: "none",
      borderRadius: "5px",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <>
      <div className="nav-main">
        <div className="nav-con">
          <Link to="/" className="logo_main">
            <img
              src={images.justabroadlogo}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </Link>
          <div className="nav-link-main">
            {(getlogin === true || getlogin === "true") &&
            (getCourseId == 1 || getCourseId == 2) ? (
              <Link className="main-nav-link" to="/Dashboard">
                My Dashboard
              </Link>
            ) : (
              <>
                {getCourseId === null ? (
                  <></>
                ) : (
                  <Link className="main-nav-link" to="/">
                    Home
                  </Link>
                )}
              </>
            )}
            {/* <Link className="main-nav-link" to="/">
              About
            </Link> */}
            {getCourseId === null ? (
              <></>
            ) : (
              <Link className="main-nav-link" to="/Lesson">
                Lesson
              </Link>
            )}
            {getCourseId === null ? (
              <></>
            ) : (
              <Link className="main-nav-link" to="/LiveClasses">
                Lectures & Webinars
              </Link>
            )}

            {getCourseId == 2 ? (
              <>
                {/* <Link
                  className="main-nav-link-sub main-nav-link"
                  to="/PteMockTest">
                  Mock Test
                </Link> */}
              </>
            ) : (
              <>
                {getCourseId === null ? (
                  <> </>
                ) : (
                  <div style={{ position: "relative" }}>
                    <Link className="main-nav-link main-nav-linkk">
                      Tests
                      <div className="nav-sub-menu">
                      <Link className="main-nav-link-sub" to="/SectionalTest">
                          Sectional Test
                        </Link>
                        <Link className="main-nav-link-sub" to="/ModuleTest">
                          Module Test
                        </Link>
                        
                        <Link className="main-nav-link-sub" to="/MockTest">
                          Mock Test
                        </Link>
                      </div>
                    </Link>
                  </div>
                )}
              </>
            )}

            {/* {getCourseId == 2 ? (
              <>
                <Link className="main-nav-link" to="/CurriculumPage">
                  Curriculum
                </Link>
              </>
            ) : (
              <></>
            )} */}
            {getCourseId === null || getCourseId == 2 ? null : (
              <Link className="main-nav-link" to="/ProgressReport">
                Progress Report
              </Link>
            )}

            {/* <CiMenuFries className='nav-menu-icon' /> */}
          </div>

          <div style={{ position: "relative" }} className="nav-midle-part">
            <Link className="main-nav-link main-nav-linkkk" to="/">
              <div className="main-nav-user-flex">
                <PiUserCircle size={25} />
                <Link className="main-nav-link">
                  {getUserName ? getUserName : "User Name"}
                </Link>
              </div>
              {getlogin === true || getlogin === "true" ? (
                <div className="nav-sub-menu2">
                  <div
                    className="nav-sub-option-flex"
                    style={{ paddingTop: "10px" }}>
                    <MdOutlineDashboard size={20} className="sub-option-icon" />

                    <Link className="main-nav-link-sub2" to="/Dashboard">
                      My Dashboard
                    </Link>
                  </div>
                  <div className="nav-sub-option-flex">
                    <CgProfile size={20} className="sub-option-icon" />
                    <Link className="main-nav-link-sub2" to="/Profile">
                      My Profile
                    </Link>
                  </div>
                  <div className="nav-sub-option-flex">
                    <HiOutlineSwitchHorizontal
                      size={20}
                      className="sub-option-icon"
                    />
                    <Link className="main-nav-link-sub2" to="/SwitchCourse">
                      Switch Course
                    </Link>
                  </div>
                  <div className="nav-sub-option-flex">
                    <MdOutlineContactSupport
                      size={20}
                      className="sub-option-icon"
                    />

                    <Link className="main-nav-link-sub2" to="/SupportPage">
                      Support
                    </Link>
                  </div>
                  {/* <div className="nav-sub-option-flex" onClick={setModalIsOpen}>
                  <RiCoupon2Line size={20} className="sub-option-icon" />
                  <Link className="main-nav-link-sub2" to="/">
                    Apply Coupon
                  </Link>
                </div> */}
                  <div className="nav-sub-option-flex">
                    <RiLogoutCircleLine className="sub-option-icon" size={20} />

                    <Link
                      className="main-nav-link-sub2"
                      // to="/"
                      onClick={() => {
                        logout();
                      }}>
                      Logout
                    </Link>
                  </div>
                </div>
              ) : null}
            </Link>
          </div>
          <div className="resp-icon-part">
            {toggleMenu === false ? (
              <Link
                className="main-nav-link"
                onClick={() => setToggleMenu(true)}>
                <CiMenuFries className="nav-menu-icon" />
              </Link>
            ) : (
              <button
                className="main-nav-link"
                onClick={() => setToggleMenu(false)}>
                <MdClose className="nav-menu-icon" />
              </button>
            )}
          </div>
        </div>
      </div>

      <>
        {toggleMenu && (
          <div className="mobile-nav-main">
            <ul className="mobile-nav-links">
              <div className="resp-nav-profile-part">
                <div
                  className="main-nav-user-flex main-nav-user-flex-resp"
                  style={{ justifyContent: "space-between" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}>
                    <PiUserCircle size={25} className="resp-nav-icon" />
                    <Link className="main-nav-link">
                      {getUserName ? getUserName : "User Name"}
                    </Link>
                  </div>
                  <div style={{ alignSelf: "flex-end", paddingTop: "8px" }}>
                    {toggleInnerMenu2 === false ? (
                      <Link
                        onClick={() => {
                          setToggleInnerMenu2(true);
                        }}
                        style={{ paddingRight: "15px" }}>
                        <IoIosArrowDown size={20} className="resp-nav-icon" />
                      </Link>
                    ) : (
                      <Link
                        onClick={() => {
                          setToggleInnerMenu2(false);
                        }}
                        style={{ paddingRight: "15px" }}>
                        <IoIosArrowUp size={20} className="resp-nav-icon" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              {toggleInnerMenu2 === true ? (
                <>
                  <div className="resp-nav-inner-option2">
                    {(getlogin === true || getlogin === "true") &&
                    (getCourseId == 1 || getCourseId == 2) ? (
                      <div className="resp-nav-inner-option-icon-flex">
                        <MdOutlineDashboard
                          size={20}
                          className="resp-inner-icon-sub"
                        />
                        <Link
                          to={"/Dashboard"}
                          onClick={() => setToggleMenu(false)}
                          className="mobile-nav-link">
                          My Dashboard
                        </Link>
                      </div>
                    ) : (
                      <>
                        {getCourseId === null ? (
                          <></>
                        ) : (
                          <Link className="main-nav-link" to="/">
                            Home
                          </Link>
                        )}
                      </>
                    )}
                    <div className="resp-nav-inner-option-icon-flex">
                      <CgProfile size={20} className="resp-inner-icon-sub" />

                      <Link
                        to={"/Profile"}
                        onClick={() => setToggleMenu(false)}
                        className="mobile-nav-link">
                        My Profile
                      </Link>
                    </div>
                    <div className="resp-nav-inner-option-icon-flex">
                      <HiOutlineSwitchHorizontal
                        size={20}
                        className="resp-inner-icon-sub"
                      />

                      <Link
                        to={"/SwitchCourse"}
                        onClick={() => setToggleMenu(false)}
                        className="mobile-nav-link">
                        Switch Course
                      </Link>
                    </div>

                    {/* <div className="resp-nav-inner-option-icon-flex">
                      <RiCoupon2Line
                        size={20}
                        className="resp-inner-icon-sub"
                      />

                      <Link
                        to={"/"}
                        onClick={() => setToggleMenu(false)}
                        className="mobile-nav-link">
                        Apply Coupon
                      </Link>
                    </div> */}
                    <div className="resp-nav-inner-option-icon-flex">
                      <MdOutlineContactSupport
                        size={20}
                        className="resp-inner-icon-sub"
                      />

                      <Link
                        to={"/SupportPage"}
                        onClick={() => setToggleMenu(false)}
                        className="mobile-nav-link">
                        Support
                      </Link>
                    </div>

                    <div className="resp-nav-inner-option-icon-flex">
                      <RiLogoutCircleLine
                        size={20}
                        className="resp-inner-icon-sub"
                      />

                      <Link
                        // to={"/"}
                        onClick={() => {
                          setToggleMenu(false);
                          logout();
                        }}
                        className="mobile-nav-link">
                        Logout
                      </Link>
                    </div>
                  </div>
                  <div className="line"></div>
                </>
              ) : null}

              <li>
                {(getlogin === true || getlogin === "true") &&
                (getCourseId == 1 || getCourseId == 2) ? (
                  <Link
                    to={"/Dashboard"}
                    onClick={() => setToggleMenu(false)}
                    className="mobile-nav-link">
                    My Dashboard
                  </Link>
                ) : (
                  <>
                    {getCourseId === null ? (
                      <></>
                    ) : (
                      <Link className="main-nav-link" to="/">
                        Home
                      </Link>
                    )}
                  </>
                )}
              </li>
              {/* <li>

                <Link
                  to={"/Profile"}
                  onClick={() => setToggleMenu(false)}
                  className="mobile-nav-link">
                    My Profile
                </Link>
              </li> */}
              <li>
                {getCourseId === null ? (
                  <></>
                ) : (
                  <Link
                    to={"/Lesson"}
                    onClick={() => setToggleMenu(false)}
                    className="mobile-nav-link">
                    Lesson
                  </Link>
                )}
              </li>

              {getCourseId === null ? (
                <></>
              ) : (
                <li>
                  <Link
                    to={"/LiveClasses"}
                    onClick={() => setToggleMenu(false)}
                    className="mobile-nav-link">
                    Lectures & Webinars
                  </Link>
                </li>
              )}

              {/* {getCourseId == 2 ? (
                <Link className="main-nav-link" to="/CurriculumPage">
                  Curriculum
                </Link>
              ) : (
                <></>
              )} */}

              {getCourseId == 2 ? (
                <>
                  {/* <div className="resp-nav-inner-option-icon-flex">
                    <HiOutlineNewspaper
                      size={20}
                      className="resp-inner-icon-sub"
                    />
                    <Link
                      to={"/PteMockTest"}
                      onClick={() => setToggleMenu(false)}
                      className="mobile-nav-link"
                    >
                      Mock Tests
                    </Link>
                  </div> */}
                </>
              ) : (
                <>
                  {getCourseId === null ? (
                    <></>
                  ) : (
                    <li className="resp-nav-icon-flex">
                      <Link
                        onClick={() => setToggleMenu(false)}
                        className="mobile-nav-link">
                        Tests
                      </Link>
                      {toggleInnerMenu === false ? (
                        <Link
                          onClick={() => {
                            setToggleInnerMenu(true);
                          }}>
                          <IoIosArrowDown size={20} className="resp-nav-icon" />
                        </Link>
                      ) : (
                        <Link
                          onClick={() => {
                            setToggleInnerMenu(false);
                          }}>
                          <IoIosArrowUp size={20} className="resp-nav-icon" />
                        </Link>
                      )}
                    </li>
                  )}

                  {toggleInnerMenu === true ? (
                    <>
                      <div className="resp-nav-inner-option">
                        {getCourseId == 1 ? (
                          <div className="resp-nav-inner-option-icon-flex">
                            <HiOutlineNewspaper
                              size={20}
                              className="resp-inner-icon-sub"
                            />
                            <Link
                              to={"/ModuleTest"}
                              onClick={() => setToggleMenu(false)}
                              className="mobile-nav-link">
                              Module Test
                            </Link>
                          </div>
                        ) : (
                          <></>
                        )}
                        {getCourseId == 1 ? (
                          <div className="resp-nav-inner-option-icon-flex">
                            <HiOutlineNewspaper
                              size={20}
                              className="resp-inner-icon-sub"
                            />
                            <Link
                              to={"/SectionalTest"}
                              onClick={() => setToggleMenu(false)}
                              className="mobile-nav-link">
                              Sectional Test
                            </Link>
                          </div>
                        ) : (
                          <></>
                        )}

                        {getCourseId == 1 ? (
                          <div className="resp-nav-inner-option-icon-flex">
                            <HiOutlineNewspaper
                              size={20}
                              className="resp-inner-icon-sub"
                            />
                            <Link
                              to={"/MockTest"}
                              onClick={() => setToggleMenu(false)}
                              className="mobile-nav-link">
                              Mock Tests
                            </Link>
                          </div>
                        ) : (
                          <div className="resp-nav-inner-option-icon-flex">
                            <HiOutlineNewspaper
                              size={20}
                              className="resp-inner-icon-sub"
                            />
                            <Link
                              to={"/PteMockTest"}
                              onClick={() => setToggleMenu(false)}
                              className="mobile-nav-link">
                              Mock Tests
                            </Link>
                          </div>
                        )}
                      </div>
                    </>
                  ) : null}
                </>
              )}
              {getCourseId === null || getCourseId == 1 ? (
                <></>
              ) : (
                <li>
                  <Link
                    to={"/ProgressReport"}
                    onClick={() => setToggleMenu(false)}
                    className="mobile-nav-link">
                    Progress Report
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}>
        <>
          {/* <div className="navbar_modal_coupon_head">
            <h3>Apply Coupon</h3>
          </div> */}
          <div
            className="model_sizing"
            style={{
              alignItems: "center",
              padding: "30px",
            }}>
            <div>
              <TbDiscount2 className="coupon_icon" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
              <h2>Discount</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div style={{ width: "100%" }}>
              <input
                type="text"
                className="navbar_modal_coupon_code_input_inner"
              />
            </div>
            <div style={{ paddingTop: "1rem", width: "100%" }}>
              <button className="btn" style={{ width: "100%" }}>
                Apply Coupon
              </button>
            </div>
          </div>
        </>
      </ReactModal>
    </>
  );
};

export default Navbar;
