import React from "react";

function ColorPicker({ color, onColorChange }){

    function handleColorChange(event){
        onColorChange(event.target.value);
    }

    return(
        <div className="color-picker-container">
                <div className="color-display" style={{backgroundColor: color}}>
                </div>
                <div>
                    <p className="ColorText">Pick a Color:</p>
                    <input  className="inputColor" type="color" value={color} onChange={handleColorChange}/>
                </div>
        </div>
    );
}

export default ColorPicker