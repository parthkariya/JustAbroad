import React, { useState } from "react";
import "./SecTestPart4.css";

const SecTestPart4 = ({
  textInputRef31,
  textInputRef32,
  textInputRef33,
  textInputRef34,
  textInputRef35,
  textInputRef36,
  textInputRef37,
  textInputRef38,
  textInputRef39,
  textInputRef40,
  SetAns31,
  SetAns32,
  SetAns33,
  SetAns34,
  SetAns35,
  SetAns36,
  SetAns37,
  SetAns38,
  SetAns39,
  SetAns40,
  ans31,
  ans32,
  ans33,
  ans34,
  ans35,
  ans36,
  ans37,
  ans38,
  ans39,
  ans40,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [mcq, setmcq] = useState([
    {
      id: 1,
      question:
        "31. According to the speaker, what does society need religion for?",
      refn: textInputRef31,
      options: [
        {
          opt: "having a collective belief",
        },
        {
          opt: "it makes us spiritual",
        },
        {
          opt: "for orderly conduct and to impose values",
        },
      ],
    },
    {
      id: 2,
      question: "32. What does civilization need to work well?",
      refn: textInputRef32,
      options: [
        {
          opt: "Religious teachings",
        },
        {
          opt: "Laws",
        },
        {
          opt: "Learnings",
        },
      ],
    },
    {
      id: 3,
      question:
        "33. Nowadays, religious practices are regarded with disrespect as",
      refn: textInputRef33,
      options: [
        {
          opt: "Secularism",
        },
        {
          opt: "Superiority",
        },
        {
          opt: "a myth",
        },
      ],
    },
  ]);

  const [expanded, setExpanded] = useState(0);

  return (
    <div className="SecTestPart1_main_top">
      <div className="SecTestPart1_main">
        <div>
          <h4>Part 4</h4>
        </div>
        <div>
          <p>Listen and answer the questions Q.31-40</p>
        </div>
      </div>
      <div className="SecTestPart1_content_main">
        <div>Section 4</div>
        <div>
          <div>
            <h6 className="que_heading">Questions 31 - 33</h6>
          </div>
          <div>
            <i style={{ fontStyle: "italic" }}>Choose the correct answer.</i>
          </div>
          <div className="test_accordian_main">
            {mcq.map((item, index) => (
              <div
                ref={item.refn}
                tabIndex={-1}
                key={item.id}
                className="test_accordian_inner"
                onClick={() => {
                  setExpanded(index);
                }}>
                <div className="test-questions">
                  <div className="">
                    <p style={{ marginBottom: "0px" }}>{item.question}</p>
                  </div>
                </div>
                <div
                  className={`test-answer ${
                    expanded === index
                      ? "visible"
                      : "hidden test-answer_margin_not"
                  }`}>
                  {item.options.map((item1) => {
                    return (
                      <>
                        <div>
                          <label className="radio_styling">
                            <input
                              type="radio"
                              name="react-tips"
                              value={item1.opt}
                              className=""
                              onChange={(e) => {
                                // eslint-disable-next-line no-unused-expressions
                                index == 0
                                  ? SetAns31(e.target.value)
                                  : index === 1
                                  ? SetAns32(e.target.value)
                                  : index === 2
                                  ? SetAns33(e.target.value)
                                  : null;
                              }}
                            />
                            {item1.opt}
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="secTestPart4_box">
          <div>
            <h6 className="que_heading">Questions 34 - 40</h6>
          </div>
          <i style={{ fontStyle: "italic" }}>
            Complete the notes. Write &nbsp;
            <b style={{ fontWeight: "600" }}>ONE WORD ONLY</b> in each gap.
          </i>
          <div className="SecTestPart4_box_main">
            <div className="advantages_main">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}>
                <h6 className="que_no">Advantages of religion</h6>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div>•</div>
                <div>
                  <b className="que_no">Emotional and mental balance:</b> People
                  look for solace in their religion at the time of{" "}
                  <span className="que_no">
                    34{" "}
                    <input
                      ref={textInputRef34}
                      type="text"
                      value={ans34}
                      className="secTestPart1_input_inner"
                      onChange={(e) => {
                        SetAns34(e.target.value);
                      }}
                    />{" "}
                  </span>{" "}
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div>•</div>
                <div>
                  <b className="que_no">Social unanimity:</b> Religious
                  practices encourage brotherhood and build up &nbsp;
                  <span className="que_no">
                    {" "}
                    35{" "}
                    <input
                      ref={textInputRef35}
                      type="text"
                      value={ans35}
                      className="secTestPart1_input_inner"
                      onChange={(e) => {
                        SetAns35(e.target.value);
                      }}
                    />{" "}
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div>•</div>
                <div>
                  <b className="que_no">Recreation:</b> &nbsp;Earlier recreation
                  was considered a&nbsp;
                  <span className="que_no">
                    36{" "}
                    <input
                      type="text"
                      value={ans36}
                      ref={textInputRef36}
                      className="secTestPart1_input_inner"
                      onChange={(e) => {
                        SetAns36(e.target.value);
                      }}
                    />
                    &nbsp;{" "}
                    <span style={{ fontWeight: "500" }}>
                      that a handful of people possess but now religious
                      celebrations avail common people an opportunity to break
                      the
                      <span className="que_no">
                        &nbsp;37{" "}
                        <input
                          ref={textInputRef37}
                          type="text"
                          value={ans37}
                          className="secTestPart1_input_inner"
                          onChange={(e) => {
                            SetAns37(e.target.value);
                          }}
                        />
                        <span style={{ fontWeight: "500" }}>
                          &nbsp; and routine life.
                        </span>
                      </span>{" "}
                    </span>
                  </span>{" "}
                </div>
              </div>
              <div>Many religious celebrations involve music and dance.</div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div>•</div>
                <div>
                  <b className="que_no">Right direction:</b> Religion provides
                  people with a purpose for life, career and other activities.
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "1.4rem",
                gap: "1rem",
                justifyContent: "center",
                flexDirection: "column",
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}>
                <h6 className="que_no">Other influences of religion</h6>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div>•</div>
                <div>
                  <span>
                    Pilgrims travel to different places and bring development
                    through the routes of their journey. They also help in the
                    growth of the local{" "}
                    <span className="que_no">
                      &nbsp; 38 &nbsp;
                      <input
                        ref={textInputRef38}
                        type="text"
                        value={ans38}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns38(e.target.value);
                        }}
                      />{" "}
                      &nbsp;.
                    </span>
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div>•</div>
                <div>
                  <span>
                    Political systems have been controlled by
                    <span className="que_no">
                      &nbsp; 39 &nbsp;
                      <input
                        ref={textInputRef39}
                        type="text"
                        value={ans39}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns39(e.target.value);
                        }}
                      />{" "}
                    </span>
                    &nbsp; for example in ancient civilisations such as Indus
                    Valley, Egypt and Greece.
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "1.4rem",
                gap: "1rem",
                justifyContent: "center",
                flexDirection: "column",
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}>
                <h6 className="que_no">Other influences of religion</h6>
              </div>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div>•</div>
                <div>
                  <span>
                    Radicals are viewed as the decayed branch of religion which
                    should be either
                    <span className="que_no">
                      &nbsp; 40 &nbsp;
                      <input
                        ref={textInputRef40}
                        type="text"
                        value={ans40}
                        className="secTestPart1_input_inner"
                        onChange={(e) => {
                          SetAns40(e.target.value);
                        }}
                      />{" "}
                      &nbsp; <span style={{ fontWeight: "500" }}>or cut.</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecTestPart4;
