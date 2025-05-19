import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
// import "./CurrWeekFirstClassTestFirst.css";
import { Line } from "rc-progress";
import images from "../../constants/images";
import Notification from "../../utils/Notification";
import axios from "axios";
import {
  ACCEPT_HEADER,
  add_curriculum_writing,
  add_mocktest_writing,
} from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";

const CurrWeekSecClassTestSec = () => {
  const [getQue, setQue] = useState(1);
  //   const [getQue1, setQue1] = useState(1);
  const [sliderValue, setSliderValue] = useState(50);

  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  // const [attemptcount, SetAttemptcount] = useState("");
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };
  const handleButtonClick = () => {
    const result = window.confirm(
      "You have time remaining to review. As long as there is a time remaining, you can check your work. Once you leave this section, you WILL NOT be able to return to it.Click 'Ok' to continue."
    );

    if (result) {
      // setQue1(1);
    } else {
    }
  };
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  // const [seconds, setSeconds] = useState(20 * 60);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setSeconds((prevSeconds) => {
  //       if (prevSeconds > 0) {
  //         return prevSeconds - 1;
  //       } else {
  //         clearInterval(intervalId);
  //         // You can add additional logic here when the timer reaches 0
  //         return 0;
  //       }
  //     });
  //   }, 1000);

  //   return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  // }, []);

  // const minutes = Math.floor(seconds / 60);
  // const remainingSeconds = seconds % 60;

  // Cut Copy Paste

  const handleOnChange = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      setText(event.target.value); // Update state even if within limit
    } else {
    }
    setText(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/); // Split text into words

    if (words1.length <= maxWords) {
      setText(inputValue);
    }
    // setText(event.target.value);
  };
  const handleOnChangeText2 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      setText1(event.target.value); // Update state even if within limit
    } else {
    }
    setText1(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/); // Split text into words

    if (words1.length <= maxWords) {
      setText1(inputValue);
    }
  };
  const handleOnChangeText3 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      setText2(event.target.value);
    } else {
    }
    setText2(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/);

    if (words1.length <= maxWords) {
      setText2(inputValue);
    }
    // setText2(event.target.value);
  };
  const handleOnChangeText4 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      setText3(event.target.value);
    } else {
    }
    setText3(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/);

    if (words1.length <= maxWords) {
      setText3(inputValue);
    }
    // setText3(event.target.value);
  };
  const handleOnChangeText5 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      setText4(event.target.value);
    } else {
    }
    setText4(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/);

    if (words1.length <= maxWords) {
      setText4(inputValue);
    }
    // setText4(event.target.value);
  };
  const handleOnChangeText6 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      setText5(event.target.value);
    } else {
    }
    setText5(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/);

    if (words1.length <= maxWords) {
      setText5(inputValue);
    }
    // setText5(event.target.value);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleClearClick2 = () => {
    let newText = "";
    setText1(newText);
  };
  const handleClearClick3 = () => {
    let newText = "";
    setText2(newText);
  };
  const handleClearClick4 = () => {
    let newText = "";
    setText3(newText);
  };
  const handleClearClick5 = () => {
    let newText = "";
    setText4(newText);
  };
  const handleClearClick6 = () => {
    let newText = "";
    setText5(newText);
  };
  const handlePaste = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText(clipboardText);
    });
  };
  const handlePaste2 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText1(clipboardText);
    });
  };
  const handlePaste3 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText2(clipboardText);
    });
  };
  const handlePaste4 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText3(clipboardText);
    });
  };
  const handlePaste5 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText4(clipboardText);
    });
  };
  const handlePaste6 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText5(clipboardText);
    });
  };

  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleButtonSubmitClick = () => {
    const result = window.confirm("Are you sure you want to submit the test?");

    if (result) {
      SubmitTest();
    } else {
      console.log("Action canceled");
    }
  };
  const handleButtonSave = () => {
    const result = window.confirm("Are you sure you want to exit the test?");

    if (result) {
      navigate("/curriculumPage");
    } else {
    }
  };

  // Api Calling

  const SubmitTest = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    const formdata = new FormData();
    formdata.append("curriculum_writing_id", "1");
    formdata.append("course_id", JSON.parse(Courseid));

    formdata.append("answer_1", text);
    formdata.append("answer_2", text1);
    formdata.append("answer_3", text2);
    formdata.append("answer_4", text3);
    formdata.append("answer_5", text4);
    formdata.append("answer_6", text5);
    axios
      .post(add_curriculum_writing, formdata, {
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
          navigate("/CurriculumPage");
          Notification("success", "Success!", res.data.message);
         }
      })
      .catch((err) => {
        console.log("errrr-->", err);
      });

    // if (text === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text1 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text2 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text3 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text4 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text5 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else {
    //   const Token = await localStorage.getItem("is_token");
    //   const Courseid = await localStorage.getItem("courseid");
    //   const formdata = new FormData();
    //   formdata.append("curriculum_writing_id", "1");
    //   formdata.append("course_id", JSON.parse(Courseid));

    //   formdata.append("answer_1", text);
    //   formdata.append("answer_2", text1);
    //   formdata.append("answer_3", text2);
    //   formdata.append("answer_4", text3);
    //   formdata.append("answer_5", text4);
    //   formdata.append("answer_6", text5);
    //   axios
    //     .post(add_curriculum_writing, formdata, {
    //       headers: {
    //         Accept: ACCEPT_HEADER,
    //         Authorization: "Bearer " + JSON.parse(Token),
    //       },
    //     })
    //     .then((res) => {
    //       if (res.data.status === "Token is Expired") {
    //         SetLogout();
    //         navigate("/");
    //       } else {
    //         navigate("/CurriculumPage");
    //         Notification("success", "Success!", res.data.message);
     //       }
    //     })
    //     .catch((err) => {
    //       console.log("errrr-->", err);
    //     });
    // }
  };
  //Timer
  const [seconds1, setSeconds1] = useState(() => {
    const storedSeconds = localStorage.getItem("timerSeconds");
    return storedSeconds ? parseInt(storedSeconds) : 2 * 60 * 60; // 2 hours in seconds
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds1((prevSeconds) => {
        if (prevSeconds > 0) {
          localStorage.setItem("timerSeconds", prevSeconds - 1);
          return prevSeconds - 1;
        } else {
          clearInterval(intervalId);

          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  const hours = Math.floor(seconds1 / 3600);
  const minutes = Math.floor((seconds1 % 3600) / 60);
  const remainingSeconds = seconds1 % 60;

  useEffect(() => {
    if (hours === 0 && minutes === 0 && remainingSeconds === 0) {
      navigate("/curriculumPage");
      Notification("Warning", "Warning", "Test's up!");
    } else {
    }
  }, [hours, minutes, remainingSeconds]);

  // restrict navigation
  useEffect(() => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const handlePopstate = () => {
    window.history.pushState(null, document.title, window.location.href);
  };

  // Disabling right-click
  const disableRightClick = (event) => {
    event.preventDefault();
  };

  document.addEventListener("contextmenu", disableRightClick);

  // restrict copying text
  useEffect(() => {
    const disableTextSelection = (event) => {
      event.preventDefault();
    };

    document.addEventListener("selectstart", disableTextSelection);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("selectstart", disableTextSelection);
    };
  }, []);

  const maxWords = 75;

  return (
    <div className="PteMockTest1Main_main">
      <div>
        {/* header */}
        <div className="PteMockTest1Main_nav" style={{ height: "5rem" }}>
          <div className="que_no">
            Speaking - Describe Image - (C.W - 1 D -3) - Section 1 of 1
          </div>
          <div className="PteMockTest1Main_nav_inner">
            <span
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}>
              <FaClock style={{ color: "var(--color-brand" }} /> Time Remaining
              {/* {minutes} minutes {remainingSeconds} seconds */}
              <div>
                {hours}:{minutes < 10 ? "0" : ""}
                {minutes}:{remainingSeconds < 10 ? "0" : ""}
                {remainingSeconds}{" "}
              </div>
            </span>
            <span
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}>
              <IoIosListBox style={{ color: "var(--color-brand" }} />
              {getQue} of 6
            </span>
          </div>
        </div>
        <div className="blue_nav"></div>
        {/* header */}

        {getQue === 1 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                LECTURE DEMONSTRATION
              </span>
            </div>
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Read the passage below and summarize it using one sentence. Type
                your response in the box at the bottom of the screen. Your
                response will be judged on the quality of your writing and on
                how well your response presents the key points in the passage.
              </span>
            </div>
            <div>
              <span>
                Due to recent technological advancements, wires and cables are
                prevalent in every industry, including telecommunications
                engineering, mechanics, and cyber-security. Wireless and cables
                are prevalent, and the concept is growing in significance
                daily.Improving the quality of products in various disciplines
                and domains has become necessary for various enterprises.
                Definitions of cables and wires A wire consists of a single
                conductor, whereas a cable contains multiple conductors. The
                cable has a live wire, a neutral wire, and a grounding wire.
                Regarding cables, they can be utilized for the transfer of
                energy, mechanical loads, and telecommunication signals.
                Additionally, the cable can be utilized for power transmission
                and communications. According to its varied applications and
                classifications, it has become indispensable in the contemporary
                technological world. Wires and cables are relatively similar.
                However, there is a slight distinction between their products
                and applications.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text}
              id="myBox"
              onChange={handleOnChange}></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}>
                  <button className="btn" onClick={handleClearClick}>
                    Cut
                  </button>
                  <button className="btn" onClick={handleCopyClick}>
                    Copy
                  </button>
                  <button className="btn" onClick={handlePaste}>
                    Paste
                  </button>
                </div>
              </div>
              {maxWords - text.split(/\s+/).length}/{maxWords} Word Limit
              Remaining
            </div>
          </div>
        ) : getQue === 2 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Read the passage below and summarize it using one sentence. Type
                your response in the box at the bottom of the screen. Your
                response will be judged on the quality of your writing and on
                how well your response presents the key points in the passage.
              </span>
            </div>
            <div>
              <span>
                Players like Hamilton pave the way for regular hospital
                breathing circuits, which consist of a pre-assembled tube, flow
                sensor, expiratory valve set, and connectors. These breathing
                circuits are used in hospitals. Ventilator Test Systems Market
                could be carried out with portable and critical care
                ventilators. The healthcare professional is the one who will
                decide the kind of ventilator that will be utilised. The two
                forms of NIV are pressure support and continuous positive airway
                pressure. Pressure support is the more common mode. Again,
                research indicates that the latter is utilised in more than 18%
                of the cases, whilst the former was employed in more than 60% of
                the situations. Segmentation of the Market for Non-invasive
                Ventilation Masks and Circuits The global market for
                non-invasive ventilation masks and circuits includes
                non-invasive ventilation circuits (including non-invasive
                ventilation disposable circuits and non-invasive ventilation
                reusable circuits) and non-invasive ventilation masks
                (non-invasive ventilation disposable masks and non-invasive
                ventilation reusable masks).
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text1}
              id="myBox"
              onChange={handleOnChangeText2}></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}>
                  <button className="btn" onClick={handleClearClick2}>
                    Cut
                  </button>
                  <button className="btn" onClick={handleCopyClick}>
                    Copy
                  </button>
                  <button className="btn" onClick={handlePaste2}>
                    Paste
                  </button>
                </div>
              </div>
              {maxWords - text1.split(/\s+/).length}/{maxWords} Word Limit
              Remaining{" "}
            </div>
          </div>
        ) : getQue === 3 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Read the passage below and summarize it using one sentence. Type
                your response in the box at the bottom of the screen. Your
                response will be judged on the quality of your writing and on
                how well your response presents the key points in the passage.
              </span>
            </div>
            <div>
              <span>
                When the original manufacturer's warranty on a product expires,
                some companies will offer an additional year of coverage to the
                buyer in the form of an extended warranty or service contract.
                The terms of the guarantee are comparable to those of the brand
                warranty, and they cover both electrical and mechanical defects
                that may occur with the items. It's possible to get an extended
                warranty through the warranty administrator, the dealer, or the
                manufacturer. Different Variations of an Extended Service
                Contract Warranty Plan Plan for an Extended Warranty Coverage of
                One Year Durable consumer products and home appliances covered
                by the Wide Care Extended Warranty One Year plan are guarded
                against manufacturing flaws during the plan's protection. Covers
                all of the industry's most popular brands and offers cashless
                settlements along with a repair or replacement service that is
                guaranteed. Plan for Extended Warranties for the First Two Years
                of Purchase During the two years that are covered by the
                WideCare Extended Warranty Two-Year plan, durable consumer
                products and home appliances will be protected against flaws in
                the production process that may have occurred. Covers all of the
                industry's most popular brands and offers cashless settlements
                along with a repair or replacement service that is guaranteed.
                Plan for an Extended Warranty Coverage For Three Years Durable
                consumer products and home appliances that are covered under the
                Three-Year plan of the Wide Care Extended Warranty will have
                protection against flaws in manufacturing during the duration of
                the plan's coverage. Covers all of the industry's most popular
                brands and offers cashless service that is guaranteed. Plan for
                Extended Warranties for the First Two Years of Purchase During
                the two years that are covered by the WideCare Extended Warranty
                Two-Year plan, durable consumer products and home appliances
                will be protected against flaws in the production process that
                may have occurred. Covers all of the industry's most popular
                brands and offers cashless settlements along with a repair or
                replacement service that is guaranteed. Plan for an Extended
                Warranty Coverage For Three Years Durable consumer products and
                home appliances that are covered under the Three-Year plan of
                the Wide Care Extended Warranty will have protection against
                flaws in manufacturing during the duration of the plan's
                coverage. Covers all of the industry's most popular brands and
                offers cashless settlements along with a repair or replacement
                service that is guaranteed.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text2}
              id="myBox"
              onChange={handleOnChangeText3}></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}>
                  <button className="btn" onClick={handleClearClick3}>
                    Cut
                  </button>
                  <button className="btn" onClick={handleCopyClick}>
                    Copy
                  </button>
                  <button className="btn" onClick={handlePaste3}>
                    Paste
                  </button>
                </div>
              </div>
              {maxWords - text2.split(/\s+/).length}/{maxWords} Word Limit
              Remaining{" "}
            </div>
          </div>
        ) : getQue === 4 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Read the passage below and summarize it using one sentence. Type
                your response in the box at the bottom of the screen. Your
                response will be judged on the quality of your writing and on
                how well your response presents the key points in the passage.
              </span>
            </div>
            <div>
              <span>
                Builders and real estate developers under Adore Real tech P It
                are well-known in Faridabad. They are responsible for several
                high-rise residential buildings in various Faridabad
                neighbourhoods. One such project in Faridabad is called Adore
                Samriddhi, and it consists of 840 units of flats that have
                either two or three bedrooms. Greater Faridabad's sector 89 is
                where this project will be built. A modest commercial part is
                attached to the project, similar to what can be found attached
                to most of the high-rise buildings being developed in the
                current context. There are 57 different stores in this
                commercial zone, and their floor plans range from 200 to 400
                square feet. The purpose of these retail establishments in the
                residential society of Adore Samriddhi is to cater to the daily
                requirements of the residents. Because more than 2000 people
                live in a community with 840 apartments, these establishments'
                commercial viability or success quotient is very high, which is
                why there is such a strong demand for them. Nevertheless, the
                clientele of these stores consists not only of the people who
                live in this community but also, in some instances, of the
                people who live in the areas that are immediately adjacent to
                it. In this particular scenario, the surrounding areas would
                also have at least 20,000 to 30,000 more people who live in the
                entire sector. According to customary usage, a unit of measure
                is any quantity expressed as mass, volume, area, or length. A
                chemical unit is defined as the number of molecules in a single
                molecule. Atomic and molecular properties comprise a molecule's
                macroscopic team. A noticeable unit is the whole amount of stuff
                that makes up a molecule's atomic or molecular structure.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text3}
              id="myBox"
              onChange={handleOnChangeText4}></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}>
                  <button className="btn" onClick={handleClearClick4}>
                    Cut
                  </button>
                  <button className="btn" onClick={handleCopyClick}>
                    Copy
                  </button>
                  <button className="btn" onClick={handlePaste4}>
                    Paste
                  </button>
                </div>
              </div>
              {maxWords - text3.split(/\s+/).length}/{maxWords} Word Limit
              Remaining{" "}
            </div>
          </div>
        ) : getQue === 5 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Read the passage below and summarize it using one sentence. Type
                your response in the box at the bottom of the screen. Your
                response will be judged on the quality of your writing and on
                how well your response presents the key points in the passage.
              </span>
            </div>
            <div>
              <span>
                With Too, we have precision issues in large quantities for any
                process. Whenever this occurs, the computations are incorrect.
                This indicates that most of the time, the calculations are
                inaccurate. The question then becomes, 'How many units should be
                employed in a chemical reaction?" This question's solution is
                contingent on several factors. The significance of these factors
                will change based on the type of calculation, but one component
                will remain constant. Why do significant numbers matter in
                chemistry? It's inconceivable to understate the importance of
                substantial values. Inorganic and organic chemistry calculations
                require a high number of decimal places. In this manner, you can
                verify the accuracy of your calculations.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text4}
              id="myBox"
              onChange={handleOnChangeText5}></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                  }}>
                  <button className="btn" onClick={handleClearClick5}>
                    Cut
                  </button>
                  <button className="btn" onClick={handleCopyClick}>
                    Copy
                  </button>
                  <button className="btn" onClick={handlePaste5}>
                    Paste
                  </button>
                </div>
              </div>
              {maxWords - text4.split(/\s+/).length}/{maxWords} Word Limit
              Remaining{" "}
            </div>
          </div>
        ) : getQue === 6 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                Read the passage below and summarize it using one sentence. Type
                your response in the box at the bottom of the screen. Your
                response will be judged on the quality of your writing and on
                how well your response presents the key points in the passage.
              </span>
            </div>
            <div>
              <span>
                You need excellent customer service to succeed, which becomes
                even more crucial when you offer that service through social
                media. Due to the public nature of social customer service,
                everyone can see when you are sorting ideas into functional
                categories of service to your customers and when you make
                mistakes. A negative interaction with a customer or utilizing
                the incorrect tone can have repercussions for your brand. Having
                customer service representatives familiar with the most
                effective procedures for offering support via social media is
                necessary. In addition, your representatives need to be
                well-versed in the aspects of your company's product or service
                they are promoting. If a company's staff are not informed about
                the product or service they sell, approximately 46% of customers
                will abandon that brand. If you provide support through social
                media, giving the incorrect answer will be evident to more than
                one person simultaneously. It will be immediately noticeable to
                everyone who is following your feeds.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text5}
              id="myBox"
              onChange={handleOnChangeText6}></textarea>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                flexWrap: "wrap",
              }}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}>
                <button className="btn" onClick={handleClearClick6}>
                  Cut
                </button>
                <button className="btn" onClick={handleCopyClick}>
                  Copy
                </button>
                <button className="btn" onClick={handlePaste6}>
                  Paste
                </button>
              </div>
              {maxWords - text5.split(/\s+/).length}/{maxWords} Word Limit
              Remaining{" "}
            </div>
          </div>
        ) : null}
      </div>

      {/* {getQue1 === 1 ? <>1</> : getQue1 === 2 ? <>2</> : null} */}
      {/* butn */}
      <div
        style={{
          background: "lightgray",
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 2rem",
        }}>
        <div>
          <button
            className="btn"
            onClick={() => {
              handleButtonSave();
            }}>
            Save & Exit
          </button>
        </div>
        <div>
          {getQue === 6 ? (
            <>
              <button
                className="btn"
                onClick={() => {
                  // setQue(getQue + 1);
                  //   setQue1(getQue1 + 1);
                  handleButtonSubmitClick();
                }}>
                Submit
              </button>
            </>
          ) : (
            <button
              className="btn"
              onClick={() => {
                setQue(getQue + 1);
              }}>
              Next
            </button>
          )}
        </div>
      </div>
      {/* butn */}
    </div>
  );
};

export default CurrWeekSecClassTestSec;
