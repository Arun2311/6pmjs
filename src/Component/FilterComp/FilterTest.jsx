import React, { useState } from "react";
import "./style.css"
export default function FilterTest() {
  const [data, setdata] = useState([
    {
      id: 1,
      name: "Gokul",
      dept: "cse",
    },
    {
      id: 2,
      name: "Arun",
      dept: "cse",
    },
    {
      id: 3,
      name: "Tarani",
      dept: "cse",
    },
    {
      id: 4,
      name: "Ajith",
      dept: "mech",
    },
    {
      id: 5,
      name: "vicky",
      dept: "mech",
    },
    {
      id: 6,
      name: "ram",
      dept: "mech",
    },
    {
      id: 7,
      name: "nirmal",
      dept: "ece",
    },
    {
      id: 8,
      name: "raja",
      dept: "ece",
    },
    {
      id: 9,
      name: "NISHANT",
      dept: "ai",
    },
    {
      id: 10,
      name: "SENPAGAM",
      dept: "ai",
    },
  ]);

  const [datarender, setdatarender] = useState(data);

  const department = data.map((da) => da.dept);
  const uniqdata = [...new Set(department)];
  uniqdata.unshift("All");

  const handlefilter = (uniqdep) => {
    if (uniqdep == "All") {
      setdatarender(data);
    } else {
      const filterdata = data.filter((da) => da.dept === uniqdep);
      setdatarender(filterdata);
    }
  };


  return (
    <div>
      <div className="m-4">
        {uniqdata.map((uniqdep) => (
          <span onClick={() => handlefilter(uniqdep)} className="m-3">
            {uniqdep}
          </span>
        ))}
      </div>

      {datarender.map((da, i) => (
        <div key={i} className="m-3">
          <span> {da.id} -- </span>
          <span> {da.name} -- </span>
          <span> {da.dept}</span>
        </div>
      ))}
    </div>
  );
}
