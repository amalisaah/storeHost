import React from "react";
import { PropTypes } from "prop-types";
import Logo from "../Blog/Components/Logo";
import { sanitize } from "../../../utils/sanitizeUtils";

const  Footer = (props)=> {
    return (
        <>
            <footer className={"bg-black w-full h-[221px] font-Roboto text-white flex justify-around items-center " + props.className} id='footer'>
             <  div className=' '><Logo className=' font-extrabold text-7xl text-white ' logo={props.logo} /></div>
                    <div className='break-words w-[30%] font-light text-lg font-fontOutfit' id={props.textId} contentEditable={props.template} onBlur={props.onBlur}
                            dangerouslySetInnerHTML={sanitize(props.text)}/>
                    <div className='flex flex-col items-end'>
                        <div className=''>
                            <a href="#" className="fa fa-facebook m-2 bg-white text-black text-xl w-6 text-center"></a>
                            <a href="#" className="fa fa-instagram m-2 text-xl w-6 text-center"></a>
                            <a href="#" className="fa fa-twitter m-2 text-xl w-6 text-center"></a>
                        </div>
                    <div className='font-fontOutfit'>Customer care</div>
                    <div className='font-fontOutfit'> <a href="#" className="fas fa-phone m-2 text-xl w-6 text-center"></a><span id={props.telId} contentEditable={props.template} onBlur={props.onBlur}
                            dangerouslySetInnerHTML={sanitize(props.tel)}/></div>
                </div>
            </footer>        
        </>
    )
};

Footer.propTypes={
    className: PropTypes.string,
    text: PropTypes.string,
    textId: PropTypes.string,
    tel: PropTypes.string,
    telId: PropTypes.string,
    logo: PropTypes.string,
    onBlur: PropTypes.func,
    template: PropTypes.bool,

    
}

export default Footer