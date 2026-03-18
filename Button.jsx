import React from "react";
import { Link } from "react-router-dom";

function Button(){
    
    return(
        <footer>
        <button className="button"><a href="https://www.linkedin.com">LinkedIn</a></button>
        <Link className="button" to="/counter">Counter</Link>
        </footer>
    );
}

export default Button