import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Preview from "./Preview";

const Print = ({ data }) => {
  let componentRef = useRef(null);
  return (
    <div>
      <div className="printPreview">
        <Preview data={data} ref={(el) => (componentRef = el)} />
      </div>
      <ReactToPrint
        trigger={() => <button className="generatePDF">Generate PDF</button>}
        content={() => componentRef}
      />
    </div>
  );
};

export default Print;
