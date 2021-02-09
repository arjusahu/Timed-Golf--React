import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";
let Timer=()=>  {
  let [time,setTime]=useState(0);
  let [x,setx]=useState(0);
  let [y,sety]=useState(0);
  let [ballPosition,setBallPosition]=useState({left:0,top:0})
  let [interval,set]=useState(0);

  useEffect(()=>{
   console.log("useEffect",x,y);
   console.log(interval);
   if (x==250 && y==250)
   {
    clearInterval(interval);
   }
    },[x,y]);
  
  let handleClick=()=>{
    // console.log(time);
    document.addEventListener("keydown",handleKeyDown);
    interval=setInterval(increseTime,1000);
    set(interval);
  }


  let handleKeyDown=(event)=>{
    // console.log("keydown",event.keyCode);
    // console.log(ballPosition.left,ballPosition.top);
    switch(event.keyCode)
    {
        case 39:{
            setBallPosition((ballPosition)=> {
                console.log("inside",ballPosition);
                return{
                left:ballPosition.left+5,
                top:ballPosition.top
                }
            }
            );
            setx((x)=>x+5);

            break;
        }
        case 37:{
            setBallPosition( (ballPosition)=>({
                left:ballPosition.left-5,
                top:ballPosition.top
                
            }));
            setx((x)=>x-5)

            break;
        
        }
        case 40:{
            setBallPosition((ballPosition)=>({
                top:ballPosition.top+5,
                left:ballPosition.left
            }));
            sety((y)=>y+5)

            break;
        
        }
        case 38:{
            setBallPosition((ballPosition)=>({
                top:ballPosition.top-5,
                left:ballPosition.left
            }));
            sety((y)=>y-5)
            break;
        
        }
        default:
            {
                console.log("invalid");
            }
        
    }
}


  











  let increseTime=()=>{
    setTime((time)=>time+1);
  }













    return (
     <div>
       <div className="ball" style=
       {{position:"absolute",top:ballPosition.top,left:ballPosition.left}}>
       </div>
       <button style={{margin:"100px"}} onClick={handleClick} className="start">start</button>
       <div className="heading-timer">{time}</div>
       <div>{x} {y}</div>
       <div className="hole"></div>
     </div>
    );

}

export default Timer;
