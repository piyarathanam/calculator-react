import React from "react";

interface IProps {
  sum: number;
}
const TotalResult: React.FC<IProps> = (props) => {
  return (
    <div className="w-25 mx-auto mt-2">
      <div className="input-group">
        <span className="input-group-text">=</span>
        <input className="form-control" type="text" value={props.sum.toLocaleString()} aria-label="readonly input example" readOnly />
      </div>
    </div>
  )
}

export default TotalResult;