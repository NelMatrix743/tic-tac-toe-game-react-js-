import "./GameHeader.css";


function GameHeader() {
  return (
    <div>
        <h1 className="title">
            <span className="red">TIC</span>
            -
            <span className="yellow">TAC</span>
            -
            <span className="orange">TOE</span>
        </h1>
        <div className="sub-title">
            <p>GAME STATUS: <span>ONGOING</span></p>
            <p>WINNER: <span>X</span></p>
        </div>
    </div>
  )
}

export default GameHeader;