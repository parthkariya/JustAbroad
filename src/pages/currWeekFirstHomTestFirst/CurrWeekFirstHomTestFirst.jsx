import React, { useEffect, useRef, useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
import { Line } from "rc-progress";
import images from "../../constants/images";
import { ReactMic } from "react-mic";
import { IoMicSharp } from "react-icons/io5";
import { FaStop } from "react-icons/fa6";
import {
  ACCEPT_HEADER,
  add_curriculum_speaking_home,
} from "../../utils/Constant";
import axios from "axios";
import { useAuthContext } from "../../context/auth_context";
import { useNavigate } from "react-router";
import Notification from "../../utils/Notification";

const CurrWeekFirstHomTestFirst = () => {
  const [getQue, setQue] = useState(1);
  //   const [getQue1, setQue1] = useState(1);
  const [sliderValue, setSliderValue] = useState(50);
  // const [attemptcount, SetAttemptcount] = useState("");
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  const handleButtonSubmitClick = () => {
    const result = window.confirm("Are you sure you want to exit the test?");

    if (result) {
      navigate("/CurriculumPage");
    } else {
      //  console.log("Action canceled");
    }
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

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [recordedTime, setRecordedTime] = useState(0);
  const totalTime = 40;

  const audioRef = useRef(null);
  const [seconds, setSeconds] = useState(20);
  const [seconds4, setSeconds4] = useState(40);

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
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);
  useEffect(() => {
    if (seconds === 0) {
      const interval = setInterval(() => {
        if (seconds4 > 0) {
          setSeconds4(seconds4 - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds4, seconds]);

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
  const onStop = (recordedBlob) => {
    setRecordedAudio(recordedBlob.blobURL);

    if (getQue == 1) {
      AddSpeaking(recordedBlob.blobURL);
    } else if (getQue == 2) {
      AddSpeaking2(recordedBlob.blobURL);
    } else if (getQue == 3) {
      AddSpeaking3(recordedBlob.blobURL);
    } else if (getQue == 4) {
      AddSpeaking4(recordedBlob.blobURL);
    } else if (getQue == 5) {
      AddSpeaking5(recordedBlob.blobURL);
    } else if (getQue == 6) {
      AddSpeaking6(recordedBlob.blobURL);
    } else if (getQue == 7) {
      AddSpeaking7(recordedBlob.blobURL);
    } else if (getQue == 8) {
      AddSpeaking8(recordedBlob.blobURL);
    } else if (getQue == 9) {
      AddSpeaking9(recordedBlob.blobURL);
    } else if (getQue == 10) {
      AddSpeaking10(recordedBlob.blobURL);
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

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

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

  const AddSpeaking = async (id) => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("curriculum_speaking_home_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_1", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_speaking_home, formdata, {
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
    formdata.append("curriculum_speaking_home_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_2", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_speaking_home, formdata, {
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
    formdata.append("curriculum_speaking_home_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_3", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_speaking_home, formdata, {
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
          // navigate("/CurriculumPage");
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
    formdata.append("curriculum_speaking_home_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_4", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_speaking_home, formdata, {
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
          // navigate("/CurriculumPage");
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
    formdata.append("curriculum_speaking_home_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_5", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_speaking_home, formdata, {
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
          // navigate("/CurriculumPage");
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
    formdata.append("curriculum_speaking_home_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_6", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_speaking_home, formdata, {
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
          // navigate("/CurriculumPage");
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
    formdata.append("curriculum_speaking_home_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_7", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_speaking_home, formdata, {
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
          // navigate("/CurriculumPage");
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
    formdata.append("curriculum_speaking_home_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_8", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_speaking_home, formdata, {
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
          // navigate("/CurriculumPage");
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
    formdata.append("curriculum_speaking_home_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_9", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_speaking_home, formdata, {
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
          // navigate("/CurriculumPage");
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
    formdata.append("curriculum_speaking_home_id", 1);

    const response = await fetch(id);
    const blob = await response.blob();
    formdata.append("answer_10", blob, "recorded_audio.mp3");

    axios
      .post(add_curriculum_speaking_home, formdata, {
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
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  const NextButtuon = () => {
    setSeconds(20);
    setRecordedTime(0);
    setRecordedAudio(null);
    setIsRecording(false);
    setSeconds4(40);
    setQue(getQue + 1);
  };

  return (
    <div className="PteMockTest1Main_main">
      <div>
        {/* header */}
        <div className="PteMockTest1Main_nav" style={{ height: "3rem" }}>
          <div className="que_no">
            Speaking - Describe Image - (H.W - 1 D -3) - Section 1 of 1
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
        {/* header */}
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
                Please speak into the microphone and describe in detail what the
                image is showing. You will have 40 seconds to give your
                response.
              </span>
            </div>
            <div
              style={{
                height: "300px",
                width: "300px",
                alignSelf: "flex-start",
                objectFit: "contain",
              }}>
              <img
                src={images.reading_hom_test1}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {/* <Countdown date={Date.now() + 10000} />, */}
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
              )}
              {/* {seconds4 ==  0 ? (
                <></>
              ) : (
                <>
                  {" "}
                  <div className="que_no">Recording {seconds4}seconds...</div>
                </>
              )} */}
              {/* <div className="que_no">Recording Completed</div> */}
              {/*    <div>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Please speak into the microphone and describe in detail what the
                image is showing. You will have 40 seconds to give your
                response.
              </span>
            </div>
            <div
              style={{
                height: "300px",
                width: "300px",
                alignSelf: "flex-start",
              }}>
              <img
                src={images.reading_hom_test2}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {/* <Countdown date={Date.now() + 10000} />, */}
              {/* <div className="que_no">Beginning in {seconds} seconds...</div>
              <div className="que_no">Beginning in {seconds4} seconds...</div> */}
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
              {/* <div className="que_no">Recording Completed</div> */}
              <div
                style={{
                  width: "100%",
                  height: "15px",
                  display: "flex",
                }}>
                <Line
                  // percent={attemptcount}
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
            </div>
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
          </div>
        ) : null}
        {getQue === 3 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Please speak into the microphone and describe in detail what the
                image is showing. You will have 40 seconds to give your
                response.
              </span>
            </div>
            <div
              style={{
                height: "300px",
                width: "300px",
                alignSelf: "flex-start",
              }}>
              <img
                src={images.reading_hom_test3}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {/* <Countdown date={Date.now() + 10000} />, */}
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
                  // percent={attemptcount}
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
            </div>
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
          </div>
        ) : null}
        {getQue === 4 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Please speak into the microphone and describe in detail what the
                image is showing. You will have 40 seconds to give your
                response.
              </span>
            </div>
            <div
              style={{
                height: "300px",
                width: "300px",
                alignSelf: "flex-start",
              }}>
              <img
                src={images.reading_hom_test4}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {/* <Countdown date={Date.now() + 10000} />, */}
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
                  // percent={attemptcount}
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
            </div>
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
          </div>
        ) : null}
        {getQue === 5 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Please speak into the microphone and describe in detail what the
                image is showing. You will have 40 seconds to give your
                response.
              </span>
            </div>
            <div
              style={{
                height: "300px",
                width: "300px",
                alignSelf: "flex-start",
              }}>
              <img
                src={images.reading_hom_test5}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {/* <Countdown date={Date.now() + 10000} />, */}
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
                  // percent={attemptcount}
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
            </div>
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
          </div>
        ) : null}
        {getQue === 6 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Please speak into the microphone and describe in detail what the
                image is showing. You will have 40 seconds to give your
                response.
              </span>
            </div>
            <div
              style={{
                height: "300px",
                width: "300px",
                alignSelf: "flex-start",
              }}>
              <img
                src={images.reading_hom_test6}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {/* <Countdown date={Date.now() + 10000} />, */}
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
                  // percent={attemptcount}
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
            </div>
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
          </div>
        ) : null}
        {getQue === 7 ? (
          <div className="PteMockTest1Main_inner">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignSelf: "flex-start",
              }}>
              <span className="que_no" style={{ fontStyle: "italic" }}>
                Please speak into the microphone and describe in detail what the
                image is showing. You will have 40 seconds to give your
                response.
              </span>
            </div>
            <div
              style={{
                height: "300px",
                width: "300px",
                alignSelf: "flex-start",
              }}>
              <img
                src={images.reading_hom_test7}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="status_box_main">
              <div className="que_no">Current Status</div>
              {/* <Countdown date={Date.now() + 10000} />, */}
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
                  // percent={attemptcount}
                  percent={percent}
                  strokeWidth={1}
                  trailWidth={1}
                  strokeColor="#0076ff"
                />
              </div>
            </div>
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
          </div>
        ) : null}
       { getQue === 8 ? (
        <div className="PteMockTest1Main_inner">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignSelf: "flex-start",
            }}>
            <span className="que_no" style={{ fontStyle: "italic" }}>
              Please speak into the microphone and describe in detail what the
              image is showing. You will have 40 seconds to give your response.
            </span>
          </div>
          <div
            style={{
              height: "300px",
              width: "300px",
              alignSelf: "flex-start",
            }}>
            <img
              src={images.reading_hom_test8}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="status_box_main">
            <div className="que_no">Current Status</div>
            {/* <Countdown date={Date.now() + 10000} />, */}
            {seconds == 0 ? (
              <></>
            ) : (
              <>
                {" "}
                <div className="que_no">Beginning in {seconds} seconds...</div>
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
                // percent={attemptcount}
                percent={percent}
                strokeWidth={1}
                trailWidth={1}
                strokeColor="#0076ff"
              />
            </div>
          </div>
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
        </div>
        ) : (null)}
        
         { getQue === 9 ? (
        <div className="PteMockTest1Main_inner">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignSelf: "flex-start",
            }}>
            <span className="que_no" style={{ fontStyle: "italic" }}>
              Please speak into the microphone and describe in detail what the
              image is showing. You will have 40 seconds to give your response.
            </span>
          </div>
          <div
            style={{
              height: "300px",
              width: "300px",
              alignSelf: "flex-start",
            }}>
            <img
              src={images.reading_hom_test9}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="status_box_main">
            <div className="que_no">Current Status</div>
            {/* <Countdown date={Date.now() + 10000} />, */}
            {seconds == 0 ? (
              <></>
            ) : (
              <>
                {" "}
                <div className="que_no">Beginning in {seconds} seconds...</div>
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
                // percent={attemptcount}
                percent={percent}
                strokeWidth={1}
                trailWidth={1}
                strokeColor="#0076ff"
              />
            </div>
          </div>
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
        </div>
        ) :   (null)}
         {getQue === 10 ? (
        <div className="PteMockTest1Main_inner">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignSelf: "flex-start",
            }}>
            <span className="que_no" style={{ fontStyle: "italic" }}>
              Please speak into the microphone and describe in detail what the
              image is showing. You will have 40 seconds to give your response.
            </span>
          </div>
          <div
            style={{
              height: "300px",
              width: "300px",
              alignSelf: "flex-start",
            }}>
            <img
              src={images.reading_hom_test10}
              alt=""
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="status_box_main">
            <div className="que_no">Current Status</div>
            {/* <Countdown date={Date.now() + 10000} />, */}
            {seconds == 0 ? (
              <></>
            ) : (
              <>
                {" "}
                <div className="que_no">Beginning in {seconds} seconds...</div>
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
                // percent={attemptcount}
                percent={percent}
                strokeWidth={1}
                trailWidth={1}
                strokeColor="#0076ff"
              />
            </div>
          </div>
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
              handleButtonSubmitClick();

              // setQue(getQue - 1);
            }}>
            Save & Exit
          </button>
        </div>
        <div>
          {getQue === 10 ? (
            <>
              {" "}
              {/* <button
                className="btn"
                onClick={() => {
                  // setQue(getQue + 1);
                  //   setQue1(getQue1 + 1);
                }}>
                Submit
              </button>{" "} */}
            </>
          ) : (
            <button
              className="btn"
              onClick={() => {
                NextButtuon();
              }}>
              Next
            </button>
          )}
        </div>
      </div>
      {/* butn */}
    </div>
  );
};

export default CurrWeekFirstHomTestFirst;