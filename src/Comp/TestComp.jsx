import React, { useEffect, useState } from "react";

function TestComp() {
  const [apidata, steapidata] = useState([]);

  useEffect(()=>{
    handleapi()
  },[])

  const handleapi = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    steapidata(data);
  };

  return (
    <div>
      <h2> YTesghhbcd </h2>

      {apidata.map((da) => (
        <div>
            <img src={da.image}/>
            
            {da.price}
            <h1>{da.title}</h1>
        
        </div>
      ))}

      {/* <button onClick={handleapi}>Click API</button> */}
    </div>
  );
}

export default TestComp;
