import React, { useContext } from 'react'
import { PhoneContext } from '../context/PhoneContext'

export default function LoginForm() {

    const {handlephone} = useContext(PhoneContext)
  return (
    <div>
        <label>Phone Number ::</label>

        <input onChange ={handlephone} placeholder='Enter' />

        <br></br>

        <br></br>

        {/* <button>Check</button> */}
    </div>
  )
}
