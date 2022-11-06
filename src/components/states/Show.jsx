import { useState } from "react"

function Show(){
    const [show, setShow] = useState(true)
    return(
        <div>
            <button onClick={() =>setShow(!show)}>Show/Hide</button>
           {show && <h1>hai i am ajith</h1>}
            
        </div>
    )
}
export default Show