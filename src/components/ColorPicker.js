import React, {useEffect, useState} from 'react';
import colorPickerStyles from "../styles/colorPicker";

const ColorPicker = ({colors, sendColor, penColor}) => {
  const [selected,setSelected] = useState(penColor);
  const updateColor = (color) => {
    sendColor(color);
    
  }
  useEffect(() => {
    setSelected(penColor);
  },[penColor])
  
  const colorButtons = []
  colors.forEach((color,i) => {
    colorButtons.push(
      <div key={i} className={selected === color ? "color-button-selected" : "color-button"} onClick={() => updateColor(color)}>
      <div style={{backgroundColor:color}} className={"color-button-inner"}>
      
      </div>
      <style jsx>{colorPickerStyles}</style>
      </div>

    )
  })
  return (
    <div className="color-picker">
    {colorButtons}
    <style jsx>{colorPickerStyles}</style>
    </div>
  )
}

export default ColorPicker;