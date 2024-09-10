import React, { useState } from 'react'

function AddPerson() {
  const [inputVal, setInputVal] = useState('')

  handleClick = () => {
    
  }
  return (
    <>
    <input placeholder='Name...'></input>
    <button onClick={handleClick}>Add</button>
    <div>AddPerson</div>
    </>
  )
}

export default AddPerson