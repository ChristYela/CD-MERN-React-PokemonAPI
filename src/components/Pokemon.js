import React, { useState } from 'react';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const onClickHandler = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    };

    return (
        <div class="container">
            <h2>Pokémon Api</h2>
            <button class="bot" className='btn btn-outline-warning mb-4' onClick={() => onClickHandler()} >Gotta catch'em all Pokemon!</button>
            {pokemon.map((pokemon, index) => {
                return (<li class="result" key={index} className='text-success'>{pokemon.name}</li>)
            })}
        </div>
    );
}
export default Pokemon;