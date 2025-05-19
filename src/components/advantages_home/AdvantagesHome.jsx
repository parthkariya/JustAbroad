import React, { useEffect, useState } from "react";
import "./AdvantagesHome.css";
import images from "../../constants/images";
import CountUp from "react-countup";

const AdvantagesHome = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isCounterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const startCounterOnScroll = () => {
      // Replace the following line with the actual scroll threshold you want
      if (scrollPosition > /* Your Scroll Threshold */ 100) {
        setCounterStarted(true);
        // Remove the scroll event listener once the counter is started (optional)
        window.removeEventListener("scroll", startCounterOnScroll);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Attach a separate event listener for starting the counter on scroll
    window.addEventListener("scroll", startCounterOnScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", startCounterOnScroll);
    };
  }, [scrollPosition]);
  return (
    <div className="AdvantagesHome_main">
      <div>
        <div className="heading">
          <h1>Just Abroad Advantages</h1>
        </div>
        <div className="underline"></div>
      </div>
      <div className="advantages_para_home_main">
        <p className="advantages_para_home_inner">
          Just Abroad was founded on the principle that by pursuing big
          ideas and sharing what we learn, we make the world a better place. For
          more than 30 years, we haven’t strayed from that vision.
        </p>
      </div>
      <div className="home_adv_content_block_main">
        <div className="home_adv_content_main">
          <div className="home_adv_icon">
            <img
              src={images.teacher}
              alt="teacher"
              className="home_adv_icon_inner"
            />
          </div>
          <div className="home_adv_num_underline">
            {isCounterStarted && (
              <h2 className="home_adv_num">
                <CountUp start={0} end={30} duration={2.75}></CountUp> +
              </h2>
            )}
            <div className="underline_advantages"></div>
          </div>
          <div>
            <h5 className="">Certified Teachers</h5>
          </div>
        </div>
        <div className="home_adv_content_main">
          <div className="home_adv_icon">
            <img
              src={images.students}
              alt="students"
              className="home_adv_icon_inner"
            />
          </div>
          <div className="home_adv_num_underline">
            {isCounterStarted && (
              <h2 className="home_adv_num">
                <CountUp start={0} end={5000} duration={2.75}></CountUp> +
              </h2>
            )}
            <div className="underline_advantages"></div>
          </div>
          <div>
            <h5 className="">Students</h5>
          </div>
        </div>
        <div className="home_adv_content_main">
          <div className="home_adv_icon">
            <img
              src={images.courses}
              alt="courses"
              className="home_adv_icon_inner"
            />
          </div>
          <div className="home_adv_num_underline">
            {isCounterStarted && (
              <h2 className="home_adv_num">
                <CountUp start={0} end={20} duration={2.75}></CountUp> +
              </h2>
            )}
            <div className="underline_advantages"></div>
          </div>
          <div>
            <h5 className="">Certified Courses</h5>
          </div>
        </div>
        <div className="home_adv_content_main">
          <div className="home_adv_icon">
            <img
              src={images.yearsOfSuccess}
              alt="yearsOfSuccess"
              className="home_adv_icon_inner"
            />
          </div>
          <div className="home_adv_num_underline">
            {isCounterStarted && (
              <h2 className="home_adv_num">
                <CountUp start={0} end={30} duration={2.75}></CountUp> +
              </h2>
            )}
            <div className="underline_advantages"></div>
          </div>
          <div>
            <h5 className="">Years Of Success</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesHome;
