import React, { useContext, useRef, useEffect } from "react";
// import { useOutletContext } from "react-router-dom";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import template1 from "../../../../assets/images/Blog/Template1.png";
import template2 from "../../../../assets/images/Blog/Template2.png";
import template3 from "../../../../assets/images/Blog/Template3.png";
import preview1 from "../../../../assets/images/Blog/Desktop - 2.jpg";
import preview2 from "../../../../assets/images/Blog/Desktop - 5.png";
import preview3 from "../../../../assets/images/Blog/Desktop - 1.png";
// import desktop from "../../../../assets/images/Blog/Desktop - 1.png"
import Button from "../../../../Components/Button";
const  Blog = ()=> {

    const navigate = useNavigate();
    const [handleClearName] = useOutletContext();

    /*Images of  available templates*/
    const templates = [template1,template2,template3];
    const alts = ['Blog-1','Blog-2','Blog-3'];
    const preview = [preview1,preview2,preview3];

   

    /*Control preview of templates */
    const ref = useRef(null);
    function showPreview(e) {
        e.target.parentNode.parentNode.firstElementChild.style.display='block';
    }

    const hidePreview = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            let elements = document.getElementsByClassName('preview');
            Array.prototype.map.call(elements,element=>{element.style.display='none'})
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
            <div className='w-[full] flex justify-around'>
                {templates.map((template,index)=>
                    <div className='font-fontRoboto text-xl text-center' key={index} >


                        <div className='preview' ref={ref} style={{display:'none'}}>
                            <img src={preview[index]} alt='review' className=" absolute w-5/6 left-[7%] top-[176px] "  />

                            <Button value="Edit" className=' bg-darkBlue font-fontPoppins w-[156px] h-[46px] rounded-none fixed right-10 bottom-20' onClick={()=>{
                            handleClearName()
                            navigate('/template/blog/'+alts[index])}
                            } />
                        </div>
                        <Link >
                            <img src={template} alt={alts[index]} className='w-full  border-[#59AFFF] hover:border-2 shadow-1' onClick={showPreview}/>
                        </Link>
                        {alts[index]}
                    </div>
                )}       
            </div>
            
        </>
    )
};


export default Blog