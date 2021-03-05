import {useState, useEffect} from 'react'
import React from 'react'
import Magic from './components/Magic'
// import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css'

function App() {
const [ball, setball] = useState([])

  useEffect(()=>{
   const getBall = async ()=>{
     const ballFromApi = await fetchball()
     setball(ballFromApi.magic.answer)
   }
      getBall()
},[])

const fetchball = async ()=>{
  const user = '1';
  const res = await fetch('https://8ball.delegator.com/magic/JSON/' + user)
  const data = await res.json();
  console.log(data)
  return(data)
}
  return (
    <div className="App">
      <header className="App-header">
      {ball.length !==0?<Magic ball = {ball}/>:
              <h3>loading..</h3>}
      </header>
    </div>
  );
  }

  export default App;