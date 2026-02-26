import React, { useState } from "react";

// counter change on click of button / paragraph color
export default function Hooks() {
    // initialize the counter value
    const [counter, setCounter] = useState(1);
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <h1>Counter Value is: {counter}</h1>
            {
                display ? <h1> My Paragraph</h1> : null
            }
            <button onClick={() => setCounter(counter + 1)}>INCREMENT</button>
            <button onClick={() => setCounter(counter - 1)}>DECREMENT</button>
            <button onClick={() => setCounter(0)}>RESET</button>
            <button onClick={() => setDisplay(!display)}>{display ? "HIDE" : "SHOW"} THE PARAGRAPH</button>
        </div>
    );
}
