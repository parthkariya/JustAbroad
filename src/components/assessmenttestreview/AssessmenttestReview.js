import React, { useEffect, useState } from "react";
import "./AssessmenttestReview.css";
import { Helmet } from "react-helmet";

const AssessmenttestReview = ({ setTest, getlisttestqes }) => {
  const [getdata, SetData] = useState([]);
  const [getindex, SetIndex] = useState(0);
  const [arraylen, setArrayLan] = useState(0);

  useEffect(() => {
    setArrayLan(getlisttestqes.length);
    SetData([getlisttestqes[getindex]]);
  }, [getlisttestqes, getindex]);

  return (
    <>
      <Helmet>

        <title>Just Abroad | Review Test</title>

      </Helmet>
      <div className="Assessment_main">
        <div className="AssessmentTest_main">
          {getdata.length > 0 ? (
            <>
              {getdata.map((item, index) => {
                return (
                  <>
                    {item?.mark_test === null ||
                      item?.mark_test === "null" ? null : (
                      <div key={index}>
                        <div>
                          {item?.id}&nbsp;
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item?.question,
                            }}></span>
                        </div>
                        <>
                          <div className="">
                            <label className="radio_styling">
                              <input
                                type="radio"
                                name="react-tips"
                                value={item?.option_a}
                                className=""
                                checked={item.mark_test === "1"}
                                disabled={true}
                              />
                              {item?.option_a}
                            </label>

                            <label className="radio_styling">
                              <input
                                type="radio"
                                name="react-tips"
                                value={item?.option_b}
                                className=""
                                checked={item.mark_test === "2"}
                                disabled={true}
                              />
                              {item?.option_b}
                            </label>
                            <label className="radio_styling">
                              <input
                                type="radio"
                                name="react-tips"
                                value={item?.option_c}
                                className=""
                                checked={item.mark_test === "3"}
                                disabled={true}
                              />
                              {item?.option_c}
                            </label>
                            <label className="radio_styling">
                              <input
                                type="radio"
                                name="react-tips"
                                value={item?.option_d}
                                className=""
                                checked={item.mark_test === "4"}
                                disabled={true}
                              />
                              {item?.option_d}
                            </label>
                          </div>
                        </>
                        {item.mark_test !== null && (
                          <p>
                            Your answer is{" "}
                            <span
                              style={{
                                color:
                                  Number(item.mark_test) === item.correct_answer
                                    ? "green"
                                    : "red",
                                fontWeight: "bold",
                              }}>
                              {Number(item.mark_test) === item.correct_answer
                                ? "correct"
                                : "incorrect"}
                            </span>
                            .
                            {Number(item.mark_test) !== item.correct_answer && (
                              <span>
                                {" "}
                                The correct answer is {item?.correct_answer}.
                              </span>
                            )}
                          </p>
                        )}

                        <div className="TakeQuizeLesson_btns_main">
                          {getindex === index ? null : (
                            <button
                              className="btn TakeQuizeLesson_btns_inner"
                              onClick={() => SetIndex(Number(getindex) - 1)}>
                              Previous
                            </button>
                          )}
                          {getindex + 1 === arraylen ? (
                            <button
                              className="btn TakeQuizeLesson_btns_inner review_btn"
                              onClick={() => {
                                setTest(4);
                              }}>
                              End Review
                            </button>
                          ) : (
                            <button
                              className="btn TakeQuizeLesson_btns_inner"
                              onClick={() => {
                                SetIndex(Number(getindex) + 1);
                              }}>
                              Next
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                );
              })}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AssessmenttestReview;
