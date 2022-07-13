import React from "react";

const Cell = (props) => {
  const { num, cells, func } = props;

  return (
    <>
      <td onClick={() => func(num)}>{cells[num]}</td>
    </>
  );
};

export default Cell;
