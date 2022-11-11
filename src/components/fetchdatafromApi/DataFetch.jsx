import { useState, useEffect } from "react"
import  Axios  from "axios"

const DataFetch = () => {

    const [data,setData] = useState('')

    const handleClick = (excuse) => {
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res) =>{
            setData(res.data[0].excuse)
            console.log(res.data)
        })
    }
    // useEffect(() =>{
    //     handleClick();
    // },[]);
    return(
        <div>
            <h1>Generate An Excuse</h1>
            <button onClick={() => handleClick('party')}>Party</button><br/>
            <button onClick={() => handleClick('family')}>Family</button><br/>
            <button onClick={() =>handleClick('gaming')}>Gaming</button>
            <p>{data}</p>
        </div>
    )
}
export default DataFetch