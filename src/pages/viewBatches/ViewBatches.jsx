import React, { useEffect, useState } from "react";
import "./ViewBatches.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TbCalendarTime } from "react-icons/tb";
import { HiMiniClock } from "react-icons/hi2";
import { FaCalendar } from "react-icons/fa";
import ReactModal from "react-modal";
import "react-html5video/dist/styles.css";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { ACCEPT_HEADER, live_class } from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import moment from "moment";

// const Data = [
//   {
//     id: 1,
//     name: "Foundation Batch",
//     text: "Class will be on time",
//     duration: "120 mins",
//     time: "8:00 AM IST / 1:30 PM GMT",
//     datedigit: "15",
//     date: "Sep",
//   },
//   {
//     id: 2,
//     name: "Foundation Batch",
//     text: "Class will be on time",
//     duration: "120 mins",
//     time: "11:30 AM IST / 1:30 PM GMT",

//     datedigit: "15",
//     date: "Sep",
//   },
//   {
//     id: 3,
//     name: "Foundation Batch",
//     text: "Class will be on time",
//     duration: "120 mins",
//     time: "4:30 AM IST / 8:30 PM GMT",

//     datedigit: "15",
//     date: "Sep",
//   },
//   {
//     id: 4,
//     name: "Foundation Batch",
//     text: "Class will be on time",
//     duration: "120 mins",
//     datedigit: "15",
//     time: "8:00 AM IST / 1:30 PM GMT",

//     date: "Sep",
//   },
// ];

