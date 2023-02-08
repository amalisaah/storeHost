import React, { useRef,useEffect } from "react";
import { element, PropTypes } from "prop-types";
import Logo from "../Blog/Components/Logo";
import { sanitize } from "../../../utils/sanitizeUtils";
import Input from "../../Authentication/Components/Input";


const  Footer = (props)=> {
    const ref = useRef(null)
    function handleChange(e){
        const value=e.target.value;
        props.socialChange('val',value)
        console.log(value,props.social)
    }
    function handleClick(e) {
        if(props.template){
        props.socialChange('val','')
        const id = e.target.id;
        const element = document.getElementById('social');
        element.style.display='block';
        props.socialChange('id',id)
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        const temp=props.social.val
        const id = props.social.id
        props.socialChange(id,temp)
        let element = document.getElementById('social');
        element.style.display='none'
    }

    const hidePreview = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            let element = document.getElementById('social');
            // Array.prototype.map.call(elements,element=>{element.style.display='none'})
            element.style.display='none'
        }
    };

    useEffect(() => {
        document.addEventListener('click', hidePreview, true);
        return () => {
            document.removeEventListener('click', hidePreview, true);
        };
    }, []);
    return (
        <>
            <footer className={"bg-black w-full h-[221px] text-center font-Roboto text-white flex justify-around items-center  " + props.className} id='footer'>
             <  div className=' '><Logo className={' font-extrabold text-7xl text-white '+ props.logoClass} logo={props.logo} /></div>
                    <div className='break-words w-[30%] font-light text-lg font-fontOutfit' id={props.textId} contentEditable={props.template} onBlur={props.onBlur}
                            dangerouslySetInnerHTML={sanitize(props.text)}/>
                    <div className='flex flex-col items-end'>
                        <div className={' '+props.socialClass}>
                            <a  onClick={handleClick} href={props.fb}  id='fb' className="fa fa-facebook m-2 bg-white text-black text-xl w-6 text-center"></a>
                            <a  onClick={handleClick} href={props.ig} id='ig' className="fa fa-instagram m-2 text-xl w-6 text-center"></a>
                            <a  onClick={handleClick} href={props.twitter} id='twitter' className="fa fa-twitter m-2 text-xl w-6 text-center"></a>
                        </div>
                    <div className={'font-fontOutfit font-light text-[18px] '+props.customerClass}>Customer care</div>
                    <div className={'font-fontOutfit '+props.teleClass}> <a href="#" className="fas fa-phone m-2 text-xl w-6 text-center"></a><span id={props.telId} contentEditable={props.template} onBlur={props.onBlur}
                            dangerouslySetInnerHTML={sanitize(props.tel)}/></div>
                </div>
                {<form  onSubmit={handleSubmit} id='social' className="hidden" ref={ref}>
                    <Input type="text" label="enter link to media" onChange={handleChange} value={props.social && props.social.val} inputClass='text-black' name='social' id=' ' />
                    <input type="submit" />
                </form>}
                
            </footer>        
        </>
    )
};

Footer.propTypes={
    className: PropTypes.string,
    socialClass: PropTypes.string,
    teleClass: PropTypes.string,
    customerClass: PropTypes.string,
    logoClass : PropTypes.string,
    text: PropTypes.string,
    textId: PropTypes.string,
    tel: PropTypes.string,
    telId: PropTypes.string,
    logo: PropTypes.string,
    onBlur: PropTypes.func,
    template: PropTypes.bool,

    
}

export default Footer