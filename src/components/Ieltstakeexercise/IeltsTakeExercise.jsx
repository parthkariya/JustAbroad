import React, { useEffect, useRef, useState } from "react";
import "./IeltsTakeExercise.css";
import ReactAudioPlayer from "react-audio-player";
import images from "../../constants/images";

const Ielts_TakeExercise = ({ getlistinner3,getAudioLable }) => {
  const [getShowMore, setShowMore] = useState(false);
  const [getIndex, setIndex] = useState(0);
  const [audioshowstart, setaudioshowstart] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const audioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setaudioshowstart(true);
    }, 5000);
  }, []);

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
    <>
         {audioshowstart === true && getAudioLable == 1 ? (
      <>
        <ReactAudioPlayer
          style={{ display: "none" }}
          ref={audioRef}
          src={images.mp3sample}
          controls={showControls}
          onLoadedMetadata={handleLoadedMetadata}
          // autoPlay={getstartaudio == true ? true : false}
          autoPlay={true}
        />
      </>
    ) : (
      <></>
    )}
    <div className="TakeExercise_main">

      {getlistinner3 && getlistinner3.map((item, index) => {
        return (
          <div>
            <div className="">
              <h6 style={{ fontSize: "16px", fontWeight: "600" }} dangerouslySetInnerHTML={{
                __html: item.label,
              }}>
              </h6>
            </div>
            {getShowMore === false && index === getIndex ? (
              <div>
                <p dangerouslySetInnerHTML={{
                  __html: item.question,
                }}>

                </p>
              </div>
            ) : (
              <div>
                <p dangerouslySetInnerHTML={{
                  __html: item.answer,
                }}>

                </p>
              </div>
            )}

            <div>
              <button
                className="btn"
                onClick={() => {
                  setShowMore(!getShowMore);
                  setIndex(index)
                }}>
                {getShowMore === false && index === getIndex ? <>show answer</> : <>hide answer </>}
              </button>
            </div>
          </div>
        )
      })}

    </div>
    </>
  );
};

export default Ielts_TakeExercise;
