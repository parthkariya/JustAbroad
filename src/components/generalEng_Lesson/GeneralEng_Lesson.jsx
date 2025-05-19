import React, { useEffect, useState } from "react";
import "./GeneralEng_Lesson.css";
import images from "../../constants/images";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ACCEPT_HEADER, get_skills_improvement } from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { FaAngleDoubleRight } from "react-icons/fa";

const GeneralEng_Lesson = () => {
  useEffect(() => {
    GetSkillsImprovement();
  }, []);
  const paramm = useParams();
  var slug = paramm.id;

  const [getlist, SetList] = useState([]);
  const [loading, setloading] = useState(false);
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const GetSkillsImprovement = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    const formdata = new FormData();
    formdata.append("", "");
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(get_skills_improvement, formdata, {
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
    <div className="GeneralEng_Lesson_main">
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
                  <Link  to={`/Lessondetail/${item.id}`} className="GeneralEng_Lesson_card_main GeneralEng_Lesson_card_main_edit">
                    <div className="icon_general_eng_img_inner_edit">
                      <img
                        // src={images.home_hero_bg}
                        alt=""
                        src={
                          item?.image_full_path
                            ? item.image_full_path
                            : images.no_image
                        }
                        className="icon_general_eng_img_inner"
                      />
                    </div>
                    <div className="GeneralEng_name_top">
                      <div>
                        <h5 className="que_no">{item?.name}</h5>
                      </div>
                      <div>
                        <p style={{ textAlign: "start" }}>
                          {item?.description}
                        </p>
                      </div>
                      <div to="/Ielts_LessonDetails" className="">
                        <h5 className="explore_btn">Explore <FaAngleDoubleRight /></h5>
                      </div>
                    </div>
                    {/* <Link
                    className="GeneralEng_Lesson_card_main"
                    to={/Lessondetail/${item.id}}>
                    <div className="icon_general_eng_img_main">
                      <img
                        src={
                          item?.image_full_path
                            ? item.image_full_path
                            : images.no_image
                        }
                        alt="grammar"
                        className="icon_general_eng_img_inner"
                      />
                    </div>
                    <div>
                      <h5>{item?.name}</h5>
                    </div>
                    <div>
                      <p>{item?.description}</p>
                    </div>
                    <div
                      to="/Ielts_LessonDetails"
                      className="IELTS_Lesson_card_explore_btn">
                      <h4 className="">Explore</h4>
                    </div>
                  </Link> */}
                  </Link>
                );
              })
            : null}
        </>
      )}
    </div>
  );
};

export default GeneralEng_Lesson;
// {
//   <div className="GeneralEng_Lesson_card_main">
//   <div className="icon_general_eng_img_main">
//     <img
//       src={images.vocabulary}
//       alt="vocabulary"
//       className="icon_general_eng_img_inner"
//     />
//   </div>
//   <div>
//     <h5>Vocabulary</h5>
//   </div>
//   <div>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
//       voluptatibus neque unde a, veniam blanditiis cupiditate sapiente
//       rerum eos quam.
//     </p>
//   </div>
// </div>
// <div className="GeneralEng_Lesson_card_main">
//   <div className="icon_general_eng_img_main">
//     <img
//       src={images.trending_video}
//       alt="trending_video"
//       className="icon_general_eng_img_inner"
//     />
//   </div>
//   <div>
//     <h5>Trending Videos</h5>
//   </div>
//   <div>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
//       voluptatibus neque unde a, veniam blanditiis cupiditate sapiente
//       rerum eos quam.
//     </p>
//   </div>
// </div>
// <div className="GeneralEng_Lesson_card_main">
//   <div className="icon_general_eng_img_main">
//     <img
//       src={images.spellings}
//       alt="spellings"
//       className="icon_general_eng_img_inner"
//     />
//   </div>
//   <div>
//     <h5>Spellings</h5>
//   </div>
//   <div>
//     <p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
//       voluptatibus neque unde a, veniam blanditiis cupiditate sapiente
//       rerum eos quam.
//     </p>
//   </div>
// </div>
// }

{
  /* <Link
className="GeneralEng_Lesson_card_main"
to={/Lessondetail/${item.id}}>
<div className="icon_general_eng_img_main">
  <img
    src={
      item?.image_full_path
        ? item.image_full_path
        : images.no_image
    }
    alt="grammar"
    className="icon_general_eng_img_inner"
  />
</div>
<div>
  <h5>{item?.name}</h5>
</div>
<div>
  <p>{item?.description}</p>
</div>
<div
  to="/Ielts_LessonDetails"
  className="IELTS_Lesson_card_explore_btn">
  <h4 className="">Explore</h4>
</div>
</Link> */
}