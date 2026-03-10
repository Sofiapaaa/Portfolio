import React from "react";
import profilePic from './image.png'

function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile Picture"></img>
      <h3>Yeonie Fatcat</h3>
      <ul className="list">
        <li>Occupation: {props.occupation}</li>
        <li>Year: {props.year}</li>
        <li>Adult: {props.isAdult >= 18 ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
}


export default Card;