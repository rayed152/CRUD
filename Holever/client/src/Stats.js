import axios from 'axios';
import React, { useEffect, useState } from "react";


function Stats(){

    const[statsReviewList, setStatsList] = useState([]);


    useEffect(() =>{
        axios.get('http://localhost:3001/api/get').then((response) =>{
            setStatsList(response.data)
        })
    }, [])

    return(
        <div>
            {statsReviewList.map((val)=>{
                return (
                <div>
                    <h3>{val.first_name} {val.last_name} </h3>
                    <ul>
                        <li> {val.ign} </li>
                        <li> {val.tag} </li>
                        <li> {val.fav_agent} </li>
                        <li> {val.fav_map}  </li>
                    </ul>
                     
                     
                     
                     
                </div>
                
                )
            })}
        </div>
    )
}

export default Stats;