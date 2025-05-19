import { React, useState } from "react";
import "./SectionListening.css";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import {
  ACCEPT_HEADER,
  listening_section1_count,
  listening_section2_count,
  listening_section3_count,
  listening_section4_count,
} from "../../utils/Constant";
import axios from "axios";
import { useAuthContext } from "../../context/auth_context";

const SectionListening = ({ getListning }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const [getMarksModal1, setMarksModal1] = useState("");
  const [getMarksModal2, setMarksModal2] = useState("");
  const [getMarksModal3, setMarksModal3] = useState("");
  const [getMarksModal4, setMarksModal4] = useState("");
  const [getList, setList] = useState();
  const [getList1, setList1] = useState();
  const [getList2, setList2] = useState();
  const [getList3, setList3] = useState();
  const [loading, setloading] = useState(false);

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === "option1") {
      navigate("/ListenPart1");
    }
    if (selectedValue === "option2") {
      navigate("/ListenPart2");
    }
    if (selectedValue === "option3") {
      navigate("/ListenPart3");
    }
    if (selectedValue === "option4") {
      navigate("/ListenPart4");
    }
    if (selectedValue === "option5") {
      setMarksModal1(true);
      marks_sec1();
    }
    if (selectedValue === "option6") {
      setMarksModal2(true);
      marks_sec2();
    }
    if (selectedValue === "option7") {
      setMarksModal3(true);
      marks_sec3();
    }
    if (selectedValue === "option8") {
      setMarksModal4(true);
      marks_sec4();
    }
  };

  const customStyles = {
    content: {
      padding: "0px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "none",
      border: "none",
      borderRadius: "5px",
      width: "350px",
      // height: "350px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };

  const { SetLogout } = useAuthContext();
  const marks_sec1 = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(listening_section1_count, {
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
            setList(res.data);
            // SetListAnswer(res.data.answer);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };
  const marks_sec2 = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(listening_section2_count, {
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
            setList1(res.data);
            // SetListAnswer(res.data.answer);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };
  const marks_sec3 = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(listening_section3_count, {
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
            setList2(res.data);
            // SetListAnswer(res.data.answer);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };
  const marks_sec4 = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    axios
      .get(listening_section4_count, {
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
            setList3(res.data);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };

  return (
    <div className="SectionTest_content_main_top">
      <div className="SectionTest_content_main">
        <div className="SectionTest_content_head_main">
          <div>
            <h5 style={{ fontWeight: "800" }}>Section Test</h5>
          </div>
          <div style={{ width: "120px" }}>
            <h5 style={{ fontWeight: "800" }}>Status</h5>
          </div>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <div className="SectionTest_content_data_main">
            <div className="secTest_name_head">
              <h5>{getListning ? getListning.listening_section : ""}</h5>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              {/* <select
                id="dropdown"
                className="selectTest"
                value={selectedOption}
                onChange={handleSelect}>
                <option value="" disabled>
                  Select Report
                </option>
                <option value="option5">Section 1</option>
                <option value="option6">Section 2</option>
                <option value="option7">Section 3</option>
                <option value="option8">Section 4</option>
              </select> */}

              <select
                id="dropdown"
                className="selectTest"
                value={selectedOption}
                onChange={handleSelect}>
                <option value="" disabled>
                  Select Section
                </option>
                <option value="option1">Section 1</option>
                <option value="option2">Section 2</option>
                <option value="option3">Section 3</option>
                <option value="option4">Section 4</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <ReactModal
        isOpen={getMarksModal1}
        onRequestClose={() => {
          setMarksModal1(false);
        }}
        style={customStyles}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // gap: "1.5rem",
            width: "100%",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.5rem",
              color: "var(--color-brand)",
              background: "lightgray",
            }}>
            <h3 style={{ fontWeight: "700" }}>Report</h3>
          </div>
          <hr />
          <div style={{ padding: "1rem" }}>
            <h4 style={{ color: "darkgreen", fontWeight: "600" }}>
              <span>Total Que: {getList?.total_que} </span>
            </h4>
            <h4 style={{ color: "green", fontWeight: "600" }}>
              <span>Correct answer: {getList?.correct}</span>
            </h4>
            <h4 style={{ color: "red", fontWeight: "600" }}>
              <span>Wrong answer: {getList?.in_correct}</span>
            </h4>
            <h4 style={{ color: "var(--color-brand)", fontWeight: "600" }}>
              <span>Marks: {getList?.correct}</span>
            </h4>
          </div>
          <div style={{ padding: "1rem", paddingTop: "0px" }}>
            <button
              className="btn"
              style={{ width: "100%", margin: "0px" }}
              onClick={() => {
                setMarksModal1(false);
              }}>
              OK
            </button>
          </div>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={getMarksModal2}
        onRequestClose={() => {
          setMarksModal2(false);
        }}
        style={customStyles}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // gap: "1.5rem",
            width: "100%",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.5rem",
              color: "var(--color-brand)",
              background: "lightgray",
            }}>
            <h3 style={{ fontWeight: "700" }}>Report</h3>
          </div>
          <hr />
          <div style={{ padding: "1rem" }}>
            <h4 style={{ color: "darkgreen", fontWeight: "600" }}>
              <span>Total Que: {getList1?.total_que} </span>
            </h4>
            <h4 style={{ color: "green", fontWeight: "600" }}>
              <span>Correct answer: {getList1?.correct}</span>
            </h4>
            <h4 style={{ color: "red", fontWeight: "600" }}>
              <span>Wrong answer: {getList1?.in_correct}</span>
            </h4>
            <h4 style={{ color: "var(--color-brand)", fontWeight: "600" }}>
              <span>Marks: {getList1?.correct}</span>
            </h4>
          </div>
          <div style={{ padding: "1rem", paddingTop: "0px" }}>
            <button
              className="btn"
              style={{ width: "100%", margin: "0px" }}
              onClick={() => {
                setMarksModal2(false);
              }}>
              OK
            </button>
          </div>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={getMarksModal3}
        onRequestClose={() => {
          setMarksModal3(false);
        }}
        style={customStyles}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // gap: "1.5rem",
            width: "100%",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.5rem",
              color: "var(--color-brand)",
              background: "lightgray",
            }}>
            <h3 style={{ fontWeight: "700" }}>Report</h3>
          </div>
          <hr />
          <div style={{ padding: "1rem" }}>
            <h4 style={{ color: "darkgreen", fontWeight: "600" }}>
              <span>Total Que: {getList2?.total_que} </span>
            </h4>
            <h4 style={{ color: "green", fontWeight: "600" }}>
              <span>Correct answer: {getList2?.correct}</span>
            </h4>
            <h4 style={{ color: "red", fontWeight: "600" }}>
              <span>Wrong answer: {getList2?.in_correct}</span>
            </h4>
            <h4 style={{ color: "var(--color-brand)", fontWeight: "600" }}>
              <span>Marks: {getList2?.correct}</span>
            </h4>
          </div>
          <div style={{ padding: "1rem", paddingTop: "0px" }}>
            <button
              className="btn"
              style={{ width: "100%", margin: "0px" }}
              onClick={() => {
                setMarksModal3(false);
              }}>
              OK
            </button>
          </div>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={getMarksModal4}
        onRequestClose={() => {
          setMarksModal4(false);
        }}
        style={customStyles}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // gap: "1.5rem",
            width: "100%",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0.5rem",
              color: "var(--color-brand)",
              background: "lightgray",
            }}>
            <h3 style={{ fontWeight: "700" }}>Report</h3>
          </div>
          <hr />
          <div style={{ padding: "1rem" }}>
            <h4 style={{ color: "darkgreen", fontWeight: "600" }}>
              <span>Total Que: {getList3?.total_que} </span>
            </h4>
            <h4 style={{ color: "green", fontWeight: "600" }}>
              <span>Correct answer: {getList3?.correct}</span>
            </h4>
            <h4 style={{ color: "red", fontWeight: "600" }}>
              <span>Wrong answer: {getList3?.in_correct}</span>
            </h4>
            <h4 style={{ color: "var(--color-brand)", fontWeight: "600" }}>
              <span>Marks: {getList3?.correct}</span>
            </h4>
          </div>
          <div style={{ padding: "1rem", paddingTop: "0px" }}>
            <button
              className="btn"
              style={{ width: "100%", margin: "0px" }}
              onClick={() => {
                setMarksModal4(false);
              }}>
              OK
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default SectionListening;
