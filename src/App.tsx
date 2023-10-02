import { useState } from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import Header from './components/Header/Header';

function App() {
  const [player, setPlayer] = useState<string>('player1');

  return (
    <div className="App">
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
