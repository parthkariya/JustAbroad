import React from "react";
import "./DashboardRecentProgress.css";
import { TfiWrite, TfiHeadphoneAlt } from "react-icons/tfi";
import { RiSpeakLine } from "react-icons/ri";
import { LiaBookReaderSolid } from "react-icons/lia";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const DashboardRecentProgress = () => {
  const value = 10;
  const value2 = 2;
  const value3 = 5;
  const value4 = 7;
  return (
    <div className="dash_recent_pro_sec">
      <div className="dash_recent_pro_con">
        <p
          className="dash_prog_head"
          style={{
            paddingLeft: "1rem",
            marginBottom: "0px",
            paddingTop: "1rem",
          }}>
          My Recent Progress
        </p>

        <div className="dash_recent_pro_flex">
          <div className="dash_recent_pro_card">
            <LiaBookReaderSolid color="var(--color-brand)" size={30} />
            <div className="dash_recent_pro_card_middle_flex">
              <p className="dash_recent_pro_card_middle_head">
                Reading Session 4
              </p>
              <p className="dash_recent_pro_card_middle_text">
                Wed Dec 20 2023
              </p>
            </div>
            <div style={{ width: "60px", height: "60px" }}>
              <CircularProgressbar
                value={value}
                maxValue={10}
                text={value}
                className="CircularProgressbar_styling CircularProgressbar_styling2"
                styles={buildStyles({
                  pathColor:
                    value <= 5
                      ? "red"
                      : value <= 7
                      ? "yellow"
                      : value > 7
                      ? "green"
                      : "#000",
                })}
              />
            </div>
          </div>

          <div className="dash_recent_pro_card">
            <RiSpeakLine color="var(--color-brand)" size={30} />
            <div className="dash_recent_pro_card_middle_flex">
              <p className="dash_recent_pro_card_middle_head">
                Speaking Session 2
              </p>
              <p className="dash_recent_pro_card_middle_text">
                Wed Dec 20 2023
              </p>
            </div>
            <div style={{ width: "60px", height: "60px" }}>
              <CircularProgressbar
                value={value2}
                maxValue={10}
                text={value2}
                className="CircularProgressbar_styling CircularProgressbar_styling2"
                styles={buildStyles({
                  pathColor:
                    value2 <= 5
                      ? "red"
                      : value2 <= 7
                      ? "yellow"
                      : value2 > 7
                      ? "green"
                      : "#000",
                })}
              />
            </div>
          </div>

          <div className="dash_recent_pro_card">
            <TfiWrite color="var(--color-brand)" size={30} />
            <div className="dash_recent_pro_card_middle_flex">
              <p className="dash_recent_pro_card_middle_head">
                Writing Session 2
              </p>
              <p className="dash_recent_pro_card_middle_text">
                Wed Dec 20 2023
              </p>
            </div>
            <div style={{ width: "60px", height: "60px" }}>
              <CircularProgressbar
                value={value3}
                maxValue={10}
                text={value3}
                className="CircularProgressbar_styling CircularProgressbar_styling2"
                styles={buildStyles({
                  pathColor:
                    value3 <= 5
                      ? "red"
                      : value3 <= 7
                      ? "yellow"
                      : value4 > 7
                      ? "green"
                      : "#000",
                })}
              />
            </div>
          </div>

          <div className="dash_recent_pro_card">
            <TfiHeadphoneAlt color="var(--color-brand)" size={30} />
            <div className="dash_recent_pro_card_middle_flex">
              <p className="dash_recent_pro_card_middle_head">
                Listening Session 2
              </p>
              <p className="dash_recent_pro_card_middle_text">
                Wed Dec 20 2023
              </p>
            </div>
            <div style={{ width: "60px", height: "60px" }}>
              <CircularProgressbar
                value={value4}
                maxValue={10}
                text={value4}
                className="CircularProgressbar_styling CircularProgressbar_styling2"
                styles={buildStyles({
                  pathColor:
                    value4 <= 5
                      ? "red"
                      : value4 <= 7
                      ? "yellow"
                      : value4 > 7
                      ? "green"
                      : "#000",
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRecentProgress;
