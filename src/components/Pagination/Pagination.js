import React, { useContext } from "react";
import { AirlinesContext } from "../../context/AirlinesContext";
import './Pagination.css'


const Pagination = () => {
  const { airlinesPerPage, totalAirlines, paginate } =
    useContext(AirlinesContext);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAirlines / airlinesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
