import React from "react";
import "./LessonDetailsVideos.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import images from "../../constants/images";
import ReactPlayer from "react-player";

const LessonDetailsVideos = ({getlistinner2}) => {
  return (
    <>
     {getlistinner2.length > 0 ? 
    <div className="LessonDetailsVideos_main">

    {getlistinner2 && getlistinner2.map((item,index)=>{
      return(
        <div className="leassonpage_video_main">
        {/* <Video autoplay loop poster={images.home_hero_bg}>
          <source src={item.video_url} type="video/mp4" />
        </Video> */}
         <iframe src={item.video_url}  ></iframe>
        <div>Articles</div>
      </div>
      )
    })}
      
      
    </div>
    :null}
    </>
  );
};

export default LessonDetailsVideos;
