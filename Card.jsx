import profilePic from './image.png'
import React from "react";

function shadeHexColor(hex, percent) {
  const cleaned = hex.replace("#", "");
  const normalized = cleaned.length === 3
    ? cleaned.split("").map((ch) => ch + ch).join("")
    : cleaned;

  const value = parseInt(normalized, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;

  const shade = (channel) => {
    const amount = percent < 0
      ? channel * (1 + percent)
      : channel + (255 - channel) * percent;
    return Math.max(0, Math.min(255, Math.round(amount)));
  };

  const toHex = (channel) => shade(channel).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function Card(props) {

  const hobbys = [{name: "Gymnastics"}, {name: "Drawing"}, {name: "Crochet"}];
  const listItems = hobbys.map(hobbys => <li>{hobbys.name}</li>)  
  const cardTop = props.backgroundColor ? shadeHexColor(props.backgroundColor, 0.18) : "";
  const cardBottom = props.backgroundColor ? shadeHexColor(props.backgroundColor, -0.22) : "";
  const listBottom = props.backgroundColor ? shadeHexColor(props.backgroundColor, -0.38) : "";

  const cardStyle = props.backgroundColor
    ? {
      backgroundColor: props.backgroundColor,
      backgroundImage: `linear-gradient(165deg, ${cardTop} 0%, ${cardBottom} 100%)`
    }
    : {};
  const listStyle = props.backgroundColor
    ? {
      backgroundColor: props.backgroundColor,
      backgroundImage: `linear-gradient(to bottom, ${props.backgroundColor} 0%, ${listBottom} 100%)`
    }
    : {};

  return (
    <div className="card" style={cardStyle}>
      <img className="card-image" src={profilePic} alt="Profile Picture"></img>
      <h3>Yeonie Fatcat</h3>
      <ul className="list" >
        <li>Occupation: {props.occupation}</li>
        <li>Year: {props.year}</li>
        <li>Adult: {props.isAdult >= 18 ? "Yes" : "No"}</li>
        <ol>{listItems}</ol>       
      </ul>
    </div>
  );
}

export default Card;