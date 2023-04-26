import React from 'react';
import logo from '../logo.svg';
import './App.css';
import TotalResult from './components/TotalResult';
import InputNumber from './components/InputNumber';
import ButtonResult from './components/ButtonResult';

function App() {
  const [numb1, setNumb1] = React.useState<number>(0);
  const [numb2, setNumb2] = React.useState<number>(0);
  const [sum, setSum] = React.useState<number>(0);

  return (
    <div className="App">
      <div className="container my-4">
        <InputNumber handleNumber={setNumb1} valueNumber={numb1} />
        <InputNumber handleNumber={setNumb2} valueNumber={numb2} />
        <ButtonResult numb1={numb1} numb2={numb2} setSum={setSum}/>
        <TotalResult sum={sum}/>
      </div>
    </div>
  );
}

export default App;
