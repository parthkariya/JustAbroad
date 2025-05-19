import React, { useEffect, useRef, useState } from "react";
import "./SecReadingTest1.css";
import SecReadTestPart2 from "../../container/secReadTestPart2/SecReadTestPart2";
import SecReadTestPart3 from "../../container/secReadTestPart3/SecReadTestPart3";
import { IoSend } from "react-icons/io5";
import { ACCEPT_HEADER, add_reading, view_reading } from "../../utils/Constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";
import Notification from "../../utils/Notification";
import { FaQuestionCircle, FaUser } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import ReactModal from "react-modal";
import { MdOutlineSettings } from "react-icons/md";

const SecReadingTest1 = () => {
  const [getTab, setTab] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
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
    } else {
      // console.log("Action canceled");
    }
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
    // if (ans1 === "") {
    //   Notification("error", "Error", "Enter Answer 1");
    // } else if (ans2 === "") {
    //   Notification("error", "Error", "Enter Answer 2");
    // } else if (ans3 === "") {
    //   Notification("error", "Error", "Enter Answer 3");
    // } else if (ans4 === "") {
    //   Notification("error", "Error", "Enter Answer 4");
    // } else if (ans5 === "") {
    //   Notification("error", "Error", "Enter Answer 5");
    // } else if (ans6 === "") {
    //   Notification("error", "Error", "Enter Answer 6");
    // } else if (ans7 === "") {
    //   Notification("error", "Error", "Enter Answer 7");
    // } else if (ans8 === "") {
    //   Notification("error", "Error", "Enter Answer 8");
    // } else if (ans9 === "") {
    //   Notification("error", "Error", "Enter Answer 9");
    // } else if (ans10 === "") {
    //   Notification("error", "Error", "Enter Answer 10");
    // } else if (ans11 === "") {
    //   Notification("error", "Error", "Enter Answer 11");
    // } else if (ans12 === "") {
    //   Notification("error", "Error", "Enter Answer 12");
    // } else if (ans13 === "") {
    //   Notification("error", "Error", "Enter Answer 13");
    // } else if (ans14 === "") {
    //   Notification("error", "Error", "Enter Answer 14");
    // } else if (ans15 === "") {
    //   Notification("error", "Error", "Enter Answer 15");
    // } else if (ans16 === "") {
    //   Notification("error", "Error", "Enter Answer 16");
    // } else if (ans17 === "") {
    //   Notification("error", "Error", "Enter Answer 17");
    // } else if (ans18 === "") {
    //   Notification("error", "Error", "Enter Answer 18");
    // } else if (ans19 === "") {
    //   Notification("error", "Error", "Enter Answer 19");
    // } else if (ans20 === "") {
    //   Notification("error", "Error", "Enter Answer 20");
    // } else if (ans21 === "") {
    //   Notification("error", "Error", "Enter Answer 21");
    // } else if (ans22 === "") {
    //   Notification("error", "Error", "Enter Answer 22");
    // } else if (ans23 === "") {
    //   Notification("error", "Error", "Enter Answer 23");
    // } else if (ans24 === "") {
    //   Notification("error", "Error", "Enter Answer 24");
    // } else if (ans25 === "") {
    //   Notification("error", "Error", "Enter Answer 25");
    // } else if (ans26 === "") {
    //   Notification("error", "Error", "Enter Answer 26");
    // } else if (ans27 === "") {
    //   Notification("error", "Error", "Enter Answer 27");
    // } else if (ans28 === "") {
    //   Notification("error", "Error", "Enter Answer 28");
    // } else if (ans29 === "") {
    //   Notification("error", "Error", "Enter Answer 29");
    // } else if (ans30 === "") {
    //   Notification("error", "Error", "Enter Answer 30");
    // } else if (ans31 === "") {
    //   Notification("error", "Error", "Enter Answer 31");
    // } else if (ans32 === "") {
    //   Notification("error", "Error", "Enter Answer 32");
    // } else if (ans33 === "") {
    //   Notification("error", "Error", "Enter Answer 33");
    // } else if (ans34 === "") {
    //   Notification("error", "Error", "Enter Answer 34");
    // } else if (ans35 === "") {
    //   Notification("error", "Error", "Enter Answer 35");
    // } else if (ans36 === "") {
    //   Notification("error", "Error", "Enter Answer 36");
    // } else if (ans37 === "") {
    //   Notification("error", "Error", "Enter Answer 37");
    // } else if (ans38 === "") {
    //   Notification("error", "Error", "Enter Answer 38");
    // } else if (ans39 === "") {
    //   Notification("error", "Error", "Enter Answer 39");
    // } else if (ans40 === "") {
    //   Notification("error", "Error", "Enter Answer 40");
    // } else {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", Courseid);
    formdata.append("answer_1", taskGroups1.complete1[0].key);
    formdata.append("answer_2", taskGroups1.complete2[0].key);
    formdata.append("answer_3", taskGroups1.complete3[0].key);
    formdata.append("answer_4", taskGroups1.complete4[0].key);
    formdata.append("answer_5", taskGroups1.complete5[0].key);
    formdata.append("answer_6", taskGroups1.complete6[0].key);
    formdata.append("answer_7", ans7);
    formdata.append("answer_8", ans8);
    formdata.append("answer_9", ans9);
    formdata.append("answer_10", ans10);
    formdata.append("answer_11", ans11);
    formdata.append("answer_12", ans12);
    formdata.append("answer_13", ans13);
    formdata.append("answer_14", ans14);
    formdata.append("answer_15", ans15);
    formdata.append("answer_16", ans16);
    formdata.append("answer_17", ans17);
    formdata.append("answer_18", ans18);
    formdata.append("answer_19", ans19);
    formdata.append("answer_20", ans20);
    formdata.append("answer_21", ans21);
    formdata.append("answer_22", ans22);
    formdata.append("answer_23", ans23);
    formdata.append("answer_24", ans24);
    formdata.append("answer_25", ans25);
    formdata.append("answer_26", ans26);
    formdata.append("answer_27", ans27);
    formdata.append("answer_28", ans28);
    formdata.append("answer_29", ans29);
    formdata.append("answer_30", ans30);
    formdata.append("answer_31", ans31);
    formdata.append("answer_32", ans32);
    formdata.append("answer_33", ans33);
    formdata.append("answer_34", ans34);
    formdata.append("answer_35", ans35);
    formdata.append("answer_36", ans36);
    formdata.append("answer_37", ans37);
    formdata.append("answer_38", ans38);
    formdata.append("answer_39", ans39);
    formdata.append("answer_40", ans40);
    formdata.append("reading_id", 1);

    axios
      .post(add_reading, formdata, {
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

  // section 2 content add

  const initialOptions = [
    "Few intelligent brains are preserved",
    "Vivacious and has lots of visitors.",
    "Accommodates the most brilliant students of the university",
    "Visitors are not allowed.",
    "Students were honoured for keeping it dirt free",
    "Matron keeps quiet while cleaning.",
  ];
  const [options, setOptions] = useState(initialOptions);
  const [draggedItem1, setDraggedItem1] = useState(null);
  const [draggedItem2, setDraggedItem2] = useState(null);
  const [draggedItem3, setDraggedItem3] = useState(null);
  const [draggedItem4, setDraggedItem4] = useState(null);
  const [draggedItem5, setDraggedItem5] = useState(null);
  const [draggedItem6, setDraggedItem6] = useState(null);

  const [compdrag1, setCompdrag1] = useState();
  const [compdrag2, setCompdrag2] = useState();
  const [compdrag3, setCompdrag3] = useState();
  const [compdrag4, setCompdrag4] = useState();
  const [compdrag5, setCompdrag5] = useState();
  const [compdrag6, setCompdrag6] = useState();

  const handleDragStart = (event, item, questionNumber) => {
    switch (questionNumber) {
      case 1:
        setDraggedItem1(item);
        break;
      case 2:
        setDraggedItem2(item);
        break;
      case 3:
        setDraggedItem3(item);
        break;
      case 4:
        setDraggedItem4(item);
        break;
      case 5:
        setDraggedItem5(item);
        break;
      case 6:
        setDraggedItem6(item);
        break;
      default:
        break;
    }
    event.dataTransfer.setData("text/plain", item);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, questionNumber) => {
    event.preventDefault();
    const droppedItem = event.dataTransfer.getData("text/plain");
    switch (questionNumber) {
      case 1:
        setDraggedItem1(droppedItem);
        SetAns1(droppedItem);
        break;
      case 2:
        setDraggedItem2(droppedItem);
        SetAns2(droppedItem);
        break;
      case 3:
        setDraggedItem3(droppedItem);
        SetAns3(droppedItem);
        break;
      case 4:
        setDraggedItem4(droppedItem);
        SetAns4(droppedItem);
        break;
      case 5:
        setDraggedItem5(droppedItem);
        SetAns5(droppedItem);
        break;
      case 6:
        setDraggedItem6(droppedItem);
        SetAns6(droppedItem);
        break;
      default:
        break;
    }

    // Remove the dropped item from the options list
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option !== droppedItem)
    );
  };

  const [tasks1, setTasks1] = useState([
    {
      name1: "Few intelligent brains are preserved",
      category1: "wip1",
    },
    {
      name1: "Vivacious and has lots of visitors.",
      category1: "wip1",
    },
    {
      name1: "Accommodates the most brilliant students of the university",
      category1: "wip1",
    },
    {
      name1: "Visitors are not allowed.",
      category1: "wip1",
    },
    {
      name1: "Students were honoured for keeping it dirt free",
      category1: "wip1",
    },
    {
      name1: "Matron keeps quiet while cleaning.",
      category1: "wip1",
    },
  ]);

  const onDragStart1 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  const onDragOver1 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver2 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver3 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver4 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver5 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver6 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver7 = (ev) => {
    ev.preventDefault();
  };

  const onDrop1 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks1 = tasks1.map((task) => ({
      ...task,
      category1:
        task.name1 === id
          ? cat
          : task.category1 === cat
          ? "wip1"
          : task.category1,
    }));

    setTasks1(updatedTasks1);
  };
  const onDrop2 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks1 = tasks1.map((task) => ({
      ...task,
      category1:
        task.name1 === id
          ? cat
          : task.category1 === cat
          ? "wip1"
          : task.category1,
    }));

    setTasks1(updatedTasks1);
  };
  const onDrop3 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks1 = tasks1.map((task) => ({
      ...task,
      category1:
        task.name1 === id
          ? cat
          : task.category1 === cat
          ? "wip1"
          : task.category1,
    }));

    setTasks1(updatedTasks1);
  };
  const onDrop4 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks1 = tasks1.map((task) => ({
      ...task,
      category1:
        task.name1 === id
          ? cat
          : task.category1 === cat
          ? "wip1"
          : task.category1,
    }));

    setTasks1(updatedTasks1);
  };
  const onDrop5 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks1 = tasks1.map((task) => ({
      ...task,
      category1:
        task.name1 === id
          ? cat
          : task.category1 === cat
          ? "wip1"
          : task.category1,
    }));

    setTasks1(updatedTasks1);
  };
  const onDrop6 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks1 = tasks1.map((task) => ({
      ...task,
      category1:
        task.name1 === id
          ? cat
          : task.category1 === cat
          ? "wip1"
          : task.category1,
    }));

    setTasks1(updatedTasks1);
  };
  const onDrop7 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks1 = tasks1.map((task) => ({
      ...task,
      category1:
        task.name1 === id
          ? cat
          : task.category1 === cat
          ? "wip1"
          : task.category1,
    }));

    setTasks1(updatedTasks1);
  };

  const renderTasks1 = () => {
    const taskGroups1 = {
      wip1: [],
      complete1: [],
      complete2: [],
      complete3: [],
      complete4: [],
      complete5: [],
      complete6: [],
    };
    tasks1.forEach((t1) => {
      taskGroups1[t1.category1].push(
        <span
          key={t1.name1}
          onDragStart={(e) => onDragStart1(e, t1.name1)}
          draggable
          className="drag-container_style">
          {t1.name1}
        </span>
      );
    });

    return taskGroups1;
  };

  const taskGroups1 = renderTasks1();
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
        {/* <SecReadTestPart1
          textInputRef={textInputRef}
          textInputRef1={textInputRef1}
          textInputRef2={textInputRef2}
          textInputRef3={textInputRef3}
          textInputRef4={textInputRef4}
          textInputRef5={textInputRef5}
          textInputRef6={textInputRef6}
          textInputRef7={textInputRef7}
          textInputRef8={textInputRef8}
          textInputRef9={textInputRef9}
          textInputRef11={textInputRef11}
          textInputRef12={textInputRef12}
          textInputRef13={textInputRef13}
          textInputRef14={textInputRef14}
          textInputRef15={textInputRef15}
          SetAns1={SetAns1}
          SetAns2={SetAns2}
          SetAns3={SetAns3}
          SetAns4={SetAns4}
          SetAns5={SetAns5}
          SetAns6={SetAns6}
          SetAns7={SetAns7}
          SetAns8={SetAns8}
          SetAns9={SetAns9}
          SetAns10={SetAns10}
          SetAns11={SetAns11}
          SetAns12={SetAns12}
          SetAns13={SetAns13}
          SetAns14={SetAns14}
          SetAns15={SetAns15}
          ans1={ans1}
          ans2={ans2}
          ans3={ans3}
          ans4={ans4}
          ans5={ans5}
          ans6={ans6}
          ans7={ans7}
          ans8={ans8}
          ans9={ans9}
          ans10={ans10}
          ans11={ans11}
          ans12={ans12}
          ans13={ans13}
          ans14={ans14}
          ans15={ans15}
        /> */}

        <div className="SecReadTestPart1_main_top">
          <div className="SecReadTestPart1_main">
            <div>
              <h4>Section 1</h4>
            </div>
            <div>
              <p>Read and answer the questions Q.1-15</p>
            </div>
          </div>
          <div className="SecReadTestPart1_content_top">
            <div className="SecReadTestPart1_content1_main">
              <div>
                <div>
                  <h6 className="que_no">Reading Passage 1</h6>
                </div>
                <div>
                  <p>
                    You should spend about 20 minutes on{" "}
                    <span style={{ fontWeight: "600" }}>Questions 1-15,</span>{" "}
                    which are based on Reading Passage 1 below.
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <h5 className="que_no">THE DANGERS OF THE INTERNET</h5>
                </div>
                <div>
                  <span>
                    There is little doubt that the internet is a very useful
                    tool. In fact, the world of the internet has broadened our
                    perspective and altered it in many ways. Practically any
                    information we want is available at the touch of a button.
                    However, the online world has also exposed naive youngsters
                    to dangers by opening its doors to virtual strangers. They
                    end up communicating with unknown people, with whom they
                    would not normally associate within the real world, putting
                    themselves in grave peril.
                  </span>
                  <br />
                  <br />
                  <span>
                    John Shehan, CyberTipline program manager for the National
                    Centre for Missing and Exploited Children in Alexandria,
                    Virginia, says, 'About 1 in 7 kids have been sexually
                    solicited online.' By reporting cases of kids who are lured
                    into performing sexual acts online, the CyberTipline program
                    helps prevent sexual exploitation of little children. As
                    sexual predators mainly target children in chat rooms, they
                    tend to surf any online portal that young children
                    frequently visit, says Shehan. Predators often browse
                    networking sites such as MySpace and Xanga in search of
                    targets as these are popular among the young and contain
                    centralized information such as the child's photos and
                    hobbies. "In terms of predators, that is obviously a hot
                    spot where they can go to research victims,' Shehan says.
                    "They need to meet these kids, groom these children and
                    become friends.'
                  </span>
                  <br />
                  <br />
                  <span>
                    The web, like any metropolis, has locales. While some are by
                    and large safe, others are seedy and horrific. But cities
                    are governed by laws; there is no governing body as far as
                    the web is concerned. Thousands of objectionable sites are
                    hosted by the net, showcasing explicit and often violent
                    content. A study has revealed that as many as 60% of
                    American teens have received communication via web from a
                    total stranger. Around 63% of these teens have responded to
                    such mails but have not let their parents know. That in
                    several instances of gruesome crimes, victims are enticed
                    through conversations on social networking sites is a
                    worrying factor.
                  </span>
                  <br />
                  <br />
                  <span>
                    In her research, America's renowned child psychotherapist,
                    Julie Lynn Evans has tried to enter the murky world of the
                    internet in an effort to understand what teenagers are
                    continually exposed to. While many chat rooms are easily
                    accessible, there are some which are underground. Evans was
                    appalled with what she found. "The misery in those chat
                    rooms is overwhelming and heart-rending,' she says.
                    "Teenagers haven't got anybody with a good, strong sense of
                    self-worth to protect them when they are there. Chat rooms
                    become their reality. The anorexic ones are, in some ways,
                    the most dangerous. Some of the images and conversations are
                    terrifying.' She adds, "In these rooms, death is a triumph
                    and they've got nobody to pull them back'
                  </span>
                  <br />
                  <br />
                  <span>
                    While it can be argued that the internet is not directly
                    responsible for eating disorders in children, it definitely
                    makes conditions difficult to deal, according to Evans. 'In
                    a counseling session I might get an agreement to compromise
                    on certain types of dangerous behavior, but then they revert
                    to previous activities in the chat rooms. The contributors
                    say she doesn't know what she is talking about, and I lose
                    my power in a second, just as parents do.'
                  </span>
                  <br />
                  <br />
                  <span>
                    Self-harm is another very serious concern with the internet
                    fuelling an epidemic. Shocking the older generation has been
                    a thing with teenagers since ages. But now with YouTube,
                    they are able to showcase in technicolour their gashes and
                    dripping blood as they cut themselves. The National Health
                    Service figures published last year show that admissions due
                    to self-harm in the past three years have seen an increase
                    by approximately 10,000.
                  </span>
                  <br />
                  <br />
                  <span>
                    While restriction of access is something that Evans
                    supports, she feels the eventual responsibility lies with
                    the parents. 'It has to be an integral part of our
                    parenting, such as, how children do their homework or how
                    they brush their teeth. It is not up to the government or
                    the people making the software; it is up to us to be
                    responsible.'
                  </span>
                  <br />
                  <br />
                  <span>
                    While restriction of access is something that Evans
                    supports, she feels the eventual responsibility lies with
                    the parents. 'It has to be an integral part of our
                    parenting, such as, how children do their homework or how
                    they brush their teeth. It is not up to the government or
                    the people making the software; it is up to us to be
                    responsible.'
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="abcd"> */}
            <div className="SecReadTestPart1_content2_main">
              <div>
                <div>
                  <h6 className="que_heading">Questions 1 - 6</h6>
                </div>
                <div>
                  <i className="que_heading" style={{ fontStyle: "italic" }}>
                    Complete each sentence with the correct ending. Choose the
                    correct ending and move it into the gap.
                  </i>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}>
                  <div
                    ref={textInputRef}
                    tabIndex={-1}
                    className="drag-container"
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 1)}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="que_no">
                        1. &nbsp;Mere registration of physical abuse online
                        leads
                      </span>
                      <span
                        className="drop_box_design2"
                        onDragOver={(e) => onDragOver1(e)}
                        onDrop={(e) => onDrop1(e, "complete1")}>
                        {taskGroups1.complete1}
                      </span>
                    </div>
                    {/* <div className="drop-box">
                  {draggedItem1 && <p>Dragged Item: {draggedItem1}</p>}
                </div> */}
                  </div>

                  <div
                    ref={textInputRef1}
                    tabIndex={-1}
                    className="drag-container"
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 2)}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="que_no">
                        2. &nbsp;Perpetrators of cybercrimes visit sites as they
                        plan{" "}
                      </span>{" "}
                      <span
                        className="drop_box_design2"
                        onDragOver={(e) => onDragOver2(e)}
                        onDrop={(e) => onDrop2(e, "complete2")}>
                        {taskGroups1.complete2}
                      </span>
                    </div>

                    {/* <div className="drop-box">
                  {draggedItem2 && <p>Dragged Item: {draggedItem2}</p>}
                </div> */}
                  </div>

                  <div
                    ref={textInputRef2}
                    tabIndex={-1}
                    className="drag-container"
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 3)}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="que_no">
                        3. &nbsp;The internet space is comparable
                      </span>
                      <span
                        className="drop_box_design2"
                        onDragOver={(e) => onDragOver3(e)}
                        onDrop={(e) => onDrop3(e, "complete3")}>
                        {taskGroups1.complete3}
                      </span>
                    </div>

                    {/* <div className="drop-box">
                  {draggedItem3 && <span>Dragged Item: {draggedItem3}</span>}
                </div> */}
                  </div>
                  <div
                    ref={textInputRef3}
                    tabIndex={-1}
                    className="drag-container"
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 4)}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="que_no">
                        4. &nbsp;More than half of the teenagers in a study
                        opted
                      </span>
                      <span
                        className="drop_box_design2"
                        onDragOver={(e) => onDragOver4(e)}
                        onDrop={(e) => onDrop4(e, "complete4")}>
                        {taskGroups1.complete4}
                      </span>
                    </div>

                    {/* <div className="drop-box">
                  {draggedItem4 && <span>Dragged Item: {draggedItem4}</span>}
                </div> */}
                  </div>
                  <div
                    ref={textInputRef4}
                    tabIndex={-1}
                    className="drag-container"
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 5)}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="que_no">
                        5. &nbsp;All live discussion sites may not be easy
                      </span>
                      <span
                        className="drop_box_design2"
                        onDragOver={(e) => onDragOver5(e)}
                        onDrop={(e) => onDrop5(e, "complete5")}>
                        {taskGroups1.complete5}
                      </span>
                    </div>

                    {/* <div className="drop-box">
                  {draggedItem5 && <span>Dragged Item: {draggedItem5}</span>}
                </div> */}
                  </div>
                  <div
                    ref={textInputRef5}
                    tabIndex={-1}
                    className="drag-container"
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 6)}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span className="que_no">
                        6. &nbsp;Members of dark chat rooms are likely{" "}
                      </span>{" "}
                      <span
                        className="drop_box_design2"
                        onDragOver={(e) => onDragOver6(e)}
                        onDrop={(e) => onDrop6(e, "complete6")}>
                        {taskGroups1.complete6}
                      </span>
                    </div>

                    {/* <div className="drop-box">
                  {draggedItem6 && <span>Dragged Item: {draggedItem6}</span>}
                </div> */}
                  </div>

                  {/* <div className="options">
                {options.map((option, index) => (
                  <div
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, option, 0)} // 0 indicates it's not associated with any question
                    className="drag-item"
                  >
                    {option}
                  </div>
                ))}
              </div> */}
                  <span
                    className="wip drag-container wip_styles"
                    style={{ margin: "5px" }}
                    onDragOver={(e) => onDragOver7(e)}
                    onDrop={(e) => {
                      onDrop7(e, "wip1");
                    }}>
                    {/* <span className="task-header">WIP</span> */}
                    {taskGroups1.wip1}
                  </span>
                </div>
                {/* <button
              className="btn"
              style={{ width: "150px", marginTop: "1rem" }}
              onClick={() => {
                AddSpeaking();
              }}
            >
              Submit
            </button> */}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}>
                <div>
                  <div>
                    <h6 className="que_heading">Questions 7 - 11</h6>
                  </div>
                  <div>
                    <i style={{ fontStyle: "italic" }}>
                      Complete the sentences. Write{" "}
                      <span style={{ fontWeight: "600" }}>
                        NO MORE THAN TWO WORDS
                      </span>{" "}
                      from the passage in each gap.{" "}
                    </i>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}>
                  <div>
                    <span>
                      <span style={{ fontWeight: "600" }}>7. &nbsp;</span>
                      <span>Certain online portals contain</span>{" "}
                      <input
                        ref={textInputRef6}
                        type="text"
                        value={ans7}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns7(e.target.value);
                        }}
                      />{" "}
                      &nbsp;such as images and preferred free-time activities.
                    </span>
                  </div>
                  <div>
                    <span>
                      <span style={{ fontWeight: "600" }}>8. &nbsp;</span>
                      <span>
                        The people approached are acquainted with in order to
                        The people approached are acquainted with in order to
                      </span>{" "}
                      <input
                        value={ans8}
                        ref={textInputRef7}
                        type="text"
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns8(e.target.value);
                        }}
                      />{" "}
                      &nbsp;and develop friendly relations.
                    </span>
                  </div>
                  <div>
                    <span>
                      <span style={{ fontWeight: "600" }}>9. &nbsp;</span>
                      <span>
                        Unlike big urban areas, there is no regulatory authority{" "}
                      </span>{" "}
                      <input
                        value={ans9}
                        ref={textInputRef8}
                        type="text"
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns9(e.target.value);
                        }}
                      />{" "}
                      &nbsp;social networking sites or the internet.
                    </span>
                  </div>
                  <div>
                    <span>
                      <span style={{ fontWeight: "600" }}>10. &nbsp;</span>
                      <span>
                        A lot of online content is aggressive, and on some adult
                        sites, the display is{" "}
                      </span>{" "}
                      <input
                        value={ans10}
                        ref={textInputRef9}
                        type="text"
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns10(e.target.value);
                        }}
                      />{" "}
                      .
                    </span>
                  </div>
                  <div>
                    <span>
                      <span style={{ fontWeight: "600" }}>11. &nbsp;</span>
                      <span>Teenagers fall prey to </span>{" "}
                      <input
                        value={ans11}
                        ref={textInputRef11}
                        onChange={(e) => {
                          SetAns11(e.target.value);
                        }}
                        type="text"
                        className="secTestPart1_input_inner"
                      />{" "}
                      &nbsp;acts as they communicate on social sites.
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}>
                <div>
                  <div>
                    <h6 className="que_heading">Questions 12 - 13</h6>
                  </div>
                  <div>
                    <i style={{ fontStyle: "italic" }}>
                      Answer the questions. Write{" "}
                      <span style={{ fontWeight: "600" }}>
                        NO MORE THAN TWO WORDS
                      </span>{" "}
                      from the passage in each gap.
                    </i>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}>
                  <div>
                    <span>
                      <span style={{ fontWeight: "600" }}>12. &nbsp;</span>
                      <span>
                        What condition in children is an indirect outcome of the
                        internet?
                      </span>{" "}
                      <input
                        value={ans12}
                        ref={textInputRef12}
                        type="text"
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns12(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div>
                    <span>
                      <span style={{ fontWeight: "600" }}>13. &nbsp;</span>
                      <span>
                        What is the tendency to injure one's person called?
                      </span>{" "}
                      <input
                        value={ans13}
                        ref={textInputRef13}
                        type="text"
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns13(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}>
                <div>
                  <div>
                    <h6 className="que_heading">Questions 14 - 15</h6>
                  </div>
                  <div>
                    <i style={{ fontStyle: "italic" }}>
                      Complete the notes. Write{" "}
                      <span style={{ fontWeight: "600" }}>
                        NO MORE THAN TWO WORDS
                      </span>{" "}
                      from the passage in each gap.
                    </i>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}>
                  <div>
                    <span>
                      <span>
                        Children of the following two types can benefit from the
                        internet:
                      </span>
                      <br />
                      <span style={{ fontWeight: "600" }}>
                        • 14{" "}
                        <input
                          value={ans14}
                          ref={textInputRef14}
                          type="text"
                          className="secTestPart1_input_inner"
                          onChange={(e) => {
                            SetAns14(e.target.value);
                          }}
                        />{" "}
                        children
                        <br />
                      </span>
                      <span>
                        <span style={{ fontWeight: "600" }}> • </span>
                        <span style={{ fontWeight: "500" }}>Children</span>
                        uncomfortable in social interactions or with{" "}
                        <span style={{ fontWeight: "600" }}> 15 </span>
                        <input
                          value={ans15}
                          ref={textInputRef15}
                          type="text"
                          className="secTestPart1_input_inner"
                          onChange={(e) => {
                            SetAns15(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SecReadTestPart2
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
        />
        <SecReadTestPart3
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
                <h5>Part 1</h5>
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
                  onClick={focusInput1}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  {" "}
                  2
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput2}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  {" "}
                  3
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput3}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  {" "}
                  4
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput4}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  {" "}
                  5
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput5}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  {" "}
                  6
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput6}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  {" "}
                  7
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput7}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  {" "}
                  8
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput8}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  {" "}
                  9
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput9}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  {" "}
                  10
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput11}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  {" "}
                  11
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput12}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  12
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput13}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  13
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput14}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  {" "}
                  14
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput15}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  15
                </div>
              </div>
            </div>
            <div className="btn_part_block_main">
              <div className="que_no">
                <h5>Part 2</h5>
              </div>
              <div className="btn_que_no_main">
                <div
                  className="btn_que_no"
                  onClick={focusInput16}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  16
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput17}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  17
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput18}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  18
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput19}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  19
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput20}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  20
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput21}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  21
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput22}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  22
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput23}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  23
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput24}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  24
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput25}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  25
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput26}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  26
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput27}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  27
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput28}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  28
                </div>
              </div>
            </div>
            <div className="btn_part_block_main">
              <div className="que_no">
                <h5>Part 3</h5>
              </div>
              <div className="btn_que_no_main">
                <div
                  className="btn_que_no"
                  onClick={focusInput29}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  29
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput30}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  30
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput31}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  31
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput32}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  32
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput33}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  33
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput34}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  34
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput35}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  35
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput36}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  36
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput37}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  37
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput38}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  38
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput39}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  39
                </div>
                <div
                  className="btn_que_no"
                  onClick={focusInput40}
                  style={{ backgroundColor: `var(${bgcolor})` }}>
                  40
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
    </>
  );
};

export default SecReadingTest1;
