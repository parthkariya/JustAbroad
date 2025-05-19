import { Line } from "rc-progress";
import React, { useEffect, useRef, useState } from "react";
import "./CurrWeekSecClassTestFourth.css";
import { FaClock } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
import ReactAudioPlayer from "react-audio-player";
import images from "../../constants/images";
import { ACCEPT_HEADER, add_curriculum_listening } from "../../utils/Constant";
import axios from "axios";
import { useAuthContext } from "../../context/auth_context";
import { useNavigate } from "react-router";
import Notification from "../../utils/Notification";

const CurrWeekSecClassTestFourth = () => {
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

  const [q1opt1, setq1opt1] = useState("1");
  const [q1opt2, setq1opt2] = useState("2");
  const [q1opt3, setq1opt3] = useState("3");

  const [q2opt1, setq2opt1] = useState("1");
  const [q2opt2, setq2opt2] = useState("2");
  const [q2opt3, setq2opt3] = useState("3");

  const [q3opt1, setq3opt1] = useState("1");
  const [q3opt2, setq3opt2] = useState("2");
  const [q3opt3, setq3opt3] = useState("3");

  const [q4opt1, setq4opt1] = useState("1");
  const [q4opt2, setq4opt2] = useState("2");

  const [q5opt1, setq5opt1] = useState("1");
  const [q5opt2, setq5opt2] = useState("2");

  const [q6opt1, setq6opt1] = useState("1");
  const [q6opt2, setq6opt2] = useState("2");
  const [q6opt3, setq6opt3] = useState("3");
  const [q6opt4, setq6opt4] = useState("4");

  const [q7opt1, setq7opt1] = useState("1");
  const [q7opt2, setq7opt2] = useState("2");
  const [q7opt3, setq7opt3] = useState("3");
  const [q7opt4, setq7opt4] = useState("4");

  const [q8opt1, setq8opt1] = useState("1");
  const [q8opt2, setq8opt2] = useState("2");
  const [q8opt3, setq8opt3] = useState("3");
  const [q8opt4, setq8opt4] = useState("4");

  const [q9opt1, setq9opt1] = useState("1");
  const [q9opt2, setq9opt2] = useState("2");
  const [q9opt3, setq9opt3] = useState("3");
  const [q9opt4, setq9opt4] = useState("4");

  const [q10opt1, setq10opt1] = useState("1");
  const [q10opt2, setq10opt2] = useState("2");
  const [q10opt3, setq10opt3] = useState("3");
  const [q10opt4, setq10opt4] = useState("4");

  const [isChecked10, setChecked10] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  const [showControls, setShowControls] = useState(true);
  const [getautoplay, setautoplay] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const [getstartaudio, setstartaudio] = useState(false);
  const [adiotime, setaudiotime] = useState(0);
  const [audioshowstart, setaudioshowstart] = useState(false);

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const totalTime = 40;

  const audioRef = useRef();

  const [seconds, setSeconds] = useState(5);

  const [audioFile, setAudioFile] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    const recordingTimer = setTimeout(() => {
      // setautoplay(true);
      startAudio();
    }, 5000);

    return () => clearTimeout(recordingTimer);
  }, [getQue]);

  const startAudio = () => {
    setstartaudio(true);
     setaudiotime(0); // Reset recorded time
  };

  const stopAudio = () => {
    // setautoplay(false);
    setstartaudio(false);
   };

  useEffect(() => {
    let timer;
    if (getstartaudio) {
      timer = setInterval(() => {
        setaudiotime((prevTime) => prevTime + 1);
        if (adiotime >= totalTime) {
          stopAudio();
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [getstartaudio, adiotime, getQue]);

  useEffect(() => {
    setTimeout(() => {
      setaudioshowstart(true);
    }, 5000);
  }, [getQue]);

  const percent = (adiotime / totalTime) * 100;

  // const handleAudioData = (blob) => {
  //   setAudioBlob(blob);
  // };

  const AddCurriculamListeningApiMain = () => {
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
    formdata.append("curriculum_listening_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_1", blob, "audioFileName.mp3");
    if (selectedOption === q1opt1) {
      formdata.append("answer_2", q1opt1);
    } else if (selectedOption === q1opt2) {
      formdata.append("answer_2", q1opt2);
    } else if (selectedOption === q1opt3) {
      formdata.append("answer_2", q1opt3);
    } else {
    }

    axios
      .post(add_curriculum_listening, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          // SetLogout();
          // navigate("/");
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
    formdata.append("curriculum_listening_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_3", blob, "audioFileName.mp3");
    if (selectedOption === q2opt1) {
      formdata.append("answer_4", q2opt1);
    } else if (selectedOption === q2opt2) {
      formdata.append("answer_4", q2opt2);
    } else if (selectedOption === q1opt3) {
      formdata.append("answer_4", q2opt3);
    } else {
    }

    axios
      .post(add_curriculum_listening, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          // SetLogout();
          // navigate("/");
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
    formdata.append("curriculum_listening_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_5", blob, "audioFileName.mp3");
    if (selectedOption === q3opt1) {
      formdata.append("answer_6", q3opt1);
    } else if (selectedOption === q3opt2) {
      formdata.append("answer_6", q3opt2);
    } else if (selectedOption === q3opt3) {
      formdata.append("answer_6", q3opt3);
    } else {
    }

    axios
      .post(add_curriculum_listening, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          // SetLogout();
          // navigate("/");
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
    formdata.append("curriculum_listening_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_7", blob, "audioFileName.mp3");
    if (selectedOption === q3opt1) {
      formdata.append("answer_8", q4opt1);
    } else if (selectedOption === q4opt2) {
      formdata.append("answer_8", q4opt2);
    } else {
    }

    axios
      .post(add_curriculum_listening, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          // SetLogout();
          // navigate("/");
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
    formdata.append("curriculum_listening_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_9", blob, "audioFileName.mp3");
    if (selectedOption === q5opt1) {
      formdata.append("answer_10", q5opt1);
    } else if (selectedOption === q5opt2) {
      formdata.append("answer_10", q5opt2);
    } else {
    }

    axios
      .post(add_curriculum_listening, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          // SetLogout();
          // navigate("/");
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
    formdata.append("curriculum_listening_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_11", blob, "audioFileName.mp3");
    if (selectedOption === q6opt1) {
      formdata.append("answer_12", q6opt1);
    } else if (selectedOption === q6opt2) {
      formdata.append("answer_12", q6opt2);
    } else if (selectedOption === q6opt3) {
      formdata.append("answer_12", q6opt3);
    } else if (selectedOption === q6opt4) {
      formdata.append("answer_12", q6opt4);
    } else {
    }

    axios
      .post(add_curriculum_listening, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          // SetLogout();
          // navigate("/");
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

  const handleButtonSubmitClick = () => {
    const result = window.confirm("Are you sure you want to exit the test?");

    if (result) {
      navigate("/curriculumPage");
    } else {
      // console.log("Action canceled");
    }
  };
  const AddCurriculamListeningApi7 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_listening_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_13", blob, "audioFileName.mp3");
    if (selectedOption === q7opt1) {
      formdata.append("answer_14", q7opt1);
    } else if (selectedOption === q7opt2) {
      formdata.append("answer_14", q7opt2);
    } else if (selectedOption === q7opt3) {
      formdata.append("answer_14", q7opt3);
    } else if (selectedOption === q7opt4) {
      formdata.append("answer_14", q7opt4);
    } else {
    }

    axios
      .post(add_curriculum_listening, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          // SetLogout();
          // navigate("/");
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
    formdata.append("curriculum_listening_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_15", blob, "audioFileName.mp3");
    if (selectedOption === q8opt1) {
      formdata.append("answer_16", q8opt1);
    } else if (selectedOption === q8opt2) {
      formdata.append("answer_16", q8opt2);
    } else if (selectedOption === q8opt3) {
      formdata.append("answer_16", q8opt3);
    } else if (selectedOption === q8opt4) {
      formdata.append("answer_16", q8opt4);
    } else {
    }

    axios
      .post(add_curriculum_listening, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          // SetLogout();
          // navigate("/");
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
    formdata.append("curriculum_listening_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_17", blob, "audioFileName.mp3");
    if (selectedOption === q9opt1) {
      formdata.append("answer_18", q9opt1);
    } else if (selectedOption === q9opt2) {
      formdata.append("answer_18", q9opt2);
    } else if (selectedOption === q9opt3) {
      formdata.append("answer_18", q9opt3);
    } else if (selectedOption === q9opt4) {
      formdata.append("answer_18", q9opt4);
    } else {
    }

    axios
      .post(add_curriculum_listening, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          // SetLogout();
          // navigate("/");
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
    formdata.append("curriculum_listening_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_19", blob, "audioFileName.mp3");
    if (selectedOption === q10opt1) {
      formdata.append("answer_20", q10opt1);
    } else if (selectedOption === q10opt2) {
      formdata.append("answer_20", q10opt2);
    } else if (selectedOption === q10opt3) {
      formdata.append("answer_20", q10opt3);
    } else if (selectedOption === q10opt4) {
      formdata.append("answer_20", q10opt4);
    } else {
    }

    axios
      .post(add_curriculum_listening, formdata, {
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
          navigate("/CurriculumPage");
          Notification("success", "Success!", res.data.message);
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

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
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(intervalId);
          // You can add additional logic here when the timer reaches 0
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
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

  const NextButtuon = () => {
    setaudioshowstart(false);
    setSeconds(5);
    // setQue(getQue + 1);
  };

  return (
    <div className="PteMockTest1Main_main">
      <div>
        {/* hedar */}
        <div className="PteMockTest1Main_nav" style={{ height: "5rem" }}>
          <div className="que_no">
            Listening-Height Correct Summery and Select Missing Word- (C.W -4 D
            ) <br /> -Section 1 of 1
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
                LECTURE DEMONSTRATION
              </span>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">
                  Audio will play in {seconds} seconds...
                </div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                {/*  <div>
                    <label htmlFor="slider">Slider Value: {sliderValue}</label>  
                    type="range"
                    id="slider"
                    name="slider"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                  />
                </div>*/}

                {/* <div
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
                </div> */}
              </div>

              {/* <span>
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
              </span> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>
              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q1opt1"
                    name="options"
                    value={q1opt1}
                    onChange={handleOptionChange}
                    checked={selectedOption === q1opt1}
                  />
                  <label htmlFor="option1">
                    Mumbai's Orchid International School is well-known for
                    imparting practical knowledge and accepts students from
                    India.
                  </label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q1opt2"
                    name="options"
                    value={q1opt2}
                    checked={selectedOption === q1opt2}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">
                    Orchid International School, Mumbai, is renowned for sharing
                    practical knowledge and welcoming students worldwide.
                  </label>
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
                  <label htmlFor="option1">
                    Orchid International School, Mumbai, is renowned for
                    distributing information and welcoming students worldwide.
                  </label>
                </div>

                {/* <button
                  className="btn"
                  onClick={() => {
                    AddCurriculamListeningApi();
                  }}>
                  aaa
                </button> */}
              </div>
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
                LECTURE DEMONSTRATION
              </span>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                {/* <div
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
                </div> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>
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
                    The immune system can be bolstered by Vitamins C and D found
                    in fruits and vegetables; adding garlic to soups, salads,
                    and sauces increase immunity.
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
                  <label htmlFor="option1">
                    The immune system can be bolstered by Vitamins C and E found
                    in fruits and vegetables; also, Onion can boost immunity
                    when added to soups, salads, and sauces.
                  </label>
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
                  <label htmlFor="option1">
                    The immune system can be strengthened by Vitamins C and E
                    found in fruits and vegetables; also, adding garlic to soups
                    has the same effect.
                  </label>
                </div>
              </div>
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
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                {/* <div
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
                </div> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>
              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q3opt1"
                    name="options"
                    value={q3opt1}
                    checked={selectedOption === q3opt1}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">
                    Customer satisfaction can be met if an organisation's
                    employees deliver good services, which depends on the
                    environment where these employees thrive.
                  </label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q3opt2"
                    name="options"
                    value="q3opt2"
                    checked={selectedOption === "q3opt2"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">
                    Customer satisfaction can only be met if an organisation's
                    employees deliver good services, which solely depends on the
                    environment where these employees thrive.
                  </label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q3opt3"
                    name="options"
                    value={q3opt3}
                    checked={selectedOption === q3opt3}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">
                    Customer satisfaction can only be met if employees of an
                    organisation are talented enough to carry on their work of
                    providing services to customers.
                  </label>
                </div>
              </div>
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
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                {/* <div
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
                </div> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>
              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q4opt1"
                    name="options"
                    value={q4opt1}
                    checked={selectedOption === q4opt1}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">
                    Children should be bought toys not only considering the
                    suggestive-age labels on them but also their habits and the
                    ones which are easy to control.
                  </label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q4opt2"
                    name="options"
                    value={q4opt2}
                    checked={selectedOption === q4opt2}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">
                    Children should be bought toys that are easy to control, not
                    only considering their habits.
                  </label>
                </div>
              </div>
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
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                {/* <div
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
                </div> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>
              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q5opt1"
                    name="options"
                    value={q5opt1}
                    checked={selectedOption === q5opt1}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">
                    Smartphones are upgraded versions of mobile phones that lack
                    extra functions such as internet access, running social
                    networking programmes, etc., in contrast to standard cell
                    phones.
                  </label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q5opt2"
                    name="options"
                    value={q5opt2}
                    checked={selectedOption === q5opt2}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">
                    Smartphones are not advanced versions of cell phones because
                    they do not offer additional functions such as internet
                    access, social networking application functionality, etc.,
                    as opposed to ordinary cell phones.
                  </label>
                </div>
              </div>
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
                LECTURE DEMONSTRATION
              </span>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                {/* <div
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
                </div> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q6opt1"
                    name="options"
                    value={q6opt1}
                    checked={selectedOption === q6opt1}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">Issue</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q6opt2"
                    name="options"
                    value={q6opt2}
                    checked={selectedOption === q6opt2}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">Problems</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q6opt3"
                    name="options"
                    value={q6opt3}
                    checked={selectedOption === q6opt3}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">Products</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q6opt4"
                    name="options"
                    value={q6opt4}
                    checked={selectedOption === q6opt4}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">humans</label>
                </div>
              </div>
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
                LECTURE DEMONSTRATION
              </span>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                {/* <div
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
                </div> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q7opt1"
                    name="options"
                    value={q7opt1}
                    checked={selectedOption === q7opt1}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">batter</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q7opt2"
                    name="options"
                    value={q7opt2}
                    checked={selectedOption === q7opt2}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">sites</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q7opt3"
                    name="options"
                    value={q7opt3}
                    checked={selectedOption === q7opt3}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">problems</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q7opt4"
                    name="options"
                    value={q7opt4}
                    checked={selectedOption === q7opt4}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">reasons</label>
                </div>
              </div>
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
                LECTURE DEMONSTRATION
              </span>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                {/* <div
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
                </div> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q8opt1"
                    name="options"
                    value={q8opt1}
                    checked={selectedOption === q8opt1}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">current</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q8opt2"
                    name="options"
                    value={q8opt2}
                    checked={selectedOption === q8opt2}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">issue</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q8opt3"
                    name="options"
                    value={q8opt3}
                    checked={selectedOption === q8opt3}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">voltage</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q8opt4"
                    name="options"
                    value={q8opt4}
                    checked={selectedOption === q8opt4}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">balance</label>
                </div>
              </div>
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
                LECTURE DEMONSTRATION
              </span>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                {/* <div
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
                </div> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q9opt1"
                    name="options"
                    value={q9opt1}
                    checked={selectedOption === q9opt1}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">job</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q9opt2"
                    name="options"
                    value={q9opt2}
                    checked={selectedOption === q9opt2}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">stress</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q9opt3"
                    name="options"
                    value={q9opt3}
                    checked={selectedOption === q9opt3}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">business</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q9opt4"
                    name="options"
                    value={q9opt4}
                    checked={selectedOption === q9opt4}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">jackpot</label>
                </div>
              </div>
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
                LECTURE DEMONSTRATION
              </span>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div className="status_box_main status_box_main_curr_fourth">
                <div className="que_no">Current Status</div>
                <div className="que_no">Beginning in {seconds} seconds...</div>
                {/* <div className="que_no">Recording 13/25 seconds...</div> */}
                {/* <div className="que_no">Recording Completed</div> */}

                {/* <div
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
                </div> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>

              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q10opt1"
                    name="options"
                    value={q10opt1}
                    checked={selectedOption === q10opt1}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">doubles</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q10opt2"
                    name="options"
                    value={q10opt2}
                    checked={selectedOption === q10opt2}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">singles</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q10opt3"
                    name="options"
                    value={q10opt3}
                    checked={selectedOption === "q10opt3"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">triple</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="radio"
                    id="q10opt4"
                    name="options"
                    value={q10opt4}
                    checked={selectedOption === q10opt4}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="option1">pointed ones</label>
                </div>
              </div>
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
              AddCurriculamListeningApiMain();
            }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrWeekSecClassTestFourth;
