import React, { useEffect, useState } from "react";
import "./PteMockTest.css";
import { Link } from "react-router-dom";
import { ACCEPT_HEADER, view_mock_test } from "../../utils/Constant";
import axios from "axios";

const PteMockTest = () => {
  const [isloading, SetLoading] = useState(false);
  const [getViewPteData, setViewPteData] = useState("");

  const PteMockTestView = async () => {
    SetLoading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(view_mock_test, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          // SetLogout();
          // navigate("/");
          SetLoading(false);
        } else {
          // if (res.data.success == 1) {
          setViewPteData(res.data);
          SetLoading(false);
          // }
          // else{
          //   SetLoading(false)
          // }
        }
      })
      .catch((err) => {
        console.log("errrr-->", err);
        SetLoading(false);
      });
  };

  useEffect(() => {
    PteMockTestView();
  }, []);
  return (
    <div>
      <div className="MockTest_head_main" style={{ padding: "2rem 0" }}>
        <h2>Mock Test</h2>
      </div>
      <div className="MockTest_main">
        <div className="MockTest_content_block_main">
          <div className="MockTest_content_head_main">
            <div className="MockTest_content_title_main">
              <h5 style={{ fontWeight: "800", color: "var(--color-brand)" }}>
                Full Length Test
              </h5>
            </div>
            {/* <div className="MockTest_icon_head_main">
              <IoSpeedometer className="MockTest_icon_head_inner" />
              <FaHeadphones className="MockTest_icon_head_inner" />
              <FaBookReader className="MockTest_icon_head_inner" />
              <HiPencilAlt className="MockTest_icon_head_inner" />
              <RiSpeakFill className="MockTest_icon_head_inner" />
            </div> */}
            <div className="MockTest_content_status_main">
              <h5 style={{ fontWeight: "800", color: "var(--color-brand)" }}>
                Status
              </h5>
            </div>
          </div>
          <div className="MockTest_content_main">
            <div className="MockTest_content_inner">
              <div>
                {/* <h5 className="MockTest_content_title_main">MockTest 1</h5> */}
                <h5
                  className="MockTest_content_title_main"
                  style={{ width: "250px" }}>
                  {getViewPteData ? getViewPteData.mock_test_name : ""}
                </h5>
              </div>
              {/* <div className="MockTest_content_num_main">
                <div className="MockTest_content_num_inner"> </div>
                <div className="MockTest_content_num_inner"> </div>
                <div className="MockTest_content_num_inner"> </div>
                <div className="MockTest_content_num_inner"> </div>
                <div className="MockTest_content_num_inner"> </div>
              </div> */}

              {getViewPteData?.data == 0 ? (
                <Link
                  className="mock_test_btn_main"
                  to="/PteMockTest1"
                  onClick={() => {
                    localStorage.setItem("navbartrue", JSON.stringify(true));
                  }}>
                  <h5 className="btn start_btn start_btn_responsive">
                    Start Now
                  </h5>
                </Link>
              ) : getViewPteData?.data == 1 ? (
                <Link
                  to="/ptemocktest1main"
                  className="section_test_btn_main"
                  onClick={() => {
                    localStorage.setItem("navbartrue", JSON.stringify(true));
                  }}>
                  <h5 className="btn resume_btn start_btn_responsive">
                    Resume Test
                  </h5>
                </Link>
              ) : (
                <Link to="">
                  <h5 className="btn view_report_btn start_btn_responsive">
                    Completed
                  </h5>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PteMockTest;
