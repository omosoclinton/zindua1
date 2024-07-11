import React, {useState} from 'react'


function GetCounter (props){
 
    return (
        <>
            <div className='container container-md'>
                <h4>Counter: <span>{props.count}</span></h4>
                <button className="btn btn-primary" type="button"onClick={()=>props.increaseFunc(5)}>Increase</button>
                <button className="btn btn-primary" type="button" onClick={props.decreaseFunc}>Decrease</button>
                <button className="btn btn-primary" type="button" onClick={props.resetFunc}>Reset</button>
            </div>
        </>
    )
}


export default GetCounter