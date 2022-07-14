import React, { useState } from "react";
import Cell from "./Cell";

const Table = () => {
  const [turn, setTurn] = useState("X");

  const [cells, setCells] = useState(Array(9).fill(""));

  const handleClick = (number) => {
    if (cells[number] !== "") {
      alert("Already clicked!");
      return;
    }

    if (turn === "X") {
      cells[number] = turn;
      setTurn("O");
    } else {
      cells[number] = turn;
      setTurn("X");
    }
    checkWin(cells);
  };

  const checkWin = (arr) => {
    // console.log(arr);
    const combos = {
      vertical: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      horizontal: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      oblique: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    let key;
    console.log(arr);
    for (key in combos) {
      const combo = combos[key];
      combo.forEach((element) => {
        console.log(arr[element[0]]);
        if (
          arr[element[0]] === "" ||
          arr[element[1]] === "" ||
          arr[element[2]] === ""
        ) {
          // do nothing
        } else if (
          arr[element[0]] === arr[element[1]] &&
          arr[element[1]] === arr[element[2]]
        ) {
          setTimeout(() => {
            alert(`The winner is ${arr[element[0]]}`);
            setCells(Array(9).fill(""));
          }, 300);
        }
      });
    }
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
