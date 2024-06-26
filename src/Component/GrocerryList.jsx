import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function GrocerryList() {
  // http://localhost:3000/todoList

  const [inputdata, setinputdata] = useState("");
  const [databe, setdatabe] = useState([]);

 

  const handleinput = (e) => {
    setinputdata(e.target.value);
  };




  useEffect(() => {
    handleget();
  }, []);

  const handleget = async () => {
    let response = await axios.get("http://localhost:3000/todoList");
    console.log(response.data);
    setdatabe(response.data);
  };

  const handleadd = async () => {
    let body = {
      foodname: inputdata,
    };
    let response = await axios.post("http://localhost:3000/todoList", body);

    handleget();
  };

  const handledelete = async(id) =>{
    let response = await axios.delete(`http://localhost:3000/todoList/${id}`);

console.log(response);

    
    if(response.status ==200){
      alert("s deleted")
    }else{
      console.log("somethin");
    }


    handleget();
  }


  const handleedit = async (i,id)=>{

    const update = prompt("enter u r ask" ,databe[i].foodname)


    let body = {
      id:id,
      foodname: update,
    };

    let response = await axios.put(`http://localhost:3000/todoList/${id}` ,body);
    handleget();

  }

  return (
    <div>
      <input onChange={handleinput} className="m-4" placeholder="Type List" />
      <button onClick={handleadd} className="btn btn-primary">
        Submit
      </button>

      <ol>
        {databe.map((food, i) => (
          <div key={i}>
               <div className="d-flex p-4 ms-3">
            <li className="me-4">{food.foodname}</li>
         
            <a className="me-4" onClick={()=>{handledelete(food.id)}}><MdDelete /></a>

            <a  onClick={()=>{handleedit(i,food.id)}}><FaEdit /></a>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
}
