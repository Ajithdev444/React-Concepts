import React, { useState } from "react";



const Folder = ({ datas }) => {

    const [state,setState] = useState(false)
    if(datas.isFolder){
    return(
        <div style={{padding:'20px',marginLeft:'100px'}}>
            <span onClick={() =>setState(!state)}>{datas.name} <br/> </span>
            <div style={{ display: state ? 'block' : 'none'}}>
                {datas.items.map((obj) => (
                    <Folder key={obj.name} datas={obj}/>
                ))}
            </div>
        </div>
    )
  } else{
    return(
        <span>{datas.name} <br/></span>
    )
  }
}
export default Folder