import { useEffect, useState } from "react"


const useFetch = (apiPath) => {

  const [data, setData] = useState([])
  
  let dataUrl = `https://fakestoreapi.com/${apiPath}`

  useEffect(()=>{
   const fetchProducts = async ()=>{
      let response = await fetch(dataUrl)
      let result = await response.json()
      setData(result)
   }
   fetchProducts()
  },[dataUrl])

  return {data}
}

export default useFetch