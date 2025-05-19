import React, { useState } from "react";
import { Link } from "react-router-dom";

const PteMockTest2 = () => {
  const [getIntro, setIntro] = useState(0);

  return (
    <div>
      <span className="que_no PteMockTest1_head">PTE - Portal Mock Test 7</span>
      <div className="blue_nav"></div>
      {/* <PteIntro /> */}
      <div className="PteIntro_main">
        {getIntro === 0 ? (
          <>
            <div className="PteIntro_table_main">
              <div className="PteIntro_table_inner_top">
                <div
                  className="PteIntro_table_inner que_no"
                  style={{ background: "#bbd7eb", justifyContent: "center" }}>
                  Part 1 speaking and writing
                </div>
                <div
                  className="PteIntro_table_inner que_no"
                  style={{ background: "#bbd7eb", justifyContent: "center" }}>
                  Part 2 - Reading
                </div>
                <div
                  className="PteIntro_table_inner que_no"
                  style={{ background: "#bbd7eb", justifyContent: "center" }}>
                  Part 3 - Listening
                </div>
              </div>
              <div className="PteIntro_table_inner_top">
                <div className="PteIntro_table_inner">Read Aloud</div>
                <div className="PteIntro_table_inner">
                  Reading and Writing - Fill in the blanks
                </div>
                <div className="PteIntro_table_inner">
                  summarize spoken test{" "}
                </div>
              </div>
              <div className="PteIntro_table_inner_top">
                <div className="PteIntro_table_inner">Read Sentence</div>
                <div className="PteIntro_table_inner">
                  Multiple choice, choose multiple answers
                </div>
                <div className="PteIntro_table_inner">
                  Multiple choice, choose multiple answer{" "}
                </div>
              </div>
              <div className="PteIntro_table_inner_top">
                <div className="PteIntro_table_inner">Describe image</div>
                <div className="PteIntro_table_inner">Re-order paragraphs</div>
                <div className="PteIntro_table_inner">Fill in the blanks</div>
              </div>
              <div className="PteIntro_table_inner_top">
                <div className="PteIntro_table_inner">Re-teil lecture</div>
                <div className="PteIntro_table_inner">
                  Reading - Fill in the blanks
                </div>
                <div className="PteIntro_table_inner">
                  Highlight correct summary
                </div>
              </div>
              <div className="PteIntro_table_inner_top">
                <div className="PteIntro_table_inner">
                  Answer short question
                </div>
                <div className="PteIntro_table_inner">
                  Multiple choice, choose single answer
                </div>
                <div className="PteIntro_table_inner">
                  Multiple choice, choose single
                </div>
              </div>
              <div className="PteIntro_table_inner_top">
                <div className="PteIntro_table_inner">
                  Summarize written text
                </div>
                <div className="PteIntro_table_inner"></div>
                <div className="PteIntro_table_inner">Select missing word</div>
              </div>
              <div className="PteIntro_table_inner_top">
                <div className="PteIntro_table_inner">Essay</div>
                <div className="PteIntro_table_inner"></div>
                <div className="PteIntro_table_inner">
                  Highlight incorrect words
                </div>
              </div>
              <div className="PteIntro_table_inner_top">
                <div className="PteIntro_table_inner"></div>
                <div className="PteIntro_table_inner"></div>
                <div className="PteIntro_table_inner">Write from Dictation</div>
              </div>
            </div>
            <div style={{ padding: "1rem" }}>
              <div className="que_no">
                During the test you will find three buttons
              </div>
              <div className="pteintro1_points">
                <div>•</div>
                <div>
                  <span className="que_no">Next</span> - With this button you
                  can move to the next question and proceed further
                </div>
              </div>
              <div className="pteintro1_points">
                <div>•</div>
                <div>
                  <span className="que_no">Save and Exit</span> - With this
                  button you can exit from the test and resume anytime.
                </div>
              </div>
              <div className="pteintro1_points">
                <div>•</div>
                <div>
                  <span className="que_no">Submit</span> - This button will be
                  shown at the end of the test/last question. On clicking this,
                  you can submit or finish the test. Submitted test cannot be
                  restarted again.
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => {
                setIntro(getIntro + 1);
              }}>
              <button className="btn">Next</button>
            </div>
          </>
        ) : (
          <div className="PteMockInto2_main">
            <>
              <div
                className="que_no"
                style={{ display: "flex", justifyContent: "center" }}>
                Section 2 - Reading{" "}
              </div>
              <div className="PteMockInto2_main_points">
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">
                    1. Multiple-choice, choose single answer:
                  </div>
                  <div>
                    For this item type you need to read the passage and answer
                    the multiple-choice question. There are several possible
                    response options but only one is Correc
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">
                    2. Multiple-choice, choose multiple answers:
                  </div>
                  <div>
                    For this item type you need to read the passage and answer
                    the multiple-choice question. There is more than one correct
                    response. You need to select all the response options that
                    you think are correct from the list of possible options.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">3. Re-order paragraphs:</div>
                  <div>
                    For this item type you need to restore the original order of
                    the text by selecting text boxes and dragging them across
                    the screen.Left-click on a box to select it. and then
                    left-click on the left and right arrow buttons to move it
                    across. On the right panel.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">4. Fill in the blanks:</div>
                  <div>
                    For this item type you need to drag and drop words across
                    the screen to correctly fill in the gaps in the text. (or)
                    You need to select the most appropriate words from э
                    dron-down list to restore the teyt
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">
                    5. Fill in the blanks - read & write
                  </div>
                  <div>
                    For this item tvpe you need to click on each blank. and a
                    list of choices will appear. Select the appropriate answer
                    choice for each blank.
                  </div>
                </div>
              
              </div>
            </>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "1rem",
              }}>
              <Link to="/PteMockTest2Main">
                <button className="btn">Next</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PteMockTest2;
