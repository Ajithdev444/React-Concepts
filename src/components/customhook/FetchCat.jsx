import useGetCat from "./useGetCat"
const FetchCat = () => {
    const { data, refetchData, isCatLoading } = useGetCat()
    if(isCatLoading) return <h2>loading...</h2>
    
    return(
        <div>
            <h1>{data?.fact}</h1>
            <button onClick={refetchData}>refetch</button>
         </div>
    )
}
export default FetchCat