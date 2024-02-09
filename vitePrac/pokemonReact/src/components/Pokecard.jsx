import React from 'react'
import './Pokecard.css'
const Pokecard = ({key, id, name, type, base_experience}) => {
  return (
    <div id='Pokemon' key={key}>
        <h3>{name}</h3>
        <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon image" />
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
    </div>
  )
}

export default Pokecard