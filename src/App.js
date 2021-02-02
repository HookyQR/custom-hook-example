import "./App.css";
import { useGame } from "./hooks/useGame";
import Button from "./Button";
import Output from "./Output";

function App() {
  const game = useGame();

  return (
    <div className="App">
      <Button onClick={game.appendLetter} />
      <Output word={game.word} />
      <div>{game.end ? "Done" : game.word.length}</div>
    </div>
  );
}

export default App;
