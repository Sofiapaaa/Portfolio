import React from "react";
import Card  from "./Card";
import Button from "./Button";

function App(){
    return( 
        <>
        <Card year="2nd" occupation="Apprentice as developer" isAdult={19}/><br></br>
        <Button />
        </>
    );
}

export default App