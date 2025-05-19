import React, { useEffect, useState } from "react";
import "./AssessmentTest.css";
import { ACCEPT_HEADER, basic_question } from "../../utils/Constant";
import axios from "axios";
import { useAuthContext } from "../../context/auth_context";
import { useNavigate } from "react-router-dom";

const AssessmentTest = ({ setTest, getlisttestqes }) => {
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  const [getdata, SetData] = useState([]);
  const [getindex, SetIndex] = useState(0);
  const [arraylen, setArrayLan] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const [qesindex, SetQesIndex] = useState("");
  const handleAnswerClick = (id, optionIndex, index) => {
    setSelectedAnswer(optionIndex);

    SkillQuiz(id, optionIndex);

    if (optionIndex === getdata[currentQuestion].correct_answer) {
      setIsAnswerCorrect(true);
      SetQesIndex(index);
    } else {
      setIsAnswerCorrect(false);
      SetQesIndex(index);
    }
  };

  const SkillQuiz = async (id, answer) => {
    const Token = await localStorage.getItem("is_token");
    const formdata = new FormData();
    formdata.append("question_id", id);
    formdata.append("answer", answer);
    axios
      .post(basic_question, formdata, {
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
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
      });
  };

  useEffect(() => {
    setArrayLan(getlisttestqes.length);
    SetData([getlisttestqes[getindex]]);
  }, [getlisttestqes, getindex]);
  return (
    <div className="Assessment_main">
      <div className="AssessmentTest_main">
        {getdata.length > 0 ? (
          <>
            {getdata.map((item, index) => {
              return (
                <>
                  {item?.mark_test === null || item?.mark_test === "null" ? (
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
                              checked={selectedAnswer === 1}
                              disabled={selectedAnswer !== null}
                              onChange={() =>
                                handleAnswerClick(item.id, 1, index)
                              }
                            />
                            {item?.option_a}
                          </label>

                          <label className="radio_styling">
                            <input
                              type="radio"
                              name="react-tips"
                              value={item?.option_b}
                              className=""
                              checked={selectedAnswer === 2}
                              disabled={selectedAnswer !== null}
                              onChange={() =>
                                handleAnswerClick(item.id, 2, index)
                              }
                            />
                            {item?.option_b}
                          </label>
                          <label className="radio_styling">
                            <input
                              type="radio"
                              name="react-tips"
                              value={item?.option_c}
                              className=""
                              checked={selectedAnswer === 3}
                              disabled={selectedAnswer !== null}
                              onChange={() =>
                                handleAnswerClick(item.id, 3, index)
                              }
                            />
                            {item?.option_c}
                          </label>
                          <label className="radio_styling">
                            <input
                              type="radio"
                              name="react-tips"
                              value={item?.option_d}
                              className=""
                              checked={selectedAnswer === 4}
                              disabled={selectedAnswer !== null}
                              onChange={() =>
                                handleAnswerClick(item.id, 4, index)
                              }
                            />
                            {item?.option_d}
                          </label>
                        </div>
                      </>
                      {selectedAnswer !== null && (
                        <p>
                          Your answer is{" "}
                          <span
                            style={{
                              color: isAnswerCorrect ? "green" : "red",
                              fontWeight: "bold",
                            }}>
                            {" "}
                            {isAnswerCorrect ? "correct" : "incorrect"}{" "}
                          </span>
                          .
                          {!isAnswerCorrect && (
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
                            onClick={() => setTest(4)}>
                            End Test
                          </button>
                        ) : (
                          <button
                            className="btn TakeQuizeLesson_btns_inner"
                            onClick={() => {
                              SetIndex(Number(getindex) + 1);
                              setSelectedAnswer(null);
                              setIsAnswerCorrect(null);
                            }}>
                            Next
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
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
                                Number(item.mark_test) == item.correct_answer
                                  ? "green"
                                  : "red",
                              fontWeight: "bold",
                            }}>
                            {Number(item.mark_test) == item.correct_answer
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
                            onClick={() => setTest(4)}>
                            End Test
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
  );
};

export default AssessmentTest;
