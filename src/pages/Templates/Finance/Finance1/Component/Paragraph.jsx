import React from "react";
import PropTypes from 'prop-types';
import { sanitize } from "../../../../../utils/sanitizeUtils";

const  Paragraph = (props)=> {
    return (
        <>
            <div className='para flex flex-col justify-center w-[43.4%]'>
                <h2 id={props.headerId} className={"font-bold text-[45px] leading-[62.74px] text-black "+props.className} contentEditable onBlur={props.onBlur}
                dangerouslySetInnerHTML={sanitize(props.header)} style={props.style.header} />
                <p id={props.paraId} contentEditable onBlur={props.onBlur}
                dangerouslySetInnerHTML={sanitize(props.para)}/>
            </div>
        </>
    )
};

Paragraph.propTypes = {
    headerId: PropTypes.string.isRequired,
    paraId: PropTypes.string.isRequired,
    header: PropTypes.string,
    para: PropTypes.string,
    style: PropTypes.object,
}

export default Paragraph