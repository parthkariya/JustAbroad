import React from "react";
import "./Recommended_IELTS_Plans.css";
import { Recommended_IELTS_Plans_Details } from "../../container";

const Recommended_IELTS_Plans = () => {
  return (
    <div className="Lessondetail_main">
      <div className="Lessondetail_filter_main">
        <div className="lessondetail_head_main">
          <div>
            <h5 className="que_no">Recommended IELTS Plans</h5>
          </div>
        </div>
        <div className="underline" style={{ width: "100%" }}></div>
        <div className="Lessondetail_filter_content_main">
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              placeholder="Search lessons"
              className="search_input"
            />
          </div>
          <div>
            <h5>Articles</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
          <hr />
          <div>
            <h5>Prepositions</h5>
          </div>
        </div>
      </div>
      <div className="Lessondetail_filter_data_main" style={{ width: "75%" }}>
        <Recommended_IELTS_Plans_Details />
      </div>
    </div>
  );
};

export default Recommended_IELTS_Plans;
