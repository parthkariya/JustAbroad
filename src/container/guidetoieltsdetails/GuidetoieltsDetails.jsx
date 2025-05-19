import React, { useState } from "react";
import "./GuidetoieltsDetails.css";
import { GuidtoieltsSingPart, LessonDetailsVideos, TakeExercise, TakeQuizeLesson } from "../../components";

const GuidetoieltsDetails = ({getlistinner2}) => {

    const Data=[
        {
            id:1,
            name:'About'
        },
        {
            id:2,
            name:'Test Format'
        },
        {
            id:3,
            name:'Band Descriptor'
        },
        {
            id:4,
            name:'Booking a test Date'
        },
        {
            id:5,
            name:'Test Result'
        },
        {
            id:6,
            name:'Test Format'
        },
        {
            id:7,
            name:'Course - PTE'
        },
        {
            id:8,
            name:'Band Descriptor'
        },
        {
            id:9,
            name:'Course - IELTS General Regular'
        },
    ]

  const [getTab, setTab] = useState(1);
  const [getDropdown, setDropdown] = useState(false);
  const [getExe, setExe] = useState();
  const [getdata, SetData] = useState('')

  

  return (
    <div className="LessonDetailsContent_main">
      <div className="LessonDetailsContent_tab_top_main">
        <div className="LessonDetailsContent_tab_main LessonDetailsContent_tab_main_guide_detail">
            {getlistinner2 && getlistinner2.length > 0 ? 
            
            getlistinner2.map((item,index)=>{
                return(
                    <div
            className="btn btn_tab_lessonpage btn_tab_guide_detail"
            style={{
              background:
                getTab === 1 ? "var(--color-brand)" : "var(--color-white)",
              color: getTab === 1 ? "var(--color-white)" : "var(--color-brand)",
            }}
            onClick={() => {
              SetData(item)
              setTab(1);
              setDropdown(false);
              setExe(0);
             
            }}>
            {item.name}
          </div>
                )
            }) : null}
         
        </div>
      
      </div>
      <div className="underline" style={{ width: "100%" }}></div>
      {getTab === 1 ? <>
        <GuidtoieltsSingPart getdata={getdata}/>
      </> : null}
    </div>
  );
};

export default GuidetoieltsDetails