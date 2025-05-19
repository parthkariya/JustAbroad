import React, { useState } from "react";
import "./CurriculumPTE.css";
import { Link } from "react-router-dom";

const CurriculumPTE = () => {
  const [getTab, setTab] = useState(1);
  const [getTab1, setTab1] = useState(1);

  return (
    <div>
      <div className="CurriculumPTE_nav">
        <div className="que_no" style={{ fontSize: "1.5rem" }}>
          Curriculum
        </div>
        <div className="CurriculumPTE_nav_btn_tab">
          <div
            className="SectionTest_tab_inner"
            style={{
              cursor: "pointer",
              background:
                getTab1 === 1 ? "var(--color-white)" : "var(--color-brand)",
              color:
                getTab1 === 1 ? "var(--color-brand)" : "var(--color-white)",
              padding: "0.5rem",
            }}
            onClick={() => {
              setTab1(1);
            }}>
            Classwork
          </div>
          <div
            className="SectionTest_tab_inner"
            style={{
              cursor: "pointer",
              background:
                getTab1 === 2 ? "var(--color-white)" : "var(--color-brand)",
              color:
                getTab1 === 2 ? "var(--color-brand)" : "var(--color-white)",
              padding: "0.5rem",
            }}
            onClick={() => {
              setTab1(2);
            }}>
            Homework
          </div>
        </div>
      </div>
      <div className="CurriculumPTE_block_main">
        <div className="CurriculumPTE_week_tab_main">
          <div
            className="SectionTest_tab_inner"
            style={{
              cursor: "pointer",
              background:
                getTab === 1 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 1 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            onClick={() => {
              setTab(1);
            }}>
            Week 1
          </div>
          <div
            className="SectionTest_tab_inner"
            style={{
              cursor: "pointer",
              background:
                getTab === 2 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 2 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            onClick={() => {
              setTab(2);
            }}>
            Week 2
          </div>
          <div
            className="SectionTest_tab_inner"
            style={{
              cursor: "pointer",
              background:
                getTab === 3 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 3 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            onClick={() => {
              setTab(3);
            }}>
            Week 3
          </div>
          <div
            className="SectionTest_tab_inner"
            style={{
              cursor: "pointer",
              background:
                getTab === 4 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 4 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            onClick={() => {
              setTab(4);
            }}>
            Week 4
          </div>
          <div
            className="SectionTest_tab_inner"
            style={{
              cursor: "pointer",
              background:
                getTab === 5 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 5 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            onClick={() => {
              setTab(5);
            }}>
            Week 5
          </div>
          <div
            className="SectionTest_tab_inner"
            style={{
              cursor: "pointer",
              background:
                getTab === 6 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 6 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            onClick={() => {
              setTab(6);
            }}>
            Week 6
          </div>
          <div
            className="SectionTest_tab_inner"
            style={{
              cursor: "pointer",
              background:
                getTab === 7 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 7 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            onClick={() => {
              setTab(7);
            }}>
            Week 7
          </div>
          <div
            className="SectionTest_tab_inner"
            style={{
              cursor: "pointer",
              background:
                getTab === 8 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 8 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            onClick={() => {
              setTab(8);
            }}>
            Week 8
          </div>
          <div
            className="SectionTest_tab_inner"
            style={{
              cursor: "pointer",
              background:
                getTab === 9 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 9 ? "var(--color-white)" : "var(--color-brand)",
              padding: "0.5rem",
            }}
            onClick={() => {
              setTab(9);
            }}>
            Week 9
          </div>
        </div>
        <div className="MockTest_main">
          <div className="MockTest_content_block_main">
            <div className="MockTest_content_head_main">
              <div className="MockTest_content_title_main">
                <h5 style={{ fontWeight: "800", color: "var(--color-brand)" }}>
                  Curriculum{" "}
                </h5>
              </div>
              {/* <div className="MockTest_icon_head_main">
                <IoSpeedometer className="MockTest_icon_head_inner" />
                <FaHeadphones className="MockTest_icon_head_inner" />
                <FaBookReader className="MockTest_icon_head_inner" />
                <HiPencilAlt className="MockTest_icon_head_inner" />
                <RiSpeakFill className="MockTest_icon_head_inner" />
              </div> */}
              <div className="MockTest_content_status_main">
                <h5 style={{ fontWeight: "800", color: "var(--color-brand)" }}>
                  Status
                </h5>
              </div>
            </div>
            <div className="MockTest_content_main">
              <div className="MockTest_content_inner">
                <div>
                  <h5 className="MockTest_content_title_main">MockTest 2</h5>
                </div>
                {/* <div className="MockTest_content_num_main">
                  <div className="MockTest_content_num_inner"> </div>
                  <div className="MockTest_content_num_inner"> </div>
                  <div className="MockTest_content_num_inner"> </div>
                  <div className="MockTest_content_num_inner"> </div>
                  <div className="MockTest_content_num_inner"> </div>
                </div> */}
                <Link className="mock_test_btn_main" to="/">
                  <h5 className="btn start_btn start_btn_responsive">
                    Start Now
                  </h5>
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default CurriculumPTE;
