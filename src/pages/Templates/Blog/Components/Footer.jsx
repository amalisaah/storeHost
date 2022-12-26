import React from "react";

const  Footer = (props)=> {
    return (
        <>
            <footer className="bg-black w-full flex ">
                {props.children}
            </footer>        
        </>
    )
};


export default Footer