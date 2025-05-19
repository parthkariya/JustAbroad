import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import "./Ielts_Lesson.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ACCEPT_HEADER, get_improvement } from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { FaAngleDoubleRight } from "react-icons/fa";

const Ielts_Lesson = () => {
  useEffect(() => {
    GetSkillsImprovement();
  }, []);
  const [getlist, SetList] = useState([]);
  const [loading, setloading] = useState(false);
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const GetSkillsImprovement = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(get_improvement, formdata, {
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
    <div className="Ielts_Lesson_main">
      {loading === true ? (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {getlist && getlist.length > 0
            ? getlist.map((item, index) => {
                return (
                  <Link
                    to={`/Ielts_LessonDetails/${item.id}`}
                    className="GeneralEng_Lesson_card_main GeneralEng_Lesson_card_main_edit"
                  >
                    {/* <div
                      style={{ padding: "1.3rem" }}
                      className="IELTS_Lesson_card_inner"
                    > */}
                      <div className="icon_general_eng_img_inner_edit">
                        <img
                          alt=""
                          className="icon_general_eng_img_inner"
                          src={item?.image_full_path ? item.image_full_path : images.no_image}
                          // src={images.home_hero_bg}
                          // className="icon_ielts_img_inner"
                        />
                      </div>
                      <div className="GeneralEng_name_top">
                        <div>
                          <h5>{item?.name}</h5>
                        </div>
                        <div>
                          <p style={{ textAlign: "start",height:"130px" }}>
                            {item?.description}
                          </p>
                        </div>
                        <div to="/Ielts_LessonDetails" className="">
                        <h5 className="explore_btn">Explore <FaAngleDoubleRight /></h5>
                      </div>
                      </div>
                      {/* <div>
                        <p>{item?.description}</p>
                      </div> */}
                    {/* </div> */}
                    {/* <div
                      to="/Ielts_LessonDetails"
                      className="IELTS_Lesson_card_explore_btn"
                    >
                      <h4 className="">Explore</h4>
                    </div> */}
                  </Link>
                );
              })
            : null}
        </>
      )}
    </div>
  );
};

export default Ielts_Lesson;
// {
//   <div className="IELTS_Lesson_card_main">
//   <div style={{ padding: "1.3rem" }} className="IELTS_Lesson_card_inner">
//     <div className="icon_ielts_img_main">
//       <img
//         src={images.reading}
//         alt="reading"
//         className="icon_ielts_img_inner"
//       />
//     </div>
//     <div>
//       <h5>IELTS Reading</h5>
//     </div>
//     <div>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Repellendus voluptatibus neque unde a, veniam blanditiis
//         cupiditate sapiente rerum eos quam.
//       </p>
//     </div>
//   </div>
//   <div className="IELTS_Lesson_card_explore_btn">
//     <h4 className="">Explore</h4>
//   </div>
// </div>
// <div className="IELTS_Lesson_card_main">
//   <div style={{ padding: "1.3rem" }} className="IELTS_Lesson_card_inner">
//     <div className="icon_ielts_img_main">
//       <img
//         src={images.writing}
//         alt="writing"
//         className="icon_ielts_img_inner"
//       />
//     </div>
//     <div>
//       <h5>IELTS Writing</h5>
//     </div>
//     <div>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Repellendus voluptatibus neque unde a, veniam blanditiis
//         cupiditate sapiente rerum eos quam.
//       </p>
//     </div>
//   </div>
//   <div className="IELTS_Lesson_card_explore_btn">
//     <h4 className="">Explore</h4>
//   </div>
// </div>
// <div className="IELTS_Lesson_card_main">
//   <div style={{ padding: "1.3rem" }} className="IELTS_Lesson_card_inner">
//     <div className="icon_ielts_img_main">
//       <img
//         src={images.speaking}
//         alt="Speaking"
//         className="icon_ielts_img_inner"
//       />
//     </div>
//     <div>
//       <h5>IELTS Speaking</h5>
//     </div>
//     <div>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Repellendus voluptatibus neque unde a, veniam blanditiis
//         cupiditate sapiente rerum eos quam.
//       </p>
//     </div>
//   </div>
//   <div className="IELTS_Lesson_card_explore_btn">
//     <h4 className="">Explore</h4>
//   </div>
// </div>
// <div className="IELTS_Lesson_card_main">
//   <div style={{ padding: "1.3rem" }} className="IELTS_Lesson_card_inner">
//     <div className="icon_ielts_img_main">
//       <img
//         src={images.tips}
//         alt="Tips"
//         className="icon_ielts_img_inner"
//       />
//     </div>
//     <div>
//       <h5>IELTS Tips</h5>
//     </div>
//     <div>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Repellendus voluptatibus neque unde a, veniam blanditiis
//         cupiditate sapiente rerum eos quam.
//       </p>
//     </div>
//   </div>
//   <div className="IELTS_Lesson_card_explore_btn">
//     <h4 className="">Explore</h4>
//   </div>
// </div>
// }