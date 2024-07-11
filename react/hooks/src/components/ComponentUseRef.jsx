import React, { useState, useEffect, useRef } from "react";

function HookUseRef() {
    const [inputValue, setInputValue] = useState("")
    const prevValue = useRef("")


    useEffect(() => {
        prevValue.current = inputValue
    }, [inputValue])
    return (

        <>
            <h1>Hooks</h1>
            <input
                type="text"
                value={inputValue.current}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Previous Value: {prevValue.current}</h1>
        </>
    )
}

export default HookUseRef