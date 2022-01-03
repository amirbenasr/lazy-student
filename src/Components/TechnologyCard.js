import React from "react";
import '../Styles/tech-card.css';
function TechnologyCard({image,specialty}) {
   var props = {image,specialty};
  return (
    <div className="tech-card">
      <img src={props.image}></img>
      <p>{props.specialty ?? "null"}</p>
    </div>
  );
}

export default TechnologyCard;
