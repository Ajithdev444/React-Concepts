import { useQuery } from '@tanstack/react-query'
import  Axios  from 'axios'
 const Home = () =>{

  const { data: catData, isLoading, isError,refetch } = useQuery(['cat'], async() => {
    return Axios.get('https://catfact.ninja/fact').then((res) => 
      res.data)
  })

  if(isLoading){
    return <h1>isLoading</h1>
  }
  if(isError) {
    return <h1>somethig went wrong</h1>
  }

    return(
        <div>
          home page
          <p>{catData?.fact}</p> 
          <button onClick={refetch}>updateData</button>
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