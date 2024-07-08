import React from 'react'
import { useFetch } from './hook/useFetch'

export default function About() {

    const data  = useFetch("https://fakestoreapi.com/products")
  return (
    <div>About</div>
  )
}
