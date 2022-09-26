import React from 'react'
import { useState } from 'react'

function Language() {
    const [count,setCount]= useState(0)
    const handleClick1 = () => {
        // Counter state is incremented
        setCount(count + 1)
      }
    return (
    <div>
        <h4>{count}</h4>
        <button onClick={handleClick1}>click</button>
    </div>
  )
}

export default Language