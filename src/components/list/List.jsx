import React from 'react'

const List = () => {
    const list =['ajith','surya', 'joe','karti','mia']
    return(
        <div>
            {list.map((name,key) =>{
                return(
                    <h1 key={key}>{name}</h1>
                )
                })}
        </div>
    )
}
export default List