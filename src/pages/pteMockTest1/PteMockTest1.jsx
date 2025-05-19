import React, { useState } from "react";
import "./PteMockTest1.css";
// import { PteIntro } from "../../container";
// import { PteMockInto2 } from "../../components";
import { Link } from "react-router-dom";

const PteMockTest1 = () => {
  const [getIntro, setIntro] = useState(0);

  return (
    <div>
      <span className="que_no PteMockTest1_head">PTE - Portal Mock Test 7</span>
      <div className="blue_nav"></div>
      {/* <PteIntro /> */}
      <div className="PteIntro_main">
        {getIntro === 0 ? (
          <>
            {" "}
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
                Section 1 - Speaking and Writing
              </div>
              <div className="PteMockInto2_main_points">
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">1. Read aloud:</div>
                  <div>
                    For this, you need to read a written text aloud. The
                    recording status box displays a count down until the
                    microphone opens. You have 30-40 seconds to prepare.
                    depending on the length of the passage. Start speaking
                    immediately. Do not start speaking before the microphone
                    opens because your voice will not be recorded.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">2. Repeat sentence:</div>
                  <div>
                    For this, you need to repeat the sentence you hear.The audio
                    begins to plays automatically. When the audio finishes, the
                    microphone opens and the recording status box shows
                    "Recording" Speak into the microphone immediately and repeat
                    exactly what You heard. You should speak clearly. Finish
                    sneaking before the progress bar reaches the end You are not
                    able to replay the audio You are only able to record your
                    response once.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">3. Describe image:</div>
                  <div>
                    For this item type you need to describe an image. The
                    recording status box displays a countdown until the
                    microphone opens. You have 25 seconds to study the image and
                    prepare your response Do not start speaking before the
                    microphone ones because your voice will not be recorded You
                    should sneak clearly Finish sneaking before the progress bar
                    reaches the end.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">4. Re-tell lecture:</div>
                  <div>
                    For this item type you need to re-tell what You heard. The
                    audio begins to play automatically. You may also see an
                    image related to the audio. After the audio finishes, you
                    have 10 seconds to prepare. The recording status box
                    displays a countdown until the microphone opens. Do not
                    start speaking before the microphone opens because your
                    voice will not be recorded. Finish speaking before the
                    progress bar reaches the end.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">5. Answer short question:</div>
                  <div>
                    The audio begins to play automatically. You may also see an
                    image. When the audio finishes, the microphone opens and the
                    recording status box shows "Recording". Speak into the
                    microphone immediately and answer the question with one or a
                    few words. Finish speaking before the progress bar reaches
                    the end. You are not able to replay the audio. You are only
                    able to record your response once
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">6. Summarize written text:</div>
                  <div>
                    For this item type You need to write a summary ot the text
                    in one sentence. You have 10 minutes to write your summary.
                    Make sure to include the main points of the reading passage
                    in a full, single sentence of no more than 75 words. The
                    Word Count at the bottom of the screen counts the number of
                    words You write. There are also cut. cony and baste buttons
                    which You mav use while constructing your summary.
                  </div>
                </div>
                <div className="PteMockInto2_main_points_inner">
                  <div className="que_no">7. Write essay:</div>
                  <div>
                    For this item type you need to write a 200-300 word
                    argumentative essay in response to a prompt. You have 20
                    minutes to write your essay. The Word Count at the bottom of
                    the screen counts the number of words you write. Make sure
                    to write a minimum of 200 words, but no more than 300 words.
                    There are also cut. copy and baste buttons which You mav
                    choose to use while constructing your response
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
              <Link to="/PteMockTest1Main">
                <button className="btn">Next</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PteMockTest1;
