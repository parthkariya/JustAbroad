import React from "react";
import "./SecTestPart1.css";

const SecTestPart1 = ({
  textInputRef,
  textInputRef1,
  textInputRef2,
  textInputRef3,
  textInputRef4,
  textInputRef5,
  textInputRef6,
  textInputRef7,
  textInputRef8,
  textInputRef9,
  SetAns1,
  SetAns2,
  SetAns3,
  SetAns4,
  SetAns5,
  SetAns6,
  SetAns7,
  SetAns8,
  SetAns9,
  SetAns10,
  ans1,
  ans2,
  ans3,
  ans4,
  ans5,
  ans6,
  ans7,
  ans8,
  ans9,
  ans10,
}) => {
  return (
    <div className="SecTestPart1_main_top">
      <div className="SecTestPart1_main">
        <div>
          <h4>Part 1</h4>
        </div>
        <div>
          <p>Listen and answer the questions Q.1-10</p>
        </div>
      </div>
      <div className="SecTestPart1_content_main">
        <div>
          <h6>Section 1</h6>
        </div>
        <div>
          <h6>Questions 1 - 10</h6>
        </div>
        <div>
          <i style={{ fontStyle: "italic" }}>
            Complete the form. Write{" "}
            <b style={{ fontWeight: "600" }}>
              NO MORE THAN THREE WORDS AND / OR A NUMBER
            </b>{" "}
            in each gap.
          </i>
        </div>
        <div className="SecTestPart1_content_inner">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h6>Customer Details</h6>
          </div>
          <hr style={{ marginBottom: "1rem" }} />
          <div className="sectest_queans_top">
            <div className="sectest_queans_main">
              <div className="sectest_queans_label">
                <div>Interest rate</div>
              </div>
              <div className="secTestPart1_input_main">
                <p className="que_no">1.</p>
                <input
                  ref={textInputRef}
                  type="text"
                  value={ans1}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns1(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sectest_queans_main">
              <div className="sectest_queans_label">
                <div>Loan amount:</div>
              </div>
              <div className="secTestPart1_input_main">
                <p className="que_no">2.</p>${" "}
                <input
                  ref={textInputRef1}
                  type="number"
                  value={ans2}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns2(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sectest_queans_main">
              <div className="sectest_queans_label">
                <div>Name:</div>
              </div>
              <div className="secTestPart1_input_main">
                <p className="que_no">3.</p>
                <input
                  ref={textInputRef2}
                  type="text"
                  value={ans3}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns3(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sectest_queans_main">
              <div className="sectest_queans_label">
                <div>Address:</div>
              </div>
              <span
                className="secTestPart1_input_main"
                style={{ alignItems: "flex-start" }}>
                <span className="que_no">4.</span>
                <span>
                  <input
                    ref={textInputRef3}
                    type="text"
                    value={ans4}
                    className="secTestPart1_input_inner"
                    onChange={(e) => {
                      SetAns4(e.target.value);
                    }}
                  />
                  &nbsp; <span>,Harrison Avenue, Albany,</span>
                </span>
              </span>
            </div>
            <div className="sectest_queans_main">
              <div className="sectest_queans_label">
                <div></div>
              </div>
              <div className="secTestPart1_input_main">
                <p className="que_no">5.</p>
                <input
                  ref={textInputRef4}
                  type="text"
                  value={ans5}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns5(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sectest_queans_main">
              <div className="sectest_queans_label">
                <div>Rated credit card score:</div>
              </div>
              <div className="secTestPart1_input_main">
                <p className="que_no">6.</p>
                <input
                  ref={textInputRef5}
                  type="text"
                  value={ans6}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns6(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sectest_queans_main">
              <div className="sectest_queans_label">
                <div>Social Security Number:</div>
              </div>
              <div className="secTestPart1_input_main">
                <p className="que_no">7.</p>
                <input
                  ref={textInputRef6}
                  type="text"
                  value={ans7}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns7(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sectest_queans_main">
              <div className="sectest_queans_label">
                <div>Email:</div>
              </div>
              <div className="secTestPart1_input_main">
                <p className="que_no">8.</p>
                <input
                  ref={textInputRef7}
                  type="email"
                  value={ans8}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns8(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="sectest_queans_main">
              <div className="sectest_queans_label">
                <div>Need loan for:</div>
              </div>

              <span
                className="secTestPart1_input_main"
                style={{ alignItems: "flex-start" }}>
                <span className="que_no">9.</span>
                <span>
                  <input
                    ref={textInputRef8}
                    type="text"
                    value={ans9}
                    className="secTestPart1_input_inner"
                    onChange={(e) => {
                      SetAns9(e.target.value);
                    }}
                  />
                  &nbsp; <span>of the house</span>
                </span>
              </span>
            </div>
            <div className="sectest_queans_main">
              <div className="sectest_queans_label">
                <div>Activities will start in :</div>
              </div>
              <div className="secTestPart1_input_main">
                <p className="que_no">10.</p>
                <input
                  ref={textInputRef9}
                  type="text"
                  value={ans10}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns10(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecTestPart1;
