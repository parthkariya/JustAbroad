import React from "react";
import "./SecReadingTestInstru.css";
import { FaUser } from "react-icons/fa";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const SecReadingTestInstru = () => {
    return (
      <>
        <div className="SecReadingTestPart1_main_nav">
          <span className="SecSpeakTestPart1_nav_inner">
            <FaUser />
            XXXXX-XXXXX -123456
          </span>
          F-ACADEMIC-R-PRACTICE TEST 12
        </div>
        <div className="SecSpeakingTestInstru_top">
          <div className="SecSpeakingTestInstru_main">
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h5 className="que_no">Instructions</h5>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h6 className="que_no">Practice Reading test - Instructions</h6>
              </div>
            </div>
            <div className="SecSpeakingTestInstru_content">
              <span>
                You will be given three reading passages based on which you will
                have to answer a total of 40 questions. You will be able to surf
                between the passages so you can attempt the passages in any
                order. You may select any sentence(s) and right click to
                highlight or take notes. Since this is a practice test, it is
                not timed. <br />
                <br />
                You may take as long as you wish to enter your answers before
                submitting the test.
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
                to="/SecReadingTest1"
                // to="/SecReadingTest1"
                style={{ display: "flex", alignSelf: "center" }}>
                <button className="btn">Start test</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
};

export default SecReadingTestInstru;
