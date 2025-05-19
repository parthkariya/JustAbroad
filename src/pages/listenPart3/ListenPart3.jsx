/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useRef, useState } from "react";
import "./ListenPart3.css";
import SecTest1_nav from "../../components/secTest1_nav/SecTest1_nav";
import { MdOutlineSettings } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import {
  ACCEPT_HEADER,
  add_listening,
  add_listening_section3,
  listening_section3_count,
  view_listening,
} from "../../utils/Constant";
import Notification from "../../utils/Notification";
import { useAuthContext } from "../../context/auth_context";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";

const ListenPart3 = () => {
  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [getRadio2, setRadio2] = useState("");
  const [getRadio, setRadio] = useState("");
  const [getList, setList] = useState();
  const [getMarksModal, setMarksModal] = useState(false);
  const [loading, setloading] = useState(false);

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
  const handleOptionChange2 = (event) => {
    setRadio2(event.target.value);
    if (event.target.value === "Standard2") {
      setBgcolor("--color-brand");
    } else if (event.target.value === "Yellow on Black") {
      setBgcolor("--color-orange-yellow");
    }
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
      padding: "0px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "none",
      border: "none",
      borderRadius: "5px",
      width: "350px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };

  useEffect(() => {
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
    ViewListningApi();
  }, []);

  const handleButtonClick = () => {
    const result = window.confirm("Are you sure you want to submit the test?");
    if (result) {
      console.log("Action confirmed");
      AddListening();
      // marks_sec3();
    } else {
      console.log("Action canceled");
    }
  };

  const [isload, SetLoad] = useState(false);
  const ViewListningApi = async () => {
    SetLoad(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(view_listening, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        console.log("resss", res.data);
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          SetLoad(false);
        } else {
          if (res.data.success == 1) {
            SetAns21(res.data.data?.answer_21 ? res.data.data?.answer_21 : "");
            SetAns22(res.data.data?.answer_22 ? res.data.data?.answer_22 : "");
            SetAns23(res.data.data?.answer_23 ? res.data.data?.answer_23 : "");
            SetAns24(res.data.data?.answer_24 ? res.data.data?.answer_24 : "");
            SetAns25(res.data.data?.answer_25 ? res.data.data?.answer_25 : "");
            SetAns26(res.data.data?.answer_26 ? res.data.data?.answer_26 : "");
            SetAns27(res.data.data?.answer_27 ? res.data.data?.answer_27 : "");
            SetAns28(res.data.data?.answer_28 ? res.data.data?.answer_28 : "");
            SetAns29(res.data.data?.answer_29 ? res.data.data?.answer_29 : "");
            SetAns30(res.data.data?.answer_20 ? res.data.data?.answer_30 : "");

            SetLoad(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        SetLoad(false);
      });
  };

  const textInputRef = useRef(null);
  const focusInput = () => {
    textInputRef.current.focus();
  };
  const textInputRef21 = useRef(null);
  const focusInput21 = () => {
    textInputRef21.current.focus();
  };

  const textInputRef22 = useRef(null);
  const focusInput22 = () => {
    textInputRef22.current.focus();
  };

  const textInputRef23 = useRef(null);
  const focusInput23 = () => {
    textInputRef23.current.focus();
  };

  const textInputRef24 = useRef(null);
  const focusInput24 = () => {
    textInputRef24.current.focus();
  };

  const textInputRef25 = useRef(null);
  const focusInput25 = () => {
    textInputRef25.current.focus();
  };

  const textInputRef26 = useRef(null);
  const focusInput26 = () => {
    textInputRef26.current.focus();
  };

  const textInputRef27 = useRef(null);
  const focusInput27 = () => {
    textInputRef27.current.focus();
  };

  const textInputRef28 = useRef(null);
  const focusInput28 = () => {
    textInputRef28.current.focus();
  };

  const textInputRef29 = useRef(null);
  const focusInput29 = () => {
    textInputRef29.current.focus();
  };

  const textInputRef30 = useRef(null);
  const focusInput30 = () => {
    textInputRef30.current.focus();
  };
  const textInputRef31 = useRef(null);
  const focusInput31 = () => {
    textInputRef31.current.focus();
  };

  const textInputRef32 = useRef(null);
  const focusInput32 = () => {
    textInputRef32.current.focus();
  };

  const textInputRef33 = useRef(null);
  const focusInput33 = () => {
    textInputRef33.current.focus();
  };

  const textInputRef34 = useRef(null);
  const focusInput34 = () => {
    textInputRef34.current.focus();
  };

  const textInputRef35 = useRef(null);
  const focusInput35 = () => {
    textInputRef35.current.focus();
  };

  const textInputRef36 = useRef(null);
  const focusInput36 = () => {
    textInputRef36.current.focus();
  };

  const textInputRef37 = useRef(null);
  const focusInput37 = () => {
    textInputRef37.current.focus();
  };

  const textInputRef38 = useRef(null);
  const focusInput38 = () => {
    textInputRef38.current.focus();
  };

  const textInputRef39 = useRef(null);
  const focusInput39 = () => {
    textInputRef39.current.focus();
  };

  const textInputRef40 = useRef(null);
  const focusInput40 = () => {
    textInputRef40.current.focus();
  };

  const [ans21, SetAns21] = useState("");
  const [ans22, SetAns22] = useState("");
  const [ans23, SetAns23] = useState("");
  const [ans24, SetAns24] = useState("");
  const [ans25, SetAns25] = useState("");
  const [ans26, SetAns26] = useState("");
  const [ans27, SetAns27] = useState("");
  const [ans28, SetAns28] = useState("");
  const [ans29, SetAns29] = useState("");
  const [ans30, SetAns30] = useState("");

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const AddListening = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", Courseid);
    formdata.append("answer_1", ans21);
    formdata.append("answer_2", ans22);
    formdata.append("answer_3", ans23);
    formdata.append("answer_4", ans24);
    formdata.append("answer_5", ans25);
    formdata.append("answer_6", ans26);
    formdata.append("answer_7", ans27);
    formdata.append("answer_8", ans28);
    formdata.append("answer_9", ans29);
    formdata.append("answer_10", ans30);

    formdata.append("listening_section_id", 1);

    axios
      .post(add_listening_section3, formdata, {
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
          // setMarksModal(true)
          navigate("/SectionalTest");
          Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
    // }
  };
  const marks_sec3 = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(listening_section3_count, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          setloading(false);
        } else {
          if (res.data.success == 1) {
            setList(res.data);
            // SetListAnswer(res.data.answer);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };

  // restrict inspect
  useEffect(() => {
    const obfuscatedCode = () => {
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
    // Disable text selection
    const disableTextSelection = (event) => {
      event.preventDefault();
    };

    document.addEventListener("selectstart", disableTextSelection);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("selectstart", disableTextSelection);
    };
  }, []);

  const [fontSize, setFontSize] = useState(16);
  const [bgcolor, setBgcolor] = useState("--color-brand");

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
          <div style={{ fontSize: `${fontSize}px` }}>
            <SecTest1_nav
              fontSize={fontSize}
              bgcolor={bgcolor}
              setModalIsOpen2={setModalIsOpen2}
            />
            <div className="SecTestPart1_main_top">
              <div className="SecTestPart1_main">
                <div>
                  <h4>Part 3</h4>
                </div>
                <div>
                  <p>Listen and answer the questions Q.21-30</p>
                </div>
              </div>
              <div className="SecTestPart1_content_main">
                <div>Section 3</div>
                <div>
                  <h6 className="que_heading">Questions 21 - 30</h6>
                </div>
                <div>
                  <i style={{ fontStyle: "italic" }}>
                    Complete the form. Write{" "}
                    <b style={{ fontWeight: "600" }}>NO MORE THAN TWO WORDS</b>{" "}
                    in each gap.
                  </i>
                </div>
                <div className="SecTestPart3_table_main_main">
                  <div className="SecTestPart3_table_main">
                    <div className="SecTestPart3_table_inner remove_underline remove_border_right">
                      Name of the Team Leaders
                    </div>
                    <div className="SecTestPart3_table_inner remove_underline remove_border_right">
                      Brittany Hopkins, captain, Girls &nbsp;
                      <span className="que_no">21</span>{" "}
                      <input
                        ref={textInputRef21}
                        type="text"
                        value={ans21}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns21(e.target.value);
                        }}
                      />{" "}
                      &nbsp;, team
                    </div>
                    <div className="SecTestPart3_table_inner remove_underline">
                      <div>
                        Thomas &nbsp; <span className="que_no">22</span>{" "}
                        <input
                          ref={textInputRef22}
                          type="text"
                          value={ans22}
                          className="secTestPart1_input_inner"
                          onChange={(e) => {
                            SetAns22(e.target.value);
                          }}
                        />{" "}
                        &nbsp;, captain, boy's team{" "}
                      </div>
                    </div>
                  </div>
                  <div className="SecTestPart3_table_main">
                    <div className="SecTestPart3_table_inner remove_underline remove_border_right">
                      Replacements in team
                    </div>
                    <div className="SecTestPart3_table_inner remove_underline remove_border_right">
                      Whitney Powell &nbsp;
                      <span className="que_no">23</span>{" "}
                      <input
                        ref={textInputRef23}
                        type="text"
                        value={ans23}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns23(e.target.value);
                        }}
                      />{" "}
                      &nbsp;, Brooke Adams as the <br />
                      <br /> midfielder
                    </div>
                    <div className="SecTestPart3_table_inner remove_underline">
                      <div>
                        Falk in place of Randy as a &nbsp;{" "}
                        <span className="que_no">24</span>{" "}
                        <input
                          ref={textInputRef24}
                          type="text"
                          value={ans24}
                          className="secTestPart1_input_inner"
                          onChange={(e) => {
                            SetAns24(e.target.value);
                          }}
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="SecTestPart3_table_main">
                    <div className="SecTestPart3_table_inner remove_underline remove_border_right">
                      Reason for Replacement{" "}
                    </div>
                    <div className="SecTestPart3_table_inner remove_underline remove_border_right">
                      Brooke experienced an &nbsp;
                      <span className="que_no">25</span>{" "}
                      <input
                        ref={textInputRef25}
                        type="text"
                        value={ans25}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns25(e.target.value);
                        }}
                      />{" "}
                      &nbsp;, injury
                    </div>
                    <div className="SecTestPart3_table_inner remove_underline">
                      <div>
                        Failed to achieve the required &nbsp;{" "}
                        <span className="que_no">26</span>{" "}
                        <input
                          ref={textInputRef26}
                          type="text"
                          value={ans26}
                          className="secTestPart1_input_inner"
                          onChange={(e) => {
                            SetAns26(e.target.value);
                          }}
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="SecTestPart3_table_main">
                    <div className="SecTestPart3_table_inner  remove_border_right">
                      Suggestion{" "}
                    </div>
                    <div className="SecTestPart3_table_inner  remove_border_right">
                      Team needs more &nbsp;
                      <span className="que_no">27</span>{" "}
                      <input
                        ref={textInputRef27}
                        type="text"
                        value={ans27}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns27(e.target.value);
                        }}
                      />{" "}
                      &nbsp; sessions <br />
                      <br />
                      Identify the strengths and weaknesses of players by
                      watching <span className="que_no">28</span>{" "}
                      <input
                        ref={textInputRef28}
                        type="text"
                        value={ans28}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns28(e.target.value);
                        }}
                      />{" "}
                      &nbsp;of the previous year's season
                    </div>
                    <div className="SecTestPart3_table_inner">
                      <div>
                        Thomas must manage the necessary coordination between
                        strikers due to the &nbsp;{" "}
                        <span className="que_no">29</span>
                        &nbsp;{" "}
                        <input
                          ref={textInputRef29}
                          type="text"
                          value={ans29}
                          className="secTestPart1_input_inner"
                          onChange={(e) => {
                            SetAns29(e.target.value);
                          }}
                        />{" "}
                        <br /> <br />
                        In his position on the field, Thomas must handle the
                        attack by the &nbsp; <span className="que_no">30</span>
                        &nbsp;{" "}
                        <input
                          ref={textInputRef30}
                          type="text"
                          value={ans30}
                          className="secTestPart1_input_inner"
                          onChange={(e) => {
                            SetAns30(e.target.value);
                          }}
                        />{" "}
                        team players.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <SecTestPart3
              textInputRef21={textInputRef21}
              textInputRef22={textInputRef22}
              textInputRef23={textInputRef23}
              textInputRef24={textInputRef24}
              textInputRef25={textInputRef25}
              textInputRef26={textInputRef26}
              textInputRef27={textInputRef27}
              textInputRef28={textInputRef28}
              textInputRef29={textInputRef29}
              textInputRef30={textInputRef30}
              SetAns21={SetAns21}
              SetAns22={SetAns22}
              SetAns23={SetAns23}
              SetAns24={SetAns24}
              SetAns25={SetAns25}
              SetAns26={SetAns26}
              SetAns27={SetAns27}
              SetAns28={SetAns28}
              SetAns29={SetAns29}
              SetAns30={SetAns30}
              ans21={ans21}
              ans22={ans22}
              ans23={ans23}
              ans24={ans24}
              ans25={ans25}
              ans26={ans26}
              ans27={ans27}
              ans28={ans28}
              ans29={ans29}
              ans30={ans30}
            /> */}

            <div className="btn_sec_redirect_main">
              <div
                className="btn_submit_test"
                style={{ marginBottom: "2rem" }}
                onClick={handleButtonClick}>
                Submit Test
                <IoSend />
              </div>
            </div>
          </div>
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
          <ReactModal
            isOpen={getMarksModal}
            onRequestClose={() => {
              setMarksModal(false);
            }}
            style={customStyles1}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // gap: "1.5rem",
                width: "100%",
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0.5rem",
                  color: "var(--color-brand)",
                  background: "lightgray",
                }}>
                <h3 style={{fontWeight:"700"}}>Report</h3>
              </div>
              <hr />
              <div style={{ padding: "1rem" }}>
                <h4 style={{ color: "darkgreen", fontWeight: "600" }}>
                  <span>Total Que: {getList?.total_que} </span>
                </h4>
                <h4 style={{ color: "green", fontWeight: "600" }}>
                  <span>Correct answer: {getList?.correct}</span>
                </h4>
                <h4 style={{ color: "red", fontWeight: "600" }}>
                  <span>Wrong answer: {getList?.in_correct}</span>
                </h4>
                <h4 style={{ color: "var(--color-brand)", fontWeight: "600" }}>
                  <span>Marks: {getList?.correct}</span>
                </h4>
              </div>
              <div style={{ padding: "1rem", paddingTop: "0px" }}>
                <button
                  className="btn"
                  style={{ width: "100%", margin: "0px" }}
                  onClick={() => {
                    // setMarksModal(false);
                    navigate("/SectionalTest");
                  }}>
                  OK
                </button>
              </div>
            </div>
          </ReactModal>
        </>
      )}
    </>
  );
};

export default ListenPart3;
