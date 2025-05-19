import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import { TbDiscount2 } from "react-icons/tb";

const CurrWeekFourthHome = ({ getCurrWeekFourthHome }) => {
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
            <h5 style={{ fontWeight: "800" }}>Curriculum</h5>
          </div>
          <div style={{ width: "120px" }}>
            <h5 style={{ fontWeight: "800" }}>Status</h5>
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          {/* <div className="SectionTest_content_upgrade_now_main">
            <div>
              <h5>Demo Test 1</h5>
            </div>
            <div>
              <h5 className="btn" onClick={setModalIsOpen}>
                Upgrade Now
              </h5>
            </div>
          </div> */}
          <div className="SectionTest_content_data_main">
            <div className="secTest_name_head">
              <h5>
                {getCurrWeekFourthHome
                  ? getCurrWeekFourthHome.curriculum_listening_home_name
                  : ""}
              </h5>
              {/* Listening-Fill in the Blanks - (H.W -4 D -1) */}
            </div>

            {/* <div className="SectionTest_content_data_num_main">
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
            </div> */}

            {getCurrWeekFourthHome?.data == 0 ? (
              <Link
                to="/CurrWeekListningHomeworkTest"
                className="section_test_btn_main"
                onClick={() => {
                  localStorage.setItem("navbartrue", JSON.stringify(true));
                }}>
                <h5 className="btn start_btn start_btn_responsive">
                  Start Test
                </h5>
              </Link>
            ) : getCurrWeekFourthHome?.data == 1 ? (
              <Link
                to="/CurrWeekListningHomeworkTest"
                className="section_test_btn_main"
                onClick={() => {
                  localStorage.setItem("navbartrue", JSON.stringify(true));
                }}>
                <h5 className="btn resume_btn  start_btn_responsive">
                  Resume Test
                </h5>
              </Link>
            ) : (
              <Link to="">
                <h5 className="btn view_report_btn start_btn_responsive">
                  {/* View Report */}
                  Completed
                </h5>
              </Link>
            )}
            {/* <Link to="/SecSpeakingTest1" className="section_test_btn_main">
              <h5 className="btn start_btn start_btn_responsive">Start Test</h5>
            </Link>  */}
          </div>
          {/* <div className="SectionTest_content_data_main">
            <div className="secTest_name_head">
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
            <Link to="/SecSpeakingStartTest" className="section_test_btn_main">
              <h5 className="btn resume_btn  start_btn_responsive">
                Resume Test
              </h5>
            </Link>
          </div>
          <div className="SectionTest_content_data_main">
            <div className="secTest_name_head">
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
              <Link to="/SectionSpeakingViewReport">
                <h5 className="btn view_report_btn start_btn_responsive">
                  View Report
                </h5>
              </Link>
              <h5
                className="btn req_eval_btn  start_btn_responsive"
                onClick={handleButtonClick}>
                Request for Evaluation
              </h5>
            </div>
          </div>
          <div className="SectionTest_content_data_main">
            <div className="secTest_name_head">
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
              <h5 className="btn view_report_btn start_btn_responsive">
                View Report
              </h5>
              <h5 className="btn req_eval_pending_btn start_btn_responsive">
                Evaluation is pending
              </h5>
            </div>
          </div> */}
        </div>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setModalIsOpen(false);
          }}
          style={customStyles}>
          <>
            {/* <div className="navbar_modal_coupon_head">
            <h3>Apply Coupon</h3>
          </div> */}
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

export default CurrWeekFourthHome;
