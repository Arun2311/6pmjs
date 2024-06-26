import React, { useContext } from "react";
import { ConterContextCreate } from "../context/CounterContext";


export default function CounterWithContext() {
  const { count } = useContext(ConterContextCreate);
  return (
    <div>
      CounterWithContext
      <h1>{count}</h1>
    </div>
  );
}
