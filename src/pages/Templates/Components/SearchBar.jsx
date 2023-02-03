import React from "react";
import PropTypes from "prop-types";

const  SearchBar = (props)=> {
    return (
        <>
            <form onSubmit={()=>{}} className={"shadow-1 w-[26%] h-[38px] flex justify-between items-center text-base text-inherit font-fontRoboto  px-4 "+ props.searchClass}>
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className={"fa fa-search text-2xl border-l-4 my-2 pl-3 " +props.searchButtonClass} style={props.style ? props.style.col : {}}></i></button>
            </form>
        </>
    )
};

SearchBar.propTypes = {
    searchClass : PropTypes.string,
    searchButtonClass : PropTypes.string,
    style : PropTypes.object,

}

export default SearchBar