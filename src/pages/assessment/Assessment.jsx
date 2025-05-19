import React, { useEffect, useState } from "react";
import "./Assessment.css";
import { AssessmentTest, AssessmenttestReview } from "../../components";
import { FaTachometerAlt } from "react-icons/fa";
import { Line } from "rc-progress";
import { HiPencilAlt } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

import { TbReload } from "react-icons/tb";
import {
  ACCEPT_HEADER,
  basic_test_count,
  basic_test_pdf,
  get_basic_test,
} from "../../utils/Constant";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";
import { Helmet } from "react-helmet";

const Assessment = () => {
  const [getTest, setTest] = useState(0);
  const [getlisttestqes, SetListTestQes] = useState([]);
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const paramm = useParams();
  var slug = paramm.id;

  useEffect(() => {
    GetBasictest();
    TestCount();
  }, []);

  const GetBasictest = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("id", slug);

    axios
      .post(get_basic_test, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
        } else {
          if (res.data.success == 1) {
            SetListTestQes(res.data.data.question);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
      });
  };

  const [correctcount, SetCorrectcount] = useState("");
  const [incorrectcount, SetInCorrectcount] = useState("");
  const [skippedcount, SetSkippedcount] = useState("");
  const [attemptcount, SetAttemptcount] = useState("");
  const [totalcount, SetTotalCount] = useState("");

  const [isload, SetLoad] = useState(false);

  const TestCount = async () => {
    SetLoad(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(basic_test_count, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");

          SetLoad(false);
        } else {
          if (res.data.success == 1) {
            SetCorrectcount(res.data.correct);
            SetInCorrectcount(res.data.in_correct);
            SetSkippedcount(res.data.skipped);
            SetAttemptcount(res.data.attempt);
            SetTotalCount(res.data.total_question);
            if (
              res.data.correct == 0 &&
              res.data.in_correct == 0 &&
              res.data.skipped == 0 &&
              res.data.attempt == 0
            ) {
              setTest(0);
              SetLoad(false);
            } else {
              setTest(4);
              SetLoad(false);
            }
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        SetLoad(false);
      });
  };

  const Download = async () => {
    const Token = await localStorage.getItem("is_token");
    axios
      .get(basic_test_pdf, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
        } else {
          if (res.data.success == 1) {
            window.open(res.data.data, "_blank");
          } else {
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
      });
  };

  return (
    <>
      <Helmet>

        <title>Just Abroad | Test</title>

      </Helmet>
      {isload === true ? (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {getTest === 0 ? (
            <>
              <div className="Assessment_main">
                <div className="Assessment_head_main">
                  <h2>Instructions</h2>
                  <div className="underline"></div>
                </div>
                <div className="">
                  <div className="asses_intru_list">
                    <div>•</div>
                    <p>
                      The following test consists of 36 multiple choice
                      questions to assess your English language proficiency.
                    </p>
                  </div>
                  <div className="asses_intru_list">
                    <div>•</div>
                    <p>
                      The questions are designed on different parameters like
                      grammar, spelling, vocabulary and listening ability.
                    </p>
                  </div>
                  <div className="asses_intru_list">
                    <div>•</div>
                    <p>
                      You will have 20 minutes to complete the test. At the end,
                      you will get a score and a scale indicating your level of
                      English proficiency. Remember, this test is intended only
                      to assess your English and the score you achieve is not
                      indicative of your IELTS performance.
                    </p>
                  </div>
                </div>
                <div style={{ alignSelf: "flex-start" }}>Good Luck!</div>
                <div style={{ alignSelf: "center" }}>
                  <button
                    className="btn"
                    onClick={() => {
                      setTest(1);
                      // timer.start();

                      // Start the timer
                    }}>
                    Start Test
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {getTest === 1 ? (
            <AssessmentTest setTest={setTest} getlisttestqes={getlisttestqes} />
          ) : null}

          {getTest === 2 ? (
            <AssessmenttestReview
              setTest={setTest}
              getlisttestqes={getlisttestqes}
            />
          ) : null}

          {getTest === 4 ? (
            <>
              <div className="Assessment_main">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}>
                  <h4 className="Assessment_head_main">
                    Your Level Of English
                  </h4>
                  <h5 style={{ display: "flex", justifyContent: "center" }}>
                    STARTER
                  </h5>
                  <h6
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}>
                    <FaTachometerAlt style={{ color: "var(--color-brand)" }} />
                    Total Question : {totalcount}
                  </h6>
                </div>
                <div className="assess_progress_bar_main">
                  <div className="assess_progress_bar_inner">
                    <div>
                      <div className="assessment_title_prog_bar_icon">
                        <HiPencilAlt />
                        <h5 style={{ display: "flex" }}>
                          Attempted: {attemptcount}%
                        </h5>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "20px",
                        display: "flex",
                      }}>
                      <Line
                        percent={attemptcount}
                        strokeWidth={1}
                        trailWidth={1}
                        strokeColor="orange"
                      />
                    </div>
                  </div>
                  <div className="assess_progress_bar_inner">
                    <div>
                      <div className="assessment_title_prog_bar_icon">
                        <h5 style={{ display: "flex" }}>
                          <TiTick />
                        </h5>
                        <h5 style={{ display: "flex" }}>
                          Correct: {correctcount}%
                        </h5>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "20px",
                        display: "flex",
                      }}>
                      <Line
                        percent={correctcount}
                        strokeWidth={1}
                        trailWidth={1}
                        strokeColor="green"
                      />
                    </div>
                  </div>
                  <div className="assess_progress_bar_inner">
                    <div>
                      <div className="assessment_title_prog_bar_icon">
                        <ImCross />
                        <h5 style={{ display: "flex" }}>
                          InCorrect: {incorrectcount}%
                        </h5>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "20px",
                        display: "flex",
                      }}>
                      <Line
                        percent={incorrectcount}
                        strokeWidth={1}
                        trailWidth={1}
                        strokeColor="red"
                      />
                    </div>
                  </div>
                  <div className="assess_progress_bar_inner">
                    <div>
                      <div className="assessment_title_prog_bar_icon">
                        <h5 style={{ display: "flex" }}>
                          <TbReload />
                        </h5>
                        <h5 style={{ display: "flex" }}>
                          Skipped: {skippedcount}%
                        </h5>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "20px",
                        display: "flex",
                      }}>
                      <Line
                        percent={skippedcount}
                        strokeWidth={1}
                        trailWidth={1}
                        strokeColor="gray"
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1rem",
                  }}>
                  <button
                    className="btn start_btn"
                    onClick={() => {
                      Download();
                    }}>
                    Download Solution
                  </button>
                  <button
                    className="btn resume_btn"
                    onClick={() => {
                      setTest(2);
                    }}>
                    Review Test
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default Assessment;