const ViewBatches = () => {
  const paramm = useParams();
  var slug = paramm.id;

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

  const captionTrack = {
    kind: "subtitles",
    src: "https://www.example.com/your-captions.vtt", // Replace with the URL of your caption file
    srcLang: "en", // Replace with the language of your captions
    default: true, // Set to true if this is the default captions track
  };
  const [startDate, setStartDate] = useState(new Date());
  const [gettab, setTab] = useState(1);

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  useEffect(() => {
    GetName();
    LiveClass();
  }, []);

  const [getname, SetName] = useState("");

  const GetName = async () => {
    const Name = await localStorage.getItem("ViewBatches_name");
    SetName(JSON.parse(Name));
  };

  const [loading, setloading] = useState(false);
  const [todaylist, SetTodayList] = useState([]);
  const [perlist, SetPerList] = useState([]);
  const [upcomlist, SetUpComList] = useState([]);
  const [videourl, SetVideoUrl] = useState("");

  const LiveClass = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");

    const formdata = new FormData();
    formdata.append("id", slug);

    axios
      .post(live_class, formdata, {
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
          if (res.data.success === 1) {
            SetTodayList(res.data.todays_lectures);
            SetPerList(res.data.previous_lectures);
            SetUpComList(res.data.upcoming_lectures);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };

  const DateLiveClass = async (date) => {
    const Token = await localStorage.getItem("is_token");

    const formdata = new FormData();
    formdata.append("id", slug);
    formdata.append("date", moment(date).format("YYYY-MM-DD"));
    axios
      .post(live_class, formdata, {
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
         
          if (res.data.success === 1) {
            SetTodayList(res.data.todays_lectures);
            SetPerList(res.data.previous_lectures);
            SetUpComList(res.data.upcoming_lectures);
            setTab(2);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
      });
  };

  return (
    <div className="view_batch_main">
      <div className="view_batch_con">
        <p className="view_lec_head">{getname}</p>
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
          <div className="view_lec_flex">
            <div className="view_lec_date_main">
              <div className="view_lec_date_filter_btn_main">
                {gettab === 2 ? (
                  <div className="calender_top">
                    <FaCalendar />
                    <DatePicker
                      maxDate={new Date()}
                      className="calender_main"
                      selected={startDate}
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => {
                        setStartDate(date);
                        DateLiveClass(date);
                      }}
                    />
                  </div>
                ) : null}
                {gettab === 1 ? (
                  <>
                    <button
                      className="btn btn_view_batch_fil_today"
                      onClick={() => {
                        setTab(1);
                      }}>
                      {" "}
                      <TbCalendarTime className="view_batch_today_active" />{" "}
                      Today's Lectures{" "}
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn_view_batch_fil_out_today"
                    onClick={() => {
                      setTab(1);
                    }}>
                    <TbCalendarTime className="view_batch_today" /> Today's
                    Lectures
                  </button>
                )}

                {gettab === 2 ? (
                  <>
                    <button
                      className="btn btn_view_batch_fil_prev"
                      onClick={() => {
                        setTab(2);
                      }}>
                      {" "}
                      <TbCalendarTime className="view_batch_prev_active" />{" "}
                      Previous Lectures
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn_view_batch_fil_out_prev"
                    onClick={() => {
                      setTab(2);
                    }}>
                    <TbCalendarTime className="view_batch_prev" /> Previous's
                    Lectures
                  </button>
                )}

                {gettab === 3 ? (
                  <>
                    <button
                      className="btn btn_view_batch_fil_upcoming"
                      onClick={() => {
                        setTab(3);
                      }}>
                      {" "}
                      <TbCalendarTime className="view_batch_upcoming_active" />{" "}
                      Upcoming Lectures
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn_view_batch_fil_out_upcoming"
                    onClick={() => {
                      setTab(3);
                    }}>
                    {" "}
                    <TbCalendarTime className="view_batch_upcoming" />
                    Upcoming Lectures
                  </button>
                )}
              </div>

              {gettab === 1 ? (
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}>
                  {todaylist.length > 0 ? (
                    <>
                      {todaylist.map((item, index) => {
                        return (
                          <div className="view_lec_list_main">
                            <div className="view_lec_list_card_main">
                              <div
                                className="view_lec_list_card_line"
                                style={{ backgroundColor: "green" }}></div>
                              <div className="view_lec_list_card_line_after_flex">
                                <div
                                  className="view_lec_list_card_date_flex"
                                  style={{ backgroundColor: "#B7E2C6" }}>
                                  <h2 className="view_lec_list_card_date_digit">
                                    {moment(item.date).format("DD")}
                                  </h2>
                                  <p className="view_lec_list_card_date">
                                    {moment(item.date).format("MMM")}
                                  </p>
                                </div>
                                <div className="view_lec_list_card_sec_part">
                                  <div className="view_lec_list_card_sec_part_inner">
                                    <p className="view_lec_list_card_name">
                                      {item.name ? item.name : ""}
                                    </p>
                                    <div className="view_lec_card_date_flex">
                                      <HiMiniClock size={20} color="#999" />
                                      <p className="view_lec_list_card_time">
                                        {item.from_time}/{item.to_time}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="view_lec_list_card_text_main">
                                    <p className="view_lec_list_card_text">
                                      {item.description ? item.description : ""}
                                    </p>
                                    <span>
                                      <button
                                        onClick={() => {
                                          SetVideoUrl(item.video_url);
                                          setModalIsOpen(true);
                                        }}
                                        style={{ marginRight: "1rem" }}
                                        className="btn">
                                        Not started
                                      </button>
                                    </span>
                                  </div>
                                  <p className="view_lec_list_card_duration">
                                    {item.duration}
                                  </p>
                                </div>
                              </div>
                              {/* <div className="view_lec_list_card_time"></div> */}
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <p
                      style={{
                        textAlign: "center",
                        color: "#fff",
                      }}>
                      No Record Found
                    </p>
                  )}
                </div>
              ) : gettab === 2 ? (
                <>
                  {perlist.length > 0 ? (
                    <>
                      {perlist.map((item, index) => {
                        return (
                          <div className="view_lec_list_main">
                            <div className="view_lec_list_card_main">
                              <div
                                className="view_lec_list_card_line"
                                style={{ backgroundColor: "#850b09" }}></div>
                              <div className="view_lec_list_card_line_after_flex">
                                <div
                                  className="view_lec_list_card_date_flex"
                                  style={{ backgroundColor: "#B56C6B" }}>
                                  <h2 className="view_lec_list_card_date_digit">
                                    {moment(item.date).format("DD")}
                                  </h2>
                                  <p className="view_lec_list_card_date">
                                    {moment(item.date).format("MMM")}
                                  </p>
                                </div>
                                <div className="view_lec_list_card_sec_part">
                                  <div className="view_lec_list_card_sec_part_inner">
                                    <p className="view_lec_list_card_name">
                                      {item.name ? item.name : ""}
                                    </p>
                                    <div className="view_lec_card_date_flex">
                                      <HiMiniClock size={20} color="#999" />

                                      <p className="view_lec_list_card_time">
                                        {item.from_time}/{item.to_time}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="view_lec_list_card_text_main">
                                    <p className="view_lec_list_card_text">
                                      {item.description ? item.description : ""}
                                    </p>
                                    <span>
                                      <button
                                        onClick={() => {
                                          SetVideoUrl(item.video_url);
                                          setModalIsOpen(true);
                                        }}
                                        style={{ marginRight: "1rem" }}
                                        className="btn">
                                        Play Video
                                      </button>
                                    </span>
                                  </div>
                                  <p className="view_lec_list_card_duration">
                                    {item.duration}
                                  </p>
                                </div>
                              </div>
                              {/* <div className="view_lec_list_card_time"></div> */}
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <p
                      style={{
                        textAlign: "center",
                        color: "#fff",
                      }}>
                      No Record Found
                    </p>
                  )}
                </>
              ) : gettab === 3 ? (
                <div className="view_lec_list_main">
                  {upcomlist.length > 0 ? (
                    <>
                      {upcomlist.map((item, index) => {
                        return (
                          <div className="view_lec_list_main">
                            <div className="view_lec_list_card_main">
                              <div
                                className="view_lec_list_card_line"
                                style={{
                                  backgroundColor: "darkgoldenrod",
                                }}></div>
                              <div className="view_lec_list_card_line_after_flex">
                                <div
                                  className="view_lec_list_card_date_flex"
                                  style={{ backgroundColor: "#D4B66C" }}>
                                  <h2 className="view_lec_list_card_date_digit">
                                    {moment(item.date).format("DD")}
                                  </h2>
                                  <p className="view_lec_list_card_date">
                                    {moment(item.date).format("MMM")}
                                  </p>
                                </div>
                                <div className="view_lec_list_card_sec_part">
                                  <div className="view_lec_list_card_sec_part_inner">
                                    <p className="view_lec_list_card_name">
                                      {item.name ? item.name : ""}
                                    </p>
                                    <div className="view_lec_card_date_flex">
                                      <HiMiniClock size={20} color="#999" />
                                      <p className="view_lec_list_card_time">
                                        {item.from_time}/{item.to_time}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="view_lec_list_card_text_main">
                                    <p className="view_lec_list_card_text">
                                      {item.description ? item.description : ""}
                                    </p>
                                    <span>
                                      <button
                                        onClick={() => {
                                          SetVideoUrl(item.video_url);
                                          setModalIsOpen(true);
                                        }}
                                        style={{ marginRight: "1rem" }}
                                        className="btn">
                                        Coming soon
                                      </button>
                                    </span>
                                  </div>
                                  <p className="view_lec_list_card_duration">
                                    {item.duration}
                                  </p>
                                </div>
                              </div>
                              {/* <div className="view_lec_list_card_time"></div> */}
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <p
                      style={{
                        textAlign: "center",
                        color: "#fff",
                      }}>
                      No Record Found
                    </p>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}>
        <>
          <div style={{ padding: "1rem" }}>Lorem ipsum dolor sit.</div>
          <hr />
          <div style={{ width: "400px", padding: "1rem" }}>
            {/* <Video autoplay loop poster={images.home_hero_bg} size={1}>
              <source src={images.demovideo} type="video/webm" />
            </Video> */}
            <ReactPlayer
              url={videourl} // Replace with your video URL
              // url="https://v6.cdnpk.net/videvo_files/video/partners1036/large_watermarked/BB_28bd7342-5df4-4ddc-92df-ef54ca93d6a0_preview.mp4" // Replace with your video URL
              controls={true}
              width="100%"
              height="100%"
              config={{
                file: {
                  attributes: {
                    crossOrigin: "anonymous",
                  },
                },
              }}
              tracks={[captionTrack]}
            />
          </div>
        </>
      </ReactModal>
    </div>
  );
};

export default ViewBatches;
