import React from "react";
import Logo from "../Components/Logo";
import EmailDiv from "../Components/EmailDiv";
import './FactorAuth.css';

const  FactorAuth = (props)=> {

    function  handleSubmit (e) {
        e.preventDefault()
        props.handleSubmit('')
    };
    
    const names=["first","second","third","fourth","fifth","sixth"]

    return (
        <>
            <main className='auth'>               
                <Logo />
                <EmailDiv heading='Authentication' text='You should receive an email shortly' />
                {/* <div className='box mt-11'> */}
                    {/* <form onSubmit={handleSubmit} > */}
                        {/* <div className='val mb-[4.5%]'>
                            {
                                names.map((name,index)=>
                                <input type='text' className="w-[58px] h-[58px] mr-4 rounded-lg text-center "
                                name={name} maxLength={1} pattern='[0-9]' onChange={props.handleChange}
                                value={props.value[name] ? props.value[name] :''} required autoFocus={index===0? true:false} key={index} />)
                            }                    
                        </div>  */}
                        {/* <input type='submit' className='h-11 w-[16%] bg-bgBlue rounded-lg border-none text-white' value={'Login'}/> */}
                        {/* <Submit value={'Check'}  /> */}
                    {/* </form>    */}
                {/* </div> */}
            </main>
        </>
    )
};


export default FactorAuth