/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useRef, useState } from "react";
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
  add_listening_section2,
  listening_section2_count,
  view_listening,
} from "../../utils/Constant";
import Notification from "../../utils/Notification";
import { useAuthContext } from "../../context/auth_context";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";

const ListenPart2 = () => {
  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;

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
    if (result &&  taskGroups1.complete1.length !== 0 || taskGroups1.complete2.length !==0 || taskGroups1.complete3.length !==0) {
      console.log("Action confirmed");
      AddListening();
      // marks_sec2();
    } else {
      console.log("Action canceled");
      Notification("error", "Error!", "Please fill the answer");
    }
  };
  const [loading, setloading] = useState(false);
  const [getMarksModal, setMarksModal] = useState(false);
  const [getList, setList] = useState();

  const marks_sec2 = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(listening_section2_count, {
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
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
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
    formdata.append("answer_1", ans11);
    formdata.append("answer_2", ans12);
    formdata.append("answer_3", ans13);
    if( taskGroups1.complete1[0].key.length <= 0){
      formdata.append("answer_4", "");
    }else{
      formdata.append("answer_4", taskGroups1.complete1[0].key);
    }

    if(taskGroups1.complete2[0].key.length <= 0){
      formdata.append("answer_5", "");
    }else{
      formdata.append("answer_5", taskGroups1.complete2[0].key);

    }
    if(taskGroups1.complete3[0].key.length <= 0){
      formdata.append("answer_6", "");
    }else{
      formdata.append("answer_6", taskGroups1.complete3[0].key);

    }
    
    
    formdata.append("answer_7", ans17);
    formdata.append("answer_8", ans18);
    formdata.append("answer_9", ans19);
    formdata.append("answer_10", ans20);
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
    // formdata.append("answer_31", ans31);
    // formdata.append("answer_32", ans32);
    // formdata.append("answer_33", ans33);
    // formdata.append("answer_34", ans34);
    // formdata.append("answer_35", ans35);
    // formdata.append("answer_36", ans36);
    // formdata.append("answer_37", ans37);
    // formdata.append("answer_38", ans38);
    // formdata.append("answer_39", ans39);
    // formdata.append("answer_40", ans40);
    formdata.append("listening_section_id", 1);

    axios
      .post(add_listening_section2, formdata, {
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

  //
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

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, questionNumber) => {
    event.preventDefault();
    const droppedItem = event.dataTransfer.getData("text/plain");
    switch (questionNumber) {
      case 1:
        setDraggedItem1(droppedItem);
        SetAns14(droppedItem);
        break;
      case 2:
        setDraggedItem2(droppedItem);
        SetAns15(droppedItem);
        break;
      case 3:
        setDraggedItem3(droppedItem);
        SetAns16(droppedItem);
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
  const renderTasks1 = () => {
    const taskGroups1 = {
      wip1: [],
      complete1: [],
      complete2: [],
      complete3: [],
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

            <div className="SecTestPart1_main_top">
              <div className="SecTestPart1_main">
                <div>
                  <h4>Part 2</h4>
                </div>
                <div>
                  <p>Listen and answer the questions Q.11-20</p>
                </div>
              </div>
              <div className="SecTestPart1_content_main">
                <div>
                  <h6>Section 2</h6>
                </div>
                <div>
                  <h6 className="que_heading">Questions 11 - 20</h6>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}>
                  <div>
                    <h6 className="que_heading">Questions 11 - 13</h6>
                  </div>
                  <div>
                    <i style={{ fontStyle: "italic" }}>
                      Complete the form. Write{" "}
                      <b style={{ fontWeight: "600" }}>
                        NO MORE THAN TWO WORDS AND / OR A NUMBER
                      </b>{" "}
                      in each gap.
                    </i>
                  </div>
                  <div className="SecTestPart2_content_inner">
                    <div className="SecTestPart2_content_data">
                      <div className="SecTestPart2_content_data_inner remove_underline remove_border_right">
                        <h6 className="que_no">Main Building</h6>
                      </div>
                      <div className="SecTestPart2_content_data_inner remove_underline">
                        <h6 className="que_no">Other Building</h6>
                      </div>
                    </div>
                    <div className="SecTestPart2_content_data">
                      <div className="SecTestPart2_content_data_inner remove_underline remove_border_right">
                        <p>Contains student rooms,</p>
                        <b className="que_no">
                          11. &nbsp;
                          <input
                            ref={textInputRef11}
                            type="text"
                            value={ans11}
                            className="secTestPart1_input_inner"
                            onChange={(e) => {
                              SetAns11(e.target.value);
                            }}
                          />
                        </b>
                        &nbsp; , and a room for leisurely activities.
                      </div>
                      <div className="SecTestPart2_content_data_inner remove_underline">
                        Not mentioned
                      </div>
                    </div>
                    <div className="SecTestPart2_content_data">
                      <div className="SecTestPart2_content_data_inner remove_underline remove_border_right">
                        <p>Built in 1967</p>
                      </div>
                      <div className="SecTestPart2_content_data_inner remove_underline">
                        <p>
                          Built in <b className="que_no">12</b>&nbsp;&nbsp;
                          <input
                            ref={textInputRef12}
                            type="text"
                            value={ans12}
                            className="secTestPart1_input_inner"
                            onChange={(e) => {
                              SetAns12(e.target.value);
                            }}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="SecTestPart2_content_data">
                      <div className="SecTestPart2_content_data_inner remove_border_right">
                        <p>Named as Stephaney Hostel</p>
                      </div>
                      <div className="SecTestPart2_content_data_inner">
                        <p>
                          Named as <b className="que_no">13</b>&nbsp;&nbsp;
                          <input
                            ref={textInputRef13}
                            type="text"
                            value={ans13}
                            className="secTestPart1_input_inner"
                            onChange={(e) => {
                              SetAns13(e.target.value);
                            }}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                    marginTop: "1rem",
                  }}>
                  <div>
                    <h6 className="que_heading">Questions 14 - 16</h6>
                  </div>
                  <div>
                    <p className="que_heading">
                      What Characteristics does each floor have? Choose the
                      correct answer and move it into the gap.
                    </p>
                  </div>
                  <div>
                    <div
                      ref={textInputRef14}
                      tabIndex={-1}
                      className="drag-container"
                      onDragOver={(e) => handleDragOver(e)}
                      onDrop={(e) => handleDrop(e, 1)}>
                      <div>
                        <span className="que_no">14. &nbsp;Mary's floor</span>
                        &nbsp;
                        <span
                          className="drop_box_design"
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
                      ref={textInputRef15}
                      tabIndex={-1}
                      className="drag-container"
                      onDragOver={(e) => handleDragOver(e)}
                      onDrop={(e) => handleDrop(e, 2)}>
                      <div>
                        <span className="que_no">
                          15. &nbsp;Juliet's floor{" "}
                        </span>{" "}
                        &nbsp;
                        <span
                          className="drop_box_design"
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
                      ref={textInputRef16}
                      tabIndex={-1}
                      className="drag-container"
                      onDragOver={(e) => handleDragOver(e)}
                      onDrop={(e) => handleDrop(e, 3)}>
                      <div>
                        <span className="que_no">16. &nbsp;Sandra's floor</span>{" "}
                        &nbsp;
                        <span
                          className="drop_box_design"
                          onDragOver={(e) => onDragOver3(e)}
                          onDrop={(e) => onDrop3(e, "complete3")}>
                          {taskGroups1.complete3}
                        </span>{" "}
                      </div>
                      {/* <div className="drop-box">
                {draggedItem3 && <span>Dragged Item: {draggedItem3}</span>}
              </div> */}
                    </div>
                    <span
                      className="wip drag-container wip_styles"
                      style={{ margin: "5px" }}
                      onDragOver={(e) => onDragOver4(e)}
                      onDrop={(e) => {
                        onDrop4(e, "wip1");
                      }}>
                      {/* <span className="task-header">WIP</span> */}
                      {taskGroups1.wip1}
                    </span>
                  </div>
                  {/* <button
                    className="btn"
                    style={{ marginTop: "1rem", width: "150px" }}
                    onClick={() => {
                      AddListening();
                    }}
                  >
                    submit
                  </button> */}
                  {/* <div>
            <div
              className="drag-container"
              onDragOver={handleDragOver}
              onDrop={handleDrop}>
              <div style={{ display: "flex" }}>
                <p className="que_no">14.</p>&nbsp;Mary's floor
              </div>{" "}
              <div className="drop-box">
                {draggedItem && <p>Dragged Item: {draggedItem}</p>}
              </div>
            </div>
            <div
              className="drag-container"
              onDragOver={handleDragOver}
              onDrop={handleDrop}>
              <div style={{ display: "flex" }}>
                <p className="que_no">15.</p>&nbsp;Juliet's floor
              </div>{" "}
              <div className="drop-box">
                {draggedItem && <p>Dragged Item: {draggedItem}</p>}
              </div>
            </div>
            <div
              className="drag-container"
              onDragOver={handleDragOver}
              onDrop={handleDrop}>
              <span style={{ display: "flex" }}>
                <span className="que_no">16. </span>&nbsp;Sandra's floor
              </span>{" "}
              <div className="drop-box">
                {draggedItem && <p>Dragged Item: {draggedItem}</p>}
              </div>
            </div>
            <div className="options">
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, "Option 1")}
                className="drag-item">
                Option 1
              </div>
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, "Option 2")}
                className="drag-item">
                Option 2
              </div>
              <div
                draggable
                onDragStart={(e) => handleDragStart(e, "Option 3")}
                className="drag-item">
                Option 3
              </div>
            </div>
          </div> */}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                    marginTop: "1rem",
                  }}>
                  <div>
                    <h6 className="que_heading">Questions 17 - 20</h6>
                  </div>
                  <div>
                    <i style={{ fontStyle: "italic" }}>
                      Complete the form. Write{" "}
                      <b style={{ fontWeight: "600" }}>
                        NO MORE THAN TWO WORDS AND / OR A NUMBER
                      </b>{" "}
                      in each gap.
                    </i>
                  </div>
                  <div style={{ display: "flex" }}>
                    <span className="que_no">
                      17. &nbsp;Students can use the dining area for a &nbsp;{" "}
                      <input
                        ref={textInputRef17}
                        type="text"
                        value={ans17}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns17(e.target.value);
                        }}
                      />{" "}
                      &nbsp;.
                    </span>
                  </div>
                  <span style={{ display: "flex" }}>
                    <span className="que_no">18.</span> &nbsp;
                    <span>
                      Breakfast will not be available after{" "}
                      <input
                        ref={textInputRef18}
                        type="text"
                        value={ans18}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns18(e.target.value);
                        }}
                      />{" "}
                      &nbsp; am .
                    </span>
                  </span>
                  <span style={{ display: "flex" }}>
                    <span className="que_no">19.</span> &nbsp;
                    <span>
                      Dinner time starts at &nbsp;{" "}
                      <input
                        ref={textInputRef19}
                        type="text"
                        value={ans19}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns19(e.target.value);
                        }}
                      />{" "}
                      &nbsp; pm .
                    </span>
                  </span>
                  <span style={{ display: "flex" }}>
                    <span className="que_no">20.</span>
                    <span>
                      {" "}
                      Students need to return{" "}
                      <span>
                        <input
                          ref={textInputRef20}
                          type="text"
                          value={ans20}
                          className="secTestPart1_input_inner"
                          onChange={(e) => {
                            SetAns20(e.target.value);
                          }}
                        />{" "}
                        &nbsp; to the dining room in case of room service .
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="btn_sec_redirect_main">
              {/* <div
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
                      style={{ backgroundColor: `var(${bgcolor})` }}
                      onClick={focusInput}>
                      1
                    </div>
                    <div
                      className="btn_que_no"
                      onClick={focusInput1}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      2
                    </div>
                    <div
                      className="btn_que_no"
                      onClick={focusInput2}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      3
                    </div>
                    <div
                      className="btn_que_no"
                      onClick={focusInput3}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      4
                    </div>
                    <div
                      className="btn_que_no"
                      onClick={focusInput4}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      5
                    </div>
                    <div
                      className="btn_que_no"
                      onClick={focusInput5}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      6
                    </div>
                    <div
                      className="btn_que_no"
                      onClick={focusInput6}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      7
                    </div>
                    <div
                      className="btn_que_no"
                      onClick={focusInput7}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      8
                    </div>
                    <div
                      className="btn_que_no"
                      onClick={focusInput8}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      9
                    </div>
                    <div
                      className="btn_que_no"
                      onClick={focusInput9}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      10
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
                      onClick={focusInput11}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
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
                      14
                    </div>
                    <div
                      className="btn_que_no"
                      onClick={focusInput15}
                      style={{ backgroundColor: `var(${bgcolor})` }}>
                      15
                    </div>
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
                  </div>
                </div>
                <div className="btn_part_block_main">
                  <div className="que_no">
                    <h5>Part 3</h5>
                  </div>
                  <div className="btn_que_no_main">
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
                  </div>
                </div>
                <div className="btn_part_block_main">
                  <div className="que_no">
                    <h5>Part 4</h5>
                  </div>
                  <div className="btn_que_no_main">
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
              </div> */}
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

export default ListenPart2;
