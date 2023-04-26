import React from "react";

interface IProps{
  numb1: number;
  numb2: number;
  setSum(value: number): void
}

const ButtonResult: React.FC<IProps> = (props) => {
  function handleClickPlus() {
    props.setSum(props.numb1 + props.numb2);
  }

  function handleClickMinus() {
    props.setSum(props.numb1 - props.numb2);

  }
  function handleClickMultiply() {
    props.setSum(props.numb1 * props.numb2)
  }
  function handleClickdivide() {
    props.setSum(props.numb1 / props.numb2)
  }

  
  return (
    <div className="mt-2">
      <button type="button" className="btn btn-primary mx-1" onClick={e => handleClickPlus()}>+</button>
      <button type="button" className="btn btn-primary mx-1" onClick={e => handleClickMinus ()}>-</button>
      <button type="button" className="btn btn-primary mx-1" onClick={e => handleClickMultiply()}>*</button>
      <button type="button" className="btn btn-primary mx-1" onClick={e => handleClickdivide()}>/</button>
    </div>
  )
}

export default ButtonResult;
