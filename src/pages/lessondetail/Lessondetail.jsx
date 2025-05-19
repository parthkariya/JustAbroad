import React, { useEffect, useState } from "react";
import "./Lessondetail.css";
import { LessonDetailsContent } from "../../container";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ACCEPT_HEADER, get_skills_improvement } from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaAnglesDown } from "react-icons/fa6";
import {
  LessonDetailLesson,
  LessonDetailsVideos,
  TakeExercise,
  TakeQuizeLesson,
} from "../../components";

const Lessondetail = () => {
  const paramm = useParams();
  var slug = paramm.id;

  const [getlist, SetList] = useState([]);
  const [getlistinner, SetListInner] = useState([]);
  const [getlistinner2, SetListInner2] = useState([]);
  const [getlistinner3, SetListInner3] = useState([]);
  const [getlistinner4, SetListInner4] = useState([]);
  const [loading, setloading] = useState(false);
  const [getcondation, SetCondation] = useState(false);
  const [getname, setName] = useState("");
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  //

  const [getTab, setTab] = useState(1);
  const [getDropdown, setDropdown] = useState(false);
  const [getExe, setExe] = useState();

  const [toggleInnerMenu2, setToggleInnerMenu2] = useState(false);

  useEffect(() => {
    GetSkillsImprovement();
    SetCondation(false);
  }, []);

  const GetSkillsImprovement = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("id", slug);
    formdata.append("course_id", Courseid);
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
             setName(res.data.data.name);
            SetList(res.data.data.main_cat);
            SetListInner(
              res.data.data.main_cat[getIndex]?.cat[getIndex]?.lesson
            );
            SetListInner2(
              res.data.data.main_cat[getIndex]?.cat[getIndex]?.watchvideo
            );
            SetListInner3(
              res.data.data.main_cat[getIndex]?.cat[getIndex]?.takeexercise
            );
            SetListInner4(
              res.data.data.main_cat[getIndex]?.cat[getIndex]?.quiz
            );
            setBranchArray(res.data.data.main_cat);
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

  const [getIndex, setIndex] = useState(0);

  useEffect(() => {
    console.log("aaa", getIndex);
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
                  <h4>{getname} </h4>
                </div>
                {/* <FaAnglesDown className="FaAnglesDown_res" /> */}
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

                {getlist && getlist.length > 0 ? (
                  <>
                    {getlist.map((itm, index) => {
                      return (
                        <>
                          <div>
                            <div
                              className="less_side_cat"
                              onClick={() => {
                                setToggleInnerMenu2(!toggleInnerMenu2);
                              }}>
                              <h5 style={{ paddingBottom: "0.3rem" }}>
                                {itm.name}
                              </h5>
                              <div
                                onClick={() => {
                                  setToggleInnerMenu2(!toggleInnerMenu2);
                                }}>
                                {toggleInnerMenu2 === true ? (
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

                            {toggleInnerMenu2 === true ? (
                              <>
                                {itm.cat.length >= 1 ? (
                                  <>
                                    {itm.cat.map((it, index) => {
                                      return (
                                        <div className="less_side_cat_inner">
                                          {/* {getIndex == 0 ? SetListInner11(it.lesson[0]); SetListInner22(it.watchvideo[0]);SetListInner33(it.takeexercise[0]);SetListInner44(it.quiz[0]); : null} */}
                                          {/* SetListInner */}
                                          <h5
                                            onClick={() => {
                                              setIndex(index);
                                              SetListInner(it.lesson);
                                              SetListInner2(it.watchvideo);
                                              SetListInner3(it.takeexercise);
                                              SetListInner4(it.quiz);
                                              SetCondation(true);
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
              {/* {getcondation === true ? (
             
                <> */}
              <div className="LessonDetailsContent_main">
                <div className="LessonDetailsContent_tab_top_main">
                  <div className="LessonDetailsContent_tab_main">
                    {/* {getlistinner.length > 0 ? ( */}
                    <div
                      className="btn btn_tab_lessonpage"
                      style={{
                        background:
                          getTab === 1
                            ? "var(--color-brand)"
                            : "var(--color-white)",
                        color:
                          getTab === 1
                            ? "var(--color-white)"
                            : "var(--color-brand)",
                      }}
                      onClick={() => {
                        setTab(1);
                        setDropdown(false);
                        setExe(0);
                      }}>
                      Lesson
                    </div>
                    {/* ) : null} */}

                    {getlistinner2.length > 0 ? (
                      <div
                        className="btn btn_tab_lessonpage"
                        style={{
                          background:
                            getTab === 2
                              ? "var(--color-brand)"
                              : "var(--color-white)",
                          color:
                            getTab === 2
                              ? "var(--color-white)"
                              : "var(--color-brand)",
                        }}
                        onClick={() => {
                          setTab(2);
                          setDropdown(false);
                          setExe(0);
                        }}>
                        Watch Videos
                      </div>
                    ) : null}
                    {getlistinner3.length > 0 ? (
                      <div
                        className="btn btn_tab_lessonpage"
                        style={{
                          background:
                            getTab === 3
                              ? "var(--color-brand)"
                              : "var(--color-white)",
                          color:
                            getTab === 3
                              ? "var(--color-white)"
                              : "var(--color-brand)",
                        }}
                        onClick={() => {
                          setTab(3);
                          setDropdown(true);
                          setExe(1);
                        }}>
                        Take Exercises
                      </div>
                    ) : null}
                    {getlistinner4.length > 0 ? (
                      <div
                        className="btn btn_tab_lessonpage"
                        style={{
                          background:
                            getTab === 4
                              ? "var(--color-brand)"
                              : "var(--color-white)",
                          color:
                            getTab === 4
                              ? "var(--color-white)"
                              : "var(--color-brand)",
                        }}
                        onClick={() => {
                          setTab(4);
                          setDropdown(false);
                          setExe();
                        }}>
                        Take Quizes
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="underline" style={{ width: "100%" }}></div>
                {/* <LessonDetailLesson getlistinner={getlistinner} /> */}

                {getTab === 1 ? (
                  <LessonDetailLesson getlistinner={getlistinner} />
                ) : null}
                {getTab === 2 ? (
                  <LessonDetailsVideos getlistinner2={getlistinner2} />
                ) : null}
                {getTab === 4 ? (
                  <TakeQuizeLesson getlistinner4={getlistinner4} />
                ) : null}
                {getExe === 1 ? (
                  <TakeExercise getlistinner3={getlistinner3} />
                ) : null}
              </div>
              {/* </>
                
              ) : null}  */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Lessondetail;
