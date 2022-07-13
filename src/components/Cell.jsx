import React from "react";

const Cell = ({ num }) => {
  const handleClick = (num) => {
    alert(num);
  };

  return <td onClick={() => handleClick(num)}></td>;
};

export default Cell;
