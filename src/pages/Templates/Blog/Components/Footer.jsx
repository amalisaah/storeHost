import React from "react";
import { PropTypes } from "prop-types";
import Logo from "./Logo";

const  Footer = (props)=> {
    return (
        <>
            <footer className={"bg-black w-full h-[221px] font-Roboto text-white flex justify-around items-center " + props.className}>
             <  div className=' '><Logo className=' font-extrabold text-7xl ' logo={props.logo} /></div>
                    <div className='break-words w-[30%] font-light text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est purus, ultrices in porttitor
                        in, accumsan non quam.</div>
                    <div className='flex flex-col items-end'>
                        <div className=''>
                            <a href="#" className="fa fa-facebook m-2 bg-white text-black text-xl w-6 text-center"></a>
                            <a href="#" className="fa fa-instagram m-2 text-xl w-6 text-center"></a>
                            <a href="#" className="fa fa-twitter m-2 text-xl w-6 text-center"></a>
                        </div>
                    <div className=''>Customer care</div>
                    <div className=''> <a href="#" className="fas fa-phone m-2 text-xl w-6 text-center"></a>+233 00 000 0000</div>
                </div>
            </footer>        
        </>
    )
};

Footer.propTypes={
    className: PropTypes.string,

    
}

export default Footer