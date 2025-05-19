import { Line } from "rc-progress";
import React, { useEffect, useRef, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FaClock } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
import images from "../../constants/images";
import axios from "axios";
import {
  ACCEPT_HEADER,
  add_curriculum_listening_home,
} from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { useNavigate } from "react-router";
import Notification from "../../utils/Notification";

const CurrWeekListningHomeworkTest = () => {
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
  const [sliderValue, setSliderValue] = useState(50);

  const [highlightedWords, setHighlightedWords] = useState([]);
  const [highlightedWords2, setHighlightedWords2] = useState([]);
  const [highlightedWords3, setHighlightedWords3] = useState([]);
  const [highlightedWords4, setHighlightedWords4] = useState([]);
  const [highlightedWords5, setHighlightedWords5] = useState([]);
  const [highlightedWords6, setHighlightedWords6] = useState([]);
  const [highlightedWords7, setHighlightedWords7] = useState([]);
  const [highlightedWords8, setHighlightedWords8] = useState([]);
  const [highlightedWords9, setHighlightedWords9] = useState([]);
  const [highlightedWords10, setHighlightedWords10] = useState([]);
  const [audioshowstart, setaudioshowstart] = useState(false);

  const [showControls, setShowControls] = useState(true);
  const [getautoplay, setautoplay] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const [getstartaudio, setstartaudio] = useState(false);
  const [adiotime, setaudiotime] = useState(0);

  const audioRef = useRef(null);

  const handleButtonSubmitClick = () => {
    const result = window.confirm("Are you sure you want to exit the test?");

    if (result) {
      navigate("/curriculumPage");
    } else {
      // console.log("Action canceled");
    }
  };
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const handleClick = (word) => {
    const newHighlightedWords = [...highlightedWords];
    const index = newHighlightedWords.indexOf(word);

    if (index !== -1) {
      newHighlightedWords.splice(index, 1); // Remove if already highlighted
    } else {
      newHighlightedWords.push(word); // Add if not highlighted
    }

    setHighlightedWords(newHighlightedWords);
  };

  const handleClick2 = (word) => {
    const newHighlightedWords2 = [...highlightedWords2];
    const index = newHighlightedWords2.indexOf(word);

    if (index !== -1) {
      newHighlightedWords2.splice(index, 1); // Remove if already highlighted
    } else {
      newHighlightedWords2.push(word); // Add if not highlighted
    }

    setHighlightedWords2(newHighlightedWords2);
  };
  const handleClick3 = (word) => {
    const newHighlightedWords3 = [...highlightedWords3];
    const index = newHighlightedWords3.indexOf(word);

    if (index !== -1) {
      newHighlightedWords3.splice(index, 1); // Remove if already highlighted
    } else {
      newHighlightedWords3.push(word); // Add if not highlighted
    }

    setHighlightedWords3(newHighlightedWords3);
  };
  const handleClick4 = (word) => {
    const newHighlightedWords4 = [...highlightedWords4];
    const index = newHighlightedWords4.indexOf(word);

    if (index !== -1) {
      newHighlightedWords4.splice(index, 1); // Remove if already highlighted
    } else {
      newHighlightedWords4.push(word); // Add if not highlighted
    }

    setHighlightedWords4(newHighlightedWords4);
  };
  const handleClick5 = (word) => {
    const newHighlightedWords5 = [...highlightedWords4];
    const index = newHighlightedWords5.indexOf(word);

    if (index !== -1) {
      newHighlightedWords5.splice(index, 1); // Remove if already highlighted
    } else {
      newHighlightedWords5.push(word); // Add if not highlighted
    }

    setHighlightedWords5(newHighlightedWords5);
  };
  const handleClick6 = (word) => {
    const newHighlightedWords6 = [...highlightedWords6];
    const index = newHighlightedWords6.indexOf(word);

    if (index !== -1) {
      newHighlightedWords6.splice(index, 1); // Remove if already highlighted
    } else {
      newHighlightedWords6.push(word); // Add if not highlighted
    }

    setHighlightedWords6(newHighlightedWords6);
  };
  const handleClick7 = (word) => {
    const newHighlightedWords7 = [...highlightedWords7];
    const index = newHighlightedWords7.indexOf(word);

    if (index !== -1) {
      newHighlightedWords7.splice(index, 1); // Remove if already highlighted
    } else {
      newHighlightedWords7.push(word); // Add if not highlighted
    }

    setHighlightedWords7(newHighlightedWords7);
  };
  const handleClick8 = (word) => {
    const newHighlightedWords8 = [...highlightedWords8];
    const index = newHighlightedWords8.indexOf(word);

    if (index !== -1) {
      newHighlightedWords8.splice(index, 1); // Remove if already highlighted
    } else {
      newHighlightedWords8.push(word); // Add if not highlighted
    }

    setHighlightedWords8(newHighlightedWords8);
  };
  const handleClick10 = (word) => {
    const newHighlightedWords10 = [...highlightedWords10];
    const index = newHighlightedWords10.indexOf(word);

    if (index !== -1) {
      newHighlightedWords10.splice(index, 1); // Remove if already highlighted
    } else {
      newHighlightedWords10.push(word); // Add if not highlighted
    }

    setHighlightedWords10(newHighlightedWords10);
  };
  const handleClick9 = (word) => {
    const newHighlightedWords9 = [...highlightedWords9];
    const index = newHighlightedWords9.indexOf(word);

    if (index !== -1) {
      newHighlightedWords9.splice(index, 1); // Remove if already highlighted
    } else {
      newHighlightedWords9.push(word); // Add if not highlighted
    }

    setHighlightedWords9(newHighlightedWords9);
  };

  const paragraphText =
    "The generator's output is heightened by optimisation of its bar front configuration, including the hollow-to-solid-strand ratio.The Spring pole stator core support structure isolates the vibration of the stator core to minimise vibration spread to the foundation. Stator winding support features top chock and ripple springs to secure stator bars in the slot and eliminate bar vibration. This maximises insulation life and decreases maintenance requirements.";

  const paragraphText2 =
    "If you are planning or running a occupation on e-commerce sites, you must ensure that your product photos are equipped for e-commerce sites. Because you need to advertise your products and reach your customers remote, pack-shot photography is one of the significant ways to display your outcomes one-commerce sites.";

  const paragraphText3 =
    "Finally, you may consider the overall overhaul of the fencing company you choose. It is essential to consider their focus on your personal needs as a customer. Many attempts to work with you individually to make the most instructed decisions about your fencing";
  const paragraphText4 =
    "The remote workforce management hardware displays real-time reports for all employees in one system. It helps optimise the effective labour price, which is massive support for organisations to manage their business exactly with high productivity. Innovative is recommended as a respected and trusted sottware provider";

  const paragraphText5 =
    "Know your design - baseball caps and socks come in all contrasting formats. Some of them have logos of their favourite baseball teams. Others have colourful designs. A hat with your favourite sports team logo would look nice. If you prefer a more enlightened design, you may want to try those that have small, subdued-coloured caps and hosiery. The classic pinstripe design is a popular option that many executives and aspiring players preter";
  const paragraphText6 =
    "The employee experience survey is all about knowing how an staff feels about the organisation from the day of joining. In such questionnaires, questions are primarily based on the organisation. Employees respond to these questions based on their happening in the organisation. The result from this data benefits companies in deciding their employee satisfaction strategies to ensure that not a single employee treats their work as a burden & gives needy performance.";
  const paragraphText7 =
    "When you drive around town or cross country, your car immediately breaks down; it's easy to see people slowing down to ask what is wrong with the automobiles and whatever assistance they can offer. That is not the case when it comes to trucks. The poor feeding culture of most hiring truck companies is a title for another time. When a vehicle breaks downwards in the middle of the road, you must find a truck repair specialist.";
  const paragraphText8 =
    "Going fast among the clouds and moving thousands of kilometres within following is the speciality of the pilot. Anticipated to increasing opportunities. attractive salaries, and more smooth offered, the number of students who want to take pilot as a career every day. In this situation. let us focus on the chance provided by the government in taking oft the pilot as a career.";
  const paragraphText9 =
    "Expanding on our territories of skill has nonstop been why we've worked to accomplish this. We will surely progress to get a top-of-the-line siding and drywall resolution. While you need steadfastness in your management and a Houston creation endeavour, you may depend upon, at that point, the necessities in the local elective that has continually advanced to fulfil your demands can be just the best possible name to make for the top-notch results.";
  const paragraphText10 =
    "In conclusion, implicit and explicit sex bias is a significant cause of the massive gap in social, economic, and political attainment betwixt men and women. Although much work has been devoted to allowing women in various spheres of life, continual personal and institutional efforts are essential for women's social, economic/, and political actualisation. Removing gender bias will allow women to thrive and influence the globe in the best way.";

  const initialOptions = [
    "It's no surprise that many older adults struggle to keep track of their medications. According to a 2019 survey by the Kaiser Family Foundation the maiority of adults 65 and older report takina four or more prescription druas.",
    "Medication management often feels like a high-stakes balancing act. With multiple visits to doctors and specialists. a varietv of dosane instructions and refill schedules that vary from prescrintion to prescription. it's a challenge to keen medications organised",
    "Having the right plan in place to safely manage prescription and  rer-tre-crunter rrs rar rain aloriar re retertial bazards of medication management",
    "While many older adults want to remain independent and manage their medications without a plan they are putting themselves at risk. Medication mismanagement is among the most serious health threats facina seniors",
    "Mistakes can often lead to severe drug interactions or forced placement into a long-term care facility",
  ];
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
  const [options, setOptions] = useState(initialOptions);
  const [draggedItem1, setDraggedItem1] = useState(null);
  const [draggedItem2, setDraggedItem2] = useState(null);
  const [draggedItem3, setDraggedItem3] = useState(null);

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

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setaudioshowstart(true);
    }, 5000);
  }, [getQue]);

  const NextButtuon = () => {
    setaudioshowstart(false);
    setQue(getQue + 1);
    setSeconds(5);
  };

  const handleDrop = (event, questionNumber) => {
    event.preventDefault();
    const droppedItem = event.dataTransfer.getData("text/plain");
    switch (questionNumber) {
      case 1:
        setDraggedItem1(droppedItem);
        // SetAns14(droppedItem);
        break;
      case 2:
        setDraggedItem2(droppedItem);
        // SetAns15(droppedItem);
        break;
      case 3:
        setDraggedItem3(droppedItem);
        // SetAns16(droppedItem);
        break;
      default:
        break;
    }

    // Remove the dropped item from the options list
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option !== droppedItem)
    );
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

  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);
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
  
  const handleLoadedMetadata = () => {
    // Get the controls element and hide download and speed controls
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

  const AddCurriculamListeningHomeMain = () => {
    if (getQue == 1) {
      AddCurriculamListeningApi();
    } else if (getQue == 2) {
      AddCurriculamListeningApi2();
    } else if (getQue == 3) {
      AddCurriculamListeningApi3();
    } else if (getQue == 4) {
      AddCurriculamListeningApi4();
    } else if (getQue == 5) {
      AddCurriculamListeningApi5();
    } else if (getQue == 6) {
      AddCurriculamListeningApi6();
    } else if (getQue == 7) {
      AddCurriculamListeningApi7();
    } else if (getQue == 8) {
      AddCurriculamListeningApi8();
    } else if (getQue == 9) {
      AddCurriculamListeningApi9();
    } else if (getQue == 10) {
      AddCurriculamListeningApi10();
    }
  };

  const AddCurriculamListeningApi = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_listening_home_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_1", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords.length; i++) {
      await formdata.append("answer_2[" + i + "]", highlightedWords[i]);
    }

    axios
      .post(add_curriculum_listening_home, formdata, {
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
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddCurriculamListeningApi2 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_listening_home_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_3", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords2.length; i++) {
      await formdata.append("answer_4[" + i + "]", highlightedWords2[i]);
    }

    axios
      .post(add_curriculum_listening_home, formdata, {
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
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddCurriculamListeningApi3 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_listening_home_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_5", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords3.length; i++) {
      await formdata.append("answer_6[" + i + "]", highlightedWords3[i]);
    }

    axios
      .post(add_curriculum_listening_home, formdata, {
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
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddCurriculamListeningApi4 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_listening_home_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_7", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords4.length; i++) {
      await formdata.append("answer_8[" + i + "]", highlightedWords4[i]);
    }

    axios
      .post(add_curriculum_listening_home, formdata, {
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
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddCurriculamListeningApi5 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_listening_home_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_9", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords5.length; i++) {
      await formdata.append("answer_10[" + i + "]", highlightedWords5[i]);
    }

    axios
      .post(add_curriculum_listening_home, formdata, {
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
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddCurriculamListeningApi6 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_listening_home_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_11", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords6.length; i++) {
      await formdata.append("answer_12[" + i + "]", highlightedWords6[i]);
    }

    axios
      .post(add_curriculum_listening_home, formdata, {
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
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddCurriculamListeningApi7 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_listening_home_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_13", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords7.length; i++) {
      await formdata.append("answer_14[" + i + "]", highlightedWords7[i]);
    }

    axios
      .post(add_curriculum_listening_home, formdata, {
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
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddCurriculamListeningApi8 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_listening_home_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_15", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords8.length; i++) {
      await formdata.append("answer_16[" + i + "]", highlightedWords8[i]);
    }

    axios
      .post(add_curriculum_listening_home, formdata, {
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
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddCurriculamListeningApi9 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_listening_home_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_17", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords9.length; i++) {
      await formdata.append("answer_18[" + i + "]", highlightedWords9[i]);
    }

    axios
      .post(add_curriculum_listening_home, formdata, {
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
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddCurriculamListeningApi10 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_listening_home_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_19", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords10.length; i++) {
      await formdata.append("answer_20[" + i + "]", highlightedWords10[i]);
    }

    axios
      .post(add_curriculum_listening_home, formdata, {
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
          navigate("/CurriculumPage");

          // setQue(getQue + 1);
          Notification("success", "Success!", res.data.message);
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  return (
    <div className="PteMockTest1Main_main">
      <div>
        {/* hedar */}
        <div className="PteMockTest1Main_nav" style={{ height: "5rem" }}>
          <div className="que_no">
            Listening- Highlight Incorrect Words - (H.W -4 D -3) - Section 1 of
            1
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
              {getQue} of 10
            </span>
          </div>
        </div>
        <div className="blue_nav"></div>

        {audioshowstart === true ? (
          <>
            <ReactAudioPlayer
              style={{ display: "none" }}
              ref={audioRef}
              src={images.mp3sample}
              controls={showControls}
              onLoadedMetadata={handleLoadedMetadata}
              // autoPlay={getstartaudio == true ? true : false}
              autoPlay={true}
            />
          </>
        ) : (
          <></>
        )}
        {/* hedar */}
        {getQue === 1 ? (
          <div className="PteMockTest1Main_inner curr_week_fourth_test">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                {/* <div className="que_no">Beginning in {seconds} seconds...</div> */}
                {seconds > 5 ? (
                  ""
                ) : (
                  <>
                    {" "}
                    <div className="que_no">
                      Beginning in {seconds} seconds...
                    </div>
                  </>
                )}
                {/* {seconds === 0 ? <></>} */}
                {/* <div>
                   <label htmlFor="slider">Slider Value: {sliderValue}</label>  
                  <input
                    type="range"
                    id="slider"
                    name="slider"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </div>*/}

                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    // percent={attemptcount}
                    percent={10}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              </div>

              <span>
                {paragraphText.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={
                      highlightedWords.includes(word) ? "highlighted" : ""
                    }
                    onClick={() => handleClick(word)}>
                    {word}{" "}
                  </span>
                ))}
              </span>
            </div>
          </div>
        ) : getQue === 2 ? (
          <div className="PteMockTest1Main_inner curr_week_fourth_test">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>

                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    // percent={attemptcount}
                    percent={10}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              </div>

              <span>
                {paragraphText2.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={
                      highlightedWords2.includes(word) ? "highlighted" : ""
                    }
                    onClick={() => handleClick2(word)}>
                    {word}{" "}
                  </span>
                ))}
              </span>
            </div>
          </div>
        ) : getQue === 3 ? (
          <div className="PteMockTest1Main_inner curr_week_fourth_test">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    // percent={attemptcount}
                    percent={10}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              </div>

              <span>
                {paragraphText3.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={
                      highlightedWords3.includes(word) ? "highlighted" : ""
                    }
                    onClick={() => handleClick3(word)}>
                    {word}{" "}
                  </span>
                ))}
              </span>
            </div>
          </div>
        ) : getQue === 4 ? (
          <div className="PteMockTest1Main_inner curr_week_fourth_test">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    // percent={attemptcount}
                    percent={10}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              </div>

              <span>
                {paragraphText4.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={
                      highlightedWords4.includes(word) ? "highlighted" : ""
                    }
                    onClick={() => handleClick4(word)}>
                    {word}{" "}
                  </span>
                ))}
              </span>
            </div>
          </div>
        ) : getQue === 5 ? (
          <div className="PteMockTest1Main_inner curr_week_fourth_test">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>

                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    // percent={attemptcount}
                    percent={10}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              </div>

              <span>
                {paragraphText5.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={
                      highlightedWords5.includes(word) ? "highlighted" : ""
                    }
                    onClick={() => handleClick5(word)}>
                    {word}{" "}
                  </span>
                ))}
              </span>
            </div>
          </div>
        ) : getQue === 6 ? (
          <div className="PteMockTest1Main_inner curr_week_fourth_test">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>

                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    // percent={attemptcount}
                    percent={10}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              </div>

              <span>
                {paragraphText6.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={
                      highlightedWords6.includes(word) ? "highlighted" : ""
                    }
                    onClick={() => handleClick6(word)}>
                    {word}{" "}
                  </span>
                ))}
              </span>
            </div>
          </div>
        ) : getQue === 7 ? (
          <div className="PteMockTest1Main_inner curr_week_fourth_test">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>

                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    // percent={attemptcount}
                    percent={10}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              </div>

              <span>
                {paragraphText7.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={
                      highlightedWords7.includes(word) ? "highlighted" : ""
                    }
                    onClick={() => handleClick7(word)}>
                    {word}{" "}
                  </span>
                ))}
              </span>
            </div>
          </div>
        ) : getQue === 8 ? (
          <div className="PteMockTest1Main_inner curr_week_fourth_test">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>

                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    // percent={attemptcount}
                    percent={10}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              </div>

              <span>
                {paragraphText8.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={
                      highlightedWords8.includes(word) ? "highlighted" : ""
                    }
                    onClick={() => handleClick8(word)}>
                    {word}{" "}
                  </span>
                ))}
              </span>
            </div>
          </div>
        ) : getQue === 9 ? (
          <div className="PteMockTest1Main_inner curr_week_fourth_test">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>

                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    // percent={attemptcount}
                    percent={10}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              </div>

              <span>
                {paragraphText9.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={
                      highlightedWords9.includes(word) ? "highlighted" : ""
                    }
                    onClick={() => handleClick9(word)}>
                    {word}{" "}
                  </span>
                ))}
              </span>
            </div>
          </div>
        ) : getQue === 10 ? (
          <div className="PteMockTest1Main_inner curr_week_fourth_test">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>

                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    // percent={attemptcount}
                    percent={10}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              </div>

              <span>
                {paragraphText10.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={
                      highlightedWords10.includes(word) ? "highlighted" : ""
                    }
                    onClick={() => handleClick10(word)}>
                    {word}{" "}
                  </span>
                ))}
              </span>
            </div>
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
              NextButtuon();
              AddCurriculamListeningHomeMain();
            }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrWeekListningHomeworkTest;
