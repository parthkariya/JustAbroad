import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa6";
import { IoIosListBox } from "react-icons/io";
// import "./CurrWeekFirstClassTestFirst.css";
import { Line } from "rc-progress";
import images from "../../constants/images";
import {
  ACCEPT_HEADER,
  add_curriculum_writing_home,
} from "../../utils/Constant";
import axios from "axios";
import Notification from "../../utils/Notification";
import { useNavigate } from "react-router-dom/dist";
import { useAuthContext } from "../../context/auth_context";

const CurrWeekWritingHomeworkTest = () => {
  const [getQue, setQue] = useState(1);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");
  const [text10, setText10] = useState("");

  const [sliderValue, setSliderValue] = useState(50);
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

  let navigate = useNavigate();
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
  };
  const handleOnChange2 = (event) => {
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
  const handleOnChange3 = (event) => {
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
  const handleOnChange4 = (event) => {
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
  const handleOnChange5 = (event) => {
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
    setText5(event.target.value);
  };
  const handleOnChange6 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      setText6(event.target.value);
    } else {
    }
    setText6(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/);

    if (words1.length <= maxWords) {
      setText6(inputValue);
    }
    // setText6(event.target.value);
  };
  const handleOnChange7 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      setText7(event.target.value);
    } else {
    }
    setText7(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/);

    if (words1.length <= maxWords) {
      setText7(inputValue);
    }
    // setText7(event.target.value);
  };
  const handleOnChange8 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      setText8(event.target.value);
    } else {
    }
    setText8(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/);

    if (words1.length <= maxWords) {
      setText8(inputValue);
    }
    // setText8(event.target.value);
  };
  const handleOnChange9 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      setText9(event.target.value);
    } else {
    }
    setText9(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/);

    if (words1.length <= maxWords) {
      setText9(inputValue);
    }
    // setText9(event.target.value);
  };
  const handleOnChange10 = (event) => {
    const words = event.target.value.split(/\s+/).filter(Boolean); // Count actual words

    if (words.length <= 10) {
      setText10(event.target.value);
    } else {
    }
    setText10(event.target.value);
    const inputValue = event.target.value;
    const words1 = inputValue.split(/\s+/);

    if (words1.length <= maxWords) {
      setText10(inputValue);
    }
    // setText10(event.target.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleClearClick2 = () => {
    let newText = "";
    setText2(newText);
  };
  const handleClearClick3 = () => {
    let newText = "";
    setText3(newText);
  };
  const handleClearClick4 = () => {
    let newText = "";
    setText4(newText);
  };
  const handleClearClick5 = () => {
    let newText = "";
    setText5(newText);
  };
  const handleClearClick6 = () => {
    let newText = "";
    setText6(newText);
  };
  const handleClearClick7 = () => {
    let newText = "";
    setText7(newText);
  };
  const handleClearClick8 = () => {
    let newText = "";
    setText8(newText);
  };
  const handleClearClick9 = () => {
    let newText = "";
    setText9(newText);
  };
  const handleClearClick10 = () => {
    let newText = "";
    setText10(newText);
  };
  const handlePaste = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText(clipboardText);
    });
  };
  const handlePaste2 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText2(clipboardText);
    });
  };
  const handlePaste3 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText3(clipboardText);
    });
  };
  const handlePaste4 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText4(clipboardText);
    });
  };
  const handlePaste5 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText5(clipboardText);
    });
  };
  const handlePaste6 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText6(clipboardText);
    });
  };
  const handlePaste7 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText7(clipboardText);
    });
  };
  const handlePaste8 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText8(clipboardText);
    });
  };
  const handlePaste9 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText9(clipboardText);
    });
  };
  const handlePaste10 = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setText10(clipboardText);
    });
  };
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  // Api Calling

  const SubmitTest = async () => {
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");
    const formdata = new FormData();
    formdata.append("curriculum_writing_home_id", "1");
    formdata.append("course_id", JSON.parse(Courseid));

    formdata.append("answer_1", text);
    formdata.append("answer_2", text2);
    formdata.append("answer_3", text3);
    formdata.append("answer_4", text4);
    formdata.append("answer_5", text5);
    formdata.append("answer_6", text6);
    formdata.append("answer_7", text7);
    formdata.append("answer_8", text8);
    formdata.append("answer_9", text9);
    formdata.append("answer_10", text10);
    axios
      .post(add_curriculum_writing_home, formdata, {
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
    // } else if (text2 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text3 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text4 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text5 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text6 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text7 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text8 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text9 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else if (text10 === "") {
    //   Notification("error", "Error", "Enter Value");
    // } else {
    //   const Token = await localStorage.getItem("is_token");
    //   const Courseid = await localStorage.getItem("courseid");
    //   const formdata = new FormData();
    //   formdata.append("curriculum_writing_home_id", "1");
    //   formdata.append("course_id", JSON.parse(Courseid));

    //   formdata.append("answer_1", text);
    //   formdata.append("answer_2", text2);
    //   formdata.append("answer_3", text3);
    //   formdata.append("answer_4", text4);
    //   formdata.append("answer_5", text5);
    //   formdata.append("answer_6", text6);
    //   formdata.append("answer_7", text7);
    //   formdata.append("answer_8", text8);
    //   formdata.append("answer_9", text9);
    //   formdata.append("answer_10", text10);
    //   axios
    //     .post(add_curriculum_writing_home, formdata, {
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
    //         console.log("res are", res.data);
    //       }
    //     })
    //     .catch((err) => {
    //       console.log("errrr-->", err);
    //     });
    // }
  };

  const { SetLogout } = useAuthContext();
  const handleButtonSubmitClick = () => {
    const result = window.confirm("Are you sure you want to submit the test?");

    if (result) {
      SubmitTest();
    } else {
     }
  };
  const handleButtonSave = () => {
    const result = window.confirm("Are you sure you want to exit the test?");

    if (result) {
      navigate("/curriculumPage");
    } else {
    }
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

  return (
    <div className="PteMockTest1Main_main">
      <div>
        {/* header */}
        <div className="PteMockTest1Main_nav" style={{ height: "3rem" }}>
          <div className="que_no">
            Writing - Summarise Written Text - (H.W -2 D -1) - Section 1 of 1{" "}
          </div>
          <div className="PteMockTest1Main_nav_inner">
            <span
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}>
              <FaClock style={{ color: "var(--color-brand" }} /> Time Remaining
              <div>
                {hours}:{minutes < 10 ? "0" : ""}
                {minutes}:{remainingSeconds < 10 ? "0" : ""}
                {remainingSeconds}
              </div>{" "}
            </span>
            <span
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}>
              <IoIosListBox style={{ color: "var(--color-brand" }} />
              {getQue} of 10
            </span>
          </div>
        </div>
        <div className="blue_nav"></div>
        {/* header */}

        {getQue === 1 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}></div>
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
                Market Analysing and Understanding the Physiologically Accurate
                Representation of The Market. Make an effort to conduct market
                research for some time to become familiar with the functioning
                of the market. The analysis may involve making notes by hand,
                conducting an exhaustive study of the stock values, and gaining
                a grasp of how to read the graphical representations of the
                market movino us o down. wnich are available on various media
                channels. inclang the internet and television reading and
                analysing textbooks on the subject might help you think more
                analytically and practically about the topic. Betore we throw
                ourselves headfirst into the market, we must understand how it
                functions. At Last, Opening A DEMAT Account and a Trading
                Account, And Getting Started with Some Small Routine
                Investments. The first step toward equity trading is opening a
                DEMAI and trading account, which is the initial step towards
                equity trading after one has gained enough self-assurance to
                begin their trip. DEMAT is an acronym for "Dematerialisation," A
                DEMAT account is a digital tool that enables investors to keep
                track of the stocks they trade in dematerialised form.
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
              <div>
                {maxWords - text.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
            </div>
          </div>
        ) : getQue === 2 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}></div>
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
                Moving to the city of Delhi or one of its neighbouring locations
                may create the impression that you have moved to a more affluent
                part of the world. A significant portion of the national capital
                region has been completely developed, and it is in this region
                that influential organisations are located. The cities of Noida
                and Gurgaon, which fall under the jurisdiction of Uttar Pradesh
                but are located close to the city of Delhi, have been the
                primary focus of development in the Delhi metropolitan area in
                recent years. This location serves as the nation's capital and
                benefits from the significant development activity being carried
                out here.
                <br />
                <br /> Delhi is an ideal location for investors to set up
                businesses, beginning with the city's roadways and continuing up
                to its many-story structures. In addition to the flourishing
                private sector. New Delhi Is home to many organisations
                attillated with the government. Due to the wide variety of
                organisations which have their corporate offices in this area,
                most of the country's functionaries have their bases of
                operations here. Within and around the metropolitan areas of
                Delhi, Gurgaon, and Noida are the primary workplaces of many
                privately held businesses. Even more modestly sized businesses
                serving the middle market category often have administrative
                headquarters in these regions.
              </span>
            </div>
            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text2}
              id="myBox"
              onChange={handleOnChange2}></textarea>
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
              <div>
                {maxWords - text2.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
            </div>
          </div>
        ) : getQue === 3 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}></div>
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
                The characteristics of Indian cuisine continue to develop
                despite shifts in fashion and the passage of time. Because each
                state has its flavours and ingredients, there is a clear
                indication of cultural impact in the production process. The
                varied rituals and customs associated with different religions
                can be seen in their cuisines. The preparations of Gujarati
                food, for example, have a hint of sweetness, and the relative
                lack of complexity in the flavours used in these dishes makes
                this style of cooking stand out. The testing has revealed
                affluence in the surrounding area, and the combination of
                ingredients has produced meals that are well-suited for every
                type of climate change. The distinctive character of Indian
                cuisine is conveyed not only through various spices but also
                through an understanding of how these ingredients interact with
                one another. The arduously labour-intensive nature of Indian
                cuisine's preparation and the copious amounts of food typically
                served have contributed to its prominence across all arenas.
                This method of preparing food uses the fundamental
                characteristics of the natural ingredient while combining
                various textures to produce a delectable end product.
              </span>
            </div>
            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text3}
              id="myBox"
              onChange={handleOnChange3}></textarea>
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
              <div>
                {maxWords - text3.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
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
                Why are significant units in chemistry so important? There are
                numerous causes. However, an essential argument is that a
                molecule with a greater significance will result in a more
                efficient chemical reaction.
                <br />
                <br />
                This is why many people research the properties of various
                molecules, as this enables them to identify the significance of
                their existence for the chemical reaction as a whole. This is
                also why students are urged to learn about the qualities of
                various units of substances so that they can conduct their
                experiments more precisely.
                <br />
                <br /> Is it simple to memorise a molecule's role in a chemical
                reaction? Is it not that challenging? You should not worry it
                you can perform the essential computations. You only need to
                recall the number of times the unit involved in the chemical
                reaction is multiplied by the energy necessary for the reaction
                to occur. Moreover, this is easy to memorise, primarily if you
                use formulas.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text4}
              id="myBox"
              onChange={handleOnChange4}></textarea>
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
              <div>
                {maxWords - text4.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
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
                Chronic illnesses make life much more complicated than it
                already is, forcing older folks to live a more constrained
                lifestyle that requires them to be less autonomous. Because
                there is no definitive therapy for Alzheimer's, senior citizens
                must rely on practical management suggestions to help them
                regulate their svmotoms and slow disease advancement.
                <br />
                <br />
                It you or a loved one in Oceanside are livIng alone or in an
                assisted livIng tacility, here are three helptul hints for
                managing a chronic illness. laking responsibility for your
                health will help you feel more in control of your overall
                well-being. Consult With Your Personal Medical Professional.{" "}
                <br />
                When a patient receives a diagnosis of a chronic health
                condition, they are thrust into a hight that Is drawn out and
                complicated. However, it you work with your primary care
                physician and other healthcare providers, you may simplify this
                journey and reduce the amount of time you spend on it. Your
                primary care physician (PCP) will assist in developing a
                treatment plan, dispensing drugs, and providing information
                regarding your illness. However, it would help if you did not
                trust your doctor and instead took an active role in your
                healthcare.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text5}
              id="myBox"
              onChange={handleOnChange5}></textarea>
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
              <div>
                {maxWords - text5.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
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
                Modifications to people's ways of living have significantly
                contributed to the immune system's deterioration, which has
                brought about various health problems. The liver, spleen,
                thymus, lymphatic system, and bone marrow are all immune system
                components, and they all collaborate to keep the body
                disease-resistant. The immune system is a complicated
                organisation
                <br />
                <br />
                This immunity is partially passed down from generation to
                generation. Furthermore, it is dependent on the way of life that
                an individual chooses to lead. The haste we desire to treat
                minor ailments is probably the primary cause of numerous
                outbreaks of the common cold and flu and increased
                SuSceptibIlity to disease.
                <br />
                Instead of waiting for the body to repair itself or searching
                for an antibiotic alternative, such as a herbal antibiotic, the
                inclination is to rush to conventional antibiotics for rapid
                relief. This is in contrast to looking for an antibiotic
                alternative such as a herbal one. Antibiotics are frequently
                taken excessively, which can harm the immune systems health.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text6}
              id="myBox"
              onChange={handleOnChange6}></textarea>
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
              <div>
                {maxWords - text6.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
            </div>
          </div>
        ) : getQue === 7 ? (
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
                Do you plan to depart from Malaysia on your next trip and make
                your way to Sri Lanka? Do you also want more cost-effective
                alternatives to keep the overall price of the trip down? It you
                need assistance rinding budget-triendly activities for your
                trip, were here to help. laking advantage of our services
                enables you to send money domestically and internationally. To
                pay for your travel expenses, it is advisable to do so with the
                destination country's currency or forex cards. You can get
                assistance with these services by working with a reputable money
                exchange business.
                <br />
                <br />
                If you want to send money from Malaysia to Sri Lanka, you can do
                so with the assurance that you will receive competitive exchange
                rates and little to no additional cost for making the transter.
                with our international money transter service, Lotus remit is
                one of the simplest methods to send money abroad for various
                reasons. We offer the most competitive rates across a
                comprehensive selection of international money transfer services
                we make available to you.
                <br />
                What is the most satistactorv Malavsian wire transter service? A
                trustworthy wire transfer provider can be found with little
                effort if a few guidelines are followed. You will need to hunt
                for financial institutions that provide better exchange rates.
                Additionally, their transfer fees should be kept to a minimum.
                Access to dependable customer assistance that can assist you
                when you run into problems is another beneticial thing. These
                tew variables will facilitate a smooth money transter for yo
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text7}
              id="myBox"
              onChange={handleOnChange7}></textarea>
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
                <button className="btn" onClick={handleClearClick7}>
                  Cut
                </button>
                <button className="btn" onClick={handleCopyClick}>
                  Copy
                </button>
                <button className="btn" onClick={handlePaste7}>
                  Paste
                </button>
              </div>
              <div>
                {maxWords - text7.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
            </div>
          </div>
        ) : getQue === 8 ? (
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
                Many businesses and advertising agencies are focusing on
                influencer outreach because influential individuals can elevate
                a company's brand through their methods and the sway they wield.
                <br />
                <br />
                There are also many finest influencer marketing companies that
                can give vou the most effective influencers for vour brand
                following its specifications. Specific influencer marketing
                campaigns are more successful than others, demonstrating how
                difficult it is to devise a plan to carry out slavery more
                effectively. According to the person that hires influencers to
                promote their brands, most influencers do not receive
                significant compensation for their work.
                <br />
                Although the influencer marketing platform is extensive and
                active, you should consider employing their services carefully.
                Before beginning work, it is critical to have a solid
                understanding of the value of the influencers representing your
                company. Reaching out to influential people is not magical; you
                can hire them today and see the effects immediately tomorrow.
                Therefore, there is no requirement for you to hurry over to that
                location. Before moving forward, you must devise the appropriate
                tactics and plans.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text8}
              id="myBox"
              onChange={handleOnChange8}></textarea>
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
                <button className="btn" onClick={handleClearClick8}>
                  Cut
                </button>
                <button className="btn" onClick={handleCopyClick}>
                  Copy
                </button>
                <button className="btn" onClick={handlePaste8}>
                  Paste
                </button>
              </div>
              <div>
                {maxWords - text8.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
            </div>
          </div>
        ) : getQue === 9 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                There is more than one justification for hiring drywall repair
                professionals; there are numerous justifications. The drywall in
                a home can develop cracks over time, which is one example of the
                seemingly infinite problems that can arise in a home. The
                appearance of cracks in the drywall around your home is a
                warning Indication oT a more critical problem that must be
                addressed as soon as possible betore the situation worsens.
              </span>
            </div>
            <div>
              <span>
                In addition to concerns over the wall's appearance, several
                other factors contribute to the periodic requirement to repair
                the drywall. The development of holes and fractures can open the
                door for elements such as moisture, wind, debris from
                construction, and insects that live in insulation to enter your
                space.
                <br />
                <br />
                Drywall typically comes in sheets that measure 4 feet by 8 feet
                and are designed to be raised and fastened to the studs in a
                wall in a straightforward manner. it is oftered in a petite
                sizing option. it is possible to pertorm complete repairs on it
                even after it has been damaged. There are multiple channels
                through which damage can be inflicted.
                <br />
                Residents have the potential to damage their homes through
                bumps, slashes, and horseplay. The movement of heavy furniture
                can also cause dents and holes. Despite their strength, drywalls
                are vulnerable to specific stresses and strains and cannot
                withstand everything. Damage Caused by Water Water that seeps
                into drywall does not elevate to a level higher than the surface
                level of standing water when it causes damage. In the event of a
                flood, the highest point of damage may merely require you to
                remove and replace the drywall.
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text9}
              id="myBox"
              onChange={handleOnChange9}></textarea>
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
                <button className="btn" onClick={handleClearClick9}>
                  Cut
                </button>
                <button className="btn" onClick={handleCopyClick}>
                  Copy
                </button>
                <button className="btn" onClick={handlePaste9}>
                  Paste
                </button>
              </div>
              <div>
                {maxWords - text9.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
            </div>
          </div>
        ) : getQue === 10 ? (
          <div className="PteMockTest1Main_inner">
            <div style={{ alignSelf: "flex-start" }}>
              <span style={{ fontStyle: "italic" }} className="que_no">
                There is more than one justification for hiring drywall repair
                professionals; there are numerous justifications. The drywall in
                a home can develop cracks over time, which is one example of the
                seemingly infinite problems that can arise in a home. The
                appearance of cracks in the drywall around your home is a
                warning Indication oT a more critical problem that must be
                addressed as soon as possible betore the situation worsens.
              </span>
            </div>
            <div>
              <span>
                One obvious illustration of passive income is the interest
                accumulated by a savings account; this is excellent so long as
                you continue to have funds in situ. This tvoe of revenue is
                residual. which means that only the residual component may be
                used to continue the income stream. which is a drawback
                Nevertheless, this residual nature is what makes this type of
                income problematic. If you get into financial difficulties or
                the interest rate suddenly declines, you may be forced to begin
                spending your lump sum; if this happens, the passive income you
                received along with your savings would be lost. This is not the
                best possible scenario and highlights residual income's
                precarious nature
                <br />
                <br />
                The most acceptable form of passive income is ongoing and does
                not depend on a one-time payment. After the initial steps have
                been taken, nothing else needs to be done in exchange for the
                reimbursement to be received. According to Wikipedia's
                definition of "without continuing effort," no further action is
                necessary. It just occurs on its own. That's all there is to it!
                To me, that makes sense, but could you explain how a passive
                income model is developed?
              </span>
            </div>

            <textarea
              style={{ width: "100%", height: "150px" }}
              value={text10}
              id="myBox"
              onChange={handleOnChange10}></textarea>
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
                <button className="btn" onClick={handleClearClick10}>
                  Cut
                </button>
                <button className="btn" onClick={handleCopyClick}>
                  Copy
                </button>
                <button className="btn" onClick={handlePaste10}>
                  Paste
                </button>
              </div>
              <div>
                {maxWords - text10.split(/\s+/).length}/{maxWords} Word Limit
                Remaining
              </div>{" "}
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
          {getQue == 10 ? (
            <button
              className="btn"
              onClick={() => {
                // setQue(getQue + 1);
                //   setQue1(getQue1 + 1);
                handleButtonSubmitClick();
              }}>
              Submit
            </button>
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

export default CurrWeekWritingHomeworkTest;
