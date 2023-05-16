import React from 'react'

const PokemonCard = ({ pokemonDetails, loading }) => {

    return (
        <div className="pokemon-container">
            {loading ? null :
                <div className="pokemon-card">
                    <h2>{pokemonDetails.name}</h2>
                    <img src={pokemonDetails.sprites["front_default"]} alt={`image of ${pokemonDetails.name}`} />
                    <p>Height: {pokemonDetails.height}</p>
                    <p>Weight: {pokemonDetails.weight}</p>
                    <p>Abilities:
                        {pokemonDetails.abilities.map(
                            abilities => <li key={abilities.ability.name}>{abilities.ability.name}</li>
                        )}
                    </p>
                </div>
            }
        </div>
    )
}

export default PokemonCard
