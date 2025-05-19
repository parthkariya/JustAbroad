import React, { useEffect, useState } from "react";
import "./SupportPage.css";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ACCEPT_HEADER, add_support, view_support } from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import Notification from "../../utils/Notification";
import { Helmet } from "react-helmet";

const SupportPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    ViewSupport();
  }, []);

  const [getlist, SetList] = useState([]);
  const [loading, setloading] = useState(false);
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const ViewSupport = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));

    axios
      .post(view_support, formdata, {
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
            SetList(res.data.data);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };

  const [subject, Setsubject] = useState("");
  const [type, Settype] = useState("");
  const [message, Setmessage] = useState("");

  const AddSupport = async () => {
    if (subject === "") {
      Notification("error", "Error", "Enter Subject");
    } else if (type === "") {
      Notification("error", "Error", "Enter Type");
    } else if (message === "") {
      Notification("error", "Error", "Enter message");
    } else {
      const Token = await localStorage.getItem("is_token");
      const Courseid = await localStorage.getItem("courseid");

      const formdata = new FormData();
      formdata.append("course_id", JSON.parse(Courseid));
      formdata.append("subject", subject);
      formdata.append("type", type);
      formdata.append("message", message);

      axios
        .post(add_support, formdata, {
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
              Notification("success", "Success!", res.data.message);
              setModalIsOpen(false);
              ViewSupport();
            }
          }
        })
        .catch((err) => {
          console.log("--->err", err);
        });
    }
  };

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

  return (
    <>
      <Helmet>

        <title>Just Abroad | Support</title>

      </Helmet>
      <div className="SupportPage_main">
        <div className="SupportPage_head_block_main">
          <div>
            <h3>Support</h3>
          </div>
          <div onClick={setModalIsOpen}>
            <button className="btn">Create New Request</button>
          </div>
        </div>

        <div className="table_support_main">
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
                {getlist && getlist.length > 0
                  ? getlist.map((item, index) => {
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
          </div>
        </div>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setModalIsOpen(false);
          }}
          style={customStyles}>
          <>
            <div className="navbar_modal_signin_head">
              <h3>Create New Request</h3>
            </div>
            <div className="model_sizing">
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
                  <option selected disabled>
                    Select Type
                  </option>
                  <option value="1">Query</option>
                  <option value="2">Feedback</option>
                </select>
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
                    AddSupport();
                  }}>
                  Submit
                </button>
              </div>
            </div>
          </>
        </ReactModal>
      </div>
    </>
  );
};

export default SupportPage;
// {
//   <div className="table_support_data_main">
//   <div className="table_support_head_subject_inner">
//     <p>Test</p>
//   </div>
//   <div className="table_support_head_type_inner">
//     <p>Feedback</p>
//   </div>
//   <div className="table_support_head_created_inner">
//     <p> 1/1/24 6:06 PM</p>
//   </div>
//   <div className="table_support_head_status_inner">
//     <p>Waiting</p>
//   </div>
//   <div className="table_support_head_message_inner">
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
//       voluptates?
//     </p>
//   </div>
// </div>
// <div className="underline_table_support" />
// <div className="table_support_data_main">
//   <div className="table_support_head_subject_inner">
//     <p>Test</p>
//   </div>
//   <div className="table_support_head_type_inner">
//     <p>Feedback</p>
//   </div>
//   <div className="table_support_head_created_inner">
//     <p> 1/1/24 6:06 PM</p>
//   </div>
//   <div className="table_support_head_status_inner">
//     <p>Waiting</p>
//   </div>
//   <div className="table_support_head_message_inner">
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
//       voluptates?
//     </p>
//   </div>
// </div>
// <div className="underline_table_support" />
// <div className="table_support_data_main">
//   <div className="table_support_head_subject_inner">
//     <p>
//       Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//     </p>
//   </div>
//   <div className="table_support_head_type_inner">
//     <p>Feedback</p>
//   </div>
//   <div className="table_support_head_created_inner">
//     <p> 1/1/24 6:06 PM</p>
//   </div>
//   <div className="table_support_head_status_inner">
//     <p>Waiting</p>
//   </div>
//   <div className="table_support_head_message_inner">
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//     </p>
//   </div>
// </div>
// }
