import { useState } from "react"
import Text from "./Text"

const Neweffect = () => {
    const [showText, setShowText] = useState(false)
    
    return(
        <div>
            <button onClick={() => setShowText(!showText)}>ShowText</button>
            {showText && <Text/>}
        </div>
    )
}
export default Neweffect