import { GameHeader, CardContainer, ResetButton } from "~/components";

function App() {
  return (
    <div className="app">
      <GameHeader />
      <CardContainer />
      <div className="center-btn">
        <ResetButton />
      </div>
    </div>
  )
}

export default App;