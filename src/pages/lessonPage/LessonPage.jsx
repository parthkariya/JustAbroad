/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import PathHero from "../../components/pathHero/PathHero";
import "./LessonPage.css";
import { GeneralEng_Lesson, Ielts_Lesson } from "../../components";
import { Helmet } from "react-helmet";

const LessonPage = () => {
  const [getTab, setTab] = useState(1);
  const [getCourseId, setCourseId] = useState("");
  // const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;

  useEffect(() => {
    const Courseid = localStorage.getItem("courseid");
    setCourseId(Courseid);
    // if (reloadCount < 2) {
    //   sessionStorage.setItem("reloadCount", String(reloadCount + 1));
    //   window.location.reload();
    // } else {
    //   sessionStorage.removeItem("reloadCount");
    // }
  }, []);

  return (
    <>
      <Helmet>

        <title>Just Abroad | Lesson</title>

      </Helmet>
      <div style={{ background: "lightgray", minHeight: "100vh" }}>
        <PathHero
          title="Lessons"
          setTabType={
            getTab === 1
              ? "/ General English Skills Improvement"
              : "/ IELTS Skills Improvements"
          }
        />
        <div className="lessonpage_tab_main">
          <div className="lessonpage_tab_btn_main">
            <div
              className="btn btn_lessons"
              style={{
                background:
                  getTab === 1 ? "var(--color-brand)" : "var(--color-white)",
                color: getTab === 1 ? "var(--color-white)" : "var(--color-brand)",
                padding: "0.5rem",
              }}
              onClick={() => {
                setTab(1);
              }}>
              General English Skills Improvement
            </div>
            {getCourseId == 2 ? (
              <></>
            ) : (
              <div
                style={{
                  background:
                    getTab === 2 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 2 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                className="btn btn_lessons"
                onClick={() => {
                  setTab(2);
                }}>
                IELTS Skills Improvements
              </div>
            )}
          </div>
          <div className="underline" style={{ width: "100%" }}></div>
        </div>
        {getTab === 1 ? <GeneralEng_Lesson /> : null}
        {getTab === 2 ? <Ielts_Lesson /> : null}
      </div>
    </>
  );
};

export default LessonPage;
