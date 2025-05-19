import React, { useEffect, useState } from "react";
import "./ProgressReport.css";
import { LuListFilter } from "react-icons/lu";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { GoSkipFill } from "react-icons/go";
import { BarChart } from "../../components";
import { FaCheck, FaRegUserCircle } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import axios from "axios";
import {
  ACCEPT_HEADER,
  listening_progress_report,
  reading_progress_report,
} from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";
import { ImCross } from "react-icons/im";
import { Helmet } from "react-helmet";

const ProgressReport = () => {
  const [getGraph, setGraph] = useState(1);
  const [getname, SetName] = useState("Listening");

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  useEffect(() => {
    ListenApi();
  }, []);

  const [getcorrect, SetCorrect] = useState("");
  const [getincorrect, SetInCorrect] = useState("");
  const [getattempt, SetAttempt] = useState("");
  const [gettotalque, SetTotalQue] = useState("");
  const [getlist, SetList] = useState([]);
  const [grapdata, SerGrapData] = useState();
  const [loading, SetLoading] = useState(false);
  const ListenApi = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(listening_progress_report, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          SetLoading(false);
        } else {
          if (res.data.success == 1) {
            SetCorrect(res.data.correct);
            SetInCorrect(res.data.in_correct);
            SetAttempt(res.data.attempt);
            SetTotalQue(res.data.total_que);
            SetList(res.data.data);
            SerGrapData(res.data.graph_data);
            SetLoading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        SetLoading(false);
      });
  };

  const ReadApi = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(reading_progress_report, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          SetLoading(false);
        } else {
          if (res.data.success == 1) {
            SetCorrect(res.data.correct);
            SetInCorrect(res.data.in_correct);
            SetAttempt(res.data.attempt);
            SetTotalQue(res.data.total_que);
            SetList(res.data.data);
            SerGrapData(res.data.graph_data);
            SetLoading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        SetLoading(false);
      });
  };

  return (
    <>
      <Helmet>

        <title>Just Abroad | Progress Report</title>

      </Helmet>
      <div style={{ padding: "1.5rem" }}>
        {loading === true ? (
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
            <div className="prog_head_main">
              <div className="prog_head_inner">
                <div>
                  <h4 className="prog_head">Progress Report</h4>
                </div>
                <div className="prog_head_btns">
                  <button
                    className="btn prog_btn"
                    style={{
                      color: getname === "Listening" ? "#fff" : "#000",
                      backgroundColor:
                        getname === "Listening" ? "var(--color-brand)" : "#fff",
                    }}
                    onClick={() => {
                      ListenApi();
                      SetName("Listening");
                      setGraph(1);
                    }}>
                    Listening
                  </button>
                  <button
                    className="btn prog_btn prog_btn2"
                    onClick={() => {
                      ReadApi();
                      SetName("Reading");
                      setGraph(1);
                    }}
                    style={{
                      color: getname === "Reading" ? "#fff" : "#000",
                      backgroundColor:
                        getname === "Reading" ? "var(--color-brand)" : "#fff",
                    }}>
                    Reading
                  </button>
                  {/* <button className="btn prog_btn prog_btn2">Writing</button>
            <button className="btn prog_btn prog_btn2">Speaking</button> */}
                  <LuListFilter size={30} />
                </div>
              </div>
            </div>

            <div className="prog_parts">
              <div className="prog_part1" style={{ gap: "3rem" }}>
                <div className="prog_digit_main">
                  <h5 className="prog_digit_head">{getname}</h5>
                  <div
                    style={{
                      width: "100%",
                      height: "80px",
                      display: "flex",
                      margin: "2rem 0",
                    }}>
                    <CircularProgressbar
                      value={getcorrect ? getcorrect : "0"}
                      maxValue={0}
                      text={getcorrect ? getcorrect : "0"}
                      styles={buildStyles({
                        pathColor:
                          getcorrect <= 10
                            ? "red"
                            : getcorrect <= 28
                              ? "#c7b518"
                              : getcorrect > 35
                                ? "green"
                                : "#000",
                        //  pathTransitionDuration: 15
                        textSize: 32,
                        textColor: "var(--color-black)",
                      })}
                    />
                  </div>
                  <div className="prog_digit_inner_flex">
                    <div className="prog_digit_box">
                      <div className="prog_digit_inner">
                        <BsFillPatchQuestionFill
                          size={20}
                          color="var(--color-brand)"
                        />
                        <p
                          className="prog_digit_inner_txt"
                          style={{ fontSize: "20px" }}>
                          {gettotalque}
                        </p>
                      </div>
                      <p className="prog_digit_inner_txt">Total Questions</p>
                    </div>
                    <div className="prog_digit_box">
                      <div className="prog_digit_inner">
                        <FaCheck size={20} color="green" />
                        {/* <TiTick size={22} color="green" /> */}
                        <p
                          className="prog_digit_inner_txt"
                          style={{ fontSize: "20px" }}>
                          {getcorrect}
                        </p>
                      </div>
                      <p className="prog_digit_inner_txt">Correct Answer</p>
                    </div>
                    <div className="prog_digit_box">
                      <div className="prog_digit_inner">
                        <ImCross size={16} color="var(--color-brand)" />
                        {/* <RxCross2 size={20} color="var(--color-brand)" style={{fontWeight:"900"}}/> */}
                        <p
                          className="prog_digit_inner_txt"
                          style={{ fontSize: "20px" }}>
                          {getincorrect}
                        </p>
                      </div>
                      <p className="prog_digit_inner_txt">Incorrect Answer</p>
                    </div>
                    <div className="prog_digit_box">
                      <div className="prog_digit_inner">
                        <GoSkipFill size={20} color="#c7b518" />
                        <h5
                          className="prog_digit_inner_txt"
                          style={{ fontSize: "20px" }}>
                          {getattempt}
                        </h5>
                      </div>
                      <h5 className="prog_digit_inner_txt">Skip Questions</h5>
                    </div>
                  </div>
                </div>
                {getname === "Listening" ? (
                  <div className="prog_details_main">
                    <div className="prog_detail_head_flex">
                      <p className="prog_detail_head">Trend Analysis</p>
                      <div className="prog_filtr_flex">
                        <button
                          className="btn btn_prog_graph"
                          onClick={() => {
                            setGraph(1);
                          }}
                          style={{ textTransform: "capitalize" }}>
                          List View
                        </button>
                        <button
                          className="btn btn_prog_graph"
                          onClick={() => {
                            setGraph(2);
                          }}
                          style={{ textTransform: "capitalize" }}>
                          Graph View
                        </button>
                      </div>
                    </div>
                    {getGraph === 1 ? (
                      <>
                        <div className="prog_detail_table_main_mainn">
                          <div
                            className="prog_detail_table_main"
                            style={{ borderRadius: "10px" }}>
                            <div className="prog_table_head">
                              <ul className="prog_table_head_txt1">Test Title</ul>
                              <p className="prog_table_head_txt">Accuracy</p>
                              <p className="prog_table_head_txt">Attempt</p>
                              <p className="prog_table_head_txt">Score</p>
                              <p className="prog_table_head_txt">Band</p>
                            </div>

                            {getlist && getlist.length > 0
                              ? getlist.map((item, index) => {
                                return (
                                  <div className="prog_table_inner">
                                    <p className="prog_table_head_txt1">
                                      {item.listening_name}
                                    </p>
                                    <p className="prog_table_head_txt">
                                      {item.accuracy}
                                    </p>
                                    <p className="prog_table_head_txt">
                                      {item.attempt_ans}
                                    </p>
                                    <p className="prog_table_head_txt">
                                      {item.correct_ans}
                                    </p>
                                    <p className="prog_table_head_txt">
                                      {item.band}
                                    </p>
                                  </div>
                                );
                              })
                              : null}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <BarChart grapdata={grapdata} />
                      </>
                    )}

                    <div className="prog_detail_table_toggle_main"></div>
                  </div>
                ) : getname === "Reading" ? (
                  <div className="prog_details_main">
                    <div className="prog_detail_head_flex">
                      <p className="prog_detail_head">Trend Analysis</p>
                      <div className="prog_filtr_flex">
                        <button
                          className="btn btn_prog_graph"
                          onClick={() => {
                            setGraph(1);
                          }}
                          style={{ textTransform: "capitalize" }}>
                          List View
                        </button>
                        <button
                          className="btn btn_prog_graph"
                          onClick={() => {
                            setGraph(2);
                          }}
                          style={{ textTransform: "capitalize" }}>
                          Graph View
                        </button>
                      </div>
                    </div>
                    {getGraph === 1 ? (
                      <>
                        <div className="prog_detail_table_main_mainn">
                          <div className="prog_detail_table_main">
                            <div className="prog_table_head">
                              <p className="prog_table_head_txt1">Test Title</p>
                              <p className="prog_table_head_txt">Accuracy</p>
                              <p className="prog_table_head_txt">Attempt</p>
                              <p className="prog_table_head_txt">Score</p>
                              <p className="prog_table_head_txt">Band</p>
                            </div>

                            {getlist && getlist.length > 0
                              ? getlist.map((item, index) => {
                                return (
                                  <div className="prog_table_inner">
                                    <p className="prog_table_head_txt1">
                                      {item.reading_name}
                                    </p>
                                    <p className="prog_table_head_txt">
                                      {item.accuracy}
                                    </p>
                                    <p className="prog_table_head_txt">
                                      {item.attempt_ans}
                                    </p>
                                    <p className="prog_table_head_txt">
                                      {item.correct_ans}
                                    </p>
                                    <p className="prog_table_head_txt">
                                      {item.band}
                                    </p>
                                  </div>
                                );
                              })
                              : null}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <BarChart grapdata={grapdata} />
                      </>
                    )}

                    <div className="prog_detail_table_toggle_main"></div>
                  </div>
                ) : null}
              </div>
              <div className="prog_part2">
                <div className="leaderboard-main">
                  <div className="leaderboard-main-head">
                    <MdLeaderboard size={25} color="var(--color-brand)" />
                    <h5 className="leader_head">Leaderboard</h5>
                  </div>
                  <div className="leaderboard-flex">
                    <div className="leaderboard-flex-inner">
                      <div
                        className="leaderboard-flex-inner-txt"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1px",
                        }}>
                        <FaHashtag color="var(--color-brand)" size={15} />
                        <span style={{ fontSize: "18px" }}>1</span>
                      </div>
                      <div className="leaderboard-flex-inner-icon">
                        <FaRegUserCircle size={22} color="var(--color-brand" />
                        <div className="leaderboard-flex-inner-txt1">
                          Dhanshree Dhrafani
                        </div>
                      </div>
                      <div className="leaderboard-flex-inner-txt">1270pts</div>
                    </div>
                    <div className="leaderboard-flex-inner">
                      <div
                        className="leaderboard-flex-inner-txt"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1px",
                        }}>
                        <FaHashtag color="var(--color-brand)" size={15} />
                        <span style={{ fontSize: "18px" }}>1</span>
                      </div>
                      <div className="leaderboard-flex-inner-icon">
                        <FaRegUserCircle size={22} color="var(--color-brand" />
                        <div className="leaderboard-flex-inner-txt1">
                          Dhanshree Dhrafani
                        </div>
                      </div>
                      <div className="leaderboard-flex-inner-txt">1270pts</div>
                    </div>
                    <div className="leaderboard-flex-inner">
                      <div
                        className="leaderboard-flex-inner-txt"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1px",
                        }}>
                        <FaHashtag color="var(--color-brand)" size={15} />{" "}
                        <span style={{ fontSize: "18px" }}>1</span>
                      </div>
                      <div className="leaderboard-flex-inner-icon">
                        <FaRegUserCircle size={22} color="var(--color-brand" />
                        <div className="leaderboard-flex-inner-txt1">
                          Dhanshree Dhrafani
                        </div>
                      </div>
                      <div className="leaderboard-flex-inner-txt">1270pts</div>
                    </div>
                    <div className="leaderboard-flex-inner">
                      <div
                        className="leaderboard-flex-inner-txt"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1px",
                        }}>
                        <FaHashtag color="var(--color-brand)" size={15} />{" "}
                        <span style={{ fontSize: "18px" }}>1</span>
                      </div>
                      <div className="leaderboard-flex-inner-icon">
                        <FaRegUserCircle size={22} color="var(--color-brand" />
                        <div className="leaderboard-flex-inner-txt1">
                          Dhanshree Dhrafani
                        </div>
                      </div>
                      <div className="leaderboard-flex-inner-txt">1270pts</div>
                    </div>
                    <div className="leaderboard-flex-inner">
                      <div
                        className="leaderboard-flex-inner-txt"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1px",
                        }}>
                        <FaHashtag color="var(--color-brand)" size={15} />{" "}
                        <span style={{ fontSize: "18px" }}>1</span>
                      </div>
                      <div className="leaderboard-flex-inner-icon">
                        <FaRegUserCircle size={22} color="var(--color-brand" />
                        <div className="leaderboard-flex-inner-txt1">
                          Dhanshree Dhrafani
                        </div>
                      </div>
                      <div className="leaderboard-flex-inner-txt">1270pts</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div></div> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProgressReport;
// {
//   <div className="prog_table_inner">
//   <p className="prog_table_head_txt1">Listing Session 9</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
// </div>
// <div className="prog_table_inner">
//   <p className="prog_table_head_txt1">Listing Session 10</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
// </div>
// <div className="prog_table_inner">
//   <p className="prog_table_head_txt1">Listing Session 3</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
// </div>
// <div className="prog_table_inner">
//   <p className="prog_table_head_txt1">Listing Session 7</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
// </div>
// <div className="prog_table_inner">
//   <p className="prog_table_head_txt1">Listing Session 8</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
//   <p className="prog_table_head_txt">0</p>
// </div>
// }
