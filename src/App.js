//CONFIG
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

//COMPONENTS
import Question from './components/Question';
import Result from './components/Result';
import Start from './components/Start';


function App() {

  //질문 번호
  const [num, setNum] = useState(1) 

  const [score, setScore] = useState({
    EI: 0,
    SN: 0,
    TH: 0,
    PJ: 0,
  })

  // 점수 업데이트하는 함수
  const updateScore = (type, value)=>{ 
    setScore({
      ...score,
      [type]: score[type] + value
    })
  }

  const resetState = ()=>{
    setNum(1)
    setScore({
     EI: 0, 
     SN: 0,
     TF: 0,
     PJ: 0,
    })
  }

  return (
    <Routes>
      <Route path='/' element = {<Start num={num} setNum={setNum} />} />
      <Route path='/question' element = {<Question num = {num}updateScore={updateScore} setNum={setNum} />} />
      <Route path='/result' element = {<Result score={score} resetState={resetState}/>} />
    </Routes>
  );
}

export default App;
