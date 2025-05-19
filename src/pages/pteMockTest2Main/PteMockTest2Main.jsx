  // eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./PteMockTest2Main.css";
import { FaClock } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ACCEPT_HEADER, add_mock_test } from "../../utils/Constant";
import axios from "axios";
import { useAuthContext } from "../../context/auth_context";
import Notification from "../../utils/Notification";

const PteMockTest2Main = () => {
  const [getQue, setQue] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isChecked5, setChecked5] = useState(false);

  const [isChecked6, setChecked6] = useState(false);
  const [isChecked7, setChecked7] = useState(false);
  const [isChecked8, setChecked8] = useState(false);
  const [isChecked9, setChecked9] = useState(false);
  const [isChecked10, setChecked10] = useState(false);

  const [q1opt1, setq1opt1] = useState("1");
  const [q1opt2, setq1opt2] = useState("2");
  const [q1opt3, setq1opt3] = useState("3");
  const [q1opt4, setq1opt4] = useState("4");

  const [q2opt1, setq2opt1] = useState("1");
  const [q2opt2, setq2opt2] = useState("2");
  const [q2opt3, setq2opt3] = useState("3");
  const [q2opt4, setq2opt4] = useState("4");

  const [q1sel1, setq1sel1] = useState("");
  const [q1sel2, setq1sel2] = useState("");
  const [q1sel3, setq1sel3] = useState("");
  const [q1sel4, setq1sel4] = useState("");

  const [q2sel1, setq2sel1] = useState("");
  const [q2sel2, setq2sel2] = useState("");
  const [q2sel3, setq2sel3] = useState("");
  const [q2sel4, setq2sel4] = useState("");

  const [q3sel1, setq3sel1] = useState("");
  const [q3sel2, setq3sel2] = useState("");
  const [q3sel3, setq3sel3] = useState("");
  const [q3sel4, setq3sel4] = useState("");

  const [q4sel1, setq4sel1] = useState("");
  const [q4sel2, setq4sel2] = useState("");
  const [q4sel3, setq4sel3] = useState("");
  const [q4sel4, setq4sel4] = useState("");

  const [q5sel1, setq5sel1] = useState("");
  const [q5sel2, setq5sel2] = useState("");
  const [q5sel3, setq5sel3] = useState("");
  const [q5sel4, setq5sel4] = useState("");

  // const initialOptions = [
  //   "It's no surprise that many older adults struggle to keep track of their medications. According to a 2019 survey by the Kaiser Family Foundation the maiority of adults 65 and older report takina four or more prescription druas.",
  //   "Medication management often feels like a high-stakes balancing act. With multiple visits to doctors and specialists. a varietv of dosane instructions and refill schedules that vary from prescrintion to prescription. it's a challenge to keen medications organised",
  //   "Having the right plan in place to safely manage prescription and  rer-tre-crunter rrs rar rain aloriar re retertial bazards of medication management",
  //   "While many older adults want to remain independent and manage their medications without a plan they are putting themselves at risk. Medication mismanagement is among the most serious health threats facina seniors",
  //   "Mistakes can often lead to severe drug interactions or forced placement into a long-term care facility",
  // ];
  // const handleDragStart = (event, item, questionNumber) => {
  //   switch (questionNumber) {
  //     case 1:
  //       setDraggedItem1(item);
  //       break;
  //     case 2:
  //       setDraggedItem2(item);
  //       break;
  //     case 3:
  //       setDraggedItem3(item);
  //       break;
  //     default:
  //       break;
  //   }
  //   event.dataTransfer.setData("text/plain", item);
  // };
  // const [options, setOptions] = useState(initialOptions);
  // const [draggedItem1, setDraggedItem1] = useState(null);
  // const [draggedItem2, setDraggedItem2] = useState(null);
  // const [draggedItem3, setDraggedItem3] = useState(null);

  // restrict navigation

  const { SetLogout } = useAuthContext();

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

  const handleCheckboxChange1 = () => {
    setChecked1(!isChecked1);
  };
  const handleCheckboxChange2 = () => {
    setChecked2(!isChecked2);
  };
  const handleCheckboxChange3 = () => {
    setChecked3(!isChecked3);
  };
  const handleCheckboxChange4 = () => {
    setChecked4(!isChecked4);
  };
  const handleCheckboxChange5 = () => {
    setChecked5(!isChecked5);
  };
  const handleCheckboxChange6 = () => {
    setChecked6(!isChecked6);
  };
  const handleCheckboxChange7 = () => {
    setChecked7(!isChecked7);
  };
  const handleCheckboxChange8 = () => {
    setChecked8(!isChecked8);
  };
  const handleCheckboxChange9 = () => {
    setChecked9(!isChecked9);
  };
  const handleCheckboxChange10 = () => {
    setChecked10(!isChecked10);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // const handleDrop = (event, questionNumber) => {
  //   event.preventDefault();
  //   const droppedItem = event.dataTransfer.getData("text/plain");
  //   switch (questionNumber) {
  //     case 1:
  //       setDraggedItem1(droppedItem);
  //       // SetAns14(droppedItem);
  //       break;
  //     case 2:
  //       setDraggedItem2(droppedItem);
  //       // SetAns15(droppedItem);
  //       break;
  //     case 3:
  //       setDraggedItem3(droppedItem);
  //       // SetAns16(droppedItem);
  //       break;
  //     default:
  //       break;
  //   }

  //   // Remove the dropped item from the options list
  //   setOptions((prevOptions) =>
  //     prevOptions.filter((option) => option !== droppedItem)
  //   );
  // };

  const [tasks, setTasks] = useState([
    {
      name: "It's no surprise that many older adults struggle to keep track of their medications. According to a 2019 survey by the Kaiser Family Foundation the maiority of adults 65 and older report takina four or more prescription druas.",
      category: "wip",
      bgcolor: "yellow",
    },
    {
      name: "Medication management often feels like a high-stakes balancing act. With multiple visits to doctors and specialists. a varietv of dosane instructions and refill schedules that vary from prescrintion to prescription. it's a challenge to keen medications organised",
      category: "wip",
      bgcolor: "pink",
    },
    {
      name: "Having the right plan in place to safely manage prescription and  rer-tre-crunter rrs rar rain aloriar re retertial bazards of medication management",
      category: "wip",
      bgcolor: "skyblue",
    },
    {
      name: "While many older adults want to remain independent and manage their medications without a plan they are putting themselves at risk. Medication mismanagement is among the most serious health threats facina seniors",
      category: "wip",
      bgcolor: "yellow",
    },
    {
      name: "Mistakes can often lead to severe drug interactions or forced placement into a long-term care facility",
      category: "wip",
      bgcolor: "yellow",
    },
  ]);
  const [tasks2, setTasks2] = useState([
    {
      name2:
        "A fiduciary is someone who advises another person and always puts that person's best interest ahead of his or her own.",
      category2: "wip2",
      bgcolor2: "yellow",
    },
    {
      name2:
        "When it comes to managing your money, your financial needs must come first. You want to be confident that any financial advice you receive presents the best options for you, considering your goals, risk tolerance, and unique circumstances.",
      category2: "wip2",
      bgcolor2: "pink",
    },
    {
      name2:
        "If you are working with a financial planner, how do you make sure they have your best interest in mind? By focusing on this important word: fiduciary.",
      category2: "wip2",
      bgcolor2: "skyblue",
    },
    {
      name2:
        "If, for example, a financial planner is evaluating two investment options for a client - a more expensive, high-commission product and a lower-cost, no-commission fund - they would be required to recommend the less expensive fund, assuming the two options are otherwise equal.",
      category2: "wip2",
      bgcolor2: "yellow",
    },
    // { name2: "55555555", category2: "wip2", bgcolor2: "yellow" },
  ]);
  const [tasks3, setTasks3] = useState([
    {
      name3: "Challenges",
      category3: "wip3",
      bgcolor3: "yellow",
    },
    {
      name3: "Looking",
      category3: "wip3",
      bgcolor3: "pink",
    },
    {
      name3: "Emphasises",
      category3: "wip3",
      bgcolor3: "pink",
    },
    {
      name3: "Provide",
      category3: "wip3",
      bgcolor3: "yellow",
    },
    {
      name3: "investment",
      category3: "wip3",
      bgcolor3: "yellow",
    },
    // { name2: "55555555", category2: "wip2", bgcolor2: "yellow" },
  ]);
  const [tasks4, setTasks4] = useState([
    {
      name4: "Businesses",
      category4: "wip4",
      bgcolor4: "yellow",
    },
    {
      name4: "Implications",
      category4: "wip4",
      bgcolor4: "pink",
    },
    {
      name4: "Rebalancing",
      category4: "wip4",
      bgcolor4: "pink",
    },
    {
      name4: "Uncertainty",
      category4: "wip4",
      bgcolor4: "yellow",
    },
    {
      name4: "Opportunities",
      category4: "wip4",
      bgcolor4: "yellow",
    },
    {
      name4: "Incorporates",
      category4: "wip4",
      bgcolor4: "yellow",
    },
    // { name2: "55555555", category2: "wip2", bgcolor2: "yellow" },
  ]);
  const [tasks5, setTasks5] = useState([
    {
      name5: "Surrogate",
      category5: "wip5",
      bgcolor5: "yellow",
    },
    {
      name5: "Unaware",
      category5: "wip5",
      bgcolor5: "pink",
    },
    {
      name5: "Relaxing",
      category5: "wip5",
      bgcolor5: "skyblue",
    },
    {
      name5: "Benefits",
      category5: "wip5",
      bgcolor5: "yellow",
    },
    {
      name5: "Savvy",
      category5: "wip5",
      bgcolor5: "yellow",
    },
    {
      name5: "pleading",
      category5: "wip5",
      bgcolor5: "yellow",
    },
  ]);
  const [tasks6, setTasks6] = useState([
    {
      name6: "Exertion",
      category6: "wip6",
      bgcolor6: "yellow",
    },
    {
      name6: "Recreation",
      category6: "wip6",
      bgcolor6: "pink",
    },
    {
      name6: "Opportunities",
      category6: "wip6",
      bgcolor6: "pink",
    },
    {
      name6: "Connections",
      category6: "wip6",
      bgcolor6: "yellow",
    },
    {
      name6: "Awareness",
      category6: "wip6",
      bgcolor6: "yellow",
    },
    {
      name6: "Interested",
      category6: "wip6",
      bgcolor6: "yellow",
    },
    {
      name6: "trepidation",
      category6: "wip6",
      bgcolor6: "yellow",
    },
  ]);
  const [tasks7, setTasks7] = useState([
    {
      name7: "Stories",
      category7: "wip7",
      bgcolor7: "yellow",
    },
    {
      name7: "Library",
      category7: "wip7",
      bgcolor7: "pink",
    },
    {
      name7: "House",
      category7: "wip7",
      bgcolor7: "pink",
    },
    {
      name7: "Heart",
      category7: "wip7",
      bgcolor7: "yellow",
    },
    {
      name7: "Marriage",
      category7: "wip7",
      bgcolor7: "yellow",
    },
    {
      name7: "Work",
      category7: "wip7",
      bgcolor7: "yellow",
    },
    {
      name7: "book store",
      category7: "wip7",
      bgcolor7: "yellow",
    },
    {
      name7: "books",
      category7: "wip7",
      bgcolor7: "yellow",
    },
  ]);

  const onDragStart = (ev, id) => {
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

  const onDragOver = (ev) => {
    ev.preventDefault();
    // console.log("complete",taskgroup.complete)
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

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks = tasks.map((task) => ({
      ...task,
      category: task.name === id ? cat : task.category,
    }));

    setTasks(updatedTasks);
  };
  const onDrop2 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let updatedTasks2 = tasks2.map((task) => ({
      ...task,
      category2: task.name2 === id ? cat : task.category2,
    }));
    // console.log("logg", tasks);

    setTasks2(updatedTasks2);
  };
  // const onDrop3 = (ev, cat) => {
  //   let id = ev.dataTransfer.getData("id");

  //   let updatedTasks3 = tasks3.map((task) => ({
  //     ...task,
  //     category3: task.name3 === id ? cat : task.category3,
  //   }));
  //   // console.log("logg", tasks);

  //   setTasks3(updatedTasks3);
  // };
  // const onDrop4 = (ev, cat) => {
  //   let id = ev.dataTransfer.getData("id");

  //   let updatedTasks3 = tasks3.map((task) => ({
  //     ...task,
  //     category3: task.name3 === id ? cat : task.category3,
  //   }));
  //   // console.log("logg", tasks);

  //   setTasks3(updatedTasks3);
  // };
  // const onDrop5 = (ev, cat) => {
  //   let id = ev.dataTransfer.getData("id");

  //   let updatedTasks3 = tasks3.map((task) => ({
  //     ...task,
  //     category3: task.name3 === id ? cat : task.category3,
  //   }));
  //   // console.log("logg", tasks);

  //   setTasks3(updatedTasks3);
  // };
  const onDrop3 = (ev, cat) => {
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

  const onDrop4 = (ev, cat) => {
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

  const onDrop5 = (ev, cat) => {
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
  const onDrop6 = (ev, cat) => {
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
  const onDrop7 = (ev, cat) => {
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

  const onDrop8 = (ev, cat) => {
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
  const onDrop9 = (ev, cat) => {
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
  const onDrop10 = (ev, cat) => {
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
  const onDrop11 = (ev, cat) => {
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
  const onDrop12 = (ev, cat) => {
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
  const onDrop13 = (ev, cat) => {
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
  const onDrop14 = (ev, cat) => {
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
  const onDrop15 = (ev, cat) => {
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
  const onDrop16 = (ev, cat) => {
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
  const onDrop17 = (ev, cat) => {
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
  const onDrop18 = (ev, cat) => {
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
  const onDrop19 = (ev, cat) => {
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
  const onDrop20 = (ev, cat) => {
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
  const onDrop21 = (ev, cat) => {
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
  const onDrop22 = (ev, cat) => {
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
  const onDrop23 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

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
  const onDrop24 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

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
  const onDrop25 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

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
  const onDrop26 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

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
  const onDrop27 = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

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

  const renderTasks = () => {
    const taskGroups = {
      wip: [],
      complete: [],
    };

    // console.log("c1 are",taskGroups.complete);

    tasks.forEach((t) => {
      taskGroups[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => onDragStart(e, t.name)}
          draggable
          className="draggable"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      );
    });

    return taskGroups;
  };
  const renderTasks2 = () => {
    const taskGroups2 = {
      wip2: [],
      complete2: [],
    };

    tasks2.forEach((t2) => {
      taskGroups2[t2.category2].push(
        <div
          key={t2.name2}
          onDragStart={(e) => onDragStart2(e, t2.name2)}
          draggable
          className="draggable"
          // style={{ backgroundColor: t.bgcolor }}
        >
          {t2.name2}
        </div>
      );
    });

    return taskGroups2;
  };
  const renderTasks3 = () => {
    const taskGroups3 = {
      wip3: [],
      complete3: [],
      complete4: [],
      complete5: [],
      complete6: [],
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
      complete8: [],
      complete9: [],
      complete10: [],
      complete11: [],
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
      complete13: [],
      complete14: [],
      complete15: [],
      complete16: [],
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
      complete18: [],
      complete19: [],
      complete20: [],
      complete21: [],
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
      complete23: [],
      complete24: [],
      complete25: [],
      complete26: [],
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

  const taskGroups = renderTasks();
  const taskGroups2 = renderTasks2();
  const taskGroups3 = renderTasks3();
  const taskGroups4 = renderTasks4();
  const taskGroups5 = renderTasks5();
  const taskGroups6 = renderTasks6();
  const taskGroups7 = renderTasks7();

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
      navigate("/PteMockTest");
      Notification("Warning","Warning", "Test's up!");
    } else {
    }
  }, [hours, minutes, remainingSeconds]);
  
  useEffect(() => {
    if (hours === 0 && minutes === 0 && remainingSeconds === 0) {
      navigate("/PteMockTest");
      Notification("Warning","Warning", "Test's up!");
    } else {
    }
  }, [hours, minutes, remainingSeconds]);

  // const handleButtonClick = () => {
  //   const result = window.confirm("Are you sure you want to submit the test?");

  //   if (result) {
  //     SubmitTest();
  //   } else {
  //     console.log("Action canceled");
  //   }
  // };
  let navigate = useNavigate();

  const handleButtonClick = () => {
    const result = window.confirm(
      "You have time remaining to review. As long as there is a time remaining, you can check your work. Once you leave this section, you WILL NOT be able to return to it.Click 'Ok' to continue."
    );

    if (result) {
      navigate("/ptemocktest3");
    } else {
    }
  };

  // const addpte2mainapi = () => {
  //   if (getQue == 1) {
  //     AddSpeaking();
  //   } else if (getQue == 2) {
  //     AddSpeaking2();
  //   } else if (getQue == 5) {
  //     AddSpeaking5()
  //   } else if (getQue == 6){
  //     AddSpeaking6();
  //   }
  // }

  const addpte2mainapi = () => {
    if (getQue == 1) {
      AddSpeaking();
    } else if (getQue == 2) {
      AddSpeaking2();
    } else if (getQue == 3) {
      AddSpeaking3();
    } else if (getQue == 4) {
      AddSpeaking4();
    } else if (getQue == 5) {
      if (taskGroups.complete.length == 0) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking5();
      }
    } else if (getQue == 6) {
      if (taskGroups2.complete2.length == 0) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking6();
      }
    } else if (getQue == 7) {
      if (
        (getQue == 7 && taskGroups3.complete3.length == 0) ||
        taskGroups3.complete4.length == 0 ||
        taskGroups3.complete5.length == 0 ||
        taskGroups3.complete6.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking7();
      }
    } else if (getQue == 8) {
      if (
        (getQue == 8 && taskGroups4.complete8.length == 0) ||
        taskGroups4.complete9.length == 0 ||
        taskGroups4.complete10.length == 0 ||
        taskGroups4.complete11.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking8();
      }
    } else if (getQue == 9) {
      if (
        (getQue == 9 && taskGroups5.complete13.length == 0) ||
        taskGroups5.complete14.length == 0 ||
        taskGroups5.complete15.length == 0 ||
        taskGroups5.complete16.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking9();
      }
    } else if (getQue == 10) {
      if (
        (getQue == 10 && taskGroups6.complete18.length == 0) ||
        taskGroups6.complete19.length == 0 ||
        taskGroups6.complete20.length == 0 ||
        taskGroups6.complete21.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking10();
      }
    } else if (getQue == 11) {
      if (
        (getQue == 11 && taskGroups7.complete23.length == 0) ||
        taskGroups7.complete24.length == 0 ||
        taskGroups7.complete25.length == 0 ||
        taskGroups7.complete26.length == 0
      ) {
        Notification("error", "Error!", "Please enter the answer.");
      } else {
        AddSpeaking11();
      }
    } else if (getQue == 12) {
      AddSpeaking12();
    } else if (getQue == 13) {
      AddSpeaking13();
    } else if (getQue == 14) {
      AddSpeaking14();
    } else if (getQue == 15) {
      AddSpeaking15();
    } else if (getQue == 16) {
      AddSpeaking16();
    }
  };

  const AddSpeaking = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_1", blob, "recorded_audio.mp3");
    if (selectedOption === q1opt1) {
      formdata.append("answer_31", q1opt1);
    } else if (selectedOption === q1opt2) {
      formdata.append("answer_31", q1opt2);
    } else if (selectedOption === q1opt3) {
      formdata.append("answer_31", q1opt3);
    } else if (selectedOption === q1opt4) {
      formdata.append("answer_31", q1opt4);
    } else {
    }
    axios
      .post(add_mock_test, formdata, {
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
          Notification("success", "Success!", res.data.message);
          setQue(getQue + 1);
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddSpeaking2 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_1", blob, "recorded_audio.mp3");
    if (selectedOption === q1opt1) {
      formdata.append("answer_32", q2opt1);
    } else if (selectedOption === q2opt2) {
      formdata.append("answer_32", q2opt2);
    } else if (selectedOption === q2opt3) {
      formdata.append("answer_32", q2opt3);
    } else if (selectedOption === q2opt4) {
      formdata.append("answer_32", q2opt4);
    } else {
    }
    axios
      .post(add_mock_test, formdata, {
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
          Notification("success", "Success!", res.data.message);
          setQue(getQue + 1);
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddSpeaking3 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    formdata.append("answer_33[0]", isChecked1 === true ? 1 : "");
    formdata.append("answer_33[1]", isChecked2 === true ? 2 : "");
    formdata.append("answer_33[2]", isChecked3 === true ? 3 : "");
    formdata.append("answer_33[3]", isChecked4 === true ? 4 : "");
    formdata.append("answer_33[4]", isChecked5 === true ? 5 : "");

    axios
      .post(add_mock_test, formdata, {
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
          Notification("success", "Success!", res.data.message);
          setQue(getQue + 1);
          setSelectedOption(null);
          setChecked1(false);
          setChecked2(false);
          setChecked3(false);
          setChecked4(false);
          setChecked5(false);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddSpeaking4 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    formdata.append("answer_34[0]", isChecked6 === true ? 1 : "");
    formdata.append("answer_34[1]", isChecked7 === true ? 2 : "");
    formdata.append("answer_34[2]", isChecked8 === true ? 3 : "");
    formdata.append("answer_34[3]", isChecked9 === true ? 4 : "");
    formdata.append("answer_34[4]", isChecked10 === true ? 5 : "");

    axios
      .post(add_mock_test, formdata, {
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
          Notification("success", "Success!", res.data.message);
          setQue(getQue + 1);
          setSelectedOption(null);
          setChecked6(false);
          setChecked7(false);
          setChecked8(false);
          setChecked9(false);
          setChecked10(false);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddSpeaking5 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    for (var i = 0; i < taskGroups.complete.length; i++) {
      await formdata.append("answer_35[" + i + "]", taskGroups.complete[i].key);
    }
    axios
      .post(add_mock_test, formdata, {
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
          Notification("success", "Success!", res.data.message);
          setQue(getQue + 1);
          // setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddSpeaking6 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    for (var i = 0; i < taskGroups.complete.length; i++) {
      await formdata.append(
        "answer_36[" + i + "]",
        taskGroups2.complete2[i].key
      );
    }
    axios
      .post(add_mock_test, formdata, {
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
          Notification("success", "Success!", res.data.message);
          setQue(getQue + 1);
          // setSelectedOption(null);
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
    formdata.append("mock_test_id", 1);
    formdata.append("answer_37", taskGroups3.complete3[0].key);
    formdata.append("answer_38", taskGroups3.complete4[0].key);
    formdata.append("answer_39", taskGroups3.complete5[0].key);
    formdata.append("answer_40", taskGroups3.complete6[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_mock_test, formdata, {
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

  const AddSpeaking8 = async () => {
     const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);
    formdata.append("answer_41", taskGroups4.complete8[0].key);
    formdata.append("answer_42", taskGroups4.complete9[0].key);
    formdata.append("answer_43", taskGroups4.complete10[0].key);
    formdata.append("answer_44", taskGroups4.complete11[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_mock_test, formdata, {
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

  const AddSpeaking9 = async () => {
     const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);
    formdata.append("answer_45", taskGroups5.complete13[0].key);
    formdata.append("answer_46", taskGroups5.complete14[0].key);
    formdata.append("answer_47", taskGroups5.complete15[0].key);
    formdata.append("answer_48", taskGroups5.complete16[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_mock_test, formdata, {
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
  const AddSpeaking10 = async () => {
     const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);
    formdata.append("answer_49", taskGroups6.complete18[0].key);
    formdata.append("answer_50", taskGroups6.complete19[0].key);
    formdata.append("answer_51", taskGroups6.complete20[0].key);
    formdata.append("answer_52", taskGroups6.complete21[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_mock_test, formdata, {
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
  const AddSpeaking11 = async () => {
     const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);
    formdata.append("answer_53", taskGroups7.complete23[0].key);
    formdata.append("answer_54", taskGroups7.complete24[0].key);
    formdata.append("answer_55", taskGroups7.complete25[0].key);
    formdata.append("answer_56", taskGroups7.complete26[0].key);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_mock_test, formdata, {
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

  const AddSpeaking12 = async () => {
     const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);
    formdata.append("answer_57[0]", q1sel1);
    formdata.append("answer_57[1]", q1sel2);
    formdata.append("answer_57[2]", q1sel3);
    formdata.append("answer_57[3]", q1sel4);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_mock_test, formdata, {
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
          setq1sel1("");
          setq1sel2("");
          setq1sel3("");
          setq1sel4("");
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
    formdata.append("mock_test_id", 1);
    formdata.append("answer_58[0]", q2sel1);
    formdata.append("answer_58[1]", q2sel2);
    formdata.append("answer_58[2]", q2sel3);
    formdata.append("answer_58[3]", q2sel4);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_mock_test, formdata, {
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

          setq2sel1("");
          setq2sel2("");
          setq2sel3("");
          setq2sel4("");
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
    formdata.append("mock_test_id", 1);
    formdata.append("answer_59[0]", q3sel1);
    formdata.append("answer_59[1]", q3sel2);
    formdata.append("answer_59[2]", q3sel3);
    formdata.append("answer_59[3]", q3sel4);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_mock_test, formdata, {
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
          setq3sel1("");
          setq3sel2("");
          setq3sel3("");
          setq3sel4("");
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
    formdata.append("mock_test_id", 1);
    formdata.append("answer_60[0]", q4sel1);
    formdata.append("answer_60[1]", q4sel2);
    formdata.append("answer_60[2]", q4sel3);
    formdata.append("answer_60[3]", q4sel4);

    // const response = await fetch(id);
    // const blob = await response.blob();
    // formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_mock_test, formdata, {
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
          setq4sel1("");
          setq4sel2("");
          setq4sel3("");
          setq4sel4("");
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddSpeaking16 = async () => {
     const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);
    formdata.append("answer_61[0]", q5sel1);
    formdata.append("answer_61[1]", q5sel2);
    formdata.append("answer_61[2]", q5sel3);
    formdata.append("answer_61[3]", q5sel4);

    axios
      .post(add_mock_test, formdata, {
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
          navigate("/ptemocktest3");

          Notification("success", "Success!", res.data.message);
          setq5sel1("");
          setq5sel2("");
          setq5sel3("");
          setq5sel4("");
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const handleButtonSubmitClick = () => {
    const result = window.confirm("Are you sure you want to exit the test?");

    if (result) {
      navigate("/PteMockTest");
    } else {
     }
  };

  return (
    <div className="PteMockTest1Main_main">
      <div>
        {/* hedar */}
        <div className="PteMockTest1Main_nav" style={{ height: "5rem" }}>
          <div className="que_no">
            PTE - Portal Mock Test 7 - Section 2 of 3
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
              </div>{" "}
            </span>
            <span
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}>
              <IoIosListBox style={{ color: "var(--color-brand" }} />
              {getQue} of 16
            </span>
          </div>
        </div>
        <div className="blue_nav"></div>
        {/* hedar */}

        {getQue === 1 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Read the test and answer the multiple-choice question by
                selecting the correct response. Only one response is correct.
              </span>
              <span>
                In the wake of unprecedented school closures resulting from the
                coronavirus pandemic, the College Board is supporting students
                and schools with free, live review sessions and online exams
                taken at home. In a survey of 18,000 students enrolled in A.P.
                classes, 91 per cent indicated they want to complete their
                classes and take their eyams "We want to give every student the
                chance to earn the college credit they've worked hard toward
                throughout the year," says Trevor Packer, senior vice president
                of A.P. and Instruction at the College Board. "That's why we
                quickly set up a process that's simple, secure, and accessible.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                Out of the students surveyed, how many said they want to
                complete their classes and take exams?
              </span>
              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q1opt1"
                    name="options"
                    value={q1opt1}
                    checked={selectedOption === q1opt1}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">Majority</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="less than 50%"
                    name="options"
                    value={q1opt2}
                    checked={selectedOption === q2opt2}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">less than 50%</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q1opt3"
                    name="options"
                    value={q1opt3}
                    checked={selectedOption === q1opt3}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">few of them</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q1opt4"
                    name="options"
                    value={q1opt4}
                    checked={selectedOption === q1opt4}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">exactly half of them</label>
                </div>
              </div>
            </div>
          </div>
        ) : getQue === 2 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Read the test and answer the multiple-choice question by
                selecting the correct response. Only one response is correct.
              </span>
              <span>
                Especially in stressful times, curling up with some positive TV.
                programs can be a much-needed relaxing experience for the whole
                family. UPtv's Good Friday programming includes Noah's Ark at 7
                p.m., followed by two showings of The Passion of the Christ at 9
                p.m. and 11 p.m. Saturday's schedule includes the inspirational
                football-themed movie, Facing the Giants, as well as two
                showings of Heaven is for Real, at noon and 7 p.m.
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>What does Saturday's schedule include?</span>
              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q2opt1"
                    name="options"
                    value={q2opt1}
                    checked={selectedOption === q2opt1}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">
                    Inspirational football-themed movie
                  </label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q2opt2"
                    name="options"
                    value={q2opt2}
                    checked={selectedOption === q2opt2}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">Facing the Giants</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q2opt3"
                    name="options"
                    value={q2opt3}
                    checked={selectedOption === q2opt3}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">The Passion of the Christ</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q2opt4"
                    name="options"
                    value={q2opt4}
                    checked={selectedOption === q2opt4}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">The Healer</label>
                </div>
              </div>
            </div>
          </div>
        ) : getQue === 3 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Read the test and answer the multiple-choice question by
                selecting the correct response. Only one response is correct.
              </span>
              <span>
                Going back to school. whether online in-person. or a
                combination. is a yearly expense that can be especially
                challenging for military families. In 2019 families in the
                United States spent approximately $700 per child on school
                supplies for the school year. according to the National Retail
                Federation. The combination of backpacks, clothes, notebooks.
                and lunchboxes adds un. and many schools also ask parents to
                contribute as much as 4100 per family to help cover the costs of
                classroom materials Many military families find themselves
                hard-pressed to purchase school supplies on top of other
                child-care costs and household needs. Operation Homefront, a
                national non-profit organisation that has been supporting
                strong. stable military families since 2002. has taken on the
                challenge of getting military kids classroom-ready through its
                annual Back-to-Schoo! Brigade program, established in 2008. This
                year, Hunt Heroes Foundation (HHF). a non-profit organisation
                founded bv Hunt military Communities (HMC) the nation's largest
                military housina owner has announced its subport of Operation
                Homefront and its Back-to-School Brigade. HHF will be deliverina
                1850 hacknacks flled with school sunnlies to HMC rommiriire ir
                iba rorrirertel rited tare ir agorra school veer "Oneration
                Homefront ic proud that Hunt Military Communities is belpina
                bring our Back-to-School Bringade proaram to military familios
                in their communitios" cauc Dobin Millor conior diroctor of
                Operation Homefront "With their support we can distribute
                bagpacks filled with school supolies to those who have aiven so
                much on behalf of all Americans and encure that their children
                have the tools for successful start to the school vear."{" "}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                What are the organisations linked to the Back-to-School Brigade
                program?
              </span>
              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="Hunt Heroes Foundation (HHF)"
                    checked={isChecked1}
                    onChange={handleCheckboxChange1}
                  />
                  <label htmlFor="checkbox1">
                    Hunt Heroes Foundation (HHF)
                  </label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="Hut Heroes Foundation (HHF)"
                    checked={isChecked2}
                    onChange={handleCheckboxChange2}
                  />
                  <label htmlFor="checkbox2">Hut Heroes Foundation (HHF)</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="HOperation Homefront"
                    checked={isChecked3}
                    onChange={handleCheckboxChange3}
                  />
                  <label htmlFor="checkbox3">Operation Homefront</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="U.S. Army"
                    checked={isChecked4}
                    onChange={handleCheckboxChange4}
                  />
                  <label htmlFor="checkbox4">U.S. Army</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="HutyHunt Heroes Foundation (HHF)"
                    checked={isChecked5}
                    onChange={handleCheckboxChange5}
                  />
                  <label htmlFor="checkbox5">
                    HutyHunt Heroes Foundation (HHF)
                  </label>
                </div>
              </div>
            </div>
          </div>
        ) : getQue === 4 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Read the test and answer the multiple-choice question by
                selecting the correct response. Only one response is correct.
              </span>
              <span>
                The uncomina school vear will be like nothing teachers.
                students. and families have ever experienced, as the ongoing
                COVID-19 pandemic steers school systems to embrace online
                learning and incorporate it in new wavs. However. school svstems
                across the country are rising to the challenge and staying
                connected to their students with dynamic digital resources, such
                as those from Discovery Education. Since the beginning of the
                pandemic. school systems across the country have invested in
                digital services like Discover Education Eyperience because they
                support students' education at home. in the classroom or
                wherever learnina is taking place Eyperience - Discovery
                Education's fleyible K-12 learnina platform - connects educators
                to a vast collection of compellina. high-quality.
                standards-aligned content, ready-to-use digital lessons and
                professional learning resources. Together these resources give
                educators evervthing the need to facilitate instruction in an
                learning environment and create a lasting educational imnact
                "Discovery Education is committed to keeping students and
                teachers connected to learnina at home or in school" savs Scott
                Kinney Discovery Education's president of K-12 Education "To
                accomplish that we partner with school cuctems to provide
                students and teachers the dinital resources _ surn ac Discoverv
                Education Eyperience - they need for success during this school
                vear and bevond. "In addition to providing school svstems
                digital resources Discovery Education provides teachers with s
                the professional development they need to use new technologies
                and maximise their school district's technology investment.
                Discovery Education has a lona historv as a alobal leader in
                digital curricula that alian with the current standards for K-12
                education: its products include digital textbooks. multimedia
                resources and professional learning for educators{" "}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                Discovery education can help with learning at which places?
              </span>
              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="places without electricity"
                    checked={isChecked6}
                    onChange={handleCheckboxChange6}
                  />
                  <label htmlFor="checkbox6">places without electricity </label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="places without internet"
                    checked={isChecked7}
                    onChange={handleCheckboxChange7}
                  />
                  <label htmlFor="checkbox7">places without internet</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="Home"
                    checked={isChecked8}
                    onChange={handleCheckboxChange8}
                  />
                  <label htmlFor="checkbox8">Home</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="labs"
                    checked={isChecked9}
                    onChange={handleCheckboxChange9}
                  />
                  <label htmlFor="checkbox9">labs</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="School"
                    checked={isChecked10}
                    onChange={handleCheckboxChange10}
                  />
                  <label htmlFor="checkbox10">School </label>
                </div>
              </div>
            </div>
          </div>
        ) : getQue === 5 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
                alignItems: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                The text boxes in the left panel have been placed in random
                order. Restore the original order by dragging the text boxes
                from the left panel to the right panel.
              </span>
            </div>

            <div className="PteMockTest1Main_draglist">
              <div
                className="droppable drag-item"
                style={{ minHeight: "70vh" }}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, "complete")}>
                {taskGroups.complete}
              </div>
              <div
                className="wip drag-container"
                style={{ margin: "5px", minHeight: "70vh" }}
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => {
                  onDrop(e, "wip");
                }}>
                {taskGroups.wip}
              </div>
            </div>
          </div>
        ) : getQue === 6 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
                alignItems: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                The text boxes in the left panel have been placed in random
                order. Restore the original order by dragging the text boxes
                from the left panel to the right panel.
              </span>
            </div>
            <div className="PteMockTest1Main_draglist">
              <div
                className="droppable drag-item"
                style={{ minHeight: "70vh" }}
                onDragOver={(e) => onDragOver2(e)}
                onDrop={(e) => onDrop2(e, "complete2")}>
                {/* <span className="task-header">COMPLETED</span> */}
                {taskGroups2.complete2}
              </div>
              <div
                className="wip drag-container"
                style={{ margin: "5px", minHeight: "70vh" }}
                onDragOver={(e) => onDragOver2(e)}
                onDrop={(e) => {
                  onDrop2(e, "wip2");
                }}>
                {/* <span className="task-header">WIP</span> */}
                {taskGroups2.wip2}
              </div>
            </div>
          </div>
        ) : getQue === 7 ? (
          <span className="PteMockTest1Main_inner">
            <span
              className="que_no"
              style={{
                fontStyle: "italic",
                display: "flex",
                alignSelf: "normal",
              }}>
              In the text below some words are missing. Drag words from the box
              below to the appropriate places in the text. To undo the answer
              choice, drag the words back to the box below the text.
            </span>
            <span style={{ lineHeight: "2" }}>
              <span>Due to Covid-19 pandemic many people are </span>
              <span
                // className="droppable drag-item"
                className="drop_box_design"
                onDragOver={(e) => onDragOver3(e)}
                onDrop={(e) => onDrop3(e, "complete3")}>
                {taskGroups3.complete3}
              </span>
              &nbsp; to cut costs and better manage expenses Some mav view
              financial planners as an unnecessary expense. but in reality. a
              smart relationship with an experienced financial planner will save
              vou money in the short- and long-term and will help you weather
              the{" "}
              <span
                // className="droppable drag-item"
                className="drop_box_design"
                onDragOver={(e) => onDragOver4(e)}
                onDrop={(e) => onDrop4(e, "complete4")}>
                {taskGroups3.complete4}
              </span>
              &nbsp; of a changing economy. CFP Board. a non-profit organization
              dedicated to supporting professional standards in personal
              financial planning,{" "}
              <span
                // className="droppable drag-item"
                className="drop_box_design"
                onDragOver={(e) => onDragOver5(e)}
                onDrop={(e) => onDrop5(e, "complete5")}>
                {taskGroups3.complete5}
              </span>{" "}
              &nbsp; how the guidance a financial planner can &nbsp;{" "}
              <span
                // className="droppable drag-item"
                className="drop_box_design"
                onDragOver={(e) => onDragOver6(e)}
                onDrop={(e) => onDrop6(e, "complete6")}>
                {taskGroups3.complete6}
              </span>{" "}
              &nbsp; goes beyond the surface of stocks and investment advice.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver7(e)}
              onDrop={(e) => {
                onDrop7(e, "wip3");
              }}>
              {/* <span className="task-header">WIP</span> */}
              {taskGroups3.wip3}
            </span>
          </span>
        ) : getQue === 8 ? (
          <div className="PteMockTest1Main_inner">
            <span
              className="que_no"
              style={{
                fontStyle: "italic",
                display: "flex",
                alignSelf: "normal",
              }}>
              In the text below some words are missing. Drag words from the box
              below to the appropriate places in the text. To undo the answer
              choice, drag the words back to the box below the text.
            </span>
            <span style={{ lineHeight: "2" }}>
              During times of{" "}
              <span
                // className="droppable drag-item"
                className="drop_box_design"
                onDragOver={(e) => onDragOver8(e)}
                onDrop={(e) => onDrop8(e, "complete8")}>
                {taskGroups4.complete8}
              </span>{" "}
              &nbsp; making goals and establishing financial plans can
              contribute to your peace of mind. Understanding the laws.
              Financial planners can explain the,
              <span
                // className="droppable drag-item"
                className="drop_box_design"
                onDragOver={(e) => onDragOver9(e)}
                onDrop={(e) => onDrop9(e, "complete9")}>
                {taskGroups4.complete9}
              </span>{" "}
              &nbsp; of the latest legislation on personal finance such as the
              SECURE Act which brought changes to retirement investments. and
              the post-COVID CARES Act. which brought new financial planning,{" "}
              <span
                // className="droppable drag-item"
                className="drop_box_design"
                onDragOver={(e) => onDragOver10(e)}
                onDrop={(e) => onDrop10(e, "complete10")}>
                {taskGroups4.complete10}
              </span>{" "}
              &nbsp; for individuals and small{" "}
              <span
                // className="droppable drag-item"
                className="drop_box_design"
                onDragOver={(e) => onDragOver11(e)}
                onDrop={(e) => onDrop11(e, "complete11")}>
                {taskGroups4.complete11}
              </span>{" "}
              &nbsp; , Optimising technology. CFP© professionals are up on the
              latest tools for managing your money.{" "}
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver12(e)}
              onDrop={(e) => {
                onDrop12(e, "wip4");
              }}>
              {taskGroups4.wip4}
            </span>
          </div>
        ) : getQue === 9 ? (
          <span className="PteMockTest1Main_inner">
            <span
              className="que_no"
              style={{
                fontStyle: "italic",
                display: "flex",
                alignSelf: "normal",
              }}>
              In the text below some words are missing. Drag words from the box
              below to the appropriate places in the text. To undo the answer
              choice, drag the words back to the box below the text.
            </span>
            <span style={{ lineHeight: "2" }}>
              <span>For some older adults retirement can be</span> &nbsp;
              <span
                // className="droppable drag-item"
                className="drop_box_design"
                onDragOver={(e) => onDragOver13(e)}
                onDrop={(e) => onDrop13(e, "complete13")}>
                {taskGroups5.complete13}
              </span>
              &nbsp; , for others it can be energizing. But it should never be
              stressful. But Retirement in the United States can be expensive,
              and even &nbsp;
              <span
                // className="droppable drag-item"
                className="drop_box_design"
                onDragOver={(e) => onDragOver14(e)}
                onDrop={(e) => onDrop14(e, "complete14")}>
                {taskGroups5.complete14}
              </span>
              &nbsp; seniors who have budgeted for this phase of their lives may
              feel squeezed in areas such as housing and health care. COVID-19
              has made things even harder for many. Many older Americans who
              have worked hard all their lives are &nbsp;
              <span
                // className="droppable drag-item"
                className="drop_box_design"
                onDragOver={(e) => onDragOver15(e)}
                onDrop={(e) => onDrop15(e, "complete15")}>
                {taskGroups5.complete15}
              </span>
              &nbsp; that they qualify for a range of public and private &nbsp;{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver16(e)}
                onDrop={(e) => onDrop16(e, "complete16")}>
                {taskGroups5.complete16}
              </span>
              &nbsp; to help pay for food, medicine, utilities, and many more
              essentials that ensure a safe and stable retirement.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver17(e)}
              onDrop={(e) => {
                onDrop17(e, "wip4");
              }}>
              {/* <span className="task-header">WIP</span> */}
              {taskGroups5.wip5}
            </span>
          </span>
        ) : getQue === 10 ? (
          <div className="PteMockTest1Main_inner">
            <span
              className="que_no"
              style={{
                fontStyle: "italic",
                display: "flex",
                alignSelf: "normal",
              }}>
              In the text below some words are missing. Drag words from the box
              below to the appropriate places in the text. To undo the answer
              choice, drag the words back to the box below the text.
            </span>
            <span style={{ lineHeight: "2" }}>
              BenefitsCheckUn.ora also includes information on employment and
              volunteer programs. programs for veterans. property tax relief
              travel and{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver18(e)}
                onDrop={(e) => onDrop18(e, "complete18")}>
                {taskGroups6.complete18} &nbsp;
              </span>
              &nbsp; discounts, and support for families and caregivers. To
              raise &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver19(e)}
                onDrop={(e) => onDrop19(e, "complete19")}>
                {taskGroups6.complete19}
              </span>
              &nbsp;about these valuable benefits. NCOA is introducing an
              educational campaign called Boost Your Budget Week: Find Your
              Benefits to Age Well. Planned for July, the week is a great time
              for older adults to learn about &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver20(e)}
                onDrop={(e) => onDrop20(e, "complete20")}>
                {taskGroups6.complete20}
              </span>
              &nbsp; to boost their budget with benefits. &nbsp;
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver21(e)}
                onDrop={(e) => onDrop21(e, "complete21")}>
                {taskGroups6.complete21}
              </span>{" "}
              older adults can visit NCOA.org to start their free Benefits of
              Check-up.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver22(e)}
              onDrop={(e) => {
                onDrop22(e, "wip6");
              }}>
              {/* <span className="task-header">WIP</span> */}
              {taskGroups6.wip6}
            </span>
          </div>
        ) : getQue === 11 ? (
          <div className="PteMockTest1Main_inner">
            <span
              className="que_no"
              style={{
                fontStyle: "italic",
                display: "flex",
                alignSelf: "normal",
              }}>
              In the text below some words are missing. Drag words from the box
              below to the appropriate places in the text. To undo the answer
              choice, drag the words back to the box below the text.
            </span>
            <span style={{ lineHeight: "2" }}>
              Mr Buckle never married After he had commenced his great{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver23(e)}
                onDrop={(e) => onDrop23(e, "complete23")}>
                {taskGroups7.complete23} &nbsp;
              </span>
              &nbsp;, he found no time to enjoy society. no hours of leisure and
              repose. His whole soul was engaged in the accomplishment of one
              great purpose. and nothing which failed to contribute directly to
              the object nearest his{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver24(e)}
                onDrop={(e) => onDrop24(e, "complete24")}>
                {taskGroups7.complete24} &nbsp;
              </span>{" "}
              received a moment's consideration. He collected around him a{" "}
              {"  "}{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver25(e)}
                onDrop={(e) => onDrop25(e, "complete25")}>
                {taskGroups7.complete25} &nbsp;
              </span>{" "}
              of twenty-two thousand volumes, all choice standard works, in
              Greek, Latin, Spanish, French, German, Italian, and English, with
              all of which languages he was familiar. It was the best private
              collection of{" "}
              <span
                className="drop_box_design"
                onDragOver={(e) => onDragOver26(e)}
                onDrop={(e) => onDrop26(e, "complete26")}>
                {taskGroups7.complete26} &nbsp;
              </span>
              said someone in England.
            </span>
            <span
              className="wip drag-container wip_styles"
              style={{ margin: "5px" }}
              onDragOver={(e) => onDragOver27(e)}
              onDrop={(e) => {
                onDrop27(e, "wip7");
              }}>
              {/* <span className="task-header">WIP</span> */}
              {taskGroups7.wip7}
            </span>
          </div>
        ) : getQue === 12 ? (
          <div className="PteMockTest1Main_inner">
            <span
              className="que_no"
              style={{
                fontStyle: "italic",
                display: "flex",
                alignSelf: "normal",
              }}>
              Below is a text with blanks. Click on each blank a list of choices
              will appear Select the appropriate answer choice for each blank{" "}
            </span>
            <span style={{ lineHeight: "2" }}>
              "Grounds for Murder" by Tara Lush When Lana Lewis' best - and most
              difficult - employee abruptly quits and joins the competition days{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq1sel1(e.target.value);
                  }}>
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              the Sunshine State Barista Championship. her cafe's chances of
              winning are creamed. Lana's normally calm demeanour heats to a
              boil when she runs into the arrogant java slinger. But when he's
              found dead the next morning behind Lana's café, she{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq1sel2(e.target.value);
                  }}>
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              dad a Shih Tzu named Stanley and a new barista{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq1sel3(e.target.value);
                  }}>
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              the prime suspect. With her stoned, hippie v a punk rock
              aesthetic. at her side. Lana prepared to catch the real killer. As
              scandal hangs over her beachside cafe. can Lana{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq1sel4(e.target.value);
                  }}>
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              v her name and win the championship - or will she come to a bitter
              end?
            </span>
          </div>
        ) : getQue === 13 ? (
          <div className="PteMockTest1Main_inner">
            <span
              className="que_no"
              style={{
                fontStyle: "italic",
                display: "flex",
                alignSelf: "normal",
              }}>
              Below is a text with blanks. Click on each blank a list of choices
              will appear Select the appropriate answer choice for each blank{" "}
            </span>
            <span style={{ lineHeight: "2" }}>
              Sometimes heroes come when we least{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq2sel1(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              them lust when we need him most. Franklin Rock has arrived. While
              in college, a series of unexplained visions and events reveal a
              future he could never have imagined. In one extraordinary moment.
              Franklin learns that his life is to be an adventure unlike any
              other. Professor Charles Niemever, a Gandalf-like mentor.{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq2sel2(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              Franklin along his journey to complete his mission: to fix the
              WOrld.LIKe modern-dav Siddhartha who meets Forrest Gumn. Franklin{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq2sel3(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              one fascinatina character after another.{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq2sel4(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              the wav he visits with some of the areatest minds of history -
              Albert Einstein. Martin Luther Kina. Jr. Carl Jung - who assist
              him in his quest.
            </span>
          </div>
        ) : getQue === 14 ? (
          <div className="PteMockTest1Main_inner">
            <span
              className="que_no"
              style={{
                fontStyle: "italic",
                display: "flex",
                alignSelf: "normal",
              }}>
              Below is a text with blanks. Click on each blank a list of choices
              will appear Select the appropriate answer choice for each blank{" "}
            </span>
            <span style={{ lineHeight: "2" }}>
              A{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq3sel1(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              student at a private high school decides he must kill the
              president as an act of environmental protection. Ben Wallace
              didn't set out to become an environmental{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq3sel2(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
                .
              </span>{" "}
              But he becomes outraged by the president's climate-change lies.
              attacks on climate science and destruction of the natural world.
              He decides there is only one solution-a desperate but necessary
              act of environmental activism and social justice to protect his
              generation - Ben must kill POTUS. The{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq3sel3(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              in this historical fiction tighten into a{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq3sel4(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              suspense thriller racing to a shocking conclusion - equal parts
              climate thriller think piece. and spiritual journey.
            </span>
          </div>
        ) : getQue === 15 ? (
          <div className="PteMockTest1Main_inner">
            <span
              className="que_no"
              style={{
                fontStyle: "italic",
                display: "flex",
                alignSelf: "normal",
              }}>
              Below is a text with blanks. Click on each blank a list of choices
              will appear Select the appropriate answer choice for each blank{" "}
            </span>
            <span style={{ lineHeight: "2" }}>
              In 2016. 59-year-old Chris Joseph{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq4sel1(e.target.value);
                  }}>
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              he had third-stage pancreatic cancer. Amid panic and fear. Joseph
              followed the doctor's orders and underwent chemotherapv - a choice
              that was almost a fatal mistake. Months of chemotherapv poisoned
              his bod and nearly destroved his spirit. With no{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq4sel2(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              plan, Joseph fired his oncologist and{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq4sel3(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              on an alternative path of recovery. including both natural and
              Western medicine immunotheranv- one which opened his eves and
              healed him. both physically and spirituallv Life is a Ride
              documents loseph's journey from terror and doubts to redemption.
              love and hope. Joseph's spirit. determination and courage will
              inspire anvone who's{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq4sel4(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              with illness or an other ceonindiv noneless sirliarion
            </span>
          </div>
        ) : getQue === 16 ? (
          <div className="PteMockTest1Main_inner">
            <span
              className="que_no"
              style={{
                fontStyle: "italic",
                display: "flex",
                alignSelf: "normal",
              }}>
              Below is a text with blanks. Click on each blank a list of choices
              will appear Select the appropriate answer choice for each blank{" "}
            </span>
            <span style={{ lineHeight: "2" }}>
              Mr Buckle was{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq5sel1(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
                    }}
                    selected
                    disabled
                    value="">
                    Select
                  </option>
                  <option value="1">Yes</option>
                  <option value="2">No</option>
                  <option value="3">Not Given</option>
                </select>
              </span>{" "}
              in London in the early part of the year 1824 and was consequently
              about thirty-eight ears of age at the time of his death. His
              father was a wealthy gentleman of the metropolis and thoroughly
              educated, and the historian was an only son. Devoted to literature
              himself, it is not surprising that the{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq5sel2(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
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
              spared neither money nor labour to educate his child. He did not,
              however. follow the usual course: he did not hamper the vouthful
              mind by the narrow routine of the Enalish academy nor did he make
              him a Master of Arts at Oxford or Cambridae His early education
              was supervised by his father directly, but afterwards, private
              teachers were{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq5sel3(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
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
              But Mr Buckle was by nature a close student, and much that he
              possessed he acquired without a tutor, as his energetic,
              self-reliant nature rendered him incapable of ever seeing
              insurmountable difficulties before him. Bv this means. he became
              what the students of Oxford rarelv are. both learned and liberal.
              As he minaled freelv with the people durina his vouth. a
              democratic svmpathy entwined itself with his education and is
              manifested in every page of his{" "}
              <span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setq5sel4(e.target.value);
                  }}>
                  <option
                    onChange={(e) => {
                      // SetAns22(e.target.value);
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
          </div>
        ) : null}
      </div>
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
              addpte2mainapi();
            }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PteMockTest2Main;
