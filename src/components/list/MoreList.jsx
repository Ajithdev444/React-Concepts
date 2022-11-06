import React from 'react'

const MoreList = () => {

    const users = [
        { name: 'ajithdev' , age : 22},
        { name:'anila', age:20},
        { name:'rugmini', age:50},
        { name: 'chandran' , age :60}
    ]
    return(
        <div>
            {users.map((user) =>{
                return(
                    <Data name={user.name} age={user.age}/>
                )
            })}
        </div>
    )
}
const Data =(props) =>{
return(
    <div>{props.name} {props.age}</div>
)
}

export default MoreList