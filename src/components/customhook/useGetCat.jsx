import { useQuery} from '@tanstack/react-query'
import { Axios } from 'axios'
const useGetCat = () => {
    const { data, refetch,isLoading: isCatLoading} = useQuery(['cat'], async() => {
        Axios.get('https://catfact.ninja/fact').then((res) =>{
            res.data
        })
    })
    const refetchData = () => {
        refetch()
    }
    return { data, refetchData , isCatLoading }
}
export default useGetCat