import React, { useEffect, useRef, useState } from "react";
import { SecWriteTestPart1 } from "../../container";
import SecWriteTestPart2 from "../../container/secWriteTestPart2/SecWriteTestPart2";
import { IoSend } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";
import Notification from "../../utils/Notification";
import { ACCEPT_HEADER, add_writing, view_writing } from "../../utils/Constant";
import axios from "axios";
import ReactModal from "react-modal";
import { MdOutlineSettings } from "react-icons/md";
import { FaQuestionCircle, FaUser } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";

const SecWritingTest1 = () => {
  const [getTab, setTab] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [getRadio, setRadio] = useState("");
  const [getRadio2, setRadio2] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;
  const [bgcolor, setBgcolor] = useState("--color-brand");
  const handleOptionChange2 = (event) => {
    setRadio2(event.target.value);
    if (event.target.value === "Standard2") {
      setBgcolor("--color-brand");
    } else if (event.target.value === "Yellow on Black") {
      setBgcolor("--color-orange-yellow");
    }
  };
  useEffect(() => {
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
    ViewWritngApi();
  }, []);
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

  const [isload, SetLoad] = useState(false);
  const ViewWritngApi = async () => {
    SetLoad(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(view_writing, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          SetLoad(false);
        } else {
          if (res.data.success == 1) {
            SetAns1(res.data.data?.answer_1 ? res.data.data?.answer_1 : "");
            SetAns2(res.data.data?.answer_2 ? res.data.data?.answer_2 : "");
            SetLoad(false);
          }
        }
      })

      .catch((err) => {
        console.log("--->err", err);
        SetLoad(false);
      });
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
  const textInputRef = useRef(null);
  const focusInput = () => {
    textInputRef.current.focus();
  };
  const textInputRef2 = useRef(null);
  const focusInput2 = () => {
    textInputRef2.current.focus();
  };
  const handleButtonClick = () => {
    const result = window.confirm("Are you sure you want to submit the test?");
    if (result) {
      console.log("Action confirmed");
      AddWiiting();
    } else {
      console.log("Action canceled");
    }
  };

  const [ans1, SetAns1] = useState("");
  const [ans2, SetAns2] = useState("");

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const AddWiiting = async () => {
    // if (ans1 === "") {
    //   Notification("error", "Error", "Enter Answer 1");
    // } else if (ans2 === "") {
    //   Notification("error", "Error", "Enter Answer 2");
    // } else {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("answer_1", ans1);
    formdata.append("answer_2", ans2);
    formdata.append("writing_id", 1);

    axios
      .post(add_writing, formdata, {
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
          navigate("/ModuleTest");
          Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
    // }
  };

  // restrict inspect
  useEffect(() => {
    // Code minification and obfuscation
    const obfuscatedCode = () => {
      // Your obfuscated code goes here
      console.log("This is obfuscated code.");
    };

    // Disabling right-click
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    // Detecting developer tools
    const detectDevTools = () => {
      console.log("Checking for developer tools...");
    };

    window.addEventListener("devtoolschange", (event) => {
      if (event.detail.isOpen) {
        console.log("Developer tools are open!");
        // You can take some action here, but it won't prevent the user from using the tools.
      }
    });

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      window.removeEventListener("devtoolschange", detectDevTools);
    };
  }, []);

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

  return (
    <>
      {isload === true ? (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div
            className="mockDemoTestPart1_main_nav"
            style={{
              fontSize: `${fontSize}px`,
              backgroundColor: `var(${bgcolor})`,
            }}>
            <span className="SecSpeakTestPart1_nav_inner">
              <FaUser />
              XXXXX-XXXXX -123456
            </span>
            {/* <span
          className="que_no"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaClock />
          {minutes} minutes {remainingSeconds} seconds
        </span> */}
            <span style={{ display: "flex", gap: "1rem" }}>
              <button
                className="btn"
                onClick={() => {
                  setModalIsOpen2(true);
                }}>
                Settings
              </button>
              <button className="btn" style={{ padding: "0.4rem 1rem" }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem",
                  }}
                  onClick={() => {
                    setModalIsOpen(true);
                  }}>
                  <IoIosHelpCircle />
                  Help
                </span>
              </button>
              <button
                className="btn"
                style={{ padding: "0.4rem 1rem" }}
                onClick={() => {
                  setModalIsOpen1(true);
                }}>
                Hide
              </button>
            </span>
          </div>
          <div style={{ fontSize: `${fontSize}px` }}>
            <SecWriteTestPart1
              textInputRef={textInputRef}
              SetAns1={SetAns1}
              ans1={ans1}
            />
            <SecWriteTestPart2
              textInputRef2={textInputRef2}
              SetAns2={SetAns2}
              ans1={ans2}
            />
            <div className="btn_sec_redirect_main">
              <div
                className="btn_sec_redirect_inner"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}>
                <div className="btn_part_block_main">
                  <div className="que_no">
                    <h5>Section 1</h5>
                  </div>
                  <div className="btn_que_no_main">
                    <div
                      className="btn_que_no"
                      onClick={focusInput}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      1
                    </div>
                    <div
                      className="btn_que_no"
                      onClick={focusInput2}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      2
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn_submit_test" onClick={handleButtonClick}>
                Submit Test
                <IoSend />
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
              <div
                className="navbar_modal_signin_head"
                style={{ gap: "1rem", alignItems: "center" }}>
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
                  className="SectionTest_tab_main">
                  <div
                    className="SectionTest_tab_inner"
                    style={{
                      cursor: "pointer",
                      background:
                        getTab === 1
                          ? "var(--color-brand)"
                          : "var(--color-white)",
                      color:
                        getTab === 1
                          ? "var(--color-white)"
                          : "var(--color-brand)",
                      padding: "0.5rem",
                    }}
                    onClick={() => {
                      setTab(1);
                    }}>
                    Information
                  </div>
                  <div
                    className="SectionTest_tab_inner"
                    style={{
                      cursor: "pointer",
                      background:
                        getTab === 2
                          ? "var(--color-brand)"
                          : "var(--color-white)",
                      color:
                        getTab === 2
                          ? "var(--color-white)"
                          : "var(--color-brand)",
                      padding: "0.5rem",
                    }}
                    onClick={() => {
                      setTab(2);
                    }}>
                    Test help
                  </div>
                  <div
                    className="SectionTest_tab_inner"
                    style={{
                      cursor: "pointer",
                      background:
                        getTab === 3
                          ? "var(--color-brand)"
                          : "var(--color-white)",
                      color:
                        getTab === 3
                          ? "var(--color-white)"
                          : "var(--color-brand)",
                      padding: "0.5rem",
                    }}
                    onClick={() => {
                      setTab(3);
                    }}>
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
                    }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexDirection: "column",
                      }}>
                      <span className="que_no">INSTRUCTIONS TO CANDIDATES</span>
                      <div>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <div>•</div>
                          <div>Answer all questions</div>
                        </div>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <div>•</div>
                          <div>
                            You can change your answers at any time during the
                            test
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexDirection: "column",
                      }}>
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
                            The test clock will show you where there are 10
                            minutes remaining
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
                    }}>
                    <span className="que_no">
                      At the top of the screen you can see
                    </span>
                    <span
                      style={{ background: "lightgray", padding: "0.5rem" }}>
                      XXXXXXXX-123456
                    </span>
                    <span>Your name and candidate number </span>
                    <span
                      style={{ background: "lightgray", padding: "0.5rem" }}>
                      90 minutes left{" "}
                    </span>
                    <span>
                      A clock which tells you how much time you have left. when
                      you hover over the time you can see the seconds
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
                    }}>
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
                    }}>
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
            style={customStyles1}>
            <>
              <div
                className="navbar_modal_signin_head"
                style={{ gap: "1rem", alignItems: "center" }}>
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
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}>
                  <span>Your answers have been stored.</span>
                  <span>Please note that the clock is still running.</span>
                  <span>
                    If you wish to leave the room, please tell the your
                    invigitator
                  </span>
                  <span>Click the below button to go back your test</span>
                </div>
                <div>
                  <button
                    className="btn"
                    style={{ width: "100%", margin: "0px" }}
                    onClick={() => {
                      setModalIsOpen1(false);
                    }}>
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
            style={customStyles}>
            <>
              <div
                className="navbar_modal_signin_head"
                style={{ gap: "1rem", alignItems: "center" }}>
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
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}>
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
                    }}>
                    OK
                  </button>
                </div>
              </div>
            </>
          </ReactModal>
        </>
      )}
    </>
  );
};

export default SecWritingTest1;
