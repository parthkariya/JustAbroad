import React, { useState } from "react";
import "./SecReadTestPart1.css";
import { ACCEPT_HEADER, add_reading } from "../../utils/Constant";
import axios from "axios";
import Notification from "../../utils/Notification";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";

const SecReadTestPart1 = ({
  textInputRef,
  textInputRef1,
  textInputRef2,
  textInputRef3,
  textInputRef4,
  textInputRef5,
  textInputRef6,
  textInputRef7,
  textInputRef8,
  textInputRef9,
  textInputRef11,
  textInputRef12,
  textInputRef13,
  textInputRef14,
  textInputRef15,
  SetAns1,
  SetAns2,
  SetAns3,
  SetAns4,
  SetAns5,
  SetAns6,
  SetAns7,
  SetAns8,
  SetAns9,
  SetAns10,
  SetAns11,
  SetAns12,
  SetAns13,
  SetAns14,
  SetAns15,
  ans1,
  ans2,
  ans3,
  ans4,
  ans5,
  ans6,
  ans7,
  ans8,
  ans9,
  ans10,
  ans11,
  ans12,
  ans13,
  ans14,
  ans15,
}) => {
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

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const AddSpeaking = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("reading_id", 1);
    formdata.append("answer_1", taskGroups1.complete1[0].key);
    formdata.append("answer_2", taskGroups1.complete2[0].key);
    formdata.append("answer_3", taskGroups1.complete3[0].key);
    formdata.append("answer_4", taskGroups1.complete4[0].key);
    formdata.append("answer_5", taskGroups1.complete5[0].key);
    formdata.append("answer_6", taskGroups1.complete6[0].key);

    axios
      .post(add_reading, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
        } else {
          // navigate("/SectionTest");
          Notification("success", "Success!", "Added Successfully");
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
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
                <span style={{ fontWeight: "600" }}>Questions 1-15,</span> which
                are based on Reading Passage 1 below.
              </p>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h5 className="que_no">THE DANGERS OF THE INTERNET</h5>
            </div>
            <div>
              <span>
                There is little doubt that the internet is a very useful tool.
                In fact, the world of the internet has broadened our perspective
                and altered it in many ways. Practically any information we want
                is available at the touch of a button. However, the online world
                has also exposed naive youngsters to dangers by opening its
                doors to virtual strangers. They end up communicating with
                unknown people, with whom they would not normally associate
                within the real world, putting themselves in grave peril.
              </span>
              <br />
              <br />
              <span>
                John Shehan, CyberTipline program manager for the National
                Centre for Missing and Exploited Children in Alexandria,
                Virginia, says, 'About 1 in 7 kids have been sexually solicited
                online.' By reporting cases of kids who are lured into
                performing sexual acts online, the CyberTipline program helps
                prevent sexual exploitation of little children. As sexual
                predators mainly target children in chat rooms, they tend to
                surf any online portal that young children frequently visit,
                says Shehan. Predators often browse networking sites such as
                MySpace and Xanga in search of targets as these are popular
                among the young and contain centralized information such as the
                child's photos and hobbies. "In terms of predators, that is
                obviously a hot spot where they can go to research victims,'
                Shehan says. "They need to meet these kids, groom these children
                and become friends.'
              </span>
              <br />
              <br />
              <span>
                The web, like any metropolis, has locales. While some are by and
                large safe, others are seedy and horrific. But cities are
                governed by laws; there is no governing body as far as the web
                is concerned. Thousands of objectionable sites are hosted by the
                net, showcasing explicit and often violent content. A study has
                revealed that as many as 60% of American teens have received
                communication via web from a total stranger. Around 63% of these
                teens have responded to such mails but have not let their
                parents know. That in several instances of gruesome crimes,
                victims are enticed through conversations on social networking
                sites is a worrying factor.
              </span>
              <br />
              <br />
              <span>
                In her research, America's renowned child psychotherapist, Julie
                Lynn Evans has tried to enter the murky world of the internet in
                an effort to understand what teenagers are continually exposed
                to. While many chat rooms are easily accessible, there are some
                which are underground. Evans was appalled with what she found.
                "The misery in those chat rooms is overwhelming and
                heart-rending,' she says. "Teenagers haven't got anybody with a
                good, strong sense of self-worth to protect them when they are
                there. Chat rooms become their reality. The anorexic ones are,
                in some ways, the most dangerous. Some of the images and
                conversations are terrifying.' She adds, "In these rooms, death
                is a triumph and they've got nobody to pull them back.'
              </span>
              <br />
              <br />
              <span>
                While it can be argued that the internet is not directly
                responsible for eating disorders in children, it definitely
                makes conditions difficult to deal, according to Evans. 'In a
                counseling session I might get an agreement to compromise on
                certain types of dangerous behavior, but then they revert to
                previous activities in the chat rooms. The contributors say she
                doesn't know what she is talking about, and I lose my power in a
                second, just as parents do.'
              </span>
              <br />
              <br />
              <span>
                Self-harm is another very serious concern with the internet
                fuelling an epidemic. Shocking the older generation has been a
                thing with teenagers since ages. But now with YouTube, they are
                able to showcase in technicolour their gashes and dripping blood
                as they cut themselves. The National Health Service figures
                published last year show that admissions due to self-harm in the
                past three years have seen an increase by approximately 10,000.
              </span>
              <br />
              <br />
              <span>
                While restriction of access is something that Evans supports,
                she feels the eventual responsibility lies with the parents. 'It
                has to be an integral part of our parenting, such as, how
                children do their homework or how they brush their teeth. It is
                not up to the government or the people making the software; it
                is up to us to be responsible.'
              </span>
              <br />
              <br />
              <span>
                While restriction of access is something that Evans supports,
                she feels the eventual responsibility lies with the parents. 'It
                has to be an integral part of our parenting, such as, how
                children do their homework or how they brush their teeth. It is
                not up to the government or the people making the software; it
                is up to us to be responsible.'
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
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                ref={textInputRef}
                tabIndex={-1}
                className="drag-container"
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, 1)}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="que_no">
                    1. &nbsp;Mere registration of physical abuse online leads
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
                    4. &nbsp;More than half of the teenagers in a study opted
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
            <button
              className="btn"
              style={{ width: "150px", marginTop: "1rem" }}
              onClick={() => {
                AddSpeaking();
              }}>
              Submit
            </button>
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
                    The people approached are acquainted with in order to The
                    people approached are acquainted with in order to
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
  );
};

export default SecReadTestPart1;
