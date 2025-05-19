import React from "react";
import "./SecListeningTestInstru.css";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiTwotoneExclamationCircle } from "react-icons/ai";

const SecListeningTestInstru = () => {
  return (
    <>
      <div className="SecListTestPart1_main_nav">
        <span className="SecSpeakTestPart1_nav_inner">
          <FaUser />
          XXXXX-XXXXX -123456
        </span>
        CBT - IELTS_SPEAKING-TEST
      </div>
      <div className="SecSpeakingTestInstru_top">
        <div className="SecSpeakingTestInstru_main">
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h5 className="que_no">Instructions</h5>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h6 className="que_no">Practice Listening test - Instructions</h6>
            </div>
          </div>
          <div className="SecSpeakingTestInstru_content">
            <span>
              You will be given 4 sections/audio tracks and you will have to
              answer a total of 40 questions based on those tracks. Once you
              click on the 'Start the test' button, the audio will start
              automatically. Enter your responses/answer the spaces given with
              the questions. Un the top right corner ot this screen. you will
              find a Play button and a volume slider. Kindly click on Play and
              adjust the volume as per your comfort before starting the test.
            </span>

            <span>Good Luck!</span>
            <span
              style={{
                display: "flex",
                alignSelf: "center",
                marginTop: "1rem",
                alignItems: "center",
                gap: "0.5rem",
              }}>
              <AiTwotoneExclamationCircle />
              Do not click 'start test' until you are told to do so.
            </span>
            <Link
              to="/SectionTest1"
              style={{ display: "flex", alignSelf: "center" }}>
              <button className="btn">Start test</button>
            </Link>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default SecListeningTestInstru;
