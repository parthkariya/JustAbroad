import React, { useEffect, useState } from "react";
import "./TakeExercise.css";
import DOMPurify from "dompurify";

const TakeExercise = ({ getlistinner3 }) => {
  const [getShowMore, setShowMore] = useState(false);
  const [getIndex, setIndex] = useState(0);
  const [audioshowstart, setaudioshowstart] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setaudioshowstart(true);
    }, 5000);
  }, []);

  return (
    <>
      <div className="TakeExercise_main">
        {getlistinner3 &&
          getlistinner3.map((item, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}>
                <div className="">
                  <h6
                    style={{ fontSize: "16px", fontWeight: "600" }}
                    dangerouslySetInnerHTML={{
                      __html: item.label,
                    }}></h6>
                </div>
                {getShowMore === false && index === getIndex ? (
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.question),
                      }}></p>
                  </div>
                ) : (
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(item.answer),
                      }}></p>
                  </div>
                )}

                <div>
                  <button
                    className="btn"
                    onClick={() => {
                      setShowMore(!getShowMore);
                      setIndex(index);
                    }}>
                    {getShowMore === false && index === getIndex ? (
                      <>show answer</>
                    ) : (
                      <>hide answer</>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TakeExercise;
