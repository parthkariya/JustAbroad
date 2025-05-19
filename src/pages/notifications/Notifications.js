import React, { useState } from "react";
import "./Notifications.css";
import { FaRegClock } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const Notifications = () => {
  const [value, onChange] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  const [gettab, setTab] = useState();
  return (
    <div className="sec_notif">
      <div>
        <div className="notif_con_first">
          <p className="notif_head">Notifications</p>
          <div
            style={{
              display: "flex",
              gap: "0.8rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}>
            <div>
              <DatePicker
                onChange={onChange}
                value={value}
                dateFormat="dd/MM/yyyy"
                className="date_selector1"
              />
            </div>
            <div>
              <DatePicker
                onChange={onChange2}
                value={value2}
                dateFormat="dd/MM/yyyy"
                className="date_selector1"
              />
            </div>
            <div>
              <button className="btn">Filter</button>
            </div>
          </div>
        </div>
      </div>
      <div className="notif_con">
        <div className="notif_card_main" onClick={() => setTab(1)}>
          <div className="notif_card_date_flex">
            <FaRegClock color="#aaa" size={15} />
            <p className="notif_card_date">24 Nov 2018 9:30 AM</p>
          </div>
          <p className="notif_card_head">
            Live Class Update for IELTS General Batch on 13th November 2023 &
            14th November 2023.
          </p>
          {gettab == 1 ? (
            <>
              <p className="notif_details_head">Dear Student,</p>
              <p className="notif_details_txt">
                Please note, There will be an official Zoom update on Monday,
                September 04, 2023, from 4:00 pm to 10:00 pm due to this
                maintenance your evening batches will be canceled
              </p>
              <p className="notif_details_txt">Thank Tou.</p>
            </>
          ) : null}
        </div>
        <div className="notif_card_main">
          <div className="notif_card_date_flex">
            <FaRegClock color="#ccc" size={15} />
            <p className="notif_card_date">24 Nov 2018 9:30 AM</p>
          </div>
          <p className="notif_card_head">
            Live Class Update for IELTS General Batch on 13th November 2023 &
            14th November 2023.
          </p>
        </div>
        <div className="notif_card_main">
          <div className="notif_card_date_flex">
            <FaRegClock color="#ccc" size={15} />
            <p className="notif_card_date">24 Nov 2018 9:30 AM</p>
          </div>
          <p className="notif_card_head">
            Live Class Update for IELTS General Batch on 13th November 2023 &
            14th November 2023.
          </p>
        </div>
        <div className="notif_card_main">
          <div className="notif_card_date_flex">
            <FaRegClock color="#ccc" size={15} />
            <p className="notif_card_date">24 Nov 2018 9:30 AM</p>
          </div>
          <p className="notif_card_head">
            Live Class Update for IELTS General Batch on 13th November 2023 &
            14th November 2023.
          </p>
        </div>
        <div className="notif_card_main">
          <div className="notif_card_date_flex">
            <FaRegClock color="#ccc" size={15} />
            <p className="notif_card_date">24 Nov 2018 9:30 AM</p>
          </div>
          <p className="notif_card_head">
            Live Class Update for IELTS General Batch on 13th November 2023 &
            14th November 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
