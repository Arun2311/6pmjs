import React, { useContext } from 'react'
import { ConterContextCreate } from "../../context/CounterContext";

export default function Product() {

    const {increment} =  useContext(ConterContextCreate)
  return (
    <div>
        <h1>Shirt</h1>

        <button onClick={increment}>Addd</button>
    </div>
  )
}
