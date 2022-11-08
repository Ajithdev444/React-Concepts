import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const Countersadd = () => {
        setCount(count+1)
    }
    const Counterssub =() =>{
        setCount(count-1)
    }
    return(
        <div style={{marginLeft: '20px', fontSize:'50px'}}>
            <button onClick={()=>Counterssub(count)}>-</button>
            <button>{count}</button>
            <button onClick={() => Countersadd(count)}>+</button>
        </div>
    )
}
export default Counter