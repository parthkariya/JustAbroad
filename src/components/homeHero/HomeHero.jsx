import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import "./HomeHero.css";
import ReactModal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";

const HomeHero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  // const [searchmodalOpen, setsearchmodalOpen] = useState(false);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getLogin, setLogin] = useState("");

  const { SetLogin, login_loading } = useAuthContext();

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

  useEffect(() => {
    var islogin = localStorage.getItem("is_login");
    setLogin(islogin);
  }, []);

  const Submit = async () => {
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    const data = await SetLogin(formdata);

    if (data) {
      if (data.success === 1) {
        setModalIsOpen(false);
        navigate("/SwitchCourse");
      }
    }
  };

  return (
    <div>
      <div
        className="home_hero_bg_inner"
        style={{
          backgroundImage: `url(${images.home_hero_bg})`,
          backgroundSize: "cover",
          height: "85vh",
          // backgroundPosition: "inherit",
          // backdropFilter: "blur(2px)",
          // width: "100vw",
          // display: "flex",
          // alignItems: "center",
        }}>
        <div
          className=""
          style={{
            backgroundColor: "rgba(0,0,0,.503)",
            color: "var(--color-white)",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <div className="home_hero_content_main">
            <div>
              <h1 className="title_main">
                Enabling academic dreams with empowerment.{" "}
              </h1>
            </div>
            <div className="home_hero_para_main">
              <p>
                Our comprehensive courses are designed to equip you with the
                skills and confidence you need to ace your admission tests and
                open doors to a world of opportunities.
              </p>
            </div>
            <div className="home_hero_btn_main">
              <div>
                {getLogin === "true" ? (
                  null
                ) : (
                  <button
                    className="btn btn_home_hero"
                    onClick={setModalIsOpen}>
                    Sign up / Login
                  </button>
                )}
              </div>
              {/* <div>
                <button className="btn btn_home_hero">Learn more</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}>
        <>
          <div className="navbar_modal_signin_head">
            <h3>Sign In</h3>
          </div>
          <div className="model_sizing">
            <div>
              <div>
                <label>Email</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your E-mail"
                  className="navbar_modal_input_inner"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Password</label>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="navbar_modal_input_inner"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              {login_loading === true ? (
                <div
                  style={{
                    width: "100%",
                    height: "10vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <div className="loader1"></div>
                </div>
              ) : (
                <button
                  className="btn"
                  style={{ width: "100%", margin: "1rem 0px" }}
                  onClick={() => {
                    // setModalIsOpen(false);

                    Submit();
                  }}>
                  SIGN IN
                </button>
              )}
            </div>
            {/* <div className="navbar_modal_signuplink_main">
              <p>Don't have an account?</p>
              <Link
                to=""
                className="navbar_modal_signuplink_inner"
                onClick={() => {
                  setModalIsOpen(false);
                  setModalIsOpen2(true);
                }}>
                Sign up
              </Link>
            </div> */}
          </div>
        </>
      </ReactModal>
      <ReactModal
        isOpen={modalIsOpen2}
        onRequestClose={() => {
          setModalIsOpen2(false);
        }}
        style={customStyles}>
        <>
          <div className="navbar_modal_signup_head">
            <h3>Create your Account</h3>
          </div>
          <div className="model_sizing">
            <div>
              <div>
                <label>First Name</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="navbar_modal_input_inner"
                  // onChange={(e) => setFname(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Last Name</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="navbar_modal_input_inner"
                  // onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Phone</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  className="navbar_modal_input_inner"
                  // onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Email</label>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="navbar_modal_input_inner"
                  // onChange={(e) => setSignupEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <label>Password</label>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="navbar_modal_input_inner"
                  // onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div>
                <label>ConfirmPassword</label>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="navbar_modal_input_inner"
                  // onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                className="btn"
                style={{ width: "100%", margin: "1rem 0" }}>
                SIGN UP
              </button>
            </div>
            <div className="navbar_modal_signuplink_main">
              <p>Already member?</p>
              <Link
                to=""
                className="navbar_modal_signuplink_inner"
                onClick={() => {
                  setModalIsOpen2(false);
                  setModalIsOpen(true);
                }}>
                Sign in here
              </Link>
            </div>
          </div>
        </>
      </ReactModal>
    </div>
  );
};

export default HomeHero;