import React, { useState } from "react";
import "./Recommended_IELTS_Plans_Details.css";
import { Recommended_IELTS_Test_Content } from "../../components";

const Recommended_IELTS_Plans_Details = () => {
  const [tab, setTab] = useState(0);
  const Data = [
    {
      id: 1,
      name: "Test 1",
    },
    {
      id: 2,
      name: "Test 2",
    },
    {
      id: 3,
      name: "Test 3",
    },
  ];
  return (
    <div className="Recommended_IELTS_Plans_main">
      <div className="Recommended_IELTS_Plans_Details_main">
        {Data.map((item, index) => {
          return (
            <div
              style={{
                background:
                  tab === index ? "var(--color-brand)" : "var(--color-white)",
                color:
                  tab === index ? "var(--color-white)" : "var(--color-brand)",
                padding: "0.3rem 2rem",
                fontWeight: "700",
                border: "2px solid var(--color-brand)",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => {
                setTab(index);
              }}>
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="underline" style={{ width: "100%" }}></div>
      <div>
        {tab === 0 ? (
          <>
            <Recommended_IELTS_Test_Content />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Recommended_IELTS_Plans_Details;
