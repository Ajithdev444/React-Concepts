import Contact from "./Contact"
import { useContext } from "react"
import { AppContext } from "../../App"

const Profile = () => {
    const { userName } = useContext(AppContext)
    return(
        <div><p>profile page and user is:{userName}</p>
        <Contact />
        
        
        </div>

    )
}
export default Profile