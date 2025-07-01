import { useState } from "react";
const InitialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(InitialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const Winner_Patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < Winner_Patterns.length; i++) {
      const [a, b, c] = Winner_Patterns[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    // check winner
    const winner = calculateWinner(board);

    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "0";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);

    if(winner) return `Player ${winner} wins!`;

    if(!board.includes(null)) return 'Its a draw';

    return `Player ${isXNext ? 'X' : '0'} turn`;
  };

  const resetGame = () => {
    setBoard(InitialBoard());
    setIsXNext(true);
  };

  return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
};

export default useTicTacToe;
