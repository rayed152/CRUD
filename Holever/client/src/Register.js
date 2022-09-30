import { Axios } from "axios";
import { useState,useCallback } from "react";
import axios from 'axios'


function Register(){
    const[usernameReg, setusernameReg] = useState('');
    const[passwordReg, setpasswordReg] = useState('');

    
    
    return(
        <div>
            <form>
                <label>User Name</label>
                <input type="text" name="username" />
                
                <label>Password</label>
                <input type="password" name="password"  />
            </form>
        </div>
    )
}

export default Register;