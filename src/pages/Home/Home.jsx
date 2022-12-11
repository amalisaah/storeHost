import React from "react";
import { Link } from "react-router-dom";

const  Home = ()=> {
    return (
        <>
         <h2 className="mt-20 ">Hello Avenger <Link to='/authentication'><strong>click me</strong> </Link> </h2> 
         
        </>
    )
};


export default Home