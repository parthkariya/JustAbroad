import React from "react";
import "./SecTestPart3.css";

const SecTestPart3 = ({
  textInputRef21,
  textInputRef22,
  textInputRef23,
  textInputRef24,
  textInputRef25,
  textInputRef26,
  textInputRef27,
  textInputRef28,
  textInputRef29,
  textInputRef30,
  SetAns21,
  SetAns22,
  SetAns23,
  SetAns24,
  SetAns25,
  SetAns26,
  SetAns27,
  SetAns28,
  SetAns29,
  SetAns30,
  ans21,
  ans22,
  ans23,
  ans24,
  ans25,
  ans26,
  ans27,
  ans28,
  ans29,
  ans30,
}) => {
  return (
    <div className="SecTestPart1_main_top">
      <div className="SecTestPart1_main">
        <div>
          <h4>Part 3</h4>
        </div>
        <div>
          <p>Listen and answer the questions Q.21-30</p>
        </div>
      </div>
      <div className="SecTestPart1_content_main">
        <div>Section 3</div>
        <div>
          <h6 className="que_heading">Questions 21 - 30</h6>
        </div>
        <div>
          <i style={{ fontStyle: "italic" }}>
            Complete the form. Write{" "}
            <b style={{ fontWeight: "600" }}>NO MORE THAN TWO WORDS</b> in each
            gap.
          </i>
        </div>
        <div className="SecTestPart3_table_main_main">
          <div className="SecTestPart3_table_main">
            <div className="SecTestPart3_table_inner remove_underline remove_border_right">
              Name of the Team Leaders
            </div>
            <div className="SecTestPart3_table_inner remove_underline remove_border_right">
              Brittany Hopkins, captain, Girls &nbsp;
              <span className="que_no">21</span>{" "}
              <input
                ref={textInputRef21}
                type="text"
                value={ans21}
                className="secTestPart1_input_inner"
                onChange={(e) => {
                  SetAns21(e.target.value);
                }}
              />{" "}
              &nbsp;, team
            </div>
            <div className="SecTestPart3_table_inner remove_underline">
              <div>
                Thomas &nbsp; <span className="que_no">22</span>{" "}
                <input
                  ref={textInputRef22}
                  type="text"
                  value={ans22}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns22(e.target.value);
                  }}
                />{" "}
                &nbsp;, captain, boy's team{" "}
              </div>
            </div>
          </div>
          <div className="SecTestPart3_table_main">
            <div className="SecTestPart3_table_inner remove_underline remove_border_right">
              Replacements in team
            </div>
            <div className="SecTestPart3_table_inner remove_underline remove_border_right">
              Whitney Powell &nbsp;
              <span className="que_no">23</span>{" "}
              <input
                ref={textInputRef23}
                type="text"
                value={ans23}
                className="secTestPart1_input_inner"
                onChange={(e) => {
                  SetAns23(e.target.value);
                }}
              />{" "}
              &nbsp;, Brooke Adams as the <br />
              <br /> midfielder
            </div>
            <div className="SecTestPart3_table_inner remove_underline">
              <div>
                Falk in place of Randy as a &nbsp;{" "}
                <span className="que_no">24</span>{" "}
                <input
                  ref={textInputRef24}
                  type="text"
                  value={ans24}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns24(e.target.value);
                  }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="SecTestPart3_table_main">
            <div className="SecTestPart3_table_inner remove_underline remove_border_right">
              Reason for Replacement{" "}
            </div>
            <div className="SecTestPart3_table_inner remove_underline remove_border_right">
              Brooke experienced an &nbsp;
              <span className="que_no">25</span>{" "}
              <input
                ref={textInputRef25}
                type="text"
                value={ans25}
                className="secTestPart1_input_inner"
                onChange={(e) => {
                  SetAns25(e.target.value);
                }}
              />{" "}
              &nbsp;, injury
            </div>
            <div className="SecTestPart3_table_inner remove_underline">
              <div>
                Failed to achieve the required &nbsp;{" "}
                <span className="que_no">26</span>{" "}
                <input
                  ref={textInputRef26}
                  type="text"
                  value={ans26}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns26(e.target.value);
                  }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="SecTestPart3_table_main">
            <div className="SecTestPart3_table_inner  remove_border_right">
              Suggestion{" "}
            </div>
            <div className="SecTestPart3_table_inner  remove_border_right">
              Team needs more &nbsp;
              <span className="que_no">27</span>{" "}
              <input
                ref={textInputRef27}
                type="text"
                value={ans27}
                className="secTestPart1_input_inner"
                onChange={(e) => {
                  SetAns27(e.target.value);
                }}
              />{" "}
              &nbsp; sessions <br />
              <br />
              Identify the strengths and weaknesses of players by watching{" "}
              <span className="que_no">28</span>{" "}
              <input
                ref={textInputRef28}
                type="text"
                value={ans28}
                className="secTestPart1_input_inner"
                onChange={(e) => {
                  SetAns28(e.target.value);
                }}
              />{" "}
              &nbsp;of the previous year's season
            </div>
            <div className="SecTestPart3_table_inner">
              <div>
                Thomas must manage the necessary coordination between strikers
                due to the &nbsp; <span className="que_no">29</span>
                &nbsp;{" "}
                <input
                  ref={textInputRef29}
                  type="text"
                  value={ans29}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns29(e.target.value);
                  }}
                />{" "}
                <br /> <br />
                In his position on the field, Thomas must handle the attack by
                the &nbsp; <span className="que_no">30</span>
                &nbsp;{" "}
                <input
                  ref={textInputRef30}
                  type="text"
                  value={ans30}
                  className="secTestPart1_input_inner"
                  onChange={(e) => {
                    SetAns30(e.target.value);
                  }}
                />{" "}
                team players.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecTestPart3;
