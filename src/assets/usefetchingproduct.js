import { useEffect , useState } from "react"

export function useFetchingProducts(){

    const [ loading , setloading ] = useState(true)
    const [ data , setdata ] = useState([])
    const [ error , seterror ] = useState()
        
    
    useEffect(()=>{
        const fetchdata  = async()=>{
            try{
                const data = await fetch("https://dummyjson.com/products")
                const maindata=await data.json();
                setdata(maindata.products)
            }
            catch(error){
                seterror(error)
            }
            finally{
                setloading(false)
            }
        }
        fetchdata()
    },[])
    return {data,loading ,error}
}

