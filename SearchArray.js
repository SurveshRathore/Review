import React, { useState } from "react";

function SearchArray () {

    const values = ["qwe", "zxc", "asd", "tyu", "sdf", "hi", "sdf"]
    const [input, setInput] = useState("")

    const takeInput = (event) => {
        setInput(
            event.target.value
        )
    }

    const match = () => {
        const value = values.filter(word=> word == input)
        
        if(value.length > 0)
        {
            alert(`${input} found in the array`)
        }
        else
        {
            alert("string note found")
        }
        
    }

   
    return(
        <div>
            <input onChange={takeInput} type="text" />
            <button onClick={match}>submit</button>
            
        </div>
    )
}

export default SearchArray
