import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import { TbDiscount2 } from "react-icons/tb";
import axios from "axios";
import {
  ACCEPT_HEADER,
  writing_section1_count,
  writing_section2_count,
} from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";

const SectionWriting = ({ getWriting }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const [getMarksModal1, setMarksModal1] = useState("");
  const [getMarksModal2, setMarksModal2] = useState("");
  const [getList1, setList1] = useState();
  const [getList2, setList2] = useState();
  const [loading, setloading] = useState(false);

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === "option1") {
      navigate("/WritingPart1");
    }
    if (selectedValue === "option2") {
      navigate("/WritingPart2");
    }
    if (selectedValue === "option3") {
      setMarksModal1(true);
      marks_sec1();
    }
    if (selectedValue === "option4") {
      setMarksModal2(true);
      marks_sec2();
    }
  };
  const customStyles = {
    content: {
      padding: "0px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "none",
      border: "none",
      borderRadius: "5px",
      width: "350px",
      // height: "350px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };

  const { SetLogout } = useAuthContext();
  const marks_sec1 = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(writing_section1_count, {
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
            setList1(res.data);
            // SetListAnswer(res.data.answer);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };
  const marks_sec2 = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(writing_section2_count, {
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
            setList2(res.data);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };

  return (
    <div className="SectionTest_content_main_top">
      <div className="SectionTest_content_main">
        <div className="SectionTest_content_head_main">
          <div>
            <h5 style={{ fontWeight: "800" }}>Section Test</h5>
          </div>
          <div style={{ width: "120px" }}>
            <h5 style={{ fontWeight: "800" }}>Status</h5>
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <div className="SectionTest_content_data_main">
            <div className="secTest_name_head">
              <h5>{getWriting ? getWriting.writing_section : ""}</h5>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              {/* <select
                id="dropdown"
                className="selectTest"
                value={selectedOption}
                onChange={handleSelect}>
                <option value="" disabled>
                  Select Report
                </option>
                <option value="option3">Section 1</option>
                <option value="option4">Section 2</option>
              </select> */}
              <select
                id="dropdown"
                className="selectTest"
                value={selectedOption}
                onChange={handleSelect}>
                <option value="" disabled>
                  Select Section
                </option>
                <option value="option1">Section 1</option>
                <option value="option2">Section 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setModalIsOpen(false);
          }}
          style={customStyles}>
          <>
            <div
              className="model_sizing"
              style={{
                alignItems: "center",
                padding: "30px",
              }}>
              <div>
                <TbDiscount2 className="coupon_icon" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <h2>Discount</h2>
                <p>
                  Enter a vaild coupon code to upgrade your current package or
                  add new pack.
                </p>
              </div>

              <div style={{ width: "100%" }}>
                <input
                  type="text"
                  className="navbar_modal_coupon_code_input_inner"
                />
              </div>
              <div style={{ paddingTop: "1rem", width: "100%" }}>
                <button className="btn" style={{ width: "100%" }}>
                  Apply Coupon
                </button>
              </div>
            </div>
          </>
        </ReactModal> */}
      <ReactModal
        isOpen={getMarksModal1}
        onRequestClose={() => {
          setMarksModal1(false);
        }}
        style={customStyles}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.5rem",
              color: "var(--color-brand)",
              background: "lightgray",
            }}>
            <h3 style={{ fontWeight: "700" }}>Report</h3>
          </div>
          <hr />
          <div style={{ padding: "1rem" }}>
            <h4 style={{ color: "darkgreen", fontWeight: "600" }}>
              <span>Total Que: {getList1?.total_que} </span>
            </h4>
            <h4 style={{ color: "green", fontWeight: "600" }}>
              <span>Correct answer: {getList1?.correct}</span>
            </h4>
            <h4 style={{ color: "red", fontWeight: "600" }}>
              <span>Wrong answer: {getList1?.in_correct}</span>
            </h4>
            <h4 style={{ color: "var(--color-brand)", fontWeight: "600" }}>
              <span>Marks: {getList1?.correct}</span>
            </h4>
          </div>
          <div style={{ padding: "1rem", paddingTop: "0px" }}>
            <button
              className="btn"
              style={{ width: "100%", margin: "0px" }}
              onClick={() => {
                setMarksModal1(false);
              }}>
              OK
            </button>
          </div>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={getMarksModal2}
        onRequestClose={() => {
          setMarksModal2(false);
        }}
        style={customStyles}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.5rem",
              color: "var(--color-brand)",
              background: "lightgray",
            }}>
            <h3 style={{ fontWeight: "700" }}>Report</h3>
          </div>
          <hr />
          <div style={{ padding: "1rem" }}>
            <h4 style={{ color: "darkgreen", fontWeight: "600" }}>
              <span>Total Que: {getList2?.total_que} </span>
            </h4>
            <h4 style={{ color: "green", fontWeight: "600" }}>
              <span>Correct answer: {getList2?.correct}</span>
            </h4>
            <h4 style={{ color: "red", fontWeight: "600" }}>
              <span>Wrong answer: {getList2?.in_correct}</span>
            </h4>
            <h4 style={{ color: "var(--color-brand)", fontWeight: "600" }}>
              <span>Marks: {getList2?.correct}</span>
            </h4>
          </div>
          <div style={{ padding: "1rem", paddingTop: "0px" }}>
            <button
              className="btn"
              style={{ width: "100%", margin: "0px" }}
              onClick={() => {
                setMarksModal2(false);
              }}>
              OK
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default SectionWriting;
