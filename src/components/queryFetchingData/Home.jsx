import { useQuery } from '@tanstack/react-query'
import  Axios  from 'axios'
 const Home = () =>{

  const { data: catData, isLoading, isError,refetch } = useQuery(['cat'], () => {
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