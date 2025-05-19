import React, { useEffect, useState } from "react";
import "./SwitchCourse.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ACCEPT_HEADER, get_course } from "../../utils/Constant";
import { useAuthContext } from "../../context/auth_context";
import { Helmet } from "react-helmet";

const SwitchCourse = () => {
  const [getlist, SetList] = useState([]);
  const [loading, setloading] = useState(false);
  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();
  const [getUserName, SetUserNamae] = useState("");
  const reloadCount = Number(sessionStorage.getItem("reloadCount")) || 0;

  useEffect(() => {
    const UserName = localStorage.getItem("user_name");
    SetUserNamae(JSON.parse(UserName));
    GetCourse();
    if (reloadCount < 2) {
      sessionStorage.setItem("reloadCount", String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem("reloadCount");
    }
  }, []);

  const GetCourse = async () => {
    setloading(true);
    const Token = await localStorage.getItem("is_token");
    axios
      .get(get_course, {
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
            SetList(res.data.data);
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
      <Helmet>

        <title>Just Abroad | Switch Course</title>

      </Helmet>
      <div className="switch_main">
        {loading === true ? (
          <div
            style={{
              width: "100%",
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <div className="loader"></div>
          </div>
        ) : (
          <div className="switch_con">
            <p className="switch_pro_name">Hi {getUserName} !</p>

            <p className="switch_pro_sub_name">
              Welcome to JUST ABROAD An adaptive learning platform
            </p>

            <p className="switch_pro_sub_txt">
              What Would you like to learn now ?
            </p>

            <>
              {getlist && getlist.length > 0
                ? getlist.map((item, index) => {
                  return (
                    <Link
                      to="/Dashboard"
                      onClick={() => {
                        localStorage.setItem(
                          "courseid",
                          JSON.stringify(item.id)
                        );
                      }}
                      className="btn switch_btn">
                      {item.name}
                    </Link>
                  );
                })
                : null}
            </>
          </div>
        )}
      </div>
    </>
  );
};

export default SwitchCourse;
