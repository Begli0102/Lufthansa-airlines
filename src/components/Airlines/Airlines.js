import React, { useState, useEffect, useContext } from "react";
import Airline from "./Airline/Airline";
import { AirlinesContext } from "../../context/AirlinesContext";
import "./Airlines.css";

const Airlines = () => {
  const {
    loading,
    currentAirlines,
    oneWorld,
    setOneWorld,
    skyTeam,
    setSkyTeam,
    starAlliance,
    setStarAlliance
  } = useContext(AirlinesContext);

  return (
    <div className="containerAirline">
      {loading ? <h3>Loading...</h3> : ""}
      <div className="titleAndFilter">
        <h1 className="title">Airlines</h1>
        <h3 className="filter">Filter by Alliances</h3>
        <div className="filterContainer">
          <div className="allianceContainer">
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => setOneWorld(!oneWorld)}
              value={oneWorld}
            />
            <label htmlFor="oneWorld">OneWorld</label>
          </div>
          <div className="allianceContainer">
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => setSkyTeam(!skyTeam)}
              value={skyTeam}
            />
            <label htmlFor="skyTeam">SkyTeam</label>
          </div>
          <div className="allianceContainer">
            <input
              type="checkbox"
              className="checkbox"
              onChange={() => setStarAlliance(!starAlliance)}
              value={starAlliance}
            />
            <label htmlFor="starAlliance">StarAlliance</label>
          </div>
        </div>
      </div>

      <div className="airline">
        {currentAirlines.map((airline, index) => (
          <Airline
            name={airline.name}
            phone={airline.phone}
            site={airline.site}
            logo={airline.logoURL}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Airlines;
