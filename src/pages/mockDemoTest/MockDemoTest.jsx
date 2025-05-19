import React, { useEffect, useRef, useState } from "react";
import "./MockDemoTest.css";
import { FaQuestionCircle, FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import images from "../../constants/images";
import axios from "axios";
import { ACCEPT_HEADER, add_mocktest_writing } from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";
import Notification from "../../utils/Notification";
import { IoSend } from "react-icons/io5";
import ReactModal from "react-modal";
import { MdOutlineSettings } from "react-icons/md";

const MockDemoTest = () => {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [getTab, setTab] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [text1, setText1] = useState("");
  const [getRadio, setRadio] = useState("");
  const [getRadio2, setRadio2] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [bgcolor, setBgcolor] = useState("--color-brand");
  const handleOptionChange2 = (event) => {
    setRadio2(event.target.value);
    if (event.target.value === "Standard2") {
      setBgcolor("--color-brand");
    } else if (event.target.value === "Yellow on Black") {
      setBgcolor("--color-orange-yellow");
    }
  };

  const handleOptionChange = (event) => {
    setRadio(event.target.value);
    if (event.target.value === "Standard") {
      setFontSize(16);
    } else if (event.target.value === "Large") {
      setFontSize(18);
    } else if (event.target.value === "Extra Large") {
      setFontSize(20);
    }
  };

  const handleOnChange1 = (event) => {
    setText1(event.target.value);
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

  const customStyles1 = {
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
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    overlay: {
      zIndex: 1000,
      background: "whitesmoke",
      // backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  };
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const [seconds, setSeconds] = useState(20 * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(intervalId);
          // You can add additional logic here when the timer reaches 0
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  // const minutes = Math.floor(seconds / 60);
  // const remainingSeconds = seconds % 60;

  //Timer
  const [seconds1, setSeconds1] = useState(() => {
    const storedSeconds = localStorage.getItem("timerSeconds");
    return storedSeconds ? parseInt(storedSeconds) : 1 * 60 * 60; // 2 hours in seconds
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds1((prevSeconds) => {
        if (prevSeconds > 0) {
          localStorage.setItem("timerSeconds", prevSeconds - 1);
          return prevSeconds - 1;
        } else {
          clearInterval(intervalId);

          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  const hours = Math.floor(seconds1 / 3600);
  const minutes = Math.floor((seconds1 % 3600) / 60);
  // const minutes = Math.floor(seconds1 / 60);
  const remainingSeconds = seconds1 % 60;

  useEffect(() => {
    if (hours === 0 && minutes === 0 && remainingSeconds === 0) {
      navigate("/PteMockTest");
      Notification("Warning", "Warning", "Test's up!");
    } else {
    }
  }, [hours, minutes, remainingSeconds]);

  useEffect(() => {
    if (hours === 0 && minutes === 0 && remainingSeconds === 0) {
      navigate("/PteMockTest");
      Notification("Warning", "Warning", "Test's up!");
    } else {
    }
  }, [hours, minutes, remainingSeconds]);

  const handleButtonClick = () => {
    const result = window.confirm("Are you sure you want to submit the test?");

    if (result) {
      SubmitTest();
    } else {
      console.log("Action canceled");
    }
  };

  const SubmitTest = async () => {
    if (text === "") {
      Notification("error", "Error", "Enter Value");
    } else if (text1 === "") {
      Notification("error", "Error", "Enter Seconed Value");
    } else {
      const Token = await localStorage.getItem("is_token");
      const Courseid = await localStorage.getItem("courseid");
      const formdata = new FormData();
      formdata.append("course_id", JSON.parse(Courseid));
      formdata.append("answer_1", text);
      formdata.append("answer_2", text1);
      formdata.append("mock_test_writing_id", 1);
      axios
        .post(add_mocktest_writing, formdata, {
          headers: {
            Accept: ACCEPT_HEADER,
            Authorization: "Bearer " + JSON.parse(Token),
          },
        })
        .then((res) => {
          if (res.data.status === "Token is Expired") {
            SetLogout();
            navigate("/");
          } else {
            navigate("/MockTest");
            Notification("success", "Success!", res.data.message);
          }
        })
        .catch((err) => {
          console.log("errrr-->", err);
        });
    }
  };

  const textInputRef = useRef(null);
  const textInputRef1 = useRef(null);

  const focusInput = () => {
    textInputRef.current.focus();
  };

  const focusInput1 = () => {
    textInputRef1.current.focus();
  };

  // restrict navigation
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const handlePopstate = () => {
    window.history.pushState(null, document.title, window.location.href);
  };

  // Disabling right-click
  const disableRightClick = (event) => {
    event.preventDefault();
  };

  document.addEventListener("contextmenu", disableRightClick);

  // restrict copying text
  useEffect(() => {
    const disableTextSelection = (event) => {
      event.preventDefault();
    };

    document.addEventListener("selectstart", disableTextSelection);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("selectstart", disableTextSelection);
    };
  }, []);

  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <div
        className="mockDemoTestPart1_main_nav"
        style={{
          fontSize: `${fontSize}px`,
          backgroundColor: `var(${bgcolor})`,
        }}
      >
        <span className="SecSpeakTestPart1_nav_inner">
          <FaUser />
          XXXXX-XXXXX -123456
        </span>
        <span
          className="que_no"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <FaClock />
          <div>
            {hours}:{minutes < 10 ? "0" : ""}
            {minutes}:{remainingSeconds < 10 ? "0" : ""}
            {remainingSeconds}
          </div>
          {/* {minutes} minutes {remainingSeconds} seconds */}
          {/* Minutes Left{" "} */}
        </span>
        <span style={{ display: "flex", gap: "1rem" }}>
          <button
            className="btn"
            onClick={() => {
              setModalIsOpen2(true);
            }}
          >
            Settings
          </button>
          <button className="btn" style={{ padding: "0.4rem 1rem" }}>
            <span
              style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              <IoIosHelpCircle />
              Help
            </span>
          </button>
          <button
            className="btn"
            style={{ padding: "0.4rem 1rem" }}
            onClick={() => {
              setModalIsOpen1(true);
            }}
          >
            Hide
          </button>
        </span>
      </div>
      <div
        className="SecWriteTestPart1_main_top"
        style={{ fontSize: `${fontSize}px` }}
      >
        <div className="SecWriteTestPart1_main">
          <div>
            <h4>Section 1</h4>
          </div>
          {/* <div>
          <p>Read and answer the questions Q.1-15</p>
        </div> */}
        </div>
        <div className="SecReadTestPart1_content_top">
          <div className="SecReadTestPart1_content1_main">
            <div>
              <div>
                <h6 className="que_no">Writing Task 1</h6>
              </div>
              <div>
                <p className="que_no">
                  You should spend about 20 minutes on this task
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                border: "1px solid ",
                padding: "0.5rem",
              }}
            >
              <span className="que_no">
                The pie charts below show the expenditure of the people of a
                country on different activities in 2000 and 2010.
              </span>
              <span className="que_no">
                Summarise the information by selecting and reporting the main
                features, and make comparisons where relevant.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <div className="que_no">Write at least 150 words.</div>
              <div>
                <div>
                  <img
                    src={images.mockTestPieChart1}
                    alt=""
                    style={{ objectFit: "contain" }}
                    className="writeTest_img_inner"
                  />
                </div>
                <div>
                  <img
                    style={{ objectFit: "contain" }}
                    src={images.mockTestPieChart2}
                    alt=""
                    className="writeTest_img_inner"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="SecReadTestPart1_content2_main">
            <textarea
              ref={textInputRef}
              className="form-control"
              id="myBox"
              rows="15"
              onChange={handleOnChange}
              value={text}
            ></textarea>
            <div>
              <span>Words Count: {text.split(" ").length} </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="SecWriteTestPart1_main_top"
        style={{ fontSize: `${fontSize}px` }}
      >
        <div className="SecWriteTestPart1_main">
          <div>
            <h4>Section 2</h4>
          </div>
          {/* <div>
          <p>Read and answer the questions Q.1-15</p>
        </div> */}
        </div>
        <div className="SecReadTestPart1_content_top">
          <div className="SecReadTestPart1_content1_main">
            <div>
              <div>
                <h6 className="que_no">Writing Task 2</h6>
              </div>
              <div>
                <p className="que_no">
                  You should spend about 20 minutes on this task
                </p>
              </div>
            </div>
            <div>Write about the following topic:</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                border: "1px solid ",
                padding: "0.5rem",
              }}
            >
              <span className="que_no">
                Many believe that the goal of one’s career should be to pursue a
                passion while others feel it is merely a way to earn a
                livelihood. Discuss both views and give your opinion.{" "}
              </span>
            </div>
            <div>
              <span>
                Give reasons for your answer and include any relevant examples
                from your own knowledge or experience.
              </span>
              <br />
              <br />
              <span>Write at least 250 words.</span>
            </div>
          </div>
          <div className="SecReadTestPart1_content2_main">
            <textarea
              ref={textInputRef1}
              className="form-control"
              id="myBox"
              rows="15"
              onChange={handleOnChange1}
              value={text1}
            ></textarea>
            <div>
              <span>Words Count: {text1.split(" ").length} </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="btn_sec_redirect_main"
        style={{ fontSize: `${fontSize}px` }}
      >
        <div className="btn_sec_redirect_inner">
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <div className="que_no">
              <h5>Section 1</h5>
            </div>
            <div className="btn_que_no_main">
              <div
                className="btn_que_no"
                onClick={focusInput}
                style={{ backgroundColor: `var(${bgcolor})` }}
              >
                1
              </div>
              <div
                className="btn_que_no"
                onClick={focusInput1}
                style={{ backgroundColor: `var(${bgcolor})` }}
              >
                2
              </div>
            </div>
          </div>
        </div>
        <div
          className="btn_submit_test"
          onClick={() => {
            handleButtonClick();
          }}
        >
          Submit Test
          <IoSend />
        </div>
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}
      >
        <>
          <div
            className="navbar_modal_signin_head"
            style={{ gap: "1rem", alignItems: "center" }}
          >
            <FaQuestionCircle
              style={{
                fontSize: "22px",
                color: "var(--color-brand)",
              }}
            />
            <h3 style={{ color: "var(--color-brand)" }}>Help</h3>
          </div>
          <div className="model_sizing">
            <div
              style={{ display: "flex", gap: "0.5rem" }}
              className="SectionTest_tab_main"
            >
              <div
                className="SectionTest_tab_inner"
                style={{
                  cursor: "pointer",
                  background:
                    getTab === 1 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 1 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                onClick={() => {
                  setTab(1);
                }}
              >
                Inofmation
              </div>
              <div
                className="SectionTest_tab_inner"
                style={{
                  cursor: "pointer",
                  background:
                    getTab === 2 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 2 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                onClick={() => {
                  setTab(2);
                }}
              >
                Test help
              </div>
              <div
                className="SectionTest_tab_inner"
                style={{
                  cursor: "pointer",
                  background:
                    getTab === 3 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 3 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                onClick={() => {
                  setTab(3);
                }}
              >
                Task help
              </div>
            </div>

            {getTab === 1 ? (
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  paddingTop: "1.5rem",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexDirection: "column",
                  }}
                >
                  <span className="que_no">INSTRUCTIONS TO CANDIDATES</span>
                  <div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>Answer all questions</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>
                        You can change your answers at any time during the test
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexDirection: "column",
                  }}
                >
                  <span className="que_no">
                    INFORMATION FOR INFORMATION FOR CANDIDATES
                  </span>
                  <div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>There are 40 questions in this test</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>Each questions caries one mark</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>
                        The test clock will show you where there are 10 minutes
                        remaining
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : getTab === 2 ? (
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  paddingTop: "1.5rem",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span className="que_no">
                  At the top of the screen you can see
                </span>
                <span style={{ background: "lightgray", padding: "0.5rem" }}>
                  XXXXXXXX-123456
                </span>
                <span>Your name and candidate number </span>
                <span style={{ background: "lightgray", padding: "0.5rem" }}>
                  90 minutes left{" "}
                </span>
                <span>
                  A clock which tells you how much time you have left. when you
                  hover over the time you can see the seconds
                </span>
              </div>
            ) : getTab === 3 ? (
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  paddingTop: "1.5rem",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span className="que_no">Info Help</span>
              </div>
            ) : null}

            <div>
              <button
                className="btn"
                style={{ width: "100%", margin: "0px" }}
                onClick={() => {
                  setModalIsOpen(false);
                  // PostReadingRaiseQuery();
                }}
              >
                Ok
              </button>
            </div>
          </div>
        </>
      </ReactModal>
      <ReactModal
        isOpen={modalIsOpen1}
        onRequestClose={() => {
          setModalIsOpen1(false);
        }}
        style={customStyles1}
      >
        <>
          <div
            className="navbar_modal_signin_head"
            style={{ gap: "1rem", alignItems: "center" }}
          >
            <MdOutlineSettings
              style={{
                fontSize: "22px",
                color: "var(--color-brand)",
              }}
            />
            <h3 style={{ color: "var(--color-brand)", fontWeight: "700" }}>
              Screen hidden
            </h3>
          </div>
          <div className="model_sizing">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <span>Your answers have been stored.</span>
              <span>Please note that the clock is still running.</span>
              <span>
                If you wish to leave the room, please tell the your invigitator
              </span>
              <span>Click the below button to go back your test</span>
            </div>

            <div>
              <button
                className="btn"
                style={{ width: "100%", margin: "0px" }}
                onClick={() => {
                  setModalIsOpen1(false);
                }}
              >
                Resume Test
              </button>
            </div>
          </div>
        </>
      </ReactModal>
      <ReactModal
        isOpen={modalIsOpen2}
        onRequestClose={() => {
          setModalIsOpen2(false);
        }}
        style={customStyles}
      >
        <>
          <div
            className="navbar_modal_signin_head"
            style={{ gap: "1rem", alignItems: "center" }}
          >
            <MdOutlineSettings
              style={{
                fontSize: "22px",
                color: "var(--color-brand)",
              }}
            />
            <h3 style={{ color: "var(--color-brand)", fontWeight: "700" }}>
              Settings
            </h3>
          </div>
          <div className="model_sizing">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <span className="que_no">
                If you wish, you can change these settings to make the test
                easier to read
              </span>
              <div>
                <div>
                  <span className="que_no">Text Size</span>
                  <div>
                    <label style={{ display: "flex", gap: "0.5rem" }}>
                      <input
                        type="radio"
                        value="Standard"
                        checked={getRadio === "Standard"}
                        // checked={fontSize === 16}
                        onChange={handleOptionChange}
                      />
                      Standard{" "}
                    </label>

                    <label style={{ display: "flex", gap: "0.5rem" }}>
                      <input
                        type="radio"
                        value="Large"
                        checked={getRadio === "Large"}
                        onChange={handleOptionChange}
                      />
                      Large
                    </label>

                    <label style={{ display: "flex", gap: "0.5rem" }}>
                      <input
                        type="radio"
                        value="Extra Large"
                        checked={getRadio === "Extra Large"}
                        onChange={handleOptionChange}
                      />
                      Extra Large
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="que_no">Colours</span>
              <div>
                <label style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    value="Standard2"
                    checked={getRadio2 === "Standard2"}
                    onChange={handleOptionChange2}
                  />
                  Standard
                </label>

                <label style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    value="Yellow on Black"
                    checked={getRadio2 === "Yellow on Black"}
                    onChange={handleOptionChange2}
                  />
                  Yellow on Black
                </label>
              </div>
            </div>
            <div>
              <button
                className="btn"
                style={{ width: "100%", margin: "0px" }}
                onClick={() => {
                  setModalIsOpen2(false);
                }}
              >
                OK
              </button>
            </div>
          </div>
        </>
      </ReactModal>
    </>
  );
};

export default MockDemoTest;