import React, { useEffect, useState } from "react";
import "./DashboardVideo.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import images from "../../constants/images";
import { TbWorld } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import axios from "axios";
import { ACCEPT_HEADER, get_homevideo } from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { useNavigate } from "react-router-dom";

const DashboardVideo = () => {
  useEffect(() => {
    GetVideo();
  }, []);

  const [videolist, SetVideoList] = useState([]);
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const GetVideo = async () => {
    const Token = await localStorage.getItem("is_token");
    axios
      .get(get_homevideo, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
        } else {
          if (res.data.success == 1) {
            SetVideoList(res.data.data);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
      });
  };

  return (
    <div className="dash_video_main">
      {videolist && videolist.length > 0
        ? videolist.map((item, index) => {
            return (
              <div>
                <div className="dash_video_main_head">
                  <TbWorld color="var(--color-brand)" size={30} />
                  <p className="dash_video_main_head_txt">{item.name}</p>
                </div>
                <div className="leassonpage_video_main leassonpage_video_main_dash_video">
                  <iframe src={item.video_url} className="dashvideos_iframe"></iframe>
                  {/* <Video autoplay loop poster={images.home_hero_bg}>
            <source src="https://www.youtube.com/embed/bldwa0LTaLc?si=hci__zkmQGaH0we8" type="video/webm" />
          </Video> */}
                  <div>{item.description}</div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default DashboardVideo;
// {
//   <div>
//   <div className="dash_video_main_head">
//     <TbWorld color="var(--color-brand)" size={30} />
//     <p className="dash_video_main_head_txt">World of the Day</p>
//   </div>
//   <div className="leassonpage_video_main leassonpage_video_main_dash_video">
//     <Video autoplay loop poster={images.home_hero_bg}>
//       <source src={images.demovideo} type="video/webm" />
//     </Video>
//     <div>Epitome</div>
//   </div>
// </div>

// <div>
//   <div className="dash_video_main_head">
//     <MdOutlineTipsAndUpdates color="var(--color-brand)" size={30} />
//     <p className="dash_video_main_head_txt">Tip of the Day</p>
//   </div>
//   <div className="leassonpage_video_main leassonpage_video_main_dash_video">
//     <Video autoplay loop poster={images.home_hero_bg}>
//       <source src={images.demovideo} type="video/webm" />
//     </Video>
//     <div>Tip of the Day</div>
//   </div>
// </div>

// <div>
//   <div className="dash_video_main_head">
//     <FaArrowTrendUp color="var(--color-brand)" size={30} />
//     <p className="dash_video_main_head_txt">Trending Videos</p>
//   </div>
//   <div className="leassonpage_video_main leassonpage_video_main_dash_video">
//     <Video autoplay loop poster={images.home_hero_bg}>
//       <source src={images.demovideo} type="video/webm" />
//     </Video>
//     <div>Anger Mangement</div>
//   </div>
// </div>
// }
