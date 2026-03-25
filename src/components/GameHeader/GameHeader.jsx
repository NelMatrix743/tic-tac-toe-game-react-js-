import "./GameHeader.css";


function GameHeader() {
  return (
    <>
        <h1 className="title">
            <span className="red">TIC</span>
            -
            <span className="yellow">TAC</span>
            -
            <span className="orange">TOE</span>
        </h1>
        <div className="sub-title">
            <p className="game-stat">GAME STATUS: <span className="ongoing">ONGOING</span></p>
            <p className="game-stat">WINNER: <span> --- </span></p>
        </div>
    </>
  )
}

export default GameHeader;