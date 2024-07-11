import React from "react";
import { Link } from "react-router-dom";

// cca3 is used to give neighbors
function BorderPage ({newData}){

    let neighbors = newData.borders
    if (neighbors && neighbors.length>0){
        return (
            <div>
                {
                    neighbors.map((neiba, index) => (
                            <div key={index}>
                                <p><Link to='/neiba' state={neiba}>{neiba}</Link></p>
                            </div>
                    ))
                }
            </div>
        )
      
    }else{
        return(<p>No neighbors</p>)
    }
    
    
}

export default BorderPage
