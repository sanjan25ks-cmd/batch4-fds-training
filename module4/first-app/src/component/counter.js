import { useState } from "react";
function Counter(){
   const [count,setCount]=useState(0);
   const handleIncrement= () =>{
    setCount(count + 1);
   };
    const handleDecrement= () =>{
    setCount(count - 1);
   };
   return(
    <div>
        <h1>Counter Component</h1>
        <p> Count: {count}</p> <br/>
        <button onClick={handleIncrement}> + </button> &nbsp; &nbsp;
        <button onClick={handleDecrement}> - </button>
    </div>
   );
}
export default Counter;