import React, { useEffect, useState } from "react";
import "./GuideIelts.css";
import { GuidetoieltsDetails, GuidetoieltsDetailsVideo } from "../../container";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ACCEPT_HEADER, get_guide } from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Helmet } from "react-helmet";
const GuideIelts = () => {
  const paramm = useParams();
  var slug = paramm.id;

  useEffect(() => {
    GetGuide();
  }, []);

  const [getlistguide, SetListGuide] = useState([]);
  const [loading, setloading] = useState(false);
  const [toggleInnerMenu2, setToggleInnerMenu2] = useState(true);
  const [getname, setName] = useState("");
  const [radiolabel, SetRadioLabel] = useState("");
  const [getlistinner2, SetListInner2] = useState([]);
  const [getlistinner3, SetListInner3] = useState([]);
  const [getlistinner4, SetListInner4] = useState([]);
  const [getcondation, SetCondation] = useState(false);
  const [getindex, SetIndex] = useState(0);

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const GetGuide = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(get_guide, formdata, {
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
            setName(res.data.data[slug].name);
            SetListGuide(res.data.data[slug].main_category);
            setBranchArray(res.data.data[slug].main_category);

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
    SetListGuide(newData);
  };


  return (
    <>
      <Helmet>

        <title>Just Abroad | Guide</title>

      </Helmet>
      <div className="Lessondetail_main">
        <div className="Lessondetail_filter_main">
          <div className="lessondetail_head_main">
            <div>
              <h4>{getname}</h4>
            </div>
            {/* <div> */}

            {/* <FaAnglesDown className="FaAnglesDown_res" /> */}
            {/* <FaAngleDoubleUp className="FaAnglesDown_res" /> */}
            {/* </div> */}
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

            {/* {getlistguide && getlistguide.length >= 1 ? <>
            {getlistguide.map((item, index) => {
              return ( */}
            <>
              {getlistguide && getlistguide.length >= 1
                ? getlistguide.map((itm, index) => {
                  return (
                    <div>
                      <div className="less_side_cat">
                        <h5
                          style={{ paddingBottom: "0.3rem" }}
                          onClick={() => {
                            setToggleInnerMenu2(!toggleInnerMenu2);
                            SetIndex(index);
                          }}>
                          {itm.name}
                        </h5>
                        <div
                          onClick={() => {
                            setToggleInnerMenu2(!toggleInnerMenu2);
                            SetIndex(index);
                          }}>
                          {toggleInnerMenu2 === true && getindex === index ? (
                            <>
                              <IoIosArrowUp
                                size={20}
                                className="resp-nav-icon"
                              />
                            </>
                          ) : (
                            <>
                              <IoIosArrowDown
                                size={20}
                                className="resp-nav-icon"
                              />
                            </>
                          )}
                        </div>
                      </div>

                      {toggleInnerMenu2 === true && index === getindex ? (
                        <>
                          {itm.category.length > 0 ? (
                            <>
                              {itm.category.map((it, index) => {
                                return (
                                  <div className="less_side_cat_inner">
                                    <h5
                                      onClick={() => {
                                        SetCondation(true);
                                        SetRadioLabel(it.radio_label);
                                        SetListInner2(it.label);
                                      }}
                                      style={{
                                        paddingBottom: "0.3rem",
                                        cursor: "pointer",
                                      }}

                                    //  onClick={()=>{SetListInner(it.lesson); SetListInner2(it.watchvideo);SetListInner3(it.takeexercise);SetListInner4(it.quiz); SetCondation(true)}} style={{paddingBottom:"0.3rem",cursor:"pointer"}}
                                    >
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
                  );
                })
                : null}
            </>
            {/* )
            })}
          </> : null} */}
          </div>
        </div>
        <div className="Lessondetail_filter_data_main" style={{ width: "75%" }}>
          {/* {getcondation === true ?  
       <> */}
          {radiolabel == 1 || radiolabel === "1" ? (
            <>
              <GuidetoieltsDetailsVideo getlistinner2={getlistinner2} />
            </>
          ) : (
            <>
              <GuidetoieltsDetails getlistinner2={getlistinner2} />
            </>
          )}
          {/* </>
     :null}  */}
        </div>
      </div>
    </>
  );
};

export default GuideIelts;
