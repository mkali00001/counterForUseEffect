import React, { useEffect, useState } from 'react'

const Joker = () => {
    const url = "https://official-joke-api.appspot.com/random_joke"

    let [joke, setJoke] = useState({})


    let getJoke = async () => {
        let response = await fetch(url)
        let jsonResopone = await response.json()
        setJoke({ setup: jsonResopone.setup, punchline: jsonResopone.punchline })
    }

    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(url)
            let jsonResopone = await response.json()
            setJoke({ setup: jsonResopone.setup, punchline: jsonResopone.punchline })
        }
        getFirstJoke()
    }, [])

    return (
        <div>
            <h1>😁 Joker!</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button style={{ border: '2px solid black' }} onClick={getJoke}>Get New Joke</button>
        </div>
    )
}

export default Joker
