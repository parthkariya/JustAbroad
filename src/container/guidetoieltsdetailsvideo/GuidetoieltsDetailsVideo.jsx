import React from "react";
import "./GuidetoieltsDetailsVideo.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import images from "../../constants/images";
import ReactPlayer from "react-player";

const GuidetoieltsDetailsVideo = ({ getlistinner2 }) => {
  return (
    <div className="LessonDetailsVideos_main" style={{ padding: "2rem" }}>
      {getlistinner2 &&
        getlistinner2.map((item, index) => {
          return (
            <div className="leassonpage_video_main" style={{width:"320px"}}>
              {/* <Video autoplay loop poster={images.home_hero_bg}>
          <source src={item.video_url} type="video/mp4" />
        </Video> */}
              <iframe src={item.video_url} title="video"></iframe>
              <span
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}></span>
            </div>
          );
        })}
    </div>
  );
};

export default GuidetoieltsDetailsVideo;
