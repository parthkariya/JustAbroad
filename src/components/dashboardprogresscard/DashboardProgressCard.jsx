import React from "react";
import "./DashboardProgressCard.css";
import images from "../../constants/images";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const DashboardProgressCard = ({ readingcount, listeningcount,writingcount,speakingcount }) => {
  const value = 10;
  const value2 = 2;
  const value3 = 5;
  const value4 = 7;

  return (
    <div className="dash_prog_card_sec">
      <div className="dash_prog_card_con">
        <p className="dash_prog_head">IELTS Progress</p>
        <div className="dash_prog_card_main-flex">
          <div className="dash_prog_card_main">
            <div className="dash_prog_card_img_main">
              <img
                src={images.listning}
                alt=""
                className="dash_prog_card_img"
              />
            </div>

            <p className="dash_prog_card_head">Listening</p>

            <div
              style={{
                width: "80px",
                height: "80px",
                background: "none",
                boxShadow: "none",
              }}>
              <CircularProgressbar
                value={value}
                maxValue={10}
                text={value}
                className="CircularProgressbar_styling"
                styles={buildStyles({
                  pathColor:
                    value <= 5
                      ? "red"
                      : value <= 7
                      ? "yellow"
                      : value > 7
                      ? "green"
                      : "#000",
                  //  pathTransitionDuration: 15
                })}
              />
            </div>

            <p>Predicted Band</p>

            <div className="line" style={{ background: "#ddd" }}></div>

            <div className="dash_prog_card_total_digit_main">
              <div className="dash_prog_card_total_digit_inner">
                <p>{listeningcount.total_que}</p>
                <p>Questions</p>
              </div>
              <div className="dash_prog_card_total_digit_inner">
                <p>{listeningcount.data}</p>
                <p>Correct</p>
              </div>
            </div>
          </div>

          <div className="dash_prog_card_main">
            <div className="dash_prog_card_img_main">
              <img src={images.reading} alt="" className="dash_prog_card_img" />
            </div>

            <p className="dash_prog_card_head">Reading</p>

            <div style={{ width: "80px", height: "80px" }}>
              <CircularProgressbar
                value={value2}
                maxValue={10}
                text={value2}
                className="CircularProgressbar_styling"
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

            <p>Predicted Band</p>

            <div className="line" style={{ background: "#ddd" }}></div>

            <div className="dash_prog_card_total_digit_main">
              <div className="dash_prog_card_total_digit_inner">
                <p>{readingcount.total_que}</p>
                <p>Questions</p>
              </div>
              <div className="dash_prog_card_total_digit_inner">
                <p>{readingcount.data}</p>
                <p>Correct</p>
              </div>
            </div>
          </div>

          <div className="dash_prog_card_main">
            <div className="dash_prog_card_img_main">
              <img src={images.writing} alt="" className="dash_prog_card_img" />
            </div>

            <p className="dash_prog_card_head">Writting</p>

            <div style={{ width: "80px", height: "80px" }}>
              <CircularProgressbar
                value={value3}
                maxValue={10}
                text={value3}
                className="CircularProgressbar_styling"
                styles={buildStyles({
                  pathColor:
                    value3 <= 5
                      ? "red"
                      : value3 <= 7
                      ? "yellow"
                      : value3 > 7
                      ? "green"
                      : "#000",
                })}
              />
            </div>

            <p>Predicted Band</p>

            <div className="line" style={{ background: "#ddd" }}></div>

            <div className="dash_prog_card_total_digit_main">
              <div className="dash_prog_card_total_digit_inner">
                <p>{writingcount.total_que}</p>
                <p>Questions</p>
              </div>
              <div className="dash_prog_card_total_digit_inner">
                <p>{writingcount.data ? writingcount.data : 0}</p>
                <p>Correct</p>
              </div>
            </div>
          </div>

          <div className="dash_prog_card_main">
            <div className="dash_prog_card_img_main">
              <img
                src={images.speaking}
                alt=""
                className="dash_prog_card_img"
              />
            </div>

            <p className="dash_prog_card_head">speaking</p>

            <div style={{ width: "80px", height: "80px" }}>
              <CircularProgressbar
                value={value4}
                maxValue={10}
                text={value4}
                className="CircularProgressbar_styling"
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

            <p>Predicted Band</p>

            <div className="line" style={{ background: "#ddd" }}></div>

            <div className="dash_prog_card_total_digit_main">
              <div className="dash_prog_card_total_digit_inner">
                <p>{speakingcount.total_que}</p>
                <p>Questions</p>
              </div>
              <div className="dash_prog_card_total_digit_inner">
                <p>{speakingcount.data ? speakingcount.data: 0 }</p>
                <p>Correct</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardProgressCard;
