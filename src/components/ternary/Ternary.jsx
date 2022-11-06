import React from 'react'

const Ternary = () => {

    const age =1;
    const isRed = true;
    return(
        <div>
            {age >= 18 ?<h1>overage</h1> : <h1>underage</h1>}
        <h1 style={{color: isRed ?'red':'blue',backgroundColor:'yellow'}}>hello i am color</h1>       
        {isRed && <button>button</button>}
        </div>

        
    )
}
export default Ternary