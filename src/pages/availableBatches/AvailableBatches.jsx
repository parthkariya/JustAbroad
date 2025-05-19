import React, { useEffect, useState } from "react";
import "./AvailableBatches.css";
import { SelectedBatches } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  ACCEPT_HEADER,
  get_language,
  get_live_class_entry,
} from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";

const AvailableBatches = (item) => {
  const paramm = useParams();
  var slug = paramm.id;
  // console.log("item", item);

  const [getlist, SetList] = useState();
  const [loading, setloading] = useState(false);
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();

  useEffect(() => {
    Getlanguage();
    GetLivecLassEntry();
  }, []);

  const Getlanguage = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(get_language, {
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
            const obj = {
              id: 0,
              name: "All",
            };

            var dataa = obj;
            SetList([dataa, ...res.data.data]);
            setloading(false);
          }
        }
      })
      .catch((err) => {
        console.log("--->err", err);
        setloading(false);
      });
  };

  const [sublist, SetSublist] = useState([]);

  const GetLivecLassEntry = async (id) => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    const Courseid = await localStorage.getItem("courseid");

    const formdata = new FormData();
    formdata.append("course_id", JSON.parse(Courseid));
    formdata.append("id", slug);

    axios
      .post(get_live_class_entry, formdata, {
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
            console.log("ress", res.data.data);
            SetSublist(res.data.data);
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
    <>
      <div className="chooseLang_head">
        <h2 className="">Choose language</h2>
      </div>

      <div className="AvailableBatches_main">
        <div className="AvailableBatches_heading_main">
          <h5 style={{ textAlign: "center" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h5>
        </div>

        <SelectedBatches sublist={sublist} />
      </div>
    </>
  );
};

export default AvailableBatches;
{
  /* <div className="AvailableBatches_tab_main">
          <div
            className="AvailableBatches_tab_inner"
            onClick={() => {
              setTab(1);
            }}>
            All
          </div>
          <div className="AvailableBatches_tab_inner">Punjabi</div>
          <div className="AvailableBatches_tab_inner">Tamil</div>
          <div className="AvailableBatches_tab_inner">Hindi</div>
          <div className="AvailableBatches_tab_inner">English</div>
          <div className="AvailableBatches_tab_inner">Gujarati</div>
          <div className="AvailableBatches_tab_inner">Malayalam</div>
          <div className="AvailableBatches_tab_inner">Telugu</div>
        </div> */
}

// {
//   <div
//   style={{
//     background:
//       getLang === 2 ? "var(--color-brand)" : "var(--color-white)",
//     color:
//       getLang === 2 ? "var(--color-white)" : "var(--color-brand)",
//     cursor: "pointer",
//     padding: "0.5rem",
//   }}
//   className="AvailableBatches_tab_inner"
//   onClick={() => {
//     setLang(2);
//   }}>
//   Punjabi
// </div>
// <div
//   style={{
//     background:
//       getLang === 3 ? "var(--color-brand)" : "var(--color-white)",
//     color:
//       getLang === 3 ? "var(--color-white)" : "var(--color-brand)",
//     cursor: "pointer",
//     padding: "0.5rem",
//   }}
//   className="AvailableBatches_tab_inner"
//   onClick={() => {
//     setLang(3);
//   }}>
//   Tamil
// </div>
// <div
//   style={{
//     background:
//       getLang === 4 ? "var(--color-brand)" : "var(--color-white)",
//     color:
//       getLang === 4 ? "var(--color-white)" : "var(--color-brand)",
//     cursor: "pointer",
//     padding: "0.5rem",
//   }}
//   className="AvailableBatches_tab_inner"
//   onClick={() => {
//     setLang(4);
//   }}>
//   Hindi
// </div>
// <div
//   style={{
//     background:
//       getLang === 5 ? "var(--color-brand)" : "var(--color-white)",
//     color:
//       getLang === 5 ? "var(--color-white)" : "var(--color-brand)",
//     cursor: "pointer",
//     padding: "0.5rem",
//   }}
//   className="AvailableBatches_tab_inner"
//   onClick={() => {
//     setLang(5);
//   }}>
//   English
// </div>
// <div
//   style={{
//     background:
//       getLang === 6 ? "var(--color-brand)" : "var(--color-white)",
//     color:
//       getLang === 6 ? "var(--color-white)" : "var(--color-brand)",
//     cursor: "pointer",
//     padding: "0.5rem",
//   }}
//   className="AvailableBatches_tab_inner"
//   onClick={() => {
//     setLang(6);
//   }}>
//   Gujarati
// </div>
// <div
//   style={{
//     background:
//       getLang === 7 ? "var(--color-brand)" : "var(--color-white)",
//     color:
//       getLang === 7 ? "var(--color-white)" : "var(--color-brand)",
//     cursor: "pointer",
//     padding: "0.5rem",
//   }}
//   className="AvailableBatches_tab_inner"
//   onClick={() => {
//     setLang(7);
//   }}>
//   Malayalam
// </div>
// <div
//   style={{
//     background:
//       getLang === 8 ? "var(--color-brand)" : "var(--color-white)",
//     color:
//       getLang === 8 ? "var(--color-white)" : "var(--color-brand)",
//     cursor: "pointer",
//     padding: "0.5rem",
//   }}
//   className="AvailableBatches_tab_inner"
//   onClick={() => {
//     setLang(8);
//   }}>
//   Telugu
// </div>
// }
