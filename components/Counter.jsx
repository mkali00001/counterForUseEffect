import React, { useEffect, useState } from 'react'

const Counter = () => {
    let [countx, setCountx] = useState(0)
    let [county, setCounty] = useState(0)

    let handleCountx = () => {
        setCountx(countx+=1)
    }
    let handleCounty = () => {
        setCounty(county+=1)
    }

    useEffect(()=>{
        console.log("I use UseEffect!")
    }, [countx])
    return (
        <div>
            <h3>Count {countx}</h3>
            <button style={{ border: '2px solid black' }} onClick={handleCountx}>+</button>

            <h3>Count {county}</h3>
            <button style={{ border: '2px solid black' }} onClick={handleCounty}>+</button>
        </div>
    )
}

export default Counter
