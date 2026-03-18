import React, { useState } from "react";
import { Link } from "react-router-dom";


function Counter(){

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const decrease = () =>{
        setCount(count - 1);
    }

    const reset = () =>{
        setCount(0);
    }

    return (
        <div className="counter-page">
            <p className="count-display">{count}</p>
            <button className="button2" onClick={increment}>Increment</button>
            <button className="button2" onClick={decrease}>Decrease</button> 
            <button className="button2" onClick={reset}>Reset</button>      
            <Link className="button2" to="/">Back to Home</Link>
        </div>
    );
}
export default Counter;
