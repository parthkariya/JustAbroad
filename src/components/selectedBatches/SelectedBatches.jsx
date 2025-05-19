import React from "react";
import "./SelectedBatches.css";
import { Link  } from "react-router-dom";

const SelectedBatches = ({ sublist }) => {
  return (
    <div className="SelectedBatches_main">
      {sublist && sublist.length > 0 ? (
        sublist.map((item, index) => {
          return (
            <div className="SelectedBatches_card_main">
              <div>
                <h5>{item.name ? item.name : ""}</h5>
              </div>
              {/* <div>
                  <p>{item.date ? item.date : ""}</p>
                </div> */}
              <div>
                <p>
                  {item.from ? item.from : ""} - {item.to ? item.to : ""}
                </p>
              </div>
              <Link
                to={`/ViewBatches/${item.id}`}
                onClick={() => {
                  localStorage.setItem(
                    "ViewBatches_name",
                    JSON.stringify(item.name)
                  );
                }}>
                <button className="btn">View </button>
              </Link>
            </div>
          );
        })
      ) : (
        <span
          style={{
            background: "white",
            padding: "1rem",
            display: "flex",
            width: "100%",
          }}>
          No batches found.
        </span>
      )}
    </div>
  );
};

export default SelectedBatches;
// {
//   <div className="SelectedBatches_card_main">
//         <div>
//           <h5>IELTS Academic/General - Foundation Morning(Saturday Only)</h5>
//         </div>
//         <div>
//           <p>8:00 AM - 10:00 AM</p>
//         </div>
//         <div>
//           <p>8:00 AM - 10:00 AM</p>
//         </div>
//         <Link to="/ViewBatches">
//           <button className="btn">View</button>
//         </Link>
//       </div>
//       <div className="SelectedBatches_card_main">
//         <div>
//           <h5>IELTS Academic/General - Foundation Morning(Saturday Only)</h5>
//         </div>
//         <div>
//           <p>8:00 AM - 10:00 AM</p>
//         </div>
//         <div>
//           <p>8:00 AM - 10:00 AM</p>
//         </div>
//         <Link to="/ViewBatches">
//           <button className="btn">View</button>
//         </Link>{" "}
//       </div>
//       <div className="SelectedBatches_card_main">
//         <div>
//           <h5>IELTS Academic/General - Foundation Morning(Saturday Only)</h5>
//         </div>
//         <div>
//           <p>8:00 AM - 10:00 AM</p>
//         </div>
//         <div>
//           <p>8:00 AM - 10:00 AM</p>
//         </div>
//         <Link to="/ViewBatches">
//           <button className="btn">View</button>
//         </Link>{" "}
//       </div>
// }
