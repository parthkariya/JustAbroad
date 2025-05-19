import React, {  useState } from "react";
import "./SecTest1_nav.css";
// import ReactAudioPlayer from "react-audio-player";
import { FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import images from "../../constants/images";
import { MdOutlineSettings } from "react-icons/md";
import "react-h5-audio-player/lib/styles.css"; // Import the library styles
import ReactModal from "react-modal";

const SecTest1_nav = ({ fontSize, setModalIsOpen2, bgcolor }) => {
  const [getTab, setTab] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);

  // const handleFontSizeChange = (event) => {
  //   setFontSize(parseInt(event.target.value, 10));
  // };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "none",
      border: "none",
      borderRadius: "5px",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };
  const customStyles1 = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "none",
      border: "none",
      borderRadius: "5px",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    },
    overlay: {
      zIndex: 1000,
      background: "whitesmoke",
      // backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  };

  const customControls = ["play", "volume", "time", "progress"];
  const [showControls, setShowControls] = useState(true);

  const handleLoadedMetadata = () => {
    // Get the controls element and hide download and speed controls
    const controls = document.querySelector(".react-audio-player-controls");
    if (controls) {
      controls.style.setProperty("display", "flex", "important"); // Ensure flex display
      const downloadButton = controls.querySelector(
        ".react-audio-player-download"
      );
      const speedControl = controls.querySelector(".react-audio-player-speed");

      if (downloadButton) {
        downloadButton.style.display = "none";
      }
      if (speedControl) {
        speedControl.style.display = "none";
      }

      setShowControls(false); // Update state to prevent unnecessary re-renders
    }
  };
  return (
    <div
      className="SecTest1_nav_main"
      style={{ fontSize: `${fontSize}px`, backgroundColor: `var(${bgcolor})` }}>
      <div className="SecTest1_nav_block1">
        <div>
          <FaUserCircle />
        </div>
        <div>XXXXX XXXXX-12345</div>
      </div>
      <div className="SecTest1_nav_block2" style={{ gap: "1rem" }}>
        <button
          className="btn"
          onClick={() => {
            setModalIsOpen2(true);
          }}>
          Settings
        </button>
        <button
          className="btn"
          onClick={() => {
            setModalIsOpen(true);
          }}>
          Help
        </button>
        <button
          className="btn"
          onClick={() => {
            setModalIsOpen1(true);
          }}>
          Hide
        </button>

        {/* <ReactAudioPlayer
          src={images.mp3sample}
          controls={showControls}
          onLoadedMetadata={handleLoadedMetadata}
        /> */}
      </div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}>
        <>
          <div
            className="navbar_modal_signin_head"
            style={{ gap: "1rem", alignItems: "center" }}>
            <FaQuestionCircle
              style={{
                fontSize: "22px",
                color: "var(--color-brand)",
              }}
            />
            <h3 style={{ color: "var(--color-brand)" }}>Help</h3>
          </div>
          <div className="model_sizing">
            <div
              style={{ display: "flex", gap: "0.5rem" }}
              className="SectionTest_tab_main">
              <div
                className="SectionTest_tab_inner"
                style={{
                  cursor: "pointer",
                  background:
                    getTab === 1 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 1 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                onClick={() => {
                  setTab(1);
                }}>
                Inofmation
              </div>
              <div
                className="SectionTest_tab_inner"
                style={{
                  cursor: "pointer",
                  background:
                    getTab === 2 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 2 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                onClick={() => {
                  setTab(2);
                }}>
                Test help
              </div>
              <div
                className="SectionTest_tab_inner"
                style={{
                  cursor: "pointer",
                  background:
                    getTab === 3 ? "var(--color-brand)" : "var(--color-white)",
                  color:
                    getTab === 3 ? "var(--color-white)" : "var(--color-brand)",
                  padding: "0.5rem",
                }}
                onClick={() => {
                  setTab(3);
                }}>
                Task help
              </div>
            </div>

            {getTab === 1 ? (
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  paddingTop: "1.5rem",
                  flexDirection: "column",
                }}>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexDirection: "column",
                  }}>
                  <span className="que_no">INSTRUCTIONS TO CANDIDATES</span>
                  <div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>Answer all questions</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>
                        You can change your answers at any time during the test
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexDirection: "column",
                  }}>
                  <span className="que_no">
                    INFORMATION FOR INFORMATION FOR CANDIDATES
                  </span>
                  <div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>There are 40 questions in this test</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>Each questions caries one mark</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>
                        The test clock will show you where there are 10 minutes
                        remaining
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : getTab === 2 ? (
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  paddingTop: "1.5rem",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}>
                <span className="que_no">
                  At the top of the screen you can see
                </span>
                <span style={{ background: "lightgray", padding: "0.5rem" }}>
                  XXXXXXXX-123456
                </span>
                <span>Your name and candidate number </span>
                <span style={{ background: "lightgray", padding: "0.5rem" }}>
                  90 minutes left{" "}
                </span>
                <span>
                  A clock which tells you how much time you have left. when you
                  hover over the time you can see the seconds
                </span>
              </div>
            ) : getTab === 3 ? (
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  paddingTop: "1.5rem",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}>
                <span className="que_no">Info Help</span>
              </div>
            ) : null}

            <div>
              <button
                className="btn"
                style={{ width: "100%", margin: "0px" }}
                onClick={() => {
                  setModalIsOpen(false);
                  // PostReadingRaiseQuery();
                }}>
                Ok
              </button>
            </div>
          </div>
        </>
      </ReactModal>
      <ReactModal
        isOpen={modalIsOpen1}
        onRequestClose={() => {
          setModalIsOpen1(false);
        }}
        style={customStyles1}>
        <>
          <div
            className="navbar_modal_signin_head"
            style={{ gap: "1rem", alignItems: "center" }}>
            <MdOutlineSettings
              style={{
                fontSize: "22px",
                color: "var(--color-brand)",
              }}
            />
            <h3 style={{ color: "var(--color-brand)", fontWeight: "700" }}>
              Screen hidden
            </h3>
          </div>
          <div className="model_sizing">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <span>Your answers have been stored.</span>
              <span>Please note that the clock is still running.</span>
              <span>
                If you wish to leave the room, please tell the your invigitator
              </span>
              <span>Click the below button to go back your test</span>
            </div>
            <div>
              <button
                className="btn"
                style={{ width: "100%", margin: "0px" }}
                onClick={() => {
                  setModalIsOpen1(false);
                }}>
                Resume Test
              </button>
            </div>
          </div>
        </>
      </ReactModal>
    </div>
  );
};

export default SecTest1_nav;
