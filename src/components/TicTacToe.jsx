import useTicTacToe from "../hooks/useTicTacToe";

function TicTacToe() {
  const { board, getStatusMessage, resetGame, resetAll, handleClick, scores, isXNext } = useTicTacToe();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Tic-Tac-Toe</h1>
          <p className="text-gray-600">Challenge your friends in this classic game!</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Game Board */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-3 p-2 bg-gray-50 rounded-2xl shadow-inner">
              {board.map((cell, index) => (
                <button
                  key={index}
                  className={`
                    w-20 h-20 sm:w-24 sm:h-24 rounded-xl border-2 border-gray-200 
                    font-bold text-2xl sm:text-3xl transition-all duration-200
                    ${cell === 'X' ? 'text-blue-600 bg-blue-50 border-blue-300' : ''}
                    ${cell === 'O' ? 'text-red-600 bg-red-50 border-red-300' : ''}
                    ${!cell ? 'bg-white hover:bg-gray-100 hover:scale-105 cursor-pointer' : 'cursor-default'}
                    ${!cell ? 'hover:border-gray-300' : ''}
                  `}
                  onClick={() => handleClick(index)}
                  disabled={cell !== null}
                >
                  {cell}
                </button>
              ))}
            </div>
          </div>

          {/* Side Panel */}
          <div className="flex flex-col gap-4 w-full lg:w-64">
            {/* Status */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <h3 className="text-lg font-semibold text-blue-800">
                {getStatusMessage().includes('turn') ? getStatusMessage() : getStatusMessage()}
              </h3>
            </div>

            {/* Score Board */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Score Board</h3>
              <div className="flex justify-between items-center mb-3">
                <div className="text-center">
                  <div className="text-sm font-medium text-blue-600">Player X</div>
                  <div className="text-2xl font-bold text-blue-600">{scores.X}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-amber-600">Draws</div>
                  <div className="text-2xl font-bold text-amber-600">{scores.draws}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-red-600">Player O</div>
                  <div className="text-2xl font-bold text-red-600">{scores.O}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <button
                onClick={resetGame}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
              >
                New Game
              </button>
              <button
                onClick={resetAll}
                className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-200 text-sm"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;