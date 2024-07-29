import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  return (<div>
    <CustomButton count={count} setCount={setCount}></CustomButton>
    <CustomButton count={count+2} setCount={setCount}></CustomButton>
    <CustomDiv count={count} setCount={setCount}></CustomDiv>

  </div>
  )

  
}
function CustomButton(props){
  function handler(){
    props.setCount(props.count+1);
    }
  return <button onClick={handler}> counter {props.count-1}</button>
  
}
function CustomDiv(props){
  function handler(){
    props.setCount(props.count);
    }
  return <div onClick={handler}> counter {props.count}</div>
  
}
export default App
