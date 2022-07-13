import React, { useState } from "react";
import Cell from "./Cell";

const Table = () => {
  const [turn, setTurn] = useState("X");

  const [cells, setCells] = useState(Array(9).fill(""));

  const handleClick = (number) => {
    // let squares = [...cells];
    // console.log(squares);
    if (cells[number] !== "") {
      alert("Already clicked");
      return;
    }

    if (turn === "X") {
      cells[number] = "X";
      setTurn("O");
    } else {
      cells[number] = "O";
      setTurn("X");
    }
    setCells(cells);
    console.log(cells);
    // alert(number);
  };

  return (
    <>
      <table className="mx-auto mt-5">
        <tbody>
          <tr>
            <Cell num={0} func={handleClick} cells={cells} />
            <Cell num={1} func={handleClick} cells={cells} />
            <Cell num={2} func={handleClick} cells={cells} />
          </tr>
          <tr>
            <Cell num={3} func={handleClick} cells={cells} />
            <Cell num={4} func={handleClick} cells={cells} />
            <Cell num={5} func={handleClick} cells={cells} />
          </tr>
          <tr>
            <Cell num={6} func={handleClick} cells={cells} />
            <Cell num={7} func={handleClick} cells={cells} />
            <Cell num={8} func={handleClick} cells={cells} />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
