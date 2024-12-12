import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card'
import { useSelector } from 'react-redux';

const PageList = ({apiPath}) => {

   const {data} = useFetch(apiPath);
   const count = useSelector((state)=>state.users.value)
   

  return (
    <div>
            <div style={{display: "flex",flexWrap: "wrap",gap: '10px',justifyContent: "space-evenly"}}>
             {
                data.map((product,i)=>(
                    <Card key={i} product={product}  />
                ))
             }
        </div>
      
    </div>
  )
}

export default PageList