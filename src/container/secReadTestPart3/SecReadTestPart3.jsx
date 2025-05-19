import React, { useState } from "react";
import "./SecReadTestPart3.css";

const SecReadTestPart3 = ({
  textInputRef29,
  textInputRef30,
  textInputRef31,
  textInputRef32,
  textInputRef33,
  textInputRef34,
  textInputRef35,
  textInputRef36,
  textInputRef37,
  textInputRef38,
  textInputRef39,
  textInputRef40,
  SetAns29,
  SetAns30,
  SetAns31,
  SetAns32,
  SetAns33,
  SetAns34,
  SetAns35,
  SetAns36,
  SetAns37,
  SetAns38,
  SetAns39,
  SetAns40,
  ans29,
  ans30,
  ans31,
  ans32,
  ans33,
  ans34,
  ans35,
  ans36,
  ans37,
  ans38,
  ans39,
  ans40,
}) => {
  const [mcq, setmcq] = useState([
    {
      id: 1,
      refn: textInputRef35,
      question: "35. Lee Marcel's Ravensong mentions that",
      options: [
        {
          opt: "Native Canadians were aware of the uses of herbs.",
        },
        {
          opt: "African natives chose not to use IV drips.",
        },
        {
          opt: "Native Australians live close to each other.",
        },
        {
          opt: "Natives were treated as an exotic race.",
        },
      ],
    },
    {
      id: 2,
      refn: textInputRef36,
      question: "36. Lee Marcel's Ravensong mentions that",
      options: [
        {
          opt: "The African people want to imitate the culture of the whites.",
        },
        {
          opt: "The people want a democratic government.",
        },
        {
          opt: "The invasion of the whites has destroyed old ways of life.",
        },
        {
          opt: "Native Africans are interested in conversions.",
        },
      ],
    },
  ]);
  const [expanded, setExpanded] = useState();

  return (
    <div className="SecReadTestPart1_main_top">
      <div className="SecReadTestPart1_main">
        <div>
          <h4>Section 3</h4>
        </div>
        <div>
          <p>Read and answer the questions Q.29-40</p>
        </div>
      </div>
      <div className="SecReadTestPart1_content_top">
        <div className="SecReadTestPart1_content1_main">
          <div>
            <div>
              <h6 className="que_no">Reading Passage 3</h6>
            </div>
            <div>
              <p>
                You should spend about 20 minutes on{" "}
                <span style={{ fontWeight: "600" }}>Questions 29-40,</span>{" "}
                which are based on Reading Passage 3 below.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
            }}>
            <div
              style={{
                display: "flex",
                fontWeight: "600",
                justifyContent: "center",
              }}>
              SHOULD THE ABORIGINALS BE LEFT ALONE?{" "}
            </div>
            <span>
              Aboriginal is a term used for people who are the original, native
              dwellers of a place. Later, due to the influx of other people or
              due to colonisation, we find a demarcation between these native
              residents and the newcomers. Canada is a very good example, for
              with the advent o the whites, the native Canadians were uprooted
              and became dwellers on the reservations.
            </span>
            <span>
              The problem most aboriginals face is that they have lost their
              voice in their own land. The negative press that colonisers have
              used as a means to spread their territory has adversely affected
              how people interpret the term aboriginal'. Defamation is a
              political game plan, and hence, the whites gave native Canadians
              alcohol. Unused to such intoxication and unaware of its
              repercussions, the people took this in good faith and
              unfortunately earned themselves the tagline "The drunken Indian'.
            </span>
            <span>
              However, now in the twentieth century, these people have found a
              voice in post-colonial literature. In the literature before this
              period, especially in the thriller genre of novels such as Robert
              Ludlum's The Cry of The Halidon, we find natives treated like some
              exotic race. They were different' and so resented. But now with
              cross-cultural studies gaining momentum, people are trying to
              build bridges of cultural relationships by displaying an
              understanding of and respect for different cultures.
            </span>
            <span>
              The advantages of bringing aboriginals into the mainstream are
              noteworthy. The world will stand to gain from the knowledge that
              the aboriginals can share. They are experts of the regions they
              belong to. In Lee Marcel's novel Ravensong', the reader is made
              aware that the native Canadians have traditional knowledge of
              herbs and their uses. Furthermore, their close-knit community and
              respect for elders are lessons the world can well try to emulate.
              The aboriginals too shall be benefited as merging into society
              provides access to technology. In the same novel, the author
              recalls a viral illness that left even the medicine man clueless
              about any solution at all. The people did not even know there was
              such a system as an IV drip and spent entire nights holding water
              droppers over the mouths of the ill.
            </span>
            <span>
              If there are such advantages, why are aboriginals afraid of
              contact with the world? In Achebe's novel 'Things Fall Apart, the
              author explains how things literally fell apart in Africa with the
              advent of the whites. Aboriginals have been forced not only to
              share their land but also to convert to Christianity. Their unique
              culture and traditions seem to be looked down upon. Also, there is
              an increase in crime and negative publicity. Therefore, is it
              surprising that the aboriginals have at times pleaded to be left
              alone? A lot of this also has to do with attitudes that people
              have retained towards aboriginals. Even teachers have held
              mindsets about such students as less disciplined and even less
              intelligent than their peers. Such discrimination would obviously
              not sit well with any community.
            </span>
            <span>
              We are all fiercely protective of our culture and traditions.
              Perhaps we are not yet ready for the wide-scale impact of
              globalisation that takes us not only across boundaries but also
              across cultures. It may not be possible to leave aboriginals
              isolated, but we can definitely respect their sense of
              exclusiveness. Our world is highly diverse but, in the end, we are
              all human beings. Hence, it would be better if we do nothing else
              but merely remember the policy of "live and let live."
            </span>
          </div>
        </div>
        <div className="SecReadTestPart1_content2_main">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}>
            <div>
              <div>
                <h6 className="que_heading">Questions. 29-34</h6>
              </div>{" "}
              <div>
                <i style={{ fontStyle: "italic" }}>
                  Choose <span style={{ fontWeight: "600" }}> YES </span>
                  if the statement agrees with the claims of the writer of the
                  passage, choose{" "}
                  <span style={{ fontWeight: "600" }}> NO </span> if the
                  statement contradicts the claims of the writer, or choose{" "}
                  <span style={{ fontWeight: "600" }}> NOT GIVEN </span> if it
                  is impossible to say what the writer thinks about this.
                </i>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}>
              <span style={{ display: "flex" }}>
                <span
                  ref={textInputRef29}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  29. &nbsp;
                </span>
                <span>
                  Native Canadians were deported from their land by the
                  whites.&nbsp;
                  <span>
                    <select name="" id="">
                      <option
                        onChange={(e) => {
                          SetAns29(e.target.value);
                        }}
                        selected
                        disabled
                        value="">
                        Select
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not Given">Not Given</option>
                    </select>
                  </span>{" "}
                </span>
              </span>{" "}
              <span style={{ display: "flex" }}>
                <span
                  ref={textInputRef30}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  30. &nbsp;
                </span>
                <span>
                  People now are more positive towards the term
                  aboriginal.&nbsp;
                  <span>
                    <select name="" id="">
                      <option
                        onChange={(e) => {
                          SetAns30(e.target.value);
                        }}
                        selected
                        disabled
                        value="">
                        Select
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not Given">Not Given</option>
                    </select>
                  </span>{" "}
                </span>
              </span>{" "}
              <span style={{ display: "flex" }}>
                <span
                  ref={textInputRef31}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  31. &nbsp;
                </span>
                <span>
                  Native people of Africa were ready for conversions.{" "}
                  <span>
                    <select name="" id="">
                      <option
                        onChange={(e) => {
                          SetAns31(e.target.value);
                        }}
                        selected
                        disabled
                        value="">
                        Select
                      </option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="Not Given">Not Given</option>
                    </select>
                  </span>{" "}
                </span>
              </span>{" "}
              <span style={{ display: "flex" }}>
                <span
                  ref={textInputRef32}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  32. &nbsp;
                </span>
                <span style={{ display: "flex" }}>
                  <span>
                    Mistrust due to past negative encounters has led aboriginals
                    to prefer seclusion from society.{"  "}
                    <span>
                      <select name="" id="">
                        <option
                          onChange={(e) => {
                            SetAns32(e.target.value);
                          }}
                          selected
                          disabled
                          value="">
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not Given">Not Given</option>
                      </select>
                    </span>{" "}
                  </span>
                </span>
              </span>{" "}
              <span style={{ display: "flex" }}>
                <span
                  ref={textInputRef33}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  33. &nbsp;
                </span>
                <span style={{ display: "flex" }}>
                  <span>
                    Aboriginals were supposed to be underachievers.{"  "}
                    <span>
                      <select name="" id="">
                        <option
                          onChange={(e) => {
                            SetAns33(e.target.value);
                          }}
                          selected
                          disabled
                          value="">
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not Given">Not Given</option>
                      </select>
                    </span>{" "}
                  </span>
                </span>
              </span>{" "}
              <span style={{ display: "flex" }}>
                <span
                  ref={textInputRef34}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  34. &nbsp;
                </span>
                <span style={{ display: "flex" }}>
                  <span>
                    Globalisation is not merely about surpassing national
                    boundaries.{" "}
                    <span>
                      <select name="" id="">
                        <option
                          onChange={(e) => {
                            SetAns34(e.target.value);
                          }}
                          selected
                          disabled
                          value="">
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="Not Given">Not Given</option>
                      </select>
                    </span>{" "}
                  </span>
                </span>
              </span>{" "}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}>
            <div>
              <div>
                <h6 className="que_heading">Questions. 35-36</h6>
              </div>{" "}
              <div>
                <i style={{ fontStyle: "italic" }}>
                  Choose the correct answer.{" "}
                </i>
              </div>
            </div>
            <div className="test_accordian_main" style={{ marginTop: "0px" }}>
              {mcq.map((item, index) => (
                <div
                  ref={item.refn}
                  tabIndex={-1}
                  key={item.id}
                  className="test_accordian_inner"
                  onClick={() => {
                    setExpanded(index);
                  }}>
                  <div className="test-questions">
                    <div className="">
                      <p style={{ marginBottom: "0px" }}>{item.question}</p>
                    </div>
                  </div>
                  <div
                    className={`test-answer ${
                      expanded === index
                        ? "visible"
                        : "hidden test-answer_margin_not"
                    }`}>
                    {item.options.map((item1) => {
                      return (
                        <>
                          <div>
                            <label className="radio_styling">
                              <input
                                type="radio"
                                name="react-tips"
                                value={item1.opt}
                                className=""
                                onChange={(e) => {
                                  // eslint-disable-next-line no-unused-expressions
                                  index == 0
                                    ? SetAns35(e.target.value)
                                    : index === 1
                                    ? SetAns36(e.target.value)
                                    : null;
                                }}
                              />
                              {item1.opt}
                            </label>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}>
            <div>
              <div>
                <h6 className="que_heading">Questions. 37-40</h6>
              </div>{" "}
              <div>
                <span style={{ fontStyle: "italic" }}>
                  Write <span className="que_no">FOUR</span> correct letters{" "}
                  <span className="que_no">(A - H).</span>{" "}
                  <span>
                    The list below contains some possible reasons as to why
                    aboriginals prefer to be left alone.
                  </span>
                  <span>
                    Which <span className="que_no">FOUR</span> of these reasons
                    are mentioned by the writer in the passage?
                  </span>
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>
                <span className="que_no">A</span> They were labelled as
                'drunken'
              </span>
              <span>
                <span className="que_no">B</span> Their lands were destroved.
              </span>
              <span>
                <span className="que_no">C</span> They fear being interpreted as
                notorious.
              </span>
              <span>
                <span className="que_no">D</span> They are forced to convert.
              </span>
              <span>
                <span className="que_no">E</span> They think their elders will
                not be respected.
              </span>
              <span>
                <span className="que_no">F</span> Their culture and traditions
                are not respected.
              </span>
              <span>
                <span className="que_no">G</span> They were forced to work as
                slaves.
              </span>
              <span>
                <span className="que_no">H</span> They have been considered
                inferior.
              </span>
            </div>
            <div>
              <span style={{ fontWeight: "600" }}>37. &nbsp;</span>
              <input
                ref={textInputRef37}
                type="text"
                value={ans37}
                className="secTestPart1_input_inner"
                onChange={(e) => {
                  SetAns37(e.target.value);
                }}
              />{" "}
            </div>
            <div>
              <span style={{ fontWeight: "600" }}>38. &nbsp;</span>
              <input
                value={ans38}
                ref={textInputRef38}
                type="text"
                className="secTestPart1_input_inner"
                onChange={(e) => {
                  SetAns38(e.target.value);
                }}
              />{" "}
            </div>
            <div>
              <span style={{ fontWeight: "600" }}>39. &nbsp;</span>
              <input
                value={ans39}
                ref={textInputRef39}
                type="text"
                className="secTestPart1_input_inner"
                onChange={(e) => {
                  SetAns39(e.target.value);
                }}
              />{" "}
            </div>
            <div>
              <span style={{ fontWeight: "600" }}>40. &nbsp;</span>
              <input
                ref={textInputRef40}
                type="text"
                value={ans40}
                className="secTestPart1_input_inner"
                onChange={(e) => {
                  SetAns40(e.target.value);
                }}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecReadTestPart3;
