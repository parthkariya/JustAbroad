// import React, { useState } from "react";
// import "./PteIntro.css";
// import { PteMockInto2 } from "../../components";

// const PteIntro = () => {
//   const [getIntro, setIntro] = useState(0);
//   return (
//     <div className="PteIntro_main">
//       {getIntro === 0 ? (
//         <>
//           {" "}
//           <div className="PteIntro_table_main">
//             <div className="PteIntro_table_inner_top">
//               <div
//                 className="PteIntro_table_inner que_no"
//                 style={{ background: "#bbd7eb", justifyContent: "center" }}>
//                 Part 1 speaking and writing
//               </div>
//               <div
//                 className="PteIntro_table_inner que_no"
//                 style={{ background: "#bbd7eb", justifyContent: "center" }}>
//                 Part 2 - Reading
//               </div>
//               <div
//                 className="PteIntro_table_inner que_no"
//                 style={{ background: "#bbd7eb", justifyContent: "center" }}>
//                 Part 3 - Listening
//               </div>
//             </div>
//             <div className="PteIntro_table_inner_top">
//               <div className="PteIntro_table_inner">Read Aloud</div>
//               <div className="PteIntro_table_inner">
//                 Reading and Writing - Fill in the blanks
//               </div>
//               <div className="PteIntro_table_inner">summarize spoken test </div>
//             </div>
//             <div className="PteIntro_table_inner_top">
//               <div className="PteIntro_table_inner">Read Sentence</div>
//               <div className="PteIntro_table_inner">
//                 Multiple choice, choose multiple answers
//               </div>
//               <div className="PteIntro_table_inner">
//                 Multiple choice, choose multiple answer{" "}
//               </div>
//             </div>
//             <div className="PteIntro_table_inner_top">
//               <div className="PteIntro_table_inner">Describe image</div>
//               <div className="PteIntro_table_inner">Re-order paragraphs</div>
//               <div className="PteIntro_table_inner">Fill in the blanks</div>
//             </div>
//             <div className="PteIntro_table_inner_top">
//               <div className="PteIntro_table_inner">Re-teil lecture O</div>
//               <div className="PteIntro_table_inner">
//                 Reading - Fill in the blanks
//               </div>
//               <div className="PteIntro_table_inner">
//                 Highlight correct summary
//               </div>
//             </div>
//             <div className="PteIntro_table_inner_top">
//               <div className="PteIntro_table_inner">Answer short question</div>
//               <div className="PteIntro_table_inner">
//                 Multiple choice, choose single answer
//               </div>
//               <div className="PteIntro_table_inner">
//                 Multiple choice, choose single
//               </div>
//             </div>
//             <div className="PteIntro_table_inner_top">
//               <div className="PteIntro_table_inner">Summarize written text</div>
//               <div className="PteIntro_table_inner"></div>
//               <div className="PteIntro_table_inner">Select missing word</div>
//             </div>
//             <div className="PteIntro_table_inner_top">
//               <div className="PteIntro_table_inner">Essay</div>
//               <div className="PteIntro_table_inner"></div>
//               <div className="PteIntro_table_inner">
//                 Highlight incorrect words
//               </div>
//             </div>
//             <div className="PteIntro_table_inner_top">
//               <div className="PteIntro_table_inner"></div>
//               <div className="PteIntro_table_inner"></div>
//               <div className="PteIntro_table_inner">Write from Dictation</div>
//             </div>
//           </div>
//           <div style={{ padding: "1rem" }}>
//             <div className="que_no">
//               During the test you will find three buttons
//             </div>
//             <div className="pteintro1_points">
//               <div>•</div>
//               <div>
//                 <span className="que_no">Next</span> - With this button you can
//                 move to the next question and proceed further
//               </div>
//             </div>
//             <div className="pteintro1_points">
//               <div>•</div>
//               <div>
//                 <span className="que_no">Save and Exit</span> - With this button
//                 you can exit from the test and resume anytime.
//               </div>
//             </div>
//             <div className="pteintro1_points">
//               <div>•</div>
//               <div>
//                 <span className="que_no">Submit</span> - This button will be
//                 shown at the end of the test/last question. On clicking this,
//                 you can submit or finish the test. Submitted test cannot be
//                 restarted again.
//               </div>
//             </div>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//             onClick={() => {
//               setIntro(getIntro + 1);
//             }}>
//             <button className="btn">Next</button>
//           </div>
//         </>
//       ) : (
//         <PteMockInto2 />
//       )}
//     </div>
//   );
// };

// export default PteIntro;
