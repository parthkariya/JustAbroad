import React, { useEffect, useRef, useState } from "react";
import "./SecSpeakingStartTest.css";
import { FaPowerOff, FaStop } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import images from "../../constants/images";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { IoMicSharp } from "react-icons/io5";
import { ReactMic } from "react-mic";
import { ACCEPT_HEADER, add_speaking } from "../../utils/Constant";
import axios from "axios";
import Notification from "../../utils/Notification";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";

const SecSpeakingStartTest = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [apifileurl, SetApiFileUrl] = useState("");
  const [apifilename, SetApiFileName] = useState("");
  const [apifiletype, SetApiFileType] = useState("");
  const audioRef = useRef(null);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;

  useEffect(() => {
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  }, []);

  const [getcondation, SetCondation] = useState(false);

  const onData = (recordedBlob) => {
    if (recordedBlob) {
      SetCondation(true);
    }
  };

  const onStop = (recordedBlob) => {
    // Handle the recorded audio data when recording stops
    // console.log("recordedBlob is: ", recordedBlob);
    SetApiFileUrl(recordedBlob.blobURL);
    SetApiFileName(recordedBlob.blobURL);
    SetApiFileType(recordedBlob.blob.type);
    setRecordedAudio(recordedBlob.blobURL);
    //  console.log("qqq", recordedAudio);
    SetCondation("");
  };

  const playRecording = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const AddSpeaking = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();

    formdata.append("course_id", Courseid);
    formdata.append("speaking_id", 1);
    formdata.append(
      "answer_1",
      "https://www.youtube.com/embed/bldwa0LTaLc?si=hci__zkmQGaH0we8"
    );

    if (recordedAudio) {
      const response = await fetch(recordedAudio);
      const blob = await response.blob();
      formdata.append("answer_2", blob, "recorded_audio.mp3");
    }

    axios
      .post(add_speaking, formdata, {
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
          navigate("/ModuleTest");
          Notification("success", "Success!", res.data.message);
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });
  };

  // restrict inspect
  useEffect(() => {
    // Code minification and obfuscation
    const obfuscatedCode = () => {
      // Your obfuscated code goes here
      console.log("This is obfuscated code.");
    };

    // Disabling right-click
    const disableRightClick = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", disableRightClick);

    // Detecting developer tools
    const detectDevTools = () => {
      console.log("Checking for developer tools...");
    };

    window.addEventListener("devtoolschange", (event) => {
      if (event.detail.isOpen) {
        console.log("Developer tools are open!");
        // You can take some action here, but it won't prevent the user from using the tools.
      }
    });

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      window.removeEventListener("devtoolschange", detectDevTools);
    };
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

  return (
    <>
      <div className="SecSpeakTestPart1_main_nav">
        <span className="SecSpeakTestPart1_nav_inner">
          <CgProfile />
          XXXXX-XXXXX -123456
        </span>
        CDT - IELTS_SPEAKING-TEST
        <span>
          <button
            onClick={() => {
              AddSpeaking();
            }}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            className="btn">
            <FaPowerOff />
            Submit Test
          </button>
        </span>
      </div>
      <div className="SecWriteTestPart1_main_top">
        <div className="SecWriteTestPart1_main">
          <div>
            <h4>Section 1</h4>
          </div>
          <div>
            <p>Listen and answer question.</p>
          </div>
        </div>
        <div>
          <div
            className="SecWriteTestPart1_main"
            style={{ display: "flex", gap: "1rem" }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
              }}>
              <div>
                <Video autoplay loop poster={images.home_hero_bg}>
                  <source src={images.demovideo} type="video/webm" />
                </Video>
              </div>
              {/* <span
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                Click on reload button if the video is not loading.
              </span> */}
              {/* <button
                className="btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  padding: "0.3rem",
                  width: "120px",
                }}>
                Reload
                <IoReloadCircle style={{ fontSize: "20" }} />
              </button> */}
            </div>
            {/* <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}>
              <div className="SecSpeak_StartRecording_mic_main">
                <IoMicSharp style={{ fontSize: "45", color: "white" }} />
                <h5 className="SecSpeak_StartRecording_mic_inner">
                  Start Recording
                </h5>
              </div>
              <div className="SecSpeak_StopRecording_mic_main">
                <FaStop style={{ fontSize: "45", color: "white" }} />
                <h5 className="SecSpeak_StopRecording_mic_inner">
                  Stop Recording
                </h5>
              </div>
              <div className="SecSpeak_PlayRecording_mic_main">
                <FaPlay style={{ fontSize: "45", color: "white" }} />
                <h5 className="SecSpeak_PlayRecording_mic_inner">
                  Play Recording
                </h5>
              </div>
            </div> */}
            <div style={{ width: "50%" }}>
              {/* Existing code... */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}>
                {getcondation === false ? (
                  <div
                    className="SecSpeak_StartRecording_mic_main"
                    onClick={startRecording}>
                    <IoMicSharp style={{ fontSize: "45", color: "white" }} />
                    <h5 className="SecSpeak_StartRecording_mic_inner">
                      Start Recording
                    </h5>
                  </div>
                ) : null}
                {getcondation === true ? (
                  <div
                    className="SecSpeak_StopRecording_mic_main"
                    onClick={stopRecording}>
                    <FaStop style={{ fontSize: "45", color: "white"}} />
                    <h5 className="SecSpeak_StopRecording_mic_inner">
                      Stop Recording
                    </h5>
                  </div>
                ) : null}
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
      </div>
    </>
  );
};

export default SecSpeakingStartTest;
