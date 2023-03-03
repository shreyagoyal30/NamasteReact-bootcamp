import React from 'react'
import ReactDOM from 'react-dom/client'
import HeaderComponent from '../Component/HeaderComponent.js'
import BodyComponent from '../Component/BodyComponent.js'
import * as Constants from '../Constants/constants.js'
import {useState,useEffect} from 'react'

const App =()=>{
    //data is empty initially and as useEffect is applied we get the data and it is set to setUser.
    const [user,setUser] = useState([]);  
    const [filteredUser,setFilteredUser] = useState([]);
    
    useEffect(()=>{
        userData();
    },[]);

 /*function to fetch github api */

    async function userData(){
        let response = await Promise.all(
            Constants.userList.map(async(item) => {
              const userInfo = await fetch(`https://api.github.com/users/${item}`);
              const jsonData = await userInfo.json();
              return jsonData;
            }))
            setUser(response);   
            setFilteredUser(response);   
    }
    return(
        <div>
        <HeaderComponent user={user} setFilteredUser={setFilteredUser}/>
        <div id="class-container">
        <BodyComponent filteredUser={filteredUser} />
        </div>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);