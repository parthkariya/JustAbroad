import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { TbDiscount2 } from "react-icons/tb";

const SecSpeakinTest = ({ getSpeaking }) => {
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

  const handleButtonClick = () => {
    const result = window.confirm(
      "Are you sure you want to request this test for evaluation?"
    );

    if (result) {
      console.log("Action confirmed");
    } else {
      console.log("Action canceled");
    }
  };

  return (
    <div className="SectionTest_content_main_top">
      <div className="SectionTest_content_main">
        <div className="SectionTest_content_head_main">
          <div>
            <h5 style={{ fontWeight: "800" }}>Module Test</h5>
          </div>
          <div style={{ width: "120px" }}>
            <h5 style={{ fontWeight: "800" }}>Status</h5>
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <div className="SectionTest_content_data_main">
            <div className="secTest_name_head">
              <h5>{getSpeaking ? getSpeaking.speaking_name : ""}</h5>
            </div>
            <div className="SectionTest_content_data_num_main">
              <div className="SectionTest_content_data_num_inner">
                <div>{getSpeaking ? getSpeaking.total_que : ""}</div>
                <div>Total</div>
              </div>
            </div>
            {getSpeaking?.data === 0 ? (
              <Link
                to="/SecSpeakingTest1"
                className="section_test_btn_main"
                onClick={() => {
                  localStorage.setItem("navbartrue", JSON.stringify(true));
                }}>
                <h5 className="btn start_btn start_btn_responsive">
                  Start Test
                </h5>
              </Link>
            ) : getSpeaking?.data == 1 ? (
              <Link
                to="/SecSpeakingStartTest"
                className="section_test_btn_main"
                onClick={() => {
                  localStorage.setItem("navbartrue", JSON.stringify(true));
                }}>
                <h5 className="btn resume_btn  start_btn_responsive">
                  Resume Test
                </h5>
              </Link>
            ) : (
              <Link to="/SectionSpeakingViewReport">
                <h5 className="btn view_report_btn start_btn_responsive">
                  View Report
                </h5>
              </Link>
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
        </ReactModal>
      </div>
    </div>
  );
};

export default SecSpeakinTest;
