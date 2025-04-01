import React, {useState} from "react"

export default function ColorPicker() {

    const [color, setColor]=useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(<div className="color-picker-container">
        <h1 style={{backgroundColor : color}}>Color Picker</h1>
        <div className="color-display" style={{backgroundColor : color}}>
            <p style={{backgroundColor : color}}>Selected Color: {color}</p>
        </div>
        <label>Pick a color:</label>
        <input type="color" value={color} onChange={handleColorChange}/>
    </div>)
}