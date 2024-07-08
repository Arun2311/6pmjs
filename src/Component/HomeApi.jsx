import React from "react";
import { useFetch } from "./hook/useFetch";
import "./style.css"

export default function HomeApi() {
  const { data } = useFetch("https://fakestoreapi.com/products");


  return <><div>HomeApi</div></>;
}
