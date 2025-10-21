import axios from "axios"
import { useEffect, useState } from "react"

const useData = () =>{
    const [gameData,setGameData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios('/data.json')
        .then(data => setGameData(data.data))
        .catch(error=> setError(error))
        .finally(()=> setLoading(false))
    },[])

    return {gameData,loading,error} 
}

export default useData;