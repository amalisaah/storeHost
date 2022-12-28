import React, { useContext } from "react";
import useState from "react-usestateref";
import { Outlet } from "react-router-dom";
import { projectDataContext } from "../../Context/projectDataContext";

const  Hosted = ()=> {

    const [projectData,setProjectData,projectDataRef] = useContext(projectDataContext);
    const [hosted,setHosted,hostedRef] = useState({...projectData});
    console.log(projectData)
    console.log(hostedRef.current)

    return (
        <>
            <Outlet context={[hosted,setHosted,hostedRef]} />
        </>
    )
};


export default Hosted