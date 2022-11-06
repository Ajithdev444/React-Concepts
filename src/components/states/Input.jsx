import { useState } from "react"

function Input() {
    const [type, setType] = useState('')
    const handle = (e) => {
        setType(e.target.value)
    }
    return(
        <div>
            <input onChange={handle} type='text'/>
            {type}
        </div>
    )
}
export default Input