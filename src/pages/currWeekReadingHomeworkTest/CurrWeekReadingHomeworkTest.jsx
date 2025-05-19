import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
import {
  ACCEPT_HEADER,
  add_curriculum_reading_home,
} from "../../utils/Constant";
import axios from "axios";
import Notification from "../../utils/Notification";
import { useAuthContext } from "../../context/auth_context";
import { useNavigate } from "react-router";

const CurrWeekReadingHomeworkTest = () => {
  const [getQue, setQue] = useState(1);
  const handleButtonClick = () => {
    const result = window.confirm(
      "You have time remaining to review. As long as there is a time remaining, you can check your work. Once you leave this section, you WILL NOT be able to return to it.Click 'Ok' to continue."
    );

    if (result) {
      // setQue1(1);
    } else {
    }
  };
  const handleButtonSubmitClick = () => {
    const result = window.confirm("Are you sure you want to exit the test?");

    if (result) {
      navigate("/curriculumPage");
    } else {
      // console.log("Action canceled");
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
  
  const [tasks1, setTasks1] = useState([
    {
      name1: "make",
      category1: "wip1",
    },
    {
      name1: "measuring",
      category1: "wip1",
    },
    {
      name1: "soundproofing",
      category1: "wip1",
    },
    {
      name1: "achieve",
      category1: "wip1",
    },
    {
      name1: "little",
      category1: "wip1",
    },
    {
      name1: "few",
      category1: "wip1",
    },
  ]);
  const [tasks2, setTasks2] = useState([
    {
      name2: "Relative",
      category2: "wip2",
    },
    {
      name2: "Moving",
      category2: "wip2",
    },
    {
      name2: "logistics",
      category2: "wip2",
    },
    {
      name2: "data",
      category2: "wip2",
    },
    {
      name2: "cruise",
      category2: "wip2",
    },
    {
      name2: "acquaintances.",
      category2: "wip2",
    },
  ]);
  const [tasks3, setTasks3] = useState([
    {
      name3: "Easier",
      category3: "wip3",
    },
    {
      name3: "different",
      category3: "wip3",
    },
    {
      name3: "manual",
      category3: "wip3",
    },
    {
      name3: "same",
      category3: "wip3",
    },
    {
      name3: "icorporate",
      category3: "wip3",
    },
    {
      name3: "faster",
      category3: "wip3",
    },
  ]);
  const [tasks4, setTasks4] = useState([
    {
      name4: "outside",
      category4: "wip4",
    },
    {
      name4: "little",
      category4: "wip4",
    },
    {
      name4: "much",
      category4: "wip4",
    },
    {
      name4: "few",
      category4: "wip4",
    },
    {
      name4: "popular",
      category4: "wip4",
    },
    {
      name4: "neither",
      category4: "wip4",
    },
  ]);
  const [tasks5, setTasks5] = useState([
    {
      name5: "make",
      category5: "wip5",
    },
    {
      name5: "depth",
      category5: "wip5",
    },
    {
      name5: "determine",
      category5: "wip5",
    },
    {
      name5: "height",
      category5: "wip5",
    },
    {
      name5: "construct",
      category5: "wip5",
    },
    {
      name5: "driving",
      category5: "wip5",
    },
  ]);
  const [tasks6, setTasks6] = useState([
    {
      name6: "Previously",
      category6: "wip6",
    },
    {
      name6: "minor",
      category6: "wip6",
    },
    {
      name6: "both",
      category6: "wip6",
    },
    {
      name6: "maintenance",
      category6: "wip6",
    },
    {
      name6: "latest",
      category6: "wip6",
    },
    {
      name6: "extensive",
      category6: "wip6",
    },
  ]);
  const [tasks7, setTasks7] = useState([
    {
      name7: "Centre",
      category7: "wip7",
    },
    {
      name7: "procrastination",
      category7: "wip7",
    },
    {
      name7: "heart",
      category7: "wip7",
    },
    {
      name7: "suffering",
      category7: "wip7",
    },
    {
      name7: "assumption",
      category7: "wip7",
    },
    {
      name7: "symptom",
      category7: "wip7",
    },
    {
      name7: "core",
      category7: "wip7",
    },
    {
      name7: "term",
      category7: "wip7",
    },
  ]);
  const [tasks8, setTasks8] = useState([
    {
      name8: "form",
      category8: "wip8",
    },
    {
      name8: "including",
      category8: "wip8",
    },
    {
      name8: "attractive",
      category8: "wip8",
    },
    {
      name8: "handsome",
      category8: "wip8",
    },
    {
      name8: "more petite",
      category8: "wip8",
    },
    {
      name8: "thoughtful",
      category8: "wip8",
    },
    {
      name8: "more",
      category8: "wip8",
    },
    {
      name8: "highly",
      category8: "wip8",
    },
    {
      name8: "kind",
      category8: "wip8",
    },
  ]);
  const [tasks9, setTasks9] = useState([
    {
      name9: "Independent",
      category9: "wip9",
    },
    {
      name9: "sorces",
      category9: "wip9",
    },
    {
      name9: "digitally",
      category9: "wip9",
    },
    {
      name9: "process",
      category9: "wip9",
    },
    {
      name9: "more",
      category9: "wip9",
    },
    {
      name9: "verbally",
      category9: "wip9",
    },
    {
      name9: "dependency",
      category9: "wip9",
    },
  ]);
  const [tasks10, setTasks10] = useState([
    {
      name10: "Set",
      category10: "wip10",
    },
    {
      name10: "Upset",
      category10: "wip10",
    },
    {
      name10: "Restore",
      category10: "wip10",
    },
    {
      name10: "Condition",
      category10: "wip10",
    },
    {
      name10: "Access",
      category10: "wip10",
    },
    {
      name10: "Methods",
      category10: "wip10",
    },
    {
      name10: "Retrive",
      category10: "wip10",
    },
    {
      name10: "as",
      category10: "wip10",
    },
    {
      name10: "reset",
      category10: "wip10",
    },
  ]);
  const [tasks11, setTasks11] = useState([
    {
      name11: "must fill",
      category11: "wip11",
    },
    {
      name11: "times",
      category11: "wip11",
    },
    {
      name11: "reched",
      category11: "wip11",
    },
    {
      name11: "soaks",
      category11: "wip11",
    },
    {
      name11: "ever",
      category11: "wip11",
    },
    {
      name11: "never",
      category11: "wip11",
    },
    {
      name11: "need",
      category11: "wip11",
    },
    {
      name11: "is drunk",
      category11: "wip11",
    },
  ]);
  const [tasks12, setTasks12] = useState([
    {
      name12: "Face",
      category12: "wip12",
    },
    {
      name12: "frequent",
      category12: "wip12",
    },
    {
      name12: "comes",
      category12: "wip12",
    },
    {
      name12: "ensure",
      category12: "wip12",
    },
    {
      name12: "element",
      category12: "wip12",
    },
    {
      name12: "Reliablity",
      category12: "wip12",
    },
    {
      name12: "factor",
      category12: "wip12",
    },
    {
      name12: "inconsitent",
      category12: "wip12",
    },
  ]);
  const [tasks13, setTasks13] = useState([
    {
      name13: "manpower",
      category13: "wip13",
    },
    {
      name13: "replace",
      category13: "wip13",
    },
    {
      name13: "much",
      category13: "wip13",
    },
    {
      name13: "covered",
      category13: "wip13",
    },
    {
      name13: "many",
      category13: "wip13",
    },
    {
      name13: "cosmetic",
      category13: "wip13",
    },
    {
      name13: "little",
      category13: "wip13",
    },
    {
      name13: "check",
      category13: "wip13",
    },
  ]);
  const [tasks14, setTasks14] = useState([
    {
      name14: "lean",
      category14: "wip14",
    },
    {
      name14: "assist",
      category14: "wip14",
    },
    {
      name14: "important",
      category14: "wip14",
    },
    {
      name14: "essential",
      category14: "wip14",
    },
    {
      name14: "keen",
      category14: "wip14",
    },
    {
      name14: "surrounding",
      category14: "wip14",
    },
    {
      name14: "round",
      category14: "wip14",
    },
    {
      name14: "commute",
      category14: "wip14",
    },
    {
      name14: "replace",
      category14: "wip14",
    },
    {
      name14: "heading",
      category14: "wip14",
    },
    {
      name14: "ambience",
      category14: "wip14",
    },
  ]);
  const [tasks15, setTasks15] = useState([
    {
      name15: "satiate",
      category15: "wip15",
    },
    {
      name15: "satisfy",
      category15: "wip15",
    },
    {
      name15: "biggest",
      category15: "wip15",
    },
    {
      name15: "largest",
      category15: "wip15",
    },
    {
      name15: "settling",
      category15: "wip15",
    },
    {
      name15: "destination",
      category15: "wip15",
    },
    {
      name15: "destinations",
      category15: "wip15",
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
  const onDragStart6 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart7 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart8 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart9 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart10 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart11 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart12 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart13 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart14 = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };
  const onDragStart15 = (ev, id) => {
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
  const onDragOver28 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver29 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver30 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver31 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver32 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver33 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver34 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver35 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver36 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver37 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver38 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver39 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver40 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver41 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver42 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver43 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver44 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver45 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver46 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver47 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver48 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver49 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver50 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver51 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver52 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver53 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver54 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver55 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver56 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver57 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver58 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver59 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver60 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver61 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver62 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver63 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver64 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver65 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver66 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver67 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver68 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver69 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver70 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver71 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver72 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver73 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver74 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver75 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver76 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver77 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver78 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver79 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver80 = (ev) => {
    ev.preventDefault();
  };
  const onDragOver81 = (ev) => {
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
    let updatedTasks6 = tasks6.map((task) => ({
      ...task,
      category6:
        task.name6 === id
          ? cat
          : task.category6 === cat
          ? "wip6"
          : task.category6,
    }));

    setTasks6(updatedTasks6);
  };
  const onDrop27 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks6 = tasks6.map((task) => ({
      ...task,
      category6:
        task.name6 === id
          ? cat
          : task.category6 === cat
          ? "wip6"
          : task.category6,
    }));

    setTasks6(updatedTasks6);
  };
  const onDrop28 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks6 = tasks6.map((task) => ({
      ...task,
      category6:
        task.name6 === id
          ? cat
          : task.category6 === cat
          ? "wip6"
          : task.category6,
    }));

    setTasks6(updatedTasks6);
  };
  const onDrop29 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks6 = tasks6.map((task) => ({
      ...task,
      category6:
        task.name6 === id
          ? cat
          : task.category6 === cat
          ? "wip6"
          : task.category6,
    }));

    setTasks6(updatedTasks6);
  };
  const onDrop30 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks6 = tasks6.map((task) => ({
      ...task,
      category6:
        task.name6 === id
          ? cat
          : task.category6 === cat
          ? "wip6"
          : task.category6,
    }));

    setTasks6(updatedTasks6);
  };
  const onDrop31 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks7 = tasks7.map((task) => ({
      ...task,
      category7:
        task.name7 === id
          ? cat
          : task.category7 === cat
          ? "wip7"
          : task.category7,
    }));

    setTasks7(updatedTasks7);
  };
  const onDrop32 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks7 = tasks7.map((task) => ({
      ...task,
      category7:
        task.name7 === id
          ? cat
          : task.category7 === cat
          ? "wip7"
          : task.category7,
    }));

    setTasks7(updatedTasks7);
  };
  const onDrop33 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks7 = tasks7.map((task) => ({
      ...task,
      category7:
        task.name7 === id
          ? cat
          : task.category7 === cat
          ? "wip7"
          : task.category7,
    }));

    setTasks7(updatedTasks7);
  };
  const onDrop34 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks7 = tasks7.map((task) => ({
      ...task,
      category7:
        task.name7 === id
          ? cat
          : task.category7 === cat
          ? "wip7"
          : task.category7,
    }));

    setTasks7(updatedTasks7);
  };
  const onDrop35 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks7 = tasks7.map((task) => ({
      ...task,
      category7:
        task.name7 === id
          ? cat
          : task.category7 === cat
          ? "wip7"
          : task.category7,
    }));

    setTasks7(updatedTasks7);
  };
  const onDrop36 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks7 = tasks7.map((task) => ({
      ...task,
      category7:
        task.name7 === id
          ? cat
          : task.category7 === cat
          ? "wip7"
          : task.category7,
    }));

    setTasks7(updatedTasks7);
  };
  const onDrop37 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks7 = tasks7.map((task) => ({
      ...task,
      category7:
        task.name7 === id
          ? cat
          : task.category7 === cat
          ? "wip7"
          : task.category7,
    }));

    setTasks7(updatedTasks7);
  };
  const onDrop38 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks8 = tasks8.map((task) => ({
      ...task,
      category8:
        task.name8 === id
          ? cat
          : task.category8 === cat
          ? "wip8"
          : task.category8,
    }));

    setTasks8(updatedTasks8);
  };
  const onDrop39 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks8 = tasks8.map((task) => ({
      ...task,
      category8:
        task.name8 === id
          ? cat
          : task.category8 === cat
          ? "wip8"
          : task.category8,
    }));

    setTasks8(updatedTasks8);
  };
  const onDrop40 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks8 = tasks8.map((task) => ({
      ...task,
      category8:
        task.name8 === id
          ? cat
          : task.category8 === cat
          ? "wip8"
          : task.category8,
    }));

    setTasks8(updatedTasks8);
  };
  const onDrop41 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks8 = tasks8.map((task) => ({
      ...task,
      category8:
        task.name8 === id
          ? cat
          : task.category8 === cat
          ? "wip8"
          : task.category8,
    }));

    setTasks8(updatedTasks8);
  };
  const onDrop42 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    // Clear the previous selection if any
    let updatedTasks8 = tasks8.map((task) => ({
      ...task,
      category8:
        task.name8 === id
          ? cat
          : task.category8 === cat
          ? "wip8"
          : task.category8,
    }));

    setTasks8(updatedTasks8);
  };
  const onDrop43 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks9 = tasks9.map((task) => ({
      ...task,
      category9:
        task.name9 === id
          ? cat
          : task.category9 === cat
          ? "wip9"
          : task.category9,
    }));

    setTasks9(updatedTasks9);
  };
  const onDrop44 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks9 = tasks9.map((task) => ({
      ...task,
      category9:
        task.name9 === id
          ? cat
          : task.category9 === cat
          ? "wip9"
          : task.category9,
    }));

    setTasks9(updatedTasks9);
  };
  const onDrop45 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks9 = tasks9.map((task) => ({
      ...task,
      category9:
        task.name9 === id
          ? cat
          : task.category9 === cat
          ? "wip9"
          : task.category9,
    }));

    setTasks9(updatedTasks9);
  };
  const onDrop46 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks9 = tasks9.map((task) => ({
      ...task,
      category9:
        task.name9 === id
          ? cat
          : task.category9 === cat
          ? "wip9"
          : task.category9,
    }));

    setTasks9(updatedTasks9);
  };
  const onDrop47 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks9 = tasks9.map((task) => ({
      ...task,
      category9:
        task.name9 === id
          ? cat
          : task.category9 === cat
          ? "wip9"
          : task.category9,
    }));

    setTasks9(updatedTasks9);
  };
  const onDrop48 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks10 = tasks10.map((task) => ({
      ...task,
      category10:
        task.name10 === id
          ? cat
          : task.category10 === cat
          ? "wip10"
          : task.category10,
    }));

    setTasks10(updatedTasks10);
  };
  const onDrop49 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks10 = tasks10.map((task) => ({
      ...task,
      category10:
        task.name10 === id
          ? cat
          : task.category10 === cat
          ? "wip10"
          : task.category10,
    }));

    setTasks10(updatedTasks10);
  };
  const onDrop50 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks10 = tasks10.map((task) => ({
      ...task,
      category10:
        task.name10 === id
          ? cat
          : task.category10 === cat
          ? "wip10"
          : task.category10,
    }));

    setTasks10(updatedTasks10);
  };
  const onDrop51 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks10 = tasks10.map((task) => ({
      ...task,
      category10:
        task.name10 === id
          ? cat
          : task.category10 === cat
          ? "wip10"
          : task.category10,
    }));

    setTasks10(updatedTasks10);
  };
  const onDrop52 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks10 = tasks10.map((task) => ({
      ...task,
      category10:
        task.name10 === id
          ? cat
          : task.category10 === cat
          ? "wip10"
          : task.category10,
    }));

    setTasks10(updatedTasks10);
  };
  const onDrop53 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks11 = tasks11.map((task) => ({
      ...task,
      category11:
        task.name11 === id
          ? cat
          : task.category11 === cat
          ? "wip11"
          : task.category11,
    }));

    setTasks11(updatedTasks11);
  };
  const onDrop54 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks11 = tasks11.map((task) => ({
      ...task,
      category11:
        task.name11 === id
          ? cat
          : task.category11 === cat
          ? "wip11"
          : task.category11,
    }));

    setTasks11(updatedTasks11);
  };
  const onDrop55 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks11 = tasks11.map((task) => ({
      ...task,
      category11:
        task.name11 === id
          ? cat
          : task.category11 === cat
          ? "wip11"
          : task.category11,
    }));

    setTasks11(updatedTasks11);
  };
  const onDrop56 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks11 = tasks11.map((task) => ({
      ...task,
      category11:
        task.name11 === id
          ? cat
          : task.category11 === cat
          ? "wip11"
          : task.category11,
    }));

    setTasks11(updatedTasks11);
  };
  const onDrop57 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks11 = tasks11.map((task) => ({
      ...task,
      category11:
        task.name11 === id
          ? cat
          : task.category11 === cat
          ? "wip11"
          : task.category11,
    }));

    setTasks11(updatedTasks11);
  };
  const onDrop58 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks11 = tasks11.map((task) => ({
      ...task,
      category11:
        task.name11 === id
          ? cat
          : task.category11 === cat
          ? "wip11"
          : task.category11,
    }));

    setTasks11(updatedTasks11);
  };
  const onDrop59 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks12 = tasks12.map((task) => ({
      ...task,
      category12:
        task.name12 === id
          ? cat
          : task.category12 === cat
          ? "wip12"
          : task.category12,
    }));

    setTasks12(updatedTasks12);
  };
  const onDrop60 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks12 = tasks12.map((task) => ({
      ...task,
      category12:
        task.name12 === id
          ? cat
          : task.category12 === cat
          ? "wip12"
          : task.category12,
    }));

    setTasks12(updatedTasks12);
  };
  const onDrop61 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks12 = tasks12.map((task) => ({
      ...task,
      category12:
        task.name12 === id
          ? cat
          : task.category12 === cat
          ? "wip12"
          : task.category12,
    }));

    setTasks12(updatedTasks12);
  };
  const onDrop62 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks12 = tasks12.map((task) => ({
      ...task,
      category12:
        task.name12 === id
          ? cat
          : task.category12 === cat
          ? "wip12"
          : task.category12,
    }));

    setTasks12(updatedTasks12);
  };
  const onDrop63 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks12 = tasks12.map((task) => ({
      ...task,
      category12:
        task.name12 === id
          ? cat
          : task.category12 === cat
          ? "wip12"
          : task.category12,
    }));

    setTasks12(updatedTasks12);
  };
  const onDrop64 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks13 = tasks13.map((task) => ({
      ...task,
      category13:
        task.name13 === id
          ? cat
          : task.category13 === cat
          ? "wip13"
          : task.category13,
    }));

    setTasks13(updatedTasks13);
  };
  const onDrop65 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks13 = tasks13.map((task) => ({
      ...task,
      category13:
        task.name13 === id
          ? cat
          : task.category13 === cat
          ? "wip13"
          : task.category13,
    }));

    setTasks13(updatedTasks13);
  };
  const onDrop66 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks13 = tasks13.map((task) => ({
      ...task,
      category13:
        task.name13 === id
          ? cat
          : task.category13 === cat
          ? "wip13"
          : task.category13,
    }));

    setTasks13(updatedTasks13);
  };
  const onDrop67 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks13 = tasks13.map((task) => ({
      ...task,
      category13:
        task.name13 === id
          ? cat
          : task.category13 === cat
          ? "wip13"
          : task.category13,
    }));

    setTasks13(updatedTasks13);
  };
  const onDrop68 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks13 = tasks13.map((task) => ({
      ...task,
      category13:
        task.name13 === id
          ? cat
          : task.category13 === cat
          ? "wip13"
          : task.category13,
    }));

    setTasks13(updatedTasks13);
  };
  const onDrop69 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks14 = tasks14.map((task) => ({
      ...task,
      category14:
        task.name14 === id
          ? cat
          : task.category14 === cat
          ? "wip14"
          : task.category14,
    }));

    setTasks14(updatedTasks14);
  };
  const onDrop70 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks14 = tasks14.map((task) => ({
      ...task,
      category14:
        task.name14 === id
          ? cat
          : task.category14 === cat
          ? "wip14"
          : task.category14,
    }));

    setTasks14(updatedTasks14);
  };
  const onDrop71 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks14 = tasks14.map((task) => ({
      ...task,
      category14:
        task.name14 === id
          ? cat
          : task.category14 === cat
          ? "wip14"
          : task.category14,
    }));

    setTasks14(updatedTasks14);
  };
  const onDrop72 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks14 = tasks14.map((task) => ({
      ...task,
      category14:
        task.name14 === id
          ? cat
          : task.category14 === cat
          ? "wip14"
          : task.category14,
    }));

    setTasks14(updatedTasks14);
  };
  const onDrop73 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks14 = tasks14.map((task) => ({
      ...task,
      category14:
        task.name14 === id
          ? cat
          : task.category14 === cat
          ? "wip14"
          : task.category14,
    }));

    setTasks14(updatedTasks14);
  };
  const onDrop74 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks14 = tasks14.map((task) => ({
      ...task,
      category14:
        task.name14 === id
          ? cat
          : task.category14 === cat
          ? "wip14"
          : task.category14,
    }));

    setTasks14(updatedTasks14);
  };
  const onDrop75 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks14 = tasks14.map((task) => ({
      ...task,
      category14:
        task.name14 === id
          ? cat
          : task.category14 === cat
          ? "wip14"
          : task.category14,
    }));

    setTasks14(updatedTasks14);
  };
  const onDrop76 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks14 = tasks14.map((task) => ({
      ...task,
      category14:
        task.name14 === id
          ? cat
          : task.category14 === cat
          ? "wip14"
          : task.category14,
    }));

    setTasks14(updatedTasks14);
  };
  const onDrop77 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks15 = tasks15.map((task) => ({
      ...task,
      category15:
        task.name15 === id
          ? cat
          : task.category15 === cat
          ? "wip15"
          : task.category15,
    }));

    setTasks15(updatedTasks15);
  };
  const onDrop78 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks15 = tasks15.map((task) => ({
      ...task,
      category15:
        task.name15 === id
          ? cat
          : task.category15 === cat
          ? "wip15"
          : task.category15,
    }));

    setTasks15(updatedTasks15);
  };
  const onDrop79 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks15 = tasks15.map((task) => ({
      ...task,
      category15:
        task.name15 === id
          ? cat
          : task.category15 === cat
          ? "wip15"
          : task.category15,
    }));

    setTasks15(updatedTasks15);
  };
  const onDrop80 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks15 = tasks15.map((task) => ({
      ...task,
      category15:
        task.name15 === id
          ? cat
          : task.category15 === cat
          ? "wip15"
          : task.category15,
    }));

    setTasks15(updatedTasks15);
  };
  const onDrop81 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks15 = tasks15.map((task) => ({
      ...task,
      category15:
        task.name15 === id
          ? cat
          : task.category15 === cat
          ? "wip15"
          : task.category15,
    }));

    setTasks15(updatedTasks15);
  };

  const renderTasks1 = () => {
    const taskGroups1 = {
      wip1: [],
      complete1: [],
      complete2: [],
      complete3: [],
      complete4: [],
    };

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
      complete21: [],
      complete22: [],
      complete23: [],
      complete24: [],
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
  const renderTasks6 = () => {
    const taskGroups6 = {
      wip6: [],
      complete26: [],
      complete27: [],
      complete28: [],
      complete29: [],
    };

    tasks6.forEach((t6) => {
      taskGroups6[t6.category6].push(
        <span
          key={t6.name6}
          onDragStart={(e) => onDragStart6(e, t6.name6)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t6.name6}
        </span>
      );
    });

    return taskGroups6;
  };
  const renderTasks7 = () => {
    const taskGroups7 = {
      wip7: [],
      complete31: [],
      complete32: [],
      complete33: [],
      complete34: [],
      complete35: [],
      complete36: [],
    };

    tasks7.forEach((t7) => {
      taskGroups7[t7.category7].push(
        <span
          key={t7.name7}
          onDragStart={(e) => onDragStart7(e, t7.name7)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t7.name7}
        </span>
      );
    });

    return taskGroups7;
  };
  const renderTasks8 = () => {
    const taskGroups8 = {
      wip8: [],
      complete38: [],
      complete39: [],
      complete40: [],
      complete41: [],
    };

    tasks8.forEach((t8) => {
      taskGroups8[t8.category8].push(
        <span
          key={t8.name8}
          onDragStart={(e) => onDragStart8(e, t8.name8)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t8.name8}
        </span>
      );
    });

    return taskGroups8;
  };
  const renderTasks9 = () => {
    const taskGroups9 = {
      wip9: [],
      complete43: [],
      complete44: [],
      complete45: [],
      complete46: [],
    };

    tasks9.forEach((t9) => {
      taskGroups9[t9.category9].push(
        <span
          key={t9.name9}
          onDragStart={(e) => onDragStart9(e, t9.name9)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t9.name9}
        </span>
      );
    });

    return taskGroups9;
  };
  const renderTasks10 = () => {
    const taskGroups10 = {
      wip10: [],
      complete48: [],
      complete49: [],
      complete50: [],
      complete51: [],
    };

    tasks10.forEach((t10) => {
      taskGroups10[t10.category10].push(
        <span
          key={t10.name10}
          onDragStart={(e) => onDragStart10(e, t10.name10)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t10.name10}
        </span>
      );
    });

    return taskGroups10;
  };
  const renderTasks11 = () => {
    const taskGroups11 = {
      wip11: [],
      complete53: [],
      complete54: [],
      complete55: [],
      complete56: [],
      complete57: [],
    };

    tasks11.forEach((t11) => {
      taskGroups11[t11.category11].push(
        <span
          key={t11.name11}
          onDragStart={(e) => onDragStart11(e, t11.name11)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t11.name11}
        </span>
      );
    });

    return taskGroups11;
  };
  const renderTasks12 = () => {
    const taskGroups12 = {
      wip12: [],
      complete59: [],
      complete60: [],
      complete61: [],
      complete62: [],
    };

    tasks12.forEach((t12) => {
      taskGroups12[t12.category12].push(
        <span
          key={t12.name12}
          onDragStart={(e) => onDragStart12(e, t12.name12)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t12.name12}
        </span>
      );
    });

    return taskGroups12;
  };
  const renderTasks13 = () => {
    const taskGroups13 = {
      wip13: [],
      complete64: [],
      complete65: [],
      complete66: [],
      complete67: [],
    };

    tasks13.forEach((t13) => {
      taskGroups13[t13.category13].push(
        <span
          key={t13.name13}
          onDragStart={(e) => onDragStart13(e, t13.name13)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t13.name13}
        </span>
      );
    });

    return taskGroups13;
  };
  const renderTasks14 = () => {
    const taskGroups14 = {
      wip14: [],
      complete69: [],
      complete70: [],
      complete71: [],
      complete72: [],
      complete73: [],
      complete74: [],
      complete75: [],
    };

    tasks14.forEach((t14) => {
      taskGroups14[t14.category14].push(
        <span
          key={t14.name14}
          onDragStart={(e) => onDragStart14(e, t14.name14)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t14.name14}
        </span>
      );
    });

    return taskGroups14;
  };
  const renderTasks15 = () => {
    const taskGroups15 = {
      wip15: [],
      complete77: [],
      complete78: [],
      complete79: [],
      complete80: [],
    };

    tasks15.forEach((t15) => {
      taskGroups15[t15.category15].push(
        <span
          key={t15.name15}
          onDragStart={(e) => onDragStart15(e, t15.name15)}
          draggable
          // className="draggable"
          className="drag-container_style"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t15.name15}
        </span>
      );
    });

    return taskGroups15;
  };

  const taskGroups1 = renderTasks1();
  const taskGroups2 = renderTasks2();
  const taskGroups3 = renderTasks3();
  const taskGroups4 = renderTasks4();
  const taskGroups5 = renderTasks5();
  const taskGroups6 = renderTasks6();
  const taskGroups7 = renderTasks7();
  const taskGroups8 = renderTasks8();
  const taskGroups9 = renderTasks9();
  const taskGroups10 = renderTasks10();
  const taskGroups11 = renderTasks11();
  const taskGroups12 = renderTasks12();
  const taskGroups13 = renderTasks13();
  const taskGroups14 = renderTasks14();
  const taskGroups15 = renderTasks15();

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
        taskGroups4.complete19.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking4();
      }
    } else if (getQue == 5) {
      if (
        (getQue == 5 && taskGroups5.complete21.length == 0) ||
        taskGroups5.complete22.length == 0 ||
        taskGroups5.complete23.length == 0 ||
        taskGroups5.complete24.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking5();
      }
    } else if (getQue == 6) {
      if (
        (getQue == 6 && taskGroups6.complete26.length == 0) ||
        taskGroups6.complete27.length == 0 ||
        taskGroups6.complete28.length == 0 ||
        taskGroups6.complete29.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking6();
      }
    } else if (getQue == 7) {
      if (
        (getQue == 7 && taskGroups7.complete31.length == 0) ||
        taskGroups7.complete32.length == 0 ||
        taskGroups7.complete33.length == 0 ||
        taskGroups7.complete34.length == 0 ||
        taskGroups7.complete35.length == 0 ||
        taskGroups7.complete36.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking7();
      }
    } else if (getQue == 8) {
      if (
        (getQue == 8 && taskGroups8.complete38.length == 0) ||
        taskGroups8.complete39.length == 0 ||
        taskGroups8.complete40.length == 0 ||
        taskGroups8.complete41.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking8();
      }
    } else if (getQue == 9) {
      if (
        (getQue == 9 && taskGroups9.complete43.length == 0) ||
        taskGroups9.complete44.length == 0 ||
        taskGroups9.complete45.length == 0 ||
        taskGroups9.complete46.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking9();
      }
    } else if (getQue == 10) {
      if (
        (getQue == 10 && taskGroups10.complete48.length == 0) ||
        taskGroups10.complete49.length == 0 ||
        taskGroups10.complete50.length == 0 ||
        taskGroups10.complete51.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking10();
      }
    } else if (getQue == 11) {
      if (
        (getQue == 11 && taskGroups11.complete53.length == 0) ||
        taskGroups11.complete54.length == 0 ||
        taskGroups11.complete55.length == 0 ||
        taskGroups11.complete56.length == 0 ||
        taskGroups11.complete57.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking11();
      }
    } else if (getQue == 12) {
      if (
        (getQue == 12 && taskGroups12.complete59.length == 0) ||
        taskGroups12.complete60.length == 0 ||
        taskGroups12.complete61.length == 0 ||
        taskGroups12.complete62.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking12();
      }
    } else if (getQue == 13) {
      if (
        (getQue == 13 && taskGroups13.complete64.length == 0) ||
        taskGroups13.complete65.length == 0 ||
        taskGroups13.complete66.length == 0 ||
        taskGroups13.complete67.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking13();
      }
    } else if (getQue == 14) {
      if (
        (getQue == 14 && taskGroups14.complete69.length == 0) ||
        taskGroups14.complete70.length == 0 ||
        taskGroups14.complete71.length == 0 ||
        taskGroups14.complete72.length == 0 ||
        taskGroups14.complete73.length == 0 ||
        taskGroups14.complete74.length == 0 ||
        taskGroups14.complete75.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking14();
      }
    } else if (getQue == 15) {
      if (
        (getQue == 15 && taskGroups15.complete77.length == 0) ||
        taskGroups15.complete78.length == 0 ||
        taskGroups15.complete79.length == 0 ||
        taskGroups15.complete80.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking15();
      }
    }
  };

  const AddSpeaking = async () => {
    console.log("ddd", getQue);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_1", taskGroups1.complete1[0].key);
    formdata.append("answer_2", taskGroups1.complete2[0].key);
    formdata.append("answer_3", taskGroups1.complete3[0].key);
    formdata.append("answer_4", taskGroups1.complete4[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking2 = async () => {
    console.log("ddd", getQue);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_5", taskGroups2.complete6[0].key);
    formdata.append("answer_6", taskGroups2.complete7[0].key);
    formdata.append("answer_7", taskGroups2.complete8[0].key);
    formdata.append("answer_8", taskGroups2.complete9[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking3 = async () => {
    console.log("ddd", getQue);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_9", taskGroups3.complete11[0].key);
    formdata.append("answer_10", taskGroups3.complete12[0].key);
    formdata.append("answer_11", taskGroups3.complete13[0].key);
    formdata.append("answer_12", taskGroups3.complete14[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking4 = async () => {
    console.log("ddd", getQue);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_13", taskGroups4.complete16[0].key);
    formdata.append("answer_14", taskGroups4.complete17[0].key);
    formdata.append("answer_15", taskGroups4.complete18[0].key);
    formdata.append("answer_16", taskGroups4.complete19[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
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
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_17", taskGroups5.complete21[0].key);
    formdata.append("answer_18", taskGroups5.complete22[0].key);
    formdata.append("answer_19", taskGroups5.complete23[0].key);
    formdata.append("answer_20", taskGroups5.complete24[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking6 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_21", taskGroups6.complete26[0].key);
    formdata.append("answer_22", taskGroups6.complete27[0].key);
    formdata.append("answer_23", taskGroups6.complete28[0].key);
    formdata.append("answer_24", taskGroups6.complete29[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking7 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_25", taskGroups7.complete31[0].key);
    formdata.append("answer_26", taskGroups7.complete32[0].key);
    formdata.append("answer_27", taskGroups7.complete33[0].key);
    formdata.append("answer_28", taskGroups7.complete34[0].key);
    formdata.append("answer_29", taskGroups7.complete35[0].key);
    formdata.append("answer_30", taskGroups7.complete36[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking8 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_31", taskGroups8.complete38[0].key);
    formdata.append("answer_32", taskGroups8.complete39[0].key);
    formdata.append("answer_33", taskGroups8.complete40[0].key);
    formdata.append("answer_34", taskGroups8.complete41[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking9 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_35", taskGroups9.complete43[0].key);
    formdata.append("answer_36", taskGroups9.complete44[0].key);
    formdata.append("answer_37", taskGroups9.complete45[0].key);
    formdata.append("answer_38", taskGroups9.complete46[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking10 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_39", taskGroups10.complete48[0].key);
    formdata.append("answer_40", taskGroups10.complete49[0].key);
    formdata.append("answer_41", taskGroups10.complete50[0].key);
    formdata.append("answer_42", taskGroups10.complete51[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking11 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_43", taskGroups11.complete53[0].key);
    formdata.append("answer_44", taskGroups11.complete54[0].key);
    formdata.append("answer_45", taskGroups11.complete55[0].key);
    formdata.append("answer_46", taskGroups11.complete56[0].key);
    formdata.append("answer_47", taskGroups11.complete57[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking12 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_48", taskGroups12.complete59[0].key);
    formdata.append("answer_49", taskGroups12.complete60[0].key);
    formdata.append("answer_50", taskGroups12.complete61[0].key);
    formdata.append("answer_51", taskGroups12.complete62[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking13 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_52", taskGroups13.complete64[0].key);
    formdata.append("answer_53", taskGroups13.complete65[0].key);
    formdata.append("answer_54", taskGroups13.complete66[0].key);
    formdata.append("answer_55", taskGroups13.complete67[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking14 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_56", taskGroups14.complete69[0].key);
    formdata.append("answer_57", taskGroups14.complete70[0].key);
    formdata.append("answer_58", taskGroups14.complete71[0].key);
    formdata.append("answer_59", taskGroups14.complete72[0].key);
    formdata.append("answer_60", taskGroups14.complete73[0].key);
    formdata.append("answer_61", taskGroups14.complete74[0].key);
    formdata.append("answer_62", taskGroups14.complete75[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
          // Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking15 = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_reading_home_id", 1);
    formdata.append("answer_63", taskGroups15.complete77[0].key);
    formdata.append("answer_64", taskGroups15.complete78[0].key);
    formdata.append("answer_65", taskGroups15.complete79[0].key);
    formdata.append("answer_66", taskGroups15.complete80[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_reading_home, formdata, {
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
            Reading-Fill in the Blanks -(H.W -3 D -1) - Section 1 of 1{" "}
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
              {getQue} of 15
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
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              Full-length curtains that do not leave room for air or sound to
              move out are the best for{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver1(e)}
                onDrop={(e) => onDrop1(e, "complete1")}>
                {taskGroups1.complete1}
              </span>
              &nbsp;a room. When{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver2(e)}
                onDrop={(e) => onDrop2(e, "complete2")}>
                {taskGroups1.complete2}
              </span>
              &nbsp; your windows for curtains, if you want them to be
              soundproof, you should remember to make them just a{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver3(e)}
                onDrop={(e) => onDrop3(e, "complete3")}>
                {taskGroups1.complete3}
              </span>
              &nbsp; inches wider and longer than the window measurements to{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver4(e)}
                onDrop={(e) => onDrop4(e, "complete4")}>
                {taskGroups1.complete4}
              </span>
              &nbsp;the best soundproofing.
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
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              Trucks are not{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver6(e)}
                onDrop={(e) => onDrop6(e, "complete6")}>
                {taskGroups2.complete6}
              </span>
              &nbsp;vehicles vou hire for a{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver7(e)}
                onDrop={(e) => onDrop7(e, "complete7")}>
                {taskGroups2.complete7}
              </span>
              &nbsp; . Before hiring one from any{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver8(e)}
                onDrop={(e) => onDrop8(e, "complete8")}>
                {taskGroups2.complete8}
              </span>
              &nbsp; company, ensure you have taken out time to make in-depth
              inquiries about different companies through your &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver9(e)}
                onDrop={(e) => onDrop9(e, "complete9")}>
                {taskGroups2.complete9}
              </span>
              .
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
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              In general, every laser machine performs the{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver11(e)}
                onDrop={(e) => onDrop11(e, "complete11")}>
                {taskGroups3.complete11}
              </span>
              &nbsp;function. Older models may require less speed and more{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver12(e)}
                onDrop={(e) => onDrop12(e, "complete12")}>
                {taskGroups3.complete12}
              </span>
              &nbsp; work, although the concept is generally the same. Many are
              heavy due to their being compact and easy to use. As technology
              improves, laser manufacturers are beginning to{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver13(e)}
                onDrop={(e) => onDrop13(e, "complete13")}>
                {taskGroups3.complete13}
              </span>
              &nbsp; better, more straightforward, more user-friendly, and less
              manual work, making the product better and{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver14(e)}
                onDrop={(e) => onDrop14(e, "complete14")}>
                {taskGroups3.complete14}
              </span>
              &nbsp; .
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
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              Noise-reducing blackout curtains &dash; Sound barrier curtains in
              Sydney are very{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver16(e)}
                onDrop={(e) => onDrop16(e, "complete16")}>
                {taskGroups4.complete16}
              </span>
              &nbsp;with those who want to soundproof a studio or music room.
              These are very{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver17(e)}
                onDrop={(e) => onDrop17(e, "complete17")}>
                {taskGroups4.complete17}
              </span>
              &nbsp; similar to blackout fabrics but made to create a sound
              barrier that{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver18(e)}
                onDrop={(e) => onDrop18(e, "complete18")}>
                {taskGroups4.complete18}
              </span>
              &nbsp; allows sound to go out of the space nor for you to hear
              most{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver19(e)}
                onDrop={(e) => onDrop19(e, "complete19")}>
                {taskGroups4.complete19}
              </span>
              &nbsp; sounds.{" "}
              <span
                className="wip drag-container wip_styles"
                style={{ margin: "5px" }}
                onDragOver={(e) => onDragOver20(e)}
                onDrop={(e) => {
                  onDrop20(e, "wip4");
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
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              The{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver21(e)}
                onDrop={(e) => onDrop21(e, "complete21")}>
                {taskGroups5.complete21}
              </span>
              &nbsp;of underground water is challenging to{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver22(e)}
                onDrop={(e) => onDrop22(e, "complete22")}>
                {taskGroups5.complete22}
              </span>
              &nbsp; . You cannot find any water sources on the land without{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver23(e)}
                onDrop={(e) => onDrop23(e, "complete23")}>
                {taskGroups5.complete23}
              </span>
              &nbsp; large equipment over them. If the ground is too soft, it
              will be difficult for you to{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver24(e)}
                onDrop={(e) => onDrop24(e, "complete24")}>
                {taskGroups5.complete24}
              </span>
              &nbsp; your house. It is because the land will be unstable and
              unfit for construction.{" "}
              <span
                className="wip drag-container wip_styles"
                style={{ margin: "5px" }}
                onDragOver={(e) => onDragOver25(e)}
                onDrop={(e) => {
                  onDrop25(e, "wip5");
                }}>
                {taskGroups5.wip5}
              </span>
            </span>
          </div>
        ) : getQue === 6 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              As per the BASIS report, it has been shown that there are around
              70% of companies are working in the{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver26(e)}
                onDrop={(e) => onDrop26(e, "complete26")}>
                {taskGroups6.complete26}
              </span>
              &nbsp; of software for{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver27(e)}
                onDrop={(e) => onDrop27(e, "complete27")}>
                {taskGroups6.complete27}
              </span>
              &nbsp;global and local clients. Only a few percent of the great
              companies are engaged with developing new and{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver28(e)}
                onDrop={(e) => onDrop28(e, "complete28")}>
                {taskGroups6.complete28}
              </span>
              &nbsp; software that is extremely important in the country's
              development.{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver29(e)}
                onDrop={(e) => onDrop29(e, "complete29")}>
                {taskGroups6.complete29}
              </span>
              &nbsp; there was no dimension of mobile banking in Bangladesh.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver30(e)}
              onDrop={(e) => {
                onDrop30(e, "wip6");
              }}>
              {taskGroups6.wip6}
            </span>
          </div>
        ) : getQue === 7 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              The research that reveals perfectionism at the root of{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver31(e)}
                onDrop={(e) => onDrop31(e, "complete31")}>
                {taskGroups7.complete31}
              </span>
              &nbsp;is congruent with a century-old{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver32(e)}
                onDrop={(e) => onDrop32(e, "complete32")}>
                {taskGroups7.complete32}
              </span>
              &nbsp; that Carl Jung, the Swiss founder of analytical psychology,
              recommends: any &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver33(e)}
                onDrop={(e) => onDrop33(e, "complete33")}>
                {taskGroups7.complete33}
              </span>{" "}
              unwanted pattern of thoughts, feelings, or behaviours that
              negatively impacted our quality of life can be considered a
              replacement for legitimate &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver34(e)}
                onDrop={(e) => onDrop34(e, "complete34")}>
                {taskGroups7.complete34}
              </span>
              &nbsp; .It is important to note that when he uses the{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver35(e)}
                onDrop={(e) => onDrop35(e, "complete35")}>
                {taskGroups7.complete35}
              </span>
              &nbsp;'legitimate,' he means that the pain experienced is close to
              the{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver36(e)}
                onDrop={(e) => onDrop36(e, "complete36")}>
                {taskGroups7.complete36}
              </span>{" "}
              &nbsp; of our problem, not that one form of discomfort is more
              valid than another.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver37(e)}
              onDrop={(e) => {
                onDrop37(e, "wip7");
              }}>
              {taskGroups7.wip7}
            </span>
          </div>
        ) : getQue === 8 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              Organizations in various countries of the world search for{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver38(e)}
                onDrop={(e) => onDrop38(e, "complete38")}>
                {taskGroups8.complete38}
              </span>
              &nbsp;skilled electrical engineers. Moreover, right after you
              graduate, you earn an
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver39(e)}
                onDrop={(e) => onDrop39(e, "complete39")}>
                {taskGroups8.complete39}
              </span>{" "}
              &nbsp; salary. The course is challenging in its{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver40(e)}
                onDrop={(e) => onDrop40(e, "complete40")}>
                {taskGroups8.complete40}
              </span>{" "}
              &nbsp; . The method of electrical engineering is divided into
              different branches{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver41(e)}
                onDrop={(e) => onDrop41(e, "complete41")}>
                {taskGroups8.complete41}
              </span>{" "}
              &nbsp; computer engineering, systems engineering, power
              engineering, radio communication engineering, telecommunications,
              signal processing, instrumentation, and electronics.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver42(e)}
              onDrop={(e) => {
                onDrop42(e, "wip8");
              }}>
              {taskGroups8.wip8}
            </span>
          </div>
        ) : getQue === 9 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              The most challenging part of any hiring&nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver43(e)}
                onDrop={(e) => onDrop43(e, "complete43")}>
                {taskGroups9.complete43}
              </span>
              &nbsp;is getting verification details. Usually, we check out the
              &nbsp;{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver44(e)}
                onDrop={(e) => onDrop44(e, "complete44")}>
                {taskGroups9.complete44}
              </span>
              &nbsp; to get the information for verification. Now, everything
              needs to be handled &nbsp;{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver45(e)}
                onDrop={(e) => onDrop45(e, "complete45")}>
                {taskGroups9.complete45}
              </span>
              &nbsp;This pandemic forces recruitment industries to digitize
              their operations. Indirectly, it implies less &nbsp;{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver46(e)}
                onDrop={(e) => onDrop46(e, "complete46")}>
                {taskGroups9.complete46}
              </span>
              &nbsp; documentation. However, it could be hectic for the
              administration to manage all these processes online.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver47(e)}
              onDrop={(e) => {
                onDrop47(e, "wip9");
              }}>
              {taskGroups9.wip9}
            </span>
          </div>
        ) : getQue === 10 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              Through these ways, you can &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver48(e)}
                onDrop={(e) => onDrop48(e, "complete48")}>
                {taskGroups10.complete48}
              </span>
              &nbsp; your account without difficulties. However, at any point,
              if you cannot access your recovery &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver49(e)}
                onDrop={(e) => onDrop49(e, "complete49")}>
                {taskGroups10.complete49}
              </span>
              &nbsp; and want to Recover your Yahoo Password Without a Phone
              Number and Alternate Email. In that &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver50(e)}
                onDrop={(e) => onDrop50(e, "complete50")}>
                {taskGroups10.complete50}
              </span>
              &nbsp; you can also use the other recovery method: your security
              questions. You can &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver51(e)}
                onDrop={(e) => onDrop51(e, "complete51")}>
                {taskGroups10.complete51}
              </span>
              &nbsp; a new password for your Yahoo mail account and access vour
              account without ditticulties
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver52(e)}
              onDrop={(e) => {
                onDrop52(e, "wip10");
              }}>
              {taskGroups10.wip10}
            </span>
          </div>
        ) : getQue === 11 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              When water &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver53(e)}
                onDrop={(e) => onDrop53(e, "complete53")}>
                {taskGroups11.complete53}
              </span>
              &nbsp;into drywall, it doesn't rise higher than the surface level
              of standing water. At &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver54(e)}
                onDrop={(e) => onDrop54(e, "complete54")}>
                {taskGroups11.complete54}
              </span>
              &nbsp;,if your house &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver55(e)}
                onDrop={(e) => onDrop55(e, "complete55")}>
                {taskGroups11.complete55}
              </span>
              &nbsp;gets flooded, you only &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver56(e)}
                onDrop={(e) => onDrop56(e, "complete56")}>
                {taskGroups11.complete56}
              </span>
              &nbsp; to remove and replace the drywall to the repair at which
              the water &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver57(e)}
                onDrop={(e) => onDrop57(e, "complete57")}>
                {taskGroups11.complete57}
              </span>
              &nbsp; its highest point.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver58(e)}
              onDrop={(e) => {
                onDrop58(e, "wip11");
              }}>
              {taskGroups11.wip11}
            </span>
          </div>
        ) : getQue === 12 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver59(e)}
                onDrop={(e) => onDrop59(e, "complete59")}>
                {taskGroups12.complete59}
              </span>
              &nbsp; also becomes a significant factor when choosing a
              high-speed broadband connection. It is very frustrating to have
              &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver60(e)}
                onDrop={(e) => onDrop60(e, "complete60")}>
                {taskGroups12.complete60}
              </span>
              &nbsp; broadband connectivity. Therefore, you have to &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver61(e)}
                onDrop={(e) => onDrop61(e, "complete61")}>
                {taskGroups12.complete61}
              </span>
              &nbsp; that your broadband connection should not face &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver62(e)}
                onDrop={(e) => onDrop62(e, "complete62")}>
                {taskGroups12.complete62}
              </span>
              &nbsp; interruptions from your provider's end and get reliable
              customer services.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver63(e)}
              onDrop={(e) => {
                onDrop63(e, "wip12");
              }}>
              {taskGroups12.wip12}
            </span>
          </div>
        ) : getQue === 13 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              Moreover, Keep in mind that no surgery can fully &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver64(e)}
                onDrop={(e) => onDrop64(e, "complete64")}>
                {taskGroups13.complete64}
              </span>
              &nbsp; any of your organs. Surgery only works to improve your
              limbs. Before surgery,&nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver65(e)}
                onDrop={(e) => onDrop65(e, "complete65")}>
                {taskGroups13.complete65}
              </span>
              &nbsp; your health insurance and find out how much of your surgery
              can be &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver66(e)}
                onDrop={(e) => onDrop66(e, "complete66")}>
                {taskGroups13.complete66}
              </span>
              &nbsp; Most health insurance does not cover the amount of &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver67(e)}
                onDrop={(e) => onDrop67(e, "complete67")}>
                {taskGroups13.complete67}
              </span>
              &nbsp; surgery.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver68(e)}
              onDrop={(e) => {
                onDrop68(e, "wip13");
              }}>
              {taskGroups13.wip13}
            </span>
          </div>
        ) : getQue === 14 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              Global student accommodation providers who can &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver69(e)}
                onDrop={(e) => onDrop69(e, "complete69")}>
                {taskGroups14.complete69}
              </span>
              &nbsp; you to hunt out suitable living spaces with easy &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver70(e)}
                onDrop={(e) => onDrop70(e, "complete70")}>
                {taskGroups14.complete70}
              </span>
              &nbsp; to universities, proximity to supermarkets, eating joints
              and travelling &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver71(e)}
                onDrop={(e) => onDrop71(e, "complete71")}>
                {taskGroups14.complete71}
              </span>
              &nbsp; the city a cakewalk. Students &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver72(e)}
                onDrop={(e) => onDrop72(e, "complete72")}>
                {taskGroups14.complete72}
              </span>
              &nbsp; abroad far away from their homes are &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver73(e)}
                onDrop={(e) => onDrop73(e, "complete73")}>
                {taskGroups14.complete73}
              </span>
              &nbsp; on choosing properties that give them a welcoming &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver74(e)}
                onDrop={(e) => onDrop74(e, "complete74")}>
                {taskGroups14.complete74}
              </span>
              &nbsp; Glasgow is one such city offering accommodation and playing
              an &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver75(e)}
                onDrop={(e) => onDrop75(e, "complete75")}>
                {taskGroups14.complete75}
              </span>
              &nbsp; role within the scholar housing sector.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver76(e)}
              onDrop={(e) => {
                onDrop76(e, "wip14");
              }}>
              {taskGroups14.wip14}
            </span>
          </div>
        ) : getQue === 15 ? (
          <div className="PteMockTest1Main_inner">
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                In the text below some words are missing. Drag words from the
                box below to the appropriate places in the text. To undo the
                answer choice, drag the words back.
              </span>
            </div>
            <span style={{ lineHeight: "2" }}>
              Noida is one of the &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver77(e)}
                onDrop={(e) => onDrop77(e, "complete77")}>
                {taskGroups15.complete77}
              </span>
              &nbsp;IT cities today, and &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver78(e)}
                onDrop={(e) => onDrop78(e, "complete78")}>
                {taskGroups15.complete78}
              </span>
              &nbsp;everyone from around the country is coming and here Tata
              Value Homes Destination 150 Noida is one of the new &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver79(e)}
                onDrop={(e) => onDrop79(e, "complete79")}>
                {taskGroups15.complete79}
              </span>
              &nbsp; for residential living, which will &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver80(e)}
                onDrop={(e) => onDrop80(e, "complete80")}>
                {taskGroups15.complete80}
              </span>
              &nbsp;all your modern needs under one root
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver81(e)}
              onDrop={(e) => {
                onDrop81(e, "wip15");
              }}>
              {taskGroups15.wip15}
            </span>
          </div>
        ) : getQue === 16 ? (
          handleButtonClick()
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

export default CurrWeekReadingHomeworkTest;
