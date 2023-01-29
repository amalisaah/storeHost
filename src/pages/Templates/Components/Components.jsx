import React from "react";
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';
import { GithubPicker } from 'react-color';
import Arrow from "./Arrow";
import Color from "./Color";

const  Components = (props)=> {
    console.log(props.style)
    function handleClick(item,val) {
        props.changeStyle(item,val);
        console.log(val)
    }
    // handleChangeComplete = (color) => {
    //     this.setState({ background: color.hex });
    //   }
    return (
        <>
            <div  className='w-[300px] ml-2 bg-[#f6f6f6b3] fixed top-24 px-8 pt-[36.91px] z-10 cursor-pointer '>
                <div className=' relative'>
                    
                        <div onClick={()=>{handleClick('header',{fontSize:'64px'})}} className='fontRoboto text-extrabold text-[24.61px] leading-[36.91px]  hover:bg-[#f6f6f6b4] '>H1 Heading 64px</div>
                        <div onClick={()=>{handleClick('header',{fontSize:'48px'})}} ><h2 className='fontRoboto text-bold text-[22.15px] leading-[33.22px] hover:bg-[#f6f6f6b4]  ' >H2 Heading 48px</h2></div>
                        <div onClick={()=>{handleClick('header',{fontSize:'24px'})}} ><h3 className='fontRoboto text-semibold text-[19.69px] leading-[29.53px] hover:bg-[#f6f6f6b4] '>H3 Heading 24px</h3></div>
                        <div onClick={()=>{handleClick('header',{fontSize:'16px'})}} ><h4 className='fontRoboto text-semibold text-[14.78px] leading-[22.15px] hover:bg-[#f6f6f6b4]  mb-4 '>H4 Heading 16px</h4></div>
                    
                    <Arrow onClick={props.colorVisibility} selector='header' className='absolute right-1 top-[30%]' />
                    {(props.colorVisible.visible && props.colorVisible.selector==='header') ? <Color selector='header' changeStyle={props.changeStyle} className='top-[40px] left-[280px]' />: null}
                </div>

                <div className='bg-fontGrayW h-[1px] my-5 '></div>
                
                <div className='flex items-center'>
                    <GithubPicker triangle="hide" width="90%" onChange={(color)=>{handleClick('col',{color:color.hex})}}/>
                    <Arrow onClick={props.colorVisibility} selector='col' />
                    {(props.colorVisible.visible && props.colorVisible.selector==='col' )? <Color selector='col' changeStyle={props.changeStyle} />: null}
                </div>

                <div className='bg-fontGrayW h-[1px] my-5 '></div>

                {/* {props.colorVisible ? <div className='absolute left-[320px] top-[90px]'>
                    <SketchPicker  onChange={(color)=>{handleClick('header',{color:color.hex})}}/>
                </div>: null} */}
                
            </div>
        </>
    )
};

Components.propTypes = {
    changeStyle: PropTypes.func.isRequired,
    colorVisibility: PropTypes.func.isRequired,
    colorVisibile: PropTypes.bool,
}

export default Components