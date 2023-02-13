import React, { useState } from "react";
import ChildComponent from "./child";


function ParentComponent (){

    const childHandler = (childMessage) => {
        
        console.log(childMessage)
        alert(`${childMessage}`)
    }
    return(
        <div>
            <ChildComponent parentHandler={childHandler}/>
             
        </div>
    )
}

export default ParentComponent
