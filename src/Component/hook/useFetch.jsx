import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) =>{

    const [data,setdata] =  useState([])
const [loading ,setloading] =  useState(false)

    useEffect(() =>{
        apifetch()
    },[url])

    const apifetch = async () =>{
        setloading(true)
        const reposne   = await axios.get(url)

        
        setdata(reposne)

        setloading(false)

    }
    return {data,loading}

}