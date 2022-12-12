import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Preview from "./Preview";

const Print = (props) => {
  const { data, work, ed } = props;
  return (
    <div>
      <div className="printPreview">
        <Preview data={data} work={work} ed={ed} />
      </div>
      {/* <ReactToPrint
        trigger={() => <button className="generatePDF">Generate PDF</button>}
        content={() => <Preview data={data} work={work} ed={ed} />}
      /> */}
    </div>
  );
};

export default Print;
