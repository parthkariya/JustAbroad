import React, { useEffect, useState } from "react";
import { AdvantagesHome, HomeHero } from "../../components";
import ReactModal from "react-modal";
import images from "../../constants/images";
import { VscChromeClose } from "react-icons/vsc";

const Homepage = () => {
  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;
  useEffect(() => {
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  }, []);

  useEffect(() => {
    setModalIsOpen(true);
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
      textAlign: "center",
      borderRadius: "5px",
      padding: "1.5rem",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <div>
      <HomeHero />
      <AdvantagesHome />
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}>
        <div className="visaModal_main" style={{ height: "400px" }}>
          <img
            src={images.visaModal}
            alt=""
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              position: "relative",
            }}
          />
          <VscChromeClose
            style={{
              position: "absolute",
              top: "40px",
              right: "42px",
              cursor: "pointer",
              fontSize: "30px",
            }}
            onClick={() => {
              setModalIsOpen(false);
            }}
          />
        </div>
        {/* <div style={{ height: "100px", width: "100px" }}>
          <img
            src={images.visaPlane}
            alt=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <h2 style={{ fontWeight: "900" }}>Apply now</h2>
        <b>How it feels like having an amazing visa assistance</b> */}
      </ReactModal>
    </div>
  );
};

export default Homepage;
