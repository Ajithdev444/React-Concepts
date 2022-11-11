import useCounter from "./useCounter"

const Counters = () => {
    const {increase, decrease, setZero, counter} =  useCounter()
    
    return(
        <div>
            {counter}
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={setZero}>SetToZero</button>
        </div>
    )
}
export default Counters