import React, { useEffect, useState } from 'react'
import "./SectionalReport.css"
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { ACCEPT_HEADER, listening_section1_count, listening_section2_count, listening_section3_count, listening_section4_count, reading_section1_count, reading_section2_count, reading_section3_count, speaking_section1_count, writing_section1_count, writing_section2_count } from '../../utils/Constant';
import axios from 'axios';



const SectionalReport = () => {

    const [getarrow, setArrow] = useState(false);
    const [getarrow2, setArrow2] = useState(false);
    const [getarrow3, setArrow3] = useState(false);
    const [getarrow4, setArrow4] = useState(false);
    const [getList, setList] = useState();
    const [getList1, setList1] = useState();
    const [getList2, setList2] = useState();
    const [getList3, setList3] = useState();
    const [loading, setloading] = useState(false);

    const [getRead1, setRead1] = useState();
    const [getRead2, setRead2] = useState();
    const [getRead3, setRead3] = useState();

    const [getWriting1, setWriting1] = useState();
    const [getWriting2, setWriting2] = useState();

    const [getSpeaking1, setSpeaking1] = useState();

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

      const marks_Read1 = async () => {
        setloading(true);
        const Token = await localStorage.getItem("is_token");
        const Courseid = await localStorage.getItem("courseid");
        axios
          .get(reading_section1_count, {
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
                setRead1(res.data);
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
      const marks_Read2 = async () => {
        setloading(true);
        const Token = await localStorage.getItem("is_token");
        const Courseid = await localStorage.getItem("courseid");
        axios
          .get(reading_section2_count, {
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
                setRead2(res.data);
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
      const marks_Read3 = async () => {
        setloading(true);
        const Token = await localStorage.getItem("is_token");
        const Courseid = await localStorage.getItem("courseid");
        axios
          .get(reading_section3_count, {
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
                setRead3(res.data);
                setloading(false);
              }
            }
          })
          .catch((err) => {
            console.log("--->err", err);
            setloading(false);
          });
      };

      const marks_Writing1 = async () => {
        setloading(true);
        const Token = await localStorage.getItem("is_token");
        const Courseid = await localStorage.getItem("courseid");
        axios
          .get(writing_section1_count, {
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
                setWriting1(res.data);
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
      const marks_Writting2 = async () => {
        setloading(true);
        const Token = await localStorage.getItem("is_token");
        const Courseid = await localStorage.getItem("courseid");
        axios
          .get(writing_section2_count, {
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
                setWriting2(res.data);
                setloading(false);
              }
            }
          })
          .catch((err) => {
            console.log("--->err", err);
            setloading(false);
          });
      };

      const marks_Speaking = async () => {
        setloading(true);
        const Token = await localStorage.getItem("is_token");
        const Courseid = await localStorage.getItem("courseid");
        axios
          .get(speaking_section1_count, {
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
                setSpeaking1(res.data);
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

      useEffect(()=>{
        marks_sec1();
        marks_sec2();
        marks_sec3();
        marks_sec4();
        marks_Read1();
        marks_Read2();
        marks_Read3();
        marks_Writing1();
        marks_Writting2();
        marks_Speaking();
      },[])

    return (
        <>
        {loading === true ? <>
            <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="loader"></div>
        </div>
        </> : <>
        <div className='sec_report_main'>
            <div className="Sec_Test_head_main" style={{ padding: "2rem 0" }}>
                <h2>Sectional Test Report</h2>
            </div>
            <div className='sec_report_con'>
                <div className='sec_report_con_part'>
                <div className='sec_report_con_part_inner'>
                    <p className='sec_report_con_part_text'>Listening Report</p>
                    <Link to='' onClick={()=>{setArrow(!getarrow)}}>
                    {getarrow === true ? <> <RiArrowUpSLine size={25} color='var(--color-brand)' className='sec_report_icon' />
                    </> : <>
                        <RiArrowDownSLine size={25} color='var(--color-brand)' className='sec_report_icon' />
                    </>}

                    
                    </Link>
                    </div>

                    {getarrow === true ? <div className='sec_prog_report_main_main'>
                    <div className='sec_prog_report_mainn'>
                        <div className='sec_report_con_part_inner_part_head'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Section Name</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Total Question</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Correct</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Wrong</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Marks</p>
                            </div>
                        </div>

                        <div className='sec_report_con_part_inner_part_inner_data'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>Section 1</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList?.total_que}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList?.correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList?.in_correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList?.correct}</p>
                            </div>
                        </div>

                        <div className='sec_report_con_part_inner_part_inner_data'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>Section 2</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList1?.total_que}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList1?.correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList1?.in_correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList1?.correct}</p>
                            </div>
                        </div>

                        <div className='sec_report_con_part_inner_part_inner_data'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>Section 3</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList2?.total_que}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList2?.correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList2?.in_correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList2?.correct}</p>
                            </div>
                        </div>

                        <div className='sec_report_con_part_inner_part_inner_data'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>Section 4</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList3?.total_que}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList3?.correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList3?.in_correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getList3?.correct}</p>
                            </div>
                        </div>
                    </div> </div> : <></>}
                    
                </div>

                <div className='sec_report_con_part'>
                <div className='sec_report_con_part_inner'>
                    <p className='sec_report_con_part_text'>Reading Report</p>
                    <Link to='' onClick={()=>{setArrow2(!getarrow2)}}>
                    {getarrow2 === true ? <> <RiArrowUpSLine size={25} color='var(--color-brand)' className='sec_report_icon' />
                    </> : <>
                        <RiArrowDownSLine size={25} color='var(--color-brand)' className='sec_report_icon' />
                    </>}

                    
                    </Link>
                    </div>

                    {getarrow2 === true ? <div className='sec_prog_report_main_main'>
                    <div className='sec_prog_report_mainn'>
                        <div className='sec_report_con_part_inner_part_head'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Section Name</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Total Question</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Correct</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Wrong</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Marks</p>
                            </div>
                        </div>

                        <div className='sec_report_con_part_inner_part_inner_data'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>Section 1</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead1?.total_que}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead1?.correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead1?.in_correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead1?.correct}</p>
                            </div>
                        </div>

                        <div className='sec_report_con_part_inner_part_inner_data'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>Section 2</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead2?.total_que}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead2?.correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead2?.in_correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead2?.correct}</p>
                            </div>
                        </div>

                        <div className='sec_report_con_part_inner_part_inner_data'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>Section 3</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead3?.total_que}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead3?.correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead1?.in_correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getRead1?.correct}</p>
                            </div>
                        </div>

                       </div>
                    </div> : <></>}

                    
                </div>

                <div className='sec_report_con_part'>
                <div className='sec_report_con_part_inner'>
                    <p className='sec_report_con_part_text'>Writing Report</p>
                    <Link to='' onClick={()=>{setArrow3(!getarrow3)}}>
                    {getarrow3 === true ? <> <RiArrowUpSLine size={25} color='var(--color-brand)' className='sec_report_icon'/>
                    </> : <>
                        <RiArrowDownSLine size={25} color='var(--color-brand)' className='sec_report_icon'/>
                    </>}

                    
                    </Link>
                    </div>

                    {getarrow3 === true ? <div className='sec_prog_report_main_main'>
                    <div className='sec_prog_report_mainn'>
                        <div className='sec_report_con_part_inner_part_head'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Section Name</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Total Question</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Correct</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Wrong</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Marks</p>
                            </div>
                        </div>

                        <div className='sec_report_con_part_inner_part_inner_data'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>Section 1</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getWriting1?.total_que}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getWriting1?.correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getWriting1?.in_correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getWriting1?.correct}</p>
                            </div>
                        </div>

                        <div className='sec_report_con_part_inner_part_inner_data'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>Section 2</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getWriting2?.total_que}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getWriting2?.correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getWriting2?.in_correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getWriting2?.correct}</p>
                            </div>
                        </div>
                       </div>
                    </div> : <></>}

                    
                </div>

                <div className='sec_report_con_part'>
                <div className='sec_report_con_part_inner'>
                    <p className='sec_report_con_part_text'>Speaking Report</p>
                    <Link to='' onClick={()=>{setArrow4(!getarrow4)}}>
                    {getarrow4 === true ? <> <RiArrowUpSLine size={25} color='var(--color-brand)' className='sec_report_icon'/>
                    </> : <>
                        <RiArrowDownSLine size={25} color='var(--color-brand)' className='sec_report_icon'/>
                    </>}

                    
                    </Link>
                    </div>

                    {getarrow4 === true ? <div className='sec_prog_report_main_main'>
                    <div className='sec_prog_report_mainn'>
                        <div className='sec_report_con_part_inner_part_head'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Section Name</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Total Question</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Correct</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Wrong</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt'>Marks</p>
                            </div>
                        </div>

                        <div className='sec_report_con_part_inner_part_inner_data'>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>Section 1</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner2'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getSpeaking1?.total_que}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getSpeaking1?.correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getSpeaking1?.in_correct}</p>
                            </div>
                            <div className='sec_report_con_part_inner_part_head_inner1'>
                                <p className='sec_report_con_part_inner_part_head_inner1_txt_inner_data'>{getSpeaking1?.correct}</p>
                            </div>
                        </div>

                        

                       </div>
                    </div> : <></>}

                    
                </div>

            </div>
        </div>
        </>}
            
        
        
        </>
    )
}

export default SectionalReport