import { useEffect, useState } from "react"

const Text = () => {
    const [newText, setNewState] = useState('')
    useEffect(()=>{
        console.log('mounted')
        return () => {
            console.log('unmounted')
        }
    },[])
    
    return(
        <div>
            <input onChange={(e) => {
                setNewState(e.target.value)
            }} type='text'/>
            <h1>{newText}</h1>
        </div>
    )
}
export default Text