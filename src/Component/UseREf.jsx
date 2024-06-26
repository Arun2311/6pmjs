import React, { useEffect, useRef } from 'react'

export default function UseREf() {

    const inputref = useRef()

    // const inputpasswrodref = useRef(null)

    useEffect(()=>{
        inputref.current.focus()
    },[])


  return (
    <div>

        <input ref={inputref}  className = "m-4"  placeholder='enter name'/>
        <input   className = "m-4"  placeholder='enter password'/>

    </div>
  )
}
