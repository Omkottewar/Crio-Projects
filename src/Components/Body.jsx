import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const Body = () => {

    const [flags,setFlags] = useState([]);
    
    const fetchData = async()=>{
        try{
            const res = await axios.get('https://xcountries-backend.azurewebsites.net/all');
            setFlags(res.data)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
fetchData()
  return (
    <div className="flex flex-wrap  items-center justify-center  gap-3">
        {
            flags?.map((card)=>{
                // console.log(card)
                return(
                <Cards data={card }/>
                )
                
            })
        }
    </div>
  )
}

export default Body