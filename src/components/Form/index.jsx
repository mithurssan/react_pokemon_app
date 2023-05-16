import React, { useState } from 'react'
import { PokemonCard } from '..'

const Form = () => {
    const [inputText, setInputText] = useState("");
    const [pokemonDetails, setPokemonDetails] = useState("");
    const [loading, setLoading] = useState(false);

    const updateName = (e) => {
        setInputText(e.target.value);
    }

    const getPokemon = async () => {
        try {
            setLoading(true);
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputText}`);
            const data = await result.json();
            setPokemonDetails(data)
            setLoading(false);
        } catch (err) {
            setLoading(false);
            if (err.message === "Unexpected token 'N', \"Not Found\" is not valid JSON") {
                alert("Pokemon not found!")
            } else {
                console.log(err.message)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Pokemon name: </label>
                <input
                    type="text"
                    id="name"
                    value={inputText}
                    className="pokemon-name"
                    onChange={updateName}
                    required
                />
                <button type="submit">Search</button>
            </form>
            {loading && <h2>Loading...</h2>}
            {
                pokemonDetails
                    ? <PokemonCard pokemonDetails={pokemonDetails} loading={loading} />
                    : "No pokemon yet, please submit a pokemon! 😊"
            }
        </>
    )
}

export default Form
