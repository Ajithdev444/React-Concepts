import { useContext } from "react"
import { AppContext } from "../../App"
 const Home = () =>{
  const { userName} = useContext(AppContext)

    return(
        <div>
          <p>home page and user is: :{userName}</p>
       
        </div>
    ) 
}
export default Home

    
{/* <Router>
<div>
  <Link to='/'>Home</Link>
  <Link to='/profile'>Profile</Link>
  <Link to='/contact '>Contact</Link>
</div>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='*' element={<Error/>}/>
</Routes>
</Router>
*/}