import { useQuery} from '@tanstack/react-query'
import  Axios  from 'axios'
const useGetCat = () => {
    const {data: catData, refetch,isLoading: isCatLoading} = useQuery(['cat'], async () => {
       return Axios.get('https://catfact.ninja/fact').then((res) =>
            res.data
        )
    })
    const refetchData = () => {
        alert('you want to refetch')
        refetch()
    }
    return { catData, refetchData , isCatLoading }
}
export default useGetCat