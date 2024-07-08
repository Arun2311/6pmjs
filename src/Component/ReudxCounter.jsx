import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/CounterSlice";

export default function ReudxCounter() {
  const count = useSelector((state) => state.counter.co);

  const dispatch = useDispatch()
  return (
    <div>
      <h1>count : {count}</h1>

      <button onClick={()=>{dispatch(increment())}}>Add</button>
    </div>
  );
}
