import React, { useEffect, useRef, useState } from "react";
import SecReadTestPart1 from "../../container/secReadTestPart1/SecReadTestPart1";
import SecReadTestPart2 from "../../container/secReadTestPart2/SecReadTestPart2";
import SecReadTestPart3 from "../../container/secReadTestPart3/SecReadTestPart3";
import { IoSend } from "react-icons/io5";
import {
  ACCEPT_HEADER,
  add_reading,
  add_reading_section2,
  reading_section2_count,
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

const ReadingPart2 = () => {
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
      // marks_sec2();
    } else {
      // console.log("Action canceled");
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

  const AddReadinging = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", Courseid);
    formdata.append("answer_1", ans16);
    formdata.append("answer_2", ans17);
    formdata.append("answer_3", ans18);
    formdata.append("answer_4", ans19);
    formdata.append("answer_5", ans20);
    formdata.append("answer_6", ans21);
    formdata.append("answer_7", ans22);
    formdata.append("answer_8", ans23);
    formdata.append("answer_9", ans24);
    formdata.append("answer_10", ans25);
    formdata.append("answer_11", ans26);
    formdata.append("answer_12", ans27);
    formdata.append("answer_13", ans28);
    formdata.append("reading_section_id", 1);

    axios
      .post(add_reading_section2, formdata, {
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
  const marks_sec2 = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(reading_section2_count, {
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
  const textInputRef16 = useRef(null);
  const textInputRef17 = useRef(null);
  const textInputRef18 = useRef(null);
  const textInputRef19 = useRef(null);
  const textInputRef20 = useRef(null);
  const textInputRef21 = useRef(null);
  const textInputRef22 = useRef(null);
  const textInputRef23 = useRef(null);
  const textInputRef24 = useRef(null);
  const textInputRef25 = useRef(null);
  const textInputRef26 = useRef(null);
  const textInputRef27 = useRef(null);
  const textInputRef28 = useRef(null);
  const DATA = [
    {
      id: 1,
      qesid: "16.",
      refn: textInputRef16,
      qes: "a reference to ailments causing a rise in the mortality rate",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
    {
      id: 2,
      qesid: "17.",
      refn: textInputRef17,
      qes: "an insight into factors affecting general public health",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
    {
      id: 3,
      qesid: "18.",
      refn: textInputRef18,
      qes: "an explanation of how diseases spread from one country to another",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
    {
      id: 4,
      qesid: "19.",
      refn: textInputRef19,
      qes: "the need to develop unorthodox medications to prevent diseases",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
    {
      id: 5,
      qesid: "20.",
      refn: textInputRef20,
      qes: "the need to consider healthcare as a global issue",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
    {
      id: 6,
      qesid: "21.",
      refn: textInputRef21,
      qes: "the importance of precautionary steps toward improved health",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
  ];
  const handleBoxClick = (rowIndex, boxIndex) => {
    const newSelectedBoxes = [...selectedBoxes];
    newSelectedBoxes[rowIndex] = boxIndex;
    setSelectedBoxes(newSelectedBoxes);
  };

  const [mcq, setmcq] = useState([
    {
      id: 1,
      refn: textInputRef28,
      question: "28. The author's purpose in writing this article is to",
      options: [
        {
          opt: "eradicate non-communicable diseases in order to maintain general health care.",
        },
        {
          opt: "criticize current health care facilities provided by the government.",
        },
        {
          opt: "inform about factors relevant to health care.",
        },
        {
          opt: "spread the message of health as a basic human right.",
        },
      ],
    },
  ]);
  const [expanded, setExpanded] = useState();

  const [selectedBoxes, setSelectedBoxes] = useState([]);

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
              <h4>Section 2</h4>
            </div>
            <div>
              <p>Read and answer the questions Q.16-28</p>
            </div>
          </div>
          <div className="SecReadTestPart1_content_top">
            <div className="SecReadTestPart1_content1_main">
              <div>
                <div>
                  <h6 className="que_no">Reading Passage 2</h6>
                </div>
                <div>
                  <p>
                    You should spend about 20 minutes on{" "}
                    <span style={{ fontWeight: "600" }}>Questions 16-28,</span>{" "}
                    which are based on Reading Passage 2 below.
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
                  HEALTHCARE
                </div>
                <span>
                  <span style={{ fontWeight: "600" }}>A</span> National
                  boundaries are slowly eroding with advances in technology and
                  the ease with which we travel. But while we can laud the
                  progress we have made, technology has its downfalls,
                  especially where healthcare is concerned. Infectious and
                  life-threatening maladies that are common in developing
                  countries where a major part of the population lives below the
                  poverty line can now turn into a global nightmare. While
                  developing nations struggle to provide healthcare to the
                  teeming populations, rich nations have their own problems
                  concerning basic medical care. Globally, 6% of the people do
                  not have access to basic healthcare services.
                </span>
                <span>
                  <span style={{ fontWeight: "600" }}>B</span> Associate Dean
                  for Global Health Programs at the University of Pennsylvania
                  School of Medicine, Neal Nathanson believes that there are
                  three main issues to be considered when we talk about the
                  challenges of global healthcare. The first is basic problems
                  such as pollution, strained resources and overpopulation. Lack
                  of basic necessities such as food, water and fresh air creates
                  health issues, he says. The second issue, he opines, is
                  economies. Poverty, according to the World Bank, is a ruling
                  factor in global health. With over 1.4 billion people living
                  below the poverty line, healthcare is not at its optimal with
                  miniscule health budgets. Social development is the third
                  issue to be considered, says Neal. Concerns that are
                  non-economic in nature, such as women's rights and literacy
                  can become the foundation for health care systems even if
                  funds are limited. With social development, a lot can be
                  achieved. Factors that help people lead a healthy life include
                  safe drinking water, sanitation, healthy food, adequate
                  nutrition, decent housing, environmentally sound working
                  conditions and information on health-related subjects.
                </span>
                <span>
                  <span style={{ fontWeight: "600" }}>C</span> For a patient,
                  the first point of contact with a health professional is a
                  primary health-care centre. Family doctors, practitioners,
                  pharmacists, dentists and midwives fall under this category.
                  Primary care addresses preventive measures, and early
                  diagnosis is possible at this stage, thus bypassing the need
                  for expensive hospitals that may not be within the patient's
                  reach. In primary care, the relationship develops into a
                  personal connection with the patient. Not only that, it has an
                  outreach to the community at large for the promotion of good
                  health and preventive strategies. It is also very
                  cost-effective. With better utilization of existing preventive
                  measures, the global burden of disease can be reduced by
                  around 70%, says the World Health Organization.
                </span>
                <span>
                  <span style={{ fontWeight: "600" }}>D</span> Development and
                  progress have led to unhealthy lifestyles. Add to that an
                  ageing population and rapid urbanization that is by and large
                  unplanned, and you find ailments such as diabetes, cancer,
                  asthma and heart disease is rising at an alarming rate. With
                  primary health care, these issues can be addressed at the root
                  level.
                </span>
                <span>
                  <span style={{ fontWeight: "600" }}>E</span> It is no longer
                  feasible to relate healthcare with a particular country in
                  isolation. With globalization and shrinking boundaries,
                  international travel and commerce have increased which aid in
                  the spread of deadly viruses and infectious diseases across
                  the borders. Developed nations ought to address this alarming
                  rise in diseases by promoting health in developing countries
                  and preventing the international spread of disease. Serious
                  public health threats have to be recognized and addressed in a
                  timely fashion.
                </span>
                <span>
                  <span style={{ fontWeight: "600" }}>F</span> Death rates from
                  noncommunicable medical conditions are growing. At the same
                  time, as compared to the past, the death rate due to
                  infectious diseases like tuberculosis. malaria and other
                  infectious diseases is decreasing. Developing countries have a
                  dual role to play. While they should continue preventive
                  measures against infectious diseases, they must also address
                  issues of noncommunicable diseases and environmental damage
                  that pose health risks. With improving socio-economic
                  conditions in developing countries. the need to take a closer
                  look at substance abuse and mental health is also of utmost
                  importance
                </span>
                <span>
                  <span style={{ fontWeight: "600" }}>G</span> Healthcare is a
                  human right. For a better and healthier future, governments
                  and businesses must devise measures to promote innovative
                  breakthrough remedies not only to cure diseases but also to
                  improve infrastructure for better healthcare delivery.
                </span>
              </div>
            </div>
            <div className="SecReadTestPart1_content2_main">
              <div>
                <div>
                  <div>
                    <h6 className="que_heading">Questions. 16-21</h6>
                  </div>{" "}
                  <div>
                    <i style={{ fontStyle: "italic" }}>
                      Reading Passage 2 has seven paragraphs{" "}
                      <span style={{ fontWeight: "600" }}> (A - G). </span>Which
                      paragraph contains the following information? You may use
                      any letter more than once.
                    </i>
                  </div>
                </div>
                <div className="secread_overflow">
                  <div style={{ width: "600px" }}>
                    <div
                      style={{
                        display: "flex",
                        border: "2px solid",
                        justifyContent: "space-between",
                      }}>
                      <div style={{ minWidth: "198px" }}></div>
                      <div className="secReadingBox_Choose_inner remove_border_right remove_underline  remove_topline">
                        A
                      </div>
                      <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                        B
                      </div>
                      <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                        C
                      </div>
                      <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                        D
                      </div>
                      <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                        E
                      </div>
                      <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                        F
                      </div>
                      <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                        G
                      </div>
                    </div>
                    {DATA && DATA.length > 0
                      ? DATA.map((item, rowIndex) => {
                          return (
                            <div
                              ref={item.refn}
                              tabIndex={-1}
                              key={rowIndex}
                              style={{
                                display: "flex",
                                border: "2px solid",
                                borderTop: "none",
                                justifyContent: "space-between",
                              }}>
                              <label
                                style={{ minWidth: "198px" }}
                                className="remove_underline  remove_topline">
                                <span
                                  className="que_no"
                                  style={{ minWidth: "198px" }}>
                                  {item.qesid}
                                </span>{" "}
                                {item.qes}
                              </label>
                              {item.ans.map((itm, boxIndex) => {
                                return (
                                  <div
                                    key={boxIndex}
                                    onClick={() => {
                                      handleBoxClick(rowIndex, boxIndex);
                                      // eslint-disable-next-line no-unused-expressions
                                      rowIndex === 0
                                        ? SetAns16(itm.id)
                                        : rowIndex === 1
                                        ? SetAns17(itm.id)
                                        : rowIndex === 2
                                        ? SetAns18(itm.id)
                                        : rowIndex === 3
                                        ? SetAns19(itm.id)
                                        : rowIndex === 4
                                        ? SetAns20(itm.id)
                                        : rowIndex === 5
                                        ? SetAns21(itm.id)
                                        : null;
                                    }}
                                    style={{
                                      border: "2px solid",
                                      width: "100%",
                                      backgroundColor:
                                        selectedBoxes[rowIndex] === boxIndex
                                          ? "lightblue"
                                          : "white",
                                    }}
                                    className="remove_border_right remove_underline  remove_topline"></div>
                                );
                              })}
                            </div>
                          );
                        })
                      : null}
                  </div>
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
                    <h6 className="que_heading">Questions. 22-27</h6>
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
                      ref={textInputRef22}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      22. &nbsp;
                    </span>
                    <span style={{ display: "flex" }}>
                      <span>
                        Health care issues are not restricted to economically
                        weak nations.&nbsp;
                        <span>
                          <select name="" id="">
                            <option
                              onChange={(e) => {
                                SetAns22(e.target.value);
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
                      ref={textInputRef23}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      23. &nbsp;
                    </span>
                    <span style={{ display: "flex" }}>
                      <span>
                        {" "}
                        Few people have access to basic healthcare facilities
                        worldwide.&nbsp;
                        <form>
                          <select name="" id="">
                            <option
                              onChange={(e) => {
                                SetAns23(e.target.value);
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
                        </form>{" "}
                      </span>
                    </span>
                  </span>{" "}
                  <span style={{ display: "flex" }}>
                    <span
                      ref={textInputRef24}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      24. &nbsp;
                    </span>
                    <span style={{ display: "flex" }}>
                      <span>
                        {" "}
                        Poverty is the second important factor that affects
                        healthcare.&nbsp;
                        <form>
                          <select name="" id="">
                            <option
                              onChange={(e) => {
                                SetAns24(e.target.value);
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
                        </form>{" "}
                      </span>
                    </span>
                  </span>{" "}
                  <span style={{ display: "flex" }}>
                    <span
                      ref={textInputRef25}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      25. &nbsp;
                    </span>
                    <span style={{ display: "flex" }}>
                      <span>
                        {" "}
                        Expensive hospitals are needed if primary care is not
                        available.&nbsp;
                        <form>
                          <select name="" id="">
                            <option
                              onChange={(e) => {
                                SetAns25(e.target.value);
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
                        </form>{" "}
                      </span>
                    </span>
                  </span>{" "}
                  <span style={{ display: "flex" }}>
                    <span
                      ref={textInputRef26}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      26. &nbsp;
                    </span>
                    <span style={{ display: "flex" }}>
                      <span>
                        Proper primary care can help to eradicate several
                        diseases such as diabetes, cancer and asthma.&nbsp;
                        <span>
                          <select name="" id="">
                            <option
                              onChange={(e) => {
                                SetAns26(e.target.value);
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
                      ref={textInputRef27}
                      tabIndex={-1}
                      style={{ fontWeight: "600" }}>
                      27. &nbsp;
                    </span>
                    <span style={{ display: "flex" }}>
                      <span>
                        It is inappropriate to consider health care solely as a
                        national issue.&nbsp;
                        <span>
                          <select name="" id="">
                            <option
                              onChange={(e) => {
                                SetAns27(e.target.value);
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
              <div>
                <div>
                  <div>
                    <h6 className="que_heading">Questions. 28</h6>
                  </div>{" "}
                  <div>
                    <i style={{ fontStyle: "italic" }}>
                      Choose the correct answer.
                    </i>
                  </div>
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
                                      SetAns28(e.target.value);
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
            </div>
          </div>
        </div>
        {/* <SecReadTestPart2
          textInputRef16={textInputRef16}
          textInputRef17={textInputRef17}
          textInputRef18={textInputRef18}
          textInputRef19={textInputRef19}
          textInputRef20={textInputRef20}
          textInputRef21={textInputRef21}
          textInputRef22={textInputRef22}
          textInputRef23={textInputRef23}
          textInputRef24={textInputRef24}
          textInputRef25={textInputRef25}
          textInputRef26={textInputRef26}
          textInputRef27={textInputRef27}
          textInputRef28={textInputRef28}
          SetAns16={SetAns16}
          SetAns17={SetAns17}
          SetAns18={SetAns18}
          SetAns19={SetAns19}
          SetAns20={SetAns20}
          SetAns21={SetAns21}
          SetAns22={SetAns22}
          SetAns23={SetAns23}
          SetAns24={SetAns24}
          SetAns25={SetAns25}
          SetAns26={SetAns26}
          SetAns27={SetAns27}
          SetAns28={SetAns28}
          ans16={ans16}
          ans17={ans17}
          ans18={ans18}
          ans19={ans19}
          ans20={ans20}
          ans21={ans21}
          ans22={ans22}
          ans23={ans23}
          ans24={ans24}
          ans25={ans25}
          ans26={ans26}
          ans27={ans27}
          ans28={ans28}
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
                navigate("/SectionalTest");
              }}>
              OK
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ReadingPart2;
