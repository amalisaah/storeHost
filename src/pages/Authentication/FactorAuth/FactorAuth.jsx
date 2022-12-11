import React from "react";
import './FactorAuth.css';

const  FactorAuth = ()=> {
    return (
        <>
            <main className='auth'>
                <div className="logo">Storefront</div>
                <h1>Authentication</h1>
                <p>You should receive an email shortly.</p>
                <div className='box'>
                    <form method='' action=''>
                        <div className='val'>
                            <input type='text' maxLength={1} required/>
                            <input type='text' maxLength={1} required/>
                            <input type='text' maxLength={1} required/>
                            <input type='text' maxLength={1} required/>
                            <input type='text' maxLength={1} required/>
                            <input type='text' maxLength={1} required/>
                        </div>
                        
                        <input type='submit' value={'Login'}/>
                    </form>   
                </div>
            </main>
        </>
    )
};


export default FactorAuth