import React from "react";

const LessonDetailLesson = ({ getlistinner }) => {
  return (
    <>
    {getlistinner.length > 0 ? 
    <div
      style={{
        border: "2px solid",
        padding: "1rem",
        borderRadius: "8px",
      }}>
      {getlistinner &&
        getlistinner.map((item, index) => {
          return (
            <>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.name,
                }}></p>
              <p
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}></p>
            </>
          );
        })}
    </div>
    :null}
    </>
  );
};

export default LessonDetailLesson;
