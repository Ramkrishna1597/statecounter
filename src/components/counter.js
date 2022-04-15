import React,{ useState } from "react";
import "../App.css"

export const Counter = ({initial}) => {
   const [counter, setCounter] = useState(+initial);

   const counterChange = (value) =>{
       if(counter + value <0){return};

       setCounter(counter+value);
   }

  return (
    
    <div className="container">
        <h1 className="heading">Counter</h1>
        <h1 className = {counter == 0 ? "black" : counter%2 !=0 ? "red" : "green"}>{counter}</h1>

        <button className="btn" onClick={() => {counterChange(1)}}> ADD </button>
        <button className="btn" onClick={() => {counterChange(-1)}}> Subtract </button>
        <button className="btn" onClick={() => {counterChange(counter)}}> Double </button>
    </div>
    
    
    
  );
};