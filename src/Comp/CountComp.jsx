import React, { useEffect, useState } from "react";

function CountComp({ moviename,setname,handlechange }) {
  const [count, setcount] = useState(0);

  const [name23, setname23] = useState("Arunnnn");


  const handleadd = () => {
    setcount(count + 1);
    handlechange(count)
  };


  useEffect(()=>{
    setname(name23)

  },[])



  return (
    <div>
      <h1>{moviename}</h1>
      <h2> {count} </h2>

      <button onClick={handleadd}>Add </button>


    </div>
  );
}

export default CountComp;
