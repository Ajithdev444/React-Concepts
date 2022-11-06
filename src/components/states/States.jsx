import { useState } from "react";

const States = () => {

    const [age, setAge] = useState(0)
   
    const increaseAge = () => {
        setAge(age +1 )
    }
    return(
        <div>
            <h1>{age}</h1>
            <button onClick={increaseAge}>increament</button>
            
        </div>
    )
}
export default States