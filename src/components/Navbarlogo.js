import React from "react"
function Navbarlogo(props){
    const {logoName,text} = props.item;
    return(
    <div className="flex justify-start items-center">
        {logoName}<h1>{text}</h1>
    </div>
    )
}
export default React.memo(Navbarlogo);
