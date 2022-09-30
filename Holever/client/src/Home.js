import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function Home() {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[ign, setIgn] = useState('');
    const[tag, setTag] = useState('');
    const[favAgent, setFavAgent] = useState('');
    const[favMap, setFavMap] = useState('');

 


    const submitStats = () => {
        axios.post('http://localhost:3001/api/insert', {
            firstName: firstName, 
            lastName: lastName,
            ign: ign, 
            tag: tag, 
            favAgent: favAgent, 
            favMap:favMap,
        }).then(()=>{
            alert('successful insert');
        })
    };

    return (
        <div className='App'>
           <h1>Holever Player Stats</h1>
            <div className="form">
                <label>First Name</label>
                <input type="text" name="firstName" onChange={(e)=>
                    setFirstName(e.target.value)
                }/>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={(e)=>
                    setLastName(e.target.value)
                }/>
                <label>In Game Name</label>
                <input type="text" name="ign" onChange={(e)=>
                    setIgn(e.target.value)
                }/>
                <label>In Game Tag</label>
                <input type="text" name="tag" onChange={(e)=>
                    setTag(e.target.value)
                }/>
                <label>Favourite Agent</label>
                <input type="text" name="favAgent" onChange={(e)=> 
                    setFavAgent(e.target.value)
                }/>
                <label>Favourite Map</label>
                <input type="text" name="favMap" onChange={(e)=>
                    setFavMap(e.target.value)
                }/>

                
                <button onClick={submitStats}>Submit</button>
            </div>
        </div>
    )
}

export default Home;