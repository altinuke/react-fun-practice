import React from "react";
import { useState } from "react";
import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name} </h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2> Age: {props.age} </h2>
    </>
  );
};
const App = () => {
  // return (
  //   <div className="App">
  //     <Person name="John" lastName="Salako" age="27" />
  //     <Person name="Tinuke" lastName="Awe" age={25} />
  //   </div>
  // );

  const [ counter, setCounter] = useState(0);
  return (
    <div className='App'>
      <h1> Tinuke's First React Exercise</h1>
      <button onClick= {()=> setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick= {()=> setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  )

};


  

export default App;
