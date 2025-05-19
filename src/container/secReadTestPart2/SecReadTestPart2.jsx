import React, { useState } from "react";
import "./SecReadTestPart2.css";

const SecReadTestPart2 = ({
  textInputRef16,
  textInputRef17,
  textInputRef18,
  textInputRef19,
  textInputRef20,
  textInputRef21,
  textInputRef22,
  textInputRef23,
  textInputRef24,
  textInputRef25,
  textInputRef26,
  textInputRef27,
  textInputRef28,
  SetAns16,
  SetAns17,
  SetAns18,
  SetAns19,
  SetAns20,
  SetAns21,
  SetAns22,
  SetAns23,
  SetAns24,
  SetAns25,
  SetAns26,
  SetAns27,
  SetAns28,
  // ans16,
  // ans17,
  // ans18,
  // ans19,
  // ans20,
  // ans21,
  // ans22,
  // ans23,
  // ans24,
  // ans25,
  // ans27,
  // ans28,
}) => {
  // eslint-disable-next-line no-unused-vars
  const DATA = [
    {
      id: 1,
      qesid: "16.",
      refn: textInputRef16,
      qes: "a reference to ailments causing a rise in the mortality rate",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
    {
      id: 2,
      qesid: "17.",
      refn: textInputRef17,
      qes: "an insight into factors affecting general public health",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
    {
      id: 3,
      qesid: "18.",
      refn: textInputRef18,
      qes: "an explanation of how diseases spread from one country to another",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
    {
      id: 4,
      qesid: "19.",
      refn: textInputRef19,
      qes: "the need to develop unorthodox medications to prevent diseases",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
    {
      id: 5,
      qesid: "20.",
      refn: textInputRef20,
      qes: "the need to consider healthcare as a global issue",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
    {
      id: 6,
      qesid: "21.",
      refn: textInputRef21,
      qes: "the importance of precautionary steps toward improved health",
      ans: [
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
        { id: 4, name: "D" },
        { id: 5, name: "E" },
        { id: 6, name: "F" },
        { id: 7, name: "G" },
      ],
    },
  ];

  const [mcq, setmcq] = useState([
    {
      id: 1,
      refn: textInputRef28,
      question: "28. The author's purpose in writing this article is to",
      options: [
        {
          opt: "eradicate non-communicable diseases in order to maintain general health care.",
        },
        {
          opt: "criticize current health care facilities provided by the government.",
        },
        {
          opt: "inform about factors relevant to health care.",
        },
        {
          opt: "spread the message of health as a basic human right.",
        },
      ],
    },
  ]);
  const [expanded, setExpanded] = useState();

  const [selectedBoxes, setSelectedBoxes] = useState([]);

  const handleBoxClick = (rowIndex, boxIndex) => {
    const newSelectedBoxes = [...selectedBoxes];
    newSelectedBoxes[rowIndex] = boxIndex;
    setSelectedBoxes(newSelectedBoxes);
  };

  return (
    <div className="SecReadTestPart1_main_top">
      <div className="SecReadTestPart1_main">
        <div>
          <h4>Section 2</h4>
        </div>
        <div>
          <p>Read and answer the questions Q.16-28</p>
        </div>
      </div>
      <div className="SecReadTestPart1_content_top">
        <div className="SecReadTestPart1_content1_main">
          <div>
            <div>
              <h6 className="que_no">Reading Passage 2</h6>
            </div>
            <div>
              <p>
                You should spend about 20 minutes on{" "}
                <span style={{ fontWeight: "600" }}>Questions 16-28,</span>{" "}
                which are based on Reading Passage 2 below.
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
              HEALTHCARE
            </div>
            <span>
              <span style={{ fontWeight: "600" }}>A</span> National boundaries
              are slowly eroding with advances in technology and the ease with
              which we travel. But while we can laud the progress we have made,
              technology has its downfalls, especially where healthcare is
              concerned. Infectious and life-threatening maladies that are
              common in developing countries where a major part of the
              population lives below the poverty line can now turn into a global
              nightmare. While developing nations struggle to provide healthcare
              to the teeming populations, rich nations have their own problems
              concerning basic medical care. Globally, 6% of the people do not
              have access to basic healthcare services.
            </span>
            <span>
              <span style={{ fontWeight: "600" }}>B</span> Associate Dean for
              Global Health Programs at the University of Pennsylvania School of
              Medicine, Neal Nathanson believes that there are three main issues
              to be considered when we talk about the challenges of global
              healthcare. The first is basic problems such as pollution,
              strained resources and overpopulation. Lack of basic necessities
              such as food, water and fresh air creates health issues, he says.
              The second issue, he opines, is economies. Poverty, according to
              the World Bank, is a ruling factor in global health. With over 1.4
              billion people living below the poverty line, healthcare is not at
              its optimal with miniscule health budgets. Social development is
              the third issue to be considered, says Neal. Concerns that are
              non-economic in nature, such as women's rights and literacy can
              become the foundation for health care systems even if funds are
              limited. With social development, a lot can be achieved. Factors
              that help people lead a healthy life include safe drinking water,
              sanitation, healthy food, adequate nutrition, decent housing,
              environmentally sound working conditions and information on
              health-related subjects.
            </span>
            <span>
              <span style={{ fontWeight: "600" }}>C</span> For a patient, the
              first point of contact with a health professional is a primary
              health-care centre. Family doctors, practitioners, pharmacists,
              dentists and midwives fall under this category. Primary care
              addresses preventive measures, and early diagnosis is possible at
              this stage, thus bypassing the need for expensive hospitals that
              may not be within the patient's reach. In primary care, the
              relationship develops into a personal connection with the patient.
              Not only that, it has an outreach to the community at large for
              the promotion of good health and preventive strategies. It is also
              very cost-effective. With better utilization of existing
              preventive measures, the global burden of disease can be reduced
              by around 70%, says the World Health Organization.
            </span>
            <span>
              <span style={{ fontWeight: "600" }}>D</span> Development and
              progress have led to unhealthy lifestyles. Add to that an ageing
              population and rapid urbanization that is by and large unplanned,
              and you find ailments such as diabetes, cancer, asthma and heart
              disease is rising at an alarming rate. With primary health care,
              these issues can be addressed at the root level.
            </span>
            <span>
              <span style={{ fontWeight: "600" }}>E</span> It is no longer
              feasible to relate healthcare with a particular country in
              isolation. With globalization and shrinking boundaries,
              international travel and commerce have increased which aid in the
              spread of deadly viruses and infectious diseases across the
              borders. Developed nations ought to address this alarming rise in
              diseases by promoting health in developing countries and
              preventing the international spread of disease. Serious public
              health threats have to be recognized and addressed in a timely
              fashion.
            </span>
            <span>
              <span style={{ fontWeight: "600" }}>F</span> Death rates from
              noncommunicable medical conditions are growing. At the same time,
              as compared to the past, the death rate due to infectious diseases
              like tuberculosis. malaria and other infectious diseases is
              decreasing. Developing countries have a dual role to play. While
              they should continue preventive measures against infectious
              diseases, they must also address issues of noncommunicable
              diseases and environmental damage that pose health risks. With
              improving socio-economic conditions in developing countries. the
              need to take a closer look at substance abuse and mental health is
              also of utmost importance
            </span>
            <span>
              <span style={{ fontWeight: "600" }}>G</span> Healthcare is a human
              right. For a better and healthier future, governments and
              businesses must devise measures to promote innovative breakthrough
              remedies not only to cure diseases but also to improve
              infrastructure for better healthcare delivery.
            </span>
          </div>
        </div>
        <div className="SecReadTestPart1_content2_main">
          <div>
            <div>
              <div>
                <h6 className="que_heading">Questions. 16-21</h6>
              </div>{" "}
              <div>
                <i style={{ fontStyle: "italic" }}>
                  Reading Passage 2 has seven paragraphs{" "}
                  <span style={{ fontWeight: "600" }}> (A - G). </span>Which
                  paragraph contains the following information? You may use any
                  letter more than once.
                </i>
              </div>
            </div>
            <div className="secread_overflow">
              <div style={{ width: "600px" }}>
                <div
                  style={{
                    display: "flex",
                    border: "2px solid",
                    justifyContent: "space-between",
                  }}>
                  <div style={{ minWidth: "198px" }}></div>
                  <div className="secReadingBox_Choose_inner remove_border_right remove_underline  remove_topline">
                    A
                  </div>
                  <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                    B
                  </div>
                  <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                    C
                  </div>
                  <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                    D
                  </div>
                  <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                    E
                  </div>
                  <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                    F
                  </div>
                  <div className="secReadingBox_Choose_inner remove_border_right remove_underline remove_topline">
                    G
                  </div>
                </div>
                {DATA && DATA.length > 0
                  ? DATA.map((item, rowIndex) => {
                      return (
                        <div
                          ref={item.refn}
                          tabIndex={-1}
                          key={rowIndex}
                          style={{
                            display: "flex",
                            border: "2px solid",
                            borderTop: "none",
                            justifyContent: "space-between",
                          }}>
                          <label
                            style={{ minWidth: "198px" }}
                            className="remove_underline  remove_topline">
                            <span
                              className="que_no"
                              style={{ minWidth: "198px" }}>
                              {item.qesid}
                            </span>{" "}
                            {item.qes}
                          </label>
                          {item.ans.map((itm, boxIndex) => {
                            return (
                              <div
                                key={boxIndex}
                                onClick={() => {
                                  handleBoxClick(rowIndex, boxIndex);
                                  // eslint-disable-next-line no-unused-expressions
                                  rowIndex === 0
                                    ? SetAns16(itm.id)
                                    : rowIndex === 1
                                    ? SetAns17(itm.id)
                                    : rowIndex === 2
                                    ? SetAns18(itm.id)
                                    : rowIndex === 3
                                    ? SetAns19(itm.id)
                                    : rowIndex === 4
                                    ? SetAns20(itm.id)
                                    : rowIndex === 5
                                    ? SetAns21(itm.id)
                                    : null;
                                }}
                                style={{
                                  border: "2px solid",
                                  width: "100%",
                                  backgroundColor:
                                    selectedBoxes[rowIndex] === boxIndex
                                      ? "lightblue"
                                      : "white",
                                }}
                                className="remove_border_right remove_underline  remove_topline"></div>
                            );
                          })}
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div>
              <div>
                <h6 className="que_heading">Questions. 22-27</h6>
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
                  ref={textInputRef22}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  22. &nbsp;
                </span>
                <span style={{ display: "flex" }}>
                  <span>
                    Health care issues are not restricted to economically weak
                    nations.&nbsp;
                    <span>
                      <select name="" id="">
                        <option
                          onChange={(e) => {
                            SetAns22(e.target.value);
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
                  ref={textInputRef23}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  23. &nbsp;
                </span>
                <span style={{ display: "flex" }}>
                  <span>
                    {" "}
                    Few people have access to basic healthcare facilities
                    worldwide.&nbsp;
                    <form>
                      <select name="" id="">
                        <option
                          onChange={(e) => {
                            SetAns23(e.target.value);
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
                    </form>{" "}
                  </span>
                </span>
              </span>{" "}
              <span style={{ display: "flex" }}>
                <span
                  ref={textInputRef24}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  24. &nbsp;
                </span>
                <span style={{ display: "flex" }}>
                  <span>
                    {" "}
                    Poverty is the second important factor that affects
                    healthcare.&nbsp;
                    <form>
                      <select name="" id="">
                        <option
                          onChange={(e) => {
                            SetAns24(e.target.value);
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
                    </form>{" "}
                  </span>
                </span>
              </span>{" "}
              <span style={{ display: "flex" }}>
                <span
                  ref={textInputRef25}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  25. &nbsp;
                </span>
                <span style={{ display: "flex" }}>
                  <span>
                    {" "}
                    Expensive hospitals are needed if primary care is not
                    available.&nbsp;
                    <form>
                      <select name="" id="">
                        <option
                          onChange={(e) => {
                            SetAns25(e.target.value);
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
                    </form>{" "}
                  </span>
                </span>
              </span>{" "}
              <span style={{ display: "flex" }}>
                <span
                  ref={textInputRef26}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  26. &nbsp;
                </span>
                <span style={{ display: "flex" }}>
                  <span>
                    Proper primary care can help to eradicate several diseases
                    such as diabetes, cancer and asthma.&nbsp;
                    <span>
                      <select name="" id="">
                        <option
                          onChange={(e) => {
                            SetAns26(e.target.value);
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
                  ref={textInputRef27}
                  tabIndex={-1}
                  style={{ fontWeight: "600" }}>
                  27. &nbsp;
                </span>
                <span style={{ display: "flex" }}>
                  <span>
                    It is inappropriate to consider health care solely as a
                    national issue.&nbsp;
                    <span>
                      <select name="" id="">
                        <option
                          onChange={(e) => {
                            SetAns27(e.target.value);
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
          <div>
            <div>
              <div>
                <h6 className="que_heading">Questions. 28</h6>
              </div>{" "}
              <div>
                <i style={{ fontStyle: "italic" }}>
                  Choose the correct answer.
                </i>
              </div>
            </div>
            <div className="test_accordian_main">
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
                                  SetAns28(e.target.value);
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
        </div>
      </div>
    </div>
  );
};

export default SecReadTestPart2;
