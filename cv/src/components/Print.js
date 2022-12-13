import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import Preview from "./Preview";

const Print = (props) => {
  let componentRef = useRef();
  const { data, work, ed } = props;
  return (
    <div>
      <div className="printPreview">
        <Preview data={data} work={work} ed={ed} ref={componentRef} />
      </div>
      <ReactToPrint
        trigger={() => <button className="generatePDF">Generate PDF</button>}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default Print;
