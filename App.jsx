import Card  from "./Card";
import DigitalClock from "./DigitalClock";
import Button from "./Button";
import React from "react";
import { useState } from "react";
import ColorPicker from "./ColorPicker";
import Counter from "./Counter";
import { Route, Routes } from "react-router-dom";

function HomePage({ cardColor, setCardColor }) {
    return (
        <>
        <Card
            year={2}
            occupation="Apprentice as developer"
            isAdult={19}
            backgroundColor={cardColor}
        />
        <br></br>
        <ColorPicker color={cardColor} onColorChange={setCardColor} />
        <Button />
        <DigitalClock />
        </>
    );
}

function App(){
    const [cardColor, setCardColor] = useState("#010175");

    return( 
        <Routes>
            <Route path="/" element={<HomePage cardColor={cardColor} setCardColor={setCardColor} />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
    );
}

export default App