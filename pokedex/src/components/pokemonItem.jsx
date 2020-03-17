import React, { useState, useEffect } from 'react'
const axios = require('axios')

export const PokemonItem = ({ pokemon }) => {

    const [image, setImage] = useState('')

    useEffect(() => {
        axios.get(pokemon.url)
        .then(res => setImage(res.data.sprites))
    }, [pokemon])

    return (
        <div>
            {image && <img src={image.front_default}/>}
            {pokemon.name}
        </div>
    )
}
