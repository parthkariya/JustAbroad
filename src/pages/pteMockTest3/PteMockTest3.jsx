import React, { useState } from "react";
import { Link } from "react-router-dom";

const PteMockTest3 = () => {
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
                Section 3 - Listening{" "}
              </div>
              <div className="PteMockInto2_main_points">
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">1. Summarize spoken text:</div>
                  <div>
                    For this item type you hear an audio recording and need to
                    write a 50-70 word summary on what you heard. You have 10
                    minutes to write your summary. The audio beans to play
                    automatically You are only able to listen to the audio
                    recording once. The Word Count at the bottom of the screen
                    counts the number of words you write. Make sure to write a
                    minimum of 30 words, but no more than /0 words. There are
                    also cut, copy and paste buttons which you may choose to use
                    while constructing your summary.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">
                    2. Multiple-choice, choose multiple answers:
                  </div>
                  <div>
                    For this item tvpe you need to listen to the recording and
                    answer the multiple-choice question. There is more than one
                    correct response. The audio begins to play automatically You
                    are only able to listen to the audio recordina once You need
                    to select all the resnonse ontions that you think are
                    correct from the list of possible options. To select an
                    option click on it using the left button on your mouse. If
                    you change your mind. left-click on the option again to
                    deselect it
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">3. Fill in the blanks:</div>
                  <div>
                    For this item toe you are presented with a transcript of the
                    audio recording. however some words are missing. Restore the
                    transcript bv typing in the missing words. The audio plays
                    automatically. You are only able to listen to the audio
                    recording once. Left-click on each gap and type in the
                    missing word You can also use the Tab button on the keyboard
                    to move between gaps.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">4. Highlight correct summary:</div>
                  <div>
                    For this item tune vol need to select the summary that best
                    matches the recording The audio begins to lay automatically
                    You are only able to listen to the audio recording once
                    There are several possible response options but only one is
                    correct. To select an option click on it using the left
                    button on your mouse. If you change your mind. left-click on
                    the option again to deselect it. or left-click on a
                    different option
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">
                    5. Multiple-choice choose single answer
                  </div>
                  <div>
                    For this item tyne you need to listen to the recording and
                    answer the multiple-choice question. The audio begins to
                    play automatically You are only able to listen to the audio
                    recording once There are several possible response options
                    but only one is correct To select an option click on it
                    using the left button on your mouse. If you change your
                    mind, left-click on the option again to deselect it, or
                    left-click on a different option.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">6. Select missing word:</div>
                  <div>
                    The audio begins to play automatically You are only able to
                    listen to the audio recording once There are several
                    possible response options but only one is correct. To select
                    an option click on it using the left button on your mouse.
                    If you change your mind. left-click on the option again to
                    deselect it. or left- click on a different option.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">7. Highlight incorrect words:</div>
                  <div>
                    For this item tve You are presented with a transcript of the
                    audio recording. however the transcript contains some
                    errors. While listening and reading. vol need to select the
                    words in the text that differ from what the sneaker says The
                    audio hearing to plays automatically You are only able to
                    listen to the audio recording once To select a word click on
                    it using the left button on your mouse If You change your
                    mind. left-click on the word again to deselect it.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">8.Write from dictation:</div>
                  <div>
                    For this item tune you hear a short sentence Tune the
                    sentence into the response box at the bottom of the screen.
                    The audio begins to play automatically Volt are only able to
                    listen to the audio recording once Remember to check your
                    spelling.
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
              <Link to="/PteMockTest3Main">
                <button className="btn">Next</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PteMockTest3;
