import React, { useState } from "react";

var count = 1;
const DetailForm = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");

  const [email, setemail] = useState("");

  const [ishide, setishide] = useState(false);

 

  const handle = () => {
    setishide(true);
  };

  return (
    <div className="ms-4 mt-4">
      {count}
      {!ishide ? (
        <div>
          <h1>Form</h1>
          <input onChange={handlename} placeholder="enter Name" />
          <br></br>
          <br></br>
          <input onChange={handleage} placeholder="enter Age" />

          <br></br>
          <br></br>

          <input onChange={handleemail} placeholder="enter email" />

          <br></br>
          <br></br>

          <button onClick={handle}>Submit</button>
        </div>
      ) : (
        <div>
          Name : {name}
          <br></br>
          Age : {age}
          <br></br>
          Email : {email}
        </div>
      )}
    </div>
  );
};

export default DetailForm;
