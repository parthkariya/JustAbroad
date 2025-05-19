import React, { useEffect, useState } from "react";
import "./Profile.css";
import images from "../../constants/images";
import { HiPencilAlt } from "react-icons/hi";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import {
  ACCEPT_HEADER,
  check_password,
  get_profile,
  update_profile,
} from "../../utils/Constant";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth_context";
import Notification from "../../utils/Notification";
import { Helmet } from "react-helmet";

const DATA = [
  { id: 1, name: "English" },
  { id: 2, name: "Hindi" },
  { id: 3, name: "Gujarati" },
  { id: 4, name: "Punjabi" },
];

const Profile = () => {
  const [getTab, setTab] = useState(1);

  const { SetLogout } = useAuthContext();
  let navigate = useNavigate();
  const [username, SetUserName] = useState("");
  const [useremail, SetUserEmail] = useState("");
  const [usercontact, SetUserContact] = useState("");
  const [userlocation, SetUserLocation] = useState("");
  const [userlanguage, SetUserLanguage] = useState("");
  const [load, SetLoad] = useState(false);
  const [getimge, SetImge] = useState("");
  const [getpassword, SetPassword] = useState("");
  const [getCpassword, SetCpassword] = useState("");
  const [files, setFiles] = useState([]);
  const [getPass, setPass] = useState([]);
  const [getShowNewPassBlock, setShowNewPassBlock] = useState(false);

  useEffect(() => {
    GetProfile();
  }, []);

  const SubmitOldPass = async () => {
    if (getPass === "") {
      Notification("error", "Error", "Please enter your old password!!");
    } else {
      const Token = await localStorage.getItem("is_token");
      const formdata = new FormData();
      formdata.append("old_password", getPass);

      axios
        .post(check_password, formdata, {
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
            // console.log("resss", JSON.stringify(res.data, null, 2));
            if (res.data.success == 1) {
              Notification("success", "Success!", res.data.message);
              setShowNewPassBlock(true);
            } else {
              Notification("error", "Error!", res.data.message);
              setShowNewPassBlock(false);
            }
          }
        })
        .catch((err) => {
          console.log("err-->", err);
        });
    }
  };

  const GetProfile = async () => {
    SetLoad(true);
    const Token = await localStorage.getItem("is_token");

    axios
      .get(get_profile, {
        headers: {
          Accept: ACCEPT_HEADER,
          Authorization: "Bearer " + JSON.parse(Token),
        },
      })
      .then((res) => {
        if (res.data.status === "Token is Expired") {
          SetLogout();
          navigate("/");
          SetLoad(false);
        } else {
          if (res.data.success == 1) {
            SetUserName(res.data.data.name);
            SetUserEmail(res.data.data.email);
            SetUserContact(res.data.data.number);
            SetUserLocation(res.data.data.location);
            SetUserLanguage(res.data.data.language_id);
            SetImge(res.data.data.image_full_path);
            SetLoad(false);
          }
        }
      })
      .catch((err) => {
        console.log("err-->", err);
        SetLoad(false);
      });
  };

  const UpdateProfile = async () => {
    const Token = await localStorage.getItem("is_token");

    const formdata = new FormData();
    formdata.append("name", username);
    formdata.append("email", useremail);
    formdata.append("number", usercontact);
    formdata.append("location", userlocation);
    formdata.append("language_id", userlanguage);

    axios
      .post(update_profile, formdata, {
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
          if (res.data.success === 1) {
            setTab(1);
            GetProfile();
            // Notification("error", "Error", "Please Selct Mall");
            Notification("success", "Success!", res.data.message);
          }
        }
      })
      .catch((err) => {
        console.log("err-->", err);
      });
  };

  const PasswordUpdate = async () => {
    if (getpassword !== getCpassword) {
      Notification("error", "Error", "not match..!!");
    } else {
      const Token = await localStorage.getItem("is_token");
      const formdata = new FormData();
      formdata.append("name", username);
      formdata.append("email", useremail);
      formdata.append("number", usercontact);
      formdata.append("location", userlocation);
      formdata.append("language_id", userlanguage);
      formdata.append("password", getpassword);

      axios
        .post(update_profile, formdata, {
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
            if (res.data.success === 1) {
              Notification("success", "Success!", res.data.message);
              setTab(1);
              GetProfile();
            }
          }
        })
        .catch((err) => {
          console.log("err-->", err);
        });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
        handleFileChange(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
      if (acceptedFiles.length === 0) {
        window.location.reload(true);
      }
    },
  });

  const thumbs = files.map((file) => (
    <img
      src={file.preview}
      style={{ width: "100%", height: "100%", borderRadius: "50%" }}
      className="img-fluid"
      alt="file"
    />
  ));

  const handleFileChange = async (mmm) => {
    const Token = await localStorage.getItem("is_token");
    const formdata = new FormData();
    formdata.append("name", username);
    formdata.append("email", useremail);
    formdata.append("number", usercontact);
    formdata.append("location", userlocation);
    formdata.append("language_id", userlanguage);
    formdata.append("image", mmm[0]);
    axios
      .post(update_profile, formdata, {
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
          if (res.data.success === 1) {
            Notification("success", "Success!", res.data.message);
            setTab(1);
            GetProfile();
          }
        }
      })
      .catch((err) => {
        console.log("err-->", err);
      });
  };

  return (
    <>
      <Helmet>

        <title>Just Abroad | Profile</title>

      </Helmet>
      <div className="Profile_head_main">
        <h2>Profile & Settings</h2>
      </div>
      <div className="Profile_main">
        <div className="Profile_tabs_top_main">
          <div className="Profile_tabs_main">
            <div
              className="btn btn_lessons"
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
              <h6>Personal Profile</h6>
            </div>
            <div
              className="btn btn_lessons"
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
              <h6>Profile Info</h6>
            </div>
            <div
              className="btn btn_lessons"
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
              <h6>Security</h6>
            </div>
          </div>
          {/* <div className="underline_profilepage"></div> */}
          <div className="underline" style={{ width: "100%" }}></div>
        </div>
        {load === true ? (
          <>
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
          </>
        ) : (
          <>
            {getTab === 1 ? (
              <div className="profile_form_main">
                <div>
                  <div>
                    <label className="que_no">Name ID</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="profile_input_inner"
                      value={username}
                      onChange={(e) => {
                        SetUserName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="que_no">Email</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your E-mail"
                      className="profile_input_inner"
                      value={useremail}
                      onChange={(e) => {
                        SetUserEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="que_no">Contact</label>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Your Contact no."
                      className="profile_input_inner"
                      value={usercontact}
                      onChange={(e) => {
                        SetUserContact(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="que_no">Location</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Your Contact no."
                      className="profile_input_inner"
                      value={userlocation}
                      onChange={(e) => {
                        SetUserLocation(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}>
                  <span className="que_no">Preferred Language</span>
                  <select
                    className=""
                    name="position"
                    id="lang"
                    style={{ padding: "0.5rem", cursor: "pointer" }}
                    value={userlanguage}
                    onChange={(e) => {
                      SetUserLanguage(e.target.value);
                    }}>
                    <option selected disabled>
                      Select Language
                    </option>
                    {DATA.map((item, index) => {
                      return <option value={item.id}>{item.name}</option>;
                    })}
                    {/* <option>English</option>
              <option value="Manager">Hindi</option>
              <option value="Director">Gujarati</option>
              <option value="CEO">Punjabi</option> */}
                  </select>
                </div>

                <div style={{ padding: "2rem 0", alignSelf: "center" }}>
                  <button
                    className="btn"
                    style={{ width: "100px" }}
                    onClick={() => {
                      UpdateProfile();
                    }}>
                    Save
                  </button>
                </div>
              </div>
            ) : getTab === 2 ? (
              <div className="user_image_upload_block_top">
                <div className="user_image_upload_block_main">
                  <div>
                    <h5 className="que_no">Image preview</h5>
                    <p>
                      Minimum <span className="que_no"> 200x200</span> pixels,
                      Maximum <span className="que_no">6000x6000</span> pixels.
                    </p>
                  </div>
                  {files && files.length > 0 ? (
                    <div
                      className="user_image_upload_main"
                      style={{
                        width: "220px",
                        height: "220px",
                      }}>
                      <div
                        {...getRootProps({ className: "dropzone" })}
                        style={{
                          // height: "200px",
                          width: "200px",
                          position: "relative",
                        }}>
                        {thumbs}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="user_image_upload_main"
                      {...getRootProps({ className: "dropzone" })}>
                      <div
                        style={{
                          height: "200px",
                          width: "200px",
                          position: "relative",
                          cursor: "pointer",
                        }}>
                        <img
                          src={getimge ? getimge : images.user_profile}
                          alt="user_profile"
                          style={{ height: "100%", width: "100%" }}
                        />

                        <div className="profile_pencil_align">
                          <input
                            {...getInputProps()}
                            accept="image/jpeg, image/jpg, image/png, image/eps"
                            type="file"
                            name="photos"
                          />
                          <label
                            htmlFor="icon-button-file"
                            style={{ display: "flex", cursor: "pointer" }}>
                            <HiPencilAlt
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="user_image_upload_block_main2">
                  <div className="que_no" style={{ fontSize: "18px" }}>
                    Enrolled Products
                  </div>
                  <div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>
                        Regular - IELTS Academic (Tests Pack + Live Class) (W/O)
                        (180 Days)
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>
                        Regular - IELTS General (Tests Pack + Live Class) (W/O)
                        (180 Days)
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>Duo Lingo Lite + (W/O)</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>French A1</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>French Basic (Evening - 05:45 PM to 06:45 PM)</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>GRE - W/O +</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>PTE Tests - W/O+</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>LEO A1/A2 (Spoken English)</div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <div>•</div>
                      <div>Course - Digital SAT (Mock Test + Live class)</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : getTab === 3 ? (
              <div className="security_block_main">
                {getShowNewPassBlock === false ? (
                  <div>
                    <div>
                      <label className="que_no">Old Password</label>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Your Old Password"
                        className="profile_input_inner"
                        value={getPass}
                        onChange={(e) => {
                          setPass(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                ) : null}
                {getShowNewPassBlock === true ? (
                  <div>
                    <div>
                      <div>
                        <label className="que_no">New Password</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Your New Password"
                          className="profile_input_inner"
                          value={getpassword}
                          onChange={(e) => {
                            SetPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <label className="que_no">Verify Password</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Verify Your Password"
                          className="profile_input_inner"
                          value={getCpassword}
                          onChange={(e) => {
                            SetCpassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div style={{ padding: "2rem 0", alignSelf: "center" }}>
                      <button
                        className="btn"
                        style={{ width: "250px" }}
                        onClick={() => {
                          PasswordUpdate();
                        }}>
                        Change Password
                      </button>
                    </div>
                  </div>
                ) : null}
                {getShowNewPassBlock === false ? (
                  <>
                    <div style={{ padding: "2rem 0", alignSelf: "center" }}>
                      <button
                        className="btn"
                        style={{ width: "250px" }}
                        onClick={() => {
                          SubmitOldPass();
                        }}>
                        Submit
                      </button>
                    </div>
                  </>
                ) : null}
              </div>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
