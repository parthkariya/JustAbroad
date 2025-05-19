import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import axios from "axios";
import { useAuthContext } from "../../context/auth_context";
import { ACCEPT_HEADER, speaking_section1_count } from "../../utils/Constant";

const SectionSpeaking = ({ getSpeaking }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const [getMarksModal1, setMarksModal1] = useState("");
  const [getList, setList] = useState();
  const [loading, setloading] = useState(false);

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === "option1") {
      navigate("/SpeakingPart1"); // Replace '/page' with the actual URL you want to redirect to
    }
    if (selectedValue === "option2") {
      setMarksModal1(true);
      marks_sec();
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
  const marks_sec = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(speaking_section1_count, {
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
            setList(res.data);
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

  // const handleButtonClick = () => {
  //   const result = window.confirm(
  //     "Are you sure you want to request this test for evaluation?"
  //   );

  //   if (result) {
  //     console.log("Action confirmed");
  //   } else {
  //     console.log("Action canceled");
  //   }
  // };

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
              <h5>{getSpeaking ? getSpeaking.speaking_section : ""}</h5>
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
                <option value="option2">Section 1</option>
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
            // gap: "1.5rem",
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
              <span>Total Que: {getList?.total_que} </span>
            </h4>
            <h4 style={{ color: "green", fontWeight: "600" }}>
              <span>Correct answer: {getList?.correct}</span>
            </h4>
            <h4 style={{ color: "red", fontWeight: "600" }}>
              <span>Wrong answer: {getList?.in_correct}</span>
            </h4>
            <h4 style={{ color: "var(--color-brand)", fontWeight: "600" }}>
              <span>Marks: {getList?.correct}</span>
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
    </div>
  );
};

export default SectionSpeaking;
