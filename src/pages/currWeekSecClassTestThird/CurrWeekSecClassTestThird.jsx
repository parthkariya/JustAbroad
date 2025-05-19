import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
import { Line } from "rc-progress";
import images from "../../constants/images";
import { ACCEPT_HEADER, add_curriculum_reading } from "../../utils/Constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";
import Notification from "../../utils/Notification";

const CurrWeekSecClassTestThird = () => {
  const [getQue, setQue] = useState(1);
  //   const [getQue1, setQue1] = useState(1);
  const [sliderValue, setSliderValue] = useState(50);
  // const [attemptcount, SetAttemptcount] = useState("");
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  const handleButtonClick = () => {
    const result = window.confirm(
      "You have time remaining to review. As long as there is a time remaining, you can check your work. Once you leave this section, you WILL NOT be able to return to it.Click 'Ok' to continue."
    );

    if (result) {
      // setQue1(1);
    } else {
    }
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
  //Timer
  const [seconds1, setSeconds1] = useState(() => {
    const storedSeconds = localStorage.getItem("timerSeconds");
    return storedSeconds ? parseInt(storedSeconds) : 2 * 60 * 60; // 2 hours in seconds
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
  const remainingSeconds = seconds1 % 60;

  useEffect(() => {
    if (hours === 0 && minutes === 0 && remainingSeconds === 0) {
      navigate("/curriculumPage");
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

  const handleButtonSubmitClick = () => {
    const result = window.confirm("Are you sure you want to exit the test?");

    if (result) {
      navigate("/curriculumPage");
    } else {
      // console.log("Action canceled");
    }
  };
  const [tasks1, setTasks1] = useState([
    {
      name1: "especially",
      category1: "wip1",
    },
    {
      name1: "standard",
      category1: "wip1",
    },
    {
      name1: "economics",
      category1: "wip1",
    },
    {
      name1: "reeling",
      category1: "wip1",
    },
    {
      name1: "normal",
      category1: "wip1",
    },
  ]);
  const [tasks2, setTasks2] = useState([
    {
      name2: "especially",
      category2: "wip2",
    },
    {
      name2: "standard",
      category2: "wip2",
    },
    {
      name2: "economics",
      category2: "wip2",
    },
    {
      name2: "reeling",
      category2: "wip2",
    },
    {
      name2: "normal",
      category2: "wip2",
    },
  ]);
  const [tasks3, setTasks3] = useState([
    {
      name3: "rising",
      category3: "wip3",
    },
    {
      name3: "reasoning",
      category3: "wip3",
    },
    {
      name3: "facilitates",
      category3: "wip3",
    },
    {
      name3: "intelligence",
      category3: "wip3",
    },
    {
      name3: "emerging",
      category3: "wip3",
    },
    {
      name3: "brilliance",
      category3: "wip3",
    },
  ]);
  const [tasks4, setTasks4] = useState([
    {
      name4: "highlight",
      category4: "wip4",
    },
    {
      name4: "data",
      category4: "wip4",
    },
    {
      name4: "interchangeably",
      category4: "wip4",
    },
    {
      name4: "various",
      category4: "wip4",
    },
    {
      name4: "many",
      category4: "wip4",
    },
    {
      name4: "search",
      category4: "wip4",
    },
    {
      name4: "methods",
      category4: "wip4",
    },
  ]);
  const [tasks5, setTasks5] = useState([
    {
      name5: "build",
      category5: "wip5",
    },
    {
      name5: "planning",
      category5: "wip5",
    },
    {
      name5: "daunting",
      category5: "wip5",
    },
    {
      name5: "consumers",
      category5: "wip5",
    },
    {
      name5: "everything",
      category5: "wip5",
    },
    {
      name5: "shield",
      category5: "wip5",
    },
    {
      name5: "unpack",
      category5: "wip5",
    },
    {
      name5: "design",
      category5: "wip5",
    },
  ]);

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const onDragStart1 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart2 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart3 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart4 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart5 = (ev, id) => {
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
  const onDragOver8 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver9 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver10 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver11 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver12 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver13 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver14 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver15 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver16 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver17 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver18 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver19 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver20 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver21 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver22 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver23 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver24 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver25 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver26 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver27 = (ev) => {
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
    let updatedTasks2 = tasks2.map((task) => ({
      ...task,
      category2:
        task.name2 === id
          ? cat
          : task.category2 === cat
          ? "wip2"
          : task.category2,
    }));

    setTasks2(updatedTasks2);
  };
  const onDrop7 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks2 = tasks2.map((task) => ({
      ...task,
      category2:
        task.name2 === id
          ? cat
          : task.category2 === cat
          ? "wip2"
          : task.category2,
    }));

    setTasks2(updatedTasks2);
  };
  const onDrop8 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks2 = tasks2.map((task) => ({
      ...task,
      category2:
        task.name2 === id
          ? cat
          : task.category2 === cat
          ? "wip2"
          : task.category2,
    }));

    setTasks2(updatedTasks2);
  };
  const onDrop9 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks2 = tasks2.map((task) => ({
      ...task,
      category2:
        task.name2 === id
          ? cat
          : task.category2 === cat
          ? "wip2"
          : task.category2,
    }));

    setTasks2(updatedTasks2);
  };
  const onDrop10 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks2 = tasks2.map((task) => ({
      ...task,
      category2:
        task.name2 === id
          ? cat
          : task.category2 === cat
          ? "wip2"
          : task.category2,
    }));

    setTasks2(updatedTasks2);
  };
  const onDrop11 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks3 = tasks3.map((task) => ({
      ...task,
      category3:
        task.name3 === id
          ? cat
          : task.category3 === cat
          ? "wip3"
          : task.category3,
    }));

    setTasks3(updatedTasks3);
  };
  const onDrop12 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks3 = tasks3.map((task) => ({
      ...task,
      category3:
        task.name3 === id
          ? cat
          : task.category3 === cat
          ? "wip3"
          : task.category3,
    }));

    setTasks3(updatedTasks3);
  };
  const onDrop13 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks3 = tasks3.map((task) => ({
      ...task,
      category3:
        task.name3 === id
          ? cat
          : task.category3 === cat
          ? "wip3"
          : task.category3,
    }));

    setTasks3(updatedTasks3);
  };
  const onDrop14 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks3 = tasks3.map((task) => ({
      ...task,
      category3:
        task.name3 === id
          ? cat
          : task.category3 === cat
          ? "wip3"
          : task.category3,
    }));

    setTasks3(updatedTasks3);
  };
  const onDrop15 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks3 = tasks3.map((task) => ({
      ...task,
      category3:
        task.name3 === id
          ? cat
          : task.category3 === cat
          ? "wip3"
          : task.category3,
    }));

    setTasks3(updatedTasks3);
  };
  const onDrop16 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks4 = tasks4.map((task) => ({
      ...task,
      category4:
        task.name4 === id
          ? cat
          : task.category4 === cat
          ? "wip4"
          : task.category4,
    }));

    setTasks4(updatedTasks4);
  };
  const onDrop17 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks4 = tasks4.map((task) => ({
      ...task,
      category4:
        task.name4 === id
          ? cat
          : task.category4 === cat
          ? "wip4"
          : task.category4,
    }));

    setTasks4(updatedTasks4);
  };
  const onDrop18 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks4 = tasks4.map((task) => ({
      ...task,
      category4:
        task.name4 === id
          ? cat
          : task.category4 === cat
          ? "wip4"
          : task.category4,
    }));

    setTasks4(updatedTasks4);
  };
  const onDrop19 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks4 = tasks4.map((task) => ({
      ...task,
      category4:
        task.name4 === id
          ? cat
          : task.category4 === cat
          ? "wip4"
          : task.category4,
    }));

    setTasks4(updatedTasks4);
  };
  const onDrop20 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks4 = tasks4.map((task) => ({
      ...task,
      category4:
        task.name4 === id
          ? cat
          : task.category4 === cat
          ? "wip4"
          : task.category4,
    }));

    setTasks4(updatedTasks4);
  };
  const onDrop21 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks4 = tasks4.map((task) => ({
      ...task,
      category4:
        task.name4 === id
          ? cat
          : task.category4 === cat
          ? "wip4"
          : task.category4,
    }));

    setTasks4(updatedTasks4);
  };
  const onDrop22 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks5 = tasks5.map((task) => ({
      ...task,
      category5:
        task.name5 === id
          ? cat
          : task.category5 === cat
          ? "wip5"
          : task.category5,
    }));

    setTasks5(updatedTasks5);
  };
  const onDrop23 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks5 = tasks5.map((task) => ({
      ...task,
      category5:
        task.name5 === id
          ? cat
          : task.category5 === cat
          ? "wip5"
          : task.category5,
    }));

    setTasks5(updatedTasks5);
  };
  const onDrop24 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks5 = tasks5.map((task) => ({
      ...task,
      category5:
        task.name5 === id
          ? cat
          : task.category5 === cat
          ? "wip5"
          : task.category5,
    }));

    setTasks5(updatedTasks5);
  };
  const onDrop25 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks5 = tasks5.map((task) => ({
      ...task,
      category5:
        task.name5 === id
          ? cat
          : task.category5 === cat
          ? "wip5"
          : task.category5,
    }));

    setTasks5(updatedTasks5);
  };
  const onDrop26 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks5 = tasks5.map((task) => ({
      ...task,
      category5:
        task.name5 === id
          ? cat
          : task.category5 === cat
          ? "wip5"
          : task.category5,
    }));

    setTasks5(updatedTasks5);
  };
  const onDrop27 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks5 = tasks5.map((task) => ({
      ...task,
      category5:
        task.name5 === id
          ? cat
          : task.category5 === cat
          ? "wip5"
          : task.category5,
    }));

    setTasks5(updatedTasks5);
  };

  const renderTasks1 = () => {
    const taskGroups1 = {
      wip1: [],
      complete1: [],
      complete2: [],
      complete3: [],
      complete4: [],
    };

    // console.log("c1 are",taskGroups1.complete1);
    // console.log("c2 are",complete2);
    // console.log("c3 are",complete3);
    // console.log("c4 are",complete4);

    tasks1.forEach((t1) => {
      taskGroups1[t1.category1].push(
        <span
          key={t1.name1}
          onDragStart={(e) => onDragStart1(e, t1.name1)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t1.name1}
        </span>
      );
    });

    return taskGroups1;
  };
  const renderTasks2 = () => {
    const taskGroups2 = {
      wip2: [],
      complete6: [],
      complete7: [],
      complete8: [],
      complete9: [],
    };

    tasks2.forEach((t2) => {
      taskGroups2[t2.category2].push(
        <span
          key={t2.name2}
          onDragStart={(e) => onDragStart2(e, t2.name2)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t2.name2}
        </span>
      );
    });

    return taskGroups2;
  };
  const renderTasks3 = () => {
    const taskGroups3 = {
      wip3: [],
      complete11: [],
      complete12: [],
      complete13: [],
      complete14: [],
    };

    tasks3.forEach((t3) => {
      taskGroups3[t3.category3].push(
        <span
          key={t3.name3}
          onDragStart={(e) => onDragStart3(e, t3.name3)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t3.name3}
        </span>
      );
    });

    return taskGroups3;
  };
  const renderTasks4 = () => {
    const taskGroups4 = {
      wip4: [],
      complete16: [],
      complete17: [],
      complete18: [],
      complete19: [],
      complete20: [],
    };

    tasks4.forEach((t4) => {
      taskGroups4[t4.category4].push(
        <span
          key={t4.name4}
          onDragStart={(e) => onDragStart4(e, t4.name4)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t4.name4}
        </span>
      );
    });

    return taskGroups4;
  };
  const renderTasks5 = () => {
    const taskGroups5 = {
      wip5: [],
      complete22: [],
      complete23: [],
      complete24: [],
      complete25: [],
      complete26: [],
    };

    tasks5.forEach((t5) => {
      taskGroups5[t5.category5].push(
        <span
          key={t5.name5}
          onDragStart={(e) => onDragStart5(e, t5.name5)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t5.name5}
        </span>
      );
    });

    return taskGroups5;
  };
  const taskGroups1 = renderTasks1();
  const taskGroups2 = renderTasks2();
  const taskGroups3 = renderTasks3();
  const taskGroups4 = renderTasks4();
  const taskGroups5 = renderTasks5();

  const AddSpeakingMain = () => {
    if (getQue == 1) {
      if (
        (getQue == 1 && taskGroups1.complete1.length == 0) ||
        taskGroups1.complete2.length == 0 ||
        taskGroups1.complete3.length == 0 ||
        taskGroups1.complete4.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking();
      }
    } else if (getQue == 2) {
      if (
        (getQue == 2 && taskGroups2.complete6.length == 0) ||
        taskGroups2.complete7.length == 0 ||
        taskGroups2.complete8.length == 0 ||
        taskGroups2.complete9.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking2();
      }
    } else if (getQue == 3) {
      if (
        (getQue == 3 && taskGroups3.complete11.length == 0) ||
        taskGroups3.complete12.length == 0 ||
        taskGroups3.complete13.length == 0 ||
        taskGroups3.complete14.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking3();
      }
    } else if (getQue == 4) {
      if (
        (getQue == 4 && taskGroups4.complete16.length == 0) ||
        taskGroups4.complete17.length == 0 ||
        taskGroups4.complete18.length == 0 ||
        taskGroups4.complete19.length == 0 ||
        taskGroups4.complete20.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking4();
      }
    } else if (getQue == 5) {
      if (
        (getQue == 5 && taskGroups4.complete16.length == 0) ||
        taskGroups5.complete22.length == 0 ||
        taskGroups5.complete23.length == 0 ||
        taskGroups5.complete24.length == 0 ||
        taskGroups5.complete25.length == 0 ||
        taskGroups5.complete26.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking5();
      }
    }
  };

  const AddSpeaking = async () => {
     const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_id", 1);
    formdata.append("answer_1", taskGroups1.complete1[0].key);
    formdata.append("answer_2", taskGroups1.complete2[0].key);
    formdata.append("answer_3", taskGroups1.complete3[0].key);
    formdata.append("answer_4", taskGroups1.complete4[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading, formdata, {
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
          setQue(getQue + 1);

          Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking2 = async () => {
     const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_id", 1);
    formdata.append("answer_5", taskGroups2.complete6[0].key);
    formdata.append("answer_6", taskGroups2.complete7[0].key);
    formdata.append("answer_7", taskGroups2.complete8[0].key);
    formdata.append("answer_8", taskGroups2.complete9[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading, formdata, {
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
          setQue(getQue + 1);
          Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking3 = async () => {
      const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_id", 1);
    formdata.append("answer_9", taskGroups3.complete11[0].key);
    formdata.append("answer_10", taskGroups3.complete12[0].key);
    formdata.append("answer_11", taskGroups3.complete13[0].key);
    formdata.append("answer_12", taskGroups3.complete14[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading, formdata, {
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
          setQue(getQue + 1);
          Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking4 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_id", 1);
    formdata.append("answer_13", taskGroups4.complete16[0].key);
    formdata.append("answer_14", taskGroups4.complete17[0].key);
    formdata.append("answer_15", taskGroups4.complete18[0].key);
    formdata.append("answer_16", taskGroups4.complete19[0].key);
    formdata.append("answer_17", taskGroups4.complete20[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading, formdata, {
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
          setQue(getQue + 1);
          Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking5 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_id", 1);
    formdata.append("answer_18", taskGroups5.complete22[0].key);
    formdata.append("answer_19", taskGroups5.complete23[0].key);
    formdata.append("answer_20", taskGroups5.complete24[0].key);
    formdata.append("answer_21", taskGroups5.complete25[0].key);
    formdata.append("answer_22", taskGroups5.complete26[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading, formdata, {
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
          // setQue(getQue + 1);
          Notification("success", "Success!", res.data.message);
          navigate("/CurriculumPage");
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  return (
    <div className="PteMockTest1Main_main">
      <div>
        {/* header */}
        <div className="PteMockTest1Main_nav" style={{ height: "5rem" }}>
          <div className="que_no">
            Reading - Describe Image - (C.W - 1 D -3) - Section 1 of 1
          </div>
          <div className="PteMockTest1Main_nav_inner">
            <span
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}>
              <FaClock style={{ color: "var(--color-brand" }} /> Time Remaining
              <div>
                {hours}:{minutes < 10 ? "0" : ""}
               {minutes}:{remainingSeconds < 10 ? "0" : ""}
               {remainingSeconds}
              </div>
            </span>
            <span
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}>
              <IoIosListBox style={{ color: "var(--color-brand" }} />
              {getQue} of 5
            </span>
          </div>
        </div>
        <div className="blue_nav"></div>
        {/* header */}

        {getQue === 1 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <div className="que_no">Lecture Demonstration</div>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              When the Novel Coronavirus hit the world last year, everyone
              thought things would return to{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver1(e)}
                onDrop={(e) => onDrop1(e, "complete1")}>
                {taskGroups1.complete1}
              </span>
              &nbsp;in a couple of months.Nevertheless, more than a year has
              passed, and we are still{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver2(e)}
                onDrop={(e) => onDrop2(e, "complete2")}>
                {taskGroups1.complete2}
              </span>
              &nbsp; under the impact of the virus. The pandemic has affected
              physical, psychological, and social aspects of our lives, but it
              has altered the{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver3(e)}
                onDrop={(e) => onDrop3(e, "complete3")}>
                {taskGroups1.complete3}
              </span>
              &nbsp; of managing a business,{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver4(e)}
                onDrop={(e) => onDrop4(e, "complete4")}>
                {taskGroups1.complete4}
              </span>
              &nbsp; a small business.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver5(e)}
              onDrop={(e) => {
                onDrop5(e, "wip1");
              }}>
              {/* <span className="task-header">WIP</span> */}
              {taskGroups1.wip1}
            </span>
            {/* <button className="btn" onClick={()=>{AddSpeaking()}}>api check</button> */}
          </div>
        ) : getQue === 2 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <div className="que_no">Lecture Demonstration</div>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              When the Novel Coronavirus hit the world last year, everyone
              thought things would return to{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver6(e)}
                onDrop={(e) => onDrop6(e, "complete6")}>
                {taskGroups2.complete6}
              </span>
              &nbsp;in a couple of months.Nevertheless, more than a year has
              passed, and we are still{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver7(e)}
                onDrop={(e) => onDrop7(e, "complete7")}>
                {taskGroups2.complete7}
              </span>
              &nbsp; under the impact of the virus. The pandemic has affected
              physical, psychological, and social aspects of our lives, but it
              has altered the{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver8(e)}
                onDrop={(e) => onDrop8(e, "complete8")}>
                {taskGroups2.complete8}
              </span>
              &nbsp; of managing a business,{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver9(e)}
                onDrop={(e) => onDrop9(e, "complete9")}>
                {taskGroups2.complete9}
              </span>
              &nbsp; a small business.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver10(e)}
              onDrop={(e) => {
                onDrop10(e, "wip2");
              }}>
              {/* <span className="task-header">WIP</span> */}
              {taskGroups2.wip2}
            </span>
          </div>
        ) : getQue === 3 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <div className="que_no">Lecture Demonstration</div>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              Visual analytics is a type of{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver11(e)}
                onDrop={(e) => onDrop11(e, "complete11")}>
                {taskGroups3.complete11}
              </span>
              &nbsp;that uses interactive visual representations of data and
              analytical processes. It{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver12(e)}
                onDrop={(e) => onDrop12(e, "complete12")}>
                {taskGroups3.complete12}
              </span>
              &nbsp; high-level, complex activities such as improved data-driven
              decision-making. It is a part of business{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver13(e)}
                onDrop={(e) => onDrop13(e, "complete13")}>
                {taskGroups3.complete13}
              </span>
              &nbsp; and business analytics that refers to the visualization of
              data. Visual analytics reveals the true answer to the "what"
              questions - like "what are the challenges" or "what are the{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver14(e)}
                onDrop={(e) => onDrop14(e, "complete14")}>
                {taskGroups3.complete14}
              </span>
              &nbsp; trends."
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver15(e)}
              onDrop={(e) => {
                onDrop15(e, "wip3");
              }}>
              {/* <span className="task-header">WIP</span> */}
              {taskGroups3.wip3}
            </span>
          </div>
        ) : getQue === 4 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <div className="que_no">Lecture Demonstration</div>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              Difference Between Visualization of Data and Data Analytics; they
              are often used{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver16(e)}
                onDrop={(e) => onDrop16(e, "complete16")}>
                {taskGroups4.complete16}
              </span>
              &nbsp;but possess different capabilities and{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver17(e)}
                onDrop={(e) => onDrop17(e, "complete17")}>
                {taskGroups4.complete17}
              </span>
              &nbsp; applications. Both give you a specific set of{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver18(e)}
                onDrop={(e) => onDrop18(e, "complete18")}>
                {taskGroups4.complete18}
              </span>
              &nbsp; to answer particular questions. They provide visual{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver19(e)}
                onDrop={(e) => onDrop19(e, "complete19")}>
                {taskGroups4.complete19}
              </span>
              &nbsp; to represent data, making it easier to communicate findings
              and tell stories with your data. Both give you data points,{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver20(e)}
                onDrop={(e) => onDrop20(e, "complete20")}>
                {taskGroups4.complete20}
              </span>
              &nbsp; problems and critical indicators.
              <span
                className="wip drag-container wip_styles"
                style={{ margin: "5px" }}
                onDragOver={(e) => onDragOver21(e)}
                onDrop={(e) => {
                  onDrop21(e, "wip4");
                }}>
                {/* <span className="task-header">WIP</span> */}
                {taskGroups4.wip4}
              </span>{" "}
            </span>
          </div>
        ) : getQue === 5 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <div className="que_no">Lecture Demonstration</div>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              Shipping is{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver22(e)}
                onDrop={(e) => onDrop22(e, "complete22")}>
                {taskGroups5.complete22}
              </span>
              &nbsp;but you can win the market's reputation with proper{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver23(e)}
                onDrop={(e) => onDrop23(e, "complete23")}>
                {taskGroups5.complete23}
              </span>
              &nbsp; . This is why the packaging makes{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver24(e)}
                onDrop={(e) => onDrop24(e, "complete24")}>
                {taskGroups5.complete24}
              </span>
              &nbsp;easy for the consumers to move, ship, and{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver25(e)}
                onDrop={(e) => onDrop25(e, "complete25")}>
                {taskGroups5.complete25}
              </span>{" "}
              products whenever they want. Customizable pillow boxes are
              preferred for business or personal use. Various ways to{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver26(e)}
                onDrop={(e) => onDrop26(e, "complete26")}>
                {taskGroups5.complete26}
              </span>{" "}
              these boxes meet the consumers' requirements.
              <span
                className="wip drag-container wip_styles"
                style={{ margin: "5px" }}
                onDragOver={(e) => onDragOver27(e)}
                onDrop={(e) => {
                  onDrop27(e, "wip5");
                }}>
                {taskGroups5.wip5}
              </span>{" "}
            </span>
          </div>
        ) : null}
      </div>

      {/* {getQue1 === 1 ? <>1</> : getQue1 === 2 ? <>2</> : null} */}
      {/* butn */}
      <div
        style={{
          background: "lightgray",
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 2rem",
        }}>
        <div>
          <button
            className="btn"
            onClick={() => {
              // setQue(getQue - 1);
              handleButtonSubmitClick();
            }}>
            Save & Exit
          </button>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              // setQue(getQue + 1);
              //   setQue1(getQue1 + 1);
              // {getQue == 1 ? AddSpeaking() : getQue == 2 ? AddSpeaking() : getQue == 3 ? AddSpeaking() : getQue4 ? AddSpeaking() : getQue == 5 ? AddSpeaking() : null}
              AddSpeakingMain();
            }}>
            Next
          </button>
        </div>
      </div>
      {/* butn */}
    </div>
  );
};

export default CurrWeekSecClassTestThird;