import React, { useState } from 'react'

function AddPerson() {
  const [inputVal, setInputVal] = useState('')

  const handleClick = (e) => {
    console.log(inputVal)
  }

  const handleChange = (e) => {
    setInputVal(e.target.value)
  }
  return (
    <>
    <input placeholder='Name...' value={inputVal} onChange={handleChange}></input>
    <button onClick={handleClick}>Add</button>
    <div>AddPerson</div>
    </>
  )
}

export default AddPerson