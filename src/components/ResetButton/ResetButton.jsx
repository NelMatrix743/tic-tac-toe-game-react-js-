import "./ResetButton.css";


function ResetButton({ resetHandler }) {
  return (
    <button className="reset-btn" onClick={ () => resetHandler(true) }>RESET</button>
  )
}

export default ResetButton;