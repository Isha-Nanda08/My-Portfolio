import React from 'react';
import '../styles/Hexagon.css'; // Make sure to import your CSS file here

const HexagonGrid = () => {
  // Generate 15 rows of hexagons dynamically
  const rows = new Array(15).fill(null);

  return (
    <div className="container">
      {rows.map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {rows.map((_, hexagonIndex) => (
            <div key={hexagonIndex} className="hexagon"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default HexagonGrid;
