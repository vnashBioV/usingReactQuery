import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () =>{
    return axios.get('http://localhost:4000/superhero')
}

export default function RQSuperHeroes() {

    const onSuccess = () =>{
        console.log("Perform side effect after data fetching")
    }

    const onError = () =>{
        console.log("Perform side effect after encoutering error")
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
        'super-heroes', 
        fetchSuperHeroes,
        {  
            onSuccess,
            onError
        }
    )

    console.log({isLoading, isFetching})

    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }

    if(isError){
            return <h2>{error.message}</h2>
    }

    return (
      <>
        <h2>RQSuperHeroes</h2>
        <button onClick={refetch}>Fetch heroes</button>
        {
            data?.data.map((hero) => {
                return (
                    <div key={hero.name}>{hero.name}</div>
                )
            })
}
      </>
    )
}