import React, { useEffect, useState } from "react";
import {
  SecListningTest,
  SecReadingTest,
  SecSpeakinTest,
  SecWritingTest,
} from "../../container";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ACCEPT_HEADER,
  view_listening,
  view_listening_data,
  view_reading,
  view_reading_data,
  view_speaking_data,
  view_writing_data,
} from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { Helmet } from "react-helmet";

const ModuleTest = () => {
  const [getTab, setTab] = useState(1);
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();
  const [getListning, setListning] = useState("");
  const [getReading, setReading] = useState("");
  const [getWriting, setWriting] = useState("");
  const [getSpeaking, setSpeaking] = useState("");

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
    ViewListeningData();
  }, []);

  const [isloading, SetLoading] = useState(false);

  const ViewListeningData = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(view_listening_data, {
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
      .get(view_reading_data, {
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
      .get(view_writing_data, {
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
      .get(view_speaking_data, {
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

        <title>Just Abroad | Module Test</title>

      </Helmet>
      <div className="Sec_Test_head_main" style={{ padding: "2rem 0" }}>
        <h2>Module Test</h2>
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
        </div>

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
              <SecListningTest getListning={getListning} />
            ) : getTab === 2 ? (
              <SecReadingTest getReading={getReading} />
            ) : getTab === 3 ? (
              <SecWritingTest getWriting={getWriting} />
            ) : getTab === 4 ? (
              <SecSpeakinTest getSpeaking={getSpeaking} />
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default ModuleTest;
