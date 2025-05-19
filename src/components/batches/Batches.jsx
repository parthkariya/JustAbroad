import React, { useEffect, useState } from "react";
import "./Batches.css";
import images from "../../constants/images";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ACCEPT_HEADER, get_live_class_category } from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { FaArrowRight } from "react-icons/fa6";

const Batches = () => {
  const [getlist, SetList] = useState([]);
  const [loading, setloading] = useState(false);
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  useEffect(() => {
    Getliveclasscategory();
  }, []);

  const Getliveclasscategory = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    // formdata.append('course_id', JSON.parse(Courseid))
    axios
      .get(get_live_class_category, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          setloading(false);
        } else {
          if (res.data.success == 1) {
            SetList(res.data.data);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };

  return (
    <div style={{ background: "#FBF2F0" }}>
      <div className="Batches_main">
        <div className="batches_card_main">
          {loading === true ? (
            <div
              style={{
                width: "100%",
                height: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <div className="loader"></div>
            </div>
          ) : (
            <>
              {getlist && getlist.length > 0
                ? getlist.map((item, index) => {
                    return (
                      <Link
                        className="webinar_card_main"
                        to={`/AvailableBatches/${item.id}`}>
                        <div className="webinar_card_part1">
                          <img
                            src={
                              item?.image_full_path
                                ? item.image_full_path
                                : images.no_image
                            }
                            className="webinar_card_img"
                            alt=""
                          />
                        </div>
                        <div className="webinar_card_part2">
                          <p className="webinar_card_head">{item?.name}</p>
                          <p className="webinar_card_text">
                            {" "}
                            {item?.description}{" "}
                          </p>
                          <div className="webinar_card_icon_main">
                            <img
                              src={images.foundation1}
                              alt="mains_icon"
                              className="batches_card_icon_inner webinar_card_icon"
                            />
                          </div>

                          <div className="webinar_card_btn">
                            <p>Explore </p>
                            <FaArrowRight className="webinar_card_btn_icon" />
                          </div>
                        </div>
                      </Link>
                    );
                  })
                : null}
            </>
          )}
          {/* <div style={{ display: "flex", gap: "1rem" }}>
            <div className="home_blog_card_main_demo">
              <div className="batches_card_icon_main_demo">
                <img
                  src={images.exam_icon}
                  alt="foundation_icon"
                  className="batches_card_icon_inner"
                />
              </div>
              <div>
                <h4>Pre Exam</h4>
              </div>
              <div>
                <h5>Start Your Prep Here!</h5>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia consequatur laboriosam pariatur incidunt nobis et.
              </div>
            </div>
            <div className="home_blog_card_main_demo">
              <div className="batches_card_icon_main_demo">
                <img
                  src={images.exam_icon}
                  alt="foundation_icon"
                  className="batches_card_icon_inner"
                />
              </div>
              <div>
                <h4>Pre Exam</h4>
              </div>
              <div>
                <h5>Start Your Prep Here!</h5>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia consequatur laboriosam pariatur incidunt nobis et.
              </div>
            </div>
            <div className="home_blog_card_main_demo">
              <div className="batches_card_icon_main_demo">
                <img
                  src={images.exam_icon}
                  alt="foundation_icon"
                  className="batches_card_icon_inner"
                />
              </div>
              <div>
                <h4>Pre Exam</h4>
              </div>
              <div>
                <h5>Start Your Prep Here!</h5>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia consequatur laboriosam pariatur incidunt nobis et.
              </div>
            </div>
            <div className="home_blog_card_main_demo">
              <div className="batches_card_icon_main_demo">
                <img
                  src={images.exam_icon}
                  alt="foundation_icon"
                  className="batches_card_icon_inner"
                />
              </div>
              <div>
                <h4>Pre Exam</h4>
              </div>
              <div>
                <h5>Start Your Prep Here!</h5>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia consequatur laboriosam pariatur incidunt nobis et.
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Batches;
// {
//          <div className="batches_card_inner">
//             <div
//               style={{
//                 height: "440px",
//                 maxWidth: "350px",
//                 position: "relative",
//               }}>
//               <img
//                 src={images.foundation}
//                 alt="foundation"
//                 style={{ height: "100%", width: "100%" }}
//               />
//             </div>
//             <div className="home-blog-card-main">
//               <div className="batches_card_icon_main">
//                 <img
//                   src={images.mains_icon}
//                   alt="mains_icon"
//                   className="batches_card_icon_inner"
//                 />
//               </div>
//               <div>
//                 <h4>Mains</h4>
//               </div>
//               <div>
//                 <h5>Start Your Prep Here!</h5>
//               </div>
//               <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Mollitia consequatur laboriosam pariatur incidunt nobis et.
//               </div>
//             </div>
//           </div>
//           <div className="batches_card_inner">
//             <div
//               className="batches_bg_inner"
//               style={{
//                 backgroundImage: `url(${images.foundation})`,
//                 backgroundSize: "cover",
//                 // height: "85vh",
//                 // backgroundPosition: "inherit",
//                 // backdropFilter: "blur(2px)",
//                 // width: "100vw",
//                 // display: "flex",
//                 // alignItems: "center",
//               }}>
//               {" "}
//               <div
//                 className=""
//                 style={{
//                   backgroundColor: "rgba(0,0,0,.503)",
//                   color: "var(--color-white)",
//                   width: "100%",
//                   height: "100%",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}></div>
//             </div>
//             {/* <div
//               style={{
//                 height: "440px",
//                 maxWidth: "350px",
//                 position: "relative",
//               }}>
//               <img
//                 src={images.foundation}
//                 alt="foundation"
//                 style={{ height: "100%", width: "100%" }}
//               />
//             </div> */}
//             <div className="home-blog-card-main">
//               <div className="batches_card_icon_main">
//                 <img
//                   src={images.batch_icon}
//                   alt="batch_icon"
//                   className="batches_card_icon_inner"
//                 />
//               </div>
//               <div>
//                 <h4>Free Extra Batch</h4>
//               </div>
//               <div>
//                 <h5>Start Your Prep Here!</h5>
//               </div>
//               <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Mollitia consequatur laboriosam pariatur incidunt nobis et.
//               </div>
//             </div>
//           </div>
//           <div className="batches_card_inner">
//             <div
//               style={{
//                 height: "440px",
//                 maxWidth: "350px",
//                 position: "relative",
//               }}>
//               <img
//                 src={images.foundation}
//                 alt="foundation"
//                 style={{ height: "100%", width: "100%" }}
//               />
//             </div>
//             <div className="home-blog-card-main">
//               <div className="batches_card_icon_main">
//                 <img
//                   src={images.exam_icon}
//                   alt="foundation_icon"
//                   className="batches_card_icon_inner"
//                 />
//               </div>
//               <div>
//                 <h4>Pre Exam</h4>
//               </div>
//               <div>
//                 <h5>Start Your Prep Here!</h5>
//               </div>
//               <div>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Mollitia consequatur laboriosam pariatur incidunt nobis et.
//               </div>
//             </div>
//           </div>
// }
