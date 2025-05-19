import React, { useEffect, useState } from "react";
import "./SectionTest.css";
import {
  SectionListening,
  SectionReading,
  SectionSpeaking,
  SectionWriting,
} from "../../container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ACCEPT_HEADER,
  listening_section,
  reading_section,
  speaking_section,
  writing_section,
} from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { Helmet } from "react-helmet";

const SectionTest = () => {
  const [getTab, setTab] = useState(1);
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();
  const [getListning, setListning] = useState("");
  const [getReading, setReading] = useState("");
  const [getWriting, setWriting] = useState("");
  const [getSpeaking, setSpeaking] = useState("");

  useEffect(() => {
    ViewListeningData();
  }, []);

  const [isloading, SetLoading] = useState(false);

  const ViewListeningData = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(listening_section, {
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

  const ViewReadingData = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(reading_section, {
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

  const ViewWritingData = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(writing_section, {
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

  const ViewSpeakingData = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(speaking_section, {
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

  return (
    <>
      <Helmet>

        <title>Just Abroad | Sectional Test</title>

      </Helmet>
      <div className="Sec_Test_head_main" style={{ padding: "2rem 0" }}>
        <h2>Sectional Test</h2>
      </div>
      <div className="SectionTest_main">
        <div className="SectionTest_tab_main">
          <div
            style={{
              cursor: "pointer",
              background:
                getTab === 1 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 1 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            className="SectionTest_tab_inner"
            onClick={() => {
              setTab(1);
              ViewListeningData();
            }}>
            Listening
          </div>
          <div className="verticle_line"></div>
          <div
            style={{
              cursor: "pointer",
              background:
                getTab === 2 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 2 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            className="SectionTest_tab_inner"
            onClick={() => {
              setTab(2);
              ViewReadingData();
            }}>
            Reading
          </div>
          <div className="verticle_line"></div>
          <div
            style={{
              cursor: "pointer",
              background:
                getTab === 3 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 3 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            className="SectionTest_tab_inner"
            onClick={() => {
              setTab(3);
              ViewWritingData();
            }}>
            Writing
          </div>
          <div className="verticle_line"></div>
          <div
            style={{
              cursor: "pointer",
              background:
                getTab === 4 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 4 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            className="SectionTest_tab_inner"
            onClick={() => {
              setTab(4);
              ViewSpeakingData();
            }}>
            Speaking
          </div>

          <Link to='/sectionalreport'
            style={{
              cursor: "pointer",
              background: "var(--color-white",
              color: "var(--color-brand)",
              padding: "0.5rem",
              border: "1px solid var(--color-brand)",
            }}
            className="SectionTest_tab_inner"
          >
            Report
          </Link>
        </div>
        {/* <SectionListening getListning={getListning} /> */}

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
            {getTab === 1 ? (
              <SectionListening getListning={getListning} />
            ) : getTab === 2 ? (
              <SectionReading getReading={getReading} />
            ) : getTab === 3 ? (
              <SectionWriting getWriting={getWriting} />
            ) : getTab === 4 ? (
              <SectionSpeaking getSpeaking={getSpeaking} />
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default SectionTest;

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
