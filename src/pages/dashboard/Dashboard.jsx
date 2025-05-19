import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import "react-circular-progressbar/dist/styles.css";
import images from "../../constants/images";
import {
  DashboardNotification,
  DashboardProgressCard,
  DashboardRecentProgress,
  DashboardVideo,
} from "../../components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ACCEPT_HEADER,
  get_basic_test,
  get_guide,
  listening_count,
  reading_count,
  speaking_count,
  writing_count,
} from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  useEffect(() => {
    GetGuide();
    GetBasictest();
    getListeningCount();
    getReadingCount();
    getWritingCount();
    getSpeakingCount();
  }, []);

  const [getlistguide, SetListGuide] = useState([]);
  const [listeningcount, Setlisteningcount] = useState([]);
  const [readingcount, Setreadingcount] = useState([]);
  const [writingcount, Setwritingcount] = useState([]);
  const [speakingcount, Setspeakingcount] = useState([]);
  const [load, setLoad] = useState(false);
  const [getCourseId, setCourseId] = useState("");
  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  useEffect(() => {
    dataaa();
  }, []);

  const dataaa = ()  =>{
    const Courseid = localStorage.getItem("courseid");
    setCourseId(Courseid);
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
     
      window.location.reload();
     
    } else {
      sessionStorage.removeItem("reloadCount");

    }
  }

  const GetGuide = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(get_guide, formdata, {
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
            SetListGuide(res.data.data);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
      });
  };

  const [getlisttest, SetListTest] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetBasictest = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("id", "");

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
            SetListTest(res.data.data);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
      });
  };
  const getListeningCount = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    // formdata.append('course_id', JSON.parse(Courseid))
    setLoad(true);
    axios
      .get(listening_count, {
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
            Setlisteningcount(res.data);
            setLoad(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setLoad(false);
      });
  };
  const getReadingCount = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    // formdata.append('course_id', JSON.parse(Courseid))
    setLoading(true);
    axios
      .get(reading_count, {
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
            Setreadingcount(res.data);
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setLoading(false);
      });
  };

  const getWritingCount = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    // formdata.append('course_id', JSON.parse(Courseid))
    setLoading(true);
    axios
      .get(writing_count, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        // console.log('resssss', res.data);
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
        } else {
          if (res.data.success == 1) {
            Setwritingcount(res.data);
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setLoading(false);
      });
  };

  const getSpeakingCount = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    // formdata.append('course_id', JSON.parse(Courseid))
    setLoading(true);
    axios
      .get(speaking_count, {
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
            Setspeakingcount(res.data);
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setLoading(false);
      });
  };

  console.log("getCourseId",getCourseId);
  console.log("loading",loading);
  console.log("load",load);

  return (
    <div>
      <Helmet>

        <title>Just Abroad | Dashboard</title>

      </Helmet>

      {getCourseId === 1 || getCourseId === '1' || getCourseId === 2 || getCourseId === '2' || loading === false || load === false ? 
      <>
      <div className="dash_page_main">
        <div className="dash_part_first">
          <div className="dash_sec">
            <div className="dash_con" style={{ marginBottom: "1rem" }}>
              <div className="dash_cards_main">
                {getCourseId === 2 ? (
                  <>
                    <div
                      className="dash_card_main"
                      style={{
                        backgroundImage: `url(${images.tips})`,
                        backgroundPosition: "center",
                        backdropFilter: "blur(2px)",
                        WebkitBackdropFilter: "revert-layer",
                        backgroundSize: "cover",
                      }}>
                      <div className="dash_card_inner">
                        <div>
                          <p className="dash_card_txt">Lorem Ipsum is simply</p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                          }}>
                          <p className="dash_card_desc">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            standard dummy text.
                          </p>

                          <Link to="">
                            <button className="btn">Take Tip</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {getlisttest && getlisttest.length > 0
                      ? getlisttest.map((item, index) => {
                        return (
                          <div
                            className="dash_card_main"
                            style={{
                              backgroundImage: `url(${item.image_full_path
                                  ? item.image_full_path
                                  : images.no_image
                                })`,
                              backgroundPosition: "center",
                              backdropFilter: "blur(2px)",
                              WebkitBackdropFilter: "revert-layer",
                              backgroundSize: "cover",
                            }}>
                            <div className="dash_card_inner">
                              <div>
                                <p className="dash_card_txt">
                                  {item.name ? item.name : ""}
                                </p>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "1rem",
                                }}>
                                <p className="dash_card_desc">
                                  {item.description ? item.description : ""}
                                </p>

                                <Link nk to={`/Assessment/${item.id}`}>
                                  <button className="btn">Take Test</button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })
                      : null}
                  </>
                )}

                {/* <div
                  className="dash_card_main"
                  style={{
                    backgroundImage: url(${images.dash_card_img2}),
                    backgroundPosition: "center",
                    backdropFilter: "blur(2px)",
                    WebkitBackdropFilter: "revert-layer",
                    backgroundSize: "cover",
                  }}>
                  <div className="dash_card_inner">
                    <div>
                      <p className="dash_card_txt">Recommended IELTS Plans</p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                      }}>
                      <p className="dash_card_desc">
                        Based on your level of English, follow any of the study
                        plans mentioned herein for a complete IELTS preparation
                      </p>
                      <Link to='/RecommendedIELTSPlans' className="btn" style={{ width: "125px",display:"flex",justifyContent:"center"  }}>
                        View
                      </Link>
                    </div>
                  </div>
                </div> */}

                {getlistguide && getlistguide.length > 0
                  ? getlistguide.map((item, index) => {
                    return (
                      <div
                        className="dash_card_main"
                        style={{
                          backgroundImage: `url(${item.image_full_path
                              ? item.image_full_path
                              : images.no_image
                            })`,
                          backgroundPosition: "center",
                          backdropFilter: "blur(2px)",
                          WebkitBackdropFilter: "revert-layer",
                          backgroundSize: "cover",
                        }}>
                        <div className="dash_card_inner">
                          <div>
                            <p className="dash_card_txt">
                              {item.name ? item.name : ""}
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "1rem",
                            }}>
                            <p className="dash_card_desc">
                              {item.description ? item.description : ""}
                            </p>
                            <Link
                              to={`/GuideIelts/${index}`}
                              className="btn"
                              style={{
                                width: "125px",
                                display: "flex",
                                justifyContent: "center",
                              }}>
                              View
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })
                  : null}
              </div>
            </div>
          </div>
          {getCourseId == 2 ? (
            <></>
          ) : (
            <>
              <DashboardProgressCard
                listeningcount={listeningcount}
                readingcount={readingcount}
                writingcount={writingcount}
                speakingcount={speakingcount}
              />
              <DashboardRecentProgress />
            </>
          )}
        </div>
        <div className="dash_part_second">
          <div>
            <DashboardNotification />

            {getCourseId == 2 ? (
              <></>
            ) : (
              <>
                <DashboardVideo />
              </>
            )}
          </div>
        </div>
      </div>
      </> : <>
     
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
      </>}
    
    </div>
  );
};

export default Dashboard;
