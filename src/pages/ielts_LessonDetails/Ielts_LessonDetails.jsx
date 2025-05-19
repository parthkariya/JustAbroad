/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  ACCEPT_HEADER,
  get_improvement,
} from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Ielts_LessonDetailsContent } from "../../components";
import { FaAnglesDown } from "react-icons/fa6";

const Ielts_LessonDetails = () => {
  const paramm = useParams();
  var slug = paramm.id;

  const [getlist, SetList] = useState([]);
  const [getlistinner, SetListInner] = useState([]);
  const [getlistinner2, SetListInner2] = useState([]);
  const [getlistinner3, SetListInner3] = useState([]);
  const [getlistinner4, SetListInner4] = useState([]);
  const [getAudioLable, setAudioLable] = useState();
  const [loading, setloading] = useState(false);
  const [getcondation, SetCondation] = useState(false);
  const [getname, setName] = useState("");
  const { SetLogout } = useAuthContext();
  const [getIndex, setIndex] = useState(0);

  let navigate = useNavigate();

  const [toggleInnerMenu2, setToggleInnerMenu2] = useState(false);
  const [toggleInnerMenuindex, setToggleInnerMenuindex] = useState("");

  useEffect(() => {
    GetSkillsImprovement();
  }, []);

  const GetSkillsImprovement = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    const formdata = new FormData();
    formdata.append("id", slug);
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
            setName(res.data.data.name);
            SetList(res.data.data.main_category);
            SetListInner(
              res.data.data.main_category[getIndex]?.category[getIndex]?.lesson
            );
            SetListInner2(
              res.data.data.main_category[getIndex]?.category[getIndex]
                ?.watchvideo
            );
            SetListInner3(
              res.data.data.main_category[getIndex]?.category[getIndex]
                ?.takeexercise
            );
            SetListInner4(
              res.data.data.main_category[getIndex]?.category[getIndex]?.quiz
            );
            setBranchArray(res.data.data.main_category);

            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };

  const [task_arrayholder, setBranchArray] = useState([]);
  const searchFilter_branch = (text) => {
    const newData = task_arrayholder.filter(function (item) {
      const employee = item.name ? item.name.toUpperCase() : "".toUpperCase();

      const textData = text.toUpperCase();
      return employee.indexOf(textData) > -1;
    });
    SetList(newData);
  };

  useEffect(() => {
  }, [getIndex]);

  return (
    <>
      {loading === true ? (
        <>
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
        </>
      ) : (
        <>
          <div className="Lessondetail_main">
            <div className="Lessondetail_filter_main">
              <div className="lessondetail_head_main">
                <div>
                  <h4>{getname}</h4>
                </div>
                <FaAnglesDown className="FaAnglesDown_res" />
              </div>
              <div className="underline" style={{ width: "100%" }}></div>
              <div className="Lessondetail_filter_content_main">
                <div style={{ marginBottom: "1rem" }}>
                  <input
                    type="text"
                    placeholder="Search lessons"
                    className="search_input"
                    onChange={(e) => {
                      searchFilter_branch(e.target.value);
                    }}
                  />
                </div>

                {getlist && getlist.length >= 1 ? (
                  <>
                    {getlist.map((itm, index) => {
                      return (
                        <>
                          <div>
                            <div className="less_side_cat">
                              <h5 style={{ paddingBottom: "0.3rem" }}>
                                {itm.name}
                              </h5>
                              <div
                                onClick={() => {
                                  setToggleInnerMenu2(!toggleInnerMenu2);

                                  setToggleInnerMenuindex(index);
                                }}>
                                {toggleInnerMenu2 === true &&
                                index === toggleInnerMenuindex ? (
                                  <>
                                    <IoIosArrowUp
                                      size={20}
                                      className="resp-nav-icon"
                                    />
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    <IoIosArrowDown
                                      size={20}
                                      className="resp-nav-icon"
                                    />
                                  </>
                                )}
                              </div>
                            </div>

                            {toggleInnerMenu2 === true &&
                            index === toggleInnerMenuindex ? (
                              <>
                                {itm.category.length >= 1 ? (
                                  <>
                                    {itm.category.map((it, index) => {
                                      return (
                                        <div className="less_side_cat_inner">
                                          <h5
                                            onClick={() => {
                                              setIndex(index);
                                              SetListInner(it.lesson);
                                              SetListInner2(it.watchvideo);
                                              SetListInner3(it.takeexercise);
                                              SetListInner4(it.quiz);
                                              setAudioLable(it.audio_label);
                                            }}
                                            style={{
                                              paddingBottom: "0.3rem",
                                              cursor: "pointer",
                                            }}>
                                            {it.name}
                                          </h5>
                                        </div>
                                      );
                                    })}
                                  </>
                                ) : null}
                              </>
                            ) : null}
                          </div>
                        </>
                      );
                    })}
                  </>
                ) : null}
              </div>
            </div>
            <div
              className="Lessondetail_filter_data_main"
              style={{ width: "75%" }}>
              <Ielts_LessonDetailsContent
                getlist={getlist}
                getlistinner={getlistinner}
                getlistinner2={getlistinner2}
                getlistinner3={getlistinner3}
                getlistinner4={getlistinner4}
                getAudioLable={getAudioLable}
              />
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Ielts_LessonDetails;
