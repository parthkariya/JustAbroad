import React, { useEffect, useState } from "react";
import "./CurriculumPage.css";
import {
  CurrWeekFirstClass,
  CurrWeekFourthClass,
  CurrWeekFourthHome,
  CurrWeekSecClass,
  CurrWeekSecHome,
  CurrWeekThirdClass,
  CurrWeekThirdHome,
  SecListningTest,
  SecReadingTest,
  SecSpeakinTest,
  SecTestContainer,
  SecWritingTest,
} from "../../container";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ACCEPT_HEADER,
  view_curriculum_listening,
  view_curriculum_listening_home,
  view_curriculum_reading,
  view_curriculum_reading_home,
  view_curriculum_speaking,
  view_curriculum_speaking_home,
  view_curriculum_writing,
  view_curriculum_writing_home,
  view_listening,
  view_listening_data,
  view_reading,
  view_reading_data,
  view_speaking_data,
  view_writing_data,
} from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import CurrWeekFirstHome from "../../container/currweekfirsthome/CurrWeekFirstHome";

const CurriculumPage = () => {
  const [getTab, setTab] = useState(1);
  const [getTab2, setTab2] = useState(1);
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();
  const [getListning, setListning] = useState("");
  const [getReading, setReading] = useState("");
  const [getWriting, setWriting] = useState("");
  const [getSpeaking, setSpeaking] = useState("");
  const [getCurrWeekFirstHome, setCurrWeekFirstHome] = useState("");
  const [getCurrWeekSecHome, setCurrWeekSecHome] = useState("");
  const [getCurrWeekThirdHome, setCurrWeekThirdHome] = useState("");
  const [getCurrWeekFourthHome, setCurrWeekFourthHome] = useState("");
  const [gettab, settab] = useState(1);

  const ViewListningApi = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(view_listening, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          Navigate("/");
        } else {
          if (res.data.success == 1) {
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
      });
  };

  const ViewReadingApi = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(view_reading, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.status === "Token is Expired") {
          SetLogout();
          Navigate("/");
        } else {
          if (res.data.success == 1) {
          }
        }
      })

      .catch((err) => {
        console.log("--->err", err);
      });
  };

  const ViewWritngApi = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(view_reading, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.status === "Token is Expired") {
          SetLogout();
          Navigate("/");
        } else {
          if (res.data.success == 1) {
          }
        }
      })

      .catch((err) => {
        console.log("--->err", err);
      });
  };

  const ViewSpeakingApi = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(view_reading, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.status === "Token is Expired") {
          SetLogout();
          Navigate("/");
        } else {
          if (res.data.success == 1) {
          }
        }
      })

      .catch((err) => {
        console.log("--->err", err);
      });
  };

  useEffect(() => {
    ViewWeekFirstDataClass();
    ViewWeekFirstDataHome();
  }, []);

  const [isloading, SetLoading] = useState(false);

  const ViewWeekFirstDataClass = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(view_curriculum_speaking, {
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
          // if (res.data.success == 1) {
          setListning(res.data);
          SetLoading(false);
          // }else{
          //   SetLoading(false)
          // }
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
        SetLoading(false);
      });
  };

  const ViewWeekSecondDataClass = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(view_curriculum_writing, {
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
          // if (res.data.success == 1) {
          setReading(res.data);
          SetLoading(false);
          // }else{
          //   SetLoading(false)
          // }
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
        SetLoading(false);
      });
  };

  const ViewWeekThirdDataClass = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(view_curriculum_reading, {
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
          // if (res.data.success == 1) {
          setWriting(res.data);
          SetLoading(false);
          // }else{
          //   SetLoading(false)
          // }
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
        SetLoading(false);
      });
  };

  const ViewWeekFourthDataClass = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(view_curriculum_listening, {
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
          // if (res.data.success == 1) {
          setSpeaking(res.data);
          SetLoading(false);
          // }
          // else{
          //   SetLoading(false)
          // }
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
        SetLoading(false);
      });
  };

  const ViewWeekFirstDataHome = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(view_curriculum_speaking_home, {
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
          // if (res.data.success == 1) {
          setCurrWeekFirstHome(res.data);
          SetLoading(false);
          // }else{
          //   SetLoading(false)
          // }
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
        SetLoading(false);
      });
  };

  const ViewWeekSecondDataHome = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(view_curriculum_writing_home, {
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
          // if (res.data.success == 1) {
          setCurrWeekSecHome(res.data);
          SetLoading(false);
          // }else{
          //   SetLoading(false)
          // }
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
        SetLoading(false);
      });
  };

  const ViewWeekThirdDataHome = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(view_curriculum_reading_home, {
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
          // if (res.data.success == 1) {
          setCurrWeekThirdHome(res.data);
          SetLoading(false);
          // }else{
          //   SetLoading(false)
          // }
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
        SetLoading(false);
      });
  };

  const ViewWeekFourthDataHome = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(view_curriculum_listening_home, {
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
          // if (res.data.success == 1) {
          setCurrWeekFourthHome(res.data);
          SetLoading(false);
          // }
          // else{
          //   SetLoading(false)
          // }
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
        SetLoading(false);
      });
  };

  return (
    <>
      <div className="Sec_Test_head_main" style={{ padding: "2rem 0" }}>
        <h2>Curriculum</h2>
      </div>

      <div className="curr_head_btn_main">
        <button
          className="curr_btn btn"
          style={{
            background:
              gettab === 1 ? "var(--color-brand)" : "var(--color-white)",
            color: gettab === 1 ? "var(--color-white)" : "var(--color-brand)",
          }}
          onClick={() => {
            settab(1);
          }}>
          Classwork
        </button>
        <button
          className="curr_btn btn"
          style={{
            background:
              gettab === 2 ? "var(--color-brand)" : "var(--color-white)",
            color: gettab === 2 ? "var(--color-white)" : "var(--color-brand)",
          }}
          onClick={() => {
            settab(2);
          }}>
          Homework
        </button>
      </div>
      <div className="SectionTest_main">
        {gettab === 1 ? (
          <>
            <div className="SectionTest_tab_main">
              <div
                style={{
                  cursor: "pointer",
                  background:
                    getTab === 1 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 1 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                className="SectionTest_tab_inner"
                onClick={() => {
                  setTab(1);
                  ViewWeekFirstDataClass();
                }}>
                Week 1
              </div>
              <div className="verticle_line"></div>
              <div
                style={{
                  cursor: "pointer",
                  background:
                    getTab === 2 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 2 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                className="SectionTest_tab_inner"
                onClick={() => {
                  setTab(2);
                  ViewWeekSecondDataClass();
                }}>
                Week 2
              </div>
              <div className="verticle_line"></div>
              <div
                style={{
                  cursor: "pointer",
                  background:
                    getTab === 3 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 3 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                className="SectionTest_tab_inner"
                onClick={() => {
                  setTab(3);
                  ViewWeekThirdDataClass();
                }}>
                Week 3
              </div>
              <div className="verticle_line"></div>
              <div
                style={{
                  cursor: "pointer",
                  background:
                    getTab === 4 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 4 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                className="SectionTest_tab_inner"
                onClick={() => {
                  setTab(4);
                  ViewWeekFourthDataClass();
                }}>
                Week 4
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="SectionTest_tab_main">
              <div
                style={{
                  cursor: "pointer",
                  background:
                    getTab2 === 1 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab2 === 1 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                className="SectionTest_tab_inner"
                onClick={() => {
                  setTab2(1);
                  ViewWeekFirstDataHome();
                }}>
                Week 1
              </div>
              <div className="verticle_line"></div>
              <div
                style={{
                  cursor: "pointer",
                  background:
                    getTab2 === 2 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab2 === 2 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                className="SectionTest_tab_inner"
                onClick={() => {
                  setTab2(2);
                  ViewWeekSecondDataHome();
                }}>
                Week 2
              </div>
              <div className="verticle_line"></div>
              <div
                style={{
                  cursor: "pointer",
                  background:
                    getTab2 === 3 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab2 === 3 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                className="SectionTest_tab_inner"
                onClick={() => {
                  setTab2(3);
                  ViewWeekThirdDataHome();
                }}>
                Week 3
              </div>
              <div className="verticle_line"></div>
              <div
                style={{
                  cursor: "pointer",
                  background:
                    getTab2 === 4 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab2 === 4 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                className="SectionTest_tab_inner"
                onClick={() => {
                  setTab2(4);
                  ViewWeekFourthDataHome();
                }}>
                Week 4
              </div>
            </div>
          </>
        )}

        {isloading === true ? (
          <>
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
          </>
        ) : (
          <>
            {gettab === 1 ? (
              <>
                {getTab === 1 ? (
                  <CurrWeekFirstClass getListning={getListning} />
                ) : getTab === 2 ? (
                  <CurrWeekSecClass getReading={getReading} />
                ) : getTab === 3 ? (
                  <CurrWeekThirdClass getWriting={getWriting} />
                ) : getTab === 4 ? (
                  <CurrWeekFourthClass getSpeaking={getSpeaking} />
                ) : null}
              </>
            ) : (
              <>
                {getTab2 === 1 ? (
                  <CurrWeekFirstHome
                    getCurrWeekFirstHome={getCurrWeekFirstHome}
                  />
                ) : getTab2 === 2 ? (
                  <CurrWeekSecHome getCurrWeekSecHome={getCurrWeekSecHome} />
                ) : getTab2 === 3 ? (
                  <CurrWeekThirdHome
                    getCurrWeekThirdHome={getCurrWeekThirdHome}
                  />
                ) : getTab2 === 4 ? (
                  <CurrWeekFourthHome
                    getCurrWeekFourthHome={getCurrWeekFourthHome}
                  />
                ) : null}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CurriculumPage;

/* <div className="SectionTest_content_main">
          <div className="SectionTest_content_head_main">
            <div>
              <h5 style={{ fontWeight: "800" }}>Section Test</h5>
            </div>
            <div style={{ width: "120px" }}>
              <h5 style={{ fontWeight: "800" }}>Status</h5>
            </div>
          </div>
          <div
            style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
            <div className="SectionTest_content_upgrade_now_main">
              <div>
                <h5>Demo Test 1</h5>
              </div>
              <div>
                <h5 className="btn">Upgrade Now</h5>
              </div>
            </div>
            <div className="SectionTest_content_data_main">
              <div>
                <h5>Demo Test 1</h5>
              </div>
              <div className="SectionTest_content_data_num_main">
                <div className="SectionTest_content_data_num_inner">
                  <div>40</div>
                  <div>Total</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_data_num_inner">
                  <div>11</div>
                  <div>Attempts</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_data_num_inner">
                  <div>9</div>
                  <div>Correct</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_band_inner">
                  <h5>3.5</h5>
                </div>
              </div>
              <div className="section_test_btn_main">
                <h5 className="btn start_btn">Start Test</h5>
              </div>
            </div>
            <div className="SectionTest_content_data_main">
              <div>
                <h5>Demo Test 2</h5>
              </div>
              <div className="SectionTest_content_data_num_main">
                <div className="SectionTest_content_data_num_inner">
                  <div>40</div>
                  <div>Total</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_data_num_inner">
                  <div>11</div>
                  <div>Attempts</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_data_num_inner">
                  <div>9</div>
                  <div>Correct</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_band_inner">
                  <h5>3.5</h5>
                </div>
              </div>
              <div className="section_test_btn_main">
                <h5 className="btn resume_btn">Resume Test</h5>
              </div>
            </div>
            <div className="SectionTest_content_data_main">
              <div>
                <h5>Demo Test 3</h5>
              </div>
              <div className="SectionTest_content_data_num_main">
                <div className="SectionTest_content_data_num_inner">
                  <div>40</div>
                  <div>Total</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_data_num_inner">
                  <div>11</div>
                  <div>Attempts</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_data_num_inner">
                  <div>9</div>
                  <div>Correct</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_band_inner">
                  <h5>3.5</h5>
                </div>
              </div>
              <div className="section_test_btn_main">
                <Link to="/SectionViewReport">
                  <h5 className="btn view_report_btn">View Report</h5>
                </Link>
                <h5 className="btn req_eval_btn">Request for Evaluation</h5>
              </div>
            </div>
            <div className="SectionTest_content_data_main">
              <div>
                <h5>Demo Test 3</h5>
              </div>
              <div className="SectionTest_content_data_num_main">
                <div className="SectionTest_content_data_num_inner">
                  <div>40</div>
                  <div>Total</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_data_num_inner">
                  <div>11</div>
                  <div>Attempts</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_data_num_inner">
                  <div>9</div>
                  <div>Correct</div>
                </div>
                <div className="verticle_line"></div>
                <div className="SectionTest_content_band_inner">
                  <h5>3.5</h5>
                </div>
              </div>
              <div className="section_test_btn_main">
                <h5 className="btn view_report_btn">View Report</h5>
                <h5 className="btn req_eval_pending_btn">
                  Evaluation is pending
                </h5>
              </div>
            </div>
          </div>
        </div> */
