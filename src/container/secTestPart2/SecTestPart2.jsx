import React, { useState } from "react";
import "./SecTestPart2.css";
import { ACCEPT_HEADER, add_listening } from "../../utils/Constant";
import axios from "axios";
import Notification from "../../utils/Notification";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/auth_context";

const SecTestPart2 = ({
  textInputRef11,
  textInputRef12,
  textInputRef13,
  textInputRef14,
  textInputRef15,
  textInputRef16,
  textInputRef17,
  textInputRef18,
  textInputRef19,
  textInputRef20,
  SetAns11,
  SetAns12,
  SetAns13,
  SetAns14,
  SetAns15,
  SetAns16,
  SetAns17,
  SetAns18,
  SetAns19,
  SetAns20,
  ans11,
  ans12,
  ans13,
  ans14,
  ans15,
  ans16,
  ans17,
  ans18,
  ans19,
  ans20,
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
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();
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
    SetAns14(updatedTasks1);
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

  // const [draggedItem, setDraggedItem] = useState(null);

  // const handleDragStart = (event, item) => {
  //   event.dataTransfer.setData("text/plain", item);
  //   setDraggedItem(item);
  // };

  // const handleDragOver = (event) => {
  //   event.preventDefault();
  // };

  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   const droppedItem = event.dataTransfer.getData("text/plain");
  //   setDraggedItem(droppedItem);
  // };

  const AddListening = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("listening_id", 1);
    formdata.append("answer_14", taskGroups1.complete1[0].key);
    formdata.append("answer_15", taskGroups1.complete2[0].key);
    formdata.append("answer_16", taskGroups1.complete3[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_listening, formdata, {
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
  return (
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
          style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
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
              What Characteristics does each floor have? Choose the correct
              answer and move it into the gap.
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
                <span className="que_no">14. &nbsp;Mary's floor</span>&nbsp;
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
                <span className="que_no">15. &nbsp;Juliet's floor </span> &nbsp;
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
                <span className="que_no">16. &nbsp;Sandra's floor</span> &nbsp;
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
            {/* <div className="options">
              {options.map((option, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, option, 0)}
                  className="drag-item"
                >
                  {option}
                </div>
              ))}
            </div> */}
          </div>
          <button
            className="btn"
            style={{ marginTop: "1rem", width: "150px" }}
            onClick={() => {
              AddListening();
            }}>
            submit
          </button>
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
  );
};

export default SecTestPart2;
