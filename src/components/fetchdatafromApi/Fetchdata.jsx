import { useEffect, useState } from "react"
import Axios from 'axios'

const Fetchdata = () => {
    const [fetchData, setFetchData] = useState('')

    const handleClick = () => {
        Axios.get('https://catfact.ninja/fact').then((res) =>{
            setFetchData(res.data.fact)
        })
    }

    useEffect(() =>{
        handleClick();
    },[])
    
    return(
        <div>
            <button onClick={handleClick}>button</button>
            <p>{fetchData}</p>
        </div>
    )
}
export default Fetchdata