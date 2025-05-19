/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useRef, useState } from "react";
import "./ListenPart4.css";
import SecTest1_nav from "../../components/secTest1_nav/SecTest1_nav";
import SecTestPart1 from "../../container/secTestPart1/SecTestPart1";
import SecTestPart2 from "../../container/secTestPart2/SecTestPart2";
import SecTestPart3 from "../../container/secTestPart3/SecTestPart3";
import SecTestPart4 from "../../container/secTestPart4/SecTestPart4";
import { MdOutlineSettings } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import {
  ACCEPT_HEADER,
  add_listening,
  add_listening_section4,
  listening_section4_count,
  view_listening,
  view_listening_data,
} from "../../utils/Constant";
import Notification from "../../utils/Notification";
import { useAuthContext } from "../../context/auth_context";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import images from "../../constants/images";
import ReactAudioPlayer from "react-audio-player";

const ListenPart4 = () => {
  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;
  const [getMarksModal, setMarksModal] = useState(false);
  const [getList, setList] = useState();

  const [loading, setloading] = useState(false);

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
            // marks_sec4();
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
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          SetLoad(false);
        } else {
          if (res.data.success == 1) {
            SetAns1(res.data.data?.answer_1 ? res.data.data?.answer_1 : "");
            SetAns2(res.data.data?.answer_2 ? res.data.data?.answer_2 : "");
            SetAns3(res.data.data?.answer_3 ? res.data.data?.answer_3 : "");
            SetAns4(res.data.data?.answer_4 ? res.data.data?.answer_4 : "");
            SetAns5(res.data.data?.answer_5 ? res.data.data?.answer_5 : "");
            SetAns6(res.data.data?.answer_6 ? res.data.data?.answer_6 : "");
            SetAns7(res.data.data?.answer_7 ? res.data.data?.answer_7 : "");
            SetAns8(res.data.data?.answer_8 ? res.data.data?.answer_8 : "");
            SetAns9(res.data.data?.answer_9 ? res.data.data?.answer_9 : "");
            SetAns10(res.data.data?.answer_10 ? res.data.data?.answer_10 : "");
            SetAns11(res.data.data?.answer_11 ? res.data.data?.answer_11 : "");
            SetAns12(res.data.data?.answer_12 ? res.data.data?.answer_12 : "");
            SetAns13(res.data.data?.answer_13 ? res.data.data?.answer_13 : "");
            SetAns14(res.data.data?.answer_14 ? res.data.data?.answer_14 : "");
            SetAns15(res.data.data?.answer_15 ? res.data.data?.answer_15 : "");
            SetAns16(res.data.data?.answer_16 ? res.data.data?.answer_16 : "");
            SetAns17(res.data.data?.answer_17 ? res.data.data?.answer_17 : "");
            SetAns18(res.data.data?.answer_18 ? res.data.data?.answer_18 : "");
            SetAns19(res.data.data?.answer_19 ? res.data.data?.answer_19 : "");
            SetAns20(res.data.data?.answer_20 ? res.data.data?.answer_20 : "");
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
            SetAns31(res.data.data?.answer_31 ? res.data.data?.answer_31 : "");
            SetAns32(res.data.data?.answer_32 ? res.data.data?.answer_32 : "");
            SetAns33(res.data.data?.answer_33 ? res.data.data?.answer_33 : "");
            SetAns34(res.data.data?.answer_34 ? res.data.data?.answer_34 : "");
            SetAns35(res.data.data?.answer_35 ? res.data.data?.answer_35 : "");
            SetAns36(res.data.data?.answer_36 ? res.data.data?.answer_36 : "");
            SetAns37(res.data.data?.answer_37 ? res.data.data?.answer_37 : "");
            SetAns38(res.data.data?.answer_38 ? res.data.data?.answer_38 : "");
            SetAns39(res.data.data?.answer_39 ? res.data.data?.answer_39 : "");
            SetAns40(res.data.data?.answer_30 ? res.data.data?.answer_40 : "");
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

  const textInputRef1 = useRef(null);
  const focusInput1 = () => {
    textInputRef1.current.focus();
  };
  const textInputRef2 = useRef(null);
  const focusInput2 = () => {
    textInputRef2.current.focus();
  };
  const textInputRef3 = useRef(null);
  const focusInput3 = () => {
    textInputRef3.current.focus();
  };
  const textInputRef4 = useRef(null);
  const focusInput4 = () => {
    textInputRef4.current.focus();
  };
  const textInputRef5 = useRef(null);
  const focusInput5 = () => {
    textInputRef5.current.focus();
  };
  const textInputRef6 = useRef(null);
  const focusInput6 = () => {
    textInputRef6.current.focus();
  };

  const textInputRef7 = useRef(null);
  const focusInput7 = () => {
    textInputRef7.current.focus();
  };
  const textInputRef8 = useRef(null);
  const focusInput8 = () => {
    textInputRef8.current.focus();
  };
  const textInputRef9 = useRef(null);
  const focusInput9 = () => {
    textInputRef9.current.focus();
  };

  const textInputRef11 = useRef(null);
  const focusInput11 = () => {
    textInputRef11.current.focus();
  };

  const textInputRef12 = useRef(null);
  const focusInput12 = () => {
    textInputRef12.current.focus();
  };

  const textInputRef13 = useRef(null);
  const focusInput13 = () => {
    textInputRef13.current.focus();
  };

  const textInputRef14 = useRef(null);
  const focusInput14 = () => {
    textInputRef14.current.focus();
  };

  const textInputRef15 = useRef(null);
  const focusInput15 = () => {
    textInputRef15.current.focus();
  };

  const textInputRef16 = useRef(null);
  const focusInput16 = () => {
    textInputRef16.current.focus();
  };

  const textInputRef17 = useRef(null);
  const focusInput17 = () => {
    textInputRef17.current.focus();
  };

  const textInputRef18 = useRef(null);
  const focusInput18 = () => {
    textInputRef18.current.focus();
  };

  const textInputRef19 = useRef(null);
  const focusInput19 = () => {
    textInputRef19.current.focus();
  };

  const textInputRef20 = useRef(null);
  const focusInput20 = () => {
    textInputRef20.current.focus();
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

  const handleLoadedMetadata = () => {
    const controls = document.querySelector(".react-audio-player-controls");
    if (controls) {
      controls.style.setProperty("display", "flex", "important"); // Ensure flex display
      const downloadButton = controls.querySelector(
        ".react-audio-player-download"
      );
      const speedControl = controls.querySelector(".react-audio-player-speed");

      if (downloadButton) {
        downloadButton.style.display = "none";
      }
      if (speedControl) {
        speedControl.style.display = "none";
      }

      setShowControls(false); // Update state to prevent unnecessary re-renders
    }
  };

  const [ans1, SetAns1] = useState("");
  const [ans2, SetAns2] = useState("");
  const [ans3, SetAns3] = useState("");
  const [ans4, SetAns4] = useState("");
  const [ans5, SetAns5] = useState("");
  const [ans6, SetAns6] = useState("");
  const [ans7, SetAns7] = useState("");
  const [ans8, SetAns8] = useState("");
  const [ans9, SetAns9] = useState("");
  const [ans10, SetAns10] = useState("");

  const [ans11, SetAns11] = useState("");
  const [ans12, SetAns12] = useState("");
  const [ans13, SetAns13] = useState("");
  const [ans14, SetAns14] = useState("");
  const [ans15, SetAns15] = useState("");
  const [ans16, SetAns16] = useState("");
  const [ans17, SetAns17] = useState("");
  const [ans18, SetAns18] = useState("");
  const [ans19, SetAns19] = useState("");
  const [ans20, SetAns20] = useState("");

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

  const [ans31, SetAns31] = useState("");
  const [ans32, SetAns32] = useState("");
  const [ans33, SetAns33] = useState("");
  const [ans34, SetAns34] = useState("");
  const [ans35, SetAns35] = useState("");
  const [ans36, SetAns36] = useState("");
  const [ans37, SetAns37] = useState("");
  const [ans38, SetAns38] = useState("");
  const [ans39, SetAns39] = useState("");
  const [ans40, SetAns40] = useState("");

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const AddListening = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", Courseid);
    // formdata.append("answer_1", ans1);
    // formdata.append("answer_2", ans2);
    // formdata.append("answer_3", ans3);
    // formdata.append("answer_4", ans4);
    // formdata.append("answer_5", ans5);
    // formdata.append("answer_6", ans6);
    // formdata.append("answer_7", ans7);
    // formdata.append("answer_8", ans8);
    // formdata.append("answer_9", ans9);
    // formdata.append("answer_10", ans10);
    // formdata.append("answer_11", ans11);
    // formdata.append("answer_12", ans12);
    // formdata.append("answer_13", ans13);
    // formdata.append("answer_17", ans17);
    // formdata.append("answer_18", ans18);
    // formdata.append("answer_19", ans19);
    // formdata.append("answer_20", ans20);
    // formdata.append("answer_21", ans21);
    // formdata.append("answer_22", ans22);
    // formdata.append("answer_23", ans23);
    // formdata.append("answer_24", ans24);
    // formdata.append("answer_25", ans25);
    // formdata.append("answer_26", ans26);
    // formdata.append("answer_27", ans27);
    // formdata.append("answer_28", ans28);
    // formdata.append("answer_29", ans29);
    // formdata.append("answer_30", ans30);
    formdata.append("answer_1", ans31);
    formdata.append("answer_2", ans32);
    formdata.append("answer_3", ans33);
    formdata.append("answer_4", ans34);
    formdata.append("answer_5", ans35);
    formdata.append("answer_6", ans36);
    formdata.append("answer_7", ans37);
    formdata.append("answer_8", ans38);
    formdata.append("answer_9", ans39);
    formdata.append("answer_10", ans40);
    formdata.append("listening_section_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_41", blob, "audioFileName.mp3");
    axios
      .post(add_listening_section4, formdata, {
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
        //  setMarksModal(true);
        navigate("/SectionalTest");

          Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
    // }
  };

  const marks_sec4 = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(listening_section4_count, {
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
    // Code minification and obfuscation
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

  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [getRadio, setRadio] = useState("");
  const [getRadio2, setRadio2] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [bgcolor, setBgcolor] = useState("--color-brand");

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
       // height: "350px",
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

  const [showControls, setShowControls] = useState(true);
  const audioRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [mcq, setmcq] = useState([
    {
      id: 1,
      question:
        "31. According to the speaker, what does society need religion for?",
      refn: textInputRef31,
      options: [
        {
          opt: "having a collective belief",
        },
        {
          opt: "it makes us spiritual",
        },
        {
          opt: "for orderly conduct and to impose values",
        },
      ],
    },
    {
      id: 2,
      question: "32. What does civilization need to work well?",
      refn: textInputRef32,
      options: [
        {
          opt: "Religious teachings",
        },
        {
          opt: "Laws",
        },
        {
          opt: "Learnings",
        },
      ],
    },
    {
      id: 3,
      question:
        "33. Nowadays, religious practices are regarded with disrespect as",
      refn: textInputRef33,
      options: [
        {
          opt: "Secularism",
        },
        {
          opt: "Superiority",
        },
        {
          opt: "a myth",
        },
      ],
    },
  ]);

  const [expanded, setExpanded] = useState(0);
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
              setModalIsOpen2={setModalIsOpen2}
              bgcolor={bgcolor}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "end",
                paddingRight: "1rem",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}>
              <ReactAudioPlayer
                // style={{ display: "none" }}
                ref={audioRef}
                src={images.mp3sample}
                controls={showControls}
                onLoadedMetadata={handleLoadedMetadata}
                // autoPlay={getstartaudio == true ? true : false}
                // autoPlay={true}
              />
            </div>

            <div className="SecTestPart1_main_top">
              <div className="SecTestPart1_main">
                <div>
                  <h4>Part 4</h4>
                </div>
                <div>
                  <p>Listen and answer the questions Q.31-40</p>
                </div>
              </div>
              <div className="SecTestPart1_content_main">
                <div>Section 4</div>
                <div>
                  <div>
                    <h6 className="que_heading">Questions 31 - 33</h6>
                  </div>
                  <div>
                    <i style={{ fontStyle: "italic" }}>
                      Choose the correct answer.
                    </i>
                  </div>
                  <div className="test_accordian_main">
                    {mcq.map((item, index) => (
                      <div
                        ref={item.refn}
                        tabIndex={-1}
                        key={item.id}
                        className="test_accordian_inner"
                        onClick={() => {
                          setExpanded(index);
                        }}>
                        <div className="test-questions">
                          <div className="">
                            <p style={{ marginBottom: "0px" }}>
                              {item.question}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`test-answer ${
                            expanded === index
                              ? "visible"
                              : "hidden test-answer_margin_not"
                          }`}>
                          {item.options.map((item1) => {
                            return (
                              <>
                                <div>
                                  <label className="radio_styling">
                                    <input
                                      type="radio"
                                      name="react-tips"
                                      value={item1.opt}
                                      className=""
                                      onChange={(e) => {
                                        // eslint-disable-next-line no-unused-expressions
                                        index == 0
                                          ? SetAns31(e.target.value)
                                          : index === 1
                                          ? SetAns32(e.target.value)
                                          : index === 2
                                          ? SetAns33(e.target.value)
                                          : null;
                                      }}
                                    />
                                    {item1.opt}
                                  </label>
                                </div>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="secTestPart4_box">
                  <div>
                    <h6 className="que_heading">Questions 34 - 40</h6>
                  </div>
                  <i style={{ fontStyle: "italic" }}>
                    Complete the notes. Write &nbsp;
                    <b style={{ fontWeight: "600" }}>ONE WORD ONLY</b> in each
                    gap.
                  </i>
                  <div className="SecTestPart4_box_main">
                    <div className="advantages_main">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}>
                        <h6 className="que_no">Advantages of religion</h6>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <div>•</div>
                        <div>
                          <b className="que_no">
                            Emotional and mental balance:
                          </b>{" "}
                          People look for solace in their religion at the time
                          of{" "}
                          <span className="que_no">
                            34{" "}
                            <input
                              ref={textInputRef34}
                              type="text"
                              value={ans34}
                              className="secTestPart1_input_inner"
                              onChange={(e) => {
                                SetAns34(e.target.value);
                              }}
                            />{" "}
                          </span>{" "}
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <div>•</div>
                        <div>
                          <b className="que_no">Social unanimity:</b> Religious
                          practices encourage brotherhood and build up &nbsp;
                          <span className="que_no">
                            {" "}
                            35{" "}
                            <input
                              ref={textInputRef35}
                              type="text"
                              value={ans35}
                              className="secTestPart1_input_inner"
                              onChange={(e) => {
                                SetAns35(e.target.value);
                              }}
                            />{" "}
                          </span>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <div>•</div>
                        <div>
                          <b className="que_no">Recreation:</b> &nbsp;Earlier
                          recreation was considered a&nbsp;
                          <span className="que_no">
                            36{" "}
                            <input
                              type="text"
                              value={ans36}
                              ref={textInputRef36}
                              className="secTestPart1_input_inner"
                              onChange={(e) => {
                                SetAns36(e.target.value);
                              }}
                            />
                            &nbsp;{" "}
                            <span style={{ fontWeight: "500" }}>
                              that a handful of people possess but now religious
                              celebrations avail common people an opportunity to
                              break the
                              <span className="que_no">
                                &nbsp;37{" "}
                                <input
                                  ref={textInputRef37}
                                  type="text"
                                  value={ans37}
                                  className="secTestPart1_input_inner"
                                  onChange={(e) => {
                                    SetAns37(e.target.value);
                                  }}
                                />
                                <span style={{ fontWeight: "500" }}>
                                  &nbsp; and routine life.
                                </span>
                              </span>{" "}
                            </span>
                          </span>{" "}
                        </div>
                      </div>
                      <div>
                        Many religious celebrations involve music and dance.
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <div>•</div>
                        <div>
                          <b className="que_no">Right direction:</b> Religion
                          provides people with a purpose for life, career and
                          other activities.
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "1.4rem",
                        gap: "1rem",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}>
                        <h6 className="que_no">Other influences of religion</h6>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <div>•</div>
                        <div>
                          <span>
                            Pilgrims travel to different places and bring
                            development through the routes of their journey.
                            They also help in the growth of the local{" "}
                            <span className="que_no">
                              &nbsp; 38 &nbsp;
                              <input
                                ref={textInputRef38}
                                type="text"
                                value={ans38}
                                className="secTestPart1_input_inner"
                                onChange={(e) => {
                                  SetAns38(e.target.value);
                                }}
                              />{" "}
                              &nbsp;.
                            </span>
                          </span>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <div>•</div>
                        <div>
                          <span>
                            Political systems have been controlled by
                            <span className="que_no">
                              &nbsp; 39 &nbsp;
                              <input
                                ref={textInputRef39}
                                type="text"
                                value={ans39}
                                className="secTestPart1_input_inner"
                                onChange={(e) => {
                                  SetAns39(e.target.value);
                                }}
                              />{" "}
                            </span>
                            &nbsp; for example in ancient civilisations such as
                            Indus Valley, Egypt and Greece.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "1.4rem",
                        gap: "1rem",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}>
                        <h6 className="que_no">Other influences of religion</h6>
                      </div>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <div>•</div>
                        <div>
                          <span>
                            Radicals are viewed as the decayed branch of
                            religion which should be either
                            <span className="que_no">
                              &nbsp; 40 &nbsp;
                              <input
                                ref={textInputRef40}
                                type="text"
                                value={ans40}
                                className="secTestPart1_input_inner"
                                onChange={(e) => {
                                  SetAns40(e.target.value);
                                }}
                              />{" "}
                              &nbsp;{" "}
                              <span style={{ fontWeight: "500" }}>or cut.</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <SecTestPart4
              textInputRef31={textInputRef31}
              textInputRef32={textInputRef32}
              textInputRef33={textInputRef33}
              textInputRef34={textInputRef34}
              textInputRef35={textInputRef35}
              textInputRef36={textInputRef36}
              textInputRef37={textInputRef37}
              textInputRef38={textInputRef38}
              textInputRef39={textInputRef39}
              textInputRef40={textInputRef40}
              SetAns31={SetAns31}
              SetAns32={SetAns32}
              SetAns33={SetAns33}
              SetAns34={SetAns34}
              SetAns35={SetAns35}
              SetAns36={SetAns36}
              SetAns37={SetAns37}
              SetAns38={SetAns38}
              SetAns39={SetAns39}
              SetAns40={SetAns40}
              ans31={ans31}
              ans32={ans32}
              ans33={ans33}
              ans34={ans34}
              ans35={ans35}
              ans36={ans36}
              ans37={ans37}
              ans38={ans38}
              ans39={ans39}
              ans40={ans40}
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
                <h3 style={{ fontWeight: "700" }}>Report</h3>
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

export default ListenPart4;
