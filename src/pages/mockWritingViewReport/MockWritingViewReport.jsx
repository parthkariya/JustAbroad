
import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { GoSkipFill } from "react-icons/go";
import { SecViewReportBarChart } from "../../components";
import { FaCheck, FaRegUserCircle } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import ReactModal from "react-modal";
import { Bar } from "react-chartjs-2";
import { ImCross } from "react-icons/im";
import {
  ACCEPT_HEADER,
  add_writing_queries,
  view_mocktest_report,
  view_writing_queries,
  view_writing_report,
} from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";
import axios from "axios";
import Notification from "../../utils/Notification";
import images from "../../constants/images";

const MockWritingViewReport = () => {
  const data = {
    labels: [
      "Multiple choice - One Answer",
      "Notes completion",
      "Table completion",
      "Matching",
    ],
    datasets: [
      {
        label: "You",
        data: [10],
        backgroundColor: "#00D2B9",
        barThickness: 15,
      },
      {
        label: "Topper",
        data: [5],
        backgroundColor: "#013667",
        barThickness: 15,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Display the chart horizontally
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "none",
      border: "none",
      borderRadius: "5px",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };

  const value = 3.5;
  // eslint-disable-next-line no-unused-vars
  const [getGraph, setGraph] = useState(1);
  const [tab, setTab] = useState(1);

  useEffect(() => {
    viewWritingQueriesAPi();
    getWritingReportApi();
  }, []);

  const data2 = [
    {
      id: 1,
      name: "Query",
    },
    {
      id: 2,
      name: "Feedback",
    },
  ];

  const [loading, setloading] = useState(false);
  const [subject, Setsubject] = useState("");
  const [type, Settype] = useState("");
  const [message, Setmessage] = useState("");
  const [getlistview, setListview] = useState([]);
  const [ListAnswer, SetListAnswer] = useState("");
  const [ListAnswer2, SetListAnswer2] = useState("");
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const getWritingReportApi = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(view_mocktest_report, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          setloading(false);
        } else {
          if (res.data.success == 1) {
            SetListAnswer(res.data.answer.answer_1);
            SetListAnswer2(res.data.answer.answer_2);
            // SetListGraph(res.data.graph_data);
            setloading(false);
            // console.log("123",getlistGraph);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };

  const viewWritingQueriesAPi = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", Courseid);
    axios
      .post(view_writing_queries, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          setloading(false);
        } else {
          if (res.data.success == 1) {
            setListview(res.data.data);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };

  const PostRaiseQuery = async () => {
    if (subject === "") {
      Notification("error", "Error", "Enter Subject");
    } else if (type === "") {
      Notification("error", "Error", "Enter Type");
    } else if (message === "") {
      Notification("error", "Error", "Enter message");
    } else {
      setloading(true);
      const Token = await localStorage.getItem("is_token");
      const Courseid = await localStorage.getItem("courseid");

      const formdata = new FormData();
      formdata.append("course_id", Courseid);
      formdata.append("subject", subject);
      formdata.append("type", type);
      formdata.append("message", message);
      axios
        .post(add_writing_queries, formdata, {
          headers: {
            Accept: ACCEPT_HEADER,
            Authorization: "Bearer " + JSON.parse(Token),
          },
        })
        .then((res) => {
          if (res.data.status === "Token is Expired") {
            SetLogout();
            navigate("/");
            setloading(false);
          } else {
            if (res.data.success == 1) {
              setloading(false);
              Settype("");
              Setsubject("");
              Setmessage("");
              Notification("success", "Success!", res.data.message);
              setModalIsOpen(false);
              viewWritingQueriesAPi();
            }
          }
        })
        .catch((err) => {
          console.log("--->err", err);
          setloading(false);
        });
    }
  };

  return (
    <div style={{ padding: "1.5rem" }}>
      <div className="prog_head_main">
        <div className="prog_head_inner">
          <div>
            <p className="prog_head" style={{ marginBottom: "0px" }}>
              Test Report
            </p>
          </div>
          <div className="prog_head_btns">
            <div
              style={{
                background:
                  tab === 1 ? "var(--color-brand)" : "var(--color-white)",
                color: tab === 1 ? "var(--color-white)" : "var(--color-brand)",
                border: "2px solid var(--color-brand)",
                fontWeight: "700",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              // className="btn prog_btn"
              onClick={() => {
                setTab(1);
              }}>
              Test Report
            </div>
            {/* <div
              style={{
                background:
                  tab === 2 ? "var(--color-brand)" : "var(--color-white)",
                color: tab === 2 ? "var(--color-white)" : "var(--color-brand)",
                padding: "0.5rem 1rem",
                fontWeight: "700",
                border: "2px solid var(--color-brand)",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => {
                setTab(2);
              }}>
              Queries
            </div> */}
          </div>
        </div>
      </div>
      {tab === 1 ? (
        <div className="prog_parts sec_test_prog_parts">
          <div className="prog_part1 sec_prog_part1">
            {/* <div className="prog_digit_main">
              <h5 className="prog_digit_head">Writing Session 2</h5>
              <div
                style={{
                  width: "100%",
                  height: "80px",
                  display: "flex",
                  margin: "2rem 0",
                }}>
                <CircularProgressbar
                  value={value}
                  maxValue={10}
                  text={value}
                  styles={buildStyles({
                    pathColor:
                      value <= 5
                        ? "red"
                        : value <= 7
                        ? "#c7b518"
                        : value > 7
                        ? "green"
                        : "#000",
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
                    <p className="prog_digit_inner_txt">
                      {getlist ? getlist.total_que : ""}
                    </p>
                  </div>
                  <p className="prog_digit_inner_txt">Listening</p>
                </div>
                <div className="prog_digit_box">
                  <div className="prog_digit_inner">
                    <FaCheck size={20} color="green" />
                    <p className="prog_digit_inner_txt">9</p>
                  </div>
                  <p className="prog_digit_inner_txt">Correct Answer</p>
                </div>
                <div className="prog_digit_box">
                  <div className="prog_digit_inner">
                    <ImCross size={16} color="var(--color-brand)" />
                    <p className="prog_digit_inner_txt">2</p>
                  </div>
                  <p className="prog_digit_inner_txt">Incorrect Answer</p>
                </div>
                <div className="prog_digit_box">
                  <div className="prog_digit_inner">
                    <GoSkipFill size={20} color="#c7b518" />
                    <p className="prog_digit_inner_txt">29</p>
                  </div>
                  <p className="prog_digit_inner_txt">Skip Questions</p>
                </div>
              </div>
            </div> */}
            {/* <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                padding: "2rem",
                borderRadius: "8px",
              }}>
              <Bar data={data} options={options} maxValue={10} />
            </div> */}
            {/* <div className="prog_details_main">
              <div className="prog_detail_head_flex">
                <p className="prog_detail_head">Question-wise Report</p>
                <div className="prog_filtr_flex"></div>
              </div>
              {getGraph === 1 ? (
                <>
                  <div className="prog_detail_table_main_mainn22">
                    <div className="prog_detail_table_main prog_detail_table_main_respo">
                      <div className="prog_table_head prog_table_head22">
                        <p className="prog_table_head_txt1 sect_prog_table_head_txt1">
                          Q.No
                        </p>
                        <p className="prog_table_head_txt sect_prog_table_head_txt2">
                          Expected Answer
                        </p>
                        <p className="prog_table_head_txt sect_prog_table_head_txt2">
                          Your Answer
                        </p>
                        <p className="prog_table_head_txt sect_prog_table_head_txt1">
                          Result
                        </p>
                        <p className="prog_table_head_txt sect_prog_table_head_txt sect_prog_table_head_txt_last">
                          Detailed Solution
                        </p>
                      </div>
                      {getlistAnswer.length >= 1 ? (
                        <>
                          {getlistAnswer.map((item, index) => {
                            return (
                              <div className="prog_table_inner prog_table_inner22">
                                <p className="prog_table_head_txt1 sect_prog_table_head_txt1">
                                  {item.id}
                                </p>
                                <p className="prog_table_head_txt sect_prog_table_head_txt sect_prog_table_head_txt2">
                                  {item.answer_1}
                                </p>
                                <p className="prog_table_head_txt sect_prog_table_head_txt sect_prog_table_head_txt2">
                                  {item.answer_2}
                                </p>
                                <p className="prog_table_head_txt sect_prog_table_head_txt sect_prog_table_head_txt_last"></p>
                              </div>
                            );
                          })}
                        </>
                      ) : null}
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              <div className="prog_detail_table_toggle_main"></div>
            </div> */}
            <div className="prog_details_main">
              <div>
                <span style={{ fontSize: "20px" }} className="que_no">
                  Question-wise Report
                </span>
              </div>
              <div>
                <span style={{ fontSize: "16px" }} className="que_no">
                  Your Reponse
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    paddingTop: "1rem",
                  }}>
                  <div className="SecReadTestPart1_content1_main SecReadTestPart1_content1_main_edited">
                    <div>
                      <div>
                        <h6 className="que_no">Writing Task 1</h6>
                      </div>
                      <div>
                        <p className="que_no">
                          You should spend about 20 minutes on this task
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        border: "1px solid ",
                        padding: "0.5rem",
                      }}>
                      <span className="que_no">
                        The pie charts below show the expenditure of the people
                        of a country on different activities in 2000 and 2010.
                      </span>
                      <span className="que_no">
                        Summarise the information by selecting and reporting the
                        main features, and make comparisons where relevant.
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        marginTop: "1rem",
                      }}>
                      <div className="que_no">Write at least 150 words.</div>
                      <div
                        className=""
                        style={{
                          height: "400px",
                          width: "550px",
                        }}>
                        <img
                          src={images.mockTestPieChart1}
                          alt=""
                          className="writeTest_img_inner"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div
                        className=""
                        style={{
                          height: "400px",
                          width: "550px",
                        }}>
                        <img
                          src={images.mockTestPieChart2}
                          alt=""
                          className="writeTest_img_inner"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="que_no" style={{ fontSize: "18px" }}>
                      Your Answer
                    </span>
                    <span>{ListAnswer ? ListAnswer : ""}</span>
                  </div>
                </div>
                <hr />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}>
                  <div className="SecReadTestPart1_content1_main SecReadTestPart1_content1_main_edited">
                    <div>
                      <div>
                        <h6 className="que_no">Writing Task 2</h6>
                      </div>
                      <div>
                        <p className="que_no">
                          You should spend about 20 minutes on this task
                        </p>
                      </div>
                    </div>
                    <div>Write about the following topic:</div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        border: "1px solid ",
                        padding: "0.5rem",
                      }}>
                      <span className="que_no">
                        Many believe that the goal of one’s career should be to
                        pursue a passion while others feel it is merely a way to
                        earn a livelihood. Discuss both views and give your
                        opinion.
                      </span>
                    </div>
                    <div>
                      <span>
                        Give reasons for your answer and include any relevant
                        examples from your own knowledge or experience.
                      </span>
                      <br />
                      <br />
                      <span>Write at least 250 words.</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className="que_no" style={{ fontSize: "18px" }}>
                      Your Answer
                    </span>
                    <span>{ListAnswer2 ? ListAnswer2 : ""}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="prog_details_main">
              <div className="prog_detail_head_flex">
                <p className="prog_detail_head">Past Performance</p>
                <div className="prog_filtr_flex"></div>
              </div>

              {/* <BarChart /> */}
              <SecViewReportBarChart />

              <div className="prog_detail_table_toggle_main"></div>
            </div>
          </div>
          <div className="topper_part2_btns_flex topper_part2_btns_flex222">
            <button className="btn topper_part2_btn">Remark</button>
            <button className="btn" style={{ textTransform: "capitalize" }}>
              Know your Bands
            </button>
          </div>
          <div className="prog_part2 sec_prog_part2 prog_part2_toper">
            <div className="topper_part2_btns_flex topper_part2_btns_flex22">
              <button className="btn topper_part2_btn">Remark</button>
              <button className="btn" style={{ textTransform: "capitalize" }}>
                Know your Bands
              </button>
            </div>

            <div className="leaderboard-main leaderboard-main22">
              <div className="leaderboard-main-head">
                <HiDocumentReport size={25} color="var(--color-brand)" />

                <p className="leader_head">Toppers Report</p>
              </div>
              <div className="leaderboard-flex leaderboard-flex-topper">
                <div className="leaderboard-flex-inner leaderboard-flex-inner-head leaderboard-flex-inner22">
                  <div className="leaderboard-flex-inner-txt leaderboard-flex-inner-txt-topper_head ">
                    Types Of Answer
                  </div>

                  <div className="leaderboard-flex-inner-txt1">Digits</div>
                </div>
                <div className="leaderboard-flex-inner leaderboard-flex-inner22 leaderboard-flex-inner-topper">
                  <div className="leaderboard-flex-inner-txt">
                    Correct Answer
                  </div>
                  <div className="leaderboard-flex-inner-txt1">40</div>
                </div>
                <div className="leaderboard-flex-inner leaderboard-flex-inner22 leaderboard-flex-inner-topper">
                  <div className="leaderboard-flex-inner-txt">Wrong Answer</div>
                  <div className="leaderboard-flex-inner-txt1">-</div>
                </div>
                <div className="leaderboard-flex-inner leaderboard-flex-inner22 leaderboard-flex-inner-topper">
                  <div className="leaderboard-flex-inner-txt">Skip Answer</div>
                  <div className="leaderboard-flex-inner-txt1">-</div>
                </div>
              </div>
            </div>

            <div className="leaderboard-main leaderboard-main22">
              <div className="leaderboard-main-head">
                <MdLeaderboard size={25} color="var(--color-brand)" />
                <p className="leader_head">Leaderboard</p>
              </div>
              <div className="leaderboard-flex">
                <div className="leaderboard-flex-inner leaderboard-flex-inner22">
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
                    <FaRegUserCircle size={25} color="var(--color-brand" />
                    <div className="leaderboard-flex-inner-txt1">
                      Dhanshree Dhrafani
                    </div>
                  </div>
                  <div className="leaderboard-flex-inner-txt">1270pts</div>
                </div>
                <div className="leaderboard-flex-inner leaderboard-flex-inner22">
                  <div
                    className="leaderboard-flex-inner-txt"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1px",
                    }}>
                    <FaHashtag color="var(--color-brand)" size={15} />{" "}
                    <span style={{ fontSize: "18px" }}>2</span>
                  </div>
                  <div className="leaderboard-flex-inner-icon">
                    <FaRegUserCircle size={25} color="var(--color-brand" />
                    <div className="leaderboard-flex-inner-txt1">
                      Dhanshree Dhrafani
                    </div>
                  </div>
                  <div className="leaderboard-flex-inner-txt">1270pts</div>
                </div>
                <div className="leaderboard-flex-inner leaderboard-flex-inner22">
                  <div
                    className="leaderboard-flex-inner-txt"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1px",
                    }}>
                    <FaHashtag color="var(--color-brand)" size={15} />{" "}
                    <span style={{ fontSize: "18px" }}>3</span>
                  </div>
                  <div className="leaderboard-flex-inner-icon">
                    <FaRegUserCircle size={25} color="var(--color-brand" />
                    <div className="leaderboard-flex-inner-txt1">
                      Dhanshree Dhrafani
                    </div>
                  </div>
                  <div className="leaderboard-flex-inner-txt">1270pts</div>
                </div>
                <div className="leaderboard-flex-inner leaderboard-flex-inner22">
                  <div
                    className="leaderboard-flex-inner-txt"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1px",
                    }}>
                    <FaHashtag color="var(--color-brand)" size={15} />{" "}
                    <span style={{ fontSize: "18px" }}>4</span>
                  </div>
                  <div className="leaderboard-flex-inner-icon">
                    <FaRegUserCircle size={25} color="var(--color-brand" />
                    <div className="leaderboard-flex-inner-txt1">
                      Dhanshree Dhrafani
                    </div>
                  </div>
                  <div className="leaderboard-flex-inner-txt">1270pts</div>
                </div>
                <div className="leaderboard-flex-inner leaderboard-flex-inner22">
                  <div
                    className="leaderboard-flex-inner-txt"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1px",
                    }}>
                    <FaHashtag color="var(--color-brand)" size={15} />{" "}
                    <span style={{ fontSize: "18px" }}>5</span>
                  </div>
                  <div className="leaderboard-flex-inner-icon">
                    <FaRegUserCircle size={25} color="var(--color-brand" />
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
      ) : (
        <>
          {" "}
          <div
            onClick={setModalIsOpen}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "2rem",
            }}>
            <button className="btn">Raise a Query</button>
          </div>
          <div className="table_support_main_mainn">
            <div className="table_support_main table_support_main_respo">
              <div className="table_support_head_main">
                <div className="table_support_head_subject_inner">
                  <h5>Subject</h5>
                </div>
                <div className="table_support_head_type_inner">
                  <h5>Type</h5>
                </div>
                <div className="table_support_head_created_inner">
                  <h5>Created At</h5>
                </div>
                <div className="table_support_head_status_inner">
                  <h5>Status</h5>
                </div>
                <div className="table_support_head_message_inner">
                  <h5>Message</h5>
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
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
                    {getlistview && getlistview.length > 0
                      ? getlistview.map((item, index) => {
                          return (
                            <>
                              <div className="table_support_data_main">
                                <div className="table_support_head_subject_inner">
                                  <p>{item.subject ? item.subject : ""}</p>
                                </div>
                                <div className="table_support_head_type_inner">
                                  <p>
                                    {item.type
                                      ? item.type === "1"
                                        ? "Query"
                                        : item.type === "2"
                                        ? "Feedback"
                                        : ""
                                      : ""}
                                  </p>
                                </div>
                                <div className="table_support_head_created_inner">
                                  <p>
                                    {item.date ? item.date : ""}{" "}
                                    {item.time ? item.time : ""}
                                  </p>
                                </div>
                                {item.status === 0 ? (
                                  <div className="table_support_head_status_inner">
                                    <p>Waiting</p>
                                  </div>
                                ) : (
                                  <div className="table_support_head_status_inner">
                                    <p>Resloved</p>
                                  </div>
                                )}
                                <div className="table_support_head_message_inner">
                                  <p>{item.message ? item.message : ""}</p>
                                </div>
                              </div>
                              <div className="underline_table_support" />
                            </>
                          );
                        })
                      : null}
                  </>
                )}
                {/* <div className="table_support_data_main">
                  <div className="table_support_head_subject_inner">
                    <p>Test</p>
                  </div>
                  <div className="table_support_head_type_inner">
                    <p>Feedback</p>
                  </div>
                  <div className="table_support_head_created_inner">
                    <p> 1/1/24 6:06 PM</p>
                  </div>
                  <div className="table_support_head_status_inner">
                    <p>Waiting</p>
                  </div>
                  <div className="table_support_head_message_inner">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias, voluptates?
                    </p>
                  </div>
                </div>
                <div className="underline_table_support" />
                <div className="table_support_data_main">
                  <div className="table_support_head_subject_inner">
                    <p>Test</p>
                  </div>
                  <div className="table_support_head_type_inner">
                    <p>Feedback</p>
                  </div>
                  <div className="table_support_head_created_inner">
                    <p> 1/1/24 6:06 PM</p>
                  </div>
                  <div className="table_support_head_status_inner">
                    <p>Waiting</p>
                  </div>
                  <div className="table_support_head_message_inner">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias, voluptates?
                    </p>
                  </div>
                </div>
                <div className="underline_table_support" />
                <div className="table_support_data_main">
                  <div className="table_support_head_subject_inner">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="table_support_head_type_inner">
                    <p>Feedback</p>
                  </div>
                  <div className="table_support_head_created_inner">
                    <p> 1/1/24 6:06 PM</p>
                  </div>
                  <div className="table_support_head_status_inner">
                    <p>Waiting</p>
                  </div>
                  <div className="table_support_head_message_inner">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>{" "} */}
              </div>
            </div>
          </div>
        </>
      )}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}>
        <>
          <div className="navbar_modal_signin_head">
            <h3>Raise a Query</h3>
          </div>
          <div className="model_sizing">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}>
              <span>Type</span>
              <select
                className=""
                name="position"
                id="lang"
                style={{ padding: "0.5rem", cursor: "pointer" }}
                value={type}
                onChange={(e) => {
                  Settype(e.target.value);
                }}>
                <option value="" selected disabled>
                  Select Type
                </option>
                {data2.map((item) => {
                  return (
                    <option value={item.id} key={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <div>
                <label>Subject</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="navbar_modal_input_inner"
                  value={subject}
                  onChange={(e) => {
                    Setsubject(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <span>Message</span>
              <div>
                <textarea
                  style={{ width: "100%", height: "90px" }}
                  value={message}
                  onChange={(e) => {
                    Setmessage(e.target.value);
                  }}></textarea>
              </div>
            </div>
            <div>
              <button
                className="btn"
                style={{ width: "100%", margin: "0px" }}
                onClick={() => {
                  // AddSupport();
                  PostRaiseQuery();
                }}>
                Submit
              </button>
            </div>
          </div>
        </>
      </ReactModal>
    </div>
  );
};

export default MockWritingViewReport;