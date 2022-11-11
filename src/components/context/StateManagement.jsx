import { useState } from "react"
// to avoid props drilling
const TopComponent = () => {

    const [state,setState] = useState()
    return(
        <div><MiddleComponent state={state}/></div>
    )
    }
    const MiddleComponent = (state) => {
        return(
            <div><BottomComponent state={state}/></div>
        )
    }
    const BottomComponent = (state) => {
        return(
            <div>{state}</div>
        )
    }
export default TopComponent