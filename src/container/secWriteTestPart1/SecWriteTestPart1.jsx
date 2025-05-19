import React, { useState } from "react";
import "./SecWriteTestPart1.css";
import images from "../../constants/images";

const SecWriteTestPart1 = ({ textInputRef,SetAns1 ,ans1 }) => {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
    SetAns1(event.target.value)
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
              <h6 className="que_no">Writing Task 1</h6>
            </div>
            <div>
              <p className="que_no">
                You should spend about 20 minutes on this task
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              border: "1px solid ",
              padding: "0.5rem",
            }}>
            <span className="que_no">
              The graph below shows the amount of imported foods in US dollars,
              in four nations in the years 2005, 2010 and 2015.
            </span>
            <span className="que_no">
              Summarize the information by selecting and reporting the main
              features, and make comparisons where relevant.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1rem",
            }}>
            <div className="que_no">Write at least 150 words.</div>
            <div className="">
              <img
                src={images.writeTest}
                alt=""
                className="writeTest_img_inner"
              />
            </div>
          </div>
        </div>
        <div className="SecReadTestPart1_content2_main">
          <textarea
            ref={textInputRef}
            className="form-control"
            id="myBox"
            rows="15"
            onChange={handleOnChange}
            value={ans1 ? ans1 : text}></textarea>
          <div>
            <span>Words Count: {text.split(" ").length} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecWriteTestPart1;
