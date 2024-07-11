import React, {useState} from "react";
import { useMemo } from "react";


function HookUseMemo () {
    let [count, setCount] = useState(0)

    function expensiveFunction () {

        let sum;
        for(let i=0; i<10; i++){
            sum = i+2
            console.log(sum)
        }
    }
    useMemo(()=>{
        expensiveFunction()
    })

    function getIncrease () {
        setCount(++count)
    }
    function getDecrease () {
        setCount(--count)
    }
    return (
        <>
        <button onClick={getIncrease} className="btn btn-primary" style={{backgroundColor:'yellow'}}>Increase</button>
        <p>Count {count}</p>
        <button onClick={getDecrease} className="btn btn-primary" style={{backgroundColor:'yellow'}}>Decrease</button>
        </>
    )
}

export default HookUseMemo