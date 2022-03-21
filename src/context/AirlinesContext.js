import React, { createContext, useState, useEffect } from "react";
import fetchJsonp from "fetch-jsonp";
export const AirlinesContext = createContext();

const AirlinesProvider = ({ children }) => {
  const [airlines, setAirlines] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [airlinesPerPage] = useState(8);
  const [loading, setLoading] = useState(false);
  const [oneWorld, setOneWorld] = useState(false);
  const [skyTeam, setSkyTeam] = useState(false);
  const [starAlliance, setStarAlliance] = useState(false);

  useEffect(() => {
    const url =
      "https://www.kayak.com/h/mobileapis/directory/airlines/homework";

    const fetchAirlines = async () => {
      setLoading(true);
      try {
        const response = await fetchJsonp(url, {
          jsonpCallback: "jsonp"
        });
        const data = await response.json();
        console.log(data);
        setAirlines(data.slice(0, 78));
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchAirlines();
  }, []);

  const airlineList = () => {
    if (oneWorld) {
      return airlines.filter((airline) => {
        return airline.alliance === "OW";
      });
    }
    if (skyTeam) {
      return airlines.filter((airline) => {
        return airline.alliance === "ST";
      });
    }
    if (starAlliance) {
      return airlines.filter((airline) => {
        return airline.alliance === "SA";
      });
    }
    return airlines;
  };

  // Get current airlines
  const indexOfLastAirline = currentPage * airlinesPerPage;
  const indexOfFirstAirline = indexOfLastAirline - airlinesPerPage;
  const currentAirlines = airlineList().slice(
    indexOfFirstAirline,
    indexOfLastAirline
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalAirlines = airlines.length;

  return (
    <AirlinesContext.Provider
      value={{
        airlines,
        setAirlines,
        currentAirlines,
        paginate,
        loading,
        setLoading,
        airlinesPerPage,
        totalAirlines,
        oneWorld,
        setOneWorld,
        skyTeam,
        setSkyTeam,
        starAlliance,
        setStarAlliance,
        airlineList
      }}
    >
      {children}
    </AirlinesContext.Provider>
  );
};

export default AirlinesProvider;
