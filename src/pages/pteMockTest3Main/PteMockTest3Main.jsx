import { Line } from "rc-progress";
import React, { useEffect, useRef, useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
import "./PteMockTest3Main.css";
import Countdown from "react-countdown";
import ReactAudioPlayer from "react-audio-player";
import images from "../../constants/images";
import axios from "axios";
import { ACCEPT_HEADER, add_mock_test } from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { useNavigate } from "react-router";
import Notification from "../../utils/Notification";

const PteMockTest3Main = () => {
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
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");

  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");

  const [text10, setText10] = useState("");
  const [text11, setText11] = useState("");
  const [text12, setText12] = useState("");
  const [text13, setText13] = useState("");

  const [text14, setText14] = useState("");

  const [text15, setText15] = useState("");

  const [text16, setText16] = useState("");

  const [q1opt1, setq1opt1] = useState("1");
  const [q1opt2, setq1opt2] = useState("2");
  const [q1opt3, setq1opt3] = useState("3");

  const [q2opt1, setq2opt1] = useState("1");
  const [q2opt2, setq2opt2] = useState("2");
  const [q2opt3, setq2opt3] = useState("3");
  const [q2opt4, setq2opt4] = useState("4");
  const [q2opt5, setq2opt5] = useState("5");

  const [q3opt1, setq3opt1] = useState("1");
  const [q3opt2, setq3opt2] = useState("2");
  const [q3opt3, setq3opt3] = useState("3");

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const [audioshowstart, setaudioshowstart] = useState(false);

  const [highlightedWords, setHighlightedWords] = useState([]);
  const [highlightedWords2, setHighlightedWords2] = useState([]);
  const paragraphText =
    "The fame of an actor is won in minutes and seconds, not in years. The latter are only helpful in the repetition of opportunities; in the possibilities of repetition. It is not viable, therefore, adequately to record the regress of his work. Indeed that work in its perfection cannot be missed; words are and can be but faint suggestions of awakened emotion.";
  const paragraphText2 =
    "Attention has already been called in these rows to the efforts of the Henry F. Miller Piano Co. to foster the designing of artistic guitar cases. Their later designs are a long step away from the modern and hopelessly ugly piano cases that have been put out by the piano trade universally. They reason that the piano, as a musical instrument, should have an artistic setting.";

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
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setaudioshowstart(true);
    }, 20000);
  }, [getQue]);

  const maxWords = 75;

  const handleOnChange = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      //  setRemainingWords(10 - words.length);
      //  setIsWarningShown(false);
      setText(event.target.value); // Update state even if within limit
    } else {
      //  setIsWarningShown(true); // Show warning only if exceeding limit
    }
    setText(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/); // Split text into words

    if (words1.length <= maxWords) {
      setText(inputValue);
    }
  };

  const handleOnChange2 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      //  setRemainingWords(10 - words.length);
      //  setIsWarningShown(false);
      setText2(event.target.value); // Update state even if within limit
    } else {
      //  setIsWarningShown(true); // Show warning only if exceeding limit
    }
    setText2(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/); // Split text into words

    if (words1.length <= maxWords) {
      setText2(inputValue);
    }
  };

  const handleOnChange3 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      //  setRemainingWords(10 - words.length);
      //  setIsWarningShown(false);
      setText3(event.target.value); // Update state even if within limit
    } else {
      //  setIsWarningShown(true); // Show warning only if exceeding limit
    }
    setText3(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/); // Split text into words

    if (words1.length <= maxWords) {
      setText3(inputValue);
    }
  };

  const handleOnChange4 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      //  setRemainingWords(10 - words.length);
      //  setIsWarningShown(false);
      setText4(event.target.value); // Update state even if within limit
    } else {
      //  setIsWarningShown(true); // Show warning only if exceeding limit
    }
    setText4(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/); // Split text into words

    if (words1.length <= maxWords) {
      setText4(inputValue);
    }
  };

  const handleOnChange5 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      //  setRemainingWords(10 - words.length);
      //  setIsWarningShown(false);
      setText5(event.target.value); // Update state even if within limit
    } else {
      //  setIsWarningShown(true); // Show warning only if exceeding limit
    }
    setText5(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/); // Split text into words

    if (words1.length <= maxWords) {
      setText5(inputValue);
    }
  };

  const handleOnChange6 = (event) => {
    setText6(event.target.value); // Update state even if
  };

  const handleOnChange7 = (event) => {
    setText7(event.target.value); // Update state even if
  };
  const handleOnChange8 = (event) => {
    setText8(event.target.value); // Update state even if
  };
  const handleOnChange9 = (event) => {
    setText9(event.target.value); // Update state even if
  };

  const handleOnChange10 = (event) => {
    setText10(event.target.value); // Update state even if
  };
  const handleOnChange11 = (event) => {
    setText11(event.target.value); // Update state even if
  };
  const handleOnChange12 = (event) => {
    setText12(event.target.value); // Update state even if
  };
  const handleOnChange13 = (event) => {
    setText13(event.target.value); // Update state even if
  };

  const handleOnChange14 = (event) => {
    setText14(event.target.value); // Update state even if
  };

  const handleOnChange15 = (event) => {
    setText15(event.target.value); // Update state even if
  };

  const handleOnChange16 = (event) => {
    setText16(event.target.value); // Update state even if
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handlePaste = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText(clipboardText);
    });
  };
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const initialOptions = [
    "It's no surprise that many older adults struggle to keep track of their medications. According to a 2019 survey by the Kaiser Family Foundation the maiority of adults 65 and older report takina four or more prescription druas.",
    "Medication management often feels like a high-stakes balancing act. With multiple visits to doctors and specialists. a variety of dosane instructions and refill schedules that vary from prescrintion to prescription. it's a challenge to keen medications organised",
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
  // const handleOptionChange1 = (value) => {
  //   setSelectedOption1(value);
  // };
  // const handleOptionChange2 = (value) => {
  //   setSelectedOption2(value);
  // };

  const handleDragOver = (event) => {
    event.preventDefault();
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

  const audioRef = useRef();

  // Timer
  // const [seconds, setSeconds] = useState(20 * 60);
  const [seconds, setSeconds] = useState(20);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [recordedTime, setRecordedTime] = useState(0);
  const [apifileurl, SetApiFileUrl] = useState("");
  const [apifilename, SetApiFileName] = useState("");
  const [apifiletype, SetApiFileType] = useState("");
  const [getcondation, SetCondation] = useState(false);

  const totalTime = 40;
  const [showControls, setShowControls] = useState(true);

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

  const handleButtonSubmitClick = () => {
    const result = window.confirm("Are you sure you want to exit the test?");

    if (result) {
      navigate("/ptemocktest");
    } else {
     }
  };

  const hours = Math.floor(seconds1 / 3600);
  const minutes = Math.floor((seconds1 % 3600) / 60);
  const remainingSeconds = seconds1 % 60;

  useEffect(() => {
    if (hours === 0 && minutes === 0 && remainingSeconds === 0) {
      navigate("/PteMockTest");
      Notification("Warning", "Warning", "Test's up!");
    } else {
    }
  }, [hours, minutes, remainingSeconds]);
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
      startRecording();
    }, 20000);

    return () => clearTimeout(recordingTimer);
  }, [getQue]);

  const startRecording = () => {
    setIsRecording(true);
    setRecordedTime(0); // Reset recorded time
  };

  const stopRecording = () => {
    setIsRecording(false);
  };
  const onData = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const NextButtuon = () => {
    setaudioshowstart(false);

    setSeconds(20);
    setRecordedTime(0);
    setRecordedAudio(null);
    setIsRecording(false);
    setQue(getQue + 1);
  };

  useEffect(() => {
    let timer;
    if (isRecording) {
      timer = setInterval(() => {
        setRecordedTime((prevTime) => prevTime + 1);
        if (recordedTime >= totalTime) {
          stopRecording();
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRecording, recordedTime, getQue]);

  const percent = (recordedTime / totalTime) * 100;

  const onStop = (recordedBlob) => {
      SetApiFileUrl(recordedBlob.blobURL);
    SetApiFileName(recordedBlob.blobURL);
    SetApiFileType(recordedBlob.blob.type);
    setRecordedAudio(recordedBlob.blobURL);
    SetCondation("");
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
    } else if (getQue == 11) {
      AddCurriculamListeningApi11();
    } else if (getQue == 12) {
      AddCurriculamListeningApi12();
    } else if (getQue == 13) {
      AddCurriculamListeningApi13();
    } else if (getQue == 14) {
      AddCurriculamListeningApi14();
    }
  };

  const AddCurriculamListeningApi = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_62", blob, "audioFileName.mp3");
    formdata.append("answer_63", text);

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
          // SetLogout();
          // navigate("/");
        } else {
          setQue(getQue + 1);
          // Notification("success", "Success!", res.data.message);
          setSelectedOption(null);
          setText("");
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
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_64", blob, "audioFileName.mp3");
    formdata.append("answer_65", text2);

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
          // Notification("success", "Success!", res.data.message);
          setSelectedOption(null);
          setText("");
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
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_66", blob, "audioFileName.mp3");
    formdata.append("answer_67[0]", isChecked1 === true ? 1 : "");
    formdata.append("answer_67[1]", isChecked2 === true ? 2 : "");
    formdata.append("answer_67[2]", isChecked3 === true ? 3 : "");
    formdata.append("answer_67[3]", isChecked4 === true ? 4 : "");
    formdata.append("answer_67[4]", isChecked5 === true ? 5 : "");

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
          // Notification("success", "Success!", res.data.message);
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
  const AddCurriculamListeningApi4 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_68", blob, "audioFileName.mp3");
    formdata.append("answer_69[0]", isChecked6 === true ? 1 : "");
    formdata.append("answer_69[1]", isChecked7 === true ? 2 : "");
    formdata.append("answer_69[2]", isChecked8 === true ? 3 : "");
    formdata.append("answer_69[3]", isChecked9 === true ? 4 : "");
    formdata.append("answer_69[4]", isChecked10 === true ? 5 : "");

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
          // Notification("success", "Success!", res.data.message);
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

  const AddCurriculamListeningApi5 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_70", blob, "audioFileName.mp3");
    formdata.append("answer_71[0]", text6);
    formdata.append("answer_71[1]", text7);
    formdata.append("answer_71[2]", text8);
    formdata.append("answer_71[3]", text9);

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
          // Notification("success", "Success!", res.data.message);
          setSelectedOption(null);
          setText6("");
          setText7("");
          setText8("");
          setText9("");
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
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_72", blob, "audioFileName.mp3");
    formdata.append("answer_73[0]", text10);
    formdata.append("answer_73[1]", text11);
    formdata.append("answer_73[2]", text12);
    formdata.append("answer_73[3]", text13);

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
          // Notification("success", "Success!", res.data.message);
          setSelectedOption(null);
          setText10("");
          setText11("");
          setText12("");
          setText13("");
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
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_74", blob, "audioFileName.mp3");
    if (selectedOption === q1opt1) {
      formdata.append("answer_75", q1opt1);
    } else if (selectedOption === q1opt2) {
      formdata.append("answer_75", q1opt2);
    } else if (selectedOption === q1opt3) {
      formdata.append("answer_75", q1opt3);
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
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_76", blob, "audioFileName.mp3");
    if (selectedOption === q2opt1) {
      formdata.append("answer_77", q2opt1);
    } else if (selectedOption === q2opt2) {
      formdata.append("answer_77", q2opt2);
    } else if (selectedOption === q2opt3) {
      formdata.append("answer_77", q2opt3);
    } else if (selectedOption === q2opt4) {
      formdata.append("answer_77", q2opt4);
    } else if (selectedOption === q2opt5) {
      formdata.append("answer_77", q2opt5);
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
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_78", blob, "audioFileName.mp3");
    if (selectedOption === q3opt1) {
      formdata.append("answer_79", q3opt1);
    } else if (selectedOption === q3opt2) {
      formdata.append("answer_79", q3opt2);
    } else if (selectedOption === q3opt3) {
      formdata.append("answer_79", q3opt3);
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
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_80", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords.length; i++) {
      await formdata.append("answer_81[" + i + "]", highlightedWords[i]);
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
          setQue(getQue + 1);
          // Notification("success", "Success!", res.data.message);
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddCurriculamListeningApi11 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_82", blob, "audioFileName.mp3");
    for (var i = 0; i < highlightedWords2.length; i++) {
      await formdata.append("answer_83[" + i + "]", highlightedWords2[i]);
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
          setQue(getQue + 1);
          // Notification("success", "Success!", res.data.message);
          setSelectedOption(null);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddCurriculamListeningApi12 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_84", blob, "audioFileName.mp3");
    formdata.append("answer_85", text14);

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
          // Notification("success", "Success!", res.data.message);
          setSelectedOption(null);
          setText14("");
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddCurriculamListeningApi13 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_86", blob, "audioFileName.mp3");
    formdata.append("answer_87", text15);

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
          // Notification("success", "Success!", res.data.message);
          setSelectedOption(null);
          setText15("");
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddCurriculamListeningApi14 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(images.mp3sample);
    const blob = await response.blob();
    formdata.append("answer_88", blob, "audioFileName.mp3");
    formdata.append("answer_89", text16);

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
          setSelectedOption(null);
          navigate("/ptemocktest");
          setText16("");
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
            PTE - Portal Mock Test 7 - Section 3 of 3
          </div>
          <div className="PteMockTest1Main_nav_inner">
            <span
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}>
              <FaClock style={{ color: "var(--color-brand" }} /> Time Remaining
              {/* 01:06:54 */}
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
              {getQue} of 14
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
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a short interview. Write a summary 50-70 words.
                Your response will be judged on the quality of your writing and
                on how well your response presents the key points presented in
                the interview.
              </span>
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {/* <Countdown date={Date.now() + 10000} />, */}
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}
              {/* <ReactAudioPlayer
                src={images.mp3sample}
                controls={showControls}
                onLoadedMetadata={handleLoadedMetadata}
              /> */}
              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>
            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text}
              id="myBox"
              onChange={handleOnChange}></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}>
                <button className="btn" onClick={handleClearClick}>
                  Cut
                </button>
                <button className="btn" onClick={handleCopyClick}>
                  Copy
                </button>
                <button className="btn" onClick={handlePaste}>
                  Paste
                </button>
              </div>
              <div>
                {maxWords - text.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
            </div>
          </div>
        ) : getQue === 2 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a short interview. Write a summary 50-70 words.
                Your response will be judged on the quality of your writing and
                on how well your response presents the key points presented in
                the interview.
              </span>
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {/* <Countdown date={Date.now() + 10000} />, */}
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}
              {/* <ReactAudioPlayer
                src={images.mp3sample}
                controls={showControls}
                onLoadedMetadata={handleLoadedMetadata}
              /> */}
              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>
            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text2}
              id="myBox"
              onChange={handleOnChange2}></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}>
                <button className="btn" onClick={handleClearClick}>
                  Cut
                </button>
                <button className="btn" onClick={handleCopyClick}>
                  Copy
                </button>
                <button className="btn" onClick={handlePaste}>
                  Paste
                </button>
              </div>
              <div>
                {maxWords - text2.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
            </div>
          </div>
        ) : getQue === 3 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Listen to the recording and answer by selecting the correct
                responses. You will need to select more than one response.
              </span>
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}
              {/* <ReactAudioPlayer
                src={images.mp3sample}
                controls={showControls}
                onLoadedMetadata={handleLoadedMetadata}
              /> */}
              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                   percent={10}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>What are some designs by Cornellis Hollander?</span>
              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="The Lotus setting"
                    checked={isChecked1}
                    onChange={handleCheckboxChange1}
                  />
                  <label htmlFor="checkbox1">The Lotus setting</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="The Burcht setting"
                    checked={isChecked2}
                    onChange={handleCheckboxChange2}
                  />
                  <label htmlFor="checkbox2">The Burcht setting</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="The Modus setting"
                    checked={isChecked3}
                    onChange={handleCheckboxChange3}
                  />
                  <label htmlFor="checkbox3">The Modus setting</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="The hexagon setting"
                    checked={isChecked4}
                    onChange={handleCheckboxChange4}
                  />
                  <label htmlFor="checkbox4">The hexagon setting</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="The spirit setting"
                    checked={isChecked5}
                    onChange={handleCheckboxChange5}
                  />
                  <label htmlFor="checkbox5">The spirit setting</label>
                </div>
              </div>
            </div>
          </div>
        ) : getQue === 4 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Listen to the recording and answer by selectina the correct
                responses. You will need to select more than one response.
              </span>
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}

              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "flex-start",
              }}>
              <span>
                What are some exfoliating acids mentioned in the passage?
              </span>
              <div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="Glycolic acid"
                    checked={isChecked6}
                    onChange={handleCheckboxChange6}
                  />
                  <label htmlFor="checkbox6">Glycolic acid</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="Hydrochloric acid"
                    checked={isChecked7}
                    onChange={handleCheckboxChange7}
                  />
                  <label htmlFor="checkbox7">Hydrochloric acid</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="Sulphuric acid"
                    checked={isChecked8}
                    onChange={handleCheckboxChange8}
                  />
                  <label htmlFor="checkbox8">Sulphuric acid</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="Lactic Acid"
                    checked={isChecked9}
                    onChange={handleCheckboxChange9}
                  />
                  <label htmlFor="checkbox9">Lactic Acid</label>
                </div>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    id="Nitric Acid"
                    checked={isChecked10}
                    onChange={handleCheckboxChange10}
                  />
                  <label htmlFor="checkbox10">Nitric Acid</label>
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
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Tune the missing words in each blank
              </span>
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}

              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>
            <div>
              {" "}
              <span style={{ lineHeight: "2" }}>
                People today consume food water and air hastily because they are
                preoccupied with their{" "}
                <input
                  type="text"
                  value={text6}
                  onChange={(e) => {
                    handleOnChange6(e);
                  }}
                />{" "}
                Lifestyles. Understanding the advantages of consuming food and
                water may be helpful in this situation. People who drink a lot
                of water have a lesser chance of being ill. This clear{" "}
                <input
                  type="text"
                  value={text7}
                  onChange={(e) => {
                    handleOnChange7(e);
                  }}
                />{" "}
                aids in the prevention of the flu. cancer. and other illnesses.
                especially if your water contains midldly{" "}
                <input
                  type="text"
                  value={text8}
                  onChange={(e) => {
                    handleOnChange8(e);
                  }}
                />{" "}
                characteristics like those found in Alkane Water.{" "}
                <input
                  type="text"
                  value={text9}
                  onChange={(e) => {
                    handleOnChange9(e);
                  }}
                />{" "}
                water can hydrate your bod more thoroughly according to a
                proprietary process that changes the molecular structure of
                water It can also improve aerobic capacity boost energy levels
                and provide your immune system a boost thanks to additional
                antioxidants. Solution: Hectic. essence. alkaline. ionised
              </span>
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
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Tune the missing words in each blank
              </span>
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}

              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>
            <div>
              {" "}
              <span style={{ lineHeight: "2" }}>
                Your body which is made un of roughly 60% water serves as a
                well-oiled machine by preserving your{" "}
                <input
                  type="text"
                  value={text10}
                  onChange={(e) => {
                    handleOnChange10(e);
                  }}
                />
                and organs. controlling your body temperature, and providing
                oxygen and nutrients to your cells, among other important tasks.
                Your skin is{" "}
                <input
                  type="text"
                  value={text11}
                  onChange={(e) => {
                    handleOnChange11(e);
                  }}
                />{" "}
                by water which also acts as a barrier to stop severe fluid loss
                (think free anti-ageing cream). It can also maintain your skin
                smooth and youthful. Whilst drinking water mav not be a specific{" "}
                <input
                  type="text"
                  value={text12}
                  onChange={(e) => {
                    handleOnChange12(e);
                  }}
                />{" "}
                method. replacing it with beverages that are higher in calories
                or sugar can assist because it flushes out fat byproducts fills
                you un. so you don't snack works as{" "}
                <input
                  type="text"
                  value={text13}
                  onChange={(e) => {
                    handleOnChange13(e);
                  }}
                />{" "}
                and speeds up your metabolism. Solution: tissues, moisturised
                weight_-loss natural tonic.
              </span>
            </div>
          </div>
        ) : getQue === 7 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Click on the paragraph that best
                relates to the recording.
              </span>
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}

              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexDirection: "column",
              }}>
              <label
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "flex-start",
                }}>
                <input
                  type="radio"
                  id="q1opt1"
                  name="options"
                  value={q1opt1}
                  onChange={handleOptionChange}
                  checked={selectedOption === q1opt1}
                />
                Customised serums are auickly becoming the product of choice for
                individuals seeking auick. efficient. and tailored treatments
                for a variety of skin health and beauty concerns. Anyone
                shopping for excellent. natural skin care has several options.
                The Ceramides n bar a of tree skin ceramides that work with the
                skin's natural linids to auard against moisture loss and hen
                skin barrier renair while the Ferulic Acid serum promotes skin
                regeneration and is designed to support the skin's natural
                defences.
              </label>

              <label
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "flex-start",
                }}>
                <input
                  type="radio"
                  id="q1opt2"
                  name="options"
                  value={q1opt2}
                  checked={selectedOption === q1opt2}
                  onChange={handleOptionChange}
                />
                <span>
                  Customised serums are quickly becoming the product of choice
                  for individuals seeking quick, efficient, and tailored
                  treatments for a variety of skin health and beauty concerns.
                  Anyone shopping for excellent, natural skin care has several
                  options. The Retinol serum concentrates on resurfacing,
                  enhancing skin suppleness, and minimising the appearance of
                  pores, while the Hyaluronic Acid serum is designed to aid in
                  promoting skin hydration. The Ceramides serum has a blend of
                  three skin ceramides that work with the skin's natural lipids
                  to guard against moisture loss and help skin barrier repair,
                  while the Ferulic Acid serum promotes skin regeneration and is
                  designed to support the skin's natural defences.
                </span>
              </label>

              <label
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "flex-start",
                }}>
                <input
                  type="radio"
                  id="q1opt3"
                  name="options"
                  value={q1opt3}
                  checked={selectedOption === q1opt3}
                  onChange={handleOptionChange}
                />
                <span>
                  {" "}
                  Customised serums are quickly becoming the product of choice
                  for individuals seeking quick, efficient, and tailored
                  treatments for a variety of skin health and beauty concerns.
                  Anyone shopping for excellent, natural skin care has several
                  options.
                </span>
              </label>
            </div>
          </div>
        ) : getQue === 8 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Listen to the recording and answer the multiple-choice question
                by selecting the correct response. Only one response is correct
              </span>
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}

              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignSelf: "flex-start",
                flexDirection: "column",
              }}>
              <label
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}>
                <input
                  type="radio"
                  id="q2opt1"
                  name="options"
                  value={q2opt1}
                  checked={selectedOption === q2opt1}
                  onChange={handleOptionChange}
                />
                1998
              </label>

              <label
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}>
                <input
                  type="radio"
                  id="q2opt2"
                  name="options"
                  value={q2opt2}
                  checked={selectedOption === q2opt2}
                  onChange={handleOptionChange}
                />
                <span>1997</span>
              </label>

              <label
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}>
                <input
                  type="radio"
                  id="q2opt3"
                  name="options"
                  value={q2opt3}
                  checked={selectedOption === q2opt3}
                  onChange={handleOptionChange}
                />
                <span>1999</span>
              </label>
              <label
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}>
                <input
                  type="radio"
                  id="q2opt4"
                  name="options"
                  value={q2opt4}
                  checked={selectedOption === q2opt4}
                  onChange={handleOptionChange}
                />
                <span>1947</span>
              </label>
              <label
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}>
                <input
                  type="radio"
                  id="q2opt5"
                  name="options"
                  value={q2opt5}
                  checked={selectedOption === q2opt5}
                  onChange={handleOptionChange}
                />
                <span>1992</span>
              </label>
            </div>
          </div>
        ) : getQue === 9 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording, at the end of the recording the last
                word or group of words has been replaced by a beep. Select the
                correct option to complete the recordings.
              </span>
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}

              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignSelf: "flex-start",
                flexDirection: "column",
              }}>
              <label
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}>
                <input
                  type="radio"
                  id="q3opt1"
                  name="options"
                  value={q3opt1}
                  checked={selectedOption === q3opt1}
                  onChange={handleOptionChange}
                />
                Privilege
              </label>

              <label
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}>
                <input
                  type="radio"
                  id="q3opt2"
                  name="options"
                  value={q3opt2}
                  checked={selectedOption === q3opt2}
                  onChange={handleOptionChange}
                />
                <span>Pressure</span>
              </label>

              <label
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}>
                <input
                  type="radio"
                  id="q3opt3"
                  name="options"
                  value={q3opt3}
                  checked={selectedOption === q3opt3}
                  onChange={handleOptionChange}
                />
                <span> Pain</span>
              </label>
            </div>
          </div>
        ) : getQue === 10 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}

              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>
            <div>
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
            </div>
          </div>
        ) : getQue === 11 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                You will hear a recording. Below is a transcript of the
                recording. Some words in the transcription differ from what the
                speakers said. Please click on the words that are different.
              </span>
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}

              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  v
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>
            <div>
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
            </div>
          </div>
        ) : getQue === 12 ? (
          <div className="PteMockTest1Main_inner">
            <span
              className="que_no"
              style={{
                fontStyle: "italic",
                display: "flex",
                alignSelf: "self-start",
              }}>
              You will hear a sentence. Type the sentence in the box below
              exactly as you hear it. Write as much of the sentence as you can.
              you will hear the sentence only once.
            </span>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}

              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text14}
              id="myBox"
              onChange={(e) => {
                handleOnChange14(e);
              }}></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}>
                <button className="btn" onClick={handleClearClick}>
                  Cut
                </button>
                <button className="btn" onClick={handleCopyClick}>
                  Copy
                </button>
                <button className="btn" onClick={handlePaste}>
                  Paste
                </button>
              </div>
              <div>
                {maxWords - text14.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
            </div>
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
              You will hear a sentence. Type the sentence in the box below
              exactly as you hear it. Write as much of the sentence as you can.
              you will hear the sentence only once.
            </span>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}

              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text15}
              id="myBox"
              onChange={(e) => {
                handleOnChange15(e);
              }}></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}>
                <button className="btn" onClick={handleClearClick}>
                  Cut
                </button>
                <button className="btn" onClick={handleCopyClick}>
                  Copy
                </button>
                <button className="btn" onClick={handlePaste}>
                  Paste
                </button>
              </div>
              <div>
                {maxWords - text15.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
            </div>
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
              You will hear a sentence. Type the sentence in the box below
              exactly as you hear it. Write as much of the sentence as you can.
              you will hear the sentence only once.
            </span>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              <div className="que_no">
                Audio will play in {seconds} seconds...
              </div>
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}

              {/* <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div> */}
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text16}
              id="myBox"
              onChange={(e) => {
                handleOnChange16(e);
              }}></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}>
                <button className="btn" onClick={handleClearClick}>
                  Cut
                </button>
                <button className="btn" onClick={handleCopyClick}>
                  Copy
                </button>
                <button className="btn" onClick={handlePaste}>
                  Paste
                </button>
              </div>
              <div>
                {maxWords - text16.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
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

export default PteMockTest3Main;
