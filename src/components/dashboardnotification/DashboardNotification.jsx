import React from "react";
import "./DashboardNotification.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { Link } from "react-router-dom";

const DashboardNotification = () => {
  return (
    <div>
      <div className="dash_notification_head_main">
        <IoIosNotificationsOutline color="var(--color-brand)" size={35} />
        <p className="dash_notification_head">Notification</p>
      </div>

      <div
        className="dash_notification_date_flex"
        style={{ paddingTop: "0rem" }}>
        <div className="dash_notification_date_main">
          <p className="dash_notification_date">23/11/23</p>
        </div>
        <div className="dash_notification_date_icon_main">
          <HiOutlineCalendarDays color="var(--color-white)" size={20} />
        </div>
        <div className="line_date_vertoicle"></div>
        <div className="dash_notification_txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>

      <div className="dash_notification_date_flex">
        <div className="dash_notification_date_main">
          <p className="dash_notification_date">23/11/23</p>
        </div>
        <div className="dash_notification_date_icon_main">
          <HiOutlineCalendarDays color="var(--color-white)" size={20} />
        </div>
        <div className="line_date_vertoicle"></div>
        <div className="dash_notification_txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </div>
      </div>
      <div className="dash_notification_date_flex">
        <div className="dash_notification_date_main">
          <p className="dash_notification_date">23/11/23</p>
        </div>
        <div className="dash_notification_date_icon_main">
          <HiOutlineCalendarDays color="var(--color-white)" size={20} />
        </div>
        <div className="line_date_vertoicle"></div>
        <div className="dash_notification_txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
      <Link to="/Notifications" className="dash_notice_btn_main">
        <button className="btn dash_notice_btn">Show More</button>
      </Link>
    </div>
  );
};

export default DashboardNotification;
