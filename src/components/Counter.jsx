import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleCount = (value) => {
        setCount(count + value)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button type="button" disabled={count === 0} onClick={() => handleCount(-1)}>
                DECR
            </button>
            <button type="button" onClick={() => handleCount(1)}>
                INCR
            </button>
            <button type="button" onClick={() => handleCount(count)}>
                DOUBLE
            </button>
        </div>
    )
}

export default Counter