import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../../App"

const Contact = () => {
    const { setUserName } = useContext(AppContext);
    const [newUserName,setNewUserName] = useState('')
    return(
        <div>
            <input onChange={(e)=>setNewUserName(e.target.value)}/>
            <button onClick={() =>{
                setUserName(newUserName)
            }}>ChangeUserName</button>
        </div>
    )
}
export default Contact