import { useState } from "react"

const Color = () => {
    const [colors, setColors] = useState("yellow")
    return(
        <div>
            <button onClick={() => setColors(colors === 'yellow' ? 'blue' : 'yellow')} >Show/Hide</button>
            <h1 style={{color:colors}}>I am Color</h1>
        </div>
    )
}
export default Color