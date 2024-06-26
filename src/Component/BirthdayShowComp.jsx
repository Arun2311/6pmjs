import React, { useState } from "react";
import BirthdayData from "../data";
import { useNavigate } from "react-router-dom";

function BirthdayShowComp() {
  const navigate = useNavigate();

  const [birthdata, setbirthdata] = useState(BirthdayData);

  const handleempty = () => {
    setbirthdata([]);
  };

  const handlnavigate = () => {
    navigate("/filter", { state: { data: "checking", arun: "good" } });
  };

  return (
    <div>
      <h1>Birthday List</h1>

      <div>
        <h1>{birthdata.length} Birthday Todays</h1>

        {birthdata.map((data) => (
          <div>
            <img height={200} width={200} src={data.image} />
            <h1>{data.name}</h1>
            <h3>{data.age} years</h3>
          </div>
        ))}

        <button onClick={handleempty}>Clear All</button>

        <button onClick={handlnavigate}>GO</button>
      </div>
    </div>
  );
}

export default BirthdayShowComp;
