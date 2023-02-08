import React, { useContext, useRef, useEffect } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import preview1 from "../../../../assets/images/Ecommerce/Landing page ecom1.png";
import template1 from "../../../../assets/images/Ecommerce/icon.png";
import Button from "../../../../Components/Button";

const  Ecommerce = ()=> {

    const navigate = useNavigate();
    const [handleClearName] = useOutletContext();
    const ref = useRef(null);
    const hidePreview = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            let element = document.getElementsByClassName('preview');
            element[0].style.display='none';
        }
    };

    useEffect(() => {
        document.addEventListener('click', hidePreview, true);
        return () => {
            document.removeEventListener('click', hidePreview, true);
        };
    }, []);

    function showPreview(e) {
        let element = document.getElementsByClassName('preview')
        element[0].style.display='block';
    }

    return (
        <>
          <div className='w-[full] flex justify-start pl-10'>
                <div className='font-fontRoboto text-xl text-center w-[30%]'  >
                    <div className='preview' ref={ref} style={{display:'none'}}>
                        <img src={preview1} alt='review' className=" absolute w-5/6 left-[7%] top-[176px] "  />

                        <Button value="Edit" className=' bg-darkBlue font-fontPoppins w-[156px] h-[46px] rounded-none fixed right-10 bottom-20' onClick={()=>{
                        handleClearName()
                        navigate('/template/ecom/ecomHome')}
                        } />
                    </div>
                    <Link>
                        <img src={template1} alt={'finance'} className='w-full max-h-[240px] min-w-[28%] border-[#59AFFF] hover:border-2 shadow-1' onClick={showPreview} role='icon'/>
                    </Link>
                    Ecommerce
                    <div className=''></div>
                    
                </div>
            </div>  
        </>
    )
};


export default Ecommerce