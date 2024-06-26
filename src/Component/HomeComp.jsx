import React, { useContext } from 'react'
import { PhoneContext } from '../context/PhoneContext'

export default function HomeComp() {
    const{phonenumber} =  useContext(PhoneContext)
  return (


    <div>

        {phonenumber.length > 10 ? "hi" : "-"}
    </div>
  )
}
