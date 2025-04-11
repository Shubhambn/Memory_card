import { useState } from 'react';
import Score from './Score';
import Pokemon from './CharTable'; // assuming you already have this!
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);

  // Array of 8 random Pokémon IDs (from 1–151)
  const [pokemonIds, setPokemonIds] = useState(() => {
    const ids = new Set();
    while (ids.size < 8) {
      ids.add(Math.floor(Math.random() * 151) + 1);
    }
    return Array.from(ids);
  });

  const handleClick = (id) => {
    if (clickedIds.includes(id)) {
      setScore(0);
      setClickedIds([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setBestScore((prev) => Math.max(prev, newScore));
      setClickedIds([...clickedIds, id]);
      shuffleCards();
    }
  };

  const shuffleCards = () => {
    setPokemonIds((prevIds) => {
      const shuffled = [...prevIds];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  };

  return (
    <>
      <div id="container" className="bg-black/70 p-6 rounded-lg shadow-lg text-danger ">
        <nav id='navv' className="navbar bg-body-tertiary ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ alignContent: "center" }}>
              <img src="/attachment_74397534.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
              _Shubzzzz_....07_Memory_Pokemon_Card_😴_
            </a>
          </div>
        </nav>

        {/* ✅ Scoreboard */}
        <Score score={score} bestScore={bestScore} />

        {/* 🎴 Cards Grid */}
        <div className="grid grid-cols-4 gap-4" >
          {pokemonIds.map((id) => (
            <Pokemon key={id} randNumb={id} handleClick={handleClick} />
          ))}
        </div> 
        </div>
        

    </>
  );
}

export default App;
