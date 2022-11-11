import useGetCat from "./useGetCat"
const FetchCat = () => {
    const { catData, refetchData, isCatLoading } = useGetCat()

    if(isCatLoading) return <h2>loading...</h2>
    
    return(
        <div>
            <button onClick={refetchData}>refetch</button>
            <h1>{catData?.fact}</h1>
         </div>
    )
}
export default FetchCat