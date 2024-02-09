import React from 'react';
import Pokecard from './Pokecard';
import pokemons from './Pokemons';

const Pokedex = () => {
    return (
      <div style={{
          maxWidth: '800px', 
          height: '600px', 
          display: 'flex', 
          flexWrap: 'wrap', // Corrected property
          alignItems: 'center', // Optional, for vertical alignment
          justifyContent: 'space-around', // Optional, for horizontal spacing
          overflow: 'auto' // In case content overflows the container
      }}>
        {pokemons.map(poke => (
          <Pokecard 
            key={poke.id}
            id={poke.id}
            name={poke.name}
            type={poke.type}
            base_experience={poke.base_experience}
          />
        ))}
      </div>
    );
}

export default Pokedex;
