import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    )
}

export default Counter;