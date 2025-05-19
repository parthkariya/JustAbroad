import React from "react";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SecWritingTestInstru.css";

const SecWritingTestInstru = () => {
  return (
    <>
      <div className="SecWritingTestPart1_main_nav">
        <span className="SecSpeakTestPart1_nav_inner">
          <FaUser />
          XXXXX-XXXXX -123456
        </span>
        F-ACADEMIC-W-PRACTICE TEST 12{" "}
      </div>
      <div className="SecSpeakingTestInstru_top">
        <div className="SecSpeakingTestInstru_main">
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h5 className="que_no">Instructions</h5>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
            <h6 className="que_no">Practice Writing Test - Instructions</h6>
            </div>
          </div>
          <div className="SecSpeakingTestInstru_content">
            <span>
              <span className="que_no">1.</span> There will no timer in this
              practice writing test.{" "}
            </span>
            <span>
              {" "}
              <span className="que_no">2.</span>
              Since this is the computer delivered format, you will need to type
              your responses into the spaces given. At the bottom of the text
              box, there will be live word count to help you track the number of
              words you have typed.
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
              to="/SecWritingTest1"
              style={{ display: "flex", alignSelf: "center" }}>
              <button className="btn">Start test</button>
            </Link>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default SecWritingTestInstru;
