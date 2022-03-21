import React, { useState } from "react";
import "./Airline.css";

const Airline = ({ name, phone, site, logo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  //Displays when hovered
  const HoveredDiv = () => {
    return (
      <div className="hovered">
        <img src={`https://kayak.com${logo}`} className="logo"></img>
        <div className="name">{name}</div>
        <div className="hiddenItems">
          <div className="phone">{phone}</div>
          <div className="site">{site}</div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovered ? (
        <HoveredDiv />
      ) : (
        <>
          <img src={`https://kayak.com${logo}`} className="logo"></img>
          <div className="name">{name}</div>
        </>
      )}
    </div>
  );
};

export default Airline;
