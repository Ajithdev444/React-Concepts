import PropTypes, { arrayOf, bool } from 'prop-types'
const Person = (props) => {
    return(
        <div>
            <h1>Name : {props.name}</h1>
            <h1>Age : {props.age}</h1>
            <h1>email: {props.email}</h1>
            <h1>This person {props.isMarried ? 'is' : 'is not'} Married </h1>
            <div><h1>Friends:</h1>{props.friends.map((friend) =>(
                <h1>{friend}</h1>
            ))}</div>
        </div>
    )
}
Person.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    isMarried: bool,
    friends: PropTypes.arrayOf(PropTypes.string)
}
export default Person