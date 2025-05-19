import React, { useEffect, useState } from "react";
import "./MockTest.css";
import { IoSpeedometer } from "react-icons/io5";
import { FaHeadphones, FaBookReader } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ACCEPT_HEADER,
  view_mocktest_data,
  view_mocktest_writing,
} from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { Helmet } from "react-helmet";

const MockTest = () => {
  const [loading, setLoading] = useState(false);
  const [getmockdata, setMockData] = useState("");

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  useEffect(() => {
    ViewMocktestWriting();
    ViewMocktestData();
  }, []);

  const ViewMocktestWriting = async () => {
    setLoading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    axios
      .post(view_mocktest_writing, formdata, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          setLoading(false);
        } else {
          if (res.data.success === 1) {
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setLoading(false);
      });
  };

  const ViewMocktestData = async () => {
    const Token = await localStorage.getItem("is_token");
    axios
      .get(view_mocktest_data, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          setLoading(false);
        } else {
          if (res.data.success === 1) {
            setMockData(res.data);
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setLoading(false);
      });
  };

  return (
    <>
      <Helmet>

        <title>Just Abroad | Mock Test</title>

      </Helmet>
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
            <div className="MockTest_icon_head_main">
              <IoSpeedometer className="MockTest_icon_head_inner" />
              {/* <FaHeadphones className="MockTest_icon_head_inner" />
              <FaBookReader className="MockTest_icon_head_inner" />
              <HiPencilAlt className="MockTest_icon_head_inner" />
              <RiSpeakFill className="MockTest_icon_head_inner" /> */}
            </div>
            <div className="MockTest_content_status_main">
              <h5 style={{ fontWeight: "800", color: "var(--color-brand)" }}>
                Status
              </h5>
            </div>
          </div>
          <div className="MockTest_content_main">
            <div className="MockTest_content_inner">
              <div>
                <h5 className="MockTest_content_title_main">
                  {getmockdata ? getmockdata.mock_test_name : ""}
                </h5>
              </div>
              <div className="MockTest_content_num_main">
                <div className="MockTest_content_num_inner">
                  {getmockdata ? getmockdata.total_que : 0}{" "}
                </div>
                {/* <div className="MockTest_content_num_inner"> </div>
                <div className="MockTest_content_num_inner"> </div>
                <div className="MockTest_content_num_inner"> </div>
                <div className="MockTest_content_num_inner"> </div> */}
              </div>

              {/* <Link className="mock_test_btn_main" to="/MockDemoTest">
                <h5 className="btn start_btn start_btn_responsive">
                  Start Now
                </h5>
              </Link> */}
              {getmockdata && getmockdata.data === 0 ? (
                <Link className="mock_test_btn_main" to="/MockDemoTest">
                  <h5 className="btn start_btn start_btn_responsive">
                    Start Now
                  </h5>
                </Link>
              ) : getmockdata && getmockdata.data === 1 ? (
                <Link to="/MockDemoTest" className="mock_test_btn_main">
                  <h5 className="btn resume_btn start_btn_responsive">
                    Resume Test
                  </h5>
                </Link>
              ) : (
                <Link to="/MockWritingViewReport">
                  <h5 className="btn view_report_btn start_btn_responsive">
                    View Report
                  </h5>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockTest;
// {
//   <hr />
//             <div className="MockTest_content_inner">
//               <div>
//                 <h5 className="MockTest_content_title_main">Test 1</h5>
//               </div>
//               <div className="MockTest_content_num_main">
//                 <div className="MockTest_content_num_inner">1</div>
//                 <div className="MockTest_content_num_inner">1</div>
//                 <div className="MockTest_content_num_inner">1</div>
//                 <div className="MockTest_content_num_inner">111</div>
//                 <div className="MockTest_content_num_inner">1</div>
//               </div>
//               <div className="mock_test_btn_main">
//                 <h5 className="btn start_btn start_btn_responsive">
//                   Start Now
//                 </h5>
//               </div>
//             </div>{" "}
//             <hr />
//             <div className="MockTest_content_inner">
//               <div>
//                 <h5 className="MockTest_content_title_main">Test 1</h5>
//               </div>
//               <div className="MockTest_content_num_main">
//                 <div className="MockTest_content_num_inner">1</div>
//                 <div className="MockTest_content_num_inner">1</div>
//                 <div className="MockTest_content_num_inner">1</div>
//                 <div className="MockTest_content_num_inner">111</div>
//                 <div className="MockTest_content_num_inner">1</div>
//               </div>
//               <div className="mock_test_btn_main">
//                 <h5 className="btn resume_btn start_btn_responsive">
//                   Resume Test
//                 </h5>
//               </div>
//             </div>
// }
