import React, { useEffect, useRef, useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
import "./PteMockTest1Main.css";
import { Line } from "rc-progress";
import images from "../../constants/images";
import { IoMicSharp } from "react-icons/io5";
import { ReactMic } from "react-mic";
import ReactAudioPlayer from "react-audio-player";
import { duration } from "moment/moment";
import axios from "axios";
import { ACCEPT_HEADER, add_mock_test } from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import Notification from "../../utils/Notification";
import { useNavigate } from "react-router-dom";

const PteMockTest1Main = () => {
  // const [seconds, setSeconds] = useState(25);
  const [getStartRecording, setStartRecording] = useState(30);

  const [getQue, setQue] = useState(1);

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

  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);

  const myFunction = () => {
    const audio = audioRef.current;
    if (audio) {
      const newDuration = audio.duration;
      setDuration(newDuration);
    }
  };

  //
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [apifileurl, SetApiFileUrl] = useState("");
  const [apifilename, SetApiFileName] = useState("");
  const [apifiletype, SetApiFileType] = useState("");
  const [getcondation, SetCondation] = useState(false);
  // const audioRef = useRef(null);
  const [recordedTime, setRecordedTime] = useState(0);
  const totalTime = 40;
  const [seconds, setSeconds] = useState(20);
  const [seconds4, setSeconds4] = useState(40);
  const [seconds5, setSeconds5] = useState(5);
  const [seconds6, setSeconds6] = useState(5);

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  useEffect(() => {
    if (seconds6 === 0) {
      const interval = setInterval(() => {
        if (seconds4 > 0) {
          setSeconds4(seconds4 - 1);
          console.log("seconds", seconds4);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds4, seconds6]);

  useEffect(() => {
    // if (seconds === 0) {
    const interval = setInterval(() => {
      if (seconds5 > 0) {
        setSeconds5(seconds5 - 1);
      } else {
      }
    }, 1000);

    return () => clearInterval(interval);
    // }
  }, [seconds5, seconds]);

  useEffect(() => {
    // if (seconds === 0) {
    const interval = setInterval(() => {
      if (audioCompleted === true) {
        setSeconds6(seconds6 - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
    // }
  }, [seconds6, seconds]);

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

  const AddSpeaking = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_1", blob, "recorded_audio.mp3");

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
    formdata.append("answer_2", blob, "recorded_audio.mp3");

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

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_3", blob, "recorded_audio.mp3");

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
    formdata.append("mpck_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_4", blob, "recorded_audio.mp3");

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

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_5", blob, "recorded_audio.mp3");

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

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_6", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddSpeaking7 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_7", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking8 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_8", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking9 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_9", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking10 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_10", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking11 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_11", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking12 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_12", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking13 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_13", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking14 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_14", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking15 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_15", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking16 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_16", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking17 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_17", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking18 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_18", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking19 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_19", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking20 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_20", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking21 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_21", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking22 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_22", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking23 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_23", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking24 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_24", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking25 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_25", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking26 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_26", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const AddSpeaking27 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_27", blob, "recorded_audio.mp3");

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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddSpeaking28 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    formdata.append("answer_28", text);

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
          setText("");
          Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddSpeaking29 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    formdata.append("answer_29", text);

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
          setText("");
          Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const AddSpeaking30 = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("mock_test_id", 1);

    formdata.append("answer_30", text);

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
          setText("");
          Notification("success", "Success!", res.data.message);
          navigate("/ptemocktest2");
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };
  const NextButtuon = () => {
    if (getQue === 28) {
      AddSpeaking28();
    } else if (getQue === 29) {
      AddSpeaking29();
    } else if (getQue === 30) {
      AddSpeaking30();
    } else {
      setQue(getQue + 1);
      setSeconds(20);
      setRecordedTime(0);
      setRecordedTime1(0);
      setRecordedAudio(null);
      setIsRecording(false);
      setSeconds4(40);
      setSeconds5(5);
      setSeconds6(5);
      setSeconds7(5);
      setCount(0);
      setIsPlaying(false);
      setaudioshowstart(false);
    }
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
  const onData = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking(recordedBlob.blobURL);
  };
  const onData2 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop2 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking2(recordedBlob.blobURL);
  };
  const onData3 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop3 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking3(recordedBlob.blobURL);
  };

  const onData4 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop4 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking4(recordedBlob.blobURL);
  };

  const onData5 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop5 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking5(recordedBlob.blobURL);
  };

  const onData6 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop6 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking6(recordedBlob.blobURL);
  };

  const onData7 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop7 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking7(recordedBlob.blobURL);
  };

  const onData8 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop8 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking8(recordedBlob.blobURL);
  };

  const onData9 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop9 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking9(recordedBlob.blobURL);
  };

  const onData10 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop10 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking10(recordedBlob.blobURL);
  };

  const onData11 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop11 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking11(recordedBlob.blobURL);
  };

  const onData12 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop12 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking12(recordedBlob.blobURL);
  };

  const onData13 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop13 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking13(recordedBlob.blobURL);
  };

  const onData14 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop14 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking14(recordedBlob.blobURL);
  };

  const onData15 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop15 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking15(recordedBlob.blobURL);
  };
  const onData16 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop16 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking16(recordedBlob.blobURL);
  };

  const onData17 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop17 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking17(recordedBlob.blobURL);
  };

  const onData18 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop18 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking18(recordedBlob.blobURL);
  };

  const onData19 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop19 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking19(recordedBlob.blobURL);
  };

  const onData20 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop20 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking20(recordedBlob.blobURL);
  };

  const onData21 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop21 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking21(recordedBlob.blobURL);
  };

  const onData22 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop22 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking22(recordedBlob.blobURL);
  };

  const onData23 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop23 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking23(recordedBlob.blobURL);
  };

  const onData24 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop24 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking24(recordedBlob.blobURL);
  };

  const onData25 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop25 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking25(recordedBlob.blobURL);
  };

  const onData26 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop26 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking26(recordedBlob.blobURL);
  };

  const onData27 = (recordedBlob) => {
    if (recordedBlob) {
    }
  };
  const onStop27 = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);
    AddSpeaking27(recordedBlob.blobURL);
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
  // const minutes = Math.floor(seconds1 / 60);
  const remainingSeconds = seconds1 % 60;

  useEffect(() => {
    if (hours === 0 && minutes === 0 && remainingSeconds === 0) {
      navigate("/PteMockTest");
      Notification("Warning", "Warning", "Test's up!");
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
  const [showControls, setShowControls] = useState(true);

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

  const [text, setText] = useState("");
  const maxWords = 75;

  const handleOnChange = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean);

    if (words.length <= 10) {
      setText(event.target.value);
    } else {
    }
    setText(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/);

    if (words1.length <= maxWords) {
      setText(inputValue);
    }
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

  const [audioshowstart, setaudioshowstart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setaudioshowstart(true);
    }, 5000);
  }, [getQue]);

  const [progress, setProgress] = useState(0);

  const handleAudioEnded = () => {
    setAudioCompleted(true);
     alert("Ended!");
  };

  const handleListen = (e) => {
    // Calculate progress percentage
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const progressPercentage = (currentTime / duration) * 100;

    // Update progress state
    setProgress(progressPercentage);
  };

  //  const audioRef = useRef(null);
  const [progress1, setProgress1] = useState(0);
  const [audioCompleted, setAudioCompleted] = useState(false);
  const [timer, setTimer] = useState(20);

  const handleListen1 = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const progressPercentage = (currentTime / duration) * 100;
    setProgress1(progressPercentage);
  };

  const getaudiotime = 42;

  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (seconds5 === 0 && isPlaying === true) {
      const interval = setInterval(() => {
        if (count < 42) {
          setCount(count + 1);
        } else {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [count, seconds5, isPlaying]);

  const percent1 = (count / getaudiotime) * 100;

  const [audio] = useState(new Audio(images.mp3sample));

  useEffect(() => {
    if (isPlaying) {
      audio.play().catch((error) => {
        // Handle error
        console.error("Error playing audio:", error);
      });
    } else {
      audio.pause();
    }

    // Cleanup
    return () => {
      audio.pause();
    };
  }, [isPlaying, audio]);

  const [seconds7, setSeconds7] = useState(5);

  useEffect(() => {
    if (count === 42) {
      const interval = setInterval(() => {
        if (seconds7 > 0) {
          setSeconds7(seconds7 - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds7, count]);

  const [isRecording1, setIsRecording1] = useState(false);
  const [recordedTime1, setRecordedTime1] = useState(0);

  const startRecording1 = () => {
    setIsRecording1(true);
    setRecordedTime1(0); // Reset recorded time
  };

  const stopRecording1 = () => {
    setIsRecording1(false);
  };

  useEffect(() => {
    if (getQue === 8 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 9 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 10 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 11 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 12 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 13 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 14 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 15 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 16 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 17 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 22 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 23 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 24 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 25 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 26 && count === 42 && seconds7 === 0) {
      startRecording1();
    } else if (getQue === 27 && count === 42 && seconds7 === 0) {
      startRecording1();
    }
  }, [getQue, count, seconds7]);

  useEffect(() => {
    if (seconds7 === 0) {
      let timer;
      if (isRecording1) {
        timer = setInterval(() => {
          setRecordedTime1((prevTime) => prevTime + 1);
          if (recordedTime1 >= totalTime) {
            stopRecording1();
          }
        }, 1000);
      } else {
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    }
  }, [isRecording1, recordedTime1, getQue, seconds7]);
  const percent2 = (recordedTime1 / totalTime) * 100;

  useEffect(() => {
    // Countdown the timer every second
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId); // Clear the interval on component unmount or dependency change
  }, [audioCompleted]);

  const handleButtonSubmitClick = () => {
    const result = window.confirm("Are you sure you want to exit the test?");

    if (result) {
      navigate("/PteMockTest");
    } else {
      // console.log("Action canceled");
    }
  };
  return (
    <div className="PteMockTest1Main_main">
      <div>
        {/* hedar */}
        <div className="PteMockTest1Main_nav" style={{ height: "5rem" }}>
          <div className="que_no">
            PTE - Portal Mock Test 7 - Section 1 of 3
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
                {/* {hours > 0 && <span>{hours}:</span>}
                {minutes > 0 && <span>{minutes}:</span>}
                {remainingSeconds > 0 && <span>{remainingSeconds} </span>} */}
              </div>
            </span>
            <span
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}>
              <IoIosListBox style={{ color: "var(--color-brand" }} />
              {getQue} of 30
            </span>
          </div>
        </div>
        <div className="blue_nav"></div>
        {/* hedar */}
        {getQue === 1 ? (
          <div className="PteMockTest1Main_inner">
            <div>
              You have the chance to share some information about yourself with
              your chosen institutions during the personal introduction. You
              will have 20 seconds to read the prompt and think of an answer
              before you have 40 seconds to record it. The institutions you
              choose will receive your score report along with this item which
              is not scored. You can only record your response once.
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {seconds == 0 ? (
                <>
                  <div className="que_no">
                    Recording {recordedTime} /40 seconds...
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Beginning in {seconds} seconds...
                  </div>
                </>
              )}
              <div
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
              </div>
            </div>
            <div style={{ width: "50%" }}>
              {/* Existing code... */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}></div>
              <div style={{ display: "none" }}>
                <ReactMic
                  style
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop}
                  onData={onData}
                  strokeColor="#ffffff"
                  backgroundColor="#009688"
                />
              </div>
              <div style={{ display: "none" }}>
                {recordedAudio && (
                  <audio ref={audioRef} controls>
                    <source src={recordedAudio} type="audio/wav" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 2 ? (
          <div className="PteMockTest1Main_inner">
            <div>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Look at the text below. You must read this text aloud as
                naturally and clearly as possible.
              </span>
              <br />
              <br />
              With hectic schedules ruling the day, people often underestimate
              the importance of taking time to relax and recharge - even if for
              only a few minutes. To that point, why not do so with a good book?
              Whether you're curled up on the couch
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {seconds == 0 ? (
                <>
                  <div className="que_no">
                    Recording {recordedTime} /40 seconds...
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Beginning in {seconds} seconds...
                  </div>
                </>
              )}
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}
              <div
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
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ display: "none" }}>
                <ReactMic
                  style
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop2}
                  onData={onData2}
                  strokeColor="#ffffff"
                  backgroundColor="#009688"
                />
              </div>
              <div style={{ display: "none" }}>
                {recordedAudio && (
                  <audio ref={audioRef} controls>
                    <source src={recordedAudio} type="audio/wav" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 3 ? (
          <div className="PteMockTest1Main_inner">
            <div>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Look at the text below. You must read this text aloud as
                naturally and clearly as possible.
              </span>
              <br />
              <br />
              The 30s might have you pondering marriage and family, in which
              case "Smart Parenting for Smart Kids: Nurturing Your Child's True
              Potential" by Eileen Kennedy-Moore and Mark S. Lowenthal might be
              informative and invaluable reads. For a mind-candy read that's
              sure to entertain, try "Bridget Jones's Diary" by Helen Fielding.
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {seconds == 0 ? (
                <>
                  <div className="que_no">
                    Recording {recordedTime} /40 seconds...
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Beginning in {seconds} seconds...
                  </div>
                </>
              )}
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}
              <div
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
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ display: "none" }}>
                <ReactMic
                  style
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop3}
                  onData={onData3}
                  strokeColor="#ffffff"
                  backgroundColor="#009688"
                />
              </div>
              <div style={{ display: "none" }}>
                {recordedAudio && (
                  <audio ref={audioRef} controls>
                    <source src={recordedAudio} type="audio/wav" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 4 ? (
          <div className="PteMockTest1Main_inner">
            <div>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Look at the text below. You must read this text aloud as
                naturally and clearly as possible.
              </span>
              <br />
              <br />
              The 60s, or Golden Years, mean retirement and the ability to enjoy
              the things you love most. Whether it's spending time with family,
              keeping fit, or curling up with a good book, there is "Beautiful
              Ruins" by Jess Walter or "Paris" by Edward Rutherfurd. As well as
              offering instant access to millions of titles online, digital
              reading companies offer a cornucopia of e-reading device options.
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {seconds == 0 ? (
                <>
                  <div className="que_no">
                    Recording {recordedTime} /40 seconds...
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Beginning in {seconds} seconds...
                  </div>
                </>
              )}
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}
              <div
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
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ display: "none" }}>
                <ReactMic
                  style
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop4}
                  onData={onData4}
                  strokeColor="#ffffff"
                />
              </div>
              <div style={{ display: "none" }}>
                {recordedAudio && (
                  <audio ref={audioRef} controls>
                    <source src={recordedAudio} type="audio/wav" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 5 ? (
          <div className="PteMockTest1Main_inner">
            <div>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Look at the text below. You must read this text aloud as
                naturally and clearly as possible.
              </span>
              <br />
              <br />
              NLS is the National Library Service for the Blind and Physically
              Handicapped and is part of the Library of Congress. Established in
              1931, the organisation's mission is to enrich the lives of its
              patrons by offering them books, magazines, music scores, and other
              materials in audio and braille at no charge.
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {seconds == 0 ? (
                <>
                  <div className="que_no">
                    Recording {recordedTime} /40 seconds...
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Beginning in {seconds} seconds...
                  </div>
                </>
              )}
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}
              <div
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
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ display: "none" }}>
                <ReactMic
                  style
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop5}
                  onData={onData5}
                  strokeColor="#ffffff"
                  backgroundColor="#009688"
                />
              </div>
              <div style={{ display: "none" }}>
                {recordedAudio && (
                  <audio ref={audioRef} controls>
                    <source src={recordedAudio} type="audio/wav" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 6 ? (
          <div className="PteMockTest1Main_inner">
            <div>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Look at the text below. You must read this text aloud as
                naturally and clearly as possible.
              </span>
              <br />
              <br />
              NLS provides its services to any U.S. resident or U.S. citizen
              living abroad who is blind, has low vision, or has a physical
              disability that makes it difficult to hold a book. Thousands of
              bestsellers, classics, biographies, nonfiction works, and more can
              be downloaded from the internet or ordered for home delivery
              through a nationwide network of cooperating libraries.
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {seconds == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Beginning in {seconds} seconds...
                  </div>
                </>
              )}
              {seconds4 == 40 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Recording {seconds4} /40 seconds...
                  </div>
                </>
              )}{" "}
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}
              <div
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
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ display: "none" }}>
                <ReactMic
                  style
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop6}
                  onData={onData6}
                  strokeColor="#ffffff"
                  backgroundColor="#009688"
                />
              </div>
              <div style={{ display: "none" }}>
                {recordedAudio && (
                  <audio ref={audioRef} controls>
                    <source src={recordedAudio} type="audio/wav" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 7 ? (
          <div className="PteMockTest1Main_inner">
            <div>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Look at the text below. You must read this text aloud as
                naturally and clearly as possible.
              </span>
              <br />
              <br />
              Virender was a swash-buckling cricket batsman. He used to be a
              fantastic opener for India and has scored two triple centuries in
              test cricket and a double century in one-day cricket. He has a
              very high strike rate. He is also known for his off-spin bowling
              and as a slip fielder. Sehwag is a vegetarian and loves sweets
              too.
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {seconds == 0 ? (
                <>
                  <div className="que_no">
                    Recording {recordedTime} /40 seconds...
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Beginning in {seconds} seconds...
                  </div>
                </>
              )}
              {/* <div className="que_no">Recording 13/25 seconds...</div> */}
              {/* <div className="que_no">Recording Completed</div> */}
              <div
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
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div style={{ display: "none" }}>
                <ReactMic
                  style
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop7}
                  onData={onData7}
                  strokeColor="#ffffff"
                  backgroundColor="#009688"
                />
              </div>
              <div style={{ display: "none" }}>
                {recordedAudio && (
                  <audio ref={audioRef} controls>
                    <source src={recordedAudio} type="audio/wav" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 8 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a sentence. Please repeat the sentence exactly as
                you hear it. You will hear the sentence only once.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}
              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop8}
                    onData={onData8}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 9 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a sentence. Please repeat the sentence exactly as
                you hear it. You will hear the sentence only once.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}
              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}
              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <>
                  <div
                    style={{
                      width: "100%",
                      height: "15px",
                      display: "flex",
                    }}>
                    <Line
                      percent={percent2}
                      strokeWidth={1}
                      trailWidth={1}
                      strokeColor="#0076ff"
                    />
                  </div>
                </>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop9}
                    onData={onData9}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 10 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a sentence. Please repeat the sentence exactly as
                you hear it. You will hear the sentence only once.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop10}
                    onData={onData10}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 11 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a sentence. Please repeat the sentence exactly as
                you hear it. You will hear the sentence only once.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>

              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop11}
                    onData={onData11}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 12 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a sentence. Please repeat the sentence exactly as
                you hear it. You will hear the sentence only once.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>

              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop12}
                    onData={onData12}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 13 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a sentence. Please repeat the sentence exactly as
                you hear it. You will hear the sentence only once.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}
              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop13}
                    onData={onData13}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 14 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a sentence. Please repeat the sentence exactly as
                you hear it. You will hear the sentence only once.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>

              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop14}
                    onData={onData14}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 15 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a sentence. Please repeat the sentence exactly as
                you hear it. You will hear the sentence only once.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>

              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop15}
                    onData={onData15}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 16 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a sentence. Please repeat the sentence exactly as
                you hear it. You will hear the sentence only once.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop16}
                    onData={onData16}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 17 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a sentence. Please repeat the sentence exactly as
                you hear it. You will hear the sentence only once.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>

              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}
              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop17}
                    onData={onData17}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 18 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Please speak into the microphone and describe in detail what the
                image is showing. You will have 40 seconds to give your
                response.
              </span>
            </div>
            <div>
              <img
                src={images.pteTestImg}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>

            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {seconds == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Beginning in {seconds} seconds...
                  </div>
                </>
              )}
              {seconds4 == 40 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Recording {seconds4} /40 seconds...
                  </div>
                </>
              )}{" "}
              <div
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
              </div>
            </div>
            <div style={{ width: "50%" }}>
              {/* Existing code... */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}></div>
              <div style={{ display: "none" }}>
                <ReactMic
                  style
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop18}
                  onData={onData18}
                  strokeColor="#ffffff"
                  backgroundColor="#009688"
                />
              </div>
              <div style={{ display: "none" }}>
                {recordedAudio && (
                  <audio ref={audioRef} controls>
                    <source src={recordedAudio} type="audio/wav" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 19 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Please speak into the microphone and describe in detail what the
                image is showing. You will have 40 seconds to give your
                response.
              </span>
            </div>
            <div>
              <img
                src={images.pteTestImg2}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {seconds == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Beginning in {seconds} seconds...
                  </div>
                </>
              )}
              {seconds4 == 40 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Recording {seconds4} /40 seconds...
                  </div>
                </>
              )}{" "}
              <div
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
              </div>
            </div>
            <div style={{ width: "50%" }}>
              {/* Existing code... */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}></div>
              <div style={{ display: "none" }}>
                <ReactMic
                  style
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop19}
                  onData={onData19}
                  strokeColor="#ffffff"
                  backgroundColor="#009688"
                />
              </div>
              <div style={{ display: "none" }}>
                {recordedAudio && (
                  <audio ref={audioRef} controls>
                    <source src={recordedAudio} type="audio/wav" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 20 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Please speak into the microphone and describe in detail what the
                image is showing. You will have 40 seconds to give your
                response.
              </span>
            </div>
            <div>
              <img
                src={images.pteTestImg3}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {seconds == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Beginning in {seconds} seconds...
                  </div>
                </>
              )}
              {seconds4 == 40 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Recording {seconds4} /40 seconds...
                  </div>
                </>
              )}{" "}
              <div
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
              </div>
            </div>
            <div style={{ width: "50%" }}>
              {/* Existing code... */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}></div>
              <div style={{ display: "none" }}>
                <ReactMic
                  style
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop20}
                  onData={onData20}
                  strokeColor="#ffffff"
                  backgroundColor="#009688"
                />
              </div>
              <div style={{ display: "none" }}>
                {recordedAudio && (
                  <audio ref={audioRef} controls>
                    <source src={recordedAudio} type="audio/wav" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 21 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Please speak into the microphone and describe in detail what the
                image is showing. You will have 40 seconds to give your
                response.
              </span>
            </div>
            <div>
              <img
                src={images.pteTestImg4}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {seconds == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Beginning in {seconds} seconds...
                  </div>
                </>
              )}
              {seconds4 == 40 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Recording {seconds4} /40 seconds...
                  </div>
                </>
              )}{" "}
              <div
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
              </div>
            </div>
            <div style={{ width: "50%" }}>
              {/* Existing code... */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}></div>
              <div style={{ display: "none" }}>
                <ReactMic
                  style
                  record={isRecording}
                  className="sound-wave"
                  onStop={onStop21}
                  onData={onData21}
                  strokeColor="#ffffff"
                  backgroundColor="#009688"
                />
              </div>
              <div style={{ display: "none" }}>
                {recordedAudio && (
                  <audio ref={audioRef} controls>
                    <source src={recordedAudio} type="audio/wav" />
                    Your browser does not support the audio tag.
                  </audio>
                )}
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 22 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Please speak into the microphone and retell what you have just
                heard from the lecture in your own words.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop22}
                    onData={onData22}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 23 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a question. Please give a simple and short answer.
                Often just one or a few words is enough.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop23}
                    onData={onData23}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 24 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a question. Please give a simple and short answer.
                Often just one or a few words is enough.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}
              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop24}
                    onData={onData24}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 25 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Please speak into the microphone and retell what you have just
                heard from the lecture in your own words.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop25}
                    onData={onData25}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 26 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a question. Please give a simple and short answer.
                Often just one or a few words is enough.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop26}
                    onData={onData26}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 27 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will hear a question. Please give a simple and short answer.
                Often just one or a few words is enough.
              </span>
            </div>
            <div className="status_box_main" style={{ gap: "1rem" }}>
              <div className="que_no">Current Status</div>
              {seconds5 == 0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">
                    Audio will play within {seconds5} seconds...
                  </div>
                </>
              )}

              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  percent={percent1}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
              {audioshowstart === true && seconds5 === 0 ? (
                <>
                  {isPlaying === true ? (
                    <></>
                  ) : (
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          setIsPlaying(true);
                        }}>
                        {"Play Audio"}
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <></>
              )}

              {count === 42 && seconds7 !== 0 ? (
                <>
                  <div className="que_no">
                    Beginning in {seconds7} seconds...
                  </div>
                </>
              ) : null}
              {seconds7 === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "15px",
                    display: "flex",
                  }}>
                  <Line
                    percent={percent2}
                    strokeWidth={1}
                    trailWidth={1}
                    strokeColor="#0076ff"
                  />
                </div>
              ) : null}
              <div style={{ width: "50%" }}>
                {/* Existing code... */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                  }}></div>
                <div style={{ display: "none" }}>
                  <ReactMic
                    style
                    record={isRecording1}
                    className="sound-wave"
                    onStop={onStop27}
                    onData={onData27}
                    strokeColor="#ffffff"
                    backgroundColor="#009688"
                  />
                </div>
                <div style={{ display: "none" }}>
                  {recordedAudio && (
                    <audio ref={audioRef} controls>
                      <source src={recordedAudio} type="audio/wav" />
                      Your browser does not support the audio tag.
                    </audio>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 28 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Read the passage below and summarize it using one sentence. Type
                your response in the box at the bottom of the screen. Your
                response will be judged on the quality of your writing and on
                how well your response presents the key points in the passage.
              </span>
            </div>
            <div>
              <span>
                Did you ever thumb through the Guinness Book of World Records as
                a kid, awed by the amazing feats? This year, families can help
                set records in ways that may not make headlines but will make a
                difference. This January 24-30, families and educators will
                participate in America's largest annual celebration of K-12
                school choices. During National School Choice Week, millions of
                students, teachers, parents, and community leaders will
                celebrate the importance of education and discuss what options
                they hope to see in the future - and you're invited to join.
                Most ears, these conversations take place at rallies, student
                showcases, multi-school fairs, and other huge, in-person
                community events. This year, school choice celebrants have shown
                their adaptability in light of COVID-19, planning drive-in movie
                nights, virtual conferences, car parades, and other safe
                activities that are diverse and unique, just as students are.
                What motivates so many Americans to celebrate School Choice
                Week? For some, it's a first-hand experience of how a great
                school fit can change a life. For others, it's the recognition
                that different shapes and sizes of classrooms and learning
                techniques help kids succeed. For many, it's a desire to
                celebrate inspiring teachers or innovative schools - traditional
                public schools, public charter schools. public magnet schools,
                private schools. online schools. or home-schooling groups. The
                week's energy and momentum are an amazing reminder to focus on
                the good. Yes. we must evaluate our children's learning options
                and look for ways to arrow.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text}
              id="myBox"
              onChange={(e) => {
                handleOnChange(e);
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
                {maxWords - text.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 29 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Read the passage below and summarize it using one sentence. Type
                your response in the box at the bottom of the screen. Your
                response will be judged on the quality of your writing and on
                how well your response presents the key points in the passage.
              </span>
            </div>
            <div>
              <span>
                As we enter a new vear. it's not too late to give your children
                a gift. Consider a gift that lasts a lifetime - financial
                literac. The benefits of understanding finances at a voung age
                will contribute to children's economic success at all stages of
                life. so it is never too early to start teaching them about
                smart monev management. "Bv providina our children with
                first-hand experience in earning. savina. and spending money
                they are more likelv to develon a savvy sensibility and the
                framework necessary to manage their finances as adults," says
                Marguerita Cheng, CF@, a certified financial planner
                professional and mom of three. The CFP Board, a non-profit
                organisation dedicated to supporting professional standards in
                personal financial planning, offers four important tips to help
                you teach kids about money: - Make money management a family
                affair. Get the whole family involved in financial planning.
                Talk to your kids about how they think money should be spent,
                such as saving for college, taking vacations, or dining out, and
                how to balance short-term indulgences and long-term financial
                planning goals. Model smart spending. Let your kids know how you
                spend and save daily. Take them to the grocery store and explain
                saving money with coupons and sales and how monthly expenses
                such as internet and phone bills, as well as water and
                electricity, are part of a household budget. Explain how turning
                off lights saves money, as does making turkey soup for dinner
                with leftovers after Thanksgiving- Let kids earn money. While
                not all parents approve of allowances, consider giving your
                child the opportunity to handle his or her own money, whether it
                is a regular allowance, small stipend, or monetary gifts to
                monetary relatives for a birthday or special occasion.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text}
              id="myBox"
              onChange={(e) => {
                handleOnChange(e);
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
                </button>{" "}
              </div>
              <div>
                {maxWords - text.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
            </div>
          </div>
        ) : null}
        {getQue === 30 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                You will have 20 minutes to plan, write and revise an essay
                about the topic below. Your response will be judged and how well
                you develop a position, or organise your ideas, present
                supporting details, and control the elements of standard written
                English. You should write 200-300 words.{" "}
              </span>
            </div>
            <div style={{ alignSelf: "flex-start" }}>
              <span>
                The mass media, including T.V., radio and newspapers, influences
                our society and shapes our opinions and characters. Discuss and
                give your opinion.{" "}
              </span>
            </div>
            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text}
              id="myBox"
              onChange={(e) => {
                handleOnChange(e);
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
                {maxWords - text.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>
            </div>
          </div>
        ) : null}
        {getQue === 31 ? handleButtonClick() : null}
      </div>
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
            }}>
            Next
          </button>
        </div>
      </div>
      {/* butn */}
    </div>
  );
};

export default PteMockTest1Main;
