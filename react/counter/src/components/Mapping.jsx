import React from 'react'

const Mapping = () => {
    let arrayNumbers = [1,2,3,4,5,6,7,8]
    return (
        <>
            <div>
                {
                    arrayNumbers.map((number, index)=>{
                        return(
                            <button type="button" className='btn btn-primary' key={index}>{number}</button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Mapping