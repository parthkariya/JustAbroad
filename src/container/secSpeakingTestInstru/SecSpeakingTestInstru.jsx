import React from "react";
import "./SecSpeakingTestInstru.css";
import images from "../../constants/images";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaPowerOff } from "react-icons/fa";

const SecSpeakingTestInstru = () => {
  return (
    <>
      <div className="SecSpeakTestPart1_main_nav">
        <span className="SecSpeakTestPart1_nav_inner">
          <CgProfile />
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
              <h6 className="que_no">Practice Speaking test - Instructions</h6>
            </div>
          </div>
          <div className="SecSpeakingTestInstru_content">
            <span>This test will last for about 11 to 14 minutes.</span>
            <span>
              Once you start the test. you will find an examiner on the left
              half of the screen and a microphone icon on the right. Play the
              video. The examiner will ask you a series of questions. At the end
              of each question. Dress the microphone icon and record your
              answer/response.
            </span>
            <span>
              You will not need a headphone if you are using a laptop that has a
              functional microphone. But in case you are attempting this
              speaking session on your desktop computer, please ensure that you
              put on a headphone with a microphone to speak into and record your
              responses to te questions asked by the examiner.
            </span>
            <span>
              In case of a desktop PC. plug in both the microphone cord and the
              headphone cord at the back of Your CPU.
            </span>
            <div className="cpu_img_main">
              <img src={images.cpu} alt="" className="cpu_img_inner" />
            </div>
            <span>
              All the instructions will be given to you by the examiner. So
              listen carefully and respond in a clear voice
            </span>
            <span>
              Once you have submitted the test. you will get a report in which
              you can listen to your own answers as you've spoken.
            </span>
            <span>
              Please ensure that you have good internet connectivity for a
              smooth speaking session.
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
              to="/SecSpeakingStartTest"
              style={{ display: "flex", alignSelf: "center" }}>
              <button className="btn">Start test</button>
            </Link>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default SecSpeakingTestInstru;
