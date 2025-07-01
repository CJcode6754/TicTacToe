import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const {board, getStatusMessage, resetGame, handleClick} =  useTicTacToe()
  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset" onClick={resetGame}>Reset Game</button>
      </div>

      <div className="board">
        {board.map((b, index) => {
          return <button key={index} className="cell" onClick={() => handleClick(index)} disabled={b !== null}>
            {b}
          </button>
        })}
      </div>
    </div>
  );
}

export default TicTacToe;
