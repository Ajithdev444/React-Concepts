import { useState } from "react"
const useCounter = (initialVal = 0) =>{
    const [counter, setCounter] = useState(initialVal)
    const increase = () => {
        setCounter((prev) => prev +1 )
    }
    const decrease = () => {
        setCounter((prev) => prev - 1)
    }
    const setZero = () => {
        setCounter(0)
    }
    return { increase, decrease, setZero, counter}
}
export default useCounter