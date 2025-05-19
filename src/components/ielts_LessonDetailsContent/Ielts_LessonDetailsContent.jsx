import React, { useEffect, useState } from "react";
import "./Ielts_LessonDetailsContent.css";
import { Ielts_LessonDetailLesson, Ielts_LessonDetailsVideos, Ielts_TakeExercise, Ielts_TakeQuizeLesson, LessonDetailLesson, LessonDetailsVideos, TakeExercise, TakeQuizeLesson } from "../../components";

const Ielts_LessonDetailsContent = ({getlist,getlistinner,getlistinner2,getlistinner3,getlistinner4,getAudioLable}) => {
  
  const [getTab, setTab] = useState(1);
  const [getDropdown, setDropdown] = useState(false);
  const [getExe, setExe] = useState();


  return (
    <div className="LessonDetailsContent_main">
      <div className="LessonDetailsContent_tab_top_main">
        <div className="LessonDetailsContent_tab_main">
          {getlistinner.length > 0 ? 
          <div
            className="btn btn_tab_lessonpage"
            style={{
              background:
                getTab === 1 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 1 ? "var(--color-white)" : "var(--color-brand)",
            }}
            onClick={() => {
              setTab(1);
              setDropdown(false);
              setExe(0);
            }}>
            Lesson
          </div>
          :null}

          {/* {getlist && getlist.length >= 1 ? <>
            {getlist.map((item,index)=>{
              
            })}
          </>: null} */}
            {getlistinner2.length > 0  ? 
          <div
            className="btn btn_tab_lessonpage"
            style={{
              background:
                getTab === 2 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 2 ? "var(--color-white)" : "var(--color-brand)",
            }}
            onClick={() => {
              setTab(2);
              setDropdown(false);
              setExe(0);
            }}>
            Watch Videos
          </div>
          :null}
          {getlistinner3.length > 0  ? 
          <div
            className="btn btn_tab_lessonpage"
            style={{
              background:
                getTab === 3 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 3 ? "var(--color-white)" : "var(--color-brand)",
            }}
            onClick={() => {
              setTab(3);
              setDropdown(true);
              setExe(1);
            }}>
            Take Exercises
          </div>
          :null}
          {getlistinner4.length > 0  ? 
          <div
            className="btn btn_tab_lessonpage"
            style={{
              background:
                getTab === 4 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 4 ? "var(--color-white)" : "var(--color-brand)",
            }}
            onClick={() => {
              setTab(4);
              setDropdown(false);
              setExe();
            }}>
            Take Quizes
          </div>
          :null}
        </div>
        {/* {getDropdown === true ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.3rem",
            }}>
            <select
              className=""
              name="position"
              id="lang"
              style={{
                padding: "0.3rem 1px",
                cursor: "pointer",
                color: "var(--color-brand)",
                border: "2px  solid var(--color-brand)",
                borderRadius: "3px",
                fontWeight: "600",
                fontSize: "16px",
              }}>
              <option selected disabled>
                <div>Select Excerise</div>
              </option>
              <option
                value=""
                onClick={() => {
                  setExe(1);
                }}>
                Excercise 1
              </option>
              <option
                value=""
                onClick={() => {
                  setExe(2);
                }}>
                Excercise 2
              </option>
              <option
                value=""
                onClick={() => {
                  setExe(3);
                }}>
                Excercise 3
              </option>
              <option
                value=""
                onClick={() => {
                  setExe(4);
                }}>
                Excercise 4
              </option>
            </select>
          </div>
        ) : null} */}
      </div>
      <div className="underline" style={{ width: "100%" }}></div>
      {getTab === 1 ? <Ielts_LessonDetailLesson getlistinner={getlistinner} /> : null}
      {getTab === 2 ? <Ielts_LessonDetailsVideos getlistinner2={getlistinner2} /> : null}
      {getTab === 4 ? <Ielts_TakeQuizeLesson getlistinner4={getlistinner4}/> : null}
      {getExe === 1 ? <Ielts_TakeExercise getlistinner3={getlistinner3} getAudioLable={getAudioLable}/> : null}
    
    
    </div>
  );
};

export default Ielts_LessonDetailsContent;
