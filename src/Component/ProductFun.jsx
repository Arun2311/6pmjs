import React, { useEffect, useState } from "react";

// useState

function ProductFun({ name, nametwo }) {
  const [data, setdata] = useState([]);

  const [count, setcount] = useState(0);

  useEffect(() => {
    handleget();
  }, [count]);

  const handleget = async () => {
    let response = await fetch("https://fakestoreapi.com/products");

    const prod = await response.json();
    setdata(prod);
  };

  const handleadd = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h1>Product List {count}</h1>
      {name},,,,,,,,,,,,,,,,,,,,
      {nametwo}
      <button onClick={handleadd}>add</button>
      <div className="row">
        {data.slice(0,10).map((da, i) => (
          <div className="col-3" key={i}>
            <div className="card">
              <img src={da.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{da.title}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                 {da.price}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="btn btn-success" onClick={handleget}>
        Get
      </button> */}
    </div>
  );
}

export default ProductFun;
