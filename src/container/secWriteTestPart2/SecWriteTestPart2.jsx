import React, { useState } from "react";
import "./SecWriteTestPart2.css";

const SecWriteTestPart2 = ({ textInputRef2, SetAns2,ans2 }) => {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
    SetAns2(event.target.value);
  };
  return (
    <div className="SecWriteTestPart1_main_top">
      <div className="SecWriteTestPart1_main">
        <div>
          <h4>Section 1</h4>
        </div>
        {/* <div>
          <p>Read and answer the questions Q.1-15</p>
        </div> */}
      </div>
      <div className="SecReadTestPart1_content_top">
        <div className="SecReadTestPart1_content1_main">
          <div>
            <div>
              <h6 className="que_no">Writing Task 2</h6>
            </div>
            <div>
              <p className="que_no">
                You should spend about 20 minutes on this task
              </p>
            </div>
          </div>
          <div>Write about the following topic:</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              border: "1px solid ",
              padding: "0.5rem",
            }}>
            <span className="que_no">
              Some people are of the view that only university education can
              ensure success, whereas others believe that vocational courses can
              also lead to a fruitful career. Discuss both views and give your
              opinion.
            </span>
          </div>
          <div>
            <span>
              Give reasons for your answer and include any relevant examples
              from your own knowledge or experience.
            </span>
            <br />
            <br />
            <span>Write at least 250 words.</span>
          </div>
        </div>
        <div className="SecReadTestPart1_content2_main">
          <textarea
            ref={textInputRef2}
            className="form-control"
            id="myBox"
            rows="15"
            
            onChange={handleOnChange}
            value={ans2 ? ans2: text}></textarea>
          <div>
            <span>Words Count: {text.split(" ").length} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecWriteTestPart2;
