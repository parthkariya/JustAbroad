import React, { useEffect, useRef, useState } from "react";
import SecReadTestPart3 from "../../container/secReadTestPart3/SecReadTestPart3";
import { IoSend } from "react-icons/io5";
import {
  ACCEPT_HEADER,
  add_reading,
  add_reading_section3,
  reading_section3_count,
  view_reading,
} from "../../utils/Constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";
import Notification from "../../utils/Notification";
import { FaQuestionCircle, FaUser } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import ReactModal from "react-modal";
import { MdOutlineSettings } from "react-icons/md";

const ReadingPart3 = () => {
  const [getTab, setTab] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [getRadio, setRadio] = useState("");
  const [getRadio2, setRadio2] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const [bgcolor, setBgcolor] = useState("--color-brand");
  const [getList, setList] = useState();
  const [getMarksModal, setMarksModal] = useState(false);
  const [loading, setloading] = useState(false);

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
      // backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };
  const customStyles2 = {
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
  // const handleOptionChange2 = (event) => {
  //   setRadio2(event.target.value);
  // };
  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;
  useEffect(() => {
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
    ViewReadingApi();
  }, []);

  const handleButtonClick = () => {
    const result = window.confirm("Are you sure you want to submit the test?");

    if (result) {
      // console.log("Action confirmed");
      AddReadinging();
      // marks_sec3();
    } else {
      // console.log("Action canceled");
    }
  };

  const textInputRef29 = useRef(null);
  const textInputRef30 = useRef(null);
  const textInputRef31 = useRef(null);
  const textInputRef32 = useRef(null);
  const textInputRef33 = useRef(null);
  const textInputRef34 = useRef(null);
  const textInputRef35 = useRef(null);
  const textInputRef36 = useRef(null);
  const textInputRef37 = useRef(null);
  const textInputRef38 = useRef(null);
  const textInputRef39 = useRef(null);
  const textInputRef40 = useRef(null);

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

  const AddReadinging = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("answer_1", ans29);

    formdata.append("answer_2", ans30);
    formdata.append("answer_3", ans31);
    formdata.append("answer_4", ans32);
    formdata.append("answer_5", ans33);
    formdata.append("answer_6", ans34);
    formdata.append("answer_7", ans35);
    formdata.append("answer_8", ans36);
    formdata.append("answer_9", ans37);
    formdata.append("answer_10", ans38);
    formdata.append("answer_11", ans39);
    formdata.append("answer_12", ans40);
    formdata.append("reading_section_id", 1);

    axios
      .post(add_reading_section3, formdata, {
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
          // setMarksModal(true);
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
      .get(reading_section3_count, {
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
      // Your obfuscated code goes here
      // console.log("This is obfuscated code.");
    };

    // Disabling right-click
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    // Detecting developer tools
    const detectDevTools = () => {
      // console.log("Checking for developer tools...");
    };

    window.addEventListener("devtoolschange", (event) => {
      if (event.detail.isOpen) {
        // console.log("Developer tools are open!");
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

  const [isload, SetLoad] = useState(false);

  const ViewReadingApi = async () => {
    SetLoad(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(view_reading, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        // console.log("resss", res.data);
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
            SetAns40(res.data.data?.answer_40 ? res.data.data?.answer_40 : "");
            SetLoad(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        SetLoad(false);
      });
  };

  const [mcq, setmcq] = useState([
    {
      id: 1,
      refn: textInputRef35,
      question: "35. Lee Marcel's Ravensong mentions that",
      options: [
        {
          opt: "Native Canadians were aware of the uses of herbs.",
        },
        {
          opt: "African natives chose not to use IV drips.",
        },
        {
          opt: "Native Australians live close to each other.",
        },
        {
          opt: "Natives were treated as an exotic race.",
        },
      ],
    },
    {
      id: 2,
      refn: textInputRef36,
      question: "36. Lee Marcel's Ravensong mentions that",
      options: [
        {
          opt: "The African people want to imitate the culture of the whites.",
        },
        {
          opt: "The people want a democratic government.",
        },
        {
          opt: "The invasion of the whites has destroyed old ways of life.",
        },
        {
          opt: "Native Africans are interested in conversions.",
        },
      ],
    },
  ]);
  const [expanded, setExpanded] = useState();

  return (
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
              style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
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
        <div className="SecReadTestPart1_main_top">
          <div className="SecReadTestPart1_main">
            <div>
              <h4>Section 3</h4>
            </div>
            <div>
              <p>Read and answer the questions Q.29-40</p>
            </div>
          </div>
          <div className="SecReadTestPart1_content_top">
            <div className="SecReadTestPart1_content1_main">
              <div>
                <div>
                  <h6 className="que_no">Reading Passage 3</h6>
                </div>
                <div>
                  <p>
                    You should spend about 20 minutes on{" "}
                    <span style={{ fontWeight: "600" }}>Questions 29-40,</span>{" "}
                    which are based on Reading Passage 3 below.
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: "column",
                }}>
                <div
                  style={{
                    display: "flex",
                    fontWeight: "600",
                    justifyContent: "center",
                  }}>
                  SHOULD THE ABORIGINALS BE LEFT ALONE?{" "}
                </div>
                <span>
                  Aboriginal is a term used for people who are the original,
                  native dwellers of a place. Later, due to the influx of other
                  people or due to colonisation, we find a demarcation between
                  these native residents and the newcomers. Canada is a very
                  good example, for with the advent o the whites, the native
                  Canadians were uprooted and became dwellers on the
                  reservations.
                </span>
                <span>
                  The problem most aboriginals face is that they have lost their
                  voice in their own land. The negative press that colonisers
                  have used as a means to spread their territory has adversely
                  affected how people interpret the term aboriginal'. Defamation
                  is a political game plan, and hence, the whites gave native
                  Canadians alcohol. Unused to such intoxication and unaware of
                  its repercussions, the people took this in good faith and
                  unfortunately earned themselves the tagline "The drunken
                  Indian'.
                </span>
                <span>
                  However, now in the twentieth century, these people have found
                  a voice in post-colonial literature. In the literature before
                  this period, especially in the thriller genre of novels such
                  as Robert Ludlum's The Cry of The Halidon, we find natives
                  treated like some exotic race. They were different' and so
                  resented. But now with cross-cultural studies gaining
                  momentum, people are trying to build bridges of cultural
                  relationships by displaying an understanding of and respect
                  for different cultures.
                </span>
                <span>
                  The advantages of bringing aboriginals into the mainstream are
                  noteworthy. The world will stand to gain from the knowledge
                  that the aboriginals can share. They are experts of the
                  regions they belong to. In Lee Marcel's novel Ravensong', the
                  reader is made aware that the native Canadians have
                  traditional knowledge of herbs and their uses. Furthermore,
                  their close-knit community and respect for elders are lessons
                  the world can well try to emulate. The aboriginals too shall
                  be benefited as merging into society provides access to
                  technology. In the same novel, the author recalls a viral
                  illness that left even the medicine man clueless about any
                  solution at all. The people did not even know there was such a
                  system as an IV drip and spent entire nights holding water
                  droppers over the mouths of the ill.
                </span>
                <span>
                  If there are such advantages, why are aboriginals afraid of
                  contact with the world? In Achebe's novel 'Things Fall Apart,
                  the author explains how things literally fell apart in Africa
                  with the advent of the whites. Aboriginals have been forced
                  not only to share their land but also to convert to
                  Christianity. Their unique culture and traditions seem to be
                  looked down upon. Also, there is an increase in crime and
                  negative publicity. Therefore, is it surprising that the
                  aboriginals have at times pleaded to be left alone? A lot of
                  this also has to do with attitudes that people have retained
                  towards aboriginals. Even teachers have held mindsets about
                  such students as less disciplined and even less intelligent
                  than their peers. Such discrimination would obviously not sit
                  well with any community.
                </span>
                <span>
                  We are all fiercely protective of our culture and traditions.
                  Perhaps we are not yet ready for the wide-scale impact of
                  globalisation that takes us not only across boundaries but
                  also across cultures. It may not be possible to leave
                  aboriginals isolated, but we can definitely respect their
                  sense of exclusiveness. Our world is highly diverse but, in
                  the end, we are all human beings. Hence, it would be better if
                  we do nothing else but merely remember the policy of "live and
                  let live."
                </span>
              </div>
            </div>
            <div className="SecReadTestPart1_content2_main">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}>
                <div>
                  <div>
                    <h6 className="que_heading">Questions. 29-34</h6>
                  </div>{" "}
                  <div>
                    <i style={{ fontStyle: "italic" }}>
                      Choose <span style={{ fontWeight: "600" }}> YES </span>
                      if the statement agrees with the claims of the writer of
                      the passage, choose{" "}
                      <span style={{ fontWeight: "600" }}> NO </span> if the
                      statement contradicts the claims of the writer, or choose{" "}
                      <span style={{ fontWeight: "600" }}> NOT GIVEN </span> if
                      it is impossible to say what the writer thinks about this.
                    </i>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}>
                  <span style={{ display: "flex" }}>
                    <span
                      ref={textInputRef29}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      29. &nbsp;
                    </span>
                    <span>
                      Native Canadians were deported from their land by the
                      whites.&nbsp;
                      <span>
                        <select name="" id="">
                          <option
                            onChange={(e) => {
                              SetAns29(e.target.value);
                            }}
                            selected
                            disabled
                            value="">
                            Select
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="Not Given">Not Given</option>
                        </select>
                      </span>{" "}
                    </span>
                  </span>{" "}
                  <span style={{ display: "flex" }}>
                    <span
                      ref={textInputRef30}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      30. &nbsp;
                    </span>
                    <span>
                      People now are more positive towards the term
                      aboriginal.&nbsp;
                      <span>
                        <select name="" id="">
                          <option
                            onChange={(e) => {
                              SetAns30(e.target.value);
                            }}
                            selected
                            disabled
                            value="">
                            Select
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="Not Given">Not Given</option>
                        </select>
                      </span>{" "}
                    </span>
                  </span>{" "}
                  <span style={{ display: "flex" }}>
                    <span
                      ref={textInputRef31}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      31. &nbsp;
                    </span>
                    <span>
                      Native people of Africa were ready for conversions.{" "}
                      <span>
                        <select name="" id="">
                          <option
                            onChange={(e) => {
                              SetAns31(e.target.value);
                            }}
                            selected
                            disabled
                            value="">
                            Select
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                          <option value="Not Given">Not Given</option>
                        </select>
                      </span>{" "}
                    </span>
                  </span>{" "}
                  <span style={{ display: "flex" }}>
                    <span
                      ref={textInputRef32}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      32. &nbsp;
                    </span>
                    <span style={{ display: "flex" }}>
                      <span>
                        Mistrust due to past negative encounters has led
                        aboriginals to prefer seclusion from society.{"  "}
                        <span>
                          <select name="" id="">
                            <option
                              onChange={(e) => {
                                SetAns32(e.target.value);
                              }}
                              selected
                              disabled
                              value="">
                              Select
                            </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Not Given">Not Given</option>
                          </select>
                        </span>{" "}
                      </span>
                    </span>
                  </span>{" "}
                  <span style={{ display: "flex" }}>
                    <span
                      ref={textInputRef33}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      33. &nbsp;
                    </span>
                    <span style={{ display: "flex" }}>
                      <span>
                        Aboriginals were supposed to be underachievers.{"  "}
                        <span>
                          <select name="" id="">
                            <option
                              onChange={(e) => {
                                SetAns33(e.target.value);
                              }}
                              selected
                              disabled
                              value="">
                              Select
                            </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Not Given">Not Given</option>
                          </select>
                        </span>{" "}
                      </span>
                    </span>
                  </span>{" "}
                  <span style={{ display: "flex" }}>
                    <span
                      ref={textInputRef34}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      34. &nbsp;
                    </span>
                    <span style={{ display: "flex" }}>
                      <span>
                        Globalisation is not merely about surpassing national
                        boundaries.{" "}
                        <span>
                          <select name="" id="">
                            <option
                              onChange={(e) => {
                                SetAns34(e.target.value);
                              }}
                              selected
                              disabled
                              value="">
                              Select
                            </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Not Given">Not Given</option>
                          </select>
                        </span>{" "}
                      </span>
                    </span>
                  </span>{" "}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}>
                <div>
                  <div>
                    <h6 className="que_heading">Questions. 35-36</h6>
                  </div>{" "}
                  <div>
                    <i style={{ fontStyle: "italic" }}>
                      Choose the correct answer.{" "}
                    </i>
                  </div>
                </div>
                <div
                  className="test_accordian_main"
                  style={{ marginTop: "0px" }}>
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
                          <p style={{ marginBottom: "0px" }}>{item.question}</p>
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
                                        ? SetAns35(e.target.value)
                                        : index === 1
                                        ? SetAns36(e.target.value)
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}>
                <div>
                  <div>
                    <h6 className="que_heading">Questions. 37-40</h6>
                  </div>{" "}
                  <div>
                    <span style={{ fontStyle: "italic" }}>
                      Write <span className="que_no">FOUR</span> correct letters{" "}
                      <span className="que_no">(A - H).</span>{" "}
                      <span>
                        The list below contains some possible reasons as to why
                        aboriginals prefer to be left alone.
                      </span>
                      <span>
                        Which <span className="que_no">FOUR</span> of these
                        reasons are mentioned by the writer in the passage?
                      </span>
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span>
                    <span className="que_no">A</span> They were labelled as
                    'drunken'
                  </span>
                  <span>
                    <span className="que_no">B</span> Their lands were
                    destroved.
                  </span>
                  <span>
                    <span className="que_no">C</span> They fear being
                    interpreted as notorious.
                  </span>
                  <span>
                    <span className="que_no">D</span> They are forced to
                    convert.
                  </span>
                  <span>
                    <span className="que_no">E</span> They think their elders
                    will not be respected.
                  </span>
                  <span>
                    <span className="que_no">F</span> Their culture and
                    traditions are not respected.
                  </span>
                  <span>
                    <span className="que_no">G</span> They were forced to work
                    as slaves.
                  </span>
                  <span>
                    <span className="que_no">H</span> They have been considered
                    inferior.
                  </span>
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}>37. &nbsp;</span>
                  <input
                    ref={textInputRef37}
                    type="text"
                    value={ans37}
                    className="secTestPart1_input_inner"
                    onChange={(e) => {
                      SetAns37(e.target.value);
                    }}
                  />{" "}
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}>38. &nbsp;</span>
                  <input
                    value={ans38}
                    ref={textInputRef38}
                    type="text"
                    className="secTestPart1_input_inner"
                    onChange={(e) => {
                      SetAns38(e.target.value);
                    }}
                  />{" "}
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}>39. &nbsp;</span>
                  <input
                    value={ans39}
                    ref={textInputRef39}
                    type="text"
                    className="secTestPart1_input_inner"
                    onChange={(e) => {
                      SetAns39(e.target.value);
                    }}
                  />{" "}
                </div>
                <div>
                  <span style={{ fontWeight: "600" }}>40. &nbsp;</span>
                  <input
                    ref={textInputRef40}
                    type="text"
                    value={ans40}
                    className="secTestPart1_input_inner"
                    onChange={(e) => {
                      SetAns40(e.target.value);
                    }}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <SecReadTestPart3
          textInputRef29={textInputRef29}
          textInputRef30={textInputRef30}
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
          SetAns29={SetAns29}
          SetAns30={SetAns30}
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
          ans29={ans29}
          ans30={ans30}
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
                    getTab === 1 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 1 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                onClick={() => {
                  setTab(1);
                }}>
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
                }}>
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
                }}>
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
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
        style={customStyles2}>
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
                navigate("/");
              }}>
              OK
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ReadingPart3;
