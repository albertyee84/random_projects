import React, { useState, useEffect } from 'react'
import { PokemonItem } from './pokemonItem';
const axios = require('axios');


export const Pokedex = () => {
    const [currentPokemon, setCurrentPokemon] = useState([])
    const [currentURL, setCurrentURL] = useState(
      "https://pokeapi.co/api/v2/pokemon"
    );
    const [prevURL, setPrevURL] = useState('')
    const [nextURL, setNextURL] = useState('')

    useEffect(() => {
        axios.get(currentURL)
        .then(res => {
            setCurrentPokemon(res.data.results)
            setPrevURL(res.data.previous)
            setNextURL(res.data.next)
        })
    }, [currentURL])

    return (
        <div>
            {
                currentPokemon && renderCurrentPokemon()
            }
            {renderPrevAndNext()}
        </div>
    )

    function renderCurrentPokemon() {
        return (
            currentPokemon
                .map(pokemon => 
                    <PokemonItem  
                        key={Math.random()} 
                        pokemon={ pokemon } 
                    />)
        )
    }

    function renderPrevAndNext() {
        return(
            <>
                {prevURL && <button onClick={handlePrev}>Prev</button>}
                {nextURL && <button onClick={handleNext}>Next</button>}
            </>
        )
    }

    function handlePrev() {
        setCurrentURL(prevURL)
    }

    function handleNext() {
        setCurrentURL(nextURL)
    }
}
