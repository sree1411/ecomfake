import { useEffect, useState } from "react"

 

const useFetch = (apiPath) => {
    const [data, setData] = useState([])
     
    let dataUrl = `https://fakestoreapi.com/${apiPath}`
     
     useEffect(()=>{
       let fetchData = async ()=>{
         let response = await fetch(dataUrl)
         let result = await response.json();
         setData(result)
       }
       fetchData()
     },[dataUrl])


  return {data}
}

export default useFetch