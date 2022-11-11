import  useToggle  from "./useToggle"

const CustomHook = () => {     
    const [ visible , toggle] = useToggle()
    return(
        <div>
            <button onClick={toggle}>
            {visible ? 'hide' : 'show'} 
            </button>
            {visible && <h1>HideText</h1>}

          
        </div>
    )
}
export default CustomHook