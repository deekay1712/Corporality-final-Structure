import React from "react";
import "./Objectives.css";
import D3_pie_chart_1 from "./images/D3_pie_chart_1.png";

function Objectives() {
  return (
    <div className="objectives_main">
      <div className="objectives_text">
        <div className="objectives_heading">
          Objectives of our customer success programmes
        </div>
        <button className="objectives_button">
          <p className="objectivesbtn_text">Book Your Discovery Session</p>
        </button>
        <div className="objectives_heading2">Corporate success strategy</div>
        <div className="objectives_description">
          Having a strong understanding of what the customer wants is crucial
          for a successful corporate level marketing strategy. Corporality
          formulates guidelines typically designed for the senior management
          level to be filtered down to all the employees across the
          organisation. There are crucial elements of corporate sustainability
          branding that help customers quickly identify and remember your
          company. With the right marketing mix, our experts cut through the
          noise to create directives to drop a product into the market.
        </div>
      </div>
      <div className="objectives_image">
        <img src={D3_pie_chart_1} alt="Chart" />
      </div>
    </div>
  );
}

export default Objectives;
