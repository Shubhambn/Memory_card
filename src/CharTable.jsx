import { useState, useEffect } from "react";

export default function Pokemon({ randNumb, handleClick }) {
  const [pokeData, setPokeData] = useState(null);
  const [isShiny, setIsShiny] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randNumb}`)
      .then((res) => res.json())
      .then((data) => {
        setPokeData(data);
        const chance = Math.floor(Math.random() * 500) + 1;
        setIsShiny(chance === 8);
      })
      .catch((err) => console.error(err));
  }, [randNumb]);

  if (!pokeData) return <p>Loading...</p>;

  return (
    <div
      onClick={() => handleClick(pokeData.id)}
      className="cursor-pointer text-center bg-white text-black rounded-md p-3 hover:scale-105 transition-transform duration-200"
    >
      <img
        src={
          isShiny
            ? pokeData.sprites.front_shiny
            : pokeData.sprites.front_default
        }
        alt={pokeData.name}
        className="mx-auto w-20"
      />
      <h3 className="mt-2 capitalize text-lg font-semibold">
        {pokeData.name}
      </h3>
    </div>
  );
}
