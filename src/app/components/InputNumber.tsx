import React from "react";

interface IProps {
  valueNumber: number;
  handleNumber: (data: number) => void;
}
const InputNumber: React.FC<IProps> = (props) => {
  console.log('props', props);
  const handleChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data: number = Number(event.target.value);
    props.handleNumber(data);
  }

  return (
    <div className="w-25 mx-auto mt-2">
      <input type="number" className="form-control" value={props.valueNumber || ''} onChange={(e) => handleChangeNumber(e)} />
    </div>
  )
}

export default InputNumber;