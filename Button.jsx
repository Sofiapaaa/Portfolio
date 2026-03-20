import React from "react";
import { Link } from "react-router-dom";


function Button(){
    
    return(
        <footer>
        <a href="https://www.linkedin.com" className="button">LinkedIn</a>
        <Link className="button" to="/counter">Counter</Link>
        <Link className="button" to="/ToDo">ToDo-List</Link>
        </footer>
    );
}

export default Button